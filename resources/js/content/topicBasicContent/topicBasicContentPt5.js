Object.assign(CONTENT, {

      /* ==========================================================
     SECTION 3: MAIN TOPIC GUIDES / LESSON CONTENT
     COVERS THE BASIC LESSONS 3.7 - 3.8
     ========================================================== */


     /* ==========================================================
     TOPIC 3.7: If / Else Statements
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
  /* ========================================================= 
   Sub-lesson: 3.7.16 If / Else → logical operators in conditions
 =======================================================*/

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-6-15-0-0': `
    <p>Logical operators are the symbols that combine multiple yes/no checks into a single yes/no answer: <code>&&</code> (AND), <code>||</code> (OR), and <code>!</code> (NOT). They let one <code>if</code> ask about more than one thing at a time.</p>
    <p>Without them, you'd need nested <code>if</code>s for every "this and that" or "this or that" condition. With them, you can express the whole question on one line.</p>
  `,

  /* 0.1 Syntax */
  'topics-6-15-0-1': `
<pre class="language-javascript"><code class="language-javascript">const age = 25;
const hasLicense = true;

if (age >= 18 && hasLicense) {
  console.log("can drive");
}

// prints: "can drive"
// age >= 18 → true
// hasLicense → true
// true && true → true → block runs</code></pre>
    <p>Each side of <code>&&</code> is its own boolean expression. JavaScript evaluates both, then combines them into one final answer that the <code>if</code> reads.</p>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-6-15-0-2': `
<pre class="language-javascript"><code class="language-javascript">const isWeekend = true;
const isHoliday = false;

if (isWeekend || isHoliday) {
  console.log("day off");
}

// isWeekend       → left side: a boolean expression
// ||              → operator: "OR" — true if EITHER side is true
// isHoliday       → right side: another boolean expression
// true || false   → true → block runs

// !isWeekend     → NOT operator flips the boolean
// !true          → false
// !false         → true</code></pre>
    <p><code>&&</code> needs both sides to be true. <code>||</code> needs only one side to be true. <code>!</code> takes one value and flips it.</p>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-6-15-0-3': `
    <p>Three operators, each with a clear truth rule:</p>
<pre class="language-javascript"><code class="language-javascript">// && (AND) — true only when BOTH sides are true
true  && true   // true
true  && false  // false
false && true   // false
false && false  // false

// || (OR) — true when AT LEAST ONE side is true
true  || true   // true
true  || false  // true
false || true   // true
false || false  // false

// ! (NOT) — flips a single boolean
!true   // false
!false  // true</code></pre>

    <p><strong>Short-circuit evaluation:</strong> JavaScript stops as soon as it knows the answer. With <code>&&</code>, if the left side is false, the right side is never even checked. With <code>||</code>, if the left side is true, the right side is skipped.</p>
<pre class="language-javascript"><code class="language-javascript">// Right side is NEVER called — left is already false
if (false && expensiveCheck()) {
  // ...
}

// Right side is NEVER called — left is already true
if (true || expensiveCheck()) {
  // ...
}

// This is useful for guarding against errors:
if (user && user.name) {
  // if user is null/undefined, the && stops there — user.name is never accessed
  console.log(user.name);
}</code></pre>

    <p><strong>Operator precedence:</strong> <code>&&</code> binds tighter than <code>||</code>. When mixing them, use parentheses to make intent clear:</p>
<pre class="language-javascript"><code class="language-javascript">// Without parens — && groups first, then ||
if (a || b && c) {
  // ...
}
// JS reads it as: a || (b && c)

// With parens — explicit grouping
if ((a || b) && c) {
  // ...
}
// totally different meaning — both groupings can produce different results.</code></pre>

    <p>Each side of a logical operator should be a complete expression. A common mistake is writing one comparison with two right-hand values:</p>
<pre class="language-javascript"><code class="language-javascript">// Wrong — looks like "x equals 1 or 2", but isn't
if (x === 1 || 2) {
  // ...
}
// JS reads: (x === 1) || 2 — and 2 by itself is truthy, so block ALWAYS runs

// Right — each side is a full comparison
if (x === 1 || x === 2) {
  // ...
}</code></pre>

    <p>Logical operators don't always return <code>true</code> or <code>false</code> — they return <strong>one of the actual values</strong>. <code>&&</code> returns the first falsy value (or the last value if all are truthy). <code>||</code> returns the first truthy value (or the last value if all are falsy). For most <code>if</code> conditions this doesn't matter — JavaScript will treat the result as truthy/falsy either way.</p>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-6-15-1-0': `
    <p>Real-world conditions almost never depend on just one thing. "User is logged in <em>and</em> verified." "Status is error <em>or</em> timeout." "Item is <em>not</em> archived." Logical operators let you express these compound questions naturally.</p>
    <p>Without them, every "and" would need a nested <code>if</code>, and every "or" would need duplicated branches. With them, the structure of the code matches the structure of the question.</p>
  `,

  /* 1.1 Why use it */
  'topics-6-15-1-1': `
    <p>Each operator captures a specific kind of compound question:</p>
<pre class="language-javascript"><code class="language-javascript">// AND — all conditions must be true
if (user.isLoggedIn && user.isVerified) {
  showDashboard();
}

// OR — any condition is enough
if (status === "error" || status === "timeout") {
  showRetryButton();
}

// NOT — invert a check
if (!cart.isEmpty) {
  showCheckoutButton();
}

// Combined — for more complex rules
if ((user.isAdmin || user.isOwner) && !user.isSuspended) {
  showAdminPanel();
}</code></pre>

    <p>Reading these out loud usually mirrors plain English: "if logged in <em>and</em> verified," "if error <em>or</em> timeout," "if cart is <em>not</em> empty." That's the test for whether your operator choice matches your intent.</p>
  `,

  /* 1.2 Where you use it */
  'topics-6-15-1-2': `
<pre class="language-javascript"><code class="language-javascript">// Permission rules (AND)
if (user.role === "editor" && document.isPublished === false) {
  allowEdit();
}

// Multiple acceptable values (OR)
if (file.type === "jpg" || file.type === "png" || file.type === "gif") {
  uploadImage(file);
}

// Range checks (AND)
if (temperature >= 60 && temperature <= 80) {
  console.log("comfortable");
}

// Inverting checks (NOT)
if (!form.isValid) {
  showErrors();
}

// Safe property access (AND with short-circuit)
if (response && response.data && response.data.user) {
  showProfile(response.data.user);
}

// Multi-criteria filtering
const visiblePosts = posts.filter(function (post) {
  return post.isPublished && !post.isDeleted && post.author === currentUser.id;
});

// Login flow combinations
if ((email !== "" && password !== "") || rememberedToken !== null) {
  attemptLogin();
}</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-6-15-1-3': `
    <p>Think of logical operators as tiny words that join sentences. <code>&&</code> means "and." <code>||</code> means "or." <code>!</code> means "not."</p>
    <p>If you say "I'll go to the park if it's sunny <em>and</em> warm," you need both to be true — sunny alone isn't enough, warm alone isn't enough. That's <code>&&</code>.</p>
    <p>If you say "I'll bring an umbrella if it's raining <em>or</em> snowing," either one is enough to trigger it. That's <code>||</code>.</p>
    <p>If you say "I'll keep the window open if it's <em>not</em> raining," you're flipping a single check from positive to negative. That's <code>!</code>.</p>
    <p>The key insight: each operator turns multiple yes/no questions into one yes/no answer. Whatever that final answer is, that's what the <code>if</code> sees.</p>
  `,

  /* 1.4 Mental model */
  'topics-6-15-1-4': `
    <p>Picture each comparison as a light switch. Logical operators wire them together to control one bulb.</p>
<pre class="language-javascript"><code class="language-javascript">// && — series circuit (both must be ON)
[switch A] ── [switch B] ── 💡
// bulb only lights when BOTH switches are on

// || — parallel circuit (either one is enough)
[switch A] ─┐
            ├─ 💡
[switch B] ─┘
// bulb lights when EITHER switch is on

// ! — inverter
[switch A] ── [NOT] ── 💡
// flips the signal: ON becomes OFF, OFF becomes ON</code></pre>
    <p>When reading a condition, trace each piece down to a true/false, then apply the wiring rule. The "bulb" at the end is what the <code>if</code> branches on.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-6-15-1-5': `
<pre class="language-javascript"><code class="language-javascript">const user = { isLoggedIn: true, isVerified: false };

if (user.isLoggedIn && user.isVerified) {
  console.log("welcome");
} else {
  console.log("please verify your account");
}

// prints: "please verify your account"

// JavaScript is thinking:
// Line 1: register user as an object with two properties.
// Line 3: see if (...) — start evaluating the condition.
//         user.isLoggedIn → true
//         &&: left is true, so we DO need to check the right side
//         user.isVerified → false
//         true && false → false
//         the condition reduces to: if (false)
// Line 4: false is falsy → skip this block.
// Line 5: see else → run this block.
// Line 6: log "please verify your account".</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-6-15-2-0': `
    <p>If a compound condition is doing the wrong thing, log each piece separately to see where the logic breaks down:</p>
<pre class="language-javascript"><code class="language-javascript">const user = { age: 17, hasParentalConsent: true };

console.log("age >= 18:", user.age >= 18);
console.log("hasParentalConsent:", user.hasParentalConsent);
console.log("combined:", user.age >= 18 && user.hasParentalConsent);

if (user.age >= 18 && user.hasParentalConsent) {
  allowSignup();
} else {
  blockSignup();
}

// prints:
//   age >= 18: false
//   hasParentalConsent: true
//   combined: false
//   blockSignup runs

// Now you can see: even though consent is true, the age check fails,
// and AND requires BOTH to be true.
// The bug is the operator choice — should this be || (or)?</code></pre>

    <p>Common signal: the condition <em>looks</em> right but the wrong branch runs. Trace each subcondition individually — the bug is almost always either the operator (AND when you wanted OR) or the precedence (missing parens).</p>
  `,

  /* 2.1 The part that makes it click */
  'topics-6-15-2-1': `
    <p>Logical operators don't change what the <code>if</code> does. The <code>if</code> still just checks one boolean. Logical operators just decide what that one boolean is.</p>
    <p>So <code>if (a && b)</code> isn't really "if a and b are true." It's two steps: first compute <code>a && b</code>, then check if the result is truthy. Once you separate those two steps in your head, complex conditions stop being intimidating — they're just expressions that reduce to a single boolean.</p>
  `,

  /* 2.2 Common confusions */
  'topics-6-15-2-2': `
    <p><strong>Confusion: <code>&&</code> vs <code>||</code> when you need "or"</strong></p>
<pre class="language-javascript"><code class="language-javascript">// Wrong — uses && (and) when you meant || (or)
if (status === "error" && status === "timeout") {
  // ...
}
// status can't be both "error" AND "timeout" at the same time → block NEVER runs

// Right — use ||
if (status === "error" || status === "timeout") {
  // ...
}</code></pre>

    <p><strong>Confusion: shortened comparisons that don't work</strong></p>
<pre class="language-javascript"><code class="language-javascript">// Wrong — looks like "x is 1 or 2"
if (x === 1 || 2) {
  // ...
}
// JS reads: (x === 1) || 2 — and 2 by itself is truthy → block ALWAYS runs

// Right — each side is a full comparison
if (x === 1 || x === 2) {
  // ...
}</code></pre>

    <p><strong>Confusion: operator precedence with mixed && and ||</strong></p>
<pre class="language-javascript"><code class="language-javascript">// Without parens — JS groups && first
if (isAdmin || isOwner && !isSuspended) {
  // ...
}
// reads as: isAdmin || (isOwner && !isSuspended)
// → admins always pass, regardless of whether they're suspended

// With parens — explicit
if ((isAdmin || isOwner) && !isSuspended) {
  // ...
}
// reads as: (admin OR owner) AND not suspended
// → suspended admins are blocked

// Always use parens when mixing — it removes guesswork.</code></pre>

    <p><strong>Confusion: thinking <code>&&</code> and <code>||</code> always return <code>true</code> or <code>false</code></strong></p>
<pre class="language-javascript"><code class="language-javascript">// They return one of the actual values, not always a strict boolean
"hello" && 42        // 42 (last truthy)
0 && "hello"         // 0 (first falsy)
"" || "default"      // "default" (first truthy)
null || undefined    // undefined (last value)

// For if conditions this doesn't matter — JS treats the result as truthy/falsy.
// But if you assign the result, you get the actual value:
const name = inputName || "Anonymous";
// if inputName is "", name becomes "Anonymous".</code></pre>

    <p><strong>Confusion: <code>!</code> on non-boolean values</strong></p>
<pre class="language-javascript"><code class="language-javascript">// ! converts to boolean first, then flips
!"hello"   // false ("hello" is truthy → flipped to false)
!0         // true (0 is falsy → flipped to true)
!null      // true (null is falsy → flipped to true)
![]        // false (an array is truthy → flipped to false)

// Common pattern: !! to convert anything to a real boolean
!!"hello"  // true
!!0        // false
!!null     // false</code></pre>

    <p><strong>Confusion: short-circuiting and side effects</strong></p>
<pre class="language-javascript"><code class="language-javascript">// Right side might NOT run
if (count > 0 && processItems()) {
  // ...
}
// if count is 0, processItems() never runs.
// usually fine — but if you NEED both sides to run, don't put them in the same condition.</code></pre>
  `,

  /* 2.3 Common mistakes */
  'topics-6-15-2-3': `
<pre class="language-javascript"><code class="language-javascript">if (day === "Saturday" && day === "Sunday") {
  console.log("weekend");
}
// day can't be two things at once → block never runs
// fix: use ||
if (day === "Saturday" || day === "Sunday") {
  console.log("weekend");
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">if (color === "red" || "blue" || "green") {
  // ...
}
// "blue" by itself is truthy → block always runs
// fix: each side needs its own full comparison
if (color === "red" || color === "blue" || color === "green") {
  // ...
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">if (a && b || c) {
  // ...
}
// ambiguous — JS groups && first: (a && b) || c
// fix: add parens to show intent
if ((a && b) || c) {
  // ...
}
// or
if (a && (b || c)) {
  // ...
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">if (!user.isLoggedIn || !user.isVerified) {
  blockAccess();
}
// works, but easier to read with the inverse
// fix: combine with && and one !
if (!(user.isLoggedIn && user.isVerified)) {
  blockAccess();
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">if (user.profile.avatar) {
  showAvatar();
}
// crashes if user is null or user.profile is undefined
// fix: chain with && for safe access
if (user && user.profile && user.profile.avatar) {
  showAvatar();
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">if (count = 0 || count > 100) {
  // ...
}
// = is assignment — count gets set to 0, then evaluated against || 100
// fix: use === for comparison
if (count === 0 || count > 100) {
  // ...
}</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-6-15-3-0': `
<pre class="language-javascript"><code class="language-javascript">// AND — all must be true
const isLoggedIn = true;
const isAdmin = true;
if (isLoggedIn && isAdmin) {
  console.log("admin access");
}

// OR — any one is enough
const day = "Saturday";
if (day === "Saturday" || day === "Sunday") {
  console.log("weekend");
}

// NOT — invert a check
const cart = [];
if (!cart.length) {
  console.log("cart is empty");
}

// Combined — admin OR owner, but not suspended
const role = "owner";
const suspended = false;
if ((role === "admin" || role === "owner") && !suspended) {
  console.log("can edit");
}

// Range check
const score = 75;
if (score >= 60 && score < 90) {
  console.log("passing but not excellent");
}

// Safe property access with short-circuit
const user = null;
if (user && user.name) {
  console.log(user.name);
} else {
  console.log("no user");
}

// Inside a function
function canVote(person) {
  return person.age >= 18 && person.isCitizen && !person.isIncarcerated;
}
console.log(canVote({ age: 22, isCitizen: true, isIncarcerated: false })); // true</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-6-15-3-1': `
    <p><strong>Example: file upload validation</strong></p>
<pre class="language-javascript"><code class="language-javascript">function validateUpload(file) {
  const allowedTypes = ["jpg", "png", "pdf"];
  const maxSize = 5 * 1024 * 1024;   // 5 MB

  if (!file) {
    return "No file selected";
  }
  if (!allowedTypes.includes(file.type)) {
    return "File type not supported";
  }
  if (file.size > maxSize) {
    return "File is too large";
  }
  return null;
}</code></pre>

    <p><strong>Example: dark mode rule</strong></p>
<pre class="language-javascript"><code class="language-javascript">function shouldUseDarkMode(user, system) {
  if (user.preference === "dark") {
    return true;
  }
  if (user.preference === "light") {
    return false;
  }
  // user has no preference — fall back to system, only between 8pm and 6am
  const hour = new Date().getHours();
  return system.darkModeAvailable && (hour >= 20 || hour < 6);
}</code></pre>

    <p><strong>Example: search filter combining multiple criteria</strong></p>
<pre class="language-javascript"><code class="language-javascript">function filterProducts(products, query) {
  return products.filter(function (product) {
    const matchesText = product.name.toLowerCase().includes(query.text.toLowerCase());
    const matchesPrice = product.price >= query.minPrice && product.price <= query.maxPrice;
    const matchesStock = !query.inStockOnly || product.stock > 0;

    return matchesText && matchesPrice && matchesStock;
  });
}</code></pre>

    <p><strong>Example: comment permissions</strong></p>
<pre class="language-javascript"><code class="language-javascript">function canDeleteComment(user, comment) {
  if (!user) {
    return false;
  }
  // a user can delete their own comment, OR if they're a moderator/admin
  if (comment.authorId === user.id) {
    return true;
  }
  if (user.role === "moderator" || user.role === "admin") {
    return true;
  }
  return false;
}</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-6-15-3-2': `
    <ul>
      <li><strong>Comparison operators</strong> → produce the booleans that logical operators combine</li>
      <li><strong>Truthy and falsy values</strong> → drive what <code>&&</code> and <code>||</code> actually return</li>
      <li><strong>Operator precedence</strong> → why <code>&&</code> binds tighter than <code>||</code> in mixed expressions</li>
      <li><strong>Short-circuit evaluation</strong> → why some side effects don't run, and how to use it for safe access</li>
      <li><strong>Default values with <code>||</code></strong> → common pattern outside <code>if</code>s for "use this or fall back to that"</li>
      <li><strong>Nullish coalescing (<code>??</code>)</strong> → safer alternative to <code>||</code> when 0 or "" should count as valid</li>
      <li><strong>De Morgan's laws</strong> → <code>!(a && b)</code> equals <code>!a || !b</code> — useful for rewriting conditions</li>
      <li><strong>Optional chaining (<code>?.</code>)</strong> → modern alternative to chained <code>&&</code> for safe property access</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-6-15-3-3': `
    <ul>
      <li>Comparison operators</li>
      <li>Truthy and falsy values</li>
      <li>Operator precedence and parentheses</li>
      <li>Short-circuit evaluation</li>
      <li>Default values with <code>||</code></li>
      <li>Nullish coalescing <code>??</code></li>
      <li>Optional chaining <code>?.</code></li>
      <li>Boolean conversion with <code>!!</code></li>
    </ul>
  `,
  /* ========================================================= 
   Sub-lesson: 3.7.17 If / Else → nested if statements
 =======================================================*/

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-6-16-0-0': `
    <p>A nested <code>if</code> is an <code>if</code> placed <em>inside</em> the body of another <code>if</code>. The outer check has to pass first; only then does the inner check even get evaluated.</p>
    <p>It's how you ask layered questions: "first, is this true? if so, then also check that." Each layer of nesting represents one additional yes/no gate the code has to pass through.</p>
  `,

  /* 0.1 Syntax */
  'topics-6-16-0-1': `
<pre class="language-javascript"><code class="language-javascript">const isLoggedIn = true;
const role = "admin";

if (isLoggedIn) {
  if (role === "admin") {
    console.log("welcome admin");
  }
}

// prints: "welcome admin"
// outer check passes → enter outer block
// inner check runs → also passes → inner block runs</code></pre>
    <p>The inner <code>if</code> is just a regular statement that happens to live inside another <code>if</code>'s block. Nothing special — it follows the same rules as any other <code>if</code>.</p>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-6-16-0-2': `
<pre class="language-javascript"><code class="language-javascript">const order = { paid: true, items: 3 };

if (order.paid) {                  // outer: gate 1
  if (order.items > 0) {           // inner: gate 2 — only checked if gate 1 passed
    shipOrder();                   // body: only runs if BOTH gates passed
  }
}

// outer if    → first gate; if false, the entire structure is skipped
// outer block → contains the inner if
// inner if    → second gate; only evaluated when outer passed
// inner block → only runs when both passed</code></pre>
    <p>If the outer check is false, JavaScript never even looks at the inner check — the whole inner structure is skipped along with the outer block.</p>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-6-16-0-3': `
    <p>Each layer of nesting adds an indent. Standard style is 2 spaces per level:</p>
<pre class="language-javascript"><code class="language-javascript">if (a) {
  if (b) {
    if (c) {
      doSomething();
    }
  }
}
// 3 levels deep — c only runs if a AND b AND c are all true</code></pre>

    <p>The braces matter just as much for nested <code>if</code>s as for regular ones. Without them, you can run into the <strong>dangling else problem</strong> — JavaScript pairs <code>else</code> with the nearest unmatched <code>if</code>, which may not be the one you meant:</p>
<pre class="language-javascript"><code class="language-javascript">// BROKEN — looks like else belongs to the outer if, but it doesn't
if (a)
  if (b)
    doX();
  else
    doY();
// JS reads it as:
//   if (a) {
//     if (b) {
//       doX();
//     } else {
//       doY();    // attached to inner if (b), not outer if (a)
//     }
//   }

// FIXED — braces make scope explicit
if (a) {
  if (b) {
    doX();
  }
} else {
  doY();
}</code></pre>

    <p>Many nested <code>if</code>s can be flattened into a single condition with <code>&&</code>:</p>
<pre class="language-javascript"><code class="language-javascript">// Nested
if (user.isLoggedIn) {
  if (user.isVerified) {
    showDashboard();
  }
}

// Flattened — same behavior, easier to read
if (user.isLoggedIn && user.isVerified) {
  showDashboard();
}</code></pre>

    <p>Nesting is necessary when each layer needs to do something different — for example, when the inner <code>if</code> has its own <code>else</code> branch:</p>
<pre class="language-javascript"><code class="language-javascript">if (user.isLoggedIn) {
  if (user.isVerified) {
    showDashboard();
  } else {
    showVerifyEmailPrompt();    // different fallback at each layer
  }
} else {
  showLoginPrompt();
}</code></pre>

    <p>That can't easily be flattened — the two <code>else</code> branches handle different failure cases.</p>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-6-16-1-0': `
    <p>Some checks only make sense after another check has passed. There's no point asking "is the user verified?" if there's no user logged in. Nested <code>if</code>s let you express that dependency directly — the inner question is only asked once the outer one is settled.</p>
    <p>It also lets each layer have its own response. The outer failure and the inner failure can do completely different things, which is hard to express with a single combined condition.</p>
  `,

  /* 1.1 Why use it */
  'topics-6-16-1-1': `
    <p>Nesting earns its place when the layers each need to react differently — especially when each level has its own <code>else</code>:</p>
<pre class="language-javascript"><code class="language-javascript">function handleCheckout(user, cart) {
  if (user) {
    if (cart.items.length > 0) {
      processPayment(user, cart);
    } else {
      showMessage("Your cart is empty");
    }
  } else {
    redirectToLogin();
  }
}
// three different outcomes:
//   no user            → login redirect
//   user + empty cart  → "cart is empty" message
//   user + items       → process payment
// one flat condition can't say all three things — nesting is the natural fit.</code></pre>

    <p>If the layers don't need separate <code>else</code> branches, flatten with <code>&&</code> instead. Less indentation is almost always easier to read.</p>
  `,

  /* 1.2 Where you use it */
  'topics-6-16-1-2': `
<pre class="language-javascript"><code class="language-javascript">// Permission tree (each layer has its own message)
if (user.isLoggedIn) {
  if (user.role === "admin") {
    if (user.permissions.includes("delete")) {
      deleteRecord();
    } else {
      showMessage("Admins need the 'delete' permission");
    }
  } else {
    showMessage("Only admins can delete");
  }
} else {
  redirectToLogin();
}

// Form submission with field-by-field feedback
if (form.email) {
  if (form.email.includes("@")) {
    submitForm(form);
  } else {
    showError("Email must include @");
  }
} else {
  showError("Email is required");
}

// Game state with situational logic
if (player.isAlive) {
  if (player.hasKey) {
    openDoor();
  } else {
    showHint("You need a key to open this door");
  }
}

// API response handling
if (response) {
  if (response.ok) {
    handleData(response.data);
  } else {
    handleError(response.error);
  }
}
// no point asking response.ok if there's no response at all</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-6-16-1-3': `
    <p>Think of nested <code>if</code>s as questions inside questions, like an automated phone menu. "Press 1 for billing." Once you press 1, you get a new menu: "Press 1 for current bill, press 2 for payment history." You only hear the second menu after answering the first.</p>
    <p>The outer <code>if</code> is the first menu. The inner <code>if</code> is the menu that only opens up when you choose a particular path. If you never get past the first menu, the second one doesn't even matter — you never reach it.</p>
    <p>Each layer of nesting is one more menu deep. Stack too many and it gets confusing fast — same as a real phone tree.</p>
  `,

/* 1.4 Mental model */
  'topics-6-16-1-4': `
    <p>Picture a security checkpoint with two guards. The first guard checks your ID. If your ID isn't valid, you're turned away — you never even reach the second guard. If your ID passes, you walk past and meet the second guard, who checks something else, like your appointment. Only if both guards approve you do you actually get inside.</p>
    <p>That's all a nested <code>if</code> is. The outer condition is the first guard; the inner condition is the second guard standing further back. The second check only happens if the first one passed. If you fail at any guard, the rest don't matter — you stop right there.</p>
    <p>Add a third nested <code>if</code> and you've added a third guard further down the hall. Each layer is one more checkpoint to pass. The action at the very end only runs when every guard along the way has approved you.</p>
  `,


  /* 1.5 Step-by-step walkthrough */
  'topics-6-16-1-5': `
<pre class="language-javascript"><code class="language-javascript">const user = { isLoggedIn: true, isVerified: false };

if (user.isLoggedIn) {
  console.log("user is logged in");
  if (user.isVerified) {
    console.log("verified — granting access");
  } else {
    console.log("not verified — please verify");
  }
} else {
  console.log("please log in first");
}

// prints:
//   user is logged in
//   not verified — please verify

// JavaScript is thinking:
// Line 1: register user object.
// Line 3: see outer if (user.isLoggedIn) → true → enter block.
// Line 4: log "user is logged in".
// Line 5: see inner if (user.isVerified) → false → skip this block.
// Line 7: see inner else → run this block.
// Line 8: log "not verified — please verify".
// Line 10: outer block done. The outer else is skipped (outer if was true).</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-6-16-2-0': `
    <p>If a nested <code>if</code> isn't doing what you expect, log the entry into each layer to see how far the code is getting:</p>
<pre class="language-javascript"><code class="language-javascript">if (user) {
  console.log("entered outer block");
  if (user.profile) {
    console.log("entered inner block");
    if (user.profile.avatar) {
      console.log("avatar found");
      showAvatar(user.profile.avatar);
    }
  }
}

// reading the logs shows exactly which layer the code stopped at —
// no guessing about which check failed.</code></pre>

    <p>Common signal: the inner code never runs even though you "know" the inner condition is true. The outer condition is failing silently. Always log the outer check first.</p>
  `,

  /* 2.1 The part that makes it click */
  'topics-6-16-2-1': `
    <p>A nested <code>if</code> isn't a special construct. It's just an <code>if</code> that lives inside another <code>if</code>'s body — same rules apply at every layer.</p>
    <p>The "nested" part is just the location. JavaScript doesn't have a "nested if" feature; it just runs whatever statements are inside a block, and another <code>if</code> is a perfectly valid statement. Once you see it that way, deep nesting feels less mysterious — it's just blocks all the way down.</p>
  `,

  /* 2.2 Common confusions */
  'topics-6-16-2-2': `
    <p><strong>Confusion: nesting when flattening would work</strong></p>
<pre class="language-javascript"><code class="language-javascript">// Unnecessary nesting
if (user) {
  if (user.isVerified) {
    if (user.hasPaid) {
      grantAccess();
    }
  }
}

// Flatten when there's no separate else for each layer
if (user && user.isVerified && user.hasPaid) {
  grantAccess();
}
// same behavior, half the lines, much easier to read.</code></pre>

    <p><strong>Confusion: dangling <code>else</code></strong></p>
<pre class="language-javascript"><code class="language-javascript">// Without braces, else attaches to the nearest if
if (a)
  if (b)
    doX();
  else
    doY();
// reads as: else belongs to inner if (b), NOT outer if (a)

// With braces — scope is explicit
if (a) {
  if (b) {
    doX();
  } else {
    doY();
  }
}

// Or — if you wanted else for the outer
if (a) {
  if (b) {
    doX();
  }
} else {
  doY();
}</code></pre>

    <p><strong>Confusion: thinking the inner check runs even if the outer fails</strong></p>
<pre class="language-javascript"><code class="language-javascript">if (user) {
  if (user.name) {
    console.log(user.name);
  }
}

// if user is null, the inner check NEVER runs.
// JS doesn't try the inner if "just in case" — outer must pass first.</code></pre>

    <p><strong>Confusion: mixing nested ifs with else if chains</strong></p>
<pre class="language-javascript"><code class="language-javascript">// These look similar but behave differently:

// NESTED — gates that must all pass
if (a) {
  if (b) {
    doX();
  }
}
// runs doX only when both a AND b are true

// CHAIN — alternatives, only one runs
if (a) {
  doX();
} else if (b) {
  doY();
}
// runs doX OR doY, never both, never neither (unless else is added)</code></pre>

    <p><strong>Confusion: deep nesting becoming unreadable</strong></p>
<pre class="language-javascript"><code class="language-javascript">// "Arrow code" — too many layers
if (a) {
  if (b) {
    if (c) {
      if (d) {
        doSomething();
      }
    }
  }
}

// Often cleaner with guard clauses inside a function (early returns)
function tryDoSomething() {
  if (!a) return;
  if (!b) return;
  if (!c) return;
  if (!d) return;
  doSomething();
}
// flat structure, each check stands alone, no rightward drift.</code></pre>
  `,

  /* 2.3 Common mistakes */
  'topics-6-16-2-3': `
<pre class="language-javascript"><code class="language-javascript">if (user.isLoggedIn) {
  if (user.profile.avatar) {
    showAvatar();
  }
}
// crashes if user.profile is undefined — accessing .avatar on undefined throws
// fix: check each layer that could be missing
if (user.isLoggedIn) {
  if (user.profile) {
    if (user.profile.avatar) {
      showAvatar();
    }
  }
}
// or flatten with &&
if (user.isLoggedIn && user.profile && user.profile.avatar) {
  showAvatar();
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">if (a)
  if (b) doX();
  else doY();
// looks like else attaches to the outer if, but it actually attaches to inner b
// fix: always use braces
if (a) {
  if (b) {
    doX();
  } else {
    doY();
  }
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">if (user) {
  if (user.isAdmin) {
    grantAccess();
  } else {
    denyAccess();
  }
}
denyAccess();
// denyAccess() runs even when access was granted — it's outside the if entirely
// fix: move the fallback into an outer else
if (user) {
  if (user.isAdmin) {
    grantAccess();
  } else {
    denyAccess();
  }
} else {
  denyAccess();
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">if (a && b) {
  if (c && d) {
    if (e && f) {
      doSomething();
    }
  }
}
// "arrow code" — readable for a moment, miserable to maintain
// fix: flatten or extract into a function with early returns
function check() {
  if (!(a && b)) return false;
  if (!(c && d)) return false;
  if (!(e && f)) return false;
  doSomething();
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">if (status === "active") {
  if (status === "active") {     // duplicate — never useful
    doStuff();
  }
}
// usually a copy-paste mistake
// fix: remove the inner duplicate</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-6-16-3-0': `
<pre class="language-javascript"><code class="language-javascript">// Two-layer check with different fallbacks
const user = { loggedIn: true, verified: false };
if (user.loggedIn) {
  if (user.verified) {
    console.log("welcome");
  } else {
    console.log("verify your email");
  }
} else {
  console.log("please log in");
}
// prints: "verify your email"

// Three layers, only the deepest runs the action
const car = { hasGas: true, hasKey: true, hasDriver: true };
if (car.hasGas) {
  if (car.hasKey) {
    if (car.hasDriver) {
      console.log("ready to drive");
    }
  }
}

// Nested with an inner else — different messages per layer
function rate(score) {
  if (score >= 0) {
    if (score >= 50) {
      return "passing";
    } else {
      return "failing";
    }
  } else {
    return "invalid score";
  }
}
console.log(rate(75));   // "passing"
console.log(rate(20));   // "failing"
console.log(rate(-5));   // "invalid score"

// Safe property drill-down
const data = { user: { profile: { name: "Alex" } } };
if (data) {
  if (data.user) {
    if (data.user.profile) {
      console.log(data.user.profile.name);
    }
  }
}
// prints: "Alex"</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-6-16-3-1': `
    <p><strong>Example: checkout flow with stage-specific feedback</strong></p>
<pre class="language-javascript"><code class="language-javascript">function startCheckout(user, cart) {
  if (user) {
    if (cart.items.length > 0) {
      if (cart.shippingAddress) {
        proceedToPayment(user, cart);
      } else {
        showAddressForm();
      }
    } else {
      showEmptyCartMessage();
    }
  } else {
    redirectToLogin();
  }
}
// each layer of failure shows the user a different next step.</code></pre>

    <p><strong>Example: comment moderation</strong></p>
<pre class="language-javascript"><code class="language-javascript">function handleCommentSubmit(user, text) {
  if (user) {
    if (!user.isBanned) {
      if (text.length > 0 && text.length <= 500) {
        postComment(user.id, text);
      } else {
        showError("Comment must be 1-500 characters");
      }
    } else {
      showError("Your account is banned from commenting");
    }
  } else {
    showError("You must be logged in to comment");
  }
}</code></pre>

    <p><strong>Example: feature gating with plan + role checks</strong></p>
<pre class="language-javascript"><code class="language-javascript">function canAccessAnalytics(user) {
  if (user) {
    if (user.plan === "pro" || user.plan === "enterprise") {
      if (user.role === "owner" || user.role === "admin") {
        return true;
      }
    }
  }
  return false;
}
// each gate must pass: logged in, paid plan, elevated role.</code></pre>

    <p><strong>Example: form validation with conditional follow-ups</strong></p>
<pre class="language-javascript"><code class="language-javascript">function validateSignup(form) {
  if (form.email) {
    if (form.email.includes("@")) {
      if (form.password) {
        if (form.password.length >= 8) {
          return null;   // all checks passed
        }
        return "Password must be at least 8 characters";
      }
      return "Password is required";
    }
    return "Email must include @";
  }
  return "Email is required";
}</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-6-16-3-2': `
    <ul>
      <li><strong>Logical operators</strong> → flattening multiple nested checks into one condition with <code>&&</code></li>
      <li><strong>Guard clauses</strong> → using early <code>return</code>s to avoid deep nesting inside functions</li>
      <li><strong>Dangling else problem</strong> → why braces matter even more in nested code</li>
      <li><strong>Code blocks and braces</strong> → each layer needs its own braces to keep scope clear</li>
      <li><strong>Optional chaining (<code>?.</code>)</strong> → modern shortcut for safe property drill-down</li>
      <li><strong>Short-circuit evaluation</strong> → <code>&&</code> stops at the first falsy, similar to outer-if-fails behavior</li>
      <li><strong>Function extraction</strong> → moving deeply nested logic into its own function for clarity</li>
      <li><strong>Common mistakes</strong> → arrow code, missing inner braces, redundant duplicates</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-6-16-3-3': `
    <ul>
      <li>Logical operators (especially <code>&&</code>)</li>
      <li>Guard clauses</li>
      <li>Dangling else problem</li>
      <li>Code blocks and braces</li>
      <li>Optional chaining <code>?.</code></li>
      <li>Short-circuit evaluation</li>
      <li>Refactoring deeply nested code</li>
      <li>Early <code>return</code> patterns</li>
    </ul>
  `,
  /* ========================================================= 
   Sub-lesson: 3.7.18 If / Else → guard clauses
 =======================================================*/

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-6-17-0-0': `
    <p>A guard clause is an <code>if</code> at the top of a function that checks for a bad case and exits early — usually with <code>return</code>. It's how you handle "if this isn't right, stop here" before getting to the main logic.</p>
    <p>Instead of wrapping the main work in deeply nested <code>if</code>s that check what's valid, guard clauses flip it around: check what's <em>not</em> valid first, bail out, and let the rest of the function focus on the happy path.</p>
  `,

  /* 0.1 Syntax */
  'topics-6-17-0-1': `
<pre class="language-javascript"><code class="language-javascript">function greet(name) {
  if (!name) {
    return;
  }
  console.log("hello " + name);
}

greet("Alex");   // prints: "hello Alex"
greet("");       // prints nothing — guard exits before the console.log

// the guard:
//   if (!name) return;
// asks: "is name missing? then stop right here."</code></pre>
    <p>The guard runs first, exits if the input isn't usable, and the rest of the function only runs when everything's fine.</p>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-6-17-0-2': `
<pre class="language-javascript"><code class="language-javascript">function processOrder(order) {
  if (!order) {                           // guard 1: missing input
    return;
  }
  if (order.items.length === 0) {         // guard 2: empty cart
    return;
  }
  if (!order.paid) {                      // guard 3: not paid yet
    return;
  }

  // main logic — only runs when all guards passed
  shipOrder(order);
  sendReceipt(order);
}

// guard pattern:
//   if (badCondition) { return; }
// each guard handles one specific failure case
// the function reads top-to-bottom: rejections first, real work last</code></pre>
    <p>Each guard handles a different reason to bail out. Once you're past all of them, the rest of the function can assume the input is valid and just do its job.</p>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-6-17-0-3': `
    <p>Guard clauses only work where <code>return</code> works — meaning <strong>inside a function</strong>. <code>return</code> outside a function is a syntax error:</p>
<pre class="language-javascript"><code class="language-javascript">// Inside a function — works
function doStuff(x) {
  if (!x) {
    return;
  }
  // ...
}

// Outside a function — SyntaxError
if (!someValue) {
  return;   // SyntaxError: 'return' outside of function
}</code></pre>

    <p>For loops, the equivalent of a guard is <code>continue</code> (skip this iteration) or <code>break</code> (exit the loop entirely):</p>
<pre class="language-javascript"><code class="language-javascript">for (const item of items) {
  if (item.deleted) {
    continue;     // skip deleted items, move to next
  }
  process(item);
}</code></pre>

    <p>Guards can return a value, not just exit silently. Common patterns include returning <code>null</code>, an empty value, or an error string:</p>
<pre class="language-javascript"><code class="language-javascript">function getUserName(user) {
  if (!user) {
    return null;
  }
  if (!user.name) {
    return "Anonymous";
  }
  return user.name;
}</code></pre>

    <p>You can also <code>throw</code> from a guard if the input shouldn't be possible at all and you want loud failure instead of silent exit:</p>
<pre class="language-javascript"><code class="language-javascript">function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}</code></pre>

    <p>The braces around guard bodies aren't optional in real-world style — even though a single-statement <code>return</code> works without them, always use braces for consistency and to avoid the brace-less pitfalls covered in earlier lessons.</p>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-6-17-1-0': `
    <p>Without guard clauses, functions tend to grow deep nesting as you add validation. Each new "what if this is missing?" check wraps the existing code in another <code>if</code> layer. After a few iterations, the real logic ends up indented six levels deep and buried inside a pyramid of conditionals.</p>
    <p>Guards flatten that pyramid. Instead of nesting deeper for every check, you reject bad cases at the door and keep the main logic at the top level. The function reads naturally: "stop if this is wrong, stop if that is wrong, otherwise here's the real work."</p>
  `,

  /* 1.1 Why use it */
  'topics-6-17-1-1': `
    <p>Guard clauses are easier to scan than nested validation. Compare:</p>
<pre class="language-javascript"><code class="language-javascript">// Without guards — main logic buried deep
function sendInvite(user, email) {
  if (user) {
    if (user.canInvite) {
      if (email) {
        if (email.includes("@")) {
          // the actual work is way down here
          dispatchInvite(user, email);
        }
      }
    }
  }
}

// With guards — main logic at the top level
function sendInvite(user, email) {
  if (!user) {
    return;
  }
  if (!user.canInvite) {
    return;
  }
  if (!email) {
    return;
  }
  if (!email.includes("@")) {
    return;
  }
  dispatchInvite(user, email);
}</code></pre>

    <p>Both functions do the exact same thing, but the guarded version reads top-to-bottom: each rejection is on its own line, and the main work is right there at the end — not buried four levels deep.</p>
  `,

  /* 1.2 Where you use it */
  'topics-6-17-1-2': `
<pre class="language-javascript"><code class="language-javascript">// Validation at the start of any function
function calculateTotal(items) {
  if (!Array.isArray(items)) {
    return 0;
  }
  if (items.length === 0) {
    return 0;
  }
  return items.reduce(function (sum, item) {
    return sum + item.price;
  }, 0);
}

// Permission checks before the action
function deletePost(user, post) {
  if (!user) {
    return false;
  }
  if (user.id !== post.authorId && !user.isAdmin) {
    return false;
  }
  database.remove(post.id);
  return true;
}

// Early returns from event handlers
function onSubmit(event) {
  event.preventDefault();
  if (form.isSubmitting) {
    return;
  }
  if (!form.isValid) {
    showErrors();
    return;
  }
  submitForm();
}

// API request setup
function fetchUserData(userId) {
  if (!userId) {
    return Promise.reject(new Error("userId required"));
  }
  if (typeof userId !== "string") {
    return Promise.reject(new Error("userId must be a string"));
  }
  return fetch("/api/users/" + userId);
}</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-6-17-1-3': `
    <p>A guard clause is the same idea as a bouncer checking IDs at the door of a club. Before you get to the dance floor, the bouncer checks: "Are you over 21? Do you have ID? Are you on the list?" Anyone who fails gets turned away right there at the door — they never get inside.</p>
    <p>The dance floor is your main logic. The bouncer is your guard clause. By rejecting people at the door, the inside of the club only deals with people who are supposed to be there. You don't have to keep checking IDs once they're already in.</p>
    <p>Same thing with code: rejecting bad inputs at the top of the function means the rest of the function gets to assume everything is valid. No more checking the same things over and over.</p>
  `,

  /* 1.4 Mental model */
  'topics-6-17-1-4': `
    <p>Imagine your function is a small office and the guard clauses are receptionists at the front desk. Someone walks in and says they need help. The first receptionist asks "do you have an appointment?" — no appointment, you're sent away immediately. If you have one, you move to the second receptionist who checks your ID. No ID, sent away. You only reach the actual office worker once you've cleared every desk in the lobby.</p>
    <p>The receptionists handle every possible reason to turn someone away, one at a time. The office worker in the back never has to ask "wait, do you have an appointment?" because they know — anyone who reached them already passed every check at the front. Their job is just to do the actual work.</p>
    <p>That's the whole pattern. Front desk first (the guards), real work last (the main logic). Each guard handles one rejection reason, and the rest of the function trusts that anyone who got past them is good to go.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-6-17-1-5': `
<pre class="language-javascript"><code class="language-javascript">function showProfile(user) {
  if (!user) {
    console.log("no user provided");
    return;
  }
  if (!user.isActive) {
    console.log("user is inactive");
    return;
  }

  console.log("name: " + user.name);
  console.log("email: " + user.email);
}

showProfile(null);
showProfile({ isActive: false, name: "Alex" });
showProfile({ isActive: true, name: "Sam", email: "sam@x.com" });

// prints:
//   no user provided
//   user is inactive
//   name: Sam
//   email: sam@x.com

// JavaScript is thinking (for the third call):
// Line 12: call showProfile with the active user object.
// Line 2: see if (!user) → user exists → false → skip.
// Line 6: see if (!user.isActive) → isActive is true → false → skip.
// Line 11: log "name: Sam".
// Line 12: log "email: sam@x.com".
// Function done.

// For the first call (null):
// Line 2: see if (!user) → !null → true → enter block.
// Line 3: log "no user provided".
// Line 4: return — function exits here, lines below NEVER run.</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-6-17-2-0': `
    <p>If a function is exiting silently and you don't know why, add a log to each guard so you can see which one tripped:</p>
<pre class="language-javascript"><code class="language-javascript">function processPayment(user, amount) {
  if (!user) {
    console.log("guard: no user");
    return;
  }
  if (!user.hasPaymentMethod) {
    console.log("guard: no payment method");
    return;
  }
  if (amount <= 0) {
    console.log("guard: invalid amount");
    return;
  }

  charge(user, amount);
}

processPayment({ hasPaymentMethod: false }, 100);
// prints: "guard: no payment method"
// now you know exactly which gate the input failed at.</code></pre>

    <p>Common signal: the function "does nothing." Almost always means a guard caught the input and exited. Reading the guards in order tells you which condition needs a different input.</p>
  `,

  /* 2.1 The part that makes it click */
  'topics-6-17-2-1': `
    <p>A guard clause isn't a special construct. It's just an <code>if</code> with a <code>return</code> inside it, placed at the top of a function. JavaScript doesn't know it's a "guard" — that's just a name for the pattern.</p>
    <p>The shift is in how you frame validation: instead of wrapping the good case in checks for "is this valid? is this valid? is this valid?", you check for "is this <em>not</em> valid? if so, leave." Same logic, mirror image. The result is flatter code where the main work isn't buried.</p>
  `,

  /* 2.2 Common confusions */
  'topics-6-17-2-2': `
    <p><strong>Confusion: thinking guards are only for errors</strong></p>
<pre class="language-javascript"><code class="language-javascript">function getDisplayName(user) {
  if (!user) {
    return "Guest";          // guard returns a default, not an error
  }
  if (!user.name) {
    return "Anonymous";      // another fallback
  }
  return user.name;
}
// guards can return any sensible default, not just exit.</code></pre>

    <p><strong>Confusion: forgetting the <code>return</code></strong></p>
<pre class="language-javascript"><code class="language-javascript">function deletePost(user, post) {
  if (!user) {
    console.log("not logged in");
    // missing return — code below STILL runs
  }
  database.remove(post.id);   // runs even when user is null!
}

// fix: every guard needs the return
function deletePost(user, post) {
  if (!user) {
    console.log("not logged in");
    return;
  }
  database.remove(post.id);
}</code></pre>

    <p><strong>Confusion: nesting <code>else</code> after a guard (unnecessary)</strong></p>
<pre class="language-javascript"><code class="language-javascript">// Redundant — the return already prevents the else block
function classify(n) {
  if (n < 0) {
    return "negative";
  } else {
    if (n === 0) {
      return "zero";
    } else {
      return "positive";
    }
  }
}

// Cleaner — no else needed when the guard returns
function classify(n) {
  if (n < 0) {
    return "negative";
  }
  if (n === 0) {
    return "zero";
  }
  return "positive";
}</code></pre>

    <p><strong>Confusion: putting guards in the wrong order</strong></p>
<pre class="language-javascript"><code class="language-javascript">function showUserAge(user) {
  if (user.age < 0) {           // CRASHES — user might be null
    return;
  }
  if (!user) {
    return;
  }
  console.log(user.age);
}

// fix: check existence before checking properties
function showUserAge(user) {
  if (!user) {
    return;
  }
  if (user.age < 0) {
    return;
  }
  console.log(user.age);
}
// the order of guards matters — earlier guards protect later ones.</code></pre>

    <p><strong>Confusion: guards can't be used outside functions</strong></p>
<pre class="language-javascript"><code class="language-javascript">// At the top level — SyntaxError
if (!someValue) {
  return;   // SyntaxError: 'return' outside of function
}

// Guards are a function-only pattern.
// Outside a function, you'd use a regular if/else or wrap the code in a function.</code></pre>
  `,

  /* 2.3 Common mistakes */
  'topics-6-17-2-3': `
<pre class="language-javascript"><code class="language-javascript">function send(message) {
  if (!message) {
    console.log("nothing to send");
  }
  dispatch(message);
}
// guard logs the warning but doesn't return — dispatch still runs with empty message
// fix: add the return
function send(message) {
  if (!message) {
    console.log("nothing to send");
    return;
  }
  dispatch(message);
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">function showProfile(user) {
  if (user.name) {
    console.log(user.name);
  }
}
// crashes if user is null — accessing .name on null throws
// fix: guard for the parent first
function showProfile(user) {
  if (!user) {
    return;
  }
  if (!user.name) {
    return;
  }
  console.log(user.name);
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">function checkAccess(user) {
  if (user) {
    if (user.isAdmin) {
      grantAccess();
    } else {
      denyAccess();
    }
  } else {
    denyAccess();
  }
}
// works, but deeply nested when guards would flatten it
// fix: invert with guards
function checkAccess(user) {
  if (!user) {
    denyAccess();
    return;
  }
  if (!user.isAdmin) {
    denyAccess();
    return;
  }
  grantAccess();
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">function divide(a, b) {
  if (b === 0) return;
  return a / b;
}
// silent failure — caller can't tell zero-division from a real result of undefined
// fix: throw or return a clear sentinel value
function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">function processItems(items) {
  if (items === null) {
    return;
  }
  for (const item of items) {
    process(item);
  }
}
// guard only catches null — but items might be undefined, or not an array at all
// fix: a more thorough guard
function processItems(items) {
  if (!Array.isArray(items)) {
    return;
  }
  for (const item of items) {
    process(item);
  }
}</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-6-17-3-0': `
<pre class="language-javascript"><code class="language-javascript">// Simple silent exit
function logName(user) {
  if (!user) {
    return;
  }
  console.log(user.name);
}
logName(null);                    // exits silently
logName({ name: "Alex" });        // logs "Alex"

// Returning a default
function getDisplayName(user) {
  if (!user) {
    return "Guest";
  }
  return user.name;
}
console.log(getDisplayName(null));            // "Guest"
console.log(getDisplayName({ name: "Sam" })); // "Sam"

// Multiple guards, one main action
function publishPost(user, post) {
  if (!user) {
    return false;
  }
  if (!post) {
    return false;
  }
  if (user.id !== post.authorId) {
    return false;
  }
  post.published = true;
  return true;
}

// Throwing for impossible inputs
function squareRoot(n) {
  if (n < 0) {
    throw new Error("Cannot take square root of negative number");
  }
  return Math.sqrt(n);
}

// Loop equivalent — continue instead of return
const numbers = [1, -2, 3, -4, 5];
const positives = [];
for (const n of numbers) {
  if (n <= 0) {
    continue;            // skip non-positives
  }
  positives.push(n);
}
console.log(positives);   // [1, 3, 5]</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-6-17-3-1': `
    <p><strong>Example: form submit handler</strong></p>
<pre class="language-javascript"><code class="language-javascript">function handleSubmit(event) {
  event.preventDefault();

  if (form.isSubmitting) {
    return;     // prevent double-submission
  }
  if (!form.isValid) {
    showValidationErrors();
    return;
  }

  form.isSubmitting = true;
  sendToServer(form.data);
}</code></pre>

    <p><strong>Example: search input handler</strong></p>
<pre class="language-javascript"><code class="language-javascript">function handleSearch(query) {
  if (typeof query !== "string") {
    return;
  }
  if (query.length < 2) {
    clearResults();   // too short to search
    return;
  }
  if (query === lastQuery) {
    return;     // same query as last time — no work to do
  }

  lastQuery = query;
  fetchSearchResults(query);
}</code></pre>

    <p><strong>Example: API route handler</strong></p>
<pre class="language-javascript"><code class="language-javascript">function handleDeleteRequest(request, response) {
  if (!request.user) {
    response.status(401).send("Login required");
    return;
  }
  if (!request.params.id) {
    response.status(400).send("Missing post id");
    return;
  }

  const post = database.find(request.params.id);
  if (!post) {
    response.status(404).send("Not found");
    return;
  }
  if (post.authorId !== request.user.id) {
    response.status(403).send("Not your post");
    return;
  }

  database.remove(post.id);
  response.status(200).send("Deleted");
}</code></pre>

    <p><strong>Example: drag-and-drop handler</strong></p>
<pre class="language-javascript"><code class="language-javascript">function handleDrop(event) {
  event.preventDefault();

  const file = event.dataTransfer.files[0];
  if (!file) {
    return;
  }
  if (!file.type.startsWith("image/")) {
    showError("Only image files are accepted");
    return;
  }
  if (file.size > 5 * 1024 * 1024) {
    showError("File is too large (max 5MB)");
    return;
  }

  uploadFile(file);
}</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-6-17-3-2': `
    <ul>
      <li><strong><code>return</code></strong> → the keyword that makes guard clauses exit early</li>
      <li><strong>Functions</strong> → guards only work inside a function</li>
      <li><strong>Nested if statements</strong> → the deeply-indented pattern guards are designed to flatten</li>
      <li><strong>Logical operators (<code>!</code>)</strong> → guards usually invert their checks with <code>!</code></li>
      <li><strong><code>continue</code> and <code>break</code></strong> → the loop equivalents of guard clauses</li>
      <li><strong><code>throw</code></strong> → for guards that should fail loudly instead of exit silently</li>
      <li><strong>Defaults and fallbacks</strong> → guards can return a sensible default value</li>
      <li><strong>Common mistakes</strong> → forgetting the <code>return</code>, ordering guards wrong</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-6-17-3-3': `
    <ul>
      <li><code>return</code> statements</li>
      <li>Function basics</li>
      <li>Nested if statements (the pattern guards replace)</li>
      <li>Logical NOT (<code>!</code>)</li>
      <li><code>continue</code> in loops</li>
      <li><code>throw</code> and error handling</li>
      <li>Default values and fallbacks</li>
      <li>Refactoring deeply nested code</li>
    </ul>
  `,

  /* ========================================================= 
   Sub-lesson: 3.7.19 If / Else → common mistakes
 =======================================================*/

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-6-18-0-0': `
    <p>This lesson is a roundup of the most frequent <code>if</code>/<code>else</code> mistakes — the ones that show up over and over in real code, even from people who already understand the syntax. Most aren't about not knowing how <code>if</code> works; they're about small habits that produce wrong results without throwing errors.</p>
    <p>Every mistake here has been touched on in earlier lessons. Seeing them all in one place makes them easier to recognize when you're debugging your own code.</p>
  `,

  /* 0.1 Syntax */
  'topics-6-18-0-1': `
<pre class="language-javascript"><code class="language-javascript">// The five most common mistakes, at a glance:

// 1. Using = instead of ===
if (status = "ready") { /* always runs */ }

// 2. Wrong comparison type (== vs ===)
if (count == "0") { /* coercion surprise */ }

// 3. Putting else without an if before it
else (status === "fail") { /* SyntaxError */ }

// 4. Wrong condition order
if (n > 0) { ... } else if (n > 100) { ... }   // n > 100 unreachable

// 5. Missing braces with multiple lines
if (isReady)
  start();
  cleanup();   // always runs — not part of the if</code></pre>
    <p>Each of these is a single-line bug that compiles fine and runs without errors — which is what makes them dangerous. The code looks right; it just does the wrong thing.</p>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-6-18-0-2': `
<pre class="language-javascript"><code class="language-javascript">// Anatomy of the most common bug: = vs ===

if (status = "ready") {     // single = is ASSIGNMENT
  doSomething();
}

// What JavaScript actually does:
//   1. Assign "ready" to status (overwrites whatever it was)
//   2. Evaluate the expression — assignment returns the assigned value: "ready"
//   3. "ready" is a non-empty string, so it's truthy
//   4. The if condition becomes truthy → block ALWAYS runs
//   5. As a side effect, status is now permanently "ready"

if (status === "ready") {   // === is COMPARISON
  doSomething();
}

// What JavaScript actually does:
//   1. Compare status to "ready" without changing anything
//   2. Returns true or false based on the comparison
//   3. The if branches accordingly
//   4. status is unchanged

// the two operators look almost identical but do completely different things.</code></pre>
    <p>The pattern is the same for every mistake on this list: small surface difference, completely different behavior underneath.</p>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-6-18-0-3': `
    <p>Most of these mistakes share a common thread: they don't crash, they just silently do the wrong thing. JavaScript will happily run all of them. Some general rules of thumb that prevent the majority of <code>if</code>/<code>else</code> bugs:</p>

    <p><strong>Always use <code>===</code>, not <code>=</code> or <code>==</code>.</strong> Single <code>=</code> is assignment. Double <code>==</code> does type coercion. Triple <code>===</code> is the only one that actually compares the way you'd expect.</p>

    <p><strong>Always use braces, even for one-liners.</strong> Brace-less <code>if</code>s work, but they break the moment someone adds a second statement, and they create the dangling-else problem. The cost of always typing braces is tiny; the cost of debugging brace-less mistakes is large.</p>

    <p><strong>In an <code>if/else if</code> chain, put the most specific condition first.</strong> JavaScript stops at the first true branch. If a wider condition appears before a narrower one, the narrower one becomes unreachable.</p>

    <p><strong>Each side of <code>||</code> needs to be a complete comparison.</strong> <code>x === 1 || 2</code> doesn't mean "x is 1 or 2." It means "x equals 1, or the value 2," and the value 2 is always truthy.</p>

    <p><strong>Inside functions, prefer guard clauses over deep nesting.</strong> Reject bad inputs at the top with early <code>return</code>s instead of wrapping the main logic in layers of <code>if</code>s.</p>

    <p>None of these rules eliminate every bug, but they cover the vast majority of <code>if</code>-related issues you'll run into.</p>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-6-18-1-0': `
    <p>The same handful of <code>if</code>/<code>else</code> bugs show up in real codebases over and over. Knowing them by sight cuts debugging time massively — instead of staring at code wondering "why isn't this working?", you can scan for the patterns you already know go wrong.</p>
    <p>Most of these mistakes don't throw errors. The code runs, it just gives the wrong answer. So unlike syntax errors that fail loud, these only show up when behavior doesn't match expectations. Recognition is the main defense.</p>
  `,

  /* 1.1 Why use it */
  'topics-6-18-1-1': `
    <p>Knowing what to look for changes how you read code. Every time you see an <code>if</code>, you can quickly check the high-risk spots:</p>
<pre class="language-javascript"><code class="language-javascript">if (status = "ready") {       // ⚠ single = ?
  // ...
}

if (count == 0) {              // ⚠ double == ?
  // ...
}

if (n > 0) {                   // ⚠ wider condition first?
  // ...
} else if (n > 100) {
  // ...
}

if (color === "red" || "blue") {  // ⚠ each side a full comparison?
  // ...
}

if (user) {
  if (user.profile) {          // ⚠ deep nesting that could be flat?
    if (user.profile.name) {
      // ...
    }
  }
}</code></pre>

    <p>Once you've trained yourself to notice these, you'll catch them in your own code before they ship — and in code reviews of others' code.</p>
  `,

  /* 1.2 Where you use it */
  'topics-6-18-1-2': `
    <p>These mistakes show up in roughly predictable places. Knowing where to look helps you scan code more efficiently:</p>
<pre class="language-javascript"><code class="language-javascript">// Validation logic — common spot for == vs === confusion
if (input == "") {
  // ...
}

// Numeric thresholds — common spot for wrong condition order
if (price >= 10) {
  applyDiscount(0.1);
} else if (price >= 100) {     // unreachable
  applyDiscount(0.25);
}

// Multi-value checks — common spot for shorthand mistakes
if (status === "active" || "trial") {
  // ...
}

// Form handlers — common spot for missing return in guards
function handleSubmit() {
  if (!form.isValid) {
    showErrors();
    // missing return — code below runs anyway
  }
  submitForm();
}

// Property access — common spot for missing nested checks
if (user.profile.name) {       // crashes if profile is undefined
  // ...
}

// Toggle code — common spot for = instead of ===
if (isOpen = true) {
  closePanel();
}</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-6-18-1-3': `
    <p>Most coding mistakes aren't dramatic. They're not "I forgot how <code>if</code> works." They're tiny visual mix-ups that look right at a glance but mean something different to the computer.</p>
    <p>Think of these mistakes like typos in a recipe — you wrote "tsp" instead of "tbsp," or "salt" instead of "sugar." The recipe still produces a dish; it just tastes wrong. The hard part isn't fixing the typo, it's realizing one happened in the first place.</p>
    <p>This lesson is the cheat sheet of the typos. Once you've seen each pattern a few times, your eye starts catching them automatically. That's the goal — not to memorize a rule book, but to build the instinct to notice when something looks slightly off.</p>
  `,

  /* 1.4 Mental model */
  'topics-6-18-1-4': `
    <p>Picture a list of usual suspects — like the wanted board at a small-town police station. Each face is a familiar offender, and you've seen them around enough times that you recognize them on sight. When a new bug walks into your code, you look up at the board and ask "wait, is this you again?"</p>
    <p>Each item in this lesson is one of those faces. The <code>=</code> vs <code>===</code> mix-up. The wrong condition order. The shorthand comparison that doesn't actually do what it looks like. After enough exposure, scanning for them takes seconds instead of hours.</p>
    <p>The point isn't to never make these mistakes — even experienced people slip up. The point is to recognize them quickly when they happen, so debugging becomes a quick lookup instead of a long puzzle.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-6-18-1-5': `
<pre class="language-javascript"><code class="language-javascript">// Walking through the most common debug session: "why does this always run?"

const isReady = false;

if (isReady = true) {
  console.log("ready!");
}

// prints: "ready!"

// JavaScript is thinking:
// Line 1: register isReady, value false.
// Line 3: see if (...) — evaluate the condition.
//         isReady = true → this is ASSIGNMENT, not comparison.
//         Assign true to isReady (overwriting false).
//         The expression returns the assigned value: true.
//         The condition becomes: if (true).
// Line 4: true is truthy → run the block.
// Line 5: log "ready!".
// Line 6: function ends. As a side effect, isReady is now true forever.

// The fix is one character: change = to ===
if (isReady === true) {
  console.log("ready!");
}
// now isReady is compared to true (which is false), so the block doesn't run.</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-6-18-2-0': `
    <p>When an <code>if</code> isn't behaving as expected, run through this short mental checklist before anything else:</p>
<pre class="language-javascript"><code class="language-javascript">// 1. Is the comparison using === (not = or ==)?
//    if (x = 5)    ← assignment, always truthy
//    if (x == 5)   ← coerces types
//    if (x === 5)  ← strict comparison ✓

// 2. In an else if chain, is the most specific condition first?
//    if (n > 0) ... else if (n > 100) ...   ← n > 100 unreachable
//    if (n > 100) ... else if (n > 0) ...   ← correct ordering ✓

// 3. Does each side of || or && have a full comparison?
//    if (x === 1 || 2)              ← 2 is always truthy
//    if (x === 1 || x === 2)        ← correct ✓

// 4. Are the braces actually there?
//    if (cond)
//      doA();
//      doB();   ← runs even when cond is false
//
//    if (cond) {
//      doA();
//      doB();   ← only runs when cond is true ✓
//    }

// 5. Is there a return missing in a guard clause?
//    if (!valid) { showError(); }   ← code below still runs
//    if (!valid) { showError(); return; }   ← actually exits ✓</code></pre>

    <p>Roughly 80% of <code>if</code>-related bugs are one of these five things. Run the checklist before stepping into the debugger.</p>
  `,

  /* 2.1 The part that makes it click */
  'topics-6-18-2-1': `
    <p>Most <code>if</code>/<code>else</code> mistakes share one thing in common: they don't fail loud. The code runs, no errors, no warnings — it just produces the wrong result. That's why they're sneaky and that's why pattern recognition matters more than rule memorization.</p>
    <p>Once you've learned the patterns, debugging shifts from "what's wrong?" to "which one of the usual suspects is it this time?" That's the click — most bugs are familiar faces, not new monsters.</p>
  `,

  /* 2.2 Common confusions */
  'topics-6-18-2-2': `
    <p><strong>Confusion: thinking these are advanced bugs</strong></p>
    <p>None of these mistakes require deep knowledge to make. Beginners and senior engineers both ship them. The reason is the visual similarity — <code>=</code> and <code>===</code> look almost identical at a glance, especially in long expressions.</p>

    <p><strong>Confusion: assuming linters catch everything</strong></p>
<pre class="language-javascript"><code class="language-javascript">// Tools like ESLint catch some of these, but not all
if (x = 5) { ... }              // some configs flag this
if (x == 5) { ... }             // some configs flag this
if (n > 0) ... else if (n > 100) ...  // no linter catches "wrong order"
if (color === "red" || "blue") { ... } // no linter catches this either

// Linters help, but they're a safety net, not a replacement for knowing the patterns.</code></pre>

    <p><strong>Confusion: thinking the mistake will be obvious in testing</strong></p>
<pre class="language-javascript"><code class="language-javascript">// Bug: assignment instead of comparison
if (status = "ready") {
  proceed();
}

// proceed() always runs. Tests with "ready" pass.
// Tests with anything else still pass — because status gets overwritten to "ready".
// The bug only shows up if you check whether status was modified — which most tests don't.

// many of these mistakes survive testing because the wrong behavior happens to LOOK correct.</code></pre>

    <p><strong>Confusion: thinking refactoring later will fix it</strong></p>
    <p>These mistakes tend to compound. A wrongly-ordered chain accumulates more branches over time. A missing brace gets more lines added inside it. A missing <code>return</code> in a guard becomes the source of a dozen downstream bugs. The earlier you catch them, the cheaper they are to fix.</p>

    <p><strong>Confusion: treating "common mistakes" as just a beginner topic</strong></p>
    <p>The "common" in "common mistakes" applies to everyone. The specific mistakes shift over time — beginners hit <code>=</code> vs <code>===</code> often, experienced developers more often hit ordering issues or missed guards in async code — but the underlying pattern (small visual mix-ups producing wrong results) never goes away.</p>
  `,

  /* 2.3 Common mistakes */
  'topics-6-18-2-3': `
<pre class="language-javascript"><code class="language-javascript">// 1. Single = instead of ===
if (status = "ready") {
  start();
}
// always runs because = assigns and returns the value
// fix: use === for comparison
if (status === "ready") {
  start();
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">// 2. == instead of === (type coercion surprises)
if (count == "0") {
  showEmpty();
}
// works for "0", but also matches 0, false, and other falsy values
// fix: use === for predictable behavior
if (count === 0) {
  showEmpty();
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">// 3. Wrong condition order in a chain
if (price >= 10) {
  applyDiscount(0.1);
} else if (price >= 100) {
  applyDiscount(0.25);
}
// price = 500 still gets 10% — the >= 10 branch caught it first
// fix: most specific condition first
if (price >= 100) {
  applyDiscount(0.25);
} else if (price >= 10) {
  applyDiscount(0.1);
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">// 4. Shorthand multi-value check that doesn't work
if (color === "red" || "blue" || "green") {
  paint(color);
}
// "blue" by itself is truthy → block ALWAYS runs
// fix: each side a full comparison
if (color === "red" || color === "blue" || color === "green") {
  paint(color);
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">// 5. Missing braces with multiple lines
if (isReady)
  start();
  cleanup();
// cleanup() always runs — not part of the if
// fix: always use braces
if (isReady) {
  start();
  cleanup();
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">// 6. Missing return in a guard clause
function send(message) {
  if (!message) {
    console.log("nothing to send");
  }
  dispatch(message);
}
// dispatch runs even when message is empty
// fix: add the return
function send(message) {
  if (!message) {
    console.log("nothing to send");
    return;
  }
  dispatch(message);
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">// 7. Using else after a return-only branch
function classify(n) {
  if (n < 0) {
    return "negative";
  } else {
    return "non-negative";    // unnecessary else
  }
}
// fix: drop the else, the return already prevented fall-through
function classify(n) {
  if (n < 0) {
    return "negative";
  }
  return "non-negative";
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">// 8. Property access without checking the parent
if (user.profile.name) {
  showName(user.profile.name);
}
// crashes when user or user.profile is undefined
// fix: check each layer with &&
if (user && user.profile && user.profile.name) {
  showName(user.profile.name);
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">// 9. Mixing && and || without parens
if (isAdmin || isOwner && !isSuspended) {
  grantAccess();
}
// JS groups && first: isAdmin || (isOwner && !isSuspended)
// admins always pass, even if suspended
// fix: explicit parens
if ((isAdmin || isOwner) && !isSuspended) {
  grantAccess();
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">// 10. Else attaching to the wrong if
if (a)
  if (b) doX();
  else doY();
// else attaches to the inner if (b), not the outer if (a)
// fix: always use braces with nested ifs
if (a) {
  if (b) {
    doX();
  } else {
    doY();
  }
}</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-6-18-3-0': `
<pre class="language-javascript"><code class="language-javascript">// Spot the bug — = instead of ===
let status = "pending";
if (status = "ready") {
  console.log("starting");
}
console.log(status);
// prints: "starting" then "ready"
// status got overwritten as a side effect.

// Spot the bug — wrong order
const score = 95;
if (score >= 60) {
  console.log("passing");
} else if (score >= 90) {
  console.log("excellent");
}
// prints: "passing"
// "excellent" is unreachable — wider condition was first.

// Spot the bug — incomplete OR
const day = "Wednesday";
if (day === "Monday" || "Tuesday") {
  console.log("early week");
}
// prints: "early week"
// "Tuesday" by itself is truthy.

// Spot the bug — missing return in guard
function attemptLogin(user) {
  if (!user) {
    console.log("no user");
  }
  console.log("logging in: " + user.name);
}
attemptLogin(null);
// prints: "no user", then crashes — accessing .name on null.

// Fixed version — all of these patterns done correctly
function attemptLogin(user) {
  if (!user) {
    console.log("no user");
    return;
  }
  if (user.role === "admin" || user.role === "owner") {
    console.log("admin login");
  } else {
    console.log("regular login");
  }
}</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-6-18-3-1': `
    <p><strong>Example: a buggy login flow with the most common mistakes</strong></p>
<pre class="language-javascript"><code class="language-javascript">// BUGGY VERSION — riddled with the patterns from this lesson
function login(email, password) {
  if (!email) {
    console.log("Email required");
  }
  if (password = "") {
    return false;
  }
  if (email === "admin@site.com" || "owner@site.com") {
    grantAdminAccess();
  } else if (user.role >= "user") {
    grantUserAccess();
  } else if (user.role === "admin") {
    grantAdminAccess();
  }
}

// Bugs in this 12-line function:
// 1. Missing return after "Email required"
// 2. password = "" is assignment, not comparison
// 3. email === ... || "owner@site.com" — the second string is always truthy
// 4. comparing role with >= "user" treats it as a string comparison
// 5. condition order — "admin" branch is unreachable after the role >= "user" branch</code></pre>

    <p><strong>Example: the same logic, fixed</strong></p>
<pre class="language-javascript"><code class="language-javascript">function login(email, password) {
  if (!email) {
    console.log("Email required");
    return false;
  }
  if (password === "") {
    return false;
  }

  const user = findUser(email);
  if (!user) {
    return false;
  }

  if (user.role === "admin" || user.role === "owner") {
    grantAdminAccess();
  } else {
    grantUserAccess();
  }
  return true;
}
// each guard returns. Each comparison is full and complete. Most specific role first.</code></pre>

    <p><strong>Example: form validation with the right structure</strong></p>
<pre class="language-javascript"><code class="language-javascript">function validateSignup(form) {
  if (!form.email) {
    return "Email required";
  }
  if (!form.email.includes("@")) {
    return "Invalid email";
  }
  if (!form.password) {
    return "Password required";
  }
  if (form.password.length < 8) {
    return "Password too short";
  }
  return null;
}
// each check is a guard. Each comparison uses ===. No nesting needed.</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-6-18-3-2': `
    <ul>
      <li><strong>Comparison operators</strong> → the source of the <code>=</code> vs <code>==</code> vs <code>===</code> mistakes</li>
      <li><strong>Logical operators</strong> → the source of the "incomplete OR" mistake and precedence issues</li>
      <li><strong>Condition order matters</strong> → the source of unreachable-branch mistakes</li>
      <li><strong>Code blocks and braces</strong> → the source of brace-less and dangling-else mistakes</li>
      <li><strong>Guard clauses</strong> → fixing the missing-return mistake; preventing nested mistakes</li>
      <li><strong>Truthy and falsy</strong> → why assignment in a condition almost always evaluates as truthy</li>
      <li><strong>Nested if statements</strong> → the source of property-access-without-parent-check mistakes</li>
      <li><strong>Debugging if/else</strong> → the next lesson, covers how to find these when they happen</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-6-18-3-3': `
    <ul>
      <li>Comparison operators (<code>===</code>, <code>!==</code>)</li>
      <li>Logical operators (<code>&&</code>, <code>||</code>, <code>!</code>)</li>
      <li>Condition order matters</li>
      <li>Code blocks and braces</li>
      <li>Guard clauses</li>
      <li>Truthy and falsy values</li>
      <li>Nested if statements</li>
      <li>Debugging if/else (next lesson)</li>
    </ul>
  `,

  /* ========================================================= 
   Sub-lesson: 3.7.20 If / Else → debugging if/else
 =======================================================*/

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-6-19-0-0': `
    <p>Debugging an <code>if</code>/<code>else</code> means figuring out why the wrong branch is running — or why no branch is running when one should. Most of the time, the bug isn't that the syntax is broken. It's that the condition is evaluating to something different from what you expect.</p>
    <p>The fix is almost always the same: stop guessing what the condition is, and make JavaScript tell you. A few well-placed <code>console.log</code> calls usually reveal the problem within seconds.</p>
  `,

  /* 0.1 Syntax */
  'topics-6-19-0-1': `
<pre class="language-javascript"><code class="language-javascript">// The basic debugging technique: log what JavaScript actually sees

const status = "ready";

console.log("status is:", status, typeof status);
console.log("comparison result:", status === "ready");

if (status === "ready") {
  console.log("entered ready block");
  doSomething();
}

// the logs tell you:
//   status is: ready string
//   comparison result: true
//   entered ready block

// if the comparison says false when you expected true, you know exactly where to look.</code></pre>
    <p>Logging the raw value, its type, and the comparison result removes guesswork. You stop debating "I'm pretty sure this is true" — JavaScript shows you whether it is.</p>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-6-19-0-2': `
<pre class="language-javascript"><code class="language-javascript">// Anatomy of a debugging session: the wrong branch is running

const userId = "42";

if (userId === 42) {
  console.log("found user");
} else {
  console.log("user not found");
}

// Output: "user not found" — but you "know" the user has ID 42.
// Time to debug systematically:

console.log("userId value:", userId);          // "42"
console.log("userId type:", typeof userId);    // "string"
console.log("comparison:", userId === 42);     // false

// The logs tell the story:
//   userId is the STRING "42", not the NUMBER 42.
//   === checks types, so they're not equal.
//   The else branch runs because the if condition is false.

// Fix: convert the type, or compare with the right type.
if (Number(userId) === 42) {
  // works
}</code></pre>
    <p>The pattern is always the same: log the value, log the type, log the comparison. Three lines, and the bug usually becomes obvious.</p>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-6-19-0-3': `
    <p>A few specific debugging techniques cover most <code>if</code>/<code>else</code> situations:</p>

    <p><strong>Log the value AND the type.</strong> The most common cause of "the comparison should be true but isn't" is a type mismatch. <code>typeof</code> reveals it instantly:</p>
<pre class="language-javascript"><code class="language-javascript">console.log("value:", x, "type:", typeof x);</code></pre>

    <p><strong>Log entry into each branch.</strong> When you don't know which branch is running, put a log at the top of every block:</p>
<pre class="language-javascript"><code class="language-javascript">if (a) {
  console.log("branch: a");
  // ...
} else if (b) {
  console.log("branch: b");
  // ...
} else {
  console.log("branch: else");
  // ...
}</code></pre>

    <p><strong>Log the result of each piece of a compound condition.</strong> When <code>&&</code> or <code>||</code> is involved, isolate each side:</p>
<pre class="language-javascript"><code class="language-javascript">console.log("isLoggedIn:", user.isLoggedIn);
console.log("isVerified:", user.isVerified);
console.log("combined:", user.isLoggedIn && user.isVerified);

if (user.isLoggedIn && user.isVerified) {
  // ...
}</code></pre>

    <p><strong>Use <code>debugger;</code> to pause execution.</strong> Inside browser DevTools (with the Sources panel open), the <code>debugger</code> statement stops the code right there so you can inspect every variable in scope:</p>
<pre class="language-javascript"><code class="language-javascript">if (someComplexCondition) {
  debugger;     // execution pauses here
  // ...
}</code></pre>

    <p><strong>Check for off-by-one in boundaries.</strong> When something happens "almost right," look at <code>&gt;</code> vs <code>&gt;=</code> and <code>&lt;</code> vs <code>&lt;=</code>:</p>
<pre class="language-javascript"><code class="language-javascript">// "Why does score 60 say 'failing'?"
if (score > 60) {           // ← strictly greater — 60 doesn't pass
  return "passing";
}
return "failing";

// fix: use >= if 60 should pass
if (score >= 60) {
  return "passing";
}</code></pre>

    <p>None of these techniques are special tools. They're just systematic ways to make JavaScript show you what it's actually doing instead of what you assume it's doing.</p>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-6-19-1-0': `
    <p>Most <code>if</code>/<code>else</code> bugs come from one of two situations: either you don't know what the condition is evaluating to, or you don't know which branch is running. Both are easy to guess about and waste hours on. Both are easy to fix in seconds with a single <code>console.log</code>.</p>
    <p>Debugging skill isn't about knowing exotic tools. It's about replacing assumptions with measurements. Once you stop trusting your mental model and start asking JavaScript directly, most <code>if</code> bugs reveal themselves within a minute or two.</p>
  `,

  /* 1.1 Why use it */
  'topics-6-19-1-1': `
    <p>Logging-based debugging is fast, requires no setup, and works everywhere — browser, Node, code playgrounds, anywhere. Compare:</p>
<pre class="language-javascript"><code class="language-javascript">// Without debugging — guessing
if (response.status === "success") {
  showData(response.data);
} else {
  showError();
}
// "Why is the error showing? The API returned success!"
// 30 minutes of staring at the code...

// With debugging — measuring
console.log("response.status:", response.status);
console.log("type:", typeof response.status);
console.log("comparison:", response.status === "success");

if (response.status === "success") {
  showData(response.data);
} else {
  showError();
}

// Output reveals: response.status is "Success" (capital S),
// not "success". Comparison is false. Fix: lowercase the comparison
// or fix the API response.</code></pre>

    <p>Three lines of logging often replace 30 minutes of head-scratching. The cost is tiny; the benefit is enormous.</p>
  `,

  /* 1.2 Where you use it */
  'topics-6-19-1-2': `
<pre class="language-javascript"><code class="language-javascript">// Debugging an unexpected branch
function classify(score) {
  console.log("classify called with:", score, typeof score);

  if (score >= 90) {
    console.log("→ A branch");
    return "A";
  } else if (score >= 80) {
    console.log("→ B branch");
    return "B";
  } else {
    console.log("→ else branch");
    return "F";
  }
}
classify("85");
// reveals: score is the string "85", >= 90 happens to be false,
// >= 80 is true (string comparison), returns "B" — looks correct, but for wrong reasons.

// Debugging a condition that "should be true"
const user = getCurrentUser();
console.log("user:", user);
console.log("user truthy:", !!user);
console.log("user.isAdmin:", user && user.isAdmin);

if (user && user.isAdmin) {
  showAdminPanel();
}

// Debugging a guard clause
function processOrder(order) {
  console.log("entering processOrder with:", order);

  if (!order) {
    console.log("guard: no order, exiting");
    return;
  }
  console.log("past order guard");

  if (order.items.length === 0) {
    console.log("guard: empty cart, exiting");
    return;
  }
  console.log("past empty-cart guard");

  shipOrder(order);
}

// Debugging a chain that's never reaching the right branch
function getDiscount(price) {
  console.log("price:", price, typeof price);

  if (price >= 1000) {
    console.log("→ 50% tier");
    return 0.5;
  } else if (price >= 100) {
    console.log("→ 10% tier");
    return 0.1;
  }
  console.log("→ no discount");
  return 0;
}
getDiscount("1500");
// reveals string vs number comparison — string "1500" >= 1000 is comparing as strings.</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-6-19-1-3': `
    <p>Debugging an <code>if</code>/<code>else</code> is like figuring out why a vending machine gave you the wrong snack. You're sure you pressed the right button. You're sure the machine has the snack. But what came out wasn't what you expected.</p>
    <p>The fix isn't to argue with the machine — it's to look at what actually happened. What button did the machine think you pressed? What slot did it dispense from? Once you can see those facts, the mistake is usually obvious — maybe you hit B5 instead of B6, or that slot has been refilled with something different.</p>
    <p>Logging is how you "look at what the machine saw." The <code>console.log</code> statements don't change anything — they just expose what JavaScript is already doing. Once you can see it, you can fix it.</p>
  `,

  /* 1.4 Mental model */
  'topics-6-19-1-4': `
    <p>Picture each <code>if</code> like a fork in a road. The bug is "I expected to take the left fork but ended up on the right." When you can't see why, the answer is to put a sign at each fork — a little flag that says "you went this way."</p>
    <p>That's what <code>console.log</code> does at each branch. You add a small marker at every possible path, then run the code and see which markers got hit. The bug becomes "oh, I went right because the fork sign actually said B, not A like I thought." Once you can see the path the code took, fixing it is straightforward.</p>
    <p>The job isn't to be smart enough to predict every branch ahead of time. It's to make the code's actual behavior visible so you can see where reality diverged from expectation.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-6-19-1-5': `
<pre class="language-javascript"><code class="language-javascript">// Real debugging session: "the discount isn't applying"

function calculateTotal(price, isMember) {
  if (isMember && price > 100) {
    return price * 0.9;
  }
  return price;
}

console.log(calculateTotal(150, "true"));
// expected: 135 (10% off)
// actual: 150

// Step 1: log the inputs
function calculateTotal(price, isMember) {
  console.log("price:", price, typeof price);
  console.log("isMember:", isMember, typeof isMember);

  if (isMember && price > 100) {
    return price * 0.9;
  }
  return price;
}
console.log(calculateTotal(150, "true"));

// Output:
//   price: 150 number
//   isMember: true string

// Step 2: log the condition pieces
function calculateTotal(price, isMember) {
  console.log("isMember truthy:", !!isMember);
  console.log("price > 100:", price > 100);
  console.log("combined:", isMember && price > 100);

  if (isMember && price > 100) {
    return price * 0.9;
  }
  return price;
}
console.log(calculateTotal(150, "true"));

// Output:
//   isMember truthy: true
//   price > 100: true
//   combined: true

// Wait — combined is true, but the if didn't run? Let me check:

// Step 3: log inside each branch
function calculateTotal(price, isMember) {
  if (isMember && price > 100) {
    console.log("→ entered discount branch");
    return price * 0.9;
  }
  console.log("→ no discount branch");
  return price;
}
console.log(calculateTotal(150, "true"));

// Output:
//   → entered discount branch
//   135

// Wait — it's working now? Let me look at the original code more carefully...
// Original returned 150. Adding logs returned 135. That means somewhere
// in the path between the two, something else changed.

// In real life this often turns out to be a typo, a stale browser cache,
// a different code path entirely, or — in this case — calculating with
// the right value but printing or storing the wrong one elsewhere.

// The lesson: logging doesn't just find bugs — it disproves wrong assumptions
// and points to where the real problem lives.</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-6-19-2-0': `
    <p>For any <code>if</code>/<code>else</code> bug, run through this mental order:</p>

    <p><strong>1. What did the condition actually evaluate to?</strong> Log the comparison result directly. <code>console.log("cond:", x === 5);</code></p>

    <p><strong>2. What is each value, and what type is it?</strong> The most common surprise is a string where you expected a number, or vice versa. <code>console.log(x, typeof x);</code></p>

    <p><strong>3. Which branch is actually running?</strong> Put a log at the top of every block. The mismatch between expected and actual reveals the structure issue.</p>

    <p><strong>4. Are all the conditions in the chain reachable?</strong> Re-read the chain top-down. If a wider condition appears before a narrower one, the narrower branches are dead code.</p>

    <p><strong>5. Did a guard clause exit silently?</strong> If a function "does nothing," look for an early <code>return</code>. Add a log right before each <code>return</code> in any guard.</p>

    <p>Most <code>if</code> bugs fall to this checklist within a couple of minutes.</p>
  `,

  /* 2.1 The part that makes it click */
  'topics-6-19-2-1': `
    <p>Debugging isn't a separate skill from coding — it's just coding with the lights on. <code>console.log</code> turns the lights on. Without it, you're guessing in the dark about what your code is doing. With it, the bugs become obvious.</p>
    <p>The shift in mindset: instead of trying to figure out why the code is wrong, ask "what is the code actually doing?" The first question leads to staring; the second leads to logs and answers.</p>
  `,

  /* 2.2 Common confusions */
  'topics-6-19-2-2': `
    <p><strong>Confusion: thinking debugging requires special tools</strong></p>
    <p>Browser DevTools, breakpoints, and step-through debugging are useful — but for most <code>if</code>/<code>else</code> bugs, plain <code>console.log</code> is faster and works everywhere. Don't reach for advanced tools when a one-line log gets the job done.</p>

    <p><strong>Confusion: logging the variable but not the comparison</strong></p>
<pre class="language-javascript"><code class="language-javascript">// Less useful — only tells you the value
console.log("status:", status);
if (status === "ready") { ... }

// More useful — also tells you the comparison result
console.log("status:", status, "===", status === "ready");
if (status === "ready") { ... }
// the second log tells you immediately whether the if will pass.</code></pre>

    <p><strong>Confusion: removing logs immediately</strong></p>
    <p>It's tempting to delete logs as soon as the bug is fixed. But often the same bug reappears in a different form, or the area you debugged becomes a hotspot. Leaving a few well-placed logs (or commenting them out so they're easy to re-enable) saves time on the next bug.</p>

    <p><strong>Confusion: assuming the condition is the bug when it's the value</strong></p>
<pre class="language-javascript"><code class="language-javascript">if (user.isActive === true) {
  showActive();
}

// "The condition is wrong!" — debugger, console, frustration...
// Actually: user.isActive is the STRING "true", not the boolean true.
// The bug isn't in the if — it's wherever user.isActive was set.

// Fix: trace back to where user.isActive comes from.</code></pre>

    <p><strong>Confusion: trusting that "obvious" code can't be wrong</strong></p>
<pre class="language-javascript"><code class="language-javascript">if (count > 0) {
  console.log("we have items");
}

// "This is fine, count is obviously a number."
// Actually: count came from form input, which always arrives as a string.
// "0" > 0 is false — but "1" > 0 is true (string-to-number coercion).
// Result: it works for some values and fails for others, depending on what string you compare to.

// the obvious-looking conditions are often where the bugs hide.</code></pre>
  `,

  /* 2.3 Common mistakes */
  'topics-6-19-2-3': `
<pre class="language-javascript"><code class="language-javascript">// Mistake: console.log without a label
console.log(x);
console.log(y);
console.log(z);
// in the console, you see: 5, "hello", true — which is which?
// fix: label every log
console.log("x:", x);
console.log("y:", y);
console.log("z:", z);</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Mistake: logging a value but not its type when type might be the issue
console.log("status:", status);
if (status === 200) { ... }
// you see "status: 200" but the if still fails — is it the string "200"?
// fix: include typeof
console.log("status:", status, typeof status);</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Mistake: only logging at one branch
if (a) {
  console.log("a was true");
  // ...
} else if (b) {
  // no log here
  // ...
} else {
  // no log here
  // ...
}
// when "a was true" doesn't print, you don't know which other branch ran
// fix: log at the top of every branch
if (a) {
  console.log("→ a");
  // ...
} else if (b) {
  console.log("→ b");
  // ...
} else {
  console.log("→ else");
  // ...
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Mistake: using debugger without DevTools open
function checkSomething(x) {
  debugger;        // does nothing if DevTools isn't open
  if (x > 0) { ... }
}
// fix: open DevTools (F12 in most browsers) before running the code,
// otherwise the debugger statement is silently ignored.</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Mistake: changing the code while debugging without resetting state
let count = 0;

if (count > 0) {
  count = count + 1;
}

// you change the code, hit run again, but the test failed.
// because you forgot to reset count back to its starting value.
// fix: when debugging stateful code, always restart the page or reset variables
// before re-running.</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Mistake: logging inside a loop without a counter
for (const item of items) {
  console.log("checking item");
  if (item.isReady) {
    process(item);
  }
}
// the console fills with identical "checking item" lines
// fix: include the actual data
for (const item of items) {
  console.log("checking:", item.id, "isReady:", item.isReady);
  if (item.isReady) {
    process(item);
  }
}</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-6-19-3-0': `
<pre class="language-javascript"><code class="language-javascript">// Logging the value and type — catches type mismatches
const userId = "42";
console.log("userId:", userId, typeof userId);
if (userId === 42) {
  console.log("match");
} else {
  console.log("no match — likely type mismatch");
}

// Logging branch entry — catches "wrong branch" bugs
function getGrade(score) {
  if (score >= 90) {
    console.log("→ A");
    return "A";
  }
  if (score >= 80) {
    console.log("→ B");
    return "B";
  }
  console.log("→ F");
  return "F";
}
getGrade(85);   // logs "→ B"

// Logging compound condition pieces — catches operator confusion
const isLoggedIn = true;
const isVerified = false;
console.log("loggedIn:", isLoggedIn);
console.log("verified:", isVerified);
console.log("combined:", isLoggedIn && isVerified);
if (isLoggedIn && isVerified) {
  console.log("welcome");
}

// Using debugger statement to inspect mid-execution
function findItem(items, target) {
  for (const item of items) {
    if (item.id === target) {
      debugger;       // pause here when DevTools is open
      return item;
    }
  }
  return null;
}

// Quick on/off pattern — comment logs out instead of deleting them
function process(data) {
  // console.log("data:", data);
  if (data.valid) {
    // console.log("→ valid path");
    return data.value;
  }
  // console.log("→ invalid path");
  return null;
}</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-6-19-3-1': `
    <p><strong>Example: form submission silently failing</strong></p>
<pre class="language-javascript"><code class="language-javascript">function handleSubmit(form) {
  console.log("handleSubmit called with:", form);

  if (!form.email) {
    console.log("→ blocked: missing email");
    return;
  }
  if (!form.password) {
    console.log("→ blocked: missing password");
    return;
  }

  console.log("→ all checks passed, submitting");
  submitToServer(form);
}

handleSubmit({ email: "user@site.com", password: "" });
// console output:
//   handleSubmit called with: { email: "user@site.com", password: "" }
//   → blocked: missing password
// now you know exactly which guard caught it.</code></pre>

    <p><strong>Example: API response handling not branching as expected</strong></p>
<pre class="language-javascript"><code class="language-javascript">function handleResponse(response) {
  console.log("response:", response);
  console.log("response.ok:", response.ok, typeof response.ok);
  console.log("status:", response.status, typeof response.status);

  if (response.ok) {
    console.log("→ success");
    showData(response.data);
  } else if (response.status === 401) {
    console.log("→ unauthorized");
    redirectToLogin();
  } else {
    console.log("→ generic error");
    showError();
  }
}

// when the wrong branch runs, the logs reveal whether response.ok was the
// expected boolean, whether the status was the expected number, etc.</code></pre>

    <p><strong>Example: shopping cart total computing wrong</strong></p>
<pre class="language-javascript"><code class="language-javascript">function applyDiscount(cart) {
  console.log("subtotal:", cart.subtotal, typeof cart.subtotal);
  console.log("isMember:", cart.user.isMember);

  if (cart.user.isMember && cart.subtotal >= 100) {
    console.log("→ 20% member discount");
    return cart.subtotal * 0.8;
  }
  if (cart.subtotal >= 50) {
    console.log("→ 10% threshold discount");
    return cart.subtotal * 0.9;
  }
  console.log("→ no discount");
  return cart.subtotal;
}

// reveals issues like subtotal being a string from form input,
// or isMember being undefined because the user object isn't fully loaded.</code></pre>

    <p><strong>Example: route guarding showing the wrong page</strong></p>
<pre class="language-javascript"><code class="language-javascript">function checkAccess(user, page) {
  console.log("checking access for:", user, "to page:", page.name);

  if (!user) {
    console.log("→ no user → login");
    return "login";
  }
  if (page.requiresPaid && !user.isPaid) {
    console.log("→ paywall");
    return "paywall";
  }
  if (page.requiresAdmin && !user.isAdmin) {
    console.log("→ 403");
    return "403";
  }
  console.log("→ allowed");
  return "allowed";
}

// when a paying admin user is being sent to /paywall, the logs reveal
// which guard tripped and what user.isPaid was at the time.</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-6-19-3-2': `
    <ul>
      <li><strong><code>console.log</code></strong> → the primary tool for debugging conditions</li>
      <li><strong><code>typeof</code></strong> → reveals the type behind a value when comparisons fail unexpectedly</li>
      <li><strong>Comparison operators</strong> → understanding <code>===</code> vs <code>==</code> is half of debugging chains</li>
      <li><strong>Truthy and falsy values</strong> → why <code>if (0)</code> doesn't run and <code>if ("0")</code> does</li>
      <li><strong>Common mistakes</strong> → the previous lesson, lists the bugs you'll be debugging</li>
      <li><strong>Guard clauses</strong> → silent exits often need branch logging to trace</li>
      <li><strong>Browser DevTools</strong> → the <code>debugger;</code> keyword pairs with this for deeper inspection</li>
      <li><strong>Logging conventions</strong> → labels, types, and entry markers make logs readable</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-6-19-3-3': `
    <ul>
      <li><code>console.log</code> and other <code>console</code> methods</li>
      <li><code>typeof</code> operator</li>
      <li>Comparison operators</li>
      <li>Truthy and falsy values</li>
      <li>Common mistakes (previous lesson)</li>
      <li>Guard clauses</li>
      <li><code>debugger</code> keyword and DevTools breakpoints</li>
      <li>Reading the browser console</li>
    </ul>
  `,

       /* ==========================================================
     TOPIC 3.8: Loops
     ========================================================== */

  /* ========================================================= 
   Sub-lesson: 3.8.1 Loops → what loops are
 =======================================================*/

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-7-0-0-0': `
    <p>A loop is code that repeats. Instead of writing the same instruction over and over, you write it once and tell JavaScript to run it multiple times. The same block executes again and again until you tell it to stop.</p>
    <p>It's one of the most basic building blocks in any program. Anything that involves "do this for every item" or "keep doing this until something changes" is a loop.</p>
  `,

  /* 0.1 Syntax */
  'topics-7-0-0-1': `
<pre class="language-javascript"><code class="language-javascript">for (let i = 0; i < 3; i++) {
  console.log("hello");
}

// prints:
//   hello
//   hello
//   hello

// the line console.log("hello") only appears once in the code,
// but it ran three times because the loop repeated it.</code></pre>
    <p>The block inside the curly braces is the body of the loop. Whatever's in there gets executed once per repetition. The stuff before the body controls how many times it repeats.</p>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-7-0-0-2': `
<pre class="language-javascript"><code class="language-javascript">for (let i = 0; i < 3; i++) {
  console.log("count:", i);
}

// prints:
//   count: 0
//   count: 1
//   count: 2

// for       → keyword that starts a counted loop
// let i = 0 → start value: a counter named i, beginning at 0
// i < 3     → keep going while this is true (when it becomes false, stop)
// i++       → after each round, add 1 to i
// { ... }   → the body, runs each time the loop repeats</code></pre>
    <p>The three pieces inside the parentheses control the repetition: where to start, when to stop, and what to change each time. The body is what gets repeated.</p>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-7-0-0-3': `
    <p>JavaScript has several different loop forms. They all repeat code, but each one is shaped for a different situation:</p>

<pre class="language-javascript"><code class="language-javascript">// for loop — when you need a counter
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// while loop — when you don't know how many times in advance
while (someCondition) {
  doSomething();
}

// for...of — walking through items in an array
const items = ["apple", "banana", "cherry"];
for (const item of items) {
  console.log(item);
}</code></pre>

    <p>Every loop has two essential parts: a <strong>condition</strong> that decides whether to keep going, and a <strong>body</strong> that runs each repetition. The condition is checked at the top of every cycle; the moment it's false, the loop stops.</p>

    <p>If the condition never becomes false, the loop runs forever — that's called an <strong>infinite loop</strong> and usually crashes the page. The most common cause is forgetting to update the value the condition depends on:</p>
<pre class="language-javascript"><code class="language-javascript">let i = 0;
while (i < 5) {
  console.log(i);
  // forgot to do i = i + 1 here
}
// runs forever — i stays at 0, condition stays true</code></pre>

    <p>Each loop type uses braces around its body. The body can be one statement or many — anything you'd normally write in a function block can go inside a loop body.</p>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-7-0-1-0': `
    <p>Without loops, every repeated action would have to be written out by hand. Sending a message to 100 users would mean writing the same line 100 times. Adding up the prices of 50 cart items would mean 50 separate addition lines. The code would balloon for any task involving more than a few items.</p>
    <p>Loops collapse all that repetition into a single block that runs as many times as needed. Whether you're processing 5 items or 5 million, the code stays the same length.</p>
  `,

  /* 1.1 Why use it */
  'topics-7-0-1-1': `
    <p>Loops let one block of code do work that would otherwise require huge amounts of duplication:</p>
<pre class="language-javascript"><code class="language-javascript">// Without a loop — manual repetition
console.log("user 1");
console.log("user 2");
console.log("user 3");
console.log("user 4");
console.log("user 5");

// With a loop — same result, scales to any number
for (let i = 1; i <= 5; i++) {
  console.log("user " + i);
}

// And if you need 1,000 users instead of 5, you change ONE number.</code></pre>

    <p>Beyond saving keystrokes, loops let your code handle data sizes you can't predict ahead of time. If a user uploads a list with an unknown number of items, you can't manually write the right number of statements — but a loop handles any size.</p>
  `,

  /* 1.2 Where you use it */
  'topics-7-0-1-2': `
<pre class="language-javascript"><code class="language-javascript">// Walking through items in a list
const cart = ["shirt", "pants", "shoes"];
for (const item of cart) {
  console.log("you have:", item);
}

// Doing something a fixed number of times
for (let i = 0; i < 5; i++) {
  console.log("attempt " + (i + 1));
}

// Counting up a total
let total = 0;
const prices = [10, 20, 30];
for (const price of prices) {
  total = total + price;
}
console.log("total:", total);   // 60

// Building up a string or list
let greeting = "";
const names = ["Alice", "Bob", "Carol"];
for (const name of names) {
  greeting = greeting + "Hi " + name + "! ";
}
console.log(greeting);   // "Hi Alice! Hi Bob! Hi Carol! "

// Repeating until something changes
let attempts = 0;
while (attempts < 3 && !connected) {
  tryConnect();
  attempts = attempts + 1;
}</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-7-0-1-3': `
    <p>A loop is the same idea as a chore you do over and over. "Wash one dish, then wash the next dish, then wash the next dish, until there are no more dishes." You don't think of it as 30 separate tasks — it's one task you keep repeating until the sink is empty.</p>
    <p>Code loops work the same way. You describe one round of the work — wash a dish — and the rules for when to stop — when the sink is empty. JavaScript handles the repetition. You don't write 30 lines for 30 dishes; you write the dish-washing instruction once.</p>
    <p>The trick is the stopping rule. Without one, you'd be stuck at the sink forever. Every loop needs some condition that eventually becomes false, or it never stops.</p>
  `,

  /* 1.4 Mental model */
  'topics-7-0-1-4': `
    <p>Picture a music player set to repeat a single song. The player keeps starting the song from the top, playing it through, then starting again — same instructions every time. The only thing that changes is "what round are we on now?" The song itself doesn't know or care. It just plays.</p>
    <p>That's a loop. The body of the loop is the song. The condition is the "keep repeating?" toggle. Each repetition is identical work, except for whatever data you're tracking — a counter, an item from a list, whatever.</p>
    <p>Eventually you flip the toggle off (the condition becomes false) and the music stops. Whatever progress you've accumulated — a running total, a built-up string, items processed — is what you're left with when the loop ends.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-7-0-1-5': `
<pre class="language-javascript"><code class="language-javascript">for (let i = 0; i < 3; i++) {
  console.log("round " + i);
}
console.log("done");

// prints:
//   round 0
//   round 1
//   round 2
//   done

// JavaScript is thinking:
// 1. See the for loop. Run the setup: let i = 0.
// 2. Check the condition: 0 < 3 → true. Enter the body.
// 3. Log "round 0".
// 4. End of body. Run the update: i++ → i is now 1.
// 5. Check the condition again: 1 < 3 → true. Enter the body.
// 6. Log "round 1".
// 7. Update: i++ → i is now 2.
// 8. Check: 2 < 3 → true. Enter the body.
// 9. Log "round 2".
// 10. Update: i++ → i is now 3.
// 11. Check: 3 < 3 → false. Exit the loop.
// 12. Continue with code after the loop. Log "done".</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-7-1-2-0': `
    <p>If a loop isn't behaving as expected, the fastest way to see what's happening is to log the counter (or current item) at the start of each round:</p>
<pre class="language-javascript"><code class="language-javascript">for (let i = 0; i < items.length; i++) {
  console.log("iteration:", i, "item:", items[i]);
  // ... rest of the loop body
}

// you'll see something like:
//   iteration: 0 item: "apple"
//   iteration: 1 item: "banana"
//   iteration: 2 item: "cherry"

// from this you can tell:
//   - whether the loop is running at all (any output? any iterations?)
//   - whether it's running too many times or too few (last index?)
//   - what data is being processed each round (right values?)</code></pre>

    <p>Common loop bugs almost always reveal themselves once you can see the counter and the current item side by side.</p>
  `,

  /* 2.1 The part that makes it click */
  'topics-7-0-2-1': `
    <p>A loop isn't a special kind of code. It's just normal code that runs more than once. The body of a loop follows all the same rules as any other code block — variables work the same way, <code>if</code> statements work the same way, function calls work the same way.</p>
    <p>The only "loop magic" is that JavaScript jumps back to the top of the body after each round and re-runs it. Once you see that, loops stop being mysterious — they're just blocks that get re-entered until the condition says stop.</p>
  `,

  /* 2.2 Common confusions */
  'topics-7-0-2-2': `
    <p><strong>Confusion: thinking the body runs all at once</strong></p>
<pre class="language-javascript"><code class="language-javascript">for (let i = 0; i < 3; i++) {
  console.log(i);
}

// some people picture this as "JS runs i = 0, i = 1, i = 2 simultaneously"
// what actually happens: one full round at a time, sequentially.
// round 1 finishes completely before round 2 even starts.</code></pre>

    <p><strong>Confusion: forgetting the loop modifies its own counter</strong></p>
<pre class="language-javascript"><code class="language-javascript">for (let i = 0; i < 3; i++) {
  console.log(i);
  i = 100;          // changes i mid-loop
}
// runs ONCE, then stops — because i went from 0 to 100, then i++ made it 101,
// and 101 < 3 is false.
// usually a bug, sometimes intentional. Either way, the counter is just a variable.</code></pre>

    <p><strong>Confusion: thinking loops "create" the iterations</strong></p>
<pre class="language-javascript"><code class="language-javascript">for (let i = 0; i < 5; i++) {
  // ...
}
// JS doesn't pre-decide it'll run 5 times.
// it just keeps re-checking the condition. If you change i mid-loop or modify
// the array being looped, the count can shift.</code></pre>

    <p><strong>Confusion: assuming all loops need a counter</strong></p>
<pre class="language-javascript"><code class="language-javascript">// for...of doesn't use a counter — it just walks through items
const fruits = ["apple", "banana"];
for (const fruit of fruits) {
  console.log(fruit);
}

// while doesn't necessarily use one either — it just checks a condition
let isOpen = true;
while (isOpen) {
  isOpen = checkSomething();
}</code></pre>

    <p><strong>Confusion: forgetting that loops can be empty</strong></p>
<pre class="language-javascript"><code class="language-javascript">const items = [];
for (const item of items) {
  console.log(item);
}
// runs ZERO times — the array is empty, so there's nothing to walk through.
// loops aren't guaranteed to run at all. Always handle the "empty" case.</code></pre>
  `,

  /* 2.3 Common mistakes */
  'topics-7-0-2-3': `
<pre class="language-javascript"><code class="language-javascript">let i = 0;
while (i < 5) {
  console.log(i);
  // forgot to update i
}
// infinite loop — i never changes, condition stays true forever
// fix: update the counter inside the loop
let i = 0;
while (i < 5) {
  console.log(i);
  i = i + 1;
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">for (let i = 0; i <= items.length; i++) {
  console.log(items[i]);
}
// off-by-one: <= goes one PAST the last index, prints undefined at the end
// fix: use < instead of <=
for (let i = 0; i < items.length; i++) {
  console.log(items[i]);
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">for (let i = 1; i < items.length; i++) {
  console.log(items[i]);
}
// starts at 1 instead of 0 — skips the first item
// fix: start at 0 unless you specifically want to skip
for (let i = 0; i < items.length; i++) {
  console.log(items[i]);
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">for (const item of items)
  console.log(item);
  console.log("---");
// the second log isn't part of the loop body — runs only ONCE after the loop ends
// fix: use braces
for (const item of items) {
  console.log(item);
  console.log("---");
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">let total = 0;
for (let i = 0; i < prices.length; i++) {
  let total = 0;
  total = total + prices[i];
}
console.log(total);
// inner total is a NEW variable each round — outer total stays at 0
// fix: don't redeclare the variable inside
let total = 0;
for (let i = 0; i < prices.length; i++) {
  total = total + prices[i];
}</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-7-0-3-0': `
<pre class="language-javascript"><code class="language-javascript">// Basic counted loop
for (let i = 0; i < 3; i++) {
  console.log("step", i);
}
// step 0
// step 1
// step 2

// Walking through an array
const colors = ["red", "green", "blue"];
for (const color of colors) {
  console.log(color);
}
// red
// green
// blue

// Counting up to a total
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum = sum + i;
}
console.log(sum);   // 55 (1+2+3+...+10)

// Repeating until a condition changes
let attempts = 0;
let success = false;
while (attempts < 3 && !success) {
  attempts = attempts + 1;
  success = tryThing();
}

// Building a list from another list
const numbers = [1, 2, 3, 4];
const doubled = [];
for (const n of numbers) {
  doubled.push(n * 2);
}
console.log(doubled);   // [2, 4, 6, 8]

// Skipping or stopping early
const items = ["ok", "skip", "ok", "stop", "never"];
for (const item of items) {
  if (item === "skip") {
    continue;     // jump to next iteration
  }
  if (item === "stop") {
    break;        // exit the loop entirely
  }
  console.log(item);
}
// ok
// ok</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-7-0-3-1': `
    <p><strong>Example: rendering a list of items</strong></p>
<pre class="language-javascript"><code class="language-javascript">function renderProductList(products) {
  const container = document.querySelector(".products");
  container.innerHTML = "";

  for (const product of products) {
    const card = document.createElement("div");
    card.className = "product-card";
    card.textContent = product.name;
    container.appendChild(card);
  }
}
// one block of code creates as many cards as there are products.</code></pre>

    <p><strong>Example: calculating a cart subtotal</strong></p>
<pre class="language-javascript"><code class="language-javascript">function calculateSubtotal(cart) {
  let subtotal = 0;
  for (const item of cart) {
    subtotal = subtotal + item.price * item.quantity;
  }
  return subtotal;
}
// works for any cart size — 1 item or 1,000.</code></pre>

    <p><strong>Example: finding a user by ID</strong></p>
<pre class="language-javascript"><code class="language-javascript">function findUserById(users, targetId) {
  for (const user of users) {
    if (user.id === targetId) {
      return user;     // exit the loop AND the function as soon as we find it
    }
  }
  return null;          // ran through all users, didn't find one
}</code></pre>

    <p><strong>Example: validating multiple form fields</strong></p>
<pre class="language-javascript"><code class="language-javascript">function findFirstError(fields) {
  for (const field of fields) {
    if (field.value === "") {
      return field.name + " is required";
    }
    if (field.value.length > 100) {
      return field.name + " is too long";
    }
  }
  return null;     // no errors found
}</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-7-0-3-2': `
    <ul>
      <li><strong>Why loops exist</strong> → next lesson, the motivation in more depth</li>
      <li><strong>Repeating code</strong> → the core idea loops solve</li>
      <li><strong><code>for</code> loop</strong> → the most common counted loop form</li>
      <li><strong><code>while</code> loop</strong> → for repeating until a condition changes</li>
      <li><strong><code>for...of</code></strong> → for walking through arrays without a counter</li>
      <li><strong>Arrays</strong> → the data structure most often paired with loops</li>
      <li><strong>Conditions</strong> → loops use the same boolean expressions as <code>if</code> statements</li>
      <li><strong>Infinite loops</strong> → what happens when the condition never becomes false</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-7-0-3-3': `
    <ul>
      <li>Why loops exist</li>
      <li>Repeating code</li>
      <li><code>for</code> loop</li>
      <li><code>while</code> loop</li>
      <li><code>for...of</code></li>
      <li>Loop counter variable</li>
      <li>Arrays and lists</li>
      <li>Infinite loops</li>
    </ul>
  `,

  /* ========================================================= 
   Sub-lesson: 3.8.2 Loops → why loops exist
 =======================================================*/

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-7-1-0-0': `
    <p>Loops exist because programs constantly need to do the same thing more than once. Without them, every repeated action would have to be typed out manually — and most programs would become impossible to write at the scale they need to handle.</p>
    <p>This lesson is about the reason loops were added to programming languages in the first place: copy-paste doesn't scale, and there's a category of work where you don't even know how many repetitions you'll need until the program is running.</p>
  `,

  /* 0.1 Syntax */
  'topics-7-1-0-1': `
<pre class="language-javascript"><code class="language-javascript">// Without a loop — manual repetition
sendNotification(users[0]);
sendNotification(users[1]);
sendNotification(users[2]);
sendNotification(users[3]);
sendNotification(users[4]);

// With a loop — the same work, written once
for (const user of users) {
  sendNotification(user);
}

// the second version handles 5 users, 500 users, or 5 million users
// without changing a single character.</code></pre>
    <p>The loop version isn't just shorter — it's the only version that works when the number of users is unknown at the time you write the code.</p>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-7-1-0-2': `
<pre class="language-javascript"><code class="language-javascript">// The structure that makes a loop "exist" as a concept:

for (const user of users) {        // ← rule for picking what to repeat over
  sendNotification(user);          // ← the work, written exactly once
}

// rule for repeating → built into the loop's syntax
// the work itself     → written one time in the body
// the data            → can grow or shrink without rewriting anything

// without loops, you'd have to either:
//   - copy the work line for every possible item (impossible for unknown amounts)
//   - manually call yourself recursively (much more complex)

// loops separate "what to do" from "how many times to do it" cleanly.</code></pre>
    <p>That separation is the whole reason loops are a feature. The instruction "send a notification" only appears once. The instruction "do this for every user in the list" is handled by the loop machinery.</p>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-7-1-0-3': `
    <p>Three categories of work make loops indispensable:</p>

    <p><strong>1. Unknown counts.</strong> When you don't know how many items you'll be dealing with until runtime, you can't write a fixed number of statements. Form submissions, search results, database records, file uploads — all of these come with sizes you can't predict in advance.</p>
<pre class="language-javascript"><code class="language-javascript">// You don't know how many search results came back until they arrive
const results = searchProducts(query);
for (const result of results) {
  displayResult(result);
}</code></pre>

    <p><strong>2. Identical or near-identical work.</strong> When the same operation needs to happen for every item in a collection — and the operation only differs by which item it's working with — that's exactly what a loop is for.</p>
<pre class="language-javascript"><code class="language-javascript">// Same operation, different item each time
let total = 0;
for (const item of cart) {
  total = total + item.price;
}</code></pre>

    <p><strong>3. Repeating until something changes.</strong> When you need to keep doing something until a condition becomes true (or false), there's no fixed count — you just have to keep checking and acting until the situation changes.</p>
<pre class="language-javascript"><code class="language-javascript">// Keep retrying until either it works or you've tried enough times
let attempts = 0;
let success = false;
while (attempts < 5 && !success) {
  success = tryConnection();
  attempts = attempts + 1;
}</code></pre>

    <p>If you find yourself in any of these three categories without a loop, you'll either write code that doesn't scale or code that simply can't be written. That's why loops exist as a built-in language feature rather than an optional library or pattern.</p>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-7-1-1-0': `
    <p>The fundamental problem loops solve is that programs deal with collections of unknown size. A user uploads a list of contacts — could be 10, could be 10,000. A search returns matches — could be 0, could be hundreds. A database query returns records — the count depends on the data, not the code.</p>
    <p>Without loops, every time the data size changed, the code would need to change too. Loops let one piece of code handle any size, including sizes that didn't exist when the code was written.</p>
  `,

  /* 1.1 Why use it */
  'topics-7-1-1-1': `
    <p>Loops aren't just about saving typing. They make code possible that otherwise wouldn't be:</p>
<pre class="language-javascript"><code class="language-javascript">// Hardcoded for exactly 3 items
function showCart3Items(cart) {
  console.log(cart[0]);
  console.log(cart[1]);
  console.log(cart[2]);
}
// breaks the moment a cart has 4 items, or 2, or 0.

// Loops adapt automatically
function showCart(cart) {
  for (const item of cart) {
    console.log(item);
  }
}
// works for any size cart, today and forever.</code></pre>

    <p>The loop version isn't a shortcut for the manual version — it's the version that actually works in the real world, where data sizes vary and aren't known ahead of time.</p>

    <p>Loops also keep code maintainable. If you need to change <em>what</em> happens for each item, you change it in one place inside the loop body. With manual repetition, you'd have to update every copy of the same line — and inevitably miss one.</p>
  `,

  /* 1.2 Where you use it */
  'topics-7-1-1-2': `
<pre class="language-javascript"><code class="language-javascript">// Anywhere data has unknown or variable size
const messages = inbox.getAllMessages();
for (const msg of messages) {
  markAsRead(msg);
}

// Anywhere the same operation applies to many items
const inputs = document.querySelectorAll("input");
for (const input of inputs) {
  input.disabled = true;
}

// Anywhere a process should retry or wait
let pageReady = false;
while (!pageReady) {
  pageReady = checkIfPageLoaded();
}

// Anywhere you're aggregating data
let totalScore = 0;
for (const round of game.rounds) {
  totalScore = totalScore + round.score;
}

// Anywhere you need a fixed number of repetitions
for (let i = 0; i < 10; i++) {
  generateRandomCard();
}</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-7-1-1-3': `
    <p>Imagine you're handing out flyers at a busy street corner. You don't write a separate plan for each person — you have one rule: "if a person walks by, hand them a flyer." That one rule covers everyone, no matter how many people show up. One person, ten people, a thousand people — same rule.</p>
    <p>That's why loops exist. Real situations don't come with a fixed count. You don't know in advance how many users will sign up, how many items will be in someone's cart, or how many search results will come back. Loops let you write the rule once and apply it to whatever shows up.</p>
    <p>Without loops, you'd have to know the count ahead of time and write that exact number of instructions. That works for trivial cases but falls apart the moment real data is involved.</p>
  `,

  /* 1.4 Mental model */
  'topics-7-1-1-4': `
    <p>Think of a loop like an assembly line at a factory. The line is set up once with a single station that does one specific job — say, attaching a label to a box. The line doesn't know or care how many boxes are coming. Boxes arrive on the conveyor belt, the station does its job on each one, and the boxes move on. When there are no more boxes, the station goes idle.</p>
    <p>The reason factories use assembly lines instead of having one worker do all the steps for one box at a time is the same reason programs use loops: it's the only way to handle large or unknown quantities efficiently. The setup cost is paid once; after that, scale is free.</p>
    <p>Without a loop, programming would be like asking the factory worker to write a custom plan for every single box that arrives. That's not just inefficient — it's literally impossible when the boxes don't exist yet.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-7-1-1-5': `
<pre class="language-javascript"><code class="language-javascript">// A real example of why loops exist:
// imagine sending a welcome email to every new signup today.

const newSignups = ["alice@x.com", "bob@y.com", "carol@z.com"];

// WITHOUT a loop — only works because you know it's exactly 3:
sendWelcome(newSignups[0]);
sendWelcome(newSignups[1]);
sendWelcome(newSignups[2]);

// WITH a loop — works for any number:
for (const email of newSignups) {
  sendWelcome(email);
}

// Now imagine a week later, 47 new signups arrive in one day.
// The without-loop version is broken — only emails the first 3.
// The with-loop version is unchanged and emails all 47.

// JavaScript is thinking (loop version):
// 1. See the for...of loop. Look at newSignups.
// 2. Take the first item ("alice@x.com"), assign to email, run body.
// 3. sendWelcome("alice@x.com") runs.
// 4. Take next item ("bob@y.com"), assign to email, run body.
// 5. sendWelcome("bob@y.com") runs.
// 6. Take next item ("carol@z.com"), assign to email, run body.
// 7. sendWelcome("carol@z.com") runs.
// 8. No more items. Exit loop.

// the body ran 3 times today. Tomorrow it'll run 47 times. Same code.</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-7-0-2-0': `
    <p>If you're writing the same line over and over with only a small change, that's a sign you should be using a loop instead. The repetition is a smell — code that grows linearly with the number of items will become unmaintainable fast.</p>
<pre class="language-javascript"><code class="language-javascript">// Smell: copy-paste with tiny variations
console.log("user:", users[0].name);
console.log("user:", users[1].name);
console.log("user:", users[2].name);
console.log("user:", users[3].name);

// Cleaner: one body, one rule
for (const user of users) {
  console.log("user:", user.name);
}</code></pre>

    <p>The clue: if you're typing or pasting nearly identical lines, ask yourself "could I describe this with one rule that applies to all of them?" If yes, that's a loop.</p>
  `,

  /* 2.1 The part that makes it click */
  'topics-7-1-2-1': `
    <p>Loops don't exist because typing the same line many times is annoying — though it is. They exist because <em>you can't always know how many lines to type</em>. The data size lives in the runtime, not in the code. Loops are how you write code that doesn't need to know the count in advance.</p>
    <p>Once you internalize that, loops feel less like a "save typing" feature and more like a fundamental tool for handling unknown amounts of work. They're the bridge between code (fixed text) and data (variable amounts).</p>
  `,

  /* 2.2 Common confusions */
  'topics-7-1-2-2': `
    <p><strong>Confusion: thinking loops are only for "many" items</strong></p>
<pre class="language-javascript"><code class="language-javascript">// Some people only reach for loops when there are many items.
// But loops also handle ZERO items gracefully:
for (const item of []) {
  console.log(item);
}
// runs zero times, no error — exactly what you want.

// And they handle ONE item just fine:
for (const item of [42]) {
  console.log(item);
}
// runs once.

// loops shine because they handle 0, 1, 5, or 5000 with the same code.</code></pre>

    <p><strong>Confusion: thinking copy-paste is "more explicit" so it's better</strong></p>
<pre class="language-javascript"><code class="language-javascript">// "Looping is too clever — let me just write it out so it's clearer"
showItem(items[0]);
showItem(items[1]);
showItem(items[2]);

// what happens when items[3] is added later? You forget to add showItem(items[3]).
// what happens when items has only 2? items[2] is undefined, showItem crashes.
// what looks "explicit" is actually fragile.</code></pre>

    <p><strong>Confusion: thinking loops are inherently slow</strong></p>
    <p>Loops aren't slow because they're loops — they're slow only when they do too much work per iteration, or when they iterate too many times for the task. A loop running 1,000 times that does a tiny operation each time is fast. A loop running 5 times that triggers a network request each time is slow. The loop isn't the bottleneck; the work inside is.</p>

    <p><strong>Confusion: thinking every loop has to use a counter</strong></p>
<pre class="language-javascript"><code class="language-javascript">// for...of doesn't expose a counter — it just gives you items
for (const user of users) {
  // no "i" variable, no array indexing
  console.log(user.name);
}

// while doesn't use a counter either — it checks a condition
while (!isReady()) {
  wait();
}
// counters are common, not required.</code></pre>

    <p><strong>Confusion: thinking loops can replace functions or vice versa</strong></p>
<pre class="language-javascript"><code class="language-javascript">// Loops repeat the SAME code. Functions package up a chunk of code to call later.
// They solve different problems and often work together:

function greet(name) {           // function: reusable chunk
  console.log("hi " + name);
}

for (const name of names) {       // loop: do that chunk many times
  greet(name);
}</code></pre>
  `,

  /* 2.3 Common mistakes */
  'topics-7-1-2-3': `
<pre class="language-javascript"><code class="language-javascript">// Manually repeating instead of looping
const cart = getCartItems();
total = total + cart[0].price;
total = total + cart[1].price;
total = total + cart[2].price;
// only works for exactly 3 items — silently broken when cart size changes
// fix: use a loop
let total = 0;
for (const item of cart) {
  total = total + item.price;
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Hardcoding sizes that should be dynamic
function showFirstFive(items) {
  for (let i = 0; i < 5; i++) {
    console.log(items[i]);
  }
}
// crashes or shows undefined when items has fewer than 5
// fix: tie the loop count to the actual data
function showAll(items) {
  for (let i = 0; i < items.length; i++) {
    console.log(items[i]);
  }
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Reaching for a loop when one operation is enough
const numbers = [10];
let result;
for (const n of numbers) {
  result = n * 2;
}
// works, but if you KNOW there's exactly one item, just do it directly:
const result = numbers[0] * 2;
// loops are for variable amounts — single fixed operations don't need them.</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Avoiding loops because they "look complicated"
let names = "";
names = names + users[0].name + ", ";
names = names + users[1].name + ", ";
names = names + users[2].name + ", ";
// fragile and verbose
// fix: trust the loop, it's clearer once you're used to it
let names = "";
for (const user of users) {
  names = names + user.name + ", ";
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Ignoring the empty case
function getFirstItem(items) {
  return items[0];
}
// returns undefined when items is empty — silent bug downstream
// fix: handle the empty case explicitly
function getFirstItem(items) {
  if (items.length === 0) {
    return null;
  }
  return items[0];
}
// loops naturally handle empty inputs (zero iterations) — manual code often doesn't.</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-7-1-3-0': `
<pre class="language-javascript"><code class="language-javascript">// Without a loop — only works for exact-size lists
const scores = [85, 92, 78];
let totalScore = scores[0] + scores[1] + scores[2];
console.log(totalScore);   // 255

// With a loop — works for any size
const scores2 = [85, 92, 78, 65, 91, 88];
let totalScore2 = 0;
for (const score of scores2) {
  totalScore2 = totalScore2 + score;
}
console.log(totalScore2);   // 499

// Without a loop — manual list rendering
const tags = ["news", "tech", "javascript"];
let html = "<li>" + tags[0] + "</li>" +
           "<li>" + tags[1] + "</li>" +
           "<li>" + tags[2] + "</li>";

// With a loop — same logic, scales freely
let html2 = "";
for (const tag of tags) {
  html2 = html2 + "<li>" + tag + "</li>";
}

// Repeating a fixed action a fixed number of times
for (let i = 0; i < 3; i++) {
  console.log("retry attempt " + (i + 1));
}

// Looping until a condition is met (no fixed count)
let cardsDealt = 0;
while (cardsDealt < deck.length && !player.busts) {
  dealCard(player);
  cardsDealt = cardsDealt + 1;
}

// Empty-list case — loop just runs zero times, no error
const noItems = [];
for (const item of noItems) {
  console.log("never prints");
}
console.log("done");   // prints "done" right away</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-7-1-3-1': `
    <p><strong>Example: search results from an unknown-size response</strong></p>
<pre class="language-javascript"><code class="language-javascript">function showSearchResults(results) {
  const container = document.querySelector(".results");
  container.innerHTML = "";

  if (results.length === 0) {
    container.textContent = "No results found";
    return;
  }

  for (const result of results) {
    const card = document.createElement("div");
    card.className = "result";
    card.textContent = result.title;
    container.appendChild(card);
  }
}
// you don't know how many results the API will return — could be 1, 50, or 0.
// the loop handles all of them with the same code.</code></pre>

    <p><strong>Example: clearing every input on a form</strong></p>
<pre class="language-javascript"><code class="language-javascript">function clearForm(form) {
  const inputs = form.querySelectorAll("input, textarea");
  for (const input of inputs) {
    input.value = "";
  }
}
// the form might have 3 fields or 30. Same code clears all of them.</code></pre>

    <p><strong>Example: building a daily activity report</strong></p>
<pre class="language-javascript"><code class="language-javascript">function summarizeActivity(events) {
  const summary = {
    logins: 0,
    purchases: 0,
    pageViews: 0
  };

  for (const event of events) {
    if (event.type === "login") {
      summary.logins = summary.logins + 1;
    }
    if (event.type === "purchase") {
      summary.purchases = summary.purchases + 1;
    }
    if (event.type === "pageview") {
      summary.pageViews = summary.pageViews + 1;
    }
  }

  return summary;
}
// events could be an empty array, 100 items, or a million.
// the same loop produces a correct summary every time.</code></pre>

    <p><strong>Example: retrying a network call until it works</strong></p>
<pre class="language-javascript"><code class="language-javascript">async function fetchWithRetry(url, maxAttempts) {
  let attempt = 0;
  while (attempt < maxAttempts) {
    const response = await fetch(url);
    if (response.ok) {
      return response;
    }
    attempt = attempt + 1;
  }
  throw new Error("Failed after " + maxAttempts + " attempts");
}
// you don't know in advance whether attempt 1, 2, or 5 will succeed.
// the loop handles "keep going until success or limit" naturally.</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-7-1-3-2': `
    <ul>
      <li><strong>What loops are</strong> → previous lesson, the basic mechanics</li>
      <li><strong>Repeating code</strong> → next lesson, the core idea in more depth</li>
      <li><strong>Arrays</strong> → the most common data type that needs loops</li>
      <li><strong>Functions</strong> → often combined with loops to apply the same operation many times</li>
      <li><strong>Variables outside the loop</strong> → how you accumulate results across iterations</li>
      <li><strong>Empty collections</strong> → loops handle zero-length data without special cases</li>
      <li><strong>Conditions inside loops</strong> → combining <code>if</code> with loops to filter or branch per item</li>
      <li><strong>Performance</strong> → why loops aren't inherently slow but their bodies can be</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-7-1-3-3': `
    <ul>
      <li>What loops are</li>
      <li>Repeating code</li>
      <li>Arrays and lists</li>
      <li><code>for</code> loop</li>
      <li><code>for...of</code> loop</li>
      <li><code>while</code> loop</li>
      <li>Looping vs copy-paste</li>
      <li>Empty array handling</li>
    </ul>
  `,
  /* ========================================================= 
   Sub-lesson: 3.8.3 Loops → repeating code
 =======================================================*/

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-7-2-0-0': `
    <p>"Repeating code" is the core idea behind every loop: take one block of code and run it more than once. Each repetition is called an <strong>iteration</strong>, and each iteration runs the body in full from top to bottom before starting the next one.</p>
    <p>The block doesn't change between repetitions — it's the same instructions every time. What changes is the data the block is working on: the counter, the current item, or whatever the loop is tracking.</p>
  `,

  /* 0.1 Syntax */
  'topics-7-2-0-1': `
<pre class="language-javascript"><code class="language-javascript">for (let i = 0; i < 3; i++) {
  console.log("repeat #" + i);
}

// prints:
//   repeat #0
//   repeat #1
//   repeat #2

// the body — console.log(...) — is one line written ONCE.
// it ran THREE times, with i being a different value each time.</code></pre>
    <p>Notice that the only thing different across the three outputs is the value of <code>i</code>. The repeating block is identical; the data flowing through it changes.</p>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-7-2-0-2': `
<pre class="language-javascript"><code class="language-javascript">const fruits = ["apple", "banana", "cherry"];

for (const fruit of fruits) {
  console.log("eating: " + fruit);
}

// prints:
//   eating: apple
//   eating: banana
//   eating: cherry

// One iteration =
//   1. pick the next item from fruits
//   2. assign it to the variable named "fruit"
//   3. run the body once with that value
//   4. when body finishes, return to step 1

// the body runs three times, but the CODE only exists in one place.
// the variable "fruit" is what changes — it's reassigned each iteration.</code></pre>
    <p>The loop machinery handles the "do this again" part. Your code only describes a single round of work — the loop applies that work to each piece of data in turn.</p>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-7-2-0-3': `
    <p>A few things about repetition that are worth being explicit about:</p>

    <p><strong>Each iteration runs the entire body before the next starts.</strong> JavaScript doesn't run all the iterations in parallel — it finishes one completely, then moves to the next:</p>
<pre class="language-javascript"><code class="language-javascript">for (let i = 0; i < 3; i++) {
  console.log("start", i);
  console.log("middle", i);
  console.log("end", i);
}

// prints:
//   start 0
//   middle 0
//   end 0
//   start 1
//   middle 1
//   end 1
//   start 2
//   middle 2
//   end 2

// not "start 0, start 1, start 2, then middle 0..." — full body per iteration.</code></pre>

    <p><strong>Variables declared inside the body are recreated each iteration.</strong> Anything declared with <code>let</code> or <code>const</code> inside the loop is a fresh variable every round:</p>
<pre class="language-javascript"><code class="language-javascript">for (let i = 0; i < 3; i++) {
  const message = "hello " + i;   // new variable each iteration
  console.log(message);
}
// "message" exists only inside the body, recreated each time.</code></pre>

    <p><strong>Variables declared outside the loop persist across iterations.</strong> This is how you accumulate results — totals, lists, flags — that need to survive between rounds:</p>
<pre class="language-javascript"><code class="language-javascript">let total = 0;                           // declared OUTSIDE the loop
for (let i = 1; i <= 5; i++) {
  total = total + i;                     // updated INSIDE the loop
}
console.log(total);   // 15

// total survives all 5 iterations because it lives in the surrounding scope.</code></pre>

    <p>This in/out-of-loop variable distinction is the most useful pattern in repeating code — it's how you turn many small steps into one final result.</p>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-7-2-1-0': `
    <p>Some kinds of work can't be expressed in a single statement. Adding up a list of numbers requires touching each number once. Showing a card for every product means creating one card per product. These are tasks that are inherently made of many similar steps.</p>
    <p>Repeating code is the mechanism that lets one description handle all those steps. You write what one step looks like; the loop runs it as many times as needed.</p>
  `,

  /* 1.1 Why use it */
  'topics-7-2-1-1': `
    <p>Anytime work breaks down into "do this for each one of those," repetition is the pattern that fits:</p>
<pre class="language-javascript"><code class="language-javascript">// Send one email per recipient
for (const recipient of recipients) {
  sendEmail(recipient);
}

// Add up one price per item
let total = 0;
for (const item of cart) {
  total = total + item.price;
}

// Render one card per result
for (const result of searchResults) {
  renderCard(result);
}

// Validate one field per form input
for (const field of formFields) {
  validate(field);
}</code></pre>

    <p>Each of these has the same shape: a thing to do, applied to each item in a collection. The loop is the bridge between "the action" and "all the items."</p>
  `,

  /* 1.2 Where you use it */
  'topics-7-2-1-2': `
<pre class="language-javascript"><code class="language-javascript">// Aggregating — combine many values into one result
let total = 0;
for (const order of orders) {
  total = total + order.amount;
}

// Transforming — make a new collection from an old one
const upperNames = [];
for (const name of names) {
  upperNames.push(name.toUpperCase());
}

// Filtering — keep only items that match a rule
const activeUsers = [];
for (const user of users) {
  if (user.isActive) {
    activeUsers.push(user);
  }
}

// Searching — find a specific item
let matchedOrder = null;
for (const order of orders) {
  if (order.id === targetId) {
    matchedOrder = order;
    break;
  }
}

// Counting — track how many of something
let errorCount = 0;
for (const log of logs) {
  if (log.level === "error") {
    errorCount = errorCount + 1;
  }
}</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-7-2-1-3': `
    <p>Repeating code is the same idea as a recipe step that says "for each potato, peel it." You don't write a different instruction for each potato. You write one peeling instruction, and the rule says to apply it to every potato in the bag. One potato or twenty, the instruction is the same.</p>
    <p>The same applies to code. The loop body is the instruction. The collection (or counter range, or condition) is the "for each" part. Whatever's in the body gets applied once per item, with the loop handling the "next one, please" part automatically.</p>
    <p>What makes it useful is that the instruction stays in one place. If you change how potatoes get peeled, you change one line — and now every potato gets peeled the new way. No hunting through twenty separate instructions to update each one.</p>
  `,

  /* 1.4 Mental model */
  'topics-7-2-1-4': `
    <p>Picture a printer printing a long document. The printer doesn't have separate code for each page — it has one routine: pull paper, lay down ink, eject. That routine runs once per page. Page one runs the routine; page two runs the same routine; page 500 runs the same routine. The routine doesn't change, but the page being printed does.</p>
    <p>Code repetition works the same way. The loop body is the printing routine. Each iteration is one page. The routine doesn't get rewritten between pages — it just gets executed again with whatever data this round is supposed to handle.</p>
    <p>Whatever the routine produces — printed pages, accumulated totals, items added to a list — builds up across iterations. By the time the loop ends, you've got the result of running that routine N times, all from one description of what one round looks like.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-7-2-1-5': `
<pre class="language-javascript"><code class="language-javascript">const numbers = [10, 20, 30];
let total = 0;

for (const n of numbers) {
  total = total + n;
}

console.log(total);   // 60

// JavaScript is thinking:
// 1. Create the array [10, 20, 30].
// 2. Create total, value 0.
// 3. Enter the loop. Pick the first item: 10. Assign to n.
//    Run body: total = 0 + 10 → total is now 10.
// 4. Pick the next item: 20. Assign to n.
//    Run body: total = 10 + 20 → total is now 30.
// 5. Pick the next item: 30. Assign to n.
//    Run body: total = 30 + 30 → total is now 60.
// 6. No more items. Exit the loop.
// 7. Log total → 60.

// Notice:
//   - the body "total = total + n" is written once, runs three times.
//   - n is reassigned each iteration.
//   - total persists across iterations (declared outside the loop).
//   - the result (60) is the accumulation of all three rounds.</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-7-2-2-0': `
    <p>If a loop's output looks wrong, the fastest way to see what's happening is to log the data at the start and end of each iteration:</p>
<pre class="language-javascript"><code class="language-javascript">let total = 0;
for (const item of cart) {
  console.log("BEFORE:", "item:", item, "total:", total);
  total = total + item.price;
  console.log("AFTER:", "item:", item, "total:", total);
}

// you'll see something like:
//   BEFORE: item: { price: 10 } total: 0
//   AFTER:  item: { price: 10 } total: 10
//   BEFORE: item: { price: 20 } total: 10
//   AFTER:  item: { price: 20 } total: 30
//   ...

// from this you can tell exactly what each iteration did,
// what state it started with, and what state it ended with.</code></pre>

    <p>Most "the loop produced the wrong result" bugs come from one of two things: the body is doing the wrong work each round, or the variable that holds the running result is being reset somewhere it shouldn't be.</p>
  `,

  /* 2.1 The part that makes it click */
  'topics-7-2-2-1': `
    <p>The loop body is just regular code. It's not a special "loop body" syntax — it's a plain block of statements. The loop's only job is to run that block more than once.</p>
    <p>Once you see that, the body stops feeling mysterious. Whatever you'd write in a function, you can write in a loop body. Whatever rules apply to variables and conditions outside loops apply inside loops too. The "loop" part is just the wrapper that says "run this again."</p>
  `,

  /* 2.2 Common confusions */
  'topics-7-2-2-2': `
    <p><strong>Confusion: thinking iterations run all at once</strong></p>
<pre class="language-javascript"><code class="language-javascript">for (let i = 0; i < 3; i++) {
  fetchUser(i);
}
// some people picture this as 3 fetches happening simultaneously.
// what actually happens: iteration 0 finishes (including waiting if synchronous),
// then iteration 1 starts, then iteration 2.
// for synchronous code, iterations are strictly one-at-a-time.</code></pre>

    <p><strong>Confusion: redeclaring the accumulator inside the body</strong></p>
<pre class="language-javascript"><code class="language-javascript">// BUG — total is reset each iteration
for (const price of prices) {
  let total = 0;
  total = total + price;
}
// after the loop, total doesn't even exist outside — and it was 0 at the
// start of every round, so nothing accumulated.

// FIX — declare total OUTSIDE
let total = 0;
for (const price of prices) {
  total = total + price;
}
console.log(total);   // accumulated correctly</code></pre>

    <p><strong>Confusion: thinking the body has to be tiny</strong></p>
<pre class="language-javascript"><code class="language-javascript">// Bodies can be as long and complex as needed
for (const order of orders) {
  if (!order.paid) {
    continue;
  }
  const customer = lookupCustomer(order.customerId);
  const summary = formatOrderSummary(order, customer);
  sendEmail(customer.email, summary);
  logActivity("order_emailed", order.id);
}
// nothing wrong with a multi-step body — sometimes that's exactly what you need.</code></pre>

    <p><strong>Confusion: assuming each iteration "knows" about the others</strong></p>
<pre class="language-javascript"><code class="language-javascript">for (const n of [1, 2, 3]) {
  // this iteration doesn't know what the previous one did
  // unless you persist information OUTSIDE the loop
}

// to share state between iterations, store it in a variable outside:
let previous = null;
for (const n of [1, 2, 3]) {
  console.log("previous was:", previous);
  previous = n;
}</code></pre>

    <p><strong>Confusion: thinking loops always need to produce something</strong></p>
<pre class="language-javascript"><code class="language-javascript">// Loops can do work that has no return value — pure side effects
for (const button of buttons) {
  button.disabled = true;
}
// this loop doesn't accumulate anything; it just modifies each button.
// loops aren't required to "produce a result" — sometimes they just do work.</code></pre>
  `,

  /* 2.3 Common mistakes */
  'topics-7-2-2-3': `
<pre class="language-javascript"><code class="language-javascript">for (const item of cart) {
  let total = 0;
  total = total + item.price;
}
console.log(total);
// total declared INSIDE — fresh each iteration, doesn't exist outside the loop
// fix: declare outside, update inside
let total = 0;
for (const item of cart) {
  total = total + item.price;
}
console.log(total);</code></pre>

<pre class="language-javascript"><code class="language-javascript">for (const item of items) {
  results = item * 2;
}
// each iteration overwrites results — only the LAST one survives
// fix: collect into a list with .push()
const results = [];
for (const item of items) {
  results.push(item * 2);
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">const items = [1, 2, 3, 4, 5];
for (const item of items) {
  if (item > 2) {
    items.push(item * 10);
  }
}
// modifying the array you're looping over — can cause surprising behavior
// items grows during iteration, the loop may never end
// fix: build a new array instead
const items = [1, 2, 3, 4, 5];
const additions = [];
for (const item of items) {
  if (item > 2) {
    additions.push(item * 10);
  }
}
const result = items.concat(additions);</code></pre>

<pre class="language-javascript"><code class="language-javascript">for (const user of users) {
  if (user.id === target) {
    foundUser = user;
  }
}
// keeps looping even after finding the match — wastes work
// fix: use break to stop early
let foundUser = null;
for (const user of users) {
  if (user.id === target) {
    foundUser = user;
    break;
  }
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">for (let i = 0; i < items.length; i++)
  console.log(items[i]);
  console.log("---");
// the second log isn't part of the loop body — it runs ONCE after the loop
// fix: use braces around the body, even for one-statement bodies
for (let i = 0; i < items.length; i++) {
  console.log(items[i]);
  console.log("---");
}</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-7-2-3-0': `
<pre class="language-javascript"><code class="language-javascript">// Repeating to print
for (let i = 0; i < 3; i++) {
  console.log("again");
}

// Repeating to count
let count = 0;
for (const item of items) {
  count = count + 1;
}
console.log("how many items:", count);

// Repeating to accumulate a total
let total = 0;
const prices = [9.99, 14.50, 3.75];
for (const price of prices) {
  total = total + price;
}
console.log("total:", total);   // 28.24

// Repeating to build a new list
const original = [1, 2, 3];
const squared = [];
for (const n of original) {
  squared.push(n * n);
}
console.log(squared);   // [1, 4, 9]

// Repeating with a side effect (no result)
const buttons = document.querySelectorAll("button");
for (const btn of buttons) {
  btn.style.opacity = "0.5";
}

// Repeating with a state that carries between rounds
const numbers = [3, 1, 4, 1, 5, 9, 2, 6];
let max = numbers[0];
for (const n of numbers) {
  if (n > max) {
    max = n;
  }
}
console.log("largest:", max);   // 9</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-7-2-3-1': `
    <p><strong>Example: building a comma-separated tag list</strong></p>
<pre class="language-javascript"><code class="language-javascript">function formatTags(tags) {
  if (tags.length === 0) {
    return "(no tags)";
  }
  let output = "";
  for (let i = 0; i < tags.length; i++) {
    output = output + tags[i];
    if (i < tags.length - 1) {
      output = output + ", ";
    }
  }
  return output;
}
console.log(formatTags(["news", "tech", "css"]));   // "news, tech, css"</code></pre>

    <p><strong>Example: counting words in a list of comments</strong></p>
<pre class="language-javascript"><code class="language-javascript">function totalWords(comments) {
  let total = 0;
  for (const comment of comments) {
    const words = comment.text.split(" ");
    total = total + words.length;
  }
  return total;
}
// the body splits the comment, counts words, adds to total — repeated for each comment.</code></pre>

    <p><strong>Example: filtering a list of products by price range</strong></p>
<pre class="language-javascript"><code class="language-javascript">function withinPriceRange(products, min, max) {
  const matches = [];
  for (const product of products) {
    if (product.price >= min && product.price <= max) {
      matches.push(product);
    }
  }
  return matches;
}
// each iteration: check one product, add it if it qualifies. Result builds up across rounds.</code></pre>

    <p><strong>Example: applying a CSS class to every active tab</strong></p>
<pre class="language-javascript"><code class="language-javascript">function highlightActiveTabs(tabs) {
  for (const tab of tabs) {
    if (tab.isActive) {
      tab.element.classList.add("highlighted");
    } else {
      tab.element.classList.remove("highlighted");
    }
  }
}
// pure side effects per iteration — no accumulated result, just a DOM update per tab.</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-7-2-3-2': `
    <ul>
      <li><strong>Variables outside vs inside the loop</strong> → controls what persists between iterations</li>
      <li><strong>Accumulator pattern</strong> → starting with a base value and adding to it each round</li>
      <li><strong>Building lists with <code>.push()</code></strong> → the most common way to collect results across iterations</li>
      <li><strong>Side effects vs returned values</strong> → loops can either build a result or just do work each round</li>
      <li><strong>Conditions inside loop bodies</strong> → using <code>if</code> to filter, branch, or skip per iteration</li>
      <li><strong><code>break</code> and <code>continue</code></strong> → controlling when to stop or skip an iteration</li>
      <li><strong>Modifying the collection mid-loop</strong> → a frequent source of subtle bugs</li>
      <li><strong>Performance</strong> → bodies that do expensive work multiply that cost by N iterations</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-7-2-3-3': `
    <ul>
      <li>Variables declared inside vs outside loops</li>
      <li>Accumulator pattern</li>
      <li>Building arrays with <code>.push()</code></li>
      <li><code>break</code> and <code>continue</code></li>
      <li>Conditions inside loop bodies</li>
      <li>Modifying arrays during iteration</li>
      <li><code>for</code>, <code>while</code>, and <code>for...of</code></li>
      <li>Performance considerations in loop bodies</li>
    </ul>
  `,
  /* ========================================================= 
   Sub-lesson: 3.8.4 Loops → for loop
 =======================================================*/

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-7-3-0-0': `
    <p>The <code>for</code> loop is the classic counted loop. You give it three pieces of information up front — where to start, when to stop, and how to step forward — and it handles the repetition based on those rules.</p>
    <p>It's the loop you reach for when you need a counter: doing something a fixed number of times, or walking through items by their position in an array.</p>
  `,

  /* 0.1 Syntax */
  'topics-7-3-0-1': `
<pre class="language-javascript"><code class="language-javascript">for (let i = 0; i < 5; i++) {
  console.log("step " + i);
}

// prints:
//   step 0
//   step 1
//   step 2
//   step 3
//   step 4

// the three pieces inside the parentheses, separated by semicolons:
//   let i = 0    → setup, runs once before the loop starts
//   i < 5        → condition, checked before each iteration
//   i++          → update, runs after each iteration</code></pre>
    <p>That three-part header is what makes a <code>for</code> loop different from other loop types. All three pieces are visible in one line, so you can see at a glance how the loop is structured.</p>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-7-3-0-2': `
<pre class="language-javascript"><code class="language-javascript">for (let i = 0; i < 3; i++) {
  console.log("i is " + i);
}

// for       → keyword that starts the loop
// (         → opens the header
//   let i = 0  → SETUP: declare the counter and give it a starting value
//   ;          → separator
//   i < 3      → CONDITION: keep looping while this is true
//   ;          → separator
//   i++        → UPDATE: what to do after each iteration
// )         → closes the header
// {         → opens the body
//   ...       → BODY: code that runs each iteration
// }         → closes the body

// the order JavaScript runs them:
//   1. setup (once)
//   2. check condition → if false, exit; if true, continue
//   3. run body
//   4. run update
//   5. go back to step 2</code></pre>
    <p>The semicolons between the three header pieces are mandatory — even if you leave a piece blank, the semicolons stay.</p>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-7-3-0-3': `
    <p><strong>The setup runs exactly once.</strong> It's where you declare and initialize the counter. Most of the time it's <code>let i = 0</code>, but it can be any starting value:</p>
<pre class="language-javascript"><code class="language-javascript">for (let i = 10; i > 0; i--) {     // count DOWN from 10
  console.log(i);
}

for (let i = 5; i <= 50; i = i + 5) {  // step by 5s
  console.log(i);
}</code></pre>

    <p><strong>The condition is checked before every iteration, including the very first one.</strong> If the condition is false at the start, the body never runs:</p>
<pre class="language-javascript"><code class="language-javascript">for (let i = 0; i < 0; i++) {
  console.log("never prints");
}
// 0 < 0 is false → loop never enters the body</code></pre>

    <p><strong>The update runs after every iteration's body finishes.</strong> It's how the counter moves forward (or backward, or in any pattern). The most common form is <code>i++</code>, which is shorthand for <code>i = i + 1</code>:</p>
<pre class="language-javascript"><code class="language-javascript">// These two are identical
for (let i = 0; i < 5; i++) { ... }
for (let i = 0; i < 5; i = i + 1) { ... }</code></pre>

    <p><strong>The counter declared with <code>let</code> is scoped to the loop.</strong> It exists only inside the loop's header and body — accessing it after the loop ends is an error:</p>
<pre class="language-javascript"><code class="language-javascript">for (let i = 0; i < 3; i++) {
  console.log(i);   // works
}
console.log(i);     // ReferenceError — i doesn't exist out here</code></pre>

    <p><strong>All three header parts can be omitted</strong> (creating an infinite loop you'd then break out of with <code>break</code>), but in practice all three are usually filled in:</p>
<pre class="language-javascript"><code class="language-javascript">// Technically valid but rare — relies on break to exit
for (;;) {
  if (someCondition) {
    break;
  }
}</code></pre>

    <p>You'll see this form occasionally for "loop forever until something happens," but a <code>while (true)</code> is usually clearer when that's the intent.</p>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-7-3-1-0': `
    <p>A lot of loops need a counter — either to repeat a fixed number of times, or to track which position you're at in a list. The <code>for</code> loop bundles the counter setup, the stop condition, and the counter update into one compact line so all three are visible together.</p>
    <p>Without that bundling, you'd be writing the counter logic by hand every time: declare it before the loop, check it inside, update it at the bottom of the body. The <code>for</code> loop makes the pattern official and keeps it from getting scattered across the code.</p>
  `,

  /* 1.1 Why use it */
  'topics-7-3-1-1': `
    <p>The <code>for</code> loop is the right choice anytime you need to know <em>which iteration you're on</em>:</p>
<pre class="language-javascript"><code class="language-javascript">// Doing something a fixed number of times
for (let i = 0; i < 10; i++) {
  generateRandomCard();
}

// Walking an array by index — useful when you need the index
const items = ["a", "b", "c"];
for (let i = 0; i < items.length; i++) {
  console.log(i + ": " + items[i]);
}

// Stepping through every other item
for (let i = 0; i < items.length; i = i + 2) {
  console.log(items[i]);
}

// Counting in reverse
for (let i = 10; i >= 1; i--) {
  console.log(i);
}
console.log("liftoff!");</code></pre>

    <p>If you don't need the index — just each item in an array — <code>for...of</code> is usually cleaner. Reach for <code>for</code> when the index actually matters.</p>
  `,

  /* 1.2 Where you use it */
  'topics-7-3-1-2': `
<pre class="language-javascript"><code class="language-javascript">// Repeating a fixed number of times
for (let i = 0; i < 3; i++) {
  console.log("attempt " + (i + 1));
}

// Walking an array by index when position matters
const players = ["Alice", "Bob", "Carol"];
for (let i = 0; i < players.length; i++) {
  console.log("Player " + (i + 1) + ": " + players[i]);
}

// Iterating in reverse — useful when removing items
for (let i = list.length - 1; i >= 0; i--) {
  if (list[i].deleted) {
    list.splice(i, 1);
  }
}

// Building a multiplication table row
const x = 7;
for (let i = 1; i <= 10; i++) {
  console.log(x + " x " + i + " = " + (x * i));
}

// Generating IDs or batch-creating elements
for (let i = 1; i <= 5; i++) {
  const button = document.createElement("button");
  button.id = "btn-" + i;
  button.textContent = "Button " + i;
  document.body.appendChild(button);
}

// Stepping by an amount other than 1
for (let i = 0; i < 100; i = i + 10) {
  console.log(i);   // 0, 10, 20, 30, ...
}</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-7-3-1-3': `
    <p>A <code>for</code> loop is like setting a stopwatch with three rules: where to start, when to stop, and how much time to add each tick. "Start at 0, stop when you reach 10, add 1 each tick." Once you've set those rules, the stopwatch handles the counting on its own.</p>
    <p>The body of the loop is what you do at each tick. The header is the rules for when to tick and when to stop. JavaScript follows the rules — start, check if you should stop, do the work, update — until the stop condition is met.</p>
    <p>The reason all three rules are in the loop's header (instead of scattered around) is so you can read them at a glance. Looking at the first line of any <code>for</code> loop tells you the whole shape of the repetition.</p>
  `,

  /* 1.4 Mental model */
  'topics-7-3-1-4': `
    <p>Picture a librarian shelving a stack of books. The librarian has a system: start at slot 1, place a book, move to the next slot, place another book, and keep going until the slots run out or the books run out. They're not making decisions about which slot to use each time — they have a rule, and they follow it.</p>
    <p>That's a <code>for</code> loop. The slot number is the counter. The rule "stop when slots run out" is the condition. The rule "move to the next slot" is the update. The act of placing a book is the body. Once the librarian sets the system at the start of the day, the rest is mechanical.</p>
    <p>The reason the system works is that everything is decided up front. The librarian doesn't pause between books to think "where am I now? when should I stop?" — those questions have one answer each, baked into the rules. That's why <code>for</code> loops are so good when you know the structure of the work in advance.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-7-3-1-5': `
<pre class="language-javascript"><code class="language-javascript">for (let i = 1; i <= 3; i++) {
  console.log("hello " + i);
}
console.log("after loop");

// prints:
//   hello 1
//   hello 2
//   hello 3
//   after loop

// JavaScript is thinking:
// 1. Run setup: let i = 1. Counter is now 1.
// 2. Check condition: 1 <= 3 → true. Enter body.
// 3. Body: log "hello 1".
// 4. Run update: i++. Counter is now 2.
// 5. Check condition: 2 <= 3 → true. Enter body.
// 6. Body: log "hello 2".
// 7. Run update: i++. Counter is now 3.
// 8. Check condition: 3 <= 3 → true. Enter body.
// 9. Body: log "hello 3".
// 10. Run update: i++. Counter is now 4.
// 11. Check condition: 4 <= 3 → false. Exit loop.
// 12. Continue with code after the loop. Log "after loop".

// notice the order: setup ONCE, then condition→body→update repeats.
// the update runs at the END of each iteration, not the start.</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-7-3-2-0': `
    <p>If a <code>for</code> loop is running too many or too few times, log the counter at the start of each iteration to see exactly how it's progressing:</p>
<pre class="language-javascript"><code class="language-javascript">for (let i = 0; i <= items.length; i++) {
  console.log("i:", i, "items[i]:", items[i]);
  // ... rest of body
}

// for items = ["a", "b", "c"], you'd see:
//   i: 0 items[i]: a
//   i: 1 items[i]: b
//   i: 2 items[i]: c
//   i: 3 items[i]: undefined   ← off-by-one bug visible here!

// the last line reveals the issue: i went one past the array's length
// because the condition was <= instead of <.
// fix: change <= to <</code></pre>

    <p>Most <code>for</code> loop bugs are off-by-one mistakes (running one too many or one too few times) and stale counter starts. Logging the counter at every iteration makes both kinds obvious within seconds.</p>
  `,

  /* 2.1 The part that makes it click */
  'topics-7-3-2-1': `
    <p>The three header pieces aren't a special "loop language" — they're just three regular statements. <code>let i = 0</code> declares a variable. <code>i &lt; 5</code> is a condition expression. <code>i++</code> is an update statement. The <code>for</code> loop just collects them into one place because they always appear together for counted loops.</p>
    <p>Once you see them as three normal statements that the loop calls in a particular order, the structure stops feeling magical. The loop is just an automated way to run "setup, then condition-body-update repeatedly until the condition fails."</p>
  `,

  /* 2.2 Common confusions */
  'topics-7-3-2-2': `
    <p><strong>Confusion: <code>&lt;</code> vs <code>&lt;=</code> in the condition</strong></p>
<pre class="language-javascript"><code class="language-javascript">// Walking an array — use < (because indexes go 0 to length-1)
for (let i = 0; i < items.length; i++) {
  console.log(items[i]);   // safe
}

// Counting up to a target inclusively — use <=
for (let i = 1; i <= 10; i++) {
  console.log(i);   // prints 1 through 10
}

// Mixing them up causes off-by-one bugs:
for (let i = 0; i <= items.length; i++) {
  console.log(items[i]);   // last iteration logs undefined
}</code></pre>

    <p><strong>Confusion: forgetting <code>let</code> in the setup</strong></p>
<pre class="language-javascript"><code class="language-javascript">// Without let — i becomes a global variable (bad)
for (i = 0; i < 5; i++) {
  console.log(i);
}
// works, but i now lives outside the loop forever — pollutes the surrounding scope

// With let — i is properly scoped to the loop (good)
for (let i = 0; i < 5; i++) {
  console.log(i);
}</code></pre>

    <p><strong>Confusion: thinking the update runs before the body</strong></p>
<pre class="language-javascript"><code class="language-javascript">for (let i = 0; i < 3; i++) {
  console.log(i);
}
// prints 0, 1, 2 — NOT 1, 2, 3

// the order is: setup → check → body → update → check → body → update ...
// the update runs AFTER each body, then the condition checks again.</code></pre>

    <p><strong>Confusion: using <code>i++</code> when you wanted a different step</strong></p>
<pre class="language-javascript"><code class="language-javascript">// i++ adds 1 each time — the most common case
for (let i = 0; i < 10; i++) { ... }    // 0, 1, 2, ..., 9

// i = i + 2 steps by 2
for (let i = 0; i < 10; i = i + 2) { ... }   // 0, 2, 4, 6, 8

// i-- counts down by 1
for (let i = 10; i > 0; i--) { ... }    // 10, 9, 8, ..., 1

// the update can be any expression that changes the counter.
// if you want a step other than 1, the third slot is where you specify it.</code></pre>

    <p><strong>Confusion: putting the wrong work in the header</strong></p>
<pre class="language-javascript"><code class="language-javascript">// BUG — doing work inside the update slot
for (let i = 0; i < items.length; processItem(items[i]), i++) {
  // empty body
}
// works, but it's hard to read — the update slot should ONLY change the counter.

// FIX — put the work in the body where it belongs
for (let i = 0; i < items.length; i++) {
  processItem(items[i]);
}</code></pre>
  `,

  /* 2.3 Common mistakes */
  'topics-7-3-2-3': `
<pre class="language-javascript"><code class="language-javascript">for (let i = 0; i <= items.length; i++) {
  console.log(items[i]);
}
// off-by-one: <= goes one past the last valid index, prints undefined at the end
// fix: use < instead of <=
for (let i = 0; i < items.length; i++) {
  console.log(items[i]);
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">for (let i = 1; i < items.length; i++) {
  console.log(items[i]);
}
// starts at 1 — skips items[0]
// fix: start at 0 unless you intentionally want to skip the first item
for (let i = 0; i < items.length; i++) {
  console.log(items[i]);
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">for (let i = 0; i < 5; i--) {
  console.log(i);
}
// counter goes 0, -1, -2, ... condition stays true forever (negative numbers are < 5)
// fix: use i++ when counting up
for (let i = 0; i < 5; i++) {
  console.log(i);
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">for (let i = 0; i < 5; i++);
{
  console.log(i);
}
// the semicolon after the header makes the loop body EMPTY
// the { console.log... } block runs ONCE after the loop, and i doesn't exist there
// fix: remove the stray semicolon
for (let i = 0; i < 5; i++) {
  console.log(i);
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">for (let i = 0; i < items.length; i++) {
  if (items[i].toDelete) {
    items.splice(i, 1);
  }
}
// modifying the array WHILE looping forward causes skipped items
// after splice, items shifts down but i still moves up — next item gets missed
// fix: loop in reverse when removing
for (let i = items.length - 1; i >= 0; i--) {
  if (items[i].toDelete) {
    items.splice(i, 1);
  }
}</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-7-3-3-0': `
<pre class="language-javascript"><code class="language-javascript">// Basic counted repetition
for (let i = 0; i < 3; i++) {
  console.log("round " + (i + 1));
}

// Walking through an array by index
const fruits = ["apple", "banana", "cherry"];
for (let i = 0; i < fruits.length; i++) {
  console.log(i + 1 + ". " + fruits[i]);
}

// Counting backwards
for (let i = 5; i >= 1; i--) {
  console.log(i);
}
console.log("go!");

// Stepping by a custom amount
for (let i = 0; i <= 100; i = i + 25) {
  console.log(i + "%");
}

// Building up a result
let total = 0;
for (let i = 1; i <= 10; i++) {
  total = total + i;
}
console.log("sum of 1-10:", total);   // 55

// Generating elements
for (let i = 1; i <= 4; i++) {
  const div = document.createElement("div");
  div.textContent = "Box " + i;
  div.id = "box-" + i;
  document.body.appendChild(div);
}

// Reverse iteration to safely remove items
const numbers = [1, 2, 3, 4, 5];
for (let i = numbers.length - 1; i >= 0; i--) {
  if (numbers[i] % 2 === 0) {
    numbers.splice(i, 1);
  }
}
console.log(numbers);   // [1, 3, 5]</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-7-3-3-1': `
    <p><strong>Example: rendering a leaderboard with rank numbers</strong></p>
<pre class="language-javascript"><code class="language-javascript">function renderLeaderboard(players) {
  const list = document.querySelector(".leaderboard");
  list.innerHTML = "";

  for (let i = 0; i < players.length; i++) {
    const row = document.createElement("li");
    const rank = i + 1;
    row.textContent = rank + ". " + players[i].name + " — " + players[i].score;
    list.appendChild(row);
  }
}
// the index i is essential here — we need it to display the rank.</code></pre>

    <p><strong>Example: pagination links</strong></p>
<pre class="language-javascript"><code class="language-javascript">function buildPaginationLinks(totalPages, currentPage) {
  const container = document.querySelector(".pagination");
  container.innerHTML = "";

  for (let i = 1; i <= totalPages; i++) {
    const link = document.createElement("a");
    link.textContent = i;
    link.href = "?page=" + i;
    if (i === currentPage) {
      link.classList.add("current");
    }
    container.appendChild(link);
  }
}
// counting from 1 to totalPages, with the index doubling as the page number.</code></pre>

    <p><strong>Example: removing failed uploads from a queue</strong></p>
<pre class="language-javascript"><code class="language-javascript">function removeFailedUploads(uploads) {
  for (let i = uploads.length - 1; i >= 0; i--) {
    if (uploads[i].status === "failed") {
      uploads.splice(i, 1);
    }
  }
}
// reverse iteration is needed because we're removing items from the array as we go.</code></pre>

    <p><strong>Example: a basic countdown timer display</strong></p>
<pre class="language-javascript"><code class="language-javascript">function logCountdown(seconds) {
  for (let i = seconds; i > 0; i--) {
    console.log(i);
  }
  console.log("time's up!");
}
logCountdown(3);
// prints: 3, 2, 1, time's up!</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-7-3-3-2': `
    <ul>
      <li><strong>Loop counter variable</strong> → the <code>i</code> in <code>for (let i = ...)</code></li>
      <li><strong><code>i = 0</code></strong> → the standard starting value for array indexing</li>
      <li><strong><code>i &lt; array.length</code></strong> → the standard stop condition for array walking</li>
      <li><strong><code>i++</code></strong> → the standard step</li>
      <li><strong>Indexes starting at 0</strong> → why <code>i = 0</code> and <code>i &lt; length</code> work together</li>
      <li><strong><code>array[i]</code></strong> → how the counter is used to read the current item</li>
      <li><strong>Off-by-one errors</strong> → the most common <code>for</code> loop mistake</li>
      <li><strong><code>for...of</code> loop</strong> → cleaner alternative when you don't need the index</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-7-3-3-3': `
    <ul>
      <li>Loop counter variable</li>
      <li><code>i = 0</code> starting value</li>
      <li><code>i &lt; array.length</code> stop condition</li>
      <li><code>i++</code> increment</li>
      <li>Indexes starting at 0</li>
      <li><code>array[i]</code> for the current item</li>
      <li><code>for...of</code> loop</li>
      <li>Off-by-one errors</li>
    </ul>
  `,

  /* ========================================================= 
   Sub-lesson: 3.8.5 Loops → while loop
 =======================================================*/

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-7-4-0-0': `
    <p>The <code>while</code> loop is the simplest kind of loop. It has just one rule: keep running the body for as long as the condition is true. There's no built-in counter, no fixed number of iterations — just a condition that's checked before each round.</p>
    <p>It's the loop you reach for when you don't know how many times you'll need to repeat. You just know "keep doing this until something changes."</p>
  `,

  /* 0.1 Syntax */
  'topics-7-4-0-1': `
<pre class="language-javascript"><code class="language-javascript">let count = 0;

while (count < 3) {
  console.log("count is " + count);
  count = count + 1;
}

// prints:
//   count is 0
//   count is 1
//   count is 2

// the structure is just: while (condition) { body }
// no setup, no update — both are your responsibility inside or outside the loop.</code></pre>
    <p>Unlike a <code>for</code> loop, there's nothing in the loop's header except the condition. Whatever variables the condition depends on need to be set up before the loop and updated inside it.</p>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-7-4-0-2': `
<pre class="language-javascript"><code class="language-javascript">let attempts = 0;
let success = false;

while (!success && attempts < 5) {
  success = tryConnection();
  attempts = attempts + 1;
}

// while       → keyword that starts the loop
// (           → opens the condition
//   !success && attempts < 5  → the condition, checked before EACH iteration
// )           → closes the condition
// {           → opens the body
//   body...    → runs once per iteration, as long as condition stays true
// }           → closes the body

// the order:
//   1. check condition → if false, exit; if true, continue
//   2. run body
//   3. go back to step 1

// notice: the variables that control the condition (success, attempts)
// must be set up BEFORE the loop and updated INSIDE the loop.</code></pre>
    <p>The loop has no idea what to track or how to make progress — that's entirely on the body. If the body never changes the variables in the condition, the loop will run forever.</p>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-7-4-0-3': `
    <p><strong>The condition is checked at the top.</strong> If it's false the very first time, the body never runs at all:</p>
<pre class="language-javascript"><code class="language-javascript">let count = 5;
while (count < 3) {
  console.log("never prints");
}
// 5 < 3 is false → body skipped entirely</code></pre>

    <p><strong>The body must make progress toward making the condition false.</strong> If it doesn't, you've got an infinite loop — the most common bug with <code>while</code>:</p>
<pre class="language-javascript"><code class="language-javascript">let count = 0;
while (count < 5) {
  console.log(count);
  // forgot to update count → infinite loop
}</code></pre>

    <p><strong><code>do...while</code> is a variation</strong> that checks the condition at the bottom instead of the top. The body always runs at least once, even if the condition is false from the start:</p>
<pre class="language-javascript"><code class="language-javascript">let count = 5;

do {
  console.log("runs once at minimum");
  count = count + 1;
} while (count < 3);

// prints "runs once at minimum" — body ran before the condition was even checked.</code></pre>

    <p><strong><code>while (true)</code> is a deliberate infinite loop</strong> — useful when the exit logic is complex enough that the condition would be cluttered. You exit using <code>break</code>:</p>
<pre class="language-javascript"><code class="language-javascript">while (true) {
  const input = prompt("type 'quit' to stop");
  if (input === "quit") {
    break;
  }
  console.log("you typed: " + input);
}</code></pre>

    <p><strong>The braces around the body aren't optional in real-world style.</strong> A brace-less <code>while</code> body only includes the next single statement, which is a recipe for the same kinds of bugs covered in the <code>if</code> lessons.</p>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-7-4-1-0': `
    <p>Some loops don't have a known iteration count. You can't say "loop 5 times" because you don't know whether it'll take 1 try or 50 tries. Maybe the user keeps clicking buttons until they're done. Maybe the connection retries until it works. Maybe the puzzle solver keeps guessing until it lands on the right answer.</p>
    <p><code>while</code> handles all of these. You give it a condition that describes when to stop — "until the connection succeeds," "while there's still input to process," "while the puzzle isn't solved" — and it just keeps going until that condition flips.</p>
  `,

  /* 1.1 Why use it */
  'topics-7-4-1-1': `
    <p>The <code>while</code> loop is the right choice when you can describe the stopping condition but can't predict how many iterations it'll take:</p>
<pre class="language-javascript"><code class="language-javascript">// Wait for an external state to change
let isReady = false;
while (!isReady) {
  isReady = checkServerStatus();
}

// Process items until a queue is empty
while (queue.length > 0) {
  const item = queue.shift();
  process(item);
}

// Keep prompting until the user gives valid input
let answer = "";
while (answer !== "yes" && answer !== "no") {
  answer = prompt("Answer yes or no:");
}

// Game loop — keep playing until someone wins
while (!game.isOver) {
  game.takeTurn();
}</code></pre>

    <p>If you do know the count in advance, <code>for</code> is usually clearer. <code>while</code> is for the cases where the loop's lifetime depends on something that happens during the loop itself.</p>
  `,

  /* 1.2 Where you use it */
  'topics-7-4-1-2': `
<pre class="language-javascript"><code class="language-javascript">// Polling until something changes
let serverReady = false;
while (!serverReady) {
  serverReady = ping();
}

// Draining a queue or stack
const tasks = ["a", "b", "c", "d"];
while (tasks.length > 0) {
  const task = tasks.shift();
  console.log("processing " + task);
}

// Reading input until end-of-input signal
let line = readLine();
while (line !== null) {
  processLine(line);
  line = readLine();
}

// Searching with no fixed bound
let guess = 0;
while (guess * guess < 1000) {
  guess = guess + 1;
}
console.log("smallest n where n*n >= 1000:", guess);

// Game loop
while (!player.gameOver) {
  player.update();
  render();
}

// Retry pattern with attempt limit
let attempts = 0;
let success = false;
while (!success && attempts < 5) {
  success = tryThing();
  attempts = attempts + 1;
}</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-7-4-1-3': `
    <p>A <code>while</code> loop is like a sign at the entrance to a room: "while the door is unlocked, keep walking through." You don't count how many times you go through. You just keep going until the door is locked. The "how long" is decided by what's happening with the door, not by you.</p>
    <p>This is the right shape for situations where you can't say in advance how many tries it'll take. Maybe the door gets locked on the third pass. Maybe the fortieth. The loop doesn't care — it just keeps checking the door every time and stops when the answer changes.</p>
    <p>The catch: something inside the room has to eventually lock the door. If nothing ever does, you walk through forever. That's the responsibility you take on with <code>while</code> — the body has to do something that eventually makes the condition false.</p>
  `,

  /* 1.4 Mental model */
  'topics-7-4-1-4': `
    <p>Picture a security guard checking a turnstile. The rule is simple: "as long as the green light is on, let the next person through." The guard doesn't know how many people are coming — could be 3, could be 300. They just keep letting people through until the light changes.</p>
    <p>What changes the light? Something in the system — maybe a timer, maybe a quota, maybe an emergency. The guard doesn't make that decision. They just check the light each time and act accordingly. When the light goes red, the guard stops, and that's the end of the loop.</p>
    <p>The mental shift from <code>for</code> to <code>while</code> is letting go of the count. With <code>for</code>, you're telling JavaScript "do this exactly N times." With <code>while</code>, you're saying "keep doing this until the light changes — I have no idea when that'll be." The loop just runs as long as it needs to.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-7-4-1-5': `
<pre class="language-javascript"><code class="language-javascript">let stack = 5;

while (stack > 0) {
  console.log("stack: " + stack);
  stack = stack - 1;
}
console.log("empty!");

// prints:
//   stack: 5
//   stack: 4
//   stack: 3
//   stack: 2
//   stack: 1
//   empty!

// JavaScript is thinking:
// 1. Set stack to 5.
// 2. Check condition: 5 > 0 → true. Enter body.
// 3. Body: log "stack: 5". Decrement stack to 4.
// 4. Check condition: 4 > 0 → true. Enter body.
// 5. Body: log "stack: 4". Decrement stack to 3.
// 6. ...same pattern continues...
// 7. Body: log "stack: 1". Decrement stack to 0.
// 8. Check condition: 0 > 0 → false. Exit loop.
// 9. Log "empty!".

// notice: the condition is what determined when to stop.
// if the body forgot to decrement stack, the condition would stay true forever
// and we'd have an infinite loop.</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-7-4-2-0': `
    <p>If a <code>while</code> loop is running too many times — or worse, never stopping — the bug is almost always that the condition isn't being changed by the body:</p>
<pre class="language-javascript"><code class="language-javascript">let count = 0;
while (count < 5) {
  console.log("count:", count);
  // BUG: forgot to update count
}
// infinite loop — count stays 0 forever, condition stays true forever

// fix: update the variable the condition depends on
let count = 0;
while (count < 5) {
  console.log("count:", count);
  count = count + 1;
}</code></pre>

    <p>If your browser tab freezes or crashes after running a <code>while</code> loop, that's almost always an infinite loop. Look for the variable in the condition and confirm the body actually changes it.</p>

    <p>If a <code>while</code> loop runs ZERO times when you expected it to run, log the condition before the loop:</p>
<pre class="language-javascript"><code class="language-javascript">console.log("condition before loop:", queue.length > 0);
while (queue.length > 0) {
  // ...
}
// if you see "false", the loop body was always going to skip — the input was empty.</code></pre>
  `,

  /* 2.1 The part that makes it click */
  'topics-7-4-2-1': `
    <p>A <code>while</code> loop is just an <code>if</code> that runs again and again. <code>if (cond) { body }</code> runs the body once if the condition is true. <code>while (cond) { body }</code> runs the body as long as the condition stays true.</p>
    <p>The whole "loop" part is JavaScript checking the condition repeatedly — once before each iteration. There's no special looping machinery beyond that. It's "run the body, check again, run the body, check again," with the body itself being responsible for eventually making the check fail.</p>
  `,

  /* 2.2 Common confusions */
  'topics-7-4-2-2': `
    <p><strong>Confusion: forgetting that something has to change inside the body</strong></p>
<pre class="language-javascript"><code class="language-javascript">let isLoading = true;
while (isLoading) {
  console.log("loading...");
  // nothing here ever sets isLoading = false → infinite loop
}

// fix: the body must do something that eventually makes the condition false
let isLoading = true;
while (isLoading) {
  console.log("loading...");
  isLoading = checkIfLoaded();
}</code></pre>

    <p><strong>Confusion: thinking <code>while</code> needs a counter</strong></p>
<pre class="language-javascript"><code class="language-javascript">// You CAN use a counter with while...
let i = 0;
while (i < 5) {
  console.log(i);
  i = i + 1;
}

// ...but for is usually clearer when you're counting:
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// reach for while when there ISN'T a clear count — that's its sweet spot.</code></pre>

    <p><strong>Confusion: condition checked at the top vs. bottom</strong></p>
<pre class="language-javascript"><code class="language-javascript">// while — condition first, body second
while (false) {
  console.log("never runs");
}
// nothing prints — condition was false on the first check.

// do...while — body first, condition second
do {
  console.log("runs once");
} while (false);
// prints "runs once" — body always runs at least once, then the condition is checked.</code></pre>

    <p><strong>Confusion: thinking <code>break</code> only works in <code>for</code></strong></p>
<pre class="language-javascript"><code class="language-javascript">// break works in any loop, including while
while (true) {
  const input = prompt("enter command:");
  if (input === "quit") {
    break;
  }
  process(input);
}
// while (true) plus break is a common pattern when the exit condition is complex.</code></pre>

    <p><strong>Confusion: using <code>=</code> instead of <code>===</code> in the condition</strong></p>
<pre class="language-javascript"><code class="language-javascript">let status = "pending";
while (status = "done") {
  // BUG: = is assignment — status becomes "done", expression returns "done" (truthy)
  // → infinite loop
}

// fix: use === for comparison
while (status === "done") {
  // ...
}</code></pre>
  `,

  /* 2.3 Common mistakes */
  'topics-7-4-2-3': `
<pre class="language-javascript"><code class="language-javascript">let i = 0;
while (i < 5) {
  console.log(i);
  // forgot i = i + 1
}
// infinite loop — i never changes
// fix: update the counter inside the body
let i = 0;
while (i < 5) {
  console.log(i);
  i = i + 1;
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">while (queue.length > 0) {
  process(queue[0]);
  // forgot to remove the processed item
}
// infinite loop — queue.length never decreases
// fix: remove the item after processing
while (queue.length > 0) {
  const item = queue.shift();
  process(item);
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">let isReady = false;
while (isReady) {
  doWork();
}
// loop body NEVER runs — condition was false from the start
// (this might be intentional, but it's often a bug — wrong starting value)
// fix: start with a value that makes the condition true, or use do...while
let isReady = true;
while (isReady) {
  doWork();
  isReady = checkIfStillReady();
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">while (count > 0)
  count = count - 1;
  console.log("done");
// the second statement isn't part of the loop body — runs ONCE after the loop
// fix: always use braces
while (count > 0) {
  count = count - 1;
  console.log("done");
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">while (input = "yes") {
  doIt();
}
// = is assignment — input becomes "yes" each check, expression returns "yes" (truthy)
// → infinite loop
// fix: use === for comparison
while (input === "yes") {
  doIt();
}</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-7-4-3-0': `
<pre class="language-javascript"><code class="language-javascript">// Counting down with while
let count = 5;
while (count > 0) {
  console.log(count);
  count = count - 1;
}
console.log("liftoff!");

// Draining a list
const tasks = ["wash", "fold", "iron"];
while (tasks.length > 0) {
  const task = tasks.shift();
  console.log("doing: " + task);
}

// Polling for a state change
let isReady = false;
while (!isReady) {
  isReady = checkSomething();
}
console.log("ready!");

// Searching with an unknown stop point
let n = 1;
while (n * n <= 100) {
  n = n + 1;
}
console.log("first n where n*n > 100:", n);

// Game loop
let isPlaying = true;
let score = 0;
while (isPlaying) {
  score = score + roll();
  if (score >= 21) {
    isPlaying = false;
  }
}
console.log("final score:", score);

// Retry with limit
let attempts = 0;
let connected = false;
while (!connected && attempts < 3) {
  connected = tryConnect();
  attempts = attempts + 1;
}

// while (true) with break
while (true) {
  const guess = makeGuess();
  if (guess === answer) {
    console.log("got it!");
    break;
  }
}</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-7-4-3-1': `
    <p><strong>Example: processing a download queue</strong></p>
<pre class="language-javascript"><code class="language-javascript">function processDownloads(queue) {
  while (queue.length > 0) {
    const download = queue.shift();
    startDownload(download);
  }
}
// the queue's size depends on how many users requested downloads —
// you don't know in advance, so a while loop fits naturally.</code></pre>

    <p><strong>Example: typing animation that reveals one character at a time</strong></p>
<pre class="language-javascript"><code class="language-javascript">function typeText(target, text) {
  let i = 0;
  const interval = setInterval(function () {
    target.textContent = target.textContent + text[i];
    i = i + 1;
    if (i >= text.length) {
      clearInterval(interval);
    }
  }, 100);
}
// (this version uses setInterval instead of while because the work is async,
// but the same conceptual loop — "keep adding characters until done" — applies.)

// pure while version for synchronous typing into a string:
function buildTypedString(text) {
  let output = "";
  let i = 0;
  while (i < text.length) {
    output = output + text[i];
    i = i + 1;
  }
  return output;
}</code></pre>

    <p><strong>Example: scrolling pagination — keep loading until visible content fills the screen</strong></p>
<pre class="language-javascript"><code class="language-javascript">function fillViewport(loadMore) {
  while (document.body.scrollHeight < window.innerHeight) {
    const moreContent = loadMore();
    if (moreContent === null) {
      break;     // no more content available
    }
    document.body.appendChild(moreContent);
  }
}
// keeps loading more content until the page fills (or runs out).</code></pre>

    <p><strong>Example: turn-based game logic</strong></p>
<pre class="language-javascript"><code class="language-javascript">function playRound(game) {
  while (!game.hasWinner()) {
    const currentPlayer = game.nextPlayer();
    const move = currentPlayer.chooseMove();
    game.applyMove(move);
  }
  return game.winner();
}
// the number of turns isn't fixed — the game runs as long as it needs to.</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-7-4-3-2': `
    <ul>
      <li><strong><code>for</code> loop</strong> → use when the iteration count is known; <code>while</code> when it isn't</li>
      <li><strong>Conditions</strong> → <code>while</code> uses the same boolean expressions as <code>if</code></li>
      <li><strong>Infinite loops</strong> → the most common <code>while</code> bug; happens when the body doesn't update the condition</li>
      <li><strong><code>break</code> and <code>continue</code></strong> → control flow inside <code>while</code> works the same as inside <code>for</code></li>
      <li><strong><code>do...while</code></strong> → variant that always runs the body at least once</li>
      <li><strong><code>while (true)</code> + <code>break</code></strong> → pattern for "loop forever until something inside says stop"</li>
      <li><strong>Polling</strong> → <code>while</code> is the natural shape for "keep checking until something changes"</li>
      <li><strong>Game loops</strong> → the canonical "indefinite repetition" use case</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-7-4-3-3': `
    <ul>
      <li><code>for</code> loop</li>
      <li><code>do...while</code> loop</li>
      <li><code>break</code> and <code>continue</code></li>
      <li>Infinite loops</li>
      <li>Conditions and boolean expressions</li>
      <li>Polling and game loops</li>
      <li>Async iteration with <code>setInterval</code></li>
      <li><code>while (true)</code> pattern</li>
    </ul>
  `,

  /* ========================================================= 
   Sub-lesson: 3.8.6 Loops → for...of
 =======================================================*/

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-7-5-0-0': `
    <p><code>for...of</code> is a loop built specifically for walking through items in a collection — usually an array. It hands you each item one at a time, in order, without making you deal with indexes or counters.</p>
    <p>It's the cleanest, most readable way to say "for every item in this list, do something." If you don't need to know which position you're at, this is almost always the loop you want.</p>
  `,

  /* 0.1 Syntax */
  'topics-7-5-0-1': `
<pre class="language-javascript"><code class="language-javascript">const fruits = ["apple", "banana", "cherry"];

for (const fruit of fruits) {
  console.log(fruit);
}

// prints:
//   apple
//   banana
//   cherry

// the structure: for (const item of collection) { body }
// the variable "fruit" is automatically assigned to each item, one per iteration.</code></pre>
    <p>No counter, no <code>length</code> check, no <code>fruits[i]</code>. The loop hands you the item directly.</p>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-7-5-0-2': `
<pre class="language-javascript"><code class="language-javascript">const scores = [85, 92, 78];

for (const score of scores) {
  console.log("score: " + score);
}

// for         → keyword that starts the loop
// (           → opens the header
//   const score   → variable that holds the current item (you name it)
//   of            → keyword separating the variable from the collection
//   scores        → the array (or any iterable) to walk through
// )           → closes the header
// {           → opens the body
//   body...    → runs once per item, with score holding that item
// }           → closes the body

// each iteration:
//   1. take the next item from scores
//   2. assign it to "score"
//   3. run the body
//   4. when no more items, exit</code></pre>
    <p>The <code>const</code> creates a fresh variable each iteration, automatically assigned to the next item. You don't have to track position, advance the counter, or check when to stop — the loop handles all of that.</p>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-7-5-0-3': `
    <p><strong>The variable can be declared with <code>const</code>, <code>let</code>, or <code>var</code>.</strong> <code>const</code> is the standard choice — the loop creates a fresh variable each iteration, so you're not actually "reassigning" anything across rounds:</p>
<pre class="language-javascript"><code class="language-javascript">// Standard
for (const item of items) {
  console.log(item);
}

// Use let if you need to reassign INSIDE one iteration's body
for (let item of items) {
  if (item < 0) {
    item = 0;       // legal because we used let
  }
  console.log(item);
}</code></pre>

    <p><strong>It works on more than just arrays.</strong> <code>for...of</code> can walk through anything that's "iterable" — strings (giving you characters), <code>NodeList</code> from <code>querySelectorAll</code>, <code>Set</code>, <code>Map</code>, and a few others:</p>
<pre class="language-javascript"><code class="language-javascript">// String — gives one character per iteration
for (const ch of "hello") {
  console.log(ch);
}

// NodeList from the DOM
const buttons = document.querySelectorAll("button");
for (const btn of buttons) {
  btn.disabled = true;
}

// Set — gives each unique value
const tags = new Set(["css", "js", "html"]);
for (const tag of tags) {
  console.log(tag);
}</code></pre>

    <p><strong>It does NOT work on plain objects.</strong> Plain objects (<code>{ key: value }</code>) aren't iterable by default. You'd use <code>for...in</code> for that, or <code>Object.keys()</code>/<code>Object.values()</code> with <code>for...of</code>:</p>
<pre class="language-javascript"><code class="language-javascript">const user = { name: "Alice", age: 30 };

// This DOESN'T work — TypeError
for (const item of user) {
  console.log(item);
}

// Use Object.keys() to walk an object's keys
for (const key of Object.keys(user)) {
  console.log(key, user[key]);
}</code></pre>

    <p><strong>If you need the index, <code>for...of</code> alone won't give it to you.</strong> Use a regular <code>for</code> loop, or use <code>.entries()</code> with <code>for...of</code>:</p>
<pre class="language-javascript"><code class="language-javascript">// .entries() gives [index, value] pairs
const fruits = ["apple", "banana", "cherry"];
for (const [i, fruit] of fruits.entries()) {
  console.log(i + ": " + fruit);
}
// 0: apple
// 1: banana
// 2: cherry</code></pre>

    <p><strong><code>break</code> and <code>continue</code> work the same way</strong> as in any other loop. <code>break</code> exits the loop; <code>continue</code> skips to the next iteration.</p>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-7-5-1-0': `
    <p>The classic <code>for</code> loop forces you to manage an index variable even when you don't care about positions. You write <code>i = 0</code>, <code>i &lt; array.length</code>, <code>i++</code>, and then <code>array[i]</code> — four pieces of bookkeeping just to get each item.</p>
    <p><code>for...of</code> strips all of that away. You get straight to the item. The result is shorter, harder to mess up (no off-by-one risk, no forgetting to increment), and reads much closer to how you'd describe the work in plain English.</p>
  `,

  /* 1.1 Why use it */
  'topics-7-5-1-1': `
    <p>For most "do something with each item" cases, <code>for...of</code> is just plainly easier:</p>
<pre class="language-javascript"><code class="language-javascript">// With a classic for loop
const orders = [order1, order2, order3];
for (let i = 0; i < orders.length; i++) {
  processOrder(orders[i]);
}

// With for...of — same result, less noise
for (const order of orders) {
  processOrder(order);
}</code></pre>

    <p>Beyond being shorter, <code>for...of</code> removes whole categories of bugs:</p>
<pre class="language-javascript"><code class="language-javascript">// Possible mistakes with for that don't exist with for...of:
//   - i <= length instead of i < length (off-by-one)
//   - forgetting i++ (infinite loop)
//   - typing array[j] instead of array[i] (using wrong index)
//   - starting at i = 1 instead of i = 0 (skipping first item)

// for...of has no counter to mess up. The loop just hands you items.</code></pre>

    <p>Reach for <code>for</code> only when you genuinely need the index — for things like building "Item N of M" displays, or removing items mid-iteration in reverse. Otherwise, <code>for...of</code> wins on clarity.</p>
  `,

  /* 1.2 Where you use it */
  'topics-7-5-1-2': `
<pre class="language-javascript"><code class="language-javascript">// Walking an array of values
const colors = ["red", "green", "blue"];
for (const color of colors) {
  console.log(color);
}

// Aggregating a total
let total = 0;
const prices = [9.99, 14.50, 3.75];
for (const price of prices) {
  total = total + price;
}

// Acting on each DOM element
const inputs = document.querySelectorAll("input");
for (const input of inputs) {
  input.value = "";
}

// Walking through characters in a string
for (const ch of "hello") {
  console.log(ch);
}

// Searching for a match
let found = null;
const users = getUsers();
for (const user of users) {
  if (user.email === target) {
    found = user;
    break;
  }
}

// Filtering into a new array
const allItems = getItems();
const expensive = [];
for (const item of allItems) {
  if (item.price > 100) {
    expensive.push(item);
  }
}

// Walking unique values in a Set
const visited = new Set(["/home", "/about", "/contact"]);
for (const path of visited) {
  console.log("you visited:", path);
}</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-7-5-1-3': `
    <p>Imagine handing someone a stack of cards and saying "look at each one." They go through the stack, picking up the top card, looking at it, setting it aside, and grabbing the next — until the stack is empty. They don't care which number card they're on. They just deal with one card at a time.</p>
    <p><code>for...of</code> is exactly that. The stack is your collection. The "look at each one" is your loop body. JavaScript hands you each item in turn and runs the body once per item. You don't think about counters or positions — just "what do I do with this one?"</p>
    <p>It's the loop that gets out of your way. The classic <code>for</code> loop makes you do the math. <code>for...of</code> handles the math and lets you focus on the actual work.</p>
  `,

  /* 1.4 Mental model */
  'topics-7-5-1-4': `
    <p>Picture a buffet line moving past you, one plate at a time. The kitchen pushes a plate forward, you do whatever you do with it — taste, taste-test, stamp it approved — and then the next plate appears. You don't ask "what number plate is this?" You just react to whatever plate is in front of you right now.</p>
    <p>That's <code>for...of</code>. The collection is the kitchen, your loop body is what you do with each plate, and the loop machinery is the conveyor that keeps pushing the next item forward. When the conveyor is empty, the loop ends.</p>
    <p>The classic <code>for</code> loop, by contrast, is more like manning the conveyor yourself — checking how many plates are in the kitchen, advancing the belt by hand, asking "is this the right plate to take?" each time. <code>for...of</code> automates all that and lets you focus on the actual work in front of you.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-7-5-1-5': `
<pre class="language-javascript"><code class="language-javascript">const names = ["Alice", "Bob", "Carol"];

for (const name of names) {
  console.log("Hello, " + name);
}
console.log("done");

// prints:
//   Hello, Alice
//   Hello, Bob
//   Hello, Carol
//   done

// JavaScript is thinking:
// 1. Look at the array: ["Alice", "Bob", "Carol"].
// 2. Take the first item: "Alice". Create a fresh variable "name", assign "Alice".
// 3. Run body: log "Hello, Alice".
// 4. Take the next item: "Bob". Create a fresh "name", assign "Bob".
// 5. Run body: log "Hello, Bob".
// 6. Take the next item: "Carol". Create a fresh "name", assign "Carol".
// 7. Run body: log "Hello, Carol".
// 8. No more items. Exit the loop.
// 9. Continue with code after. Log "done".

// Notice: there's no counter, no length check, no array[i] indexing.
// "name" is created fresh each iteration and assigned automatically.</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-7-5-2-0': `
    <p>If a <code>for...of</code> loop is acting strange, the most useful first step is logging the value the loop is handing you each iteration:</p>
<pre class="language-javascript"><code class="language-javascript">for (const item of items) {
  console.log("item:", item, "type:", typeof item);
  // ... rest of body
}

// the output reveals what each iteration is actually working with.
// if you expected objects but see strings, the source data is different than you thought.
// if "item" is undefined, you're iterating over something that doesn't have items.</code></pre>

    <p>If you get a <strong>TypeError</strong> like "items is not iterable," it means whatever you tried to loop over isn't a valid iterable — usually because it's a plain object instead of an array, or because it's <code>null</code>/<code>undefined</code>:</p>
<pre class="language-javascript"><code class="language-javascript">// TypeError: cars is not iterable
const cars = { red: 3, blue: 2 };
for (const car of cars) {     // plain objects aren't iterable
  console.log(car);
}

// Fix: convert to a list of keys, values, or entries first
for (const key of Object.keys(cars)) {
  console.log(key + ": " + cars[key]);
}</code></pre>

    <p>If you wanted the index but didn't get it: <code>for...of</code> doesn't give you one. Either switch to a classic <code>for</code> loop, or use <code>.entries()</code> to get <code>[index, value]</code> pairs.</p>
  `,

  /* 2.1 The part that makes it click */
  'topics-7-5-2-1': `
    <p><code>for...of</code> isn't a "shortcut" version of the regular <code>for</code> loop. It's a different tool that handles a different job: walking through iterables. It looks similar because they both start with <code>for</code>, but the inside is completely different.</p>
    <p>The regular <code>for</code> loop is for counting. <code>for...of</code> is for walking. Once you treat them as separate tools, the choice becomes simple: do I need a number, or do I need each item? If it's the item, use <code>for...of</code>.</p>
  `,

  /* 2.2 Common confusions */
  'topics-7-5-2-2': `
    <p><strong>Confusion: thinking it gives you the index</strong></p>
<pre class="language-javascript"><code class="language-javascript">const fruits = ["apple", "banana", "cherry"];

for (const fruit of fruits) {
  console.log(fruit);   // "apple", "banana", "cherry" — VALUES, not indexes
}

// To get indexes, use .entries():
for (const [i, fruit] of fruits.entries()) {
  console.log(i, fruit);   // 0 apple, 1 banana, 2 cherry
}</code></pre>

    <p><strong>Confusion: <code>for...of</code> vs <code>for...in</code></strong></p>
<pre class="language-javascript"><code class="language-javascript">// for...of — gives you VALUES, works on iterables (arrays, strings, etc.)
const fruits = ["apple", "banana"];
for (const fruit of fruits) {
  console.log(fruit);   // "apple", "banana"
}

// for...in — gives you KEYS/INDEXES, works on object properties
for (const key in fruits) {
  console.log(key);     // "0", "1" — string indexes
}

// for...in is for object keys. for...of is for values from iterables.
// Mixing them up is a very common bug — they look similar but do different things.</code></pre>

    <p><strong>Confusion: trying to use it on a plain object</strong></p>
<pre class="language-javascript"><code class="language-javascript">const user = { name: "Alice", age: 30 };

// TypeError — plain objects aren't iterable
for (const item of user) {
  // ...
}

// Fix: use Object.entries() (keys+values), keys(), or values()
for (const [key, value] of Object.entries(user)) {
  console.log(key + " = " + value);
}</code></pre>

    <p><strong>Confusion: thinking you can mutate the array safely while iterating</strong></p>
<pre class="language-javascript"><code class="language-javascript">const items = [1, 2, 3, 4, 5];

for (const item of items) {
  if (item > 2) {
    items.push(item * 10);   // BAD — array grows during iteration
  }
}
// behavior is unpredictable; can result in extra iterations or skipped items.

// Fix: build a new array, or collect changes and apply them after
const additions = [];
for (const item of items) {
  if (item > 2) {
    additions.push(item * 10);
  }
}
items.push(...additions);</code></pre>

    <p><strong>Confusion: <code>const</code> seems wrong because the value "changes"</strong></p>
<pre class="language-javascript"><code class="language-javascript">for (const item of items) {
  // "const item" — but item is different on each iteration!
}

// it works because each iteration creates a FRESH variable.
// "item" isn't being reassigned across rounds — it's being newly declared each round.
// const just means "you can't reassign it WITHIN this iteration."</code></pre>
  `,

  /* 2.3 Common mistakes */
  'topics-7-5-2-3': `
<pre class="language-javascript"><code class="language-javascript">for (const i of items) {
  console.log(items[i]);
}
// using "of" but treating "i" as an index — but "i" is the VALUE
// fix: just use the value directly
for (const item of items) {
  console.log(item);
}
// or use a regular for loop if you need the index</code></pre>

<pre class="language-javascript"><code class="language-javascript">const user = { name: "Alice", age: 30 };
for (const prop of user) {
  console.log(prop);
}
// TypeError — plain objects aren't iterable
// fix: convert to entries, keys, or values first
for (const [key, value] of Object.entries(user)) {
  console.log(key, value);
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">for (const item in items) {
  console.log(item);
}
// "in" instead of "of" — gives you indexes (as strings) for arrays, not values
// fix: use "of" for values
for (const item of items) {
  console.log(item);
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">for (const item of items)
  if (item.isReady) {
    process(item);
  }
  log("done");
// log("done") looks like part of the loop, but isn't — runs ONCE after the loop
// fix: always wrap loop bodies in braces
for (const item of items) {
  if (item.isReady) {
    process(item);
  }
}
log("done");</code></pre>

<pre class="language-javascript"><code class="language-javascript">let items;
for (const item of items) {
  console.log(item);
}
// TypeError — items is undefined
// fix: make sure the collection exists, or guard for it
if (Array.isArray(items)) {
  for (const item of items) {
    console.log(item);
  }
}</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-7-5-3-0': `
<pre class="language-javascript"><code class="language-javascript">// Walking an array
const fruits = ["apple", "banana", "cherry"];
for (const fruit of fruits) {
  console.log(fruit);
}

// Summing values
let total = 0;
const prices = [9.99, 14.50, 3.75];
for (const price of prices) {
  total = total + price;
}
console.log("total:", total);

// Walking characters in a string
let vowels = 0;
for (const ch of "education") {
  if ("aeiou".includes(ch)) {
    vowels = vowels + 1;
  }
}
console.log("vowel count:", vowels);   // 5

// Building a new array
const numbers = [1, 2, 3, 4];
const doubled = [];
for (const n of numbers) {
  doubled.push(n * 2);
}
console.log(doubled);   // [2, 4, 6, 8]

// Searching with break
const users = [{ id: 1 }, { id: 2 }, { id: 3 }];
let found = null;
for (const user of users) {
  if (user.id === 2) {
    found = user;
    break;
  }
}
console.log(found);   // { id: 2 }

// Walking a Set of unique values
const tags = new Set(["js", "html", "css", "js"]);   // duplicate "js" auto-removed
for (const tag of tags) {
  console.log(tag);
}
// js, html, css

// Using .entries() to get index + value
const colors = ["red", "green", "blue"];
for (const [i, color] of colors.entries()) {
  console.log(i + ": " + color);
}</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-7-5-3-1': `
    <p><strong>Example: rendering a list of products</strong></p>
<pre class="language-javascript"><code class="language-javascript">function renderProducts(products) {
  const container = document.querySelector(".products");
  container.innerHTML = "";

  for (const product of products) {
    const card = document.createElement("div");
    card.className = "product-card";
    card.textContent = product.name + " - $" + product.price;
    container.appendChild(card);
  }
}</code></pre>

    <p><strong>Example: validating every input on a form</strong></p>
<pre class="language-javascript"><code class="language-javascript">function findFirstError(form) {
  const inputs = form.querySelectorAll("input[required]");

  for (const input of inputs) {
    if (input.value === "") {
      return input.name + " is required";
    }
  }
  return null;
}</code></pre>

    <p><strong>Example: counting words from a list of comments</strong></p>
<pre class="language-javascript"><code class="language-javascript">function totalWordCount(comments) {
  let total = 0;
  for (const comment of comments) {
    const words = comment.text.split(" ");
    total = total + words.length;
  }
  return total;
}</code></pre>

    <p><strong>Example: applying dark mode to every card on the page</strong></p>
<pre class="language-javascript"><code class="language-javascript">function applyDarkMode() {
  const cards = document.querySelectorAll(".card");
  for (const card of cards) {
    card.classList.add("dark");
  }
}
// querySelectorAll returns a NodeList, which is iterable — for...of works directly.</code></pre>

    <p><strong>Example: building a comma-separated list of names</strong></p>
<pre class="language-javascript"><code class="language-javascript">function listNames(users) {
  const names = [];
  for (const user of users) {
    names.push(user.name);
  }
  return names.join(", ");
}
console.log(listNames([{ name: "Alice" }, { name: "Bob" }]));   // "Alice, Bob"</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-7-5-3-2': `
    <ul>
      <li><strong><code>for</code> loop</strong> → use this when you need the index; <code>for...of</code> when you don't</li>
      <li><strong><code>for...in</code></strong> → walks an object's keys; commonly confused with <code>for...of</code></li>
      <li><strong>Iterables</strong> → arrays, strings, NodeLists, Sets, Maps — anything <code>for...of</code> can walk</li>
      <li><strong>Plain objects</strong> → not iterable directly; need <code>Object.keys()</code>, <code>Object.values()</code>, or <code>Object.entries()</code></li>
      <li><strong><code>.entries()</code></strong> → gives <code>[index, value]</code> pairs when you need both</li>
      <li><strong><code>break</code> and <code>continue</code></strong> → work the same as in any loop</li>
      <li><strong>Destructuring in loops</strong> → <code>for (const [a, b] of pairs)</code> for arrays of pairs</li>
      <li><strong>NodeList iteration</strong> → <code>querySelectorAll</code> returns a NodeList; <code>for...of</code> handles it cleanly</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-7-5-3-3': `
    <ul>
      <li><code>for</code> loop</li>
      <li><code>for...in</code> loop</li>
      <li>Iterables and iterators</li>
      <li><code>Object.keys()</code>, <code>Object.values()</code>, <code>Object.entries()</code></li>
      <li>Array <code>.entries()</code></li>
      <li>Destructuring assignment</li>
      <li>NodeList iteration</li>
      <li>Sets and Maps</li>
    </ul>
  `,

  /* ========================================================= 
   Sub-lesson: 3.8.7 Loops → nested loops
 =======================================================*/

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-7-6-0-0': `
    <p>A nested loop is a loop placed inside the body of another loop. The outer loop runs once per round, and on each of those rounds, the inner loop runs all the way through from start to finish.</p>
    <p>It's how you handle work that has two layers — like checking every cell in a grid, comparing every pair of items, or rendering rows of columns.</p>
  `,

  /* 0.1 Syntax */
  'topics-7-6-0-1': `
<pre class="language-javascript"><code class="language-javascript">for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 2; j++) {
    console.log("i=" + i + ", j=" + j);
  }
}

// prints:
//   i=1, j=1
//   i=1, j=2
//   i=2, j=1
//   i=2, j=2
//   i=3, j=1
//   i=3, j=2

// the outer loop runs 3 times.
// for each outer round, the inner loop runs 2 times.
// total iterations of the body: 3 × 2 = 6.</code></pre>
    <p>Notice the pattern: <code>i</code> stays the same while <code>j</code> goes through all its values, then <code>i</code> moves on and <code>j</code> resets to start over.</p>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-7-6-0-2': `
<pre class="language-javascript"><code class="language-javascript">const rows = ["row1", "row2"];
const cols = ["A", "B", "C"];

for (const row of rows) {              // OUTER loop
  for (const col of cols) {            // INNER loop
    console.log(row + "-" + col);      // body of the inner loop
  }
}

// prints:
//   row1-A
//   row1-B
//   row1-C
//   row2-A
//   row2-B
//   row2-C

// outer loop  → picks a row, holds it
// inner loop  → walks through every column for that row
// body        → runs once per (row, column) combination

// total runs of the body = (number of rows) × (number of columns)</code></pre>
    <p>Each iteration of the outer loop triggers a complete pass of the inner loop. The inner loop runs in full — from start to finish — every single time the outer loop comes around.</p>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-7-6-0-3': `
    <p><strong>Each loop needs its own counter or item variable.</strong> The convention is <code>i</code> for the outer loop and <code>j</code> for the inner. If you nest a third level, <code>k</code> comes next:</p>
<pre class="language-javascript"><code class="language-javascript">for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    for (let k = 0; k < 3; k++) {
      // 3 × 3 × 3 = 27 total iterations of this body
    }
  }
}</code></pre>

    <p><strong>The inner loop's counter resets every time the outer loop iterates.</strong> Each outer round starts a fresh inner loop:</p>
<pre class="language-javascript"><code class="language-javascript">for (let i = 0; i < 2; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(i, j);
  }
}
// prints:
//   0 0
//   0 1
//   0 2  ← inner loop finished (j went 0→1→2)
//   1 0  ← outer advanced, inner reset to j=0 again
//   1 1
//   1 2</code></pre>

    <p><strong>You can mix loop types when nesting.</strong> A <code>for</code> outside, a <code>for...of</code> inside, a <code>while</code> nested in a <code>for</code> — any combination works:</p>
<pre class="language-javascript"><code class="language-javascript">// for...of outside, for inside
for (const team of teams) {
  for (let i = 0; i < team.players.length; i++) {
    console.log(team.name + " - player " + (i + 1));
  }
}</code></pre>

    <p><strong><code>break</code> only exits the loop it's in.</strong> A <code>break</code> in the inner loop stops the inner loop — the outer loop keeps going. Same for <code>continue</code>:</p>
<pre class="language-javascript"><code class="language-javascript">for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (j === 2) {
      break;     // exits the INNER loop only
    }
    console.log(i, j);
  }
}
// prints:
//   0 0
//   0 1   ← inner broke when j=2
//   1 0
//   1 1   ← inner broke again
//   2 0
//   2 1   ← inner broke again

// outer loop ran all 3 times. break only affected the inner.</code></pre>

    <p><strong>Performance note:</strong> nested loops multiply work. Two loops over 1,000 items each is a million iterations. Three nested loops over 100 items each is also a million. This isn't always a problem, but it's worth being aware of.</p>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-7-6-1-0': `
    <p>Some kinds of work have two (or more) dimensions. A grid has rows and columns. Comparing items in pairs needs both a "first item" and a "second item." Building a multiplication table needs both a row number and a column number. None of these can be expressed with a single loop.</p>
    <p>Nested loops handle the pairing automatically. The outer loop fixes one variable; the inner loop walks through every value of the other. The body runs once for every combination, which is exactly what two-dimensional work needs.</p>
  `,

  /* 1.1 Why use it */
  'topics-7-6-1-1': `
    <p>Anytime your work involves "for every X, also do something with every Y," nested loops are the natural fit:</p>
<pre class="language-javascript"><code class="language-javascript">// For every player, calculate score against every opponent
for (const player of players) {
  for (const opponent of opponents) {
    if (player.id !== opponent.id) {
      const result = playMatch(player, opponent);
      recordResult(player, opponent, result);
    }
  }
}

// For every row in a grid, render every cell
for (let row = 0; row < grid.length; row++) {
  for (let col = 0; col < grid[row].length; col++) {
    renderCell(grid[row][col], row, col);
  }
}

// For every category, walk through every item in that category
for (const category of categories) {
  for (const item of category.items) {
    indexItem(category.name, item);
  }
}</code></pre>

    <p>The pattern is always the same: the outer loop holds one piece steady, and the inner loop walks through everything that pairs with it. Once you recognize that pattern, nesting becomes the obvious tool.</p>
  `,

  /* 1.2 Where you use it */
  'topics-7-6-1-2': `
<pre class="language-javascript"><code class="language-javascript">// Grids and 2D arrays
const board = [
  ["X", "O", "X"],
  [" ", "X", "O"],
  ["O", " ", "X"]
];
for (let row = 0; row < board.length; row++) {
  for (let col = 0; col < board[row].length; col++) {
    console.log(row, col, board[row][col]);
  }
}

// All pairs of items
for (let i = 0; i < items.length; i++) {
  for (let j = i + 1; j < items.length; j++) {
    comparePair(items[i], items[j]);
  }
}

// Multiplication table
for (let row = 1; row <= 5; row++) {
  for (let col = 1; col <= 5; col++) {
    process.stdout.write((row * col) + "\\t");
  }
  console.log("");   // newline at end of each row
}

// Group → items inside group
for (const team of teams) {
  for (const player of team.players) {
    notify(player, "Your team plays today");
  }
}

// Building HTML rows of cells
for (const row of dataRows) {
  for (const cell of row.cells) {
    container.appendChild(makeCellElement(cell));
  }
}

// Counting matches across two lists
let matchCount = 0;
for (const a of listA) {
  for (const b of listB) {
    if (a === b) {
      matchCount = matchCount + 1;
    }
  }
}</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-7-6-1-3': `
    <p>Nested loops are the same idea as taking attendance in a school. The principal goes from classroom to classroom (the outer loop). In each classroom, the teacher goes from student to student calling each name (the inner loop). The principal doesn't move to the next classroom until the teacher has finished calling all the students in the current one.</p>
    <p>That's the rhythm of a nested loop. The outer loop holds steady on one item; the inner loop completes its full pass; then the outer moves on and the inner starts over from the top. Every student in every classroom gets called, by every combination of (classroom, student).</p>
    <p>If there are 4 classrooms with 25 students each, you call 100 names total. That multiplication — outer count times inner count — is the cost of nesting. It's how you cover all the combinations, but it's also why deep nesting can get expensive fast.</p>
  `,

  /* 1.4 Mental model */
  'topics-7-6-1-4': `
    <p>Picture an old analog clock with two hands. The minute hand and hour hand. The hour hand moves slowly — it advances once for every full sweep of the minute hand. The minute hand moves fast — it makes 60 ticks while the hour hand sits still on one number.</p>
    <p>That's exactly how nested loops work. The outer loop is the hour hand, ticking forward slowly. The inner loop is the minute hand, racing through all its values for each single position of the hour hand. By the time the hour hand has gone all the way around (12 ticks), the minute hand has ticked 720 times — 12 times 60.</p>
    <p>Whenever you're nesting loops, you're choosing which variable is the slow one and which is the fast one. The outer loop is the slow context; the inner loop does all its work for each step of that context. Most loop bugs in nested code come from getting these reversed or forgetting that the inner loop runs from scratch each round.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-7-6-1-5': `
<pre class="language-javascript"><code class="language-javascript">for (let i = 1; i <= 2; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log("i=" + i + " j=" + j);
  }
}

// prints:
//   i=1 j=1
//   i=1 j=2
//   i=1 j=3
//   i=2 j=1
//   i=2 j=2
//   i=2 j=3

// JavaScript is thinking:
// 1. Start outer loop. i = 1.
// 2. Check outer condition: 1 <= 2 → true. Enter outer body.
// 3.   Start inner loop. j = 1.
// 4.   Check inner: 1 <= 3 → true. Enter inner body. Log "i=1 j=1".
// 5.   Inner update: j++. j = 2.
// 6.   Check inner: 2 <= 3 → true. Log "i=1 j=2".
// 7.   Inner update: j++. j = 3.
// 8.   Check inner: 3 <= 3 → true. Log "i=1 j=3".
// 9.   Inner update: j++. j = 4.
// 10.  Check inner: 4 <= 3 → false. Exit INNER loop.
// 11. End of outer body. Outer update: i++. i = 2.
// 12. Check outer condition: 2 <= 2 → true. Enter outer body.
// 13.  Start inner loop AGAIN from scratch. j = 1.
// 14.  Inner runs all 3 iterations again. Logs "i=2 j=1", "i=2 j=2", "i=2 j=3".
// 15. End of outer body. i++. i = 3.
// 16. Check outer: 3 <= 2 → false. Exit outer loop.

// the inner loop ran TWICE (once per outer round), 3 iterations each time.
// total body executions: 2 × 3 = 6.</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-7-6-2-0': `
    <p>If a nested loop isn't producing what you expect, log both counters at the start of each iteration so you can see exactly which combinations are running:</p>
<pre class="language-javascript"><code class="language-javascript">for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log("OUTER i=" + i + " INNER j=" + j);
    // ... rest of body
  }
}

// the output reveals the pattern:
//   OUTER i=0 INNER j=0
//   OUTER i=0 INNER j=1
//   OUTER i=0 INNER j=2
//   OUTER i=1 INNER j=0
//   ...

// from this you can tell:
//   - is the inner loop completing fully each time? (should see 0,1,2 inside each i)
//   - is the outer loop running too many or too few times? (count distinct i values)
//   - are the right combinations happening? (specific (i,j) you expected)</code></pre>

    <p>Common signal: the inner loop only runs once because it forgot to reset, or runs forever because the inner condition depends on a variable from the outer loop. Logging both counters reveals this in seconds.</p>
  `,

  /* 2.1 The part that makes it click */
  'topics-7-6-2-1': `
    <p>A nested loop isn't a special construct. It's just a regular loop that happens to live inside another loop's body. JavaScript treats the inner loop like any other statement in the outer body — it runs the entire inner loop to completion before continuing past it.</p>
    <p>Once you see that, you can nest as deep as the work needs. Two-dimensional grid? Two loops. Three-dimensional cube? Three loops. The structure follows the shape of the data, not any special rules. The "nesting" is just stacking — the same way you might nest <code>if</code> statements or function calls.</p>
  `,

  /* 2.2 Common confusions */
  'topics-7-6-2-2': `
    <p><strong>Confusion: thinking the inner loop runs once across all outer iterations</strong></p>
<pre class="language-javascript"><code class="language-javascript">for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(i, j);
  }
}

// some people imagine: i goes 0→1→2, then j goes 0→1→2 (6 prints total)
// what actually happens: for EACH i, j goes 0→1→2 (9 prints total)
// the inner loop restarts from the top every outer iteration.</code></pre>

    <p><strong>Confusion: reusing the same counter variable</strong></p>
<pre class="language-javascript"><code class="language-javascript">// BUG — both loops use i
for (let i = 0; i < 3; i++) {
  for (let i = 0; i < 3; i++) {     // shadows the outer i
    console.log(i);
  }
}

// Or worse — without let, you really clobber the outer counter
for (i = 0; i < 3; i++) {
  for (i = 0; i < 3; i++) {
    // the outer i and inner i are the SAME variable
    // the outer loop only runs once because i is at 3 when inner finishes
  }
}

// Fix: use different variable names (i, j, k)
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(i, j);
  }
}</code></pre>

    <p><strong>Confusion: thinking <code>break</code> exits all the loops</strong></p>
<pre class="language-javascript"><code class="language-javascript">for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    if (j === 2) {
      break;     // exits the INNER loop only
    }
    console.log(i, j);
  }
  // execution continues HERE after inner break, then outer keeps going
}

// to exit BOTH loops, use a flag or an early return:
let done = false;
for (let i = 0; i < 5 && !done; i++) {
  for (let j = 0; j < 5; j++) {
    if (someCondition) {
      done = true;
      break;
    }
  }
}</code></pre>

    <p><strong>Confusion: nesting too deep when one loop would work</strong></p>
<pre class="language-javascript"><code class="language-javascript">// Sometimes people nest unnecessarily
for (const user of users) {
  for (const x of [user]) {     // pointless — only one item
    console.log(x.name);
  }
}

// Or to "find" something — better with break
for (const user of users) {
  for (const otherUser of users) {
    if (user.id === target) {
      // ... but this doesn't need nesting — only one loop is doing useful work
    }
  }
}

// reach for nested loops only when each level is doing real iteration work.</code></pre>

    <p><strong>Confusion: the outer counter being modified by the inner loop</strong></p>
<pre class="language-javascript"><code class="language-javascript">for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    i = i + 1;     // BUG — accidentally modifies outer counter
  }
}
// the outer loop's i is the same variable being touched by the inner.
// usually a typo (meant j, wrote i), but very confusing to debug.
// fix: be careful which counter you're updating.</code></pre>
  `,

  /* 2.3 Common mistakes */
  'topics-7-6-2-3': `
<pre class="language-javascript"><code class="language-javascript">for (let i = 0; i < rows.length; i++) {
  for (let i = 0; i < cols.length; i++) {     // both use i
    console.log(rows[i], cols[i]);             // wrong — i is now the inner counter
  }
}
// fix: use different names for nested counters
for (let i = 0; i < rows.length; i++) {
  for (let j = 0; j < cols.length; j++) {
    console.log(rows[i], cols[j]);
  }
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">for (const row of grid) {
  for (const cell of row) {
    if (cell === target) {
      break;     // exits inner only — outer keeps searching wastefully
    }
  }
}
// fix: use a flag or wrap in a function and return
function findInGrid(grid, target) {
  for (const row of grid) {
    for (const cell of row) {
      if (cell === target) {
        return cell;     // exits both loops at once
      }
    }
  }
  return null;
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">for (let i = 0; i < 1000; i++) {
  for (let j = 0; j < 1000; j++) {
    expensiveOperation(i, j);    // 1,000,000 calls
  }
}
// nested loops multiply work — this is a million expensive operations
// fix: think about whether the work needs to be quadratic, or if you can
// precompute, cache, or restructure to avoid the nested cost</code></pre>

<pre class="language-javascript"><code class="language-javascript">for (let i = 0; i < items.length; i++) {
  for (let j = 0; j < items.length; j++) {
    if (items[i] === items[j] && i !== j) {
      console.log("duplicate:", items[i]);
    }
  }
}
// reports each duplicate pair TWICE (once as (i,j), once as (j,i))
// fix: start inner at i+1 to only check each pair once
for (let i = 0; i < items.length; i++) {
  for (let j = i + 1; j < items.length; j++) {
    if (items[i] === items[j]) {
      console.log("duplicate:", items[i]);
    }
  }
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">for (let i = 0; i < rows.length; i++)
  for (let j = 0; j < cols.length; j++)
    console.log(i, j);
// works but invites bugs — adding a line later breaks the structure
// fix: always use braces, especially with nesting
for (let i = 0; i < rows.length; i++) {
  for (let j = 0; j < cols.length; j++) {
    console.log(i, j);
  }
}</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-7-6-3-0': `
<pre class="language-javascript"><code class="language-javascript">// Walking a 2D grid
const grid = [
  [1, 2, 3],
  [4, 5, 6]
];
for (let row = 0; row < grid.length; row++) {
  for (let col = 0; col < grid[row].length; col++) {
    console.log("(" + row + "," + col + ") = " + grid[row][col]);
  }
}

// Multiplication table
for (let r = 1; r <= 3; r++) {
  let line = "";
  for (let c = 1; c <= 3; c++) {
    line = line + (r * c) + "\\t";
  }
  console.log(line);
}
// 1  2  3
// 2  4  6
// 3  6  9

// All unique pairs from a list
const items = ["a", "b", "c"];
for (let i = 0; i < items.length; i++) {
  for (let j = i + 1; j < items.length; j++) {
    console.log(items[i] + "+" + items[j]);
  }
}
// a+b
// a+c
// b+c

// Group → items inside group
const teams = [
  { name: "Alpha", players: ["A1", "A2"] },
  { name: "Beta", players: ["B1", "B2", "B3"] }
];
for (const team of teams) {
  for (const player of team.players) {
    console.log(team.name + ": " + player);
  }
}

// Counting matches across two lists
const a = [1, 2, 3, 4];
const b = [3, 4, 5, 6];
let matches = 0;
for (const x of a) {
  for (const y of b) {
    if (x === y) {
      matches = matches + 1;
    }
  }
}
console.log("matches:", matches);   // 2

// Building a draw of brackets
for (const home of teams) {
  for (const away of teams) {
    if (home.name !== away.name) {
      console.log(home.name + " vs " + away.name);
    }
  }
}</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-7-6-3-1': `
    <p><strong>Example: rendering a calendar grid</strong></p>
<pre class="language-javascript"><code class="language-javascript">function renderMonth(weeksInMonth, daysPerWeek) {
  const calendar = document.querySelector(".calendar");
  for (let week = 0; week < weeksInMonth; week++) {
    const weekRow = document.createElement("div");
    weekRow.className = "week";
    for (let day = 0; day < daysPerWeek; day++) {
      const dayCell = document.createElement("div");
      dayCell.className = "day";
      dayCell.textContent = "W" + week + "D" + day;
      weekRow.appendChild(dayCell);
    }
    calendar.appendChild(weekRow);
  }
}
// outer loop = rows (weeks), inner loop = cells in each row (days).</code></pre>

    <p><strong>Example: showing every comment under every post</strong></p>
<pre class="language-javascript"><code class="language-javascript">function renderFeed(posts) {
  const feed = document.querySelector(".feed");
  for (const post of posts) {
    const postEl = makePostElement(post);
    feed.appendChild(postEl);

    for (const comment of post.comments) {
      const commentEl = makeCommentElement(comment);
      postEl.appendChild(commentEl);
    }
  }
}
// outer = posts, inner = comments inside each post.</code></pre>

    <p><strong>Example: comparing every form field for matching values</strong></p>
<pre class="language-javascript"><code class="language-javascript">function findDuplicateFields(form) {
  const inputs = form.querySelectorAll("input[type=text]");
  const duplicates = [];

  for (let i = 0; i < inputs.length; i++) {
    for (let j = i + 1; j < inputs.length; j++) {
      if (inputs[i].value && inputs[i].value === inputs[j].value) {
        duplicates.push([inputs[i].name, inputs[j].name]);
      }
    }
  }
  return duplicates;
}
// j starts at i+1 so we don't compare a field to itself or count pairs twice.</code></pre>

    <p><strong>Example: applying a class to every cell of a tic-tac-toe board</strong></p>
<pre class="language-javascript"><code class="language-javascript">function highlightWinningRow(board, winRow) {
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      const cellEl = document.querySelector(
        "[data-row='" + row + "'][data-col='" + col + "']"
      );
      if (row === winRow) {
        cellEl.classList.add("winner");
      } else {
        cellEl.classList.remove("winner");
      }
    }
  }
}</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-7-6-3-2': `
    <ul>
      <li><strong><code>for</code> and <code>for...of</code> loops</strong> → either type can be the outer or inner loop</li>
      <li><strong>2D arrays / grids</strong> → the most common reason to nest loops</li>
      <li><strong>Loop counter variables</strong> → conventionally <code>i</code> outside, <code>j</code> inside, <code>k</code> for triple-nested</li>
      <li><strong><code>break</code> and <code>continue</code></strong> → only affect the loop they're directly inside</li>
      <li><strong>Performance and complexity</strong> → nesting multiplies work; two loops over N items = N² operations</li>
      <li><strong>Pair-wise comparison pattern</strong> → starting inner at <code>i+1</code> avoids counting pairs twice</li>
      <li><strong>Early return from a function</strong> → the cleanest way to "break out of all loops"</li>
      <li><strong>Common mistakes</strong> → reusing counter names, miscounting pairs, deep unnecessary nesting</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-7-6-3-3': `
    <ul>
      <li><code>for</code> loop</li>
      <li><code>for...of</code> loop</li>
      <li>2D arrays</li>
      <li>Loop counter conventions (<code>i</code>, <code>j</code>, <code>k</code>)</li>
      <li><code>break</code> and <code>continue</code></li>
      <li>Algorithm complexity (Big O)</li>
      <li>Pair iteration patterns</li>
      <li>Returning from inside a loop</li>
    </ul>
  `,


/* ========================================================= 
   Sub-lesson: 3.8.8 Loops → loop through arrays
 =======================================================*/

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-7-7-0-0': `
    <p>Looping through an array means visiting each item in the array, one at a time, and doing something with each one. It's the single most common reason loops exist — most loop code you'll write or read is walking through an array.</p>
    <p>JavaScript gives you several ways to do it. Each handles the same job slightly differently, but they all share the same shape: visit each item, run the body, move on to the next.</p>
  `,

  /* 0.1 Syntax */
  'topics-7-7-0-1': `
<pre class="language-javascript"><code class="language-javascript">const fruits = ["apple", "banana", "cherry"];

// Method 1: for...of (cleanest for "do something with each item")
for (const fruit of fruits) {
  console.log(fruit);
}

// Method 2: classic for loop (when you need the index)
for (let i = 0; i < fruits.length; i++) {
  console.log(i + ": " + fruits[i]);
}

// Method 3: forEach (covered in detail in a later lesson)
fruits.forEach(function (fruit) {
  console.log(fruit);
});

// all three print:
//   apple
//   banana
//   cherry
//   (with method 2 also showing the index)</code></pre>
    <p>Pick the one that matches what you need. If you just want each item, <code>for...of</code> is the cleanest. If you need the index, the classic <code>for</code> is the right choice.</p>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-7-7-0-2': `
<pre class="language-javascript"><code class="language-javascript">const scores = [85, 92, 78];

for (const score of scores) {
  console.log(score);
}

// LOOP HEADER
//   for (const score of scores)
//   - "score" is a fresh variable each iteration
//   - "of" tells JS to walk through the array's items
//   - "scores" is the array being walked

// EACH ITERATION
//   1. JS picks the next item from scores
//   2. assigns it to "score"
//   3. runs the body once
//   4. moves on to the next item

// when there are no more items, the loop ends.
// notice: "score" holds the VALUE, not an index. fruits[score] would be wrong.</code></pre>
    <p>Whatever variable name you put after <code>const</code> becomes the current item. The loop hands you items directly — no need to track which position you're at.</p>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-7-7-0-3': `
    <p><strong>Using <code>for...of</code> (the most common pattern):</strong></p>
<pre class="language-javascript"><code class="language-javascript">for (const item of array) {
  // body uses "item" directly
}</code></pre>

    <p><strong>Using a classic <code>for</code> loop (when you need the index):</strong></p>
<pre class="language-javascript"><code class="language-javascript">for (let i = 0; i < array.length; i++) {
  const item = array[i];     // optional — many people use array[i] directly
  // body uses "item" or "i"
}</code></pre>

    <p>The standard pattern is <code>i = 0</code>, <code>i &lt; array.length</code>, <code>i++</code>. Together they walk every index from <code>0</code> to <code>length - 1</code> exactly once. Mix any of these up and you get off-by-one bugs.</p>

    <p><strong>Reading items inside the loop:</strong></p>
<pre class="language-javascript"><code class="language-javascript">// for...of — the variable IS the item
for (const fruit of fruits) {
  console.log(fruit);
}

// for loop — use array[i] to read the current item
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}</code></pre>

    <p><strong>The loop runs zero times if the array is empty.</strong> This is usually exactly what you want — no special "is the array empty?" check needed:</p>
<pre class="language-javascript"><code class="language-javascript">const items = [];
for (const item of items) {
  console.log(item);     // never runs
}
// no error, no special handling — the loop just doesn't enter.</code></pre>

    <p><strong>Modifying the array while looping is risky.</strong> Adding or removing items mid-loop can cause skipped items or repeated processing. If you need to change the array based on its contents, build a new array instead:</p>
<pre class="language-javascript"><code class="language-javascript">// RISKY — modifying the same array you're iterating
for (let i = 0; i < items.length; i++) {
  if (items[i].deleted) {
    items.splice(i, 1);     // shifts remaining items down — next item gets skipped
  }
}

// SAFER — build a new array
const remaining = [];
for (const item of items) {
  if (!item.deleted) {
    remaining.push(item);
  }
}</code></pre>

    <p><strong>If you remove items, loop in reverse</strong> so removing one doesn't affect the indexes of items you haven't visited yet:</p>
<pre class="language-javascript"><code class="language-javascript">for (let i = items.length - 1; i >= 0; i--) {
  if (items[i].deleted) {
    items.splice(i, 1);
  }
}</code></pre>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-7-7-1-0': `
    <p>Arrays hold many items, but you usually need to deal with them one at a time. Sum up cart prices? Touch each price. Render a list of products? Build one card per product. Filter out deleted users? Check each user. The array is the storage; the loop is how you actually do work with what's stored.</p>
    <p>Without a loop, you'd be writing <code>array[0]</code>, <code>array[1]</code>, <code>array[2]</code> by hand for each position — which only works if you know the exact length and never have to change it. Looping makes the code work for any array, of any size, including arrays whose contents change over time.</p>
  `,

  /* 1.1 Why use it */
  'topics-7-7-1-1': `
    <p>Looping over an array is how you turn many items into a single result, a transformed list, or a chain of side effects:</p>
<pre class="language-javascript"><code class="language-javascript">// Sum a list of numbers
let total = 0;
for (const price of prices) {
  total = total + price;
}

// Build a new list from an old one
const upper = [];
for (const name of names) {
  upper.push(name.toUpperCase());
}

// Find a specific item
let foundUser = null;
for (const user of users) {
  if (user.id === target) {
    foundUser = user;
    break;
  }
}

// Apply the same action to each item
for (const button of buttons) {
  button.disabled = true;
}</code></pre>

    <p>Whatever pattern you're using — accumulating, transforming, searching, applying — the same shape always works: walk the array, do something per item, get a result.</p>
  `,

  /* 1.2 Where you use it */
  'topics-7-7-1-2': `
<pre class="language-javascript"><code class="language-javascript">// Calculating a total
let cartTotal = 0;
for (const item of cart) {
  cartTotal = cartTotal + item.price * item.quantity;
}

// Counting how many match a condition
let activeCount = 0;
for (const user of users) {
  if (user.isActive) {
    activeCount = activeCount + 1;
  }
}

// Finding the largest value
let maxScore = scores[0];
for (const score of scores) {
  if (score > maxScore) {
    maxScore = score;
  }
}

// Building a comma-separated string
let output = "";
for (let i = 0; i < tags.length; i++) {
  output = output + tags[i];
  if (i < tags.length - 1) {
    output = output + ", ";
  }
}

// Rendering items as DOM elements
for (const product of products) {
  const card = document.createElement("div");
  card.textContent = product.name;
  container.appendChild(card);
}

// Filtering into a new array
const expensive = [];
for (const item of items) {
  if (item.price > 100) {
    expensive.push(item);
  }
}

// Searching with break
let found = null;
for (const order of orders) {
  if (order.id === targetId) {
    found = order;
    break;
  }
}</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-7-7-1-3': `
    <p>An array is a row of boxes, each holding one thing. Looping through it is like walking past the boxes one at a time, opening each, doing whatever needs to be done with what's inside, and moving on to the next. By the end of the row, you've handled every box.</p>
    <p>You don't think about how many boxes there are — you just keep walking until there are no more. The loop handles the "are there more boxes?" check for you. Whatever's inside whatever box you're at right now is what you're working on.</p>
    <p>Most array work boils down to this same walk. Adding up totals? You're walking and adding. Looking for something specific? Walking until you find it. Building a new row of boxes? Walking the original and creating boxes as you go.</p>
  `,

  /* 1.4 Mental model */
  'topics-7-7-1-4': `
    <p>Picture a postal worker delivering mail down a street. They start at the first house, drop off whatever's addressed there, walk to the next house, drop off the mail, and continue until they reach the end of the street. Same routine at every house — pull out the mail for that house, deliver, move on.</p>
    <p>That's looping through an array. The street is the array. Each house is one item. The "deliver mail" routine is the loop body. The postal worker doesn't keep track of how many houses are on the street — they just walk until there are no more, then stop.</p>
    <p>If the street has zero houses, the postal worker walks to where it should start, sees nothing, and goes home. No special "is this street empty?" handling — the same routine just runs zero times. That's the same way an empty array gracefully produces no iterations.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-7-7-1-5': `
<pre class="language-javascript"><code class="language-javascript">const numbers = [10, 20, 30];
let total = 0;

for (const n of numbers) {
  total = total + n;
}
console.log("total:", total);

// prints: total: 60

// JavaScript is thinking:
// 1. Create the array [10, 20, 30].
// 2. Create total, value 0.
// 3. Begin for...of. Look at numbers.
// 4. Pick the first item: 10. Assign to n.
//    Run body: total = 0 + 10 → total is now 10.
// 5. Pick next item: 20. Assign to n.
//    Run body: total = 10 + 20 → total is now 30.
// 6. Pick next item: 30. Assign to n.
//    Run body: total = 30 + 30 → total is now 60.
// 7. No more items. Exit the loop.
// 8. Log "total: 60".

// notice:
//   - the loop visited each item exactly once.
//   - "n" was a fresh variable each iteration, holding one value.
//   - "total" persisted across iterations because it's declared OUTSIDE the loop.
//   - the loop didn't care that there were exactly 3 items — would work for 0 or 1000.</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-7-7-2-0': `
    <p>If looping through an array isn't producing the expected result, log the current item at the start of every iteration:</p>
<pre class="language-javascript"><code class="language-javascript">for (const item of items) {
  console.log("processing:", item);
  // ... rest of body
}

// the output reveals:
//   - is the loop running at all? (any output?)
//   - is it running the right number of times? (count the lines)
//   - are the items what you expect? (are they undefined? wrong shape?)
//   - is there an item that doesn't match the others? (likely the bug source)</code></pre>

    <p>Common signal: the loop runs the right number of times but produces wrong values. Usually the bug is in the body — maybe you're reading the wrong property, or the accumulator variable is being reset somewhere it shouldn't be.</p>

    <p>Another signal: a TypeError mid-loop ("Cannot read property X of undefined"). That means at least one item in the array doesn't have the property you assumed. Log the items, find the odd one out:</p>
<pre class="language-javascript"><code class="language-javascript">for (const user of users) {
  console.log("user:", user);
  console.log("user.profile:", user.profile);    // probably undefined for some
  console.log("user.profile.name:", user.profile.name);    // crashes here
}

// fix: guard against missing data
for (const user of users) {
  if (user.profile && user.profile.name) {
    console.log(user.profile.name);
  }
}</code></pre>
  `,

  /* 2.1 The part that makes it click */
  'topics-7-7-2-1': `
    <p>Every "do something with a list" task in JavaScript is some flavor of looping through an array. Whether you call it filtering, transforming, summing, or rendering — under the hood, it's the same walk through items, applying the body to each.</p>
    <p>Once you see this, the difference between <code>for</code>, <code>for...of</code>, and <code>forEach</code> stops feeling like three separate things to memorize. They're three ways to express the same fundamental operation. Pick whichever reads cleanest for what you're doing.</p>
  `,

  /* 2.2 Common confusions */
  'topics-7-7-2-2': `
    <p><strong>Confusion: <code>for...of</code> vs <code>for...in</code> on arrays</strong></p>
<pre class="language-javascript"><code class="language-javascript">const fruits = ["apple", "banana"];

// for...of — gives VALUES
for (const item of fruits) {
  console.log(item);   // "apple", "banana"
}

// for...in — gives INDEXES (as strings)
for (const key in fruits) {
  console.log(key);    // "0", "1"
}

// for arrays, you almost always want for...of, not for...in.
// for...in is for object properties; using it on arrays is a common bug source.</code></pre>

    <p><strong>Confusion: thinking you need the index to access items</strong></p>
<pre class="language-javascript"><code class="language-javascript">// Many people learn loops with the for + array[i] pattern first
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// for...of gives the same result without the index dance
for (const fruit of fruits) {
  console.log(fruit);
}

// the index isn't required for "look at each item" — only for position-aware logic.</code></pre>

    <p><strong>Confusion: declaring the accumulator inside the loop</strong></p>
<pre class="language-javascript"><code class="language-javascript">// BUG — total resets to 0 each iteration
for (const price of prices) {
  let total = 0;
  total = total + price;
}
// total is gone after the loop, and it never accumulated across iterations.

// FIX — declare total OUTSIDE so it persists
let total = 0;
for (const price of prices) {
  total = total + price;
}
console.log(total);</code></pre>

    <p><strong>Confusion: modifying the array while looping</strong></p>
<pre class="language-javascript"><code class="language-javascript">// Adding or removing items during a forward loop causes problems
const items = ["a", "b", "c", "d"];
for (let i = 0; i < items.length; i++) {
  items.splice(i, 1);   // removes items[i], next iteration skips items[i+1]
}
// the array changes mid-loop, behavior gets unpredictable.

// fix: loop in reverse, or build a new array
const remaining = [];
for (const item of items) {
  if (!item.shouldRemove) {
    remaining.push(item);
  }
}</code></pre>

    <p><strong>Confusion: thinking the loop knows about the array's structure</strong></p>
<pre class="language-javascript"><code class="language-javascript">const data = [{ name: "A" }, { name: "B" }, "C"];

for (const item of data) {
  console.log(item.name);   // crashes on the 3rd iteration — "C" has no .name
}

// the loop walks the array as-is. If items have different shapes,
// you have to handle that in the body.
for (const item of data) {
  if (typeof item === "object" && item.name) {
    console.log(item.name);
  } else {
    console.log(item);
  }
}</code></pre>
  `,

  /* 2.3 Common mistakes */
  'topics-7-7-2-3': `
<pre class="language-javascript"><code class="language-javascript">for (let i = 0; i <= items.length; i++) {
  console.log(items[i]);
}
// off-by-one — <= goes past the last index, prints undefined at the end
// fix: use < instead of <=
for (let i = 0; i < items.length; i++) {
  console.log(items[i]);
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">for (const i of items) {
  console.log(items[i]);
}
// "i" is the VALUE here (because of...of gives values)
// items[someValue] is wrong unless that value happens to be a valid index
// fix: use the value directly
for (const item of items) {
  console.log(item);
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">for (const item in items) {
  console.log(item);
}
// "in" gives indexes (as strings), not values — common typo
// fix: use "of" for arrays
for (const item of items) {
  console.log(item);
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">let total;
for (const price of prices) {
  total = total + price;
}
// total starts as undefined. undefined + price is NaN. result is NaN.
// fix: initialize total to 0 (or whatever sensible default)
let total = 0;
for (const price of prices) {
  total = total + price;
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">for (let i = 0; i < items.length; i++) {
  if (items[i].toRemove) {
    items.splice(i, 1);
  }
}
// removing items while looping forward — items shift down, next item gets skipped
// fix: loop backward
for (let i = items.length - 1; i >= 0; i--) {
  if (items[i].toRemove) {
    items.splice(i, 1);
  }
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">for (const user of users) {
  if (user.id === target) {
    foundUser = user;
  }
}
// keeps looping even after finding the match — wastes work on remaining items
// fix: use break to stop early
let foundUser = null;
for (const user of users) {
  if (user.id === target) {
    foundUser = user;
    break;
  }
}</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-7-7-3-0': `
<pre class="language-javascript"><code class="language-javascript">// Simple walk
const fruits = ["apple", "banana", "cherry"];
for (const fruit of fruits) {
  console.log(fruit);
}

// Sum
let sum = 0;
const numbers = [1, 2, 3, 4, 5];
for (const n of numbers) {
  sum = sum + n;
}
console.log(sum);   // 15

// Find largest
const scores = [42, 87, 19, 73, 91, 56];
let max = scores[0];
for (const score of scores) {
  if (score > max) {
    max = score;
  }
}
console.log("max:", max);   // 91

// Count matches
const ages = [12, 18, 25, 17, 35, 60];
let adults = 0;
for (const age of ages) {
  if (age >= 18) {
    adults = adults + 1;
  }
}
console.log("adults:", adults);   // 4

// Build a new array (transform)
const original = [1, 2, 3];
const doubled = [];
for (const n of original) {
  doubled.push(n * 2);
}
console.log(doubled);   // [2, 4, 6]

// Build a new array (filter)
const items = [10, 25, 5, 30, 15];
const big = [];
for (const item of items) {
  if (item > 20) {
    big.push(item);
  }
}
console.log(big);   // [25, 30]

// Search with break
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Carol" }
];
let target = null;
for (const user of users) {
  if (user.id === 2) {
    target = user;
    break;
  }
}
console.log(target);   // { id: 2, name: "Bob" }

// Empty array — loop just runs zero times, no error
const empty = [];
for (const item of empty) {
  console.log("never prints");
}
console.log("after the loop");   // runs immediately</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-7-7-3-1': `
    <p><strong>Example: rendering a list of search results</strong></p>
<pre class="language-javascript"><code class="language-javascript">function renderResults(results) {
  const container = document.querySelector(".results");
  container.innerHTML = "";

  if (results.length === 0) {
    container.textContent = "No results found";
    return;
  }

  for (const result of results) {
    const card = document.createElement("div");
    card.className = "result";
    card.innerHTML =
      "<h3>" + result.title + "</h3>" +
      "<p>" + result.snippet + "</p>";
    container.appendChild(card);
  }
}</code></pre>

    <p><strong>Example: calculating an order total</strong></p>
<pre class="language-javascript"><code class="language-javascript">function calculateOrderTotal(order) {
  let subtotal = 0;
  let taxableAmount = 0;

  for (const item of order.items) {
    const lineTotal = item.price * item.quantity;
    subtotal = subtotal + lineTotal;
    if (item.taxable) {
      taxableAmount = taxableAmount + lineTotal;
    }
  }

  const tax = taxableAmount * 0.08;
  return {
    subtotal: subtotal,
    tax: tax,
    total: subtotal + tax
  };
}</code></pre>

    <p><strong>Example: finding the first invalid form field</strong></p>
<pre class="language-javascript"><code class="language-javascript">function findFirstInvalidField(form) {
  const fields = form.querySelectorAll("[required]");
  for (const field of fields) {
    if (field.value.trim() === "") {
      return field;
    }
  }
  return null;
}
// fields is a NodeList — for...of walks it just like an array.</code></pre>

    <p><strong>Example: removing items from a queue based on a rule</strong></p>
<pre class="language-javascript"><code class="language-javascript">function removeExpired(queue, now) {
  // loop backward to safely remove during iteration
  for (let i = queue.length - 1; i >= 0; i--) {
    if (queue[i].expiresAt < now) {
      queue.splice(i, 1);
    }
  }
}</code></pre>

    <p><strong>Example: building a "users by role" summary</strong></p>
<pre class="language-javascript"><code class="language-javascript">function summarizeByRole(users) {
  const counts = { admin: 0, editor: 0, viewer: 0, other: 0 };

  for (const user of users) {
    if (user.role === "admin") {
      counts.admin = counts.admin + 1;
    } else if (user.role === "editor") {
      counts.editor = counts.editor + 1;
    } else if (user.role === "viewer") {
      counts.viewer = counts.viewer + 1;
    } else {
      counts.other = counts.other + 1;
    }
  }

  return counts;
}</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-7-7-3-2': `
    <ul>
      <li><strong><code>for...of</code></strong> → the cleanest way to walk an array when you don't need the index</li>
      <li><strong><code>for</code> loop</strong> → use when you need the index, or when you're modifying the array</li>
      <li><strong><code>forEach</code></strong> → array method that runs a function for each item (covered later)</li>
      <li><strong>Arrays</strong> → the data structure being looped over</li>
      <li><strong><code>.length</code></strong> → how the loop knows when to stop</li>
      <li><strong><code>array[i]</code></strong> → reading items by index</li>
      <li><strong>Accumulator pattern</strong> → declaring a variable outside the loop to collect results</li>
      <li><strong>Modifying arrays mid-loop</strong> → the most common source of subtle array-loop bugs</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-7-7-3-3': `
    <ul>
      <li><code>for...of</code></li>
      <li><code>for</code> loop</li>
      <li><code>forEach</code></li>
      <li>Array <code>.length</code></li>
      <li>Bracket notation <code>array[i]</code></li>
      <li>Reverse iteration for safe removal</li>
      <li>Building new arrays inside loops</li>
      <li>Searching with <code>break</code></li>
    </ul>
  `,


  /* ========================================================= 
   Sub-lesson: 3.8.9 Loops → loop through strings
 =======================================================*/

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-7-8-0-0': `
    <p>Looping through a string means visiting each character in the string, one at a time, and doing something with each one. Strings behave a lot like arrays of characters — they have a <code>length</code>, you can read by index, and the loop patterns are nearly identical.</p>
    <p>It's how you do anything character-by-character: counting vowels, checking for letters or digits, building a transformed version of the string, or scanning for a specific character.</p>
  `,

  /* 0.1 Syntax */
  'topics-7-8-0-1': `
<pre class="language-javascript"><code class="language-javascript">const word = "hello";

// Method 1: for...of (cleanest for "each character")
for (const ch of word) {
  console.log(ch);
}

// Method 2: classic for loop (when you need the index)
for (let i = 0; i < word.length; i++) {
  console.log(i + ": " + word[i]);
}

// both print:
//   h
//   e
//   l
//   l
//   o
//   (with method 2 also showing the index)</code></pre>
    <p>The variable name (<code>ch</code> for "character" is common) holds one character per iteration. Strings can be walked just like arrays — the syntax is the same.</p>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-7-8-0-2': `
<pre class="language-javascript"><code class="language-javascript">const greeting = "hi!";

for (const ch of greeting) {
  console.log(ch);
}

// LOOP HEADER
//   for (const ch of greeting)
//   - "ch" is a fresh single-character string each iteration
//   - "of" tells JS to walk through the string's characters
//   - "greeting" is the string being walked

// EACH ITERATION
//   1. JS picks the next character: "h", then "i", then "!"
//   2. assigns it to "ch" (a new variable each round)
//   3. runs the body once
//   4. moves on to the next character

// when there are no more characters, the loop ends.
// "ch" is a string of length 1 — JavaScript doesn't have a separate "char" type.</code></pre>
    <p>Each character handed to you is itself a single-character string. There's no separate "char" type — just strings of length 1.</p>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-7-8-0-3': `
    <p><strong>String length and indexing work like arrays:</strong></p>
<pre class="language-javascript"><code class="language-javascript">const word = "hello";

console.log(word.length);   // 5 — number of characters
console.log(word[0]);       // "h" — first character (index 0)
console.log(word[4]);       // "o" — last character (length - 1)
console.log(word[5]);       // undefined — past the end</code></pre>

    <p>The standard <code>for</code> loop pattern is identical to array iteration:</p>
<pre class="language-javascript"><code class="language-javascript">for (let i = 0; i < word.length; i++) {
  console.log(word[i]);
}</code></pre>

    <p><strong>Strings are immutable.</strong> You can't change a character at a given position — assigning to a string index does nothing (it's a silent no-op):</p>
<pre class="language-javascript"><code class="language-javascript">let word = "hello";
word[0] = "H";        // does nothing — strings can't be modified
console.log(word);    // still "hello"

// To "change" a string, build a new string instead:
let result = "";
for (let i = 0; i < word.length; i++) {
  if (i === 0) {
    result = result + word[i].toUpperCase();
  } else {
    result = result + word[i];
  }
}
console.log(result);   // "Hello"</code></pre>

    <p><strong><code>charAt(i)</code> is an alternative to <code>str[i]</code></strong> that returns an empty string instead of <code>undefined</code> when out of range:</p>
<pre class="language-javascript"><code class="language-javascript">"hello"[10]         // undefined
"hello".charAt(10)  // ""

// most code uses str[i] — it's shorter and undefined is usually fine to handle.</code></pre>

    <p><strong>The empty string loops zero times.</strong> No special handling needed:</p>
<pre class="language-javascript"><code class="][javascript"><code class="language-javascript">for (const ch of "") {
  console.log(ch);   // never runs
}
// just like an empty array, an empty string just doesn't enter the loop body.</code></pre>

    <p><strong>Multi-character emoji and special characters need extra care.</strong> Some characters (most emoji, some accented letters) take up two slots in a string when accessed by index. <code>for...of</code> handles them correctly; classic <code>for</code> with <code>str[i]</code> does not:</p>
<pre class="language-javascript"><code class="language-javascript">const text = "hi😀";

// for...of correctly treats the emoji as one character
for (const ch of text) {
  console.log(ch);
}
// h
// i
// 😀

// classic for loop splits the emoji into two pieces (broken garbage characters)
for (let i = 0; i < text.length; i++) {
  console.log(text[i]);
}
// h
// i
// (broken half of emoji)
// (broken half of emoji)</code></pre>

    <p>For most ASCII text (letters, digits, common punctuation), both work the same. But if your strings might include emoji or non-Latin characters, <code>for...of</code> is the safer choice.</p>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-7-8-1-0': `
    <p>Strings carry text, but most useful operations on text need to look at individual characters. Counting how many letters are vowels. Checking if a password has a digit. Replacing every space with an underscore. None of these can be done with the string as a single blob — you have to walk through it.</p>
    <p>Looping through a string gives you that character-level access. You see each character in turn, can decide what to do with each one, and can build new strings or extract information based on what you find.</p>
  `,

  /* 1.1 Why use it */
  'topics-7-8-1-1': `
    <p>Anything character-aware uses string iteration:</p>
<pre class="language-javascript"><code class="language-javascript">// Counting specific characters
let vowels = 0;
for (const ch of "education") {
  if ("aeiou".includes(ch)) {
    vowels = vowels + 1;
  }
}
console.log(vowels);   // 5

// Checking if every character matches a rule
let allDigits = true;
for (const ch of "12345") {
  if (ch < "0" || ch > "9") {
    allDigits = false;
    break;
  }
}
console.log(allDigits);   // true

// Building a transformed string
let reversed = "";
for (const ch of "hello") {
  reversed = ch + reversed;
}
console.log(reversed);   // "olleh"

// Finding the position of a character
const word = "javascript";
let firstA = -1;
for (let i = 0; i < word.length; i++) {
  if (word[i] === "a") {
    firstA = i;
    break;
  }
}
console.log(firstA);   // 1</code></pre>

    <p>For some of these, JavaScript has built-in string methods (<code>indexOf</code>, <code>includes</code>, <code>replace</code>) that don't require a loop. But when the rule is custom — count vowels, find the first uppercase letter, check character-by-character — looping is the way.</p>
  `,

  /* 1.2 Where you use it */
  'topics-7-8-1-2': `
<pre class="language-javascript"><code class="language-javascript">// Counting characters by category
function countTypes(str) {
  const counts = { letters: 0, digits: 0, other: 0 };
  for (const ch of str) {
    if (/[a-zA-Z]/.test(ch)) {
      counts.letters = counts.letters + 1;
    } else if (/[0-9]/.test(ch)) {
      counts.digits = counts.digits + 1;
    } else {
      counts.other = counts.other + 1;
    }
  }
  return counts;
}

// Validating that a string has only allowed characters
function isAlphanumeric(str) {
  for (const ch of str) {
    const isLetter = (ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z");
    const isDigit = ch >= "0" && ch <= "9";
    if (!isLetter && !isDigit) {
      return false;
    }
  }
  return true;
}

// Building a slug (URL-safe version of a title)
function makeSlug(title) {
  let slug = "";
  for (const ch of title.toLowerCase()) {
    if (ch === " ") {
      slug = slug + "-";
    } else if ((ch >= "a" && ch <= "z") || (ch >= "0" && ch <= "9")) {
      slug = slug + ch;
    }
  }
  return slug;
}
console.log(makeSlug("Hello World 2024"));   // "hello-world-2024"

// Reversing a string
function reverse(str) {
  let result = "";
  for (const ch of str) {
    result = ch + result;
  }
  return result;
}

// Detecting password strength
function hasUppercase(str) {
  for (const ch of str) {
    if (ch >= "A" && ch <= "Z") {
      return true;
    }
  }
  return false;
}</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-7-8-1-3': `
    <p>A string is a row of letters lined up together. "hello" is the letters h, e, l, l, o sitting next to each other. Looping through a string is like reading each letter in order, one at a time, the way you'd read a word out loud.</p>
    <p>You don't think about the word as a single thing — you think about it as five letters in a row. Same with a loop. The string is the row; the loop walks past each letter; you do whatever you need with the letter you're currently looking at; then you move on to the next.</p>
    <p>This is exactly how arrays work too — strings just happen to be rows of letters instead of rows of arbitrary items. That's why the same loop syntax works for both.</p>
  `,

  /* 1.4 Mental model */
  'topics-7-8-1-4': `
    <p>Picture a person reading a sign letter by letter — the kind of sign where each letter is on its own panel. They walk past, look at the first letter, walk to the next panel, look at the second letter, and keep going until they've seen all the letters. They might be doing different things at each panel — counting vowels, looking for a specific letter, copying down a transformed version — but the walk itself is the same shape.</p>
    <p>That's looping through a string. Each character is one panel on the sign. The loop body is what you do at each panel. The string itself doesn't move; you walk past it, character by character, until you reach the end.</p>
    <p>The reason this looks identical to walking an array is that both are just "rows of things you visit one at a time." Different rows hold different stuff — characters, numbers, objects — but the walking pattern doesn't change.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-7-8-1-5': `
<pre class="language-javascript"><code class="language-javascript">const word = "cat";
let upper = "";

for (const ch of word) {
  upper = upper + ch.toUpperCase();
}
console.log(upper);

// prints: CAT

// JavaScript is thinking:
// 1. Create the string "cat".
// 2. Create upper, value "" (empty string).
// 3. Begin for...of. Look at "cat".
// 4. Pick first character: "c". Assign to ch.
//    Run body: ch.toUpperCase() → "C".
//    upper = "" + "C" → upper is now "C".
// 5. Pick next character: "a". Assign to ch.
//    Run body: "A". upper = "C" + "A" → upper is now "CA".
// 6. Pick next character: "t". Assign to ch.
//    Run body: "T". upper = "CA" + "T" → upper is now "CAT".
// 7. No more characters. Exit the loop.
// 8. Log "CAT".

// notice:
//   - "ch" is a single-character string each iteration.
//   - "upper" persists across iterations — declared OUTSIDE the loop.
//   - the original "word" is never modified — strings are immutable.
//   - the result is built up by concatenation, character by character.</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-7-8-2-0': `
    <p>If a string loop isn't producing what you expect, log the current character along with its position:</p>
<pre class="language-javascript"><code class="language-javascript">for (let i = 0; i < str.length; i++) {
  console.log("i:", i, "char:", str[i], "code:", str.charCodeAt(i));
}

// the output reveals:
//   - is the loop running the right number of times?
//   - are the characters what you expect?
//   - is there an unexpected whitespace, line break, or invisible character?
//   - is the index out of range?

// "code" (the character code) is especially useful for catching invisible characters
// like tabs (9), newlines (10), or non-breaking spaces (160) that look like normal
// spaces but compare differently.</code></pre>

    <p>Common signal: the loop processes "almost right" but one comparison fails unexpectedly. That's often an invisible character — a trailing space, a newline, or a non-breaking space that looks identical to a regular space but isn't.</p>
  `,

  /* 2.1 The part that makes it click */
  'topics-7-8-2-1': `
    <p>Strings are walkable just like arrays, with one twist: each "item" is a single character (a string of length 1), not a custom object. Once you see strings as "arrays of characters that happen to also be strings themselves," all the array loop patterns transfer directly.</p>
    <p>The other key insight: there's no character type in JavaScript. <code>"a"</code> is just a string with one character in it. Whatever you can do to a string, you can do to a single-character string — including running it through string methods, comparing it with other strings, or concatenating it to build longer strings.</p>
  `,

  /* 2.2 Common confusions */
  'topics-7-8-2-2': `
    <p><strong>Confusion: trying to modify the string in place</strong></p>
<pre class="language-javascript"><code class="language-javascript">let word = "hello";
word[0] = "H";
console.log(word);   // still "hello" — assignment did nothing

// strings are immutable. To "change" a string, build a new one:
let modified = "";
for (let i = 0; i < word.length; i++) {
  if (i === 0) {
    modified = modified + word[i].toUpperCase();
  } else {
    modified = modified + word[i];
  }
}
console.log(modified);   // "Hello"</code></pre>

    <p><strong>Confusion: thinking a character is a different type from a string</strong></p>
<pre class="language-javascript"><code class="language-javascript">const ch = "a";
console.log(typeof ch);   // "string"
console.log(ch.length);   // 1
console.log(ch.toUpperCase());   // "A"

// "a" is just a string of length 1. JavaScript has no separate char type.
// every string method works on single-character strings.</code></pre>

    <p><strong>Confusion: <code>for...of</code> vs <code>for...in</code> on strings</strong></p>
<pre class="language-javascript"><code class="language-javascript">// for...of — gives CHARACTERS
for (const ch of "abc") {
  console.log(ch);   // "a", "b", "c"
}

// for...in — gives INDEXES (as strings)
for (const i in "abc") {
  console.log(i);    // "0", "1", "2"
}

// for character-by-character work, you almost always want for...of, not for...in.</code></pre>

    <p><strong>Confusion: emoji and special characters mid-string</strong></p>
<pre class="language-javascript"><code class="language-javascript">const text = "hi 😀";

// for...of — handles emoji as one character
for (const ch of text) {
  console.log(ch);   // "h", "i", " ", "😀"
}

// classic for — splits emoji into two broken halves
for (let i = 0; i < text.length; i++) {
  console.log(text[i]);   // "h", "i", " ", garbage, garbage
}

// for any string that might contain emoji or non-Latin characters,
// for...of is safer.</code></pre>

    <p><strong>Confusion: thinking <code>str[i]</code> returns a number</strong></p>
<pre class="language-javascript"><code class="language-javascript">const word = "abc";
const ch = word[0];

console.log(ch);   // "a" — a string, not a char code
console.log(typeof ch);   // "string"

// to get the numeric character code, use charCodeAt:
console.log(word.charCodeAt(0));   // 97 (the ASCII code for "a")</code></pre>

    <p><strong>Confusion: forgetting strings have whitespace too</strong></p>
<pre class="language-javascript"><code class="language-javascript">const text = "hi there";
let count = 0;
for (const ch of text) {
  count = count + 1;
}
console.log(count);   // 8 — the space counts as a character

// to count only non-whitespace, filter explicitly:
let nonSpaceCount = 0;
for (const ch of text) {
  if (ch !== " ") {
    nonSpaceCount = nonSpaceCount + 1;
  }
}
console.log(nonSpaceCount);   // 7</code></pre>
  `,

  /* 2.3 Common mistakes */
  'topics-7-8-2-3': `
<pre class="language-javascript"><code class="language-javascript">let word = "hello";
for (let i = 0; i < word.length; i++) {
  word[i] = word[i].toUpperCase();
}
console.log(word);
// strings are immutable — assignment does nothing, word stays "hello"
// fix: build a new string
let upper = "";
for (let i = 0; i < word.length; i++) {
  upper = upper + word[i].toUpperCase();
}
console.log(upper);</code></pre>

<pre class="language-javascript"><code class="language-javascript">for (let i = 0; i <= str.length; i++) {
  console.log(str[i]);
}
// off-by-one: <= goes one past the last index, prints undefined at the end
// fix: use < instead of <=
for (let i = 0; i < str.length; i++) {
  console.log(str[i]);
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">for (const i of str) {
  console.log(str[i]);
}
// "i" is the character (a string), not an index
// str["a"] is undefined
// fix: use the value directly
for (const ch of str) {
  console.log(ch);
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">for (const ch in str) {
  console.log(ch);
}
// "in" gives indexes (as strings), not characters
// fix: use "of"
for (const ch of str) {
  console.log(ch);
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">let result;
for (const ch of word) {
  result = result + ch;
}
// result starts undefined. undefined + "h" is "undefinedh"
// fix: initialize to empty string
let result = "";
for (const ch of word) {
  result = result + ch;
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">for (let i = 0; i < text.length; i++) {
  if (text[i] === "😀") {
    console.log("found");
  }
}
// classic for loop with str[i] splits emoji into broken halves — won't match
// fix: use for...of for emoji-safe iteration
for (const ch of text) {
  if (ch === "😀") {
    console.log("found");
  }
}</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-7-8-3-0': `
<pre class="language-javascript"><code class="language-javascript">// Print each character
for (const ch of "abc") {
  console.log(ch);
}

// Count characters
let count = 0;
for (const ch of "javascript") {
  count = count + 1;
}
console.log(count);   // 10 (same as "javascript".length)

// Count vowels
let vowels = 0;
for (const ch of "education") {
  if ("aeiou".includes(ch)) {
    vowels = vowels + 1;
  }
}
console.log(vowels);   // 5

// Build an uppercase version
let upper = "";
for (const ch of "hello") {
  upper = upper + ch.toUpperCase();
}
console.log(upper);   // "HELLO"

// Reverse a string
let reversed = "";
for (const ch of "hello") {
  reversed = ch + reversed;
}
console.log(reversed);   // "olleh"

// Find the first digit
let firstDigit = -1;
const text = "abc123";
for (let i = 0; i < text.length; i++) {
  if (text[i] >= "0" && text[i] <= "9") {
    firstDigit = i;
    break;
  }
}
console.log(firstDigit);   // 3

// Check if a string is all uppercase
function isAllUpper(str) {
  for (const ch of str) {
    if (ch >= "a" && ch <= "z") {
      return false;
    }
  }
  return true;
}
console.log(isAllUpper("HELLO"));   // true
console.log(isAllUpper("Hello"));   // false

// Replace spaces with hyphens
let result = "";
for (const ch of "hello world") {
  if (ch === " ") {
    result = result + "-";
  } else {
    result = result + ch;
  }
}
console.log(result);   // "hello-world"</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-7-8-3-1': `
    <p><strong>Example: validating a phone number contains only digits and dashes</strong></p>
<pre class="language-javascript"><code class="language-javascript">function isValidPhone(input) {
  for (const ch of input) {
    const isDigit = ch >= "0" && ch <= "9";
    const isDash = ch === "-";
    if (!isDigit && !isDash) {
      return false;
    }
  }
  return true;
}
console.log(isValidPhone("555-1234"));   // true
console.log(isValidPhone("abc-1234"));   // false</code></pre>

    <p><strong>Example: highlighting matching characters in search</strong></p>
<pre class="language-javascript"><code class="language-javascript">function highlightMatches(text, query) {
  let result = "";
  for (const ch of text) {
    if (query.includes(ch.toLowerCase())) {
      result = result + "<mark>" + ch + "</mark>";
    } else {
      result = result + ch;
    }
  }
  return result;
}</code></pre>

    <p><strong>Example: making a URL slug from a title</strong></p>
<pre class="language-javascript"><code class="language-javascript">function makeSlug(title) {
  const lower = title.toLowerCase();
  let slug = "";

  for (const ch of lower) {
    if (ch === " ") {
      slug = slug + "-";
    } else if ((ch >= "a" && ch <= "z") || (ch >= "0" && ch <= "9")) {
      slug = slug + ch;
    }
    // any other character is dropped
  }

  return slug;
}
console.log(makeSlug("Hello World!"));        // "hello-world"
console.log(makeSlug("My 1st Blog Post"));    // "my-1st-blog-post"</code></pre>

    <p><strong>Example: password strength checker</strong></p>
<pre class="language-javascript"><code class="language-javascript">function checkPassword(password) {
  let hasUpper = false;
  let hasLower = false;
  let hasDigit = false;
  let hasSpecial = false;

  for (const ch of password) {
    if (ch >= "A" && ch <= "Z") {
      hasUpper = true;
    } else if (ch >= "a" && ch <= "z") {
      hasLower = true;
    } else if (ch >= "0" && ch <= "9") {
      hasDigit = true;
    } else {
      hasSpecial = true;
    }
  }

  return {
    length: password.length,
    hasUpper: hasUpper,
    hasLower: hasLower,
    hasDigit: hasDigit,
    hasSpecial: hasSpecial
  };
}</code></pre>

    <p><strong>Example: counting words in a paragraph</strong></p>
<pre class="language-javascript"><code class="language-javascript">function countWords(text) {
  let count = 0;
  let inWord = false;

  for (const ch of text) {
    if (ch === " " || ch === "\\n" || ch === "\\t") {
      inWord = false;
    } else if (!inWord) {
      count = count + 1;
      inWord = true;
    }
  }

  return count;
}
console.log(countWords("hello world  foo bar"));   // 4 (handles multiple spaces)</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-7-8-3-2': `
    <ul>
      <li><strong>Strings</strong> → the data type being walked</li>
      <li><strong><code>str.length</code></strong> → how a classic <code>for</code> loop knows when to stop</li>
      <li><strong><code>str[i]</code></strong> → reading a character by index</li>
      <li><strong><code>str.charAt(i)</code></strong> → an alternative that returns "" instead of undefined for out-of-range indexes</li>
      <li><strong><code>str.charCodeAt(i)</code></strong> → returns the numeric code of the character at <code>i</code></li>
      <li><strong>String immutability</strong> → why you have to build a new string instead of modifying in place</li>
      <li><strong>Concatenation</strong> → the <code>+</code> operator for joining strings, used to build results</li>
      <li><strong><code>for...of</code> vs classic <code>for</code></strong> → emoji safety, index access, code style</li>
      <li><strong>Built-in string methods</strong> → <code>includes</code>, <code>indexOf</code>, <code>replace</code>, etc., that often replace manual loops</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-7-8-3-3': `
    <ul>
      <li>Strings and string basics</li>
      <li><code>str.length</code></li>
      <li>Bracket notation <code>str[i]</code></li>
      <li><code>charAt</code> and <code>charCodeAt</code></li>
      <li>String immutability</li>
      <li>String concatenation</li>
      <li><code>for...of</code> with strings</li>
      <li>Built-in string methods</li>
    </ul>
  `,

  /* ========================================================= 
   Sub-lesson: 3.8.10 Loops → loop through DOM lists
 =======================================================*/

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-7-9-0-0': `
    <p>When you grab elements from a webpage with methods like <code>document.querySelectorAll</code> or <code>document.getElementsByClassName</code>, you don't get back a regular array — you get a <strong>DOM list</strong>. These behave a lot like arrays, but with some quirks. Looping through them is how you act on every matching element on the page.</p>
    <p>It's the bridge between "I selected a bunch of elements" and "do something to each of them" — applying a class, attaching a listener, reading values, and so on.</p>
  `,

  /* 0.1 Syntax */
  'topics-7-9-0-1': `
<pre class="language-javascript"><code class="language-javascript">// Grab every paragraph on the page
const paragraphs = document.querySelectorAll("p");

// Method 1: for...of (cleanest)
for (const p of paragraphs) {
  p.style.color = "blue";
}

// Method 2: classic for loop (when you need the index)
for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.color = "blue";
}

// Method 3: forEach (works on NodeList from querySelectorAll)
paragraphs.forEach(function (p) {
  p.style.color = "blue";
});

// all three turn every paragraph on the page blue.</code></pre>
    <p>The patterns look identical to looping through an array — because <code>NodeList</code> (what <code>querySelectorAll</code> returns) is iterable just like arrays.</p>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-7-9-0-2': `
<pre class="language-javascript"><code class="language-javascript">const buttons = document.querySelectorAll("button");

for (const button of buttons) {
  button.disabled = true;
}

// document.querySelectorAll("button")
//   → returns a NodeList containing every (button) element on the page

// for (const button of buttons)
//   → walks through the NodeList one element at a time
//   → "button" holds one DOM element each iteration

// inside the body, "button" is a real DOM element — you can:
//   - set properties (disabled, value, textContent)
//   - modify styles (button.style.backgroundColor)
//   - add/remove classes (button.classList.add/remove)
//   - attach listeners (button.addEventListener)
//   - read attributes (button.dataset.id, button.getAttribute)</code></pre>
    <p>Once you have a DOM element in hand, you can do anything to it that you'd do to a single element selected by ID. The loop just lets you apply that same work to many elements at once.</p>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-7-9-0-3': `
    <p><strong>Two main types of DOM lists:</strong></p>
<pre class="language-javascript"><code class="language-javascript">// NodeList — returned by querySelectorAll (most common)
const nodeList = document.querySelectorAll(".item");

// HTMLCollection — returned by getElementsByClassName, getElementsByTagName, etc.
const htmlCollection = document.getElementsByClassName("item");</code></pre>

    <p>Both are list-like objects with a <code>.length</code>, both are walkable with <code>for...of</code> and classic <code>for</code>. The difference: <strong>NodeList</strong> is "static" (a snapshot at the time you called the method), while <strong>HTMLCollection</strong> is "live" (it updates as the DOM changes).</p>

<pre class="language-javascript"><code class="language-javascript">// Live HTMLCollection — adding elements changes the loop mid-flight
const items = document.getElementsByClassName("item");
for (let i = 0; i < items.length; i++) {
  const newDiv = document.createElement("div");
  newDiv.className = "item";
  document.body.appendChild(newDiv);
  // items.length grows every iteration → infinite loop
}

// Static NodeList — adding elements doesn't change the loop
const items = document.querySelectorAll(".item");
for (let i = 0; i < items.length; i++) {
  // ... safe to add new .item elements
}</code></pre>

    <p><strong>NodeList supports <code>forEach</code>; HTMLCollection does not</strong>:</p>
<pre class="language-javascript"><code class="language-javascript">document.querySelectorAll(".item").forEach(function (el) {
  // works
});

document.getElementsByClassName("item").forEach(function (el) {
  // TypeError — HTMLCollection has no forEach
});

// to use forEach on HTMLCollection, convert to a real array first:
const arr = Array.from(document.getElementsByClassName("item"));
arr.forEach(function (el) { ... });</code></pre>

    <p><strong>DOM lists are NOT real arrays.</strong> Most array methods (<code>map</code>, <code>filter</code>, <code>push</code>) don't work on them directly. To use those, convert to an array first:</p>
<pre class="language-javascript"><code class="language-javascript">// Doesn't work
const elements = document.querySelectorAll("li");
elements.map(function (el) { ... });   // TypeError

// Does work
const arr = Array.from(elements);
const ids = arr.map(function (el) {
  return el.id;
});

// Or use the spread operator
const arr2 = [...elements];</code></pre>

    <p><strong>If the selector matches no elements, you get an empty list.</strong> Looping through an empty NodeList just runs zero times — no error:</p>
<pre class="language-javascript"><code class="language-javascript">const found = document.querySelectorAll(".no-such-class");
console.log(found.length);   // 0

for (const el of found) {
  console.log("never runs");
}</code></pre>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-7-9-1-0': `
    <p>Most pages have many similar elements — every product card, every list item, every form input, every button. Selecting them with <code>querySelectorAll</code> gives you a list, but a list isn't useful by itself. You need to actually do something to each one: style it, hook up an event, read a value, mark it active or inactive.</p>
    <p>Looping through DOM lists is how you take "all the elements that match" and turn it into "all the work that needs doing." Without the loop, you'd have to write the same line for each element by hand — which is impossible if you don't know how many there are at runtime.</p>
  `,

  /* 1.1 Why use it */
  'topics-7-9-1-1': `
    <p>Anytime you want to apply the same operation to many DOM elements, looping is the answer:</p>
<pre class="language-javascript"><code class="language-javascript">// Disable every submit button on the page
const buttons = document.querySelectorAll("button[type=submit]");
for (const btn of buttons) {
  btn.disabled = true;
}

// Hook up the same click handler on every nav link
const links = document.querySelectorAll(".nav-link");
for (const link of links) {
  link.addEventListener("click", trackNavClick);
}

// Highlight every row that contains a specific class
const rows = document.querySelectorAll("tr");
for (const row of rows) {
  if (row.classList.contains("expired")) {
    row.style.backgroundColor = "#ffe5e5";
  }
}

// Clear every input on a form
const inputs = document.querySelectorAll(".my-form input");
for (const input of inputs) {
  input.value = "";
}</code></pre>

    <p>The loop body acts on one element at a time — exactly the same code you'd write for a single element, just applied to all of them.</p>
  `,

  /* 1.2 Where you use it */
  'topics-7-9-1-2': `
<pre class="language-javascript"><code class="language-javascript">// Attaching the same listener to many elements
const tabs = document.querySelectorAll(".tab");
for (const tab of tabs) {
  tab.addEventListener("click", function () {
    activateTab(tab);
  });
}

// Reading values from many fields
const inputs = document.querySelectorAll(".form-field");
const values = [];
for (const input of inputs) {
  values.push(input.value);
}

// Setting CSS classes on a group
const cards = document.querySelectorAll(".product-card");
for (const card of cards) {
  card.classList.add("loaded");
}

// Toggling visibility based on a condition
const items = document.querySelectorAll(".task");
for (const item of items) {
  if (item.dataset.completed === "true") {
    item.style.display = "none";
  }
}

// Counting how many match a condition
const checked = document.querySelectorAll("input[type=checkbox]:checked");
console.log("you selected " + checked.length + " items");

// Reading data attributes from each element
const products = document.querySelectorAll(".product");
const productIds = [];
for (const product of products) {
  productIds.push(product.dataset.id);
}

// Removing a set of elements from the page
const ads = document.querySelectorAll(".ad");
for (const ad of ads) {
  ad.remove();
}</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-7-9-1-3': `
    <p>Imagine you're at a hotel and someone hands you a list of every room that needs cleaning. You don't clean the list — you walk down the hallway, room by room, doing the same cleaning routine in each one. The list told you which rooms; the cleaning is what you actually do once you're inside.</p>
    <p>That's looping through a DOM list. The list from <code>querySelectorAll</code> is the "rooms that need cleaning" — every element matching your selector. The loop body is the cleaning routine — whatever you want to do to each one. The loop walks you through them in order, handing you one element at a time.</p>
    <p>Without the loop, you'd have the list but no way to actually do anything with it. The loop is what turns "here are 50 elements that match" into "and now I've done the same thing to all 50 of them."</p>
  `,

  /* 1.4 Mental model */
  'topics-7-9-1-4': `
    <p>Picture a librarian shelving books. They get a cart with 30 books, and their job is to put each book in the right spot. They don't put away the cart — they take one book off the cart, find its place on the shelf, slide it in, and grab the next book. They do the same routine for every book until the cart is empty.</p>
    <p>Looping through a DOM list works the same way. <code>querySelectorAll</code> hands you the cart — a collection of elements. The loop body is the "shelve one book" routine — whatever you do with one element. The loop walks through the cart, handing you elements one at a time, until there are none left.</p>
    <p>The cart isn't the work; it's just a container. The actual work happens inside the loop body, applied once per element. The reason DOM lists feel so similar to arrays is that both are just carts of stuff you visit one at a time.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-7-9-1-5': `
<pre class="language-javascript"><code class="language-javascript">// HTML on the page:
//   <button class="action">First</button>
//   <button class="action">Second</button>
//   <button class="action">Third</button>

const buttons = document.querySelectorAll(".action");

for (const button of buttons) {
  button.style.backgroundColor = "yellow";
}

// every .action button on the page now has a yellow background.

// JavaScript is thinking:
// 1. Run document.querySelectorAll(".action") — collect all matching elements.
//    Returns a NodeList with 3 elements (the three buttons).
// 2. Begin for...of. Look at the NodeList.
// 3. Pick the first button. Assign to "button".
//    Run body: set backgroundColor to "yellow".
//    The DOM updates immediately — that button turns yellow.
// 4. Pick the second button. Assign to "button".
//    Run body: same thing. Second button turns yellow.
// 5. Pick the third button. Assign to "button".
//    Run body: same thing. Third button turns yellow.
// 6. No more elements. Exit the loop.

// notice:
//   - "button" was reassigned each iteration to the next DOM element.
//   - the changes happened on the page as each iteration ran.
//   - you didn't have to know there were 3 buttons — the loop handled any count.</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-7-9-2-0': `
    <p>If a DOM list loop isn't doing what you expect, the first thing to log is the list itself before the loop:</p>
<pre class="language-javascript"><code class="language-javascript">const items = document.querySelectorAll(".item");
console.log("found:", items.length, "items");
console.log(items);

for (const item of items) {
  console.log("processing:", item);
  // ... rest of body
}

// the output reveals:
//   - is the selector matching anything? (length > 0?)
//   - did it match the right elements?
//   - is the loop entering the body? (any "processing" logs?)
//   - is each item the kind of element you expected?</code></pre>

    <p>Common signal: the loop appears to do nothing. Almost always one of three causes:</p>
    <ol>
      <li><strong>The selector doesn't match anything</strong> — <code>length</code> is 0. Check the CSS selector for typos.</li>
      <li><strong>The selector runs before the page is ready</strong> — the elements don't exist yet at the time the script runs. Wrap the code in <code>DOMContentLoaded</code> or place the script at the end of <code>&lt;body&gt;</code>.</li>
      <li><strong>The list is live and changes mid-loop</strong> — usually with <code>HTMLCollection</code>. Convert to a static array first with <code>Array.from()</code>.</li>
    </ol>
  `,

  /* 2.1 The part that makes it click */
  'topics-7-9-2-1': `
    <p>Once you have a DOM list, looping through it is no different from looping through any other array. The "DOM" part doesn't change how the loop works — what changes is what's inside the body. Inside the body, you're working with a real DOM element, so you can do anything to it that you'd do to a single element selected by ID.</p>
    <p>The list and the loop and the element manipulation are three separate things. The list is just storage. The loop is the walker. The element manipulation is the work. Each part is simple on its own; together, they let you act on the whole page at once.</p>
  `,

  /* 2.2 Common confusions */
  'topics-7-9-2-2': `
    <p><strong>Confusion: thinking <code>NodeList</code> and <code>HTMLCollection</code> are the same</strong></p>
<pre class="language-javascript"><code class="language-javascript">// NodeList — STATIC snapshot, supports forEach
const a = document.querySelectorAll(".item");
a.forEach(function (el) { ... });   // works

// HTMLCollection — LIVE collection, no forEach
const b = document.getElementsByClassName("item");
b.forEach(function (el) { ... });   // TypeError

// to use forEach (or any array method) on HTMLCollection, convert first:
Array.from(b).forEach(function (el) { ... });</code></pre>

    <p><strong>Confusion: thinking DOM lists are real arrays</strong></p>
<pre class="language-javascript"><code class="language-javascript">const items = document.querySelectorAll(".item");

// these all FAIL — NodeList is array-like but not an array
items.map(function (el) { ... });
items.filter(function (el) { ... });
items.push(newItem);

// to use array methods, convert first:
const arr = Array.from(items);
arr.map(function (el) { ... });   // works</code></pre>

    <p><strong>Confusion: live HTMLCollection causing infinite loops</strong></p>
<pre class="language-javascript"><code class="language-javascript">// BUG — adding new .item elements grows the collection mid-loop
const items = document.getElementsByClassName("item");
for (let i = 0; i < items.length; i++) {
  const div = document.createElement("div");
  div.className = "item";
  document.body.appendChild(div);
  // items.length grows each iteration — never reaches end
}

// FIX — use querySelectorAll for a static snapshot
const items = document.querySelectorAll(".item");
for (let i = 0; i < items.length; i++) {
  // ... safe to add new elements
}</code></pre>

    <p><strong>Confusion: running the script before the DOM is ready</strong></p>
<pre class="language-javascript"><code class="language-javascript">// If this script runs in the &lt;head&gt; before the page body has loaded:
const items = document.querySelectorAll(".item");
console.log(items.length);   // 0 — nothing in the page yet!

// FIX 1: wait for DOMContentLoaded
document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".item");
  // now items has the right elements
});

// FIX 2: place the script at the end of &lt;body&gt;</code></pre>

    <p><strong>Confusion: removing elements while looping forward</strong></p>
<pre class="language-javascript"><code class="language-javascript">// BUG — calling remove() shifts the live collection
const ads = document.getElementsByClassName("ad");
for (let i = 0; i < ads.length; i++) {
  ads[i].remove();   // each remove shifts the rest down — alternates skip
}

// FIX — querySelectorAll gives a snapshot that doesn't change
const ads = document.querySelectorAll(".ad");
for (const ad of ads) {
  ad.remove();
}</code></pre>

    <p><strong>Confusion: thinking the loop variable is a copy</strong></p>
<pre class="language-javascript"><code class="language-javascript">for (const div of document.querySelectorAll("div")) {
  div.style.color = "red";   // this DOES change the actual element on the page
}
// "div" is a reference to the real DOM element. Changing properties affects the page.
// it's not a copy — DOM elements are objects, and the loop hands you the actual object.</code></pre>
  `,

  /* 2.3 Common mistakes */
  'topics-7-9-2-3': `
<pre class="language-javascript"><code class="language-javascript">const items = document.querySelectorAll(".item");
items.map(function (el) {
  return el.textContent;
});
// NodeList doesn't have map — TypeError
// fix: convert to a real array first
const items = Array.from(document.querySelectorAll(".item"));
const texts = items.map(function (el) {
  return el.textContent;
});</code></pre>

<pre class="language-javascript"><code class="language-javascript">const items = document.getElementsByClassName("item");
for (let i = 0; i < items.length; i++) {
  items[i].remove();
}
// HTMLCollection is live — removing items shifts the indexes, every other item gets skipped
// fix: use querySelectorAll for a static snapshot
const items = document.querySelectorAll(".item");
for (const item of items) {
  item.remove();
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">const items = document.querySelectorAll(".item");
console.log(items.length);   // 0 if script runs before page renders
for (const item of items) {
  // never runs
}
// fix: wait for DOM ready, or move script to end of body
document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".item");
  for (const item of items) {
    // ...
  }
});</code></pre>

<pre class="language-javascript"><code class="language-javascript">const buttons = document.querySelectorAll("button");
for (let i in buttons) {
  console.log(buttons[i]);
}
// for...in iterates over INDEXES (and other properties), not elements — and on
// NodeLists it can include extra unwanted properties
// fix: use for...of for elements
for (const button of buttons) {
  console.log(button);
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">const items = document.querySelectorAll(".tab");
for (let i = 0; i < items.length; i++) {
  items[i].addEventListener("click", function () {
    console.log("clicked tab", i);
  });
}
// every tab logs the FINAL value of i (because var would be shared, but with let
// each iteration captures its own i — this works correctly)
// just be aware: with var instead of let, every listener would log the same value
for (var i = 0; i < items.length; i++) {
  items[i].addEventListener("click", function () {
    console.log("clicked tab", i);   // would log items.length for every click
  });
}
// fix: always use let in for loops, especially when attaching listeners</code></pre>

<pre class="language-javascript"><code class="language-javascript">const result = document.querySelector(".items");
for (const item of result) {
  console.log(item);
}
// querySelector returns ONE element, not a list — TypeError
// fix: use querySelectorAll for multiple elements
const result = document.querySelectorAll(".items");
for (const item of result) {
  console.log(item);
}</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-7-9-3-0': `
<pre class="language-javascript"><code class="language-javascript">// Style every paragraph
const paragraphs = document.querySelectorAll("p");
for (const p of paragraphs) {
  p.style.lineHeight = "1.5";
}

// Disable every submit button
const submits = document.querySelectorAll("button[type=submit]");
for (const btn of submits) {
  btn.disabled = true;
}

// Add a class to every list item
const items = document.querySelectorAll("li");
for (const item of items) {
  item.classList.add("processed");
}

// Read all input values into an array
const inputs = document.querySelectorAll(".form input");
const values = [];
for (const input of inputs) {
  values.push(input.value);
}
console.log(values);

// Count checked checkboxes
const checked = document.querySelectorAll("input[type=checkbox]:checked");
console.log(checked.length + " checked");

// Hook up the same click handler
const tabs = document.querySelectorAll(".tab");
for (const tab of tabs) {
  tab.addEventListener("click", function () {
    console.log("clicked", tab.textContent);
  });
}

// Reset all form fields
const fields = document.querySelectorAll(".my-form input, .my-form textarea");
for (const field of fields) {
  field.value = "";
}

// Toggle a class based on a condition
const cards = document.querySelectorAll(".card");
for (const card of cards) {
  if (card.dataset.urgent === "true") {
    card.classList.add("highlight");
  } else {
    card.classList.remove("highlight");
  }
}

// Convert NodeList to array to use array methods
const links = document.querySelectorAll("a");
const arr = Array.from(links);
const externalCount = arr.filter(function (link) {
  return link.href.startsWith("http");
}).length;</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-7-9-3-1': `
    <p><strong>Example: setting up tab navigation</strong></p>
<pre class="language-javascript"><code class="language-javascript">function setupTabs() {
  const tabs = document.querySelectorAll(".tab");
  const panels = document.querySelectorAll(".panel");

  for (const tab of tabs) {
    tab.addEventListener("click", function () {
      // hide all panels
      for (const panel of panels) {
        panel.classList.remove("active");
      }
      // deactivate all tabs
      for (const t of tabs) {
        t.classList.remove("active");
      }
      // activate the clicked tab and its matching panel
      tab.classList.add("active");
      const targetId = tab.dataset.target;
      const targetPanel = document.getElementById(targetId);
      targetPanel.classList.add("active");
    });
  }
}</code></pre>

    <p><strong>Example: validating an entire form</strong></p>
<pre class="language-javascript"><code class="language-javascript">function validateForm(form) {
  const requiredFields = form.querySelectorAll("[required]");
  const errors = [];

  for (const field of requiredFields) {
    if (field.value.trim() === "") {
      errors.push(field.name + " is required");
      field.classList.add("error");
    } else {
      field.classList.remove("error");
    }
  }

  return errors;
}</code></pre>

    <p><strong>Example: implementing "select all" checkbox behavior</strong></p>
<pre class="language-javascript"><code class="language-javascript">function setupSelectAll() {
  const masterBox = document.querySelector("#select-all");
  const itemBoxes = document.querySelectorAll(".item-checkbox");

  masterBox.addEventListener("change", function () {
    for (const box of itemBoxes) {
      box.checked = masterBox.checked;
    }
  });
}</code></pre>

    <p><strong>Example: live filtering a list as the user types</strong></p>
<pre class="language-javascript"><code class="language-javascript">function setupSearch() {
  const searchInput = document.querySelector("#search");
  const items = document.querySelectorAll(".searchable-item");

  searchInput.addEventListener("input", function () {
    const query = searchInput.value.toLowerCase();

    for (const item of items) {
      const text = item.textContent.toLowerCase();
      if (text.includes(query)) {
        item.style.display = "";
      } else {
        item.style.display = "none";
      }
    }
  });
}</code></pre>

    <p><strong>Example: collecting data from a table</strong></p>
<pre class="language-javascript"><code class="language-javascript">function getTableData() {
  const rows = document.querySelectorAll("table tbody tr");
  const data = [];

  for (const row of rows) {
    const cells = row.querySelectorAll("td");
    const rowData = [];
    for (const cell of cells) {
      rowData.push(cell.textContent.trim());
    }
    data.push(rowData);
  }

  return data;
}
// nested loop — outer for rows, inner for cells in each row.</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-7-9-3-2': `
    <ul>
      <li><strong><code>document.querySelectorAll</code></strong> → returns a static NodeList; the most common way to get DOM lists</li>
      <li><strong><code>document.getElementsByClassName</code> / <code>getElementsByTagName</code></strong> → returns a live HTMLCollection; trickier to loop over safely</li>
      <li><strong>NodeList vs HTMLCollection</strong> → static vs live; NodeList supports <code>forEach</code></li>
      <li><strong><code>Array.from()</code></strong> → converts DOM lists into real arrays so you can use <code>map</code>, <code>filter</code>, etc.</li>
      <li><strong>DOM element properties</strong> → <code>style</code>, <code>classList</code>, <code>dataset</code>, <code>value</code>, <code>textContent</code> — what you act on inside the loop body</li>
      <li><strong><code>addEventListener</code> in loops</strong> → attaching the same handler to many elements</li>
      <li><strong><code>DOMContentLoaded</code></strong> → ensures the page exists before you try to select elements</li>
      <li><strong>Common mistakes</strong> → live collections during removal, DOM not ready, expecting array methods to work directly</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-7-9-3-3': `
    <ul>
      <li><code>document.querySelectorAll</code></li>
      <li><code>document.getElementsByClassName</code></li>
      <li>NodeList vs HTMLCollection</li>
      <li><code>Array.from()</code> and the spread operator</li>
      <li>DOM element properties (<code>classList</code>, <code>style</code>, <code>dataset</code>)</li>
      <li><code>addEventListener</code> on multiple elements</li>
      <li><code>DOMContentLoaded</code> event</li>
      <li>Removing DOM elements safely in loops</li>
    </ul>
  `,

  /* ========================================================= 
   Sub-lesson: 3.8.11 Loops → loop counter variable
 =======================================================*/

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-7-10-0-0': `
    <p>The loop counter is a variable that tracks where you are in the loop's progress. In a counted loop, it usually starts at some number, gets checked against a stopping condition, and changes by a fixed amount after each iteration.</p>
    <p>It's not a special kind of variable — it's just a regular variable with a specific job. The loop reads it to decide whether to keep going, and you can read it inside the body to know which iteration you're on or which item you're looking at.</p>
  `,

  /* 0.1 Syntax */
  'topics-7-10-0-1': `
<pre class="language-javascript"><code class="language-javascript">for (let i = 0; i < 5; i++) {
  console.log("i is " + i);
}

// prints:
//   i is 0
//   i is 1
//   i is 2
//   i is 3
//   i is 4

// the variable "i" is the loop counter.
// it starts at 0, gets checked against 5, and goes up by 1 each round.</code></pre>
    <p>The name <code>i</code> is just a convention (short for "index" or "iterator"). You could call it anything — but <code>i</code> is universal, and reading code is easier when everyone follows the same convention.</p>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-7-10-0-2': `
<pre class="language-javascript"><code class="language-javascript">for (let i = 0; i < 5; i++) {
  console.log("round " + i);
}

// the counter has three jobs in this loop:

// 1. STARTING VALUE
//    let i = 0
//    where the counter begins

// 2. CHECK
//    i < 5
//    is the counter still in range? if yes, keep looping

// 3. UPDATE
//    i++
//    how the counter changes each iteration (i++ means i = i + 1)

// inside the body, you can READ the counter (i) to know which iteration you're on.
// the loop machinery handles writing it.</code></pre>
    <p>All three jobs reference the same variable: where it starts, how to know when to stop, and how it changes between rounds. Whatever name you give it, those three references all need to match.</p>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-7-10-0-3': `
    <p><strong>The standard naming convention is <code>i</code> for the counter, <code>j</code> if you nest, <code>k</code> for triple-nested.</strong> These are short on purpose — counters are referenced often, and longer names clutter the loop:</p>
<pre class="language-javascript"><code class="language-javascript">for (let i = 0; i < rows.length; i++) {
  for (let j = 0; j < cols.length; j++) {
    console.log(rows[i][j]);
  }
}</code></pre>

    <p><strong>Use a more descriptive name when the counter has a real meaning.</strong> If the counter represents something specific (an age, a day, a page number), using a meaningful name makes the loop self-documenting:</p>
<pre class="language-javascript"><code class="language-javascript">for (let page = 1; page <= totalPages; page++) {
  loadPage(page);
}

for (let year = 2020; year <= 2030; year++) {
  console.log("year:", year);
}</code></pre>

    <p><strong>Use <code>let</code>, not <code>var</code> or no keyword.</strong> <code>let</code> scopes the counter to the loop only, so it doesn't leak out:</p>
<pre class="language-javascript"><code class="language-javascript">// Good — let scopes i to the loop
for (let i = 0; i < 5; i++) {
  // i exists only inside the loop
}
console.log(i);   // ReferenceError — i is gone, as it should be

// Bad — no keyword creates a global variable
for (i = 0; i < 5; i++) {
  // i now lives in the surrounding scope, polluting it
}

// Outdated — var has function scope, leaks out of the loop
for (var i = 0; i < 5; i++) { ... }
console.log(i);   // 5 (i still exists out here, which is usually undesirable)</code></pre>

    <p><strong>The counter is a regular variable — you can read or modify it inside the body.</strong> Modifying it intentionally is sometimes useful (skipping ahead, repeating an iteration), but unintentional changes cause confusing bugs:</p>
<pre class="language-javascript"><code class="language-javascript">for (let i = 0; i < items.length; i++) {
  if (items[i] === "skip") {
    i = i + 1;     // skip the next item by jumping ahead
    continue;
  }
  process(items[i]);
}</code></pre>

    <p><strong>The counter doesn't have to start at zero or step by one.</strong> Whatever pattern of values you need, the counter can produce:</p>
<pre class="language-javascript"><code class="language-javascript">// Start at 1, count to 10
for (let i = 1; i <= 10; i++) { ... }

// Count down
for (let i = 10; i > 0; i--) { ... }

// Step by 5
for (let i = 0; i <= 100; i = i + 5) { ... }

// Doubling each step
for (let i = 1; i < 1000; i = i * 2) { ... }
// 1, 2, 4, 8, 16, 32, ...</code></pre>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-7-10-1-0': `
    <p>Many loops need to know "where am I?" inside the iteration. To grab the right item from an array. To label the current step. To stop when a target count is reached. To run different logic on the first or last iteration.</p>
    <p>The counter solves all of these by giving you a number that's available throughout the loop body. You read it to make decisions; the loop maintains it automatically.</p>
  `,

  /* 1.1 Why use it */
  'topics-7-10-1-1': `
    <p>The counter unlocks anything position-aware in a loop:</p>
<pre class="language-javascript"><code class="language-javascript">// Display "1." "2." "3." labels
for (let i = 0; i < items.length; i++) {
  console.log((i + 1) + ". " + items[i]);
}

// Treat the first item differently
for (let i = 0; i < items.length; i++) {
  if (i === 0) {
    console.log("First: " + items[i]);
  } else {
    console.log(items[i]);
  }
}

// Compare adjacent items
for (let i = 1; i < items.length; i++) {
  if (items[i] === items[i - 1]) {
    console.log("duplicate at index " + i);
  }
}

// Stop after a fixed number of items
for (let i = 0; i < items.length && i < 10; i++) {
  console.log(items[i]);
}</code></pre>

    <p>If you don't need any of these — just "do something with each item" — <code>for...of</code> is simpler. The counter is for when you genuinely need to know your position.</p>
  `,

  /* 1.2 Where you use it */
  'topics-7-10-1-2': `
<pre class="language-javascript"><code class="language-javascript">// Numbered list rendering
for (let i = 0; i < tasks.length; i++) {
  const li = document.createElement("li");
  li.textContent = (i + 1) + ". " + tasks[i].title;
  list.appendChild(li);
}

// Index-based DOM IDs
for (let i = 1; i <= 5; i++) {
  const div = document.createElement("div");
  div.id = "panel-" + i;
  document.body.appendChild(div);
}

// Looking back or forward
for (let i = 1; i < prices.length; i++) {
  const change = prices[i] - prices[i - 1];
  console.log("day " + i + " change: " + change);
}

// First/last special cases
for (let i = 0; i < items.length; i++) {
  let separator = ", ";
  if (i === items.length - 1) {
    separator = "";
  }
  output = output + items[i] + separator;
}

// Pagination calculations
const itemsPerPage = 10;
for (let page = 1; page <= totalPages; page++) {
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  renderPage(items.slice(start, end));
}

// Walking by index when you need to modify in place
for (let i = 0; i < numbers.length; i++) {
  numbers[i] = numbers[i] * 2;
}</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-7-10-1-3': `
    <p>The counter is like the page number on a document. As you flip through, the page number tells you where you are. Page 5 is different from page 12 — same kind of page, but in a different position. The number itself isn't the content; it's just the label that says "you're here right now."</p>
    <p>In a loop, the counter is that page number. It doesn't change what work you're doing — the loop body is the same on every round. But it tells you which page you're on, which means you can do things based on position: "if it's the first page, show a header." "If it's the last page, show 'Continue?'" "If it's an even page, use a different layout."</p>
    <p>Without a counter, you can still do the work — but you can't react to where you are in the work. The counter is what lets you be position-aware.</p>
  `,

  /* 1.4 Mental model */
  'topics-7-10-1-4': `
    <p>Think of the counter as the position of a bookmark in a book. The bookmark doesn't change the words on the page — it just marks where you are. As you read, you advance the bookmark. When the bookmark passes the last page, you're done.</p>
    <p>That's exactly what the loop counter does. The "book" is the range of values you're iterating through. The "bookmark" is the counter. The loop's stopping rule is "when the bookmark goes past the end." Each iteration, the loop reads where the bookmark is, runs the body with that information, then advances the bookmark.</p>
    <p>The bookmark itself is just a number. But because you can read it inside the loop body, you can make decisions based on where you are. That's what gives the counter its power — not that it counts, but that you can use the count.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-7-10-1-5': `
<pre class="language-javascript"><code class="language-javascript">const fruits = ["apple", "banana", "cherry"];

for (let i = 0; i < fruits.length; i++) {
  console.log(i + ": " + fruits[i]);
}

// prints:
//   0: apple
//   1: banana
//   2: cherry

// JavaScript is thinking:
// 1. Run setup: let i = 0. Counter is now 0.
// 2. Check: 0 < 3 (fruits.length) → true. Enter body.
// 3. Body: read fruits[0] → "apple". Log "0: apple".
// 4. Update: i++. Counter is now 1.
// 5. Check: 1 < 3 → true. Enter body.
// 6. Body: read fruits[1] → "banana". Log "1: banana".
// 7. Update: i++. Counter is now 2.
// 8. Check: 2 < 3 → true. Enter body.
// 9. Body: read fruits[2] → "cherry". Log "2: cherry".
// 10. Update: i++. Counter is now 3.
// 11. Check: 3 < 3 → false. Exit loop.

// notice: the counter is doing two jobs at once:
//   - controlling whether the loop continues (the check)
//   - serving as the index into the array (fruits[i])
// that double duty is why "i = 0; i < length; i++" is so common.</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-7-10-2-0': `
    <p>If a loop is producing wrong values or running the wrong number of times, log the counter at the top of every iteration:</p>
<pre class="language-javascript"><code class="language-javascript">for (let i = 0; i < items.length; i++) {
  console.log("i:", i, "item:", items[i]);
  // ... rest of body
}

// the output reveals:
//   - is i starting at the right value?
//   - is i ending at the right value?
//   - are there gaps or duplicates?
//   - is items[i] the value you expect at each step?

// most counter-related bugs (off-by-one, skipping items, wrong direction)
// become obvious immediately once you see the actual sequence.</code></pre>

    <p>Common signal: the loop "almost works" — it processes most items correctly but misses one at the start or end. That's an off-by-one bug, almost always in the starting value (<code>i = 0</code> vs <code>i = 1</code>) or the stop condition (<code>i &lt; length</code> vs <code>i &lt;= length</code>).</p>
  `,

  /* 2.1 The part that makes it click */
  'topics-7-10-2-1': `
    <p>The counter is just a regular variable. There's no "loop counter" type — it's a number that the loop happens to be using to control itself. Anywhere in the body, the counter behaves like any other variable: you can read it, log it, use it in calculations, even change it.</p>
    <p>Once you see that, the counter stops feeling magical. The loop "remembering where it is" is just the loop maintaining a normal variable in a regular way. The whole counted-loop pattern — start, check, update — is three operations on one variable, packaged together for convenience.</p>
  `,

  /* 2.2 Common confusions */
  'topics-7-10-2-2': `
    <p><strong>Confusion: thinking <code>i</code> is a special keyword</strong></p>
<pre class="language-javascript"><code class="language-javascript">// "i" is just a variable name. These all work the same:
for (let i = 0; i < 5; i++) { ... }
for (let counter = 0; counter < 5; counter++) { ... }
for (let n = 0; n < 5; n++) { ... }
for (let frog = 0; frog < 5; frog++) { ... }

// "i" is just convention. The language doesn't know or care.</code></pre>

    <p><strong>Confusion: thinking the counter has to start at 0</strong></p>
<pre class="language-javascript"><code class="language-javascript">// Counter for array indexes — start at 0
for (let i = 0; i < items.length; i++) { ... }

// Counter as a real number — start at 1 (or wherever)
for (let n = 1; n <= 10; n++) {
  console.log(n);   // 1 through 10
}

// Counter counting down
for (let i = 10; i > 0; i--) {
  console.log(i);   // 10 down to 1
}

// 0 is just the starting value for ARRAY INDEXING. For other purposes, use whatever value fits.</code></pre>

    <p><strong>Confusion: changing the counter inside the body breaking things</strong></p>
<pre class="language-javascript"><code class="language-javascript">for (let i = 0; i < 5; i++) {
  console.log(i);
  i = 100;   // counter is now 100
}
// only one iteration runs — i++ takes 100 to 101, condition 101 < 5 is false.

// usually a bug. but sometimes you intentionally want to skip ahead:
for (let i = 0; i < items.length; i++) {
  if (items[i].type === "double") {
    process(items[i], items[i + 1]);     // process this item AND the next
    i = i + 1;                            // skip the one we already used
  } else {
    process(items[i]);
  }
}</code></pre>

    <p><strong>Confusion: counter scope</strong></p>
<pre class="language-javascript"><code class="language-javascript">for (let i = 0; i < 5; i++) {
  // i exists here
}
console.log(i);   // ReferenceError — i is gone

// the counter is scoped to the loop. After the loop, it doesn't exist.
// to track something past the loop, declare a separate variable OUTSIDE:
let lastIndex = -1;
for (let i = 0; i < items.length; i++) {
  if (items[i].matches) {
    lastIndex = i;
  }
}
console.log("last match at:", lastIndex);</code></pre>

    <p><strong>Confusion: using the counter as an index when it's not</strong></p>
<pre class="language-javascript"><code class="language-javascript">// In a for...of loop, the variable is the VALUE, not the index
for (const i of [10, 20, 30]) {
  console.log(items[i]);   // BUG — i is 10, 20, 30 (the values), not 0, 1, 2
}
// fix: use a regular for loop if you need indexes, or for...of if you need values
for (let i = 0; i < items.length; i++) {
  console.log(items[i]);
}</code></pre>
  `,

  /* 2.3 Common mistakes */
  'topics-7-10-2-3': `
<pre class="language-javascript"><code class="language-javascript">for (i = 0; i < 5; i++) {
  console.log(i);
}
// missing 'let' — i becomes a global variable, polluting the surrounding scope
// fix: always use let
for (let i = 0; i < 5; i++) {
  console.log(i);
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">for (let i = 1; i < items.length; i++) {
  console.log(items[i]);
}
// starts at 1 — skips items[0]
// fix: start at 0 unless you specifically want to skip the first
for (let i = 0; i < items.length; i++) {
  console.log(items[i]);
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">for (let i = 0; i <= items.length; i++) {
  console.log(items[i]);
}
// <= goes one past the last valid index, prints undefined at the end
// fix: use <
for (let i = 0; i < items.length; i++) {
  console.log(items[i]);
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">for (let i = 0; i < 5; i++) {
  // forgot to do anything with i
  console.log("hello");
}
// works, but a counter that's never read is a sign you don't need a counted loop
// fix: use a different loop type if you don't need the counter
for (let n = 0; n < 5; n++) {
  console.log("hello");
}
// or, if you're walking an array:
for (const item of items) {
  console.log("hello");
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">for (let i = 0; i < items.length; i++) {
  for (let i = 0; i < cols.length; i++) {     // shadows outer i
    console.log(items[i]);                     // refers to INNER i, not outer
  }
}
// fix: use different counter names for nested loops
for (let i = 0; i < items.length; i++) {
  for (let j = 0; j < cols.length; j++) {
    console.log(items[i]);
  }
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">let total = 0;
for (let i = 0; i < numbers.length; i++) {
  total = total + i;     // typo — meant numbers[i], wrote i
}
// adds up the INDEX values (0+1+2+...) instead of the actual numbers
// fix: use the index to read from the array
let total = 0;
for (let i = 0; i < numbers.length; i++) {
  total = total + numbers[i];
}</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-7-10-3-0': `
<pre class="language-javascript"><code class="language-javascript">// Counter as an index into an array
const items = ["a", "b", "c"];
for (let i = 0; i < items.length; i++) {
  console.log(i + ": " + items[i]);
}

// Counter as a real-number value
for (let n = 1; n <= 10; n++) {
  console.log(n);
}

// Counter with a meaningful name
for (let page = 1; page <= 5; page++) {
  console.log("loading page", page);
}

// Counter counting down
for (let i = 5; i > 0; i--) {
  console.log(i);
}

// Counter with a custom step
for (let cents = 0; cents <= 100; cents = cents + 25) {
  console.log("$" + (cents / 100).toFixed(2));
}

// Counter used in a calculation
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum = sum + i;
}
console.log("sum:", sum);   // 5050

// Two counters in a nested loop
for (let row = 0; row < 3; row++) {
  for (let col = 0; col < 3; col++) {
    console.log("[" + row + "][" + col + "]");
  }
}

// Counter combined with a conditional
for (let i = 0; i < items.length; i++) {
  if (i === 0) {
    console.log("first:", items[i]);
  } else if (i === items.length - 1) {
    console.log("last:", items[i]);
  } else {
    console.log("middle:", items[i]);
  }
}</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-7-10-3-1': `
    <p><strong>Example: numbered ranking display</strong></p>
<pre class="language-javascript"><code class="language-javascript">function renderTopPlayers(players) {
  const list = document.querySelector(".top-players");
  list.innerHTML = "";

  for (let i = 0; i < players.length; i++) {
    const rank = i + 1;
    const item = document.createElement("li");
    item.textContent = "#" + rank + " " + players[i].name + " — " + players[i].score;
    if (rank <= 3) {
      item.classList.add("podium");
    }
    list.appendChild(item);
  }
}
// the counter doubles as both the array index AND the displayed rank.</code></pre>

    <p><strong>Example: comparing each row to the previous one</strong></p>
<pre class="language-javascript"><code class="language-javascript">function findIncreases(prices) {
  const result = [];
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      result.push("Day " + (i + 1) + ": price went up");
    }
  }
  return result;
}
// starting at 1 lets us safely look back at i-1 without going off the start.</code></pre>

    <p><strong>Example: pagination math</strong></p>
<pre class="language-javascript"><code class="language-javascript">function buildPages(items, perPage) {
  const totalPages = Math.ceil(items.length / perPage);
  const pages = [];

  for (let page = 1; page <= totalPages; page++) {
    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;
    pages.push({
      pageNumber: page,
      items: items.slice(startIndex, endIndex)
    });
  }
  return pages;
}
// the page counter is meaningful — not just an index, but the actual page number.</code></pre>

    <p><strong>Example: building a grid of buttons with sequential IDs</strong></p>
<pre class="language-javascript"><code class="language-javascript">function buildKeypad() {
  const container = document.querySelector(".keypad");
  for (let i = 0; i <= 9; i++) {
    const button = document.createElement("button");
    button.textContent = i;
    button.id = "key-" + i;
    button.dataset.value = i;
    container.appendChild(button);
  }
}
// the counter both labels the button and gives it a unique ID.</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-7-10-3-2': `
    <ul>
      <li><strong><code>for</code> loop</strong> → the loop type built around having a counter</li>
      <li><strong>Counter naming conventions</strong> → <code>i</code>, <code>j</code>, <code>k</code> for nested loops</li>
      <li><strong><code>let</code> vs <code>var</code> vs no keyword</strong> → why <code>let</code> is the right choice for counters</li>
      <li><strong>Indexes starting at 0</strong> → why <code>i = 0</code> is the standard starting value for arrays</li>
      <li><strong><code>array[i]</code></strong> → the most common use of the counter as a lookup key</li>
      <li><strong>Off-by-one errors</strong> → caused by wrong starting value or stop condition</li>
      <li><strong><code>for...of</code></strong> → for cases where you don't need a counter</li>
      <li><strong>Variable scope</strong> → counter exists only within the loop's braces</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-7-10-3-3': `
    <ul>
      <li><code>for</code> loop</li>
      <li>Counter naming (<code>i</code>, <code>j</code>, <code>k</code>)</li>
      <li><code>let</code> vs <code>var</code></li>
      <li>Variable scope</li>
      <li>Indexes starting at 0</li>
      <li><code>array[i]</code> for indexed access</li>
      <li>Off-by-one errors</li>
      <li><code>for...of</code> alternative</li>
    </ul>
  `,

  /* ========================================================= 
   Sub-lesson: 3.8.12 Loops → i = 0
 =======================================================*/

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-7-11-0-0': `
    <p><code>i = 0</code> is the starting value of the loop counter — the number the counter holds before the very first iteration. It says "begin counting from here." For loops that walk an array, this is almost always <code>0</code> because that's where array indexes start.</p>
    <p>It's the first of the three pieces inside a <code>for</code> loop's parentheses, separated from the rest by semicolons. It runs once, before anything else, then never again.</p>
  `,

  /* 0.1 Syntax */
  'topics-7-11-0-1': `
<pre class="language-javascript"><code class="language-javascript">for (let i = 0; i < 5; i++) {
  console.log(i);
}

// prints: 0, 1, 2, 3, 4

// "let i = 0" is the starting value.
// it runs ONCE, before the first check.</code></pre>
    <p>The <code>let i = 0</code> piece declares the counter variable and gives it its starting value in one step. After this runs, the loop's check (<code>i &lt; 5</code>) happens for the first time — and it sees <code>i</code> as <code>0</code>.</p>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-7-11-0-2': `
<pre class="language-javascript"><code class="language-javascript">for (let i = 0; i < 5; i++) {
  console.log(i);
}

// breaking down "let i = 0":

// let          → declares a brand-new variable
// i            → the variable's name (just convention)
// =            → assignment operator
// 0            → the value to start with

// equivalent to writing this on its own line:
let i = 0;
// then the loop checks i < 5, runs the body, runs i++, checks again, etc.

// the only difference: writing it inside the for() scopes i to the loop only.</code></pre>
    <p>The starting value runs <em>before</em> the first check. So the very first thing the loop does after this is ask "is <code>0 &lt; 5</code>?" — true — and enters the body with <code>i</code> equal to <code>0</code>.</p>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-7-11-0-3': `
    <p><strong>The <code>0</code> is just the most common starting value, not a required one.</strong> Whatever number makes sense for the problem is fair game:</p>
<pre class="language-javascript"><code class="language-javascript">// Start at 0 — for array indexes
for (let i = 0; i < items.length; i++) { ... }

// Start at 1 — for human-readable counts
for (let i = 1; i <= 10; i++) { ... }

// Start at any number you want
for (let year = 2020; year <= 2030; year++) { ... }
for (let temp = -5; temp <= 5; temp++) { ... }</code></pre>

    <p><strong>Use <code>let</code> when declaring the counter here.</strong> No keyword creates a global variable; <code>const</code> can't be reassigned (and <code>i++</code> reassigns):</p>
<pre class="language-javascript"><code class="language-javascript">// Good
for (let i = 0; i < 5; i++) { ... }

// Bad — i leaks out as a global
for (i = 0; i < 5; i++) { ... }

// Error — const can't be reassigned, and i++ reassigns
for (const i = 0; i < 5; i++) { ... }
// TypeError: Assignment to constant variable.</code></pre>

    <p><strong>This piece runs exactly once.</strong> No matter how many iterations the loop runs, the starting value setup happens one time at the very beginning. It's not re-run between iterations:</p>
<pre class="language-javascript"><code class="language-javascript">for (let i = 0; i < 3; i++) {
  console.log("i is " + i);
}

// "let i = 0" runs ONCE (i becomes 0)
// then check, body, i++, check, body, i++, check, body, i++, check (fails)
// "let i = 0" never runs again. that's why i keeps its updated value across rounds.</code></pre>

    <p><strong>You can use a counter declared outside the loop instead.</strong> Sometimes useful when you need the counter's final value after the loop ends:</p>
<pre class="language-javascript"><code class="language-javascript">// Declare outside, initialize inline
let i;
for (i = 0; i < 5; i++) {
  // ...
}
console.log(i);   // 5 — i still exists out here

// vs. the usual pattern where i disappears after the loop:
for (let i = 0; i < 5; i++) {
  // ...
}
console.log(i);   // ReferenceError — i is gone</code></pre>

    <p><strong>The starting value can be skipped entirely if it's already set.</strong> If the counter exists from earlier code, you can leave the first piece blank — but the semicolon stays:</p>
<pre class="language-javascript"><code class="language-javascript">let i = 0;
for (; i < 5; i++) {
  console.log(i);
}
// the for() still has 3 slots, separated by 2 semicolons.
// the first slot is just empty — the counter was already initialized above.</code></pre>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-7-11-1-0': `
    <p>Every counted loop needs a starting point. Without one, the counter has no value, and the very first check (<code>i &lt; 5</code>) has nothing to compare. The starting value is what gives the loop a place to begin.</p>
    <p>It also sets the <em>direction</em> of the loop indirectly — combined with the stop condition and the update step, the starting value decides whether the loop counts up, counts down, walks an array from the front, or walks it from the back.</p>
  `,

  /* 1.1 Why use it */
  'topics-7-11-1-1': `
    <p>Choosing the right starting value is what makes the loop actually do what you want:</p>
<pre class="language-javascript"><code class="language-javascript">// Walk every array item — start at 0
for (let i = 0; i < items.length; i++) {
  console.log(items[i]);
}

// Skip the first item — start at 1
for (let i = 1; i < items.length; i++) {
  console.log(items[i]);
}

// Walk the array backwards — start at the last index
for (let i = items.length - 1; i >= 0; i--) {
  console.log(items[i]);
}

// Count from a specific number
for (let year = 2020; year <= 2030; year++) {
  console.log(year);
}

// Compare each item to the one before it — start at 1, look back at i-1
for (let i = 1; i < prices.length; i++) {
  if (prices[i] > prices[i - 1]) {
    console.log("price went up on day " + i);
  }
}</code></pre>

    <p>Most loops you'll write start at <code>0</code> because most loops walk arrays, and arrays are 0-indexed. But "start at 0" isn't a rule — it's a default that fits the most common case.</p>
  `,

  /* 1.2 Where you use it */
  'topics-7-11-1-2': `
<pre class="language-javascript"><code class="language-javascript">// Render every item in a list
for (let i = 0; i < tasks.length; i++) {
  list.appendChild(buildTaskRow(tasks[i]));
}

// Sum every number in an array
let total = 0;
for (let i = 0; i < numbers.length; i++) {
  total = total + numbers[i];
}

// Skip a header row in tabular data
for (let i = 1; i < rows.length; i++) {
  processRow(rows[i]);
}

// Walk an array in reverse to delete from the end
for (let i = items.length - 1; i >= 0; i--) {
  if (items[i].expired) {
    items.splice(i, 1);
  }
}

// Generate a sequence of IDs starting at 1
for (let id = 1; id <= 100; id++) {
  database.create({ id: id, name: "user-" + id });
}

// Step through every other element
for (let i = 0; i < items.length; i = i + 2) {
  console.log(items[i]);
}</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-7-11-1-3': `
    <p>The starting value is "where you begin." Imagine counting laps in a race. The first thing you do, before the runners take off, is set the lap counter to <code>0</code>. After that, it goes up by one each lap. But before any of that — before any laps happen — somebody has to put the counter at <code>0</code>.</p>
    <p>That setup is what <code>let i = 0</code> does. It runs before the loop begins counting. The loop then starts asking its question ("are we still going?") with <code>i</code> already set to its starting value.</p>
    <p>If you set the starting value wrong — start at <code>1</code> when you meant <code>0</code>, or start at the array's length when you meant length minus one — every iteration after that uses the wrong value. The whole loop drifts.</p>
  `,

  /* 1.4 Mental model */
  'topics-7-11-1-4': `
    <p>Think of <code>let i = 0</code> as the line drawn at the start of a footrace. The runners (the loop's iterations) line up behind it. Once the gun goes off, they run forward — but the line itself was placed before any of them moved. It defines where "the beginning" is.</p>
    <p>The starting value does the same thing for the counter. It defines where iteration 1 begins. Every later iteration is measured from there — first <code>i = 0</code>, then <code>i = 1</code>, then <code>i = 2</code>, all the way until the stop condition fails.</p>
    <p>Move the starting line, and you move every iteration with it. Start at <code>1</code> instead of <code>0</code>, and every step shifts by one — which is fine if you wanted that, and a bug if you didn't.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-7-11-1-5': `
<pre class="language-javascript"><code class="language-javascript">for (let i = 0; i < 3; i++) {
  console.log("hello " + i);
}

// prints:
//   hello 0
//   hello 1
//   hello 2

// JavaScript is thinking:
// 1. SETUP runs ONCE: "let i = 0". A new variable i is created with value 0.
// 2. CHECK: 0 < 3 → true. Enter body.
// 3. BODY: log "hello 0".
// 4. UPDATE: i++. i is now 1.
// 5. CHECK: 1 < 3 → true. Enter body.
// 6. BODY: log "hello 1".
// 7. UPDATE: i++. i is now 2.
// 8. CHECK: 2 < 3 → true. Enter body.
// 9. BODY: log "hello 2".
// 10. UPDATE: i++. i is now 3.
// 11. CHECK: 3 < 3 → false. Exit loop.

// notice steps 1 and 2: the starting value is set BEFORE the first check.
// "i = 0" doesn't run at step 4 or step 7 — only step 1.
// after that, "i" keeps whatever value the update left it with.</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-7-11-2-0': `
    <p>If a loop is missing the first item, processing one too many, or starting in the wrong place — log the counter on the first iteration and check what it actually is:</p>
<pre class="language-javascript"><code class="language-javascript">for (let i = 1; i < items.length; i++) {
  console.log("first iteration i:", i);
  // ... rest of body
}

// the log will show "first iteration i: 1"
// if you expected the loop to process items[0] and it didn't —
// your starting value is wrong. should be i = 0.</code></pre>

    <p>Common signal: the loop runs, but the first array item never gets touched. Almost always means the starting value is <code>1</code> when it should be <code>0</code>. The fix is one character.</p>
  `,

  /* 2.1 The part that makes it click */
  'topics-7-11-2-1': `
    <p><code>let i = 0</code> isn't loop syntax. It's just a regular variable declaration that happens to live inside the <code>for</code>'s parentheses. If you wrote <code>let i = 0;</code> on its own line above the loop and left the first slot empty, the loop would behave identically (with one small difference: <code>i</code> would survive after the loop ends).</p>
    <p>Once you see this, the structure of a <code>for</code> loop stops feeling like a special syntax to memorize. It's just three normal pieces of JavaScript — a variable declaration, a condition, and an update — packaged into one line for convenience.</p>
  `,

  /* 2.2 Common confusions */
  'topics-7-11-2-2': `
    <p><strong>Confusion: thinking 0 is required</strong></p>
<pre class="language-javascript"><code class="language-javascript">// "let i = 0" is the most common pattern, but the 0 isn't magic.
// these are all equally valid:

for (let i = 1; i <= 10; i++) { ... }      // count 1-10
for (let i = 100; i > 0; i--) { ... }      // count down from 100
for (let temp = -10; temp <= 10; temp++) { ... }   // negative start

// pick the starting value that fits the problem.
// 0 is just the default for array walking.</code></pre>

    <p><strong>Confusion: thinking the setup runs every iteration</strong></p>
<pre class="language-javascript"><code class="language-javascript">for (let i = 0; i < 3; i++) {
  console.log(i);
}

// "let i = 0" does NOT run on every loop.
// if it did, i would reset to 0 every time and you'd have an infinite loop.

// it runs ONCE, before the first check.
// after that, "i" carries over its value from each iteration's update step.</code></pre>

    <p><strong>Confusion: starting value vs first iteration's body</strong></p>
<pre class="language-javascript"><code class="language-javascript">// the starting value happens BEFORE any body code runs.
// so the body never sees a "before" state — it always sees i with its starting value first.

for (let i = 5; i < 8; i++) {
  console.log(i);
}
// prints 5, 6, 7
// the body's first run sees i = 5, not i = 4 or i = "before the start".</code></pre>

    <p><strong>Confusion: declaring with <code>const</code></strong></p>
<pre class="language-javascript"><code class="language-javascript">for (const i = 0; i < 5; i++) {
  console.log(i);
}
// TypeError: Assignment to constant variable.

// const means "can't reassign". but i++ reassigns i.
// for a counter that changes, you need let.

// const is fine in for...of (where the variable doesn't get reassigned, the loop rebinds it):
for (const item of items) { ... }   // works</code></pre>

    <p><strong>Confusion: missing the <code>let</code></strong></p>
<pre class="language-javascript"><code class="language-javascript">for (i = 0; i < 5; i++) {
  console.log(i);
}
// i was never declared — it leaks into the surrounding scope as a global.
// the loop still works, but i now lives outside the loop, polluting your code.

// fix: always include let
for (let i = 0; i < 5; i++) { ... }</code></pre>
  `,

  /* 2.3 Common mistakes */
  'topics-7-11-2-3': `
<pre class="language-javascript"><code class="language-javascript">for (let i = 1; i < items.length; i++) {
  console.log(items[i]);
}
// starts at 1 — items[0] is never processed
// fix: start at 0 unless you specifically meant to skip the first item
for (let i = 0; i < items.length; i++) {
  console.log(items[i]);
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">for (let i = items.length; i > 0; i--) {
  console.log(items[i]);
}
// starts ONE past the last valid index — first iteration prints undefined
// fix: start at length - 1
for (let i = items.length - 1; i >= 0; i--) {
  console.log(items[i]);
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">for (let i = 0, i < 5; i++) {
  console.log(i);
}
// SyntaxError — used a comma instead of a semicolon between the slots
// fix: the three slots in for() are separated by SEMICOLONS
for (let i = 0; i < 5; i++) {
  console.log(i);
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">for (const i = 0; i < 5; i++) {
  console.log(i);
}
// TypeError — const can't be reassigned, but i++ reassigns
// fix: use let for counters that change
for (let i = 0; i < 5; i++) {
  console.log(i);
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">for (i = 0; i < 5; i++) {
  console.log(i);
}
// missing 'let' — i becomes a global variable
// fix: always declare with let
for (let i = 0; i < 5; i++) {
  console.log(i);
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">let i = 0;
for (let i = 0; i < items.length; i++) {
  console.log(items[i]);
}
console.log("processed " + i + " items");
// the outer i is shadowed by the inner i — outer i stays at 0 forever
// fix: either drop the outer i, or use a different name for one of them
let processedCount = 0;
for (let i = 0; i < items.length; i++) {
  console.log(items[i]);
  processedCount = i + 1;
}
console.log("processed " + processedCount + " items");</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-7-11-3-0': `
<pre class="language-javascript"><code class="language-javascript">// Standard array walk — start at 0
const fruits = ["apple", "banana", "cherry"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Counting from 1 (human-readable)
for (let i = 1; i <= 5; i++) {
  console.log("step " + i);
}

// Skipping the first item
for (let i = 1; i < items.length; i++) {
  console.log(items[i]);
}

// Walking backwards
for (let i = items.length - 1; i >= 0; i--) {
  console.log(items[i]);
}

// Starting from a specific number
for (let year = 2024; year <= 2026; year++) {
  console.log(year);
}

// Using a meaningful starting value
const startPage = 5;
for (let page = startPage; page <= startPage + 3; page++) {
  console.log("loading page", page);
}

// Empty starting slot — counter declared earlier
let i = 0;
for (; i < 5; i++) {
  console.log(i);
}
console.log("after loop, i =", i);   // 5

// Using 0 as the starting accumulator
let total = 0;
for (let i = 0; i < numbers.length; i++) {
  total = total + numbers[i];
}</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-7-11-3-1': `
    <p><strong>Example: rendering every product card</strong></p>
<pre class="language-javascript"><code class="language-javascript">function renderProducts(products) {
  const container = document.querySelector(".products");
  container.innerHTML = "";

  for (let i = 0; i < products.length; i++) {
    const card = document.createElement("div");
    card.className = "product-card";
    card.textContent = products[i].name;
    container.appendChild(card);
  }
}
// starting at 0 walks the entire array — the standard array-rendering pattern.</code></pre>

    <p><strong>Example: skipping a CSV header row</strong></p>
<pre class="language-javascript"><code class="language-javascript">function importRows(rows) {
  // rows[0] is the header — skip it
  for (let i = 1; i < rows.length; i++) {
    saveToDatabase(rows[i]);
  }
}
// starting at 1 instead of 0 cleanly skips the first row without an extra check inside.</code></pre>

    <p><strong>Example: removing items from the end of a list</strong></p>
<pre class="language-javascript"><code class="language-javascript">function clearExpired(items) {
  for (let i = items.length - 1; i >= 0; i--) {
    if (items[i].expired) {
      items.splice(i, 1);
    }
  }
}
// walking backwards from the last index is safer when removing items —
// indexes ahead don't shift under you.</code></pre>

    <p><strong>Example: numbered list output</strong></p>
<pre class="language-javascript"><code class="language-javascript">function printRanking(players) {
  for (let rank = 1; rank <= players.length; rank++) {
    console.log(rank + ". " + players[rank - 1].name);
  }
}
// using rank = 1 makes the loop self-documenting.
// the array index becomes rank - 1 — the human-readable number drives the loop.</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-7-11-3-2': `
    <ul>
      <li><strong><code>for</code> loop</strong> → the loop type that uses <code>i = 0</code> as its setup</li>
      <li><strong>Loop counter variable</strong> → the variable being initialized here</li>
      <li><strong>Indexes starting at 0</strong> → why <code>0</code> is the standard array starting value</li>
      <li><strong><code>i &lt; array.length</code></strong> → the stop condition that pairs with this start</li>
      <li><strong><code>i++</code></strong> → the update step that runs after each iteration</li>
      <li><strong><code>let</code> vs <code>var</code> vs no keyword</strong> → why <code>let</code> is the right keyword for the starting declaration</li>
      <li><strong>Variable scope</strong> → why <code>let i = 0</code> in the loop keeps <code>i</code> local</li>
      <li><strong>Off-by-one errors</strong> → caused by starting at <code>1</code> instead of <code>0</code> or vice versa</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-7-11-3-3': `
    <ul>
      <li><code>for</code> loop</li>
      <li>Loop counter variable</li>
      <li><code>i &lt; array.length</code> (stop condition)</li>
      <li><code>i++</code> (increment step)</li>
      <li>Indexes starting at 0</li>
      <li><code>let</code> vs <code>var</code></li>
      <li>Variable scope</li>
      <li>Off-by-one errors</li>
    </ul>
  `,

  /* ========================================================= 
   Sub-lesson: 3.8.13 Loops → i < array.length
 =======================================================*/

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-7-12-0-0': `
    <p><code>i &lt; array.length</code> is the stop condition of the loop — the question the loop asks before each iteration to decide whether to keep going. As long as the answer is <code>true</code>, the body runs again. The moment it's <code>false</code>, the loop ends.</p>
    <p>It's the second of the three pieces inside a <code>for</code> loop's parentheses. Unlike the starting value, this runs every single iteration — once before each body run, plus one final time after the last update to confirm the loop should stop.</p>
  `,

  /* 0.1 Syntax */
  'topics-7-12-0-1': `
<pre class="language-javascript"><code class="language-javascript">const items = ["a", "b", "c"];

for (let i = 0; i < items.length; i++) {
  console.log(items[i]);
}

// prints: a, b, c

// "i < items.length" is the stop condition.
// it asks: "is i still less than 3?"
// when it's true → run the body. when it's false → exit.</code></pre>
    <p>The condition uses <code>&lt;</code> (less than), not <code>&lt;=</code> (less than or equal). That's because array indexes go from <code>0</code> to <code>length - 1</code>, so <code>i</code> needs to stop <em>before</em> reaching <code>length</code> itself.</p>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-7-12-0-2': `
<pre class="language-javascript"><code class="language-javascript">const items = ["a", "b", "c"];

for (let i = 0; i < items.length; i++) {
  console.log(items[i]);
}

// breaking down "i < items.length":

// i              → the counter variable being checked
// <              → the comparison operator (less than)
// items.length   → the value to compare against (3, in this case)

// the whole expression evaluates to true or false.
// true  → run the body again
// false → exit the loop

// items.length is re-read every iteration. if the array grew or shrank,
// the loop sees the new length on the next check.</code></pre>
    <p>The condition is a normal JavaScript expression. It happens to be inside a <code>for</code> loop, but it follows the same rules as any other comparison — <code>&lt;</code>, <code>&gt;</code>, <code>&lt;=</code>, <code>&gt;=</code>, <code>===</code>, <code>!==</code> all work, and you can combine multiple checks with <code>&amp;&amp;</code> or <code>||</code>.</p>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-7-12-0-3': `
    <p><strong>Use <code>&lt;</code>, not <code>&lt;=</code>, when walking arrays.</strong> Array indexes run from <code>0</code> to <code>length - 1</code>. Using <code>&lt;=</code> goes one past the last valid index and gives you <code>undefined</code>:</p>
<pre class="language-javascript"><code class="language-javascript">const items = ["a", "b", "c"];   // length is 3, valid indexes are 0, 1, 2

// Good — stops at i = 3, but never enters the body with i = 3
for (let i = 0; i < items.length; i++) {
  console.log(items[i]);   // a, b, c
}

// Bad — enters the body with i = 3, items[3] is undefined
for (let i = 0; i <= items.length; i++) {
  console.log(items[i]);   // a, b, c, undefined
}</code></pre>

    <p><strong>Use <code>&lt;=</code> when the upper bound is the actual stopping number, not a length.</strong> If you want to count up to a specific value, <code>&lt;=</code> is correct:</p>
<pre class="language-javascript"><code class="language-javascript">// Print 1 through 10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Print 0 through 100 by 10s
for (let i = 0; i <= 100; i = i + 10) {
  console.log(i);
}</code></pre>

    <p><strong>The condition is re-checked every iteration.</strong> If <code>array.length</code> changes during the loop, the next check sees the new value. This can be intentional or a source of bugs:</p>
<pre class="language-javascript"><code class="language-javascript">const items = ["a", "b", "c"];

for (let i = 0; i < items.length; i++) {
  console.log(items[i]);
  items.push("new");   // adding to the array as we walk it
}
// infinite loop — every iteration adds an item, length grows faster than i.

// fix: cache the length before the loop if you only want the original items
const originalLength = items.length;
for (let i = 0; i < originalLength; i++) {
  console.log(items[i]);
  items.push("new");   // safe — we're not checking the live length
}</code></pre>

    <p><strong>The condition can be more than just a comparison.</strong> Any expression that evaluates to true or false works:</p>
<pre class="language-javascript"><code class="language-javascript">// Stop early on a found match
for (let i = 0; i < items.length && !found; i++) {
  if (items[i] === target) {
    found = true;
  }
}

// Stop at length OR a max count, whichever comes first
for (let i = 0; i < items.length && i < 10; i++) {
  console.log(items[i]);
}

// Stop while the value is still positive
for (let i = 0; values[i] > 0; i++) {
  console.log(values[i]);
}</code></pre>

    <p><strong>Reading <code>.length</code> is cheap, but caching it can be worth it for large arrays in tight loops.</strong> Modern JavaScript engines optimize this well, but the pattern still shows up in performance-sensitive code:</p>
<pre class="language-javascript"><code class="language-javascript">// Standard
for (let i = 0; i < items.length; i++) { ... }

// Cached length — skips the property lookup each iteration
for (let i = 0, len = items.length; i < len; i++) { ... }
// the comma in "let i = 0, len = items.length" declares two variables.</code></pre>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-7-12-1-0': `
    <p>A loop without a stop condition runs forever. The condition is what gives the loop a finish line — a clear point where it knows to stop running. Without it, the body would just keep running, freezing the page.</p>
    <p>For array-walking loops specifically, <code>i &lt; array.length</code> ties the stop point to the array itself. Whatever the array's current size is, the loop stops at exactly the right index — never going past the end, never stopping short.</p>
  `,

  /* 1.1 Why use it */
  'topics-7-12-1-1': `
    <p>Tying the condition to <code>array.length</code> instead of a fixed number means the loop adapts automatically when the data changes:</p>
<pre class="language-javascript"><code class="language-javascript">// Brittle — only works if there are exactly 3 items
const items = ["a", "b", "c"];
for (let i = 0; i < 3; i++) {
  console.log(items[i]);
}
// add a 4th item, this loop misses it.
// drop to 2 items, it tries to read items[2] which is undefined.

// Robust — works for any size
for (let i = 0; i < items.length; i++) {
  console.log(items[i]);
}
// no matter how many items, the loop walks all of them, never goes past.</code></pre>

    <p>This is also why <code>&lt;</code> is the right operator: <code>length</code> is always one bigger than the last valid index, so <code>i &lt; length</code> stops at exactly the right place without you having to think about it.</p>
  `,

  /* 1.2 Where you use it */
  'topics-7-12-1-2': `
<pre class="language-javascript"><code class="language-javascript">// Walk every item in any-sized array
for (let i = 0; i < items.length; i++) {
  process(items[i]);
}

// Walk a string by character
for (let i = 0; i < text.length; i++) {
  console.log(text[i]);
}

// Walk a NodeList from the DOM
const buttons = document.querySelectorAll(".btn");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", handleClick);
}

// Stop at length OR a max — whichever is smaller
for (let i = 0; i < items.length && i < maxItems; i++) {
  display(items[i]);
}

// Walk backwards — condition uses i >= 0
for (let i = items.length - 1; i >= 0; i--) {
  console.log(items[i]);
}

// Custom condition combining multiple checks
for (let i = 0; i < items.length && !errorOccurred; i++) {
  process(items[i]);
}

// Counting to a specific number (not array-related)
for (let i = 1; i <= 100; i++) {
  console.log(i);
}</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-7-12-1-3': `
    <p>The stop condition is the loop's "are we there yet?" question. Before every iteration — even the first one — the loop pauses, asks the question, and only continues if the answer is yes. The moment the answer is no, the loop stops dead and moves on.</p>
    <p>For array walking, the question is "is my counter still smaller than the array's size?" Because arrays start at index <code>0</code>, the last valid index is always one less than the length. So "smaller than length" is the exact right cutoff — <code>i</code> is allowed to be every valid index, but stops the instant it would go too far.</p>
    <p>If you got the question slightly wrong — used <code>&lt;=</code> instead of <code>&lt;</code>, or compared to <code>length - 1</code> instead of <code>length</code> — the loop either runs one too many times or one too few. Either way, every iteration after the bad check is wrong.</p>
  `,

  /* 1.4 Mental model */
  'topics-7-12-1-4': `
    <p>Think of the stop condition as the security guard at the door of the loop body. Every time the loop wants to enter the body, it walks up to the guard and is asked one question: "is your counter still in range?" If yes, the loop walks in and runs the body. If no, the guard turns it away and the loop ends.</p>
    <p>The guard doesn't care what the body did. Doesn't care how many times the loop has already entered. Doesn't care what the counter value is, only whether the condition is true. Same question, every time, with no memory.</p>
    <p>So the way to control how long a loop runs isn't to tell it "run 5 times." It's to design a condition that's true for the first 5 checks and false on the 6th. The loop counts itself out by failing the condition.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-7-12-1-5': `
<pre class="language-javascript"><code class="language-javascript">const colors = ["red", "blue"];

for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

// prints:
//   red
//   blue

// JavaScript is thinking:
// 1. SETUP: let i = 0. Counter is 0.
// 2. CHECK: is 0 < colors.length (which is 2)? → true. Enter body.
// 3. BODY: log colors[0] → "red".
// 4. UPDATE: i++. Counter is now 1.
// 5. CHECK: is 1 < 2? → true. Enter body.
// 6. BODY: log colors[1] → "blue".
// 7. UPDATE: i++. Counter is now 2.
// 8. CHECK: is 2 < 2? → false. Exit loop.

// notice step 8: the check still runs even though we're done.
// the loop has to ASK before it can know to stop.
// "i < length" was checked 3 times: true, true, false.
// the body ran 2 times — once for each "true" answer.</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-7-12-2-0': `
    <p>If a loop is running one time too many, missing the last item, or printing <code>undefined</code> at the end — the stop condition is almost always the cause. Log the condition's value at the start of every iteration:</p>
<pre class="language-javascript"><code class="language-javascript">for (let i = 0; i <= items.length; i++) {
  console.log("i:", i, "i < length:", i < items.length, "item:", items[i]);
}

// the output reveals:
//   - is the condition still true on the iteration where things broke?
//   - is items[i] undefined? (means i went past the last valid index)
//   - is the last valid iteration getting reached?</code></pre>

    <p>Common signal: the loop "almost works" but the last value is <code>undefined</code>. That's <code>&lt;=</code> being used where <code>&lt;</code> belongs. Common signal #2: the loop misses the last item entirely. That's usually a stop condition checking against <code>length - 1</code> when it should check against <code>length</code>.</p>
  `,

  /* 2.1 The part that makes it click */
  'topics-7-12-2-1': `
    <p>The stop condition isn't the moment the loop stops — it's the question the loop asks <em>before deciding</em> whether to continue. The loop runs the body as long as the condition is true, and the very last thing it does is one more check that comes back false. That final false check is what ends the loop.</p>
    <p>Once you see this, off-by-one errors become predictable. The condition decides which iteration is the last "true" one. Move the boundary by one — <code>&lt;</code> vs <code>&lt;=</code>, <code>length</code> vs <code>length - 1</code> — and you change exactly which iteration is included or excluded.</p>
  `,

  /* 2.2 Common confusions */
  'topics-7-12-2-2': `
    <p><strong>Confusion: <code>&lt;</code> vs <code>&lt;=</code></strong></p>
<pre class="language-javascript"><code class="language-javascript">const items = ["a", "b", "c"];   // length 3, indexes 0, 1, 2

// "i < length" stops at i = 3 — body runs for i = 0, 1, 2 ✓
for (let i = 0; i < items.length; i++) { ... }

// "i <= length" goes one past — body runs for i = 0, 1, 2, 3 ✗
for (let i = 0; i <= items.length; i++) { ... }   // bug — i = 3 is past the end

// rule: when comparing to a LENGTH, use <
//       when comparing to a TARGET NUMBER you want to include, use <=</code></pre>

    <p><strong>Confusion: <code>length</code> vs <code>length - 1</code></strong></p>
<pre class="language-javascript"><code class="language-javascript">// "i < length" — same as "i <= length - 1". Both stop at the same place.
for (let i = 0; i < items.length; i++) { ... }
for (let i = 0; i <= items.length - 1; i++) { ... }   // same loop

// the first form is more common because it's shorter and reads more naturally.
// the second form sometimes appears in code that's translated from other languages.</code></pre>

    <p><strong>Confusion: thinking the condition only runs once</strong></p>
<pre class="language-javascript"><code class="language-javascript">for (let i = 0; i < items.length; i++) {
  items.push("more");   // length keeps growing
}
// infinite loop — every iteration's check sees a bigger length than the last.

// the condition is RE-CHECKED every iteration.
// items.length is read fresh each time, so changes to the array affect the loop.</code></pre>

    <p><strong>Confusion: comparing to a value the counter never reaches</strong></p>
<pre class="language-javascript"><code class="language-javascript">for (let i = 10; i < 5; i++) {
  console.log(i);
}
// prints nothing. condition is false on the first check (10 < 5 is false).
// loop body NEVER runs.

// the starting value and stop condition have to be aligned.
// here, "i = 10" and "i < 5" don't make sense together.</code></pre>

    <p><strong>Confusion: condition with the wrong operator direction</strong></p>
<pre class="language-javascript"><code class="language-javascript">// Counting up — condition uses <
for (let i = 0; i < 5; i++) { ... }   // i goes 0, 1, 2, 3, 4

// Counting down — condition uses >
for (let i = 5; i > 0; i--) { ... }   // i goes 5, 4, 3, 2, 1

// reversed by mistake:
for (let i = 5; i < 0; i--) { ... }
// 5 < 0 is false on the first check. body never runs.</code></pre>
  `,

  /* 2.3 Common mistakes */
  'topics-7-12-2-3': `
<pre class="language-javascript"><code class="language-javascript">for (let i = 0; i <= items.length; i++) {
  console.log(items[i]);
}
// <= goes one past the last valid index, prints undefined at the end
// fix: use <
for (let i = 0; i < items.length; i++) {
  console.log(items[i]);
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">for (let i = 0; i < items.length - 1; i++) {
  console.log(items[i]);
}
// stops one too early — last item is never processed
// fix: use length, not length - 1
for (let i = 0; i < items.length; i++) {
  console.log(items[i]);
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">for (let i = 0; i = items.length; i++) {
  console.log(items[i]);
}
// = is assignment, not comparison — i becomes items.length, condition is the new value
// fix: use < for less than
for (let i = 0; i < items.length; i++) {
  console.log(items[i]);
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">for (let i = 0; i < items.lenght; i++) {
  console.log(items[i]);
}
// "lenght" is misspelled — items.lenght is undefined
// "i < undefined" is always false → loop never runs
// fix: spell "length" correctly
for (let i = 0; i < items.length; i++) {
  console.log(items[i]);
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">for (let i = 0; i < items.length(); i++) {
  console.log(items[i]);
}
// length is a PROPERTY, not a method — no parentheses
// items.length() throws "items.length is not a function"
// fix: drop the parentheses
for (let i = 0; i < items.length; i++) {
  console.log(items[i]);
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">for (let i = items.length; i > 0; i--) {
  console.log(items[i]);
}
// starts at length — items[length] is undefined (one past the end)
// fix: walk from length - 1 down to 0
for (let i = items.length - 1; i >= 0; i--) {
  console.log(items[i]);
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">for (let i = 0; i < items.length; i++) {
  items.push("new");
}
// infinite loop — every push makes length bigger, condition stays true forever
// fix: cache the length, or rethink whether you need to add inside the loop
const originalLength = items.length;
for (let i = 0; i < originalLength; i++) {
  items.push("new");
}</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-7-12-3-0': `
<pre class="language-javascript"><code class="language-javascript">// Standard array walk
const fruits = ["apple", "banana", "cherry"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Walk a string
const word = "hello";
for (let i = 0; i < word.length; i++) {
  console.log(word[i]);
}

// Walk backwards — condition uses >= 0
for (let i = fruits.length - 1; i >= 0; i--) {
  console.log(fruits[i]);
}

// Stop at length OR a maximum
for (let i = 0; i < items.length && i < 10; i++) {
  console.log(items[i]);
}

// Counting up to a specific number (not array-related)
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Counting with a stop sentinel value
const values = [3, 7, 2, -1, 8];
for (let i = 0; values[i] > 0; i++) {
  console.log(values[i]);   // 3, 7, 2 — stops at -1
}

// Caching the length
for (let i = 0, len = items.length; i < len; i++) {
  console.log(items[i]);
}

// Combined condition — stop on found
let found = false;
for (let i = 0; i < items.length && !found; i++) {
  if (items[i] === target) {
    found = true;
    console.log("found at index " + i);
  }
}</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-7-12-3-1': `
    <p><strong>Example: rendering a list of any size</strong></p>
<pre class="language-javascript"><code class="language-javascript">function renderArticles(articles) {
  const container = document.querySelector(".articles");
  container.innerHTML = "";

  for (let i = 0; i < articles.length; i++) {
    const card = document.createElement("article");
    card.textContent = articles[i].title;
    container.appendChild(card);
  }
}
// the loop adapts automatically — 3 articles, 30 articles, all work the same.</code></pre>

    <p><strong>Example: capping the display at a max number</strong></p>
<pre class="language-javascript"><code class="language-javascript">function showRecent(posts) {
  const MAX_VISIBLE = 5;
  for (let i = 0; i < posts.length && i < MAX_VISIBLE; i++) {
    console.log(posts[i].title);
  }
}
// stops at 5 OR at the end of the array, whichever comes first.
// no need for a separate "if" check inside.</code></pre>

    <p><strong>Example: walking a NodeList of inputs</strong></p>
<pre class="language-javascript"><code class="language-javascript">function clearAllInputs() {
  const inputs = document.querySelectorAll("input[type=text]");
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].value = "";
  }
}
// querySelectorAll returns a NodeList — also has .length, also walked the same way.</code></pre>

    <p><strong>Example: searching with early exit</strong></p>
<pre class="language-javascript"><code class="language-javascript">function findUserById(users, targetId) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].id === targetId) {
      return users[i];   // exits the loop AND the function
    }
  }
  return null;
}
// the stop condition handles "what if not found" — when i reaches length, return null.</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-7-12-3-2': `
    <ul>
      <li><strong><code>for</code> loop</strong> → the loop type that uses this condition</li>
      <li><strong>Loop counter variable</strong> → the variable being checked</li>
      <li><strong><code>i = 0</code></strong> → the starting value paired with this stop condition</li>
      <li><strong><code>i++</code></strong> → the update step that moves the counter toward the stop</li>
      <li><strong>Comparison operators</strong> → <code>&lt;</code>, <code>&lt;=</code>, <code>&gt;</code>, <code>&gt;=</code> drive different stop patterns</li>
      <li><strong><code>array.length</code></strong> → the property being read in the condition</li>
      <li><strong>Off-by-one errors</strong> → caused by <code>&lt;</code> vs <code>&lt;=</code> or <code>length</code> vs <code>length - 1</code></li>
      <li><strong>Infinite loops</strong> → what happens when the condition can never become false</li>
      <li><strong>Logical operators (<code>&amp;&amp;</code>, <code>||</code>)</strong> → for combining multiple stop checks</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-7-12-3-3': `
    <ul>
      <li><code>for</code> loop</li>
      <li><code>i = 0</code> (starting value)</li>
      <li><code>i++</code> (increment step)</li>
      <li>Loop counter variable</li>
      <li><code>array.length</code></li>
      <li>Comparison operators</li>
      <li>Off-by-one errors</li>
      <li>Infinite loops</li>
      <li><code>break</code> for early exit</li>
    </ul>
  `,

  /* ========================================================= 
   Sub-lesson: 3.8.14 Loops → i++
 =======================================================*/

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-7-13-0-0': `
    <p><code>i++</code> is the update step of the loop — the operation that runs after every iteration to change the counter. It's shorthand for <code>i = i + 1</code>, meaning "take the current value of <code>i</code>, add one, store the result back into <code>i</code>."</p>
    <p>It's the third of the three pieces inside a <code>for</code> loop's parentheses. Without it, the counter would never change, the stop condition would never become false, and the loop would run forever.</p>
  `,

  /* 0.1 Syntax */
  'topics-7-13-0-1': `
<pre class="language-javascript"><code class="language-javascript">for (let i = 0; i < 4; i++) {
  console.log(i);
}

// prints: 0, 1, 2, 3

// "i++" runs AFTER the body, before the next check.
// each round, it bumps i up by 1.</code></pre>
    <p><code>i++</code> doesn't return a value the loop uses — it just changes <code>i</code>. After it runs, the loop goes back to its check (<code>i &lt; 4</code>) with the new value, and decides whether to enter the body again.</p>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-7-13-0-2': `
<pre class="language-javascript"><code class="language-javascript">for (let i = 0; i < 4; i++) {
  // ...
}

// breaking down "i++":

// i      → the variable being changed
// ++     → the increment operator (adds 1 and assigns back)

// equivalent ways to write the same thing:
i++;            // increment by 1
i = i + 1;      // increment by 1, written out
i += 1;         // increment by 1, with the += shortcut

// these all do the exact same thing.
// i++ is just the most compact form, which is why it's the loop convention.</code></pre>
    <p>The update step is just a regular statement that runs once per iteration. It happens to live inside the <code>for</code>'s parentheses, but you could replace <code>i++</code> with anything — <code>i = i + 2</code>, <code>i--</code>, <code>i = i * 2</code>, or even something that doesn't touch <code>i</code> at all (though that would usually create an infinite loop).</p>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-7-13-0-3': `
    <p><strong><code>i++</code> and <code>++i</code> are subtly different.</strong> Both add 1, but they evaluate to different values when used in an expression. Inside a <code>for</code> loop's update slot, the difference doesn't matter (the value isn't used) — but in other contexts it can cause bugs:</p>
<pre class="language-javascript"><code class="language-javascript">// Standalone — both behave identically inside a for loop
for (let i = 0; i < 3; i++) { ... }
for (let i = 0; i < 3; ++i) { ... }   // same loop, same iterations

// Inside an expression — they differ
let i = 0;
console.log(i++);   // logs 0, THEN increments. i is now 1.
console.log(i);     // logs 1

let j = 0;
console.log(++j);   // increments FIRST, then logs. logs 1, j is 1.

// rule: in a for loop, just use i++ — it's the convention.
// outside a for loop, prefer i = i + 1 to avoid the post/pre confusion.</code></pre>

    <p><strong>The increment doesn't have to be 1.</strong> Whatever step size you need, write it explicitly:</p>
<pre class="language-javascript"><code class="language-javascript">// Step by 1 (the default)
for (let i = 0; i < 10; i++) { ... }

// Step by 2 — even numbers
for (let i = 0; i < 10; i = i + 2) { ... }   // 0, 2, 4, 6, 8

// Step by 5
for (let i = 0; i <= 100; i = i + 5) { ... }

// Doubling each step
for (let i = 1; i < 1000; i = i * 2) { ... }   // 1, 2, 4, 8, 16, ...

// Using +=, the shortcut for "add and assign"
for (let i = 0; i < 10; i += 2) { ... }   // same as i = i + 2</code></pre>

    <p><strong>To count down, use <code>i--</code> (decrement) and a <code>&gt;</code> condition.</strong> The structure mirrors counting up, just reversed:</p>
<pre class="language-javascript"><code class="language-javascript">// Count down from 5 to 1
for (let i = 5; i > 0; i--) {
  console.log(i);   // 5, 4, 3, 2, 1
}

// Walk an array backwards
for (let i = arr.length - 1; i >= 0; i--) {
  console.log(arr[i]);
}

// i-- is shorthand for i = i - 1, just like i++ is i = i + 1.</code></pre>

    <p><strong>The update step runs <em>after</em> the body, not before.</strong> So inside the body, <code>i</code> still has its current iteration's value. The bump to the next value happens between iterations:</p>
<pre class="language-javascript"><code class="language-javascript">for (let i = 0; i < 3; i++) {
  console.log("inside body, i is " + i);
}
// prints:
//   inside body, i is 0
//   inside body, i is 1
//   inside body, i is 2

// the body sees 0, then 1, then 2 — never 3.
// the i++ that would push i to 3 happens AFTER the body.
// then the check (3 < 3) fails and the loop exits.</code></pre>

    <p><strong>Forgetting the update step creates an infinite loop.</strong> The condition stays true forever because nothing ever changes the counter:</p>
<pre class="language-javascript"><code class="language-javascript">for (let i = 0; i < 5; ) {     // empty update slot
  console.log(i);
}
// infinite loop — i stays 0 forever, condition stays true forever.

// fix: include the update
for (let i = 0; i < 5; i++) {
  console.log(i);
}</code></pre>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-7-13-1-0': `
    <p>The starting value tells the loop where to begin. The condition tells it when to stop. But neither of those moves the counter from one iteration to the next — that's the update step's job. Without it, the loop has no way to make progress toward its stop condition.</p>
    <p>The update step is also where you control the <em>shape</em> of the loop: counting up, counting down, stepping by 2, stepping by powers of 10 — all of these are decisions you make in this slot. The starting value picks where, the condition picks when to stop, the update picks how you get from one to the other.</p>
  `,

  /* 1.1 Why use it */
  'topics-7-13-1-1': `
    <p>Different update steps unlock different patterns:</p>
<pre class="language-javascript"><code class="language-javascript">// Walk every item — step by 1
for (let i = 0; i < items.length; i++) { ... }

// Walk every other item — step by 2
for (let i = 0; i < items.length; i = i + 2) { ... }

// Walk in reverse — step backwards
for (let i = items.length - 1; i >= 0; i--) { ... }

// Pages 1 to N — step by 1, but human-numbered
for (let page = 1; page <= totalPages; page++) { ... }

// Step by a variable amount
const step = config.batchSize;
for (let i = 0; i < items.length; i = i + step) {
  processBatch(items.slice(i, i + step));
}

// Geometric progression — multiply each step
for (let val = 1; val < 1000; val = val * 2) { ... }   // 1, 2, 4, 8, 16, ...</code></pre>

    <p>The update is what makes a loop generic. Change just this slot, and the same overall structure can walk forward, backward, in big jumps, or in small ones — without rewriting any of the surrounding logic.</p>
  `,

  /* 1.2 Where you use it */
  'topics-7-13-1-2': `
<pre class="language-javascript"><code class="language-javascript">// Every item — step by 1
for (let i = 0; i < orders.length; i++) {
  process(orders[i]);
}

// Skip every other — step by 2 from index 0
for (let i = 0; i < rows.length; i = i + 2) {
  highlight(rows[i]);
}

// Walk every odd-indexed item — start at 1, step by 2
for (let i = 1; i < rows.length; i = i + 2) {
  highlight(rows[i]);
}

// Reverse walk — for safe deletion
for (let i = items.length - 1; i >= 0; i--) {
  if (items[i].toRemove) {
    items.splice(i, 1);
  }
}

// Process in chunks of N
const CHUNK = 50;
for (let i = 0; i < records.length; i = i + CHUNK) {
  uploadBatch(records.slice(i, i + CHUNK));
}

// Stepping forward by a non-fixed amount
for (let i = 0; i < tokens.length; i = i + skipCount) {
  console.log(tokens[i]);
  skipCount = computeNextSkip(tokens[i]);
}

// Counting down for animation frames
for (let frame = TOTAL_FRAMES; frame >= 0; frame--) {
  renderFrame(frame);
}</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-7-13-1-3': `
    <p>The update step is the loop's "step forward" instruction. After it finishes one round of the body, the loop pauses and runs whatever is in the update slot — usually <code>i++</code>, which means "add one to <code>i</code>." Then it goes back to the condition check, sees the new value, and decides whether to start another round.</p>
    <p>The reason it's a separate slot is that the loop needs a clear, repeatable rule for how to move forward. "Add one each time" is the most common rule, which is why <code>i++</code> appears in almost every loop — but the slot itself is generic. You can put any update there, as long as it eventually changes <code>i</code> in a direction that makes the condition false.</p>
    <p>Forget the update, and the counter never moves. The condition stays true forever, the loop body keeps running forever, and the page locks up. That's why the update step is the most common cause of infinite loops.</p>
  `,

  /* 1.4 Mental model */
  'topics-7-13-1-4': `
    <p>Think of <code>i++</code> as the gear in a clock that ticks one notch forward after each round. The body of the loop is "the work done in this minute." Once that minute's work is done, the gear advances — <code>tick</code> — and the clock now reads the next minute. Then the work happens again. Then <code>tick</code>. And so on, until the clock hits a stopping time.</p>
    <p>The "tick" is mechanical and automatic. It doesn't depend on what the body did; it just runs. That's why the same loop structure works for so many different bodies — the gear keeps turning regardless of what work the loop is doing in each round.</p>
    <p>If the gear breaks (you forget <code>i++</code>), the clock freezes at one minute and the work runs forever. If the gear turns backwards (<code>i--</code> with an upward condition), the clock will never reach its stopping time. The update step has to actually move the counter toward the condition becoming false — that's the whole job.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-7-13-1-5': `
<pre class="language-javascript"><code class="language-javascript">for (let i = 0; i < 3; i++) {
  console.log("step " + i);
}

// prints:
//   step 0
//   step 1
//   step 2

// JavaScript is thinking:
// 1. SETUP: let i = 0. Counter is 0.
// 2. CHECK: 0 < 3 → true. Enter body.
// 3. BODY: log "step 0".
// 4. UPDATE: i++. Counter is now 1.   ← runs AFTER body, BEFORE next check
// 5. CHECK: 1 < 3 → true. Enter body.
// 6. BODY: log "step 1".
// 7. UPDATE: i++. Counter is now 2.
// 8. CHECK: 2 < 3 → true. Enter body.
// 9. BODY: log "step 2".
// 10. UPDATE: i++. Counter is now 3.
// 11. CHECK: 3 < 3 → false. Exit loop.

// notice the order: BODY → UPDATE → CHECK → BODY → UPDATE → CHECK ...
// the update is the bridge between one body run and the next check.
// "i++" runs 3 times in this loop, even though the body also runs 3 times.
// the difference: the LAST i++ pushes i to 3, which the next check uses to exit.</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-7-13-2-0': `
    <p>If a loop hangs the page, runs forever, or doesn't run at all — the update step is the most common cause. Log the counter on every iteration to see what it's doing:</p>
<pre class="language-javascript"><code class="language-javascript">for (let i = 0; i < 5; i++) {
  console.log("iteration, i is:", i);
  // ... rest of body
}

// the output reveals:
//   - is i changing each iteration? (if not, no update happened)
//   - is i moving in the right direction? (counting up vs down)
//   - is i stepping by the right amount? (1, 2, 5, etc.)

// if the loop is infinite, open DevTools, hit "pause" — the call stack will
// usually show the loop frozen at a specific iteration. log i right before
// the body's last statement and you'll see what value it's stuck on.</code></pre>

    <p>Common signal: the page freezes when the loop runs. Almost always means the update is missing, broken, or pointing the wrong way (using <code>i--</code> with an upward condition, for example).</p>
  `,

  /* 2.1 The part that makes it click */
  'topics-7-13-2-1': `
    <p>The three slots in a <code>for</code> loop have a strict order: setup runs once, then check → body → update → check → body → update repeats. The update is the only one that the loop machinery runs <em>between</em> iterations of the body. It's the bridge.</p>
    <p>Once you see the cycle clearly — body finishes, update fires, check decides — the whole loop stops feeling like one mysterious unit and becomes three plain operations running in sequence. And anywhere a loop misbehaves, you can usually point to which of those three operations is wrong.</p>
  `,

  /* 2.2 Common confusions */
  'topics-7-13-2-2': `
    <p><strong>Confusion: <code>i++</code> vs <code>++i</code></strong></p>
<pre class="language-javascript"><code class="language-javascript">// In a for loop's update slot, both behave identically:
for (let i = 0; i < 3; i++) { ... }
for (let i = 0; i < 3; ++i) { ... }   // same loop

// In an EXPRESSION, they differ:
let a = 5;
console.log(a++);   // logs 5, then a becomes 6 (post-increment)

let b = 5;
console.log(++b);   // b becomes 6 first, then logs 6 (pre-increment)

// rule: just use i++ in for loops. it's the convention.</code></pre>

    <p><strong>Confusion: thinking <code>i++</code> runs before the body</strong></p>
<pre class="language-javascript"><code class="language-javascript">for (let i = 0; i < 3; i++) {
  console.log(i);
}
// prints 0, 1, 2 — NOT 1, 2, 3.

// the body sees i with its CURRENT iteration's value.
// the i++ runs AFTER the body, to set up the next iteration.
// the order is: setup → check → body → update → check → body → update ...</code></pre>

    <p><strong>Confusion: putting <code>i++</code> inside the body</strong></p>
<pre class="language-javascript"><code class="language-javascript">for (let i = 0; i < 5; i++) {
  console.log(i);
  i++;     // also incrementing inside the body
}
// prints 0, 2, 4 — i jumps by 2 each round (one inside body, one in update slot)
// this is sometimes intentional (skipping the next item), but usually a bug.

// fix: only increment in ONE place
for (let i = 0; i < 5; i++) {
  console.log(i);
}</code></pre>

    <p><strong>Confusion: thinking the update has to be <code>i++</code></strong></p>
<pre class="language-javascript"><code class="language-javascript">// the update slot can hold ANY expression, not just i++:

for (let i = 0; i < 100; i = i + 10) { ... }    // step by 10
for (let i = 100; i > 0; i = i - 5) { ... }     // count down by 5
for (let i = 1; i < 1000; i = i * 2) { ... }    // double each step

// even multiple actions, comma-separated:
for (let i = 0, j = 10; i < j; i++, j--) {
  console.log(i, j);
}
// two counters moving toward each other.</code></pre>

    <p><strong>Confusion: <code>i--</code> with the wrong condition</strong></p>
<pre class="language-javascript"><code class="language-javascript">for (let i = 0; i < 5; i--) {
  console.log(i);
}
// infinite loop — i is decreasing (-1, -2, -3...) but condition is "less than 5"
// since negative numbers are less than 5, condition stays true forever.

// fix: when counting down, the condition should match the direction
for (let i = 5; i > 0; i--) {
  console.log(i);
}</code></pre>
  `,

  /* 2.3 Common mistakes */
  'topics-7-13-2-3': `
<pre class="language-javascript"><code class="language-javascript">for (let i = 0; i < 5; ) {
  console.log(i);
}
// missing update — infinite loop
// fix: include the update step
for (let i = 0; i < 5; i++) {
  console.log(i);
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">for (let i = 0; i < 5; i--) {
  console.log(i);
}
// wrong direction — condition expects i to go UP, but i-- sends it DOWN
// fix: match the update to the condition's direction
for (let i = 0; i < 5; i++) {
  console.log(i);
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">for (let i = 0; i < 5; i + 1) {
  console.log(i);
}
// "i + 1" computes a value but doesn't assign it — i never changes
// fix: use i++ or i = i + 1
for (let i = 0; i < 5; i++) {
  console.log(i);
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">for (let i = 0; i < 5; i++);
{
  console.log(i);
}
// stray semicolon ends the for statement — body is empty
// the curly block runs only ONCE after the loop, with i = 5
// fix: remove the semicolon after the for(...)
for (let i = 0; i < 5; i++) {
  console.log(i);
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">for (let i = 0; i < 5; i++) {
  console.log(i);
  i++;
}
// double-incrementing — i jumps by 2 instead of 1
// prints 0, 2, 4 — half the iterations expected
// fix: increment in only one place
for (let i = 0; i < 5; i++) {
  console.log(i);
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">for (let i = 0; i < items.length; i = i++) {
  console.log(items[i]);
}
// "i = i++" assigns i to its OLD value (post-increment returns the original)
// i never actually changes — infinite loop
// fix: just use i++ on its own (no assignment) or i = i + 1
for (let i = 0; i < items.length; i++) {
  console.log(items[i]);
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">for (let i = 0; i < 100; i + 5) {
  console.log(i);
}
// like before — "i + 5" computes but doesn't assign
// fix: use i = i + 5 or i += 5
for (let i = 0; i < 100; i += 5) {
  console.log(i);
}</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-7-13-3-0': `
<pre class="language-javascript"><code class="language-javascript">// Step by 1 — the default
for (let i = 0; i < 5; i++) {
  console.log(i);   // 0, 1, 2, 3, 4
}

// Step by 2 — even numbers
for (let i = 0; i <= 10; i = i + 2) {
  console.log(i);   // 0, 2, 4, 6, 8, 10
}

// Step by 0.1 — fractional values
for (let pct = 0; pct <= 1; pct = pct + 0.1) {
  console.log(pct.toFixed(1));   // 0.0, 0.1, 0.2 ...
}

// Decrement — count down
for (let i = 10; i >= 1; i--) {
  console.log(i);   // 10, 9, 8 ... 1
}

// Doubling each step
for (let n = 1; n <= 64; n = n * 2) {
  console.log(n);   // 1, 2, 4, 8, 16, 32, 64
}

// Halving each step
for (let n = 100; n > 1; n = n / 2) {
  console.log(n);   // 100, 50, 25, 12.5, ...
}

// Two counters in the update slot
for (let lo = 0, hi = 10; lo < hi; lo++, hi--) {
  console.log(lo, hi);   // 0,10 → 1,9 → 2,8 → 3,7 → 4,6
}

// Update using +=
let total = 0;
for (let i = 1; i <= 5; i++) {
  total += i;
}
console.log(total);   // 15</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-7-13-3-1': `
    <p><strong>Example: striping every other table row</strong></p>
<pre class="language-javascript"><code class="language-javascript">function stripeRows(rows) {
  for (let i = 0; i < rows.length; i = i + 2) {
    rows[i].classList.add("row-light");
  }
  for (let i = 1; i < rows.length; i = i + 2) {
    rows[i].classList.add("row-dark");
  }
}
// the step-by-2 update walks every other row.
// starting at 0 hits even rows, starting at 1 hits odd rows.</code></pre>

    <p><strong>Example: uploading records in batches</strong></p>
<pre class="language-javascript"><code class="language-javascript">async function uploadInBatches(records) {
  const BATCH_SIZE = 25;
  for (let i = 0; i < records.length; i = i + BATCH_SIZE) {
    const batch = records.slice(i, i + BATCH_SIZE);
    await sendBatch(batch);
    console.log("uploaded batch starting at " + i);
  }
}
// the update step controls how many records get processed per loop pass.
// changing BATCH_SIZE changes the loop's behavior without rewriting anything else.</code></pre>

    <p><strong>Example: countdown timer display</strong></p>
<pre class="language-javascript"><code class="language-javascript">function buildCountdownLabels(seconds) {
  const labels = [];
  for (let s = seconds; s >= 0; s--) {
    labels.push(s + " seconds remaining");
  }
  return labels;
}
// counting down — i-- (or s--) paired with i >= 0 walks from a high number to zero.</code></pre>

    <p><strong>Example: zooming in on every power of 2</strong></p>
<pre class="language-javascript"><code class="language-javascript">function buildZoomLevels(maxZoom) {
  const levels = [];
  for (let zoom = 1; zoom <= maxZoom; zoom = zoom * 2) {
    levels.push(zoom);
  }
  return levels;
}
// zoom = zoom * 2 produces a geometric sequence: 1, 2, 4, 8, 16, ...
// useful for things that scale exponentially (zoom levels, font sizes, image sizes).</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-7-13-3-2': `
    <ul>
      <li><strong><code>for</code> loop</strong> → the loop type that uses an update step</li>
      <li><strong>Loop counter variable</strong> → the variable being changed by the update</li>
      <li><strong><code>i = 0</code></strong> → the starting value the update moves away from</li>
      <li><strong><code>i &lt; array.length</code></strong> → the stop condition the update is moving toward</li>
      <li><strong><code>i--</code></strong> → the decrement counterpart, for counting down</li>
      <li><strong><code>+=</code> and <code>-=</code></strong> → assignment operators for non-1 step sizes</li>
      <li><strong>Infinite loops</strong> → caused by a missing or wrong-direction update</li>
      <li><strong>Off-by-one errors</strong> → caused by stepping with the wrong amount or starting point</li>
      <li><strong><code>break</code> and <code>continue</code></strong> → ways to override the normal update→check cycle</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-7-13-3-3': `
    <ul>
      <li><code>for</code> loop</li>
      <li><code>i = 0</code> (starting value)</li>
      <li><code>i &lt; array.length</code> (stop condition)</li>
      <li><code>i--</code> (decrement)</li>
      <li><code>+=</code>, <code>-=</code>, <code>*=</code> (compound assignment)</li>
      <li>Infinite loops</li>
      <li><code>break</code> for early exit</li>
      <li><code>continue</code> for skipping</li>
      <li>Pre vs post increment (<code>++i</code> vs <code>i++</code>)</li>
    </ul>
  `,

});
