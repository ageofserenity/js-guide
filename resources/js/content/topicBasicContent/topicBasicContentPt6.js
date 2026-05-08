
Object.assign(CONTENT,{

          /* ==========================================================
     SECTION 3: MAIN TOPIC GUIDES / LESSON CONTENT
     COVERS THE BASIC LESSONS 3.9 ONLY--- VERY LONG
     ========================================================== */


       /* ==========================================================
     LESSON 3.9 FUNCTIONS
     ========================================================== */


  /* ===== Sub-lesson: 3.9.1 Functions → what functions are =====
     Path: topics-8-0-{chunkIndex}-{pieceIndex}
  */

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-8-0-0-0': `
    <p>A function is a reusable block of code that performs a task when you call it.</p>
    <p>You write the steps once, give the block a name, and then run those steps any time you want by writing the name with <code>()</code> after it.</p>
  `,

  /* 0.1 Syntax */
  'topics-8-0-0-1': `
<pre class="language-javascript"><code class="language-javascript">function greet() {
  console.log("Hello");
}

greet();   // run the function — prints "Hello"
greet();   // run it again — prints "Hello" again
greet();   // and again
</code></pre>
    <p>The function is <em>defined</em> once. It can be <em>called</em> as many times as you want.</p>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-8-0-0-2': `
<pre class="language-javascript"><code class="language-javascript">function greet(name) {
  console.log("Hello, " + name);
}

greet("OS")

// function       → keyword that creates a function
// greet          → the function name
// (name)         → the parameter list — placeholder inputs
// { ... }        → the function body — the code that runs
// console.log()  → the work the function does
// greet("Os")    → calling the function with the argument "Os"
// Output         → Hello, OS"
</code></pre>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-8-0-0-3': `
    <p>The parentheses are required — even when there are no inputs:</p>
<pre class="language-javascript"><code class="language-javascript">function sayHi() {     // correct: empty parentheses
  console.log("hi");
}

function sayHi {       // wrong: SyntaxError — missing ()
  console.log("hi");
}
</code></pre>

    <p>The curly braces hold the function's code:</p>
<pre class="language-javascript"><code class="language-javascript">function add(a, b) {
  return a + b;        // everything between { and } is the function body
}
</code></pre>

    <p>Defining is not the same as calling:</p>
<pre class="language-javascript"><code class="language-javascript">function greet() {
  console.log("Hello");
}

greet;     // wrong: just the name — does NOT run the function
greet();   // correct: the () actually runs it
</code></pre>
    <p>That trailing <code>()</code> is the part that makes the function actually do its work. Without it, you're just <em>referring</em> to the function, not running it.</p>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-8-0-1-0': `
    <p>Real code repeats the same steps over and over — validating input, formatting a price, updating the page. Without functions, you'd copy-paste those steps everywhere they're needed. When the logic changed, you'd have to update every copy.</p>
    <p>A function lets you write the steps once and reuse them anywhere.</p>
  `,

  /* 1.1 Why use it */
  'topics-8-0-1-1': `
    <p>Use a function any time you find yourself writing the same logic more than once, or when a chunk of code does one clear job that deserves a name.</p>
<pre class="language-javascript"><code class="language-javascript">// Without a function — repeating the same steps
const price1 = 19.99;
console.log("$" + price1.toFixed(2));

const price2 = 5.50;
console.log("$" + price2.toFixed(2));

const price3 = 100;
console.log("$" + price3.toFixed(2));

// With a function — write it once, reuse it
function formatPrice(price) {
  return "$" + price.toFixed(2);
}

console.log(formatPrice(19.99));
console.log(formatPrice(5.50));
console.log(formatPrice(100));
</code></pre>
    <p>If the formatting needs to change later — say, adding a comma for thousands — you change it in one place.</p>
  `,

  /* 1.2 Where you use it */
  'topics-8-0-1-2': `
    <p>Functions are everywhere in real JavaScript. Almost any code that does meaningful work lives inside one.</p>
<pre class="language-javascript"><code class="language-javascript">function handleClick() {                  // event handler
  console.log("button clicked");
}
button.addEventListener("click", handleClick);

function isValidEmail(email) {            // validation helper
  return email.includes("@");
}

function renderProduct(product) {         // building DOM
  const card = document.createElement("div");
  card.textContent = product.name;
  return card;
}

async function loadUsers() {              // fetching API data
  const response = await fetch("/api/users");
  return response.json();
}
</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-8-0-1-3': `
    <p>Think of a function like a recipe card. The card has a name, a list of ingredients (the parameters), and steps to follow (the body). The recipe just sits there until someone says "make it" — that's calling the function.</p>
    <p>The recipe doesn't do anything by existing. It only runs when you call it. And once you've written the recipe, you can use it as many times as you want without rewriting the steps.</p>
  `,

  /* 1.4 Mental model */
  'topics-8-0-1-4': `
    <p>A function is a labeled action you can trigger by name.</p>
<pre class="language-javascript"><code class="language-javascript">function greet() { ... }

// greet    →  the action of greeting
// greet()  →  actually do the greeting now
</code></pre>
    <p>The name points at the action. The <code>()</code> runs the action.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-8-0-1-5': `
<pre class="language-javascript"><code class="language-javascript">function double(x) {
  return x * 2;
}

const result = double(5);
console.log(result);

// JavaScript is thinking:
// Line 1: see function double → register a function called double, remember its parameter list.
// Line 2: read the body — don't run it yet, just store it as part of the function.
// Line 3: end of function definition.
// Line 5: see double(5) → look up the function, call it with 5 as x, run the body, get 10 back, store it in result.
// Line 6: look up result → 10 → log 10.
</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-8-0-2-0': `
    <p>If a function isn't doing what you expect, the first three questions are: <strong>did it actually run? what did it receive? what did it return?</strong></p>
<pre class="language-javascript"><code class="language-javascript">function double(x) {
  console.log("ran with:", x);    // did it run? what came in?
  return x * 2;
}

const result = double(5);
console.log("returned:", result); // what came out?
</code></pre>
    <p>The most common function errors:</p>
<pre class="language-javascript"><code class="language-javascript">function greet() { console.log("hi"); }
greet;
// wrong: just references the function, never runs it
// fix: add () → greet()

const result = greet();
function greet() { console.log("hi"); }
// result is undefined — greet() didn't return anything

function add(a, b) { a + b; }
const sum = add(2, 3);
// wrong: forgot return — sum is undefined
</code></pre>
  `,

  /* 2.1 The part that makes it click */
  'topics-8-0-2-1': `
    <p>A function is two separate things: <strong>defining</strong> it, and <strong>calling</strong> it.</p>
    <p>Defining writes the recipe. Calling runs the recipe. The <code>()</code> is what runs it.</p>
    <p>Without <code>()</code>, you have the function as a value — useful for passing around. With <code>()</code>, you trigger its work.</p>
  `,

  /* 2.2 Common confusions */
  'topics-8-0-2-2': `
    <p><strong>Confusion: <code>greet</code> vs <code>greet()</code></strong></p>
<pre class="language-javascript"><code class="language-javascript">function greet() {
  return "hello";
}

console.log(greet);    // logs the function itself (the recipe card)
console.log(greet());  // logs "hello" (the result of running it)
</code></pre>
    <p>Without <code>()</code>, you're holding the function as a value. With <code>()</code>, you're running it.</p>

    <p><strong>Confusion: parameters vs arguments</strong></p>
<pre class="language-javascript"><code class="language-javascript">function add(a, b) {     // a and b are parameters — placeholders
  return a + b;
}

add(5, 3);                // 5 and 3 are arguments — actual values
</code></pre>
    <p>Parameters are written when you define the function. Arguments are passed when you call it.</p>

    <p><strong>Confusion: <code>console.log()</code> vs <code>return</code></strong></p>
<pre class="language-javascript"><code class="language-javascript">function doubleA(x) {
  console.log(x * 2);       // shows it in the console, but doesn't hand it back
}

function doubleB(x) {
  return x * 2;             // hands the value back to whoever called it
}

const a = doubleA(5);   // logs 10, but a is undefined
const b = doubleB(5);   // b is 10
</code></pre>
    <p><code>console.log</code> shows. <code>return</code> hands back.</p>
  `,

  /* 2.3 Common mistakes */
  'topics-8-0-2-3': `
<pre class="language-javascript"><code class="language-javascript">function greet() { console.log("hi"); }
greet;
// wrong: missing () — function is referenced but not called
</code></pre>

<pre class="language-javascript"><code class="language-javascript">function add(a, b) {
  a + b;
}
const sum = add(2, 3);
// wrong: forgot the return — sum is undefined
</code></pre>

<pre class="language-javascript"><code class="language-javascript">function greet(name) {
  console.log("hi, " + name);
}
greet();
// works, but name is undefined → "hi, undefined"
</code></pre>

<pre class="language-javascript"><code class="language-javascript">function getUser() {
  return { name: "Os" };
}
console.log(getUser.name);
// wrong: getUser is the function, not the returned object
// fix: getUser().name
</code></pre>

<pre class="language-javascript"><code class="language-javascript">function function() { ... }
// wrong: 'function' is a reserved keyword, not a valid name
</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-8-0-3-0': `
<pre class="language-javascript"><code class="language-javascript">// Function with no inputs, no output
function sayHi() {
  console.log("hi");
}
sayHi();

// Function with input, no output
function logName(name) {
  console.log("Hello, " + name);
}
logName("Os");

// Function with input and output
function double(n) {
  return n * 2;
}
const result = double(7);   // 14

// Function with multiple inputs
function add(a, b) {
  return a + b;
}
const sum = add(5, 3);      // 8
</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-8-0-3-1': `
    <p><strong>Example: a click handler</strong></p>
<pre class="language-javascript"><code class="language-javascript">function handleAddToCart() {
  cartCount = cartCount + 1;
  cartBadge.textContent = cartCount;
}
addBtn.addEventListener("click", handleAddToCart);
</code></pre>

    <p><strong>Example: form validation helper</strong></p>
<pre class="language-javascript"><code class="language-javascript">function isValidEmail(email) {
  return email.includes("@") && email.length > 3;
}

if (isValidEmail(emailInput.value)) {
  submitForm();
}
</code></pre>

    <p><strong>Example: building a product card</strong></p>
<pre class="language-javascript"><code class="language-javascript">function buildProductCard(product) {
  const card = document.createElement("div");
  card.className = "card";
  card.textContent = product.name;
  return card;
}

const card = buildProductCard({ name: "Hat" });
document.body.appendChild(card);
</code></pre>

    <p><strong>Example: formatting a price</strong></p>
<pre class="language-javascript"><code class="language-javascript">function formatPrice(price) {
  return "$" + price.toFixed(2);
}

priceLabel.textContent = formatPrice(19.99);   // "$19.99"
</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-8-0-3-2': `
    <ul>
      <li><strong>Parameters</strong> → the named placeholders for inputs</li>
      <li><strong>Arguments</strong> → the actual values passed in when you call</li>
      <li><strong>Return</strong> → how a function hands a value back to its caller</li>
      <li><strong>Scope</strong> → variables inside a function can't be reached from outside</li>
      <li><strong>Events</strong> → event handlers are functions</li>
      <li><strong>Callbacks</strong> → functions passed into other functions</li>
      <li><strong>Arrow functions</strong> → a shorter syntax for writing functions</li>
      <li><strong>DOM</strong> → most page updates happen inside functions</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-8-0-3-3': `
    <ul>
      <li>Function declaration</li>
      <li>Function expression</li>
      <li>Arrow function</li>
      <li>Parameters</li>
      <li>Arguments</li>
      <li>Return values</li>
      <li><code>console.log()</code> vs <code>return</code></li>
      <li>Scope</li>
      <li>Callback functions</li>
      <li>Common function mistakes</li>
    </ul>
  `,


  /* ===== Sub-lesson: 3.9.2 Functions → why functions exist =====
     Path: topics-8-1-{chunkIndex}-{pieceIndex}
  */

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-8-1-0-0': `
    <p>Functions exist so you can write a piece of code once and reuse it from anywhere, instead of repeating the same lines every time you need them.</p>
    <p>They're how JavaScript lets you package work into a name — and a name is something you can use, share, and update in one place.</p>
  `,

  /* 0.1 Syntax */
  'topics-8-1-0-1': `
<pre class="language-javascript"><code class="language-javascript">// Without a function — three near-identical blocks
console.log("Welcome, Os");
console.log("Welcome, Sam");
console.log("Welcome, Alex");

// With a function — one block, called three times
function welcome(name) {
  console.log("Welcome, " + name);
}

welcome("Os");
welcome("Sam");
welcome("Alex");
</code></pre>
    <p>Both versions do the same thing. The second one is shorter, easier to update, and easier to reuse later.</p>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-8-1-0-2': `
<pre class="language-javascript"><code class="language-javascript">function greet(name) {
  console.log("Hello, " + name);
}

greet("OS")
greet("Sam")
greet ("Alex")

// function       → keyword that starts the declaration
// greet          → the name of the function
// (name)         → the parameter list
// { ... }        → the function body
// greet("name")  → calls the name
// no = sign  → declarations don't assign to a variable, they create a named function directly
// no = sign  → explained on function expressions</code></pre>
  `,


  /* 0.3 Syntax Details That Matter */
  'topics-8-1-0-3': `
    <p>Reuse only happens when you actually call the function:</p>
<pre class="language-javascript"><code class="language-javascript">function welcome(name) {
  console.log("Welcome, " + name);
}

welcome;             // wrong: just the name — no reuse, nothing runs
welcome("Os");       // correct: the () runs the function
</code></pre>

    <p>The input slot is what makes a function reusable across different values:</p>
<pre class="language-javascript"><code class="language-javascript">function welcome(name) {     // name is a placeholder for whatever comes in
  console.log("Welcome, " + name);
}

welcome("Os");      // name is "Os" this time
welcome("Sam");     // name is "Sam" this time
</code></pre>
    <p>Without the parameter, the function would only ever do one fixed thing.</p>

    <p>Define before you call:</p>
<pre class="language-javascript"><code class="language-javascript">function welcome(name) {
  console.log("Welcome, " + name);
}
welcome("Os");        // correct: defined first, called after

// Calling before defining can work due to hoisting,
// but it's much harder to read — keep define-then-call as the habit.
</code></pre>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-8-1-1-0': `
    <p>Real code does the same kinds of work over and over — formatting, validating, updating the page, reacting to clicks. Without functions, that work would be copy-pasted everywhere it's needed.</p>
    <p>Copy-paste creates two big problems: the same logic shows up in many places, and when you need to change it, you have to change every copy. Miss one and the bug ships.</p>
    <p>Functions solve this by giving the work a name. The work lives in one place. Everywhere else just calls the name.</p>
  `,

  /* 1.1 Why use it */
  'topics-8-1-1-1': `
    <p>Use functions whenever code is doing one clear job — even if it only happens once. The name itself becomes documentation.</p>
<pre class="language-javascript"><code class="language-javascript">// Without a function — a wall of code with no labels
const trimmed = nameInput.value.trim();
const lower = trimmed.toLowerCase();
if (lower.includes("@") && lower.length > 3) {
  submitForm();
}

// With a function — the job has a name
function isValidEmail(email) {
  const cleaned = email.trim().toLowerCase();
  return cleaned.includes("@") && cleaned.length > 3;
}

if (isValidEmail(nameInput.value)) {
  submitForm();
}
</code></pre>
    <p>The second version reads almost like a sentence. <em>"If the email is valid, submit the form."</em> That's the real win — functions don't just save lines, they make code understandable.</p>
  `,

  /* 1.2 Where you use it */
  'topics-8-1-1-2': `
    <p>Anywhere code does a task that has a clear name, a function fits.</p>
<pre class="language-javascript"><code class="language-javascript">// Reusing the same DOM update everywhere
function showMessage(text) {
  messageBox.textContent = text;
  messageBox.classList.add("visible");
}

showMessage("Saved!");
showMessage("Form submitted");
showMessage("Loading...");

// Wrapping a calculation that's used in several places
function calculateTotal(price, tax) {
  return price + (price * tax);
}

const cartTotal = calculateTotal(50, 0.08);
const productTotal = calculateTotal(20, 0.08);

// Naming a piece of logic so the code reads clearly
function isOnSale(product) {
  return product.discount > 0;
}

if (isOnSale(product)) {
  showSaleBadge();
}
</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-8-1-1-3': `
    <p>Functions exist because programmers got tired of writing the same code over and over.</p>
    <p>Imagine writing a how-to guide. You don't repeat the full instructions every time someone asks "how do I do this?" — you write it once and hand them the guide. The guide becomes a tool. Anyone can use it. If the steps change, you update the guide once and everyone gets the new version.</p>
    <p>Functions are that guide. They let you give a piece of work a name so the rest of your code can just say <em>"do that thing"</em> instead of writing out the steps every time.</p>
  `,

  /* 1.4 Mental model */
  'topics-8-1-1-4': `
    <p>A function is a piece of work, packaged under a name, that you can run from anywhere.</p>
<pre class="language-javascript"><code class="language-javascript">// Without a function — the work lives many places
[work][work][work][work]

// With a function — the work lives in one place
[work]
  ↑    ↑    ↑    ↑
call call call call
</code></pre>
    <p>Defining a function is like building a tool. Calling it is like picking up the tool and using it. The same tool can be used a hundred times, in a hundred places, without rebuilding it.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-8-1-1-5': `
<pre class="language-javascript"><code class="language-javascript">function welcome(name) {
  console.log("Welcome, " + name);
}

welcome("Os");
welcome("Sam");

// JavaScript is thinking:
// Line 1: see function welcome → register a function called welcome, remember its parameter list.
// Line 2: read the body — don't run it yet, just store it as part of the function.
// Line 3: end of function definition.
// Line 5: see welcome("Os") → look up the function, call it with "Os" as name, run the body, prints "Welcome, Os".
// Line 6: see welcome("Sam") → same function, called again with "Sam" as name, prints "Welcome, Sam".
</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-8-1-2-0': `
    <p>If a function doesn't seem to be saving you any work — check whether it's <strong>actually being reused</strong>. A function called from one place isn't a reuse problem; it's just a labeling choice.</p>
<pre class="language-javascript"><code class="language-javascript">// Smell: function defined but called only once, with hardcoded inputs
function showOsWelcome() {
  console.log("Welcome, Os");
}
showOsWelcome();
// not really reusable — the name "Os" is locked in

// Better: parameter makes it actually reusable
function welcome(name) {
  console.log("Welcome, " + name);
}
welcome("Os");
welcome("Sam");
</code></pre>
    <p>The other common smell: copy-pasting the same logic in multiple places when a function would do. If you're editing several places to make the same change, that's the signal — extract a function.</p>
  `,

  /* 2.1 The part that makes it click */
  'topics-8-1-2-1': `
    <p>Functions exist for two reasons, in this order: <strong>naming</strong> first, <strong>reuse</strong> second.</p>
    <p>Naming is the bigger one. A well-named function turns a wall of code into a sentence. <code>if (isValidEmail(input)) submitForm();</code> reads itself.</p>
    <p>Reuse is the bonus. Once you've named the work, calling it from many places comes for free.</p>
  `,

  /* 2.2 Common confusions */
  'topics-8-1-2-2': `
    <p><strong>Confusion: "I only use it once, so why bother?"</strong></p>
<pre class="language-javascript"><code class="language-javascript">// Used once, no parameters — but the name itself is the value
function setupPage() {
  loadHeader();
  loadSidebar();
  attachEventListeners();
}

setupPage();
// the name "setupPage" tells you what's happening here
// without it, you'd have three unlabeled function calls in a row
</code></pre>

    <p><strong>Confusion: functions vs variables</strong></p>
<pre class="language-javascript"><code class="language-javascript">const message = "Welcome, Os";       // a value — frozen text
function getMessage(name) {            // a recipe — produces text on demand
  return "Welcome, " + name;
}

console.log(message);          // always the same
console.log(getMessage("Os"));  // depends on what you pass in
console.log(getMessage("Sam")); // different result, same recipe
</code></pre>
    <p>Variables hold values. Functions hold steps that <em>produce</em> values when run.</p>

    <p><strong>Confusion: copying code vs calling a function</strong></p>
<pre class="language-javascript"><code class="language-javascript">// Copy-paste: two separate copies of the logic
button1.addEventListener("click", () => {
  cartCount = cartCount + 1;
  cartBadge.textContent = cartCount;
});
button2.addEventListener("click", () => {
  cartCount = cartCount + 1;
  cartBadge.textContent = cartCount;
});

// Function: one copy, called from both places
function addToCart() {
  cartCount = cartCount + 1;
  cartBadge.textContent = cartCount;
}
button1.addEventListener("click", addToCart);
button2.addEventListener("click", addToCart);
</code></pre>
    <p>Update the logic in the function version once, and both buttons get the change.</p>
  `,

  /* 2.3 Common mistakes */
  'topics-8-1-2-3': `
<pre class="language-javascript"><code class="language-javascript">function welcome() {
  console.log("Welcome, Os");
}
welcome();
welcome();
welcome();
// works, but defeats the point — the name "Os" is hardcoded
// fix: use a parameter so each call can be different
</code></pre>

<pre class="language-javascript"><code class="language-javascript">function calculateTotal() {
  return 50 + (50 * 0.08);
}
// wrong: works for one specific case, can't be reused
// fix: take price and tax as parameters
</code></pre>

<pre class="language-javascript"><code class="language-javascript">function doStuff() {
  // 200 lines of code doing five different things
}
// wrong: the name doesn't describe one job
// fix: split into smaller functions, each with a clear name
</code></pre>

<pre class="language-javascript"><code class="language-javascript">function a(x) { return x * 2; }
function b(y) { return y * 2; }
function c(z) { return z * 2; }
// wrong: three functions doing the same thing
// fix: one function, called three times
</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Same code copied four times into four event handlers
// fix: extract one function and pass it as the handler each time
</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-8-1-3-0': `
<pre class="language-javascript"><code class="language-javascript">// Reuse — same function, different inputs
function double(n) {
  return n * 2;
}
console.log(double(5));    // 10
console.log(double(10));   // 20
console.log(double(100));  // 200

// Naming — the function name tells you what's happening
function isAdult(age) {
  return age >= 18;
}
if (isAdult(user.age)) {
  showAdultContent();
}

// One change, everywhere — update logic in one place
function formatPrice(price) {
  return "$" + price.toFixed(2);
}
// Want commas later? Update this one function.

// Combining small functions into bigger work
function isValidEmail(email) { return email.includes("@"); }
function isValidName(name)   { return name.length > 0; }

function isFormValid(email, name) {
  return isValidEmail(email) && isValidName(name);
}
</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-8-1-3-1': `
    <p><strong>Example: same logic, three buttons</strong></p>
<pre class="language-javascript"><code class="language-javascript">function closeModal() {
  modal.classList.remove("open");
  overlay.classList.remove("visible");
}

closeBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
escapeKey.addEventListener("keydown", closeModal);
// one function, three places that use it
</code></pre>

    <p><strong>Example: turning messy code into a readable sentence</strong></p>
<pre class="language-javascript"><code class="language-javascript">function isCheckoutReady() {
  return cart.length > 0
      && user.isLoggedIn
      && shippingAddress !== null;
}

if (isCheckoutReady()) {
  showCheckoutButton();
}
// reads almost like English: if checkout is ready, show the button
</code></pre>

    <p><strong>Example: changing the rule in one place</strong></p>
<pre class="language-javascript"><code class="language-javascript">function getDiscount(user) {
  return user.isMember ? 0.10 : 0;
}

const total1 = price1 * (1 - getDiscount(user));
const total2 = price2 * (1 - getDiscount(user));
const total3 = price3 * (1 - getDiscount(user));
// add a "premium" tier later — only getDiscount() needs to change
</code></pre>

    <p><strong>Example: small functions building bigger ones</strong></p>
<pre class="language-javascript"><code class="language-javascript">function getCartItems()  { return JSON.parse(localStorage.getItem("cart")) || []; }
function getCartTotal()  { return getCartItems().reduce((sum, i) => sum + i.price, 0); }
function renderCart()    {
  cartTotalLabel.textContent = formatPrice(getCartTotal());
}
</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-8-1-3-2': `
    <ul>
      <li><strong>Parameters</strong> → what makes a function reusable across different inputs</li>
      <li><strong>Return values</strong> → how a function hands its result back so other code can use it</li>
      <li><strong>Naming variables</strong> → the same naming skill applies to functions</li>
      <li><strong>Events</strong> → the same handler function can be reused across many listeners</li>
      <li><strong>DOM updates</strong> → wrapping page changes in named functions makes them clearer</li>
      <li><strong>Validation</strong> → form rules become readable when each rule is its own function</li>
      <li><strong>Refactoring</strong> → extracting a function is the most common refactor in JavaScript</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-8-1-3-3': `
    <ul>
      <li>Reusable actions</li>
      <li>Function declaration</li>
      <li>Parameters</li>
      <li>Return values</li>
      <li>Naming variables</li>
      <li>Callback functions</li>
      <li>Refactoring</li>
      <li>DRY (Don't Repeat Yourself)</li>
    </ul>
  `,


  /* ===== Sub-lesson: 3.9.3 Functions → reusable actions =====
     Path: topics-8-2-{chunkIndex}-{pieceIndex}
  */

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-8-2-0-0': `
    <p>A function is a reusable action — a piece of work you've packaged under a name so you can trigger it again and again, from anywhere, without rewriting the steps.</p>
    <p>The mental model is simple: a function is a <em>verb</em> in your program. It's a thing that does something. Once you've named it, the rest of your code can just say "do that" by calling the name.</p>
  `,

  /* 0.1 Syntax */
  'topics-8-2-0-1': `
<pre class="language-javascript"><code class="language-javascript">function showError(message) {
  errorBox.textContent = message;
  errorBox.classList.add("visible");
}

// the same action, triggered in different places, with different inputs
showError("Email required");
showError("Password too short");
showError("Network failed");
</code></pre>
    <p>The function defines the action once. Each call <em>triggers</em> the action with whatever input you give it.</p>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-8-2-0-2': `
<pre class="language-javascript"><code class="language-javascript">function showError(message) {
  errorBox.textContent = message;
  errorBox.classList.add("visible");
}

// showError      → the name of the action
// (message)      → what the action needs to do its work
// { ... }        → the steps the action performs
// showError(...) → triggering the action — making it actually happen
</code></pre>
    <p>Think of the name as the verb, the parameter as what the verb operates on, and the body as how the verb actually gets done.</p>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-8-2-0-3': `
    <p>The function exists as soon as you define it, but the action only happens when you call it:</p>
<pre class="language-javascript"><code class="language-javascript">function showError(message) {
  errorBox.textContent = message;
}
// nothing on the page changed yet — the action exists but hasn't been triggered

showError("Email required");
// now the action runs — the page updates
</code></pre>

    <p>The same action can be triggered any number of times:</p>
<pre class="language-javascript"><code class="language-javascript">function logVisit() {
  console.log("page visited at " + Date.now());
}

logVisit();    // triggers once
logVisit();    // triggers again — same action, fresh run
logVisit();    // and again
</code></pre>
    <p>Each call is a separate run. The function doesn't "remember" previous calls unless you build that in.</p>

    <p>You can pass the action around as a value, separate from triggering it:</p>
<pre class="language-javascript"><code class="language-javascript">function showError(message) {
  errorBox.textContent = message;
}

// pass the action itself — don't trigger it yet
button.addEventListener("click", showError);

// trigger it directly
showError("now");
</code></pre>
    <p>Without <code>()</code>, you're handing over the action. With <code>()</code>, you're performing it.</p>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-8-2-1-0': `
    <p>Programs need to do the same kinds of things over and over — show messages, validate input, update the page, react to clicks. Without a way to package those actions, every place that needs the action has to write it out from scratch.</p>
    <p>The "reusable actions" model solves this: instead of code being a long script of every step, code becomes a collection of named actions that can be triggered when needed. That's how real apps stay manageable as they grow.</p>
  `,

  /* 1.1 Why use it */
  'topics-8-2-1-1': `
    <p>Treat a chunk of code as a reusable action whenever it does <em>one clear job</em> — even if you only call it from one place right now. The naming alone makes the surrounding code easier to read, and reuse becomes free if you need it later.</p>
<pre class="language-javascript"><code class="language-javascript">// Without a reusable action — every spot does the work itself
errorBox.textContent = "Email required";
errorBox.classList.add("visible");
// ... 50 lines later ...
errorBox.textContent = "Password too short";
errorBox.classList.add("visible");
// ... 100 lines later ...
errorBox.textContent = "Network failed";
errorBox.classList.add("visible");

// With a reusable action — one place, three triggers
function showError(message) {
  errorBox.textContent = message;
  errorBox.classList.add("visible");
}

showError("Email required");
showError("Password too short");
showError("Network failed");
</code></pre>
    <p>Now if the design changes — say errors should fade in, or log to analytics — you change <code>showError</code> once and every caller picks it up.</p>
  `,

  /* 1.2 Where you use it */
  'topics-8-2-1-2': `
    <p>Almost every piece of behavior in a real app is a reusable action with a name.</p>
<pre class="language-javascript"><code class="language-javascript">function openModal()       { modal.classList.add("open"); }
function closeModal()      { modal.classList.remove("open"); }
function toggleSidebar()   { sidebar.classList.toggle("open"); }
function clearForm()       { form.reset(); }
function showSpinner()     { spinner.classList.add("visible"); }
function hideSpinner()     { spinner.classList.remove("visible"); }
function scrollToTop()     { window.scrollTo({ top: 0, behavior: "smooth" }); }

// triggered wherever they're needed
openBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
menuBtn.addEventListener("click", toggleSidebar);
</code></pre>
    <p>Each one is a verb. Each one can be triggered from anywhere. The app becomes a vocabulary of actions instead of a wall of code.</p>
  `,

  /* 1.3 Plain English explanation */
  'topics-8-2-1-3': `
    <p>Think of functions like the buttons on a microwave. Each button is labeled with what it does — popcorn, defrost, reheat. You don't rewire the microwave every time you want popcorn. You just press the popcorn button.</p>
    <p>A function is the same idea. The name is the label. The body is the wiring. Calling the function is pressing the button. The wiring stays the same. Pressing the button makes the action happen.</p>
    <p>Building an app is mostly building your own custom buttons — your own actions, named for what they do — and then pressing them when needed.</p>
  `,

  /* 1.4 Mental model */
  'topics-8-2-1-4': `
    <p>A function is a <strong>verb</strong> with a name. Variables are nouns; functions are verbs.</p>
<pre class="language-javascript"><code class="language-javascript">// Nouns — things your program has
const user        = { name: "Os" };
const cartItems   = [];
const isLoggedIn  = true;

// Verbs — things your program does
function login()           { /* ... */ }
function addToCart(item)   { /* ... */ }
function checkout()        { /* ... */ }
</code></pre>
    <p>Good function names start with a verb: <code>show</code>, <code>get</code>, <code>build</code>, <code>send</code>, <code>toggle</code>, <code>render</code>, <code>handle</code>. If you can't think of a verb for a function, that's usually a sign it's doing too many things.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-8-2-1-5': `
<pre class="language-javascript"><code class="language-javascript">function showError(message) {
  errorBox.textContent = message;
  errorBox.classList.add("visible");
}

showError("Email required");
showError("Network failed");

// JavaScript is thinking:
// Line 1: see function showError → register a reusable action called showError, remember its parameter list.
// Line 2: read the body — don't run it yet, just store it as the action's steps.
// Line 3: still part of the body — store this step too.
// Line 4: end of action definition.
// Line 6: see showError("Email required") → trigger the action with message = "Email required", run the body, error box updates.
// Line 7: see showError("Network failed") → trigger the same action again with message = "Network failed", run the body fresh, error box updates again.
</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-8-2-2-0': `
    <p>If you can't describe a function with a clear verb phrase ("show error", "get cart total", "validate email"), the function is doing too much or doesn't have a clear job. That's a debugging clue at the design level — not about the code being broken, but about it being unclear.</p>
<pre class="language-javascript"><code class="language-javascript">function doStuff() {
  // validate the form
  // submit the data
  // show a success message
  // redirect the user
}
// no clear verb — this is four actions wearing one name
// fix: split into validateForm, submitData, showSuccess, redirect
</code></pre>
    <p>Every reusable action should answer one question: "what does this do?" — in one short sentence.</p>
  `,

  /* 2.1 The part that makes it click */
  'topics-8-2-2-1': `
    <p>A function isn't just code that runs. It's a <strong>named action</strong> in your app's vocabulary.</p>
    <p>Once you start thinking this way, building an app stops feeling like writing one giant script and starts feeling like teaching the program a list of things it can do — and then telling it when to do them.</p>
    <p>Naming is the act of designing. The name is what other code uses. The body is the implementation that can change later.</p>
  `,

  /* 2.2 Common confusions */
  'topics-8-2-2-2': `
    <p><strong>Confusion: function name vs what the function does</strong></p>
<pre class="language-javascript"><code class="language-javascript">function user() {              // wrong: noun — sounds like a thing
  return { name: "Os" };
}

function getUser() {           // right: verb — sounds like an action
  return { name: "Os" };
}
</code></pre>
    <p>The name is the label on the button. It should describe what happens when you press it.</p>

    <p><strong>Confusion: defining the action vs triggering it</strong></p>
<pre class="language-javascript"><code class="language-javascript">function logVisit() {
  console.log("visited");
}
// the action exists now — but nothing has been logged yet

logVisit();
// only now does the action actually run
</code></pre>
    <p>Defining is making the button. Calling is pressing it.</p>

    <p><strong>Confusion: one big action vs several small ones</strong></p>
<pre class="language-javascript"><code class="language-javascript">// Less reusable — one giant action
function handleSubmit() {
  // 40 lines doing many things
}

// More reusable — several named actions
function validateForm()  { /* ... */ }
function submitData()    { /* ... */ }
function showSuccess()   { /* ... */ }

function handleSubmit() {
  if (!validateForm()) return;
  submitData();
  showSuccess();
}
</code></pre>
    <p>Small actions can be reused on their own. A giant action can only be triggered as one block.</p>
  `,

  /* 2.3 Common mistakes */
  'topics-8-2-2-3': `
<pre class="language-javascript"><code class="language-javascript">function thing()   { /* ... */ }
function stuff()   { /* ... */ }
function helper()  { /* ... */ }
// wrong: vague names — no idea what action they perform
// fix: name the verb — showError, getCartTotal, formatPrice
</code></pre>

<pre class="language-javascript"><code class="language-javascript">function processUser(user) {
  // validates the user
  // saves to the database
  // sends an email
  // updates the UI
}
// wrong: one function doing four jobs
// fix: split into four named actions, then call them in order
</code></pre>

<pre class="language-javascript"><code class="language-javascript">function showError() {
  errorBox.textContent = "Email required";
}
// wrong: hardcoded message — only works for one specific error
// fix: take message as a parameter so the action is actually reusable
</code></pre>

<pre class="language-javascript"><code class="language-javascript">function show() { /* ... */ }
function show() { /* ... */ }
// wrong: same name for two different actions — second one overwrites the first
// fix: name each action for what it specifically does
</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Same logic copy-pasted into three different event handlers
btn1.addEventListener("click", () => { /* same 5 lines */ });
btn2.addEventListener("click", () => { /* same 5 lines */ });
btn3.addEventListener("click", () => { /* same 5 lines */ });
// wrong: the action isn't reusable when it lives inline
// fix: extract one named function, pass it as the handler each time
</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-8-2-3-0': `
<pre class="language-javascript"><code class="language-javascript">// One named action, triggered many times
function greet(name) {
  console.log("Hello, " + name);
}
greet("Os");
greet("Sam");
greet("Alex");

// Action with no input — same effect every time
function clearScreen() {
  document.body.innerHTML = "";
}
clearScreen();

// Action that produces a value
function getRandomColor() {
  const colors = ["red", "blue", "green"];
  return colors[Math.floor(Math.random() * 3)];
}
console.log(getRandomColor());
console.log(getRandomColor());

// Small actions combined into a bigger action
function showSpinner() { spinner.classList.add("visible"); }
function hideSpinner() { spinner.classList.remove("visible"); }

async function loadData() {
  showSpinner();
  await fetch("/api/data");
  hideSpinner();
}
</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-8-2-3-1': `
    <p><strong>Example: a small vocabulary of UI actions</strong></p>
<pre class="language-javascript"><code class="language-javascript">function openModal()    { modal.classList.add("open"); }
function closeModal()   { modal.classList.remove("open"); }
function showSpinner()  { spinner.classList.add("visible"); }
function hideSpinner()  { spinner.classList.remove("visible"); }

openBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
</code></pre>

    <p><strong>Example: same action, many triggers</strong></p>
<pre class="language-javascript"><code class="language-javascript">function addToCart(product) {
  cart.push(product);
  cartBadge.textContent = cart.length;
}

product1Btn.addEventListener("click", () => addToCart(product1));
product2Btn.addEventListener("click", () => addToCart(product2));
product3Btn.addEventListener("click", () => addToCart(product3));
// one action, used by every "Add" button on the page
</code></pre>

    <p><strong>Example: building bigger actions out of smaller ones</strong></p>
<pre class="language-javascript"><code class="language-javascript">function clearForm()      { form.reset(); }
function closeModal()     { modal.classList.remove("open"); }
function showSuccess()    { toast.textContent = "Saved!"; toast.classList.add("visible"); }

function handleSaveSuccess() {
  clearForm();
  closeModal();
  showSuccess();
}
// each small action is reusable on its own
// handleSaveSuccess composes them into the after-save flow
</code></pre>

    <p><strong>Example: the action as a value</strong></p>
<pre class="language-javascript"><code class="language-javascript">function logout() {
  user = null;
  redirectTo("/login");
}

logoutBtn.addEventListener("click", logout);
window.addEventListener("beforeunload", logout);
sessionTimer.addEventListener("expired", logout);
// the same action, handed to three different listeners
</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-8-2-3-2': `
    <ul>
      <li><strong>Function declaration</strong> → the most common way to define a reusable action</li>
      <li><strong>Parameters</strong> → what the action needs to do its work</li>
      <li><strong>Return values</strong> → what the action hands back to whoever triggered it</li>
      <li><strong>Naming</strong> → start with a verb to describe what the action does</li>
      <li><strong>Events</strong> → events trigger named actions</li>
      <li><strong>Callbacks</strong> → passing an action as a value to be triggered later</li>
      <li><strong>Composition</strong> → small actions called by larger actions</li>
      <li><strong>Single responsibility</strong> → each action should do one clear job</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-8-2-3-3': `
    <ul>
      <li>What functions are</li>
      <li>Why functions exist</li>
      <li>Function declaration</li>
      <li>Function naming</li>
      <li>Verbs vs nouns in code</li>
      <li>Single-responsibility functions</li>
      <li>Callback functions</li>
      <li>Composing small functions</li>
    </ul>
  `,


  /* ===== Sub-lesson: 3.9.4 Functions → function declaration =====
     Path: topics-8-3-{chunkIndex}-{pieceIndex}
  */

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-8-3-0-0': `
    <p>A function declaration is the standard way to create a function in JavaScript. It starts with the <code>function</code> keyword, followed by a name, parameters in parentheses, and a body in curly braces.</p>
    <p>It's the most common form you'll see, and the one most beginners learn first.</p>
  `,

  /* 0.1 Syntax */
  'topics-8-3-0-1': `
<pre class="language-javascript"><code class="language-javascript">function greet(name) {
  console.log("Hello, " + name);
}

greet("Os");   // prints "Hello, Os"
</code></pre>
    <p>Once declared, the function can be called by its name as many times as you want.</p>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-8-3-0-2': `
<pre class="language-javascript"><code class="language-javascript">function greet(name) {
  console.log("Hello, " + name);
}

// function   → keyword that starts the declaration
// greet      → the name of the function
// (name)     → the parameter list
// { ... }    → the function body
// no = sign  → declarations don't assign to a variable, they create a named function directly
// no = sign  → explained on function expressions</code></pre>
</code></pre>
    <p>The whole thing is one statement. No semicolon is needed at the end of the closing brace, though some people add one — both work.</p>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-8-3-0-3': `
    <p>The name comes right after <code>function</code>, with no <code>=</code>:</p>
<pre class="language-javascript"><code class="language-javascript">function greet() { ... }       // correct: declaration
const greet = function() {};   // different — that's a function expression
</code></pre>

    <p>Parentheses are required, even with no parameters:</p>
<pre class="language-javascript"><code class="language-javascript">function sayHi() { ... }       // correct
function sayHi { ... }         // wrong: SyntaxError
</code></pre>

    <p>Function declarations are <strong>hoisted</strong>, meaning JavaScript reads them before running any code. You can call them before they appear in the file:</p>
<pre class="language-javascript"><code class="language-javascript">greet("Os");                   // works! prints "Hello, Os"

function greet(name) {
  console.log("Hello, " + name);
}
</code></pre>
    <p>This works only for declarations, not for expressions. (More on that in the next lesson.)</p>

    <p>Declarations create a function name in the surrounding scope:</p>
<pre class="language-javascript"><code class="language-javascript">function greet() { ... }
console.log(greet);     // logs the function itself
console.log(greet());   // logs whatever greet returns
</code></pre>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-8-3-1-0': `
    <p>You need a way to create a named, reusable action in your code. Function declarations are the most direct way: one statement that creates a function and gives it a name in one step.</p>
    <p>Because they're hoisted, you don't have to worry about the order they appear in the file. You can call <code>greet()</code> at the top and define <code>greet</code> at the bottom — JavaScript handles it.</p>
  `,

  /* 1.1 Why use it */
  'topics-8-3-1-1': `
    <p>Use a function declaration when you want a clearly named function that can be called from anywhere in the same scope. It's the default form — reach for it unless you have a specific reason to use an expression or arrow function.</p>
<pre class="language-javascript"><code class="language-javascript">// Good fit for declaration: a named utility you'll use throughout the file
function formatPrice(price) {
  return "$" + price.toFixed(2);
}

function isValidEmail(email) {
  return email.includes("@") && email.length > 3;
}

function showError(message) {
  errorBox.textContent = message;
}
</code></pre>
    <p>Each one reads like its own little tool. The name appears in stack traces and error messages, which makes debugging easier.</p>
  `,

  /* 1.2 Where you use it */
  'topics-8-3-1-2': `
    <p>Function declarations are common at the top level of files, inside other functions, and as helpers throughout an app.</p>
<pre class="language-javascript"><code class="language-javascript">// Top-level utilities
function getCart()       { return JSON.parse(localStorage.getItem("cart")) || []; }
function saveCart(cart)  { localStorage.setItem("cart", JSON.stringify(cart)); }

// Event handlers
function handleClick(event) {
  event.preventDefault();
  console.log("clicked");
}
button.addEventListener("click", handleClick);

// Helpers inside other functions
function setupPage() {
  function attachListeners() {
    button.addEventListener("click", handleClick);
  }
  attachListeners();
}
</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-8-3-1-3': `
    <p>A function declaration is the long-form way of saying "make a function and name it." You write the word <code>function</code>, give it a name, and write what it does.</p>
    <p>Because JavaScript reads all declarations first before running any code, declared functions are available everywhere in their scope — even above the line where you wrote them. It's like JavaScript scans the file once to learn all the function names, then runs through the file to do the actual work.</p>
    <p>This is why declarations feel "stable" — they don't depend on where they appear in the file.</p>
  `,

  /* 1.4 Mental model */
  'topics-8-3-1-4': `
    <p>A function declaration is a name + steps, written as one self-contained statement.</p>
<pre class="language-javascript"><code class="language-javascript">function greet(name) {
  console.log("Hello, " + name);
}

//   name      parameters     body
//    ↓            ↓            ↓
// function  greet  (name)  { console.log(...) }
</code></pre>
    <p>Think of declarations as the "headlines" of your file. JavaScript reads all the headlines first, then runs the body of the program. By the time any code runs, every declared function is already defined and ready to call.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-8-3-1-5': `
<pre class="language-javascript"><code class="language-javascript">greet("Os");

function greet(name) {
  console.log("Hello, " + name);
}

// JavaScript is thinking:
// First pass (hoisting): scan the file, find function greet → register it before any code runs.
// Line 1: see greet("Os") → look up greet (already registered), call it with "Os" as name.
// Line 3: jump into the body — name is "Os", run the steps.
// Line 4: log "Hello, Os".
// Line 5: end of body, return to caller (no return value).
</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-8-3-2-0': `
    <p>If you get <code>TypeError: greet is not a function</code> on a declaration, the issue is almost always one of three things: the name is misspelled, the function isn't in scope, or you're shadowing it with a variable of the same name.</p>
<pre class="language-javascript"><code class="language-javascript">function greet() { console.log("hi"); }
const greet = "hello";
greet();
// wrong: TypeError — greet is now a string, not a function
// fix: don't reuse the same name for a variable
</code></pre>

    <p>If you get <code>ReferenceError: greet is not defined</code>, the function declaration is in a different scope (inside another function or block) than where you're calling it.</p>
  `,

  /* 2.1 The part that makes it click */
  'topics-8-3-2-1': `
    <p>A declaration is a complete, named statement — no <code>=</code>, no variable being assigned, just <code>function name() { ... }</code>.</p>
    <p>That single difference (no assignment) is what makes it hoisted. JavaScript can lift the whole thing to the top of its scope because there's no expression that needs to be evaluated first — the function and the name come into existence together as one unit.</p>
  `,

  /* 2.2 Common confusions */
  'topics-8-3-2-2': `
    <p><strong>Confusion: declaration vs expression</strong></p>
<pre class="language-javascript"><code class="language-javascript">function greet() { ... }              // declaration — name comes from "function NAME"
const greet = function() { ... };     // expression — name comes from the variable
const greet = () => { ... };          // arrow expression — same idea, shorter syntax
</code></pre>
    <p>Declarations are hoisted. Expressions and arrows are not — you can only call them after the line that creates them.</p>

    <p><strong>Confusion: hoisting</strong></p>
<pre class="language-javascript"><code class="language-javascript">greet();                       // works due to hoisting
function greet() { console.log("hi"); }

sayHi();                       // wrong: ReferenceError
const sayHi = function() { console.log("hi"); };
</code></pre>
    <p>Even though it's allowed, calling a function before its declaration appears in the file can be confusing to read. The convention is still to define before you call.</p>

    <p><strong>Confusion: declaration inside an <code>if</code></strong></p>
<pre class="language-javascript"><code class="language-javascript">if (condition) {
  function greet() { console.log("hi"); }
}
greet();
// behavior is inconsistent across browsers and strict mode
// fix: assign to a variable instead, or hoist the declaration to the top of the function
</code></pre>
    <p>Declarations work cleanly at the top level of a file or function. Putting them inside <code>if</code> blocks or loops is technically legal but unreliable.</p>
  `,

  /* 2.3 Common mistakes */
  'topics-8-3-2-3': `
<pre class="language-javascript"><code class="language-javascript">function 1stGreet() { ... }
// wrong: function names can't start with a number
// fix: rename to firstGreet or greetOne
</code></pre>

<pre class="language-javascript"><code class="language-javascript">function greet name() { ... }
// wrong: extra word — name should be inside parentheses as a parameter
// fix: function greet(name) { ... }
</code></pre>

<pre class="language-javascript"><code class="language-javascript">function greet => () { ... }
// wrong: mixing declaration syntax with arrow syntax
// fix: pick one — function greet() { ... } or const greet = () => { ... }
</code></pre>

<pre class="language-javascript"><code class="language-javascript">function greet { ... }
// wrong: missing parentheses — they're required even with no parameters
// fix: function greet() { ... }
</code></pre>

<pre class="language-javascript"><code class="language-javascript">function greet() { ... };
function greet() { ... };
// works, but the second one silently overwrites the first
// fix: don't reuse function names in the same scope
</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-8-3-3-0': `
<pre class="language-javascript"><code class="language-javascript">// No parameters, no return
function sayHi() {
  console.log("hi");
}

// One parameter, no return
function logName(name) {
  console.log(name);
}

// Multiple parameters, returns a value
function add(a, b) {
  return a + b;
}

// No parameters, returns a value
function getNow() {
  return Date.now();
}

// Default parameter (defaults to "friend" if no name passed)
function greet(name = "friend") {
  console.log("Hello, " + name);
}
greet();         // "Hello, friend"
greet("Os");     // "Hello, Os"
</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-8-3-3-1': `
    <p><strong>Example: utility helpers at the top of a file</strong></p>
<pre class="language-javascript"><code class="language-javascript">function $(selector)      { return document.querySelector(selector); }
function $$(selector)     { return document.querySelectorAll(selector); }
function on(el, ev, fn)   { el.addEventListener(ev, fn); }

// the rest of the file uses these throughout
on($("#submitBtn"), "click", handleSubmit);
</code></pre>

    <p><strong>Example: named event handler</strong></p>
<pre class="language-javascript"><code class="language-javascript">function handleSubmit(event) {
  event.preventDefault();
  const data = collectFormData();
  sendToServer(data);
}

form.addEventListener("submit", handleSubmit);
// the named function shows up in stack traces, easier to debug than an inline arrow
</code></pre>

    <p><strong>Example: declarations grouped at top of file</strong></p>
<pre class="language-javascript"><code class="language-javascript">// All declarations at the top — hoisting means order doesn't matter
function init()              { /* setup logic */ }
function loadProducts()      { /* fetch products */ }
function renderProducts(p)   { /* build the DOM */ }

// Main flow at the bottom
init();
loadProducts().then(renderProducts);
</code></pre>

    <p><strong>Example: factory-style helper</strong></p>
<pre class="language-javascript"><code class="language-javascript">function makeButton(label, onClick) {
  const btn = document.createElement("button");
  btn.textContent = label;
  btn.addEventListener("click", onClick);
  return btn;
}

const saveBtn = makeButton("Save", handleSave);
const cancelBtn = makeButton("Cancel", handleCancel);
document.body.append(saveBtn, cancelBtn);
</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-8-3-3-2': `
    <ul>
      <li><strong>Function expression</strong> → the alternative form, assigned to a variable</li>
      <li><strong>Arrow function</strong> → an even shorter expression syntax</li>
      <li><strong>Hoisting</strong> → why declarations work before the line they appear on</li>
      <li><strong>Scope</strong> → declarations create their name in the enclosing function or file</li>
      <li><strong>Naming</strong> → the name shows up in error messages and stack traces</li>
      <li><strong>Parameters</strong> → the input slots inside the parentheses</li>
      <li><strong>Return values</strong> → what the function hands back</li>
      <li><strong>Function body</strong> → the code inside the curly braces</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-8-3-3-3': `
    <ul>
      <li>Function expression</li>
      <li>Arrow function</li>
      <li>Hoisting</li>
      <li>Function name</li>
      <li>Function body</li>
      <li>Parameters and arguments</li>
      <li>Return values</li>
      <li>Scope</li>
    </ul>
  `,


  /* ===== Sub-lesson: 3.9.5 Functions → function expression =====
     Path: topics-8-4-{chunkIndex}-{pieceIndex}
  */

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-8-4-0-0': `
    <p>A function expression is a function that's created as a value and assigned to a variable, instead of being declared with the standard <code>function name() {}</code> syntax.</p>
    <p>You write <code>const greet = function() { ... }</code> — and now <code>greet</code> holds the function. You call it the same way: <code>greet()</code>.</p>
  `,

  /* 0.1 Syntax */
  'topics-8-4-0-1': `
<pre class="language-javascript"><code class="language-javascript">const greet = function(name) {
  console.log("Hello, " + name);
};

greet("Os");   // prints "Hello, Os"</code></pre>
    <p>The function on the right is the <em>value</em>. The variable on the left is the <em>name</em> you'll use to call it.</p>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-8-4-0-2': `
<pre class="language-javascript"><code class="language-javascript">const greet = function(name) {
  console.log("Hello, " + name);
};

// const greet  → variable that will hold the function
// =            → assignment — the function on the right gets stored in greet
// function     → keyword creating the function value
// (no name)    → the function itself has no name (anonymous)
// (name)       → the parameter list
// { ... }      → the function body
// ;            → semicolon — required because this is an assignment statement</code></pre>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-8-4-0-3': `
    <p>The <code>=</code> sign is what makes this an expression instead of a declaration:</p>
<pre class="language-javascript"><code class="language-javascript">function greet() { ... }              // declaration — no =
const greet = function() { ... };     // expression — has =</code></pre>

    <p>The function on the right doesn't need a name (it's anonymous). The variable name is what you use to call it:</p>
<pre class="language-javascript"><code class="language-javascript">const greet = function() { console.log("hi"); };
greet();    // call it through the variable</code></pre>

    <p>Function expressions are <strong>not hoisted</strong>. You can't call them before the line that creates them:</p>
<pre class="language-javascript"><code class="language-javascript">greet();                              // wrong: ReferenceError
const greet = function() { ... };

// vs declarations, which DO work:
sayHi();                              // works due to hoisting
function sayHi() { ... }</code></pre>

    <p>The semicolon at the end is required, because the whole line is one assignment statement:</p>
<pre class="language-javascript"><code class="language-javascript">const greet = function() {
  console.log("hi");
};   // ← semicolon belongs here

function greet() {
  console.log("hi");
}    // ← no semicolon needed (declaration)</code></pre>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-8-4-1-0': `
    <p>Sometimes you want to treat a function like any other value — store it in a variable, pass it as an argument, return it from another function. Function expressions make that natural, because the function literally <em>is</em> a value on the right-hand side of an <code>=</code>.</p>
    <p>They also let you control when a function becomes available. Because expressions aren't hoisted, the function only exists from that line forward — useful when you want predictable, top-down code flow.</p>
  `,

  /* 1.1 Why use it */
  'topics-8-4-1-1': `
    <p>Use a function expression when you want a function as a value: stored in a variable, passed to another function, or returned from one.</p>
<pre class="language-javascript"><code class="language-javascript">// Storing a function in a variable
const formatPrice = function(price) {
  return "$" + price.toFixed(2);
};

// Passing a function as an argument
button.addEventListener("click", function() {
  console.log("clicked");
});

// Returning a function from a function
function makeMultiplier(n) {
  return function(x) {
    return x * n;
  };
}
const double = makeMultiplier(2);
console.log(double(5));   // 10</code></pre>
    <p>Anywhere you'd use a value, you can use a function expression in its place.</p>
  `,

  /* 1.2 Where you use it */
  'topics-8-4-1-2': `
    <p>Function expressions show up everywhere functions are used as values — callbacks, event handlers, array methods, factory functions.</p>
<pre class="language-javascript"><code class="language-javascript">// As a callback for setTimeout
setTimeout(function() {
  console.log("3 seconds passed");
}, 3000);

// As a callback for an array method
const numbers = [1, 2, 3];
const doubled = numbers.map(function(n) {
  return n * 2;
});

// Returned from a factory
function createCounter() {
  let count = 0;
  return function() {
    count = count + 1;
    return count;
  };
}
const counter = createCounter();
counter();   // 1
counter();   // 2</code></pre>
    <p>In modern code, most of these spots use arrow functions instead — but the underlying idea is the same: a function as a value.</p>
  `,

  /* 1.3 Plain English explanation */
  'topics-8-4-1-3': `
    <p>A function expression treats a function the same way you'd treat a number or a string. You can put it in a variable. You can hand it to other code. You can build it on the fly when you need one.</p>
    <p>The difference from a declaration is mostly about <em>how</em> the function comes into existence. A declaration says "make a function with this name." An expression says "make a function value, and I'll decide what to do with it" — usually by assigning it to a variable.</p>
    <p>Both end up giving you something you can call. The path to get there is just different.</p>
  `,

  /* 1.4 Mental model */
  'topics-8-4-1-4': `
    <p>A function expression is a function being treated as a value, like any other.</p>
<pre class="language-javascript"><code class="language-javascript">const num   = 5;                              // value: a number
const text  = "hello";                        // value: a string
const greet = function() { console.log("hi"); }; // value: a function

// all three are stored in variables the same way</code></pre>
    <p>The function isn't special. It's just a value sitting on the right side of an <code>=</code>, like any other value. The variable is the handle you use to call it later.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-8-4-1-5': `
<pre class="language-javascript"><code class="language-javascript">const greet = function(name) {
  console.log("Hello, " + name);
};

greet("Os");

// JavaScript is thinking:
// Line 1: see const greet = function(...) → create the function value, then assign it to greet.
// Line 2: still part of the function value — store this step as part of the body.
// Line 3: end of function value, end of assignment.
// Line 5: see greet("Os") → look up greet, find the function, call it with "Os" as name, run the body, prints "Hello, Os".</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-8-4-2-0': `
    <p>The most common bug with function expressions is <strong>calling them before they're defined</strong>. Because they're not hoisted, calling them too early throws an error.</p>
<pre class="language-javascript"><code class="language-javascript">greet("Os");
const greet = function(name) {
  console.log("Hello, " + name);
};
// wrong: ReferenceError — greet doesn't exist yet on line 1
// fix: move the call below the assignment</code></pre>

    <p>If you switch from a declaration to an expression and suddenly things break, this is usually why. Declarations were silently saving you from the ordering problem.</p>
  `,

  /* 2.1 The part that makes it click */
  'topics-8-4-2-1': `
    <p>A function expression is just <strong>a function value being assigned to a variable</strong>. Nothing more.</p>
    <p>The <code>function() {}</code> on the right is the function. The <code>const greet =</code> on the left is the storage. They're separate operations: create the value, then store it.</p>
    <p>Once you see it that way, everything follows. The reason it isn't hoisted: the assignment hasn't run yet. The reason the semicolon is needed: it's an assignment statement. The reason you can pass functions around: they're values.</p>
  `,

  /* 2.2 Common confusions */
  'topics-8-4-2-2': `
    <p><strong>Confusion: declaration vs expression</strong></p>
<pre class="language-javascript"><code class="language-javascript">function greet() { ... }              // declaration
const greet = function() { ... };     // expression

greet();
// both are called the same way once they exist</code></pre>
    <p>The difference is how they're created and when they're available, not how you call them.</p>

    <p><strong>Confusion: anonymous vs named function expression</strong></p>
<pre class="language-javascript"><code class="language-javascript">const greet = function() { ... };           // anonymous expression
const greet = function greetFn() { ... };    // named expression

// the inner name "greetFn" is mostly useful for debugging stack traces
// in practice, the anonymous form is far more common</code></pre>

    <p><strong>Confusion: expression vs arrow function</strong></p>
<pre class="language-javascript"><code class="language-javascript">const greet = function(name) {
  return "Hello, " + name;
};

const greet = (name) => {
  return "Hello, " + name;
};
// same idea — both create a function and assign it to a variable
// arrow functions are a shorter syntax with a few behavioral differences</code></pre>
  `,

  /* 2.3 Common mistakes */
  'topics-8-4-2-3': `
<pre class="language-javascript"><code class="language-javascript">const greet = function() {
  console.log("hi");
}
greet();
// works, but missing the semicolon after the closing brace
// fix: add ; after } since this is an assignment</code></pre>

<pre class="language-javascript"><code class="language-javascript">greet();
const greet = function() { console.log("hi"); };
// wrong: ReferenceError — expression not hoisted, called before defined
// fix: define before calling</code></pre>

<pre class="language-javascript"><code class="language-javascript">const greet = function greet() { ... };
greet();
// works, but reusing the same name for the variable and the inner function name is confusing
// fix: const greet = function() { ... };  // anonymous</code></pre>

<pre class="language-javascript"><code class="language-javascript">const greet = function() { return "hi"; }
const result = greet;
// wrong: result holds the function itself, not "hi"
// fix: const result = greet();  // call it with ()</code></pre>

<pre class="language-javascript"><code class="language-javascript">let greet = function() { console.log("v1"); };
greet = function() { console.log("v2"); };
greet();   // "v2"
// works — but reassigning a function variable is rare and easy to lose track of
// fix: usually use const for function expressions</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-8-4-3-0': `
<pre class="language-javascript"><code class="language-javascript">// Anonymous expression assigned to a variable
const sayHi = function() {
  console.log("hi");
};
sayHi();

// Expression with parameters and a return
const add = function(a, b) {
  return a + b;
};
console.log(add(2, 3));   // 5

// Expression passed directly as a callback
setTimeout(function() {
  console.log("done");
}, 1000);

// Expression returned from another function
function makeGreeter(greeting) {
  return function(name) {
    return greeting + ", " + name;
  };
}
const hello = makeGreeter("Hello");
console.log(hello("Os"));   // "Hello, Os"</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-8-4-3-1': `
    <p><strong>Example: inline event handler</strong></p>
<pre class="language-javascript"><code class="language-javascript">button.addEventListener("click", function(event) {
  event.preventDefault();
  console.log("clicked");
});
// the function is created right where it's needed, no separate declaration</code></pre>

    <p><strong>Example: array method callback</strong></p>
<pre class="language-javascript"><code class="language-javascript">const prices = [10, 20, 30];
const withTax = prices.map(function(price) {
  return price * 1.08;
});
// each price is passed into the function, the result becomes the new array</code></pre>

    <p><strong>Example: assigning a function based on a condition</strong></p>
<pre class="language-javascript"><code class="language-javascript">const log = isDevelopment
  ? function(msg) { console.log("[DEV]", msg); }
  : function(msg) { /* silent in production */ };

log("user logged in");
// the variable holds whichever function fits the environment</code></pre>

    <p><strong>Example: a factory that returns a function</strong></p>
<pre class="language-javascript"><code class="language-javascript">function createValidator(minLength) {
  return function(value) {
    return value.length >= minLength;
  };
}

const isLongEnough = createValidator(8);
console.log(isLongEnough("hello"));      // false
console.log(isLongEnough("hello world")); // true</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-8-4-3-2': `
    <ul>
      <li><strong>Function declaration</strong> → the alternative form, with hoisting</li>
      <li><strong>Arrow function</strong> → a shorter expression syntax</li>
      <li><strong>Hoisting</strong> → why expressions can't be called before they're defined</li>
      <li><strong>Variables</strong> → expressions are stored in variables like any other value</li>
      <li><strong>Callbacks</strong> → most callbacks are function expressions or arrows</li>
      <li><strong>Higher-order functions</strong> → functions that take or return other functions</li>
      <li><strong>Closures</strong> → returned function expressions often "remember" outer variables</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-8-4-3-3': `
    <ul>
      <li>Function declaration</li>
      <li>Arrow function</li>
      <li>Anonymous functions</li>
      <li>Named function expressions</li>
      <li>Hoisting</li>
      <li>Callback functions</li>
      <li>Higher-order functions</li>
      <li>Closures</li>
    </ul>
  `,


  /* ===== Sub-lesson: 3.9.6 Functions → arrow function =====
     Path: topics-8-5-{chunkIndex}-{pieceIndex}
  */

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-8-5-0-0': `
    <p>An arrow function is a shorter way to write a function expression. Instead of <code>function() {}</code>, you write <code>() => {}</code>.</p>
    <p>It's the modern syntax most JavaScript code uses today, especially for callbacks and short helpers. The arrow (<code>=&gt;</code>) is what gives it the name.</p>
  `,

  /* 0.1 Syntax */
  'topics-8-5-0-1': `
<pre class="language-javascript"><code class="language-javascript">const greet = (name) => {
  console.log("Hello, " + name);
};

greet("Os");   // prints "Hello, Os"</code></pre>
    <p>Same idea as a function expression — a function value assigned to a variable. The <code>function</code> keyword is gone, replaced by the arrow.</p>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-8-5-0-2': `
<pre class="language-javascript"><code class="language-javascript">const greet = (name) => {
  console.log("Hello, " + name);
};

// const greet  → variable that will hold the function
// =            → assignment
// (name)       → the parameter list
// =>           → the arrow — replaces the "function" keyword
// { ... }      → the function body
// ;            → semicolon — required because this is an assignment statement</code></pre>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-8-5-0-3': `
    <p>If there's exactly one parameter, the parentheses are optional:</p>
<pre class="language-javascript"><code class="language-javascript">const greet = (name) => { ... };    // with parens
const greet = name => { ... };       // without parens — same thing

// but with zero or two+ parameters, parens are required:
const sayHi = () => { ... };          // empty list — parens required
const add = (a, b) => { ... };        // two parameters — parens required</code></pre>

    <p>If the body is a single expression, you can drop the braces and the <code>return</code> keyword — the value is returned automatically:</p>
<pre class="language-javascript"><code class="language-javascript">const double = (n) => n * 2;            // implicit return
const double = (n) => { return n * 2; }; // same thing, longer form

console.log(double(5));   // 10</code></pre>

    <p>This shortcut is called <strong>implicit return</strong>. It only works when the body is one expression.</p>

    <p>Arrow functions are <strong>not hoisted</strong>, just like regular function expressions:</p>
<pre class="language-javascript"><code class="language-javascript">greet("Os");                          // wrong: ReferenceError
const greet = (name) => { ... };

// fix: define before calling</code></pre>

    <p>To return an object directly, wrap it in parentheses so JavaScript doesn't read the <code>{}</code> as a function body:</p>
<pre class="language-javascript"><code class="language-javascript">const makeUser = (name) => ({ name: name });   // correct: returns an object
const makeUser = (name) => { name: name };     // wrong: reads as a body, returns undefined</code></pre>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-8-5-1-0': `
    <p>Function expressions work, but they're verbose — especially as one-line callbacks. Writing <code>function(item) { return item.price; }</code> over and over gets noisy.</p>
    <p>Arrow functions trim away the parts that don't add meaning: the <code>function</code> keyword, the braces (when not needed), and the <code>return</code> keyword (when the body is one expression). What's left reads almost like a math formula: <code>item =&gt; item.price</code>.</p>
  `,

  /* 1.1 Why use it */
  'topics-8-5-1-1': `
    <p>Use an arrow function when you want a short, lightweight function — especially for callbacks and array methods. The shorter syntax makes the surrounding code easier to read.</p>
<pre class="language-javascript"><code class="language-javascript">const prices = [10, 20, 30];

// Function expression — works, but noisy
const doubled1 = prices.map(function(p) { return p * 2; });

// Arrow function — cleaner, same result
const doubled2 = prices.map((p) => p * 2);

// Arrow function with implicit return and no parens
const doubled3 = prices.map(p => p * 2);</code></pre>
    <p>For one-liners like this, arrows are the standard choice in modern JavaScript.</p>
  `,

  /* 1.2 Where you use it */
  'topics-8-5-1-2': `
    <p>Arrow functions are everywhere callbacks live: array methods, event handlers, promises, timers, and short utility functions.</p>
<pre class="language-javascript"><code class="language-javascript">// Array methods
const totals = items.map(item => item.price * item.quantity);
const inStock = products.filter(p => p.stock > 0);
const total = numbers.reduce((sum, n) => sum + n, 0);

// Event handlers
button.addEventListener("click", () => {
  console.log("clicked");
});

// Promises
fetch("/api/data")
  .then(response => response.json())
  .then(data => console.log(data));

// Timers
setTimeout(() => console.log("done"), 1000);

// Short utilities
const isEven = n => n % 2 === 0;
const formatPrice = price => "$" + price.toFixed(2);</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-8-5-1-3': `
    <p>An arrow function is the same idea as a regular function — inputs come in, work happens, a value comes out — just written with less ceremony.</p>
    <p>The arrow itself (<code>=&gt;</code>) is the visual cue. Anything to the left of the arrow is the input. Anything to the right is the work. If the work is a single expression, that expression is also the output.</p>
    <p>Most arrow functions you'll write are tiny — one line, one job, used right where they're created. That's exactly what they're shaped for.</p>
  `,

  /* 1.4 Mental model */
  'topics-8-5-1-4': `
    <p>An arrow function is "input arrow output" — read it left to right.</p>
<pre class="language-javascript"><code class="language-javascript">const double = n => n * 2;

//   input    →    output
//     ↓             ↓
//     n     =>    n * 2</code></pre>
    <p>For longer functions, the body in <code>{ ... }</code> is the work, and you use <code>return</code> like normal. But the short form — <code>input =&gt; output</code> — is what makes arrows feel different from regular functions.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-8-5-1-5': `
<pre class="language-javascript"><code class="language-javascript">const double = n => n * 2;

const result = double(5);
console.log(result);

// JavaScript is thinking:
// Line 1: see const double = (...) => → create the arrow function value, assign it to double.
// Line 3: see double(5) → look up double, call it with 5 as n, run the body, get 10 back, store it in result.
// Line 4: look up result → 10 → log 10.</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-8-5-2-0': `
    <p>The most common arrow function bug is forgetting that <strong>implicit return only works without braces</strong>. If you add braces, you also need <code>return</code>.</p>
<pre class="language-javascript"><code class="language-javascript">const double = n => n * 2;            // implicit return — works
const double = n => { n * 2; };       // wrong: returns undefined (no return statement)
const double = n => { return n * 2; };// works — explicit return

// rule: if you use { }, you must use return</code></pre>

    <p>The other common bug is returning an object literal without parens around it:</p>
<pre class="language-javascript"><code class="language-javascript">const makeUser = name => { name: name };    // wrong: returns undefined
const makeUser = name => ({ name: name });   // correct: returns the object

// the parens tell JS: this is an object, not a function body</code></pre>
  `,

  /* 2.1 The part that makes it click */
  'topics-8-5-2-1': `
    <p>An arrow function is a function expression with the boilerplate stripped away. <code>function</code> becomes <code>=&gt;</code>. Single-expression bodies skip <code>{}</code> and <code>return</code>. Single parameters skip the parens.</p>
    <p>Everything else — calling it, passing it around, storing it in a variable — works exactly the same as a regular function expression.</p>
    <p>Arrows aren't a new <em>kind</em> of function. They're a shorter way to write one.</p>
  `,

  /* 2.2 Common confusions */
  'topics-8-5-2-2': `
    <p><strong>Confusion: when do I need parens around the parameter?</strong></p>
<pre class="language-javascript"><code class="language-javascript">const a = ()         => "hi";          // no parameters — parens required
const b = name       => "hi " + name;   // one parameter — parens optional
const c = (name)     => "hi " + name;   // one parameter with parens — also fine
const d = (a, b)     => a + b;          // two parameters — parens required</code></pre>

    <p><strong>Confusion: implicit return vs explicit return</strong></p>
<pre class="language-javascript"><code class="language-javascript">const double = n => n * 2;             // no braces → returns the expression
const double = n => { return n * 2; }; // with braces → must use return
const double = n => { n * 2; };        // with braces, no return → returns undefined</code></pre>
    <p>Braces switch off implicit return. The moment you add <code>{}</code>, you need <code>return</code> to send a value back.</p>

    <p><strong>Confusion: arrow function vs regular function</strong></p>
<pre class="language-javascript"><code class="language-javascript">// For most everyday uses, these are interchangeable:
const add1 = function(a, b) { return a + b; };
const add2 = (a, b) => a + b;

// They behave differently around 'this', but that's an advanced topic
// covered in its own lesson. For now: arrows are a shorter syntax.</code></pre>

    <p><strong>Confusion: returning an object</strong></p>
<pre class="language-javascript"><code class="language-javascript">const wrong = name => { name: name };    // wrong: { } reads as body, returns undefined
const right = name => ({ name: name });   // correct: ( ) wraps the object</code></pre>
  `,

  /* 2.3 Common mistakes */
  'topics-8-5-2-3': `
<pre class="language-javascript"><code class="language-javascript">const double = n => { n * 2; };
console.log(double(5));   // undefined
// wrong: braces with no return — function returns undefined
// fix: drop the braces, OR add return inside them</code></pre>

<pre class="language-javascript"><code class="language-javascript">const makeUser = name => { name: name };
// wrong: { } is read as a function body, name: name is a label statement
// fix: const makeUser = name => ({ name: name });</code></pre>

<pre class="language-javascript"><code class="language-javascript">const add = a, b => a + b;
// wrong: missing parens around two parameters
// fix: const add = (a, b) => a + b;</code></pre>

<pre class="language-javascript"><code class="language-javascript">double(5);
const double = n => n * 2;
// wrong: ReferenceError — arrows aren't hoisted
// fix: define before calling</code></pre>

<pre class="language-javascript"><code class="language-javascript">const greet = name => 
console.log("hi, " + name);
greet("Os");
// works, but reads as: greet returns the result of console.log (which is undefined)
// fix: if you only want the side effect, that's fine
//      if you want the function to return a value, that's not what this does</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-8-5-3-0': `
<pre class="language-javascript"><code class="language-javascript">// No parameters
const sayHi = () => console.log("hi");
sayHi();

// One parameter, implicit return, 
// NOTE: Single parameter do not require ()
const double = n => n * 2;
console.log(double(5));   // 10

// Multiple parameters
const add = (a, b) => a + b;
console.log(add(2, 3));   // 5

// Multi-line body — needs braces and return
const greet = (name) => {
  const message = "Hello, " + name;
  return message;
};
console.log(greet("Os"));   // "Hello, Os"

// Returning an object — wrap in parens
const makeUser = (name, age) => ({ name: name, age: age });
console.log(makeUser("Os", 30));   // { name: "Os", age: 30 }</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-8-5-3-1': `
    <p><strong>Example: array methods</strong></p>
<pre class="language-javascript"><code class="language-javascript">const products = [
  { name: "Hat",   price: 20 },
  { name: "Shirt", price: 30 },
  { name: "Shoes", price: 80 },
];

const names    = products.map(p => p.name);
const cheap    = products.filter(p => p.price < 50);
const total    = products.reduce((sum, p) => sum + p.price, 0);
// each callback is a tiny arrow function — perfect fit for one-liners</code></pre>

    <p><strong>Example: event handler</strong></p>
<pre class="language-javascript"><code class="language-javascript">button.addEventListener("click", () => {
  console.log("clicked");
  cartCount = cartCount + 1;
});</code></pre>

    <p><strong>Example: chaining promises</strong></p>
<pre class="language-javascript"><code class="language-javascript">fetch("/api/users")
  .then(response => response.json())
  .then(users => users.filter(u => u.active))
  .then(activeUsers => console.log(activeUsers));
// each step is a short arrow — keeps the chain readable</code></pre>

    <p><strong>Example: tiny named utilities</strong></p>
<pre class="language-javascript"><code class="language-javascript">const isAdult       = age => age >= 18;
const formatPrice   = price => "$" + price.toFixed(2);
const capitalize    = str => str[0].toUpperCase() + str.slice(1);
const isEmptyString = str => str.trim().length === 0;
// each helper is a single line that does one job</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-8-5-3-2': `
    <ul>
      <li><strong>Function expression</strong> → arrows are a shorter version of the same idea</li>
      <li><strong>Implicit return</strong> → single-expression bodies return automatically</li>
      <li><strong>Callback functions</strong> → arrows are the most common callback syntax</li>
      <li><strong>Array methods</strong> → <code>map</code>, <code>filter</code>, <code>reduce</code> are arrow-heavy</li>
      <li><strong>Promises</strong> → <code>.then()</code> chains usually use arrows</li>
      <li><strong>Hoisting</strong> → arrows aren't hoisted, just like regular expressions</li>
      <li><strong>this binding</strong> → arrows handle <code>this</code> differently (advanced)</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-8-5-3-3': `
    <ul>
      <li>Function expression</li>
      <li>Function declaration</li>
      <li>Implicit return</li>
      <li>Returning an object literal</li>
      <li>Callback functions</li>
      <li>Array methods (<code>map</code>, <code>filter</code>, <code>reduce</code>)</li>
      <li>Hoisting</li>
      <li>Arrow functions and <code>this</code></li>
    </ul>
  `,
  'topics-8-5-3-3': `
    <ul>
      <li>Function expression</li>
      <li>Function declaration</li>
      <li>Implicit return</li>
      <li>Returning an object literal</li>
      <li>Callback functions</li>
      <li>Array methods (<code>map</code>, <code>filter</code>, <code>reduce</code>)</li>
      <li>Hoisting</li>
      <li>Arrow functions and <code>this</code></li>
    </ul>
  `,


  /* ========================================================= 
   Sub-lesson: 3.9.7 Functions → function name
 =======================================================*/

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-8-6-0-0': `
    <p>The function name is the label you use to call the function. It's how the rest of your code refers to that piece of work.</p>
    <p>Whether you write a declaration or an expression, every callable function has a name attached to it somewhere — either after the <code>function</code> keyword, or as the variable holding the function value.</p>
  `,

  /* 0.1 Syntax */
  'topics-8-6-0-1': `
<pre class="language-javascript"><code class="language-javascript">function greet() { ... }              // name comes after "function" → greet
const greet = function() { ... };     // name comes from the variable → greet
const greet = () => { ... };          // name comes from the variable → greet

greet();   // all three are called the same way</code></pre>
    <p>The name is what you write to <em>run</em> the function. Without a name, you couldn't call it from somewhere else in your code.</p>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-8-6-0-2': `
<pre class="language-javascript"><code class="language-javascript">function calculateTotal(price, tax) {
  return price + (price * tax);
}

calculateTotal(50, 0.08);

// calculateTotal      → the function's name
// (price, tax)        → its parameters (not part of the name)
// { ... }             → its body (not part of the name)
// calculateTotal(...) → using the name to call the function</code></pre>
    <p>The name and the function are two separate things. The name is just a label pointing at the function value.</p>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-8-6-0-3': `
    <p>Function names follow the same rules as variable names:</p>
<pre class="language-javascript"><code class="language-javascript">function greet()      { ... }    // correct: starts with a letter
function _helper()    { ... }    // correct: starts with underscore
function $(selector)  { ... }    // correct: starts with $
function 1stGreet()   { ... }    // wrong: can't start with a number
function my-func()    { ... }    // wrong: hyphens not allowed
function function()   { ... }    // wrong: "function" is a reserved keyword</code></pre>

    <p>Names are case-sensitive:</p>
<pre class="language-javascript"><code class="language-javascript">function greet() { console.log("hi"); }
Greet();    // wrong: ReferenceError — Greet is not the same as greet
greet();    // correct</code></pre>

    <p>Anonymous functions have no name of their own — they get one only by being assigned:</p>
<pre class="language-javascript"><code class="language-javascript">const greet = function() { ... };   // function value has no inner name
                                      // but greet (the variable) is what you call

setTimeout(function() { ... }, 1000); // truly nameless — passed inline, never reused</code></pre>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-8-6-1-0': `
    <p>Code needs a way to refer back to a function after it's defined. Without a name, the function would exist for one moment and then be lost — there'd be no way to say "run that work again."</p>
    <p>The name is the handle. Once you have a name, you can call the function from anywhere in scope, pass it to other functions, or hook it up as an event handler.</p>
  `,

  /* 1.1 Why use it */
  'topics-8-6-1-1': `
    <p>A good function name tells you what the function does without having to read its body. The name is the first piece of documentation anyone reads.</p>
<pre class="language-javascript"><code class="language-javascript">// Bad name — tells you nothing
function doIt(user) { ... }

// Good name — describes the action
function sendWelcomeEmail(user) { ... }

// Bad name — too generic
function process(data) { ... }

// Good name — specific to the job
function validateOrderData(data) { ... }</code></pre>
    <p>Names are also what show up in error messages and stack traces. A clear name makes debugging much easier — "Error in <code>sendWelcomeEmail</code>" is a lot more useful than "Error in <code>doIt</code>".</p>
  `,

  /* 1.2 Where you use it */
  'topics-8-6-1-2': `
    <p>Function names appear everywhere a function is created, called, or referenced.</p>
<pre class="language-javascript"><code class="language-javascript">// At creation
function calculateTotal(price, tax) { ... }

// When calling
calculateTotal(50, 0.08);

// When passing as a value
button.addEventListener("click", handleClick);

// When checking what a function is
console.log(calculateTotal.name);   // "calculateTotal"

// In error messages and stack traces
// "Uncaught TypeError in calculateTotal at line 12"</code></pre>
    <p>The name follows the function around. Even tools like the browser's debugger use it to label functions in the call stack.</p>
  `,

  /* 1.3 Plain English explanation */
  'topics-8-6-1-3': `
    <p>The function name is like the title of a recipe. The recipe contains all the steps, but the title is how you find it, share it, and refer to it.</p>
    <p>If you wrote a recipe with no title, you'd still have a recipe — but no one could ask for it by name. Same with a function. Without a name, the work exists, but you can't call on it later.</p>
    <p>A good function name is short, descriptive, and starts with a verb. It tells anyone reading the code what kind of work happens when this function runs.</p>
  `,

  /* 1.4 Mental model */
  'topics-8-6-1-4': `
    <p>The function name is a label pointing at the function. The function is the thing that actually does the work; the name is just how you reach it.</p>
<pre class="language-javascript"><code class="language-javascript">function greet() {
  console.log("Hello");
}

// "greet"  →  [the function: console.log("Hello")]
//
// the name on the left is just a pointer
// the actual work lives on the right</code></pre>
    <p>You can have multiple names pointing at the same function:</p>
<pre class="language-javascript"><code class="language-javascript">function greet() { console.log("hi"); }
const sayHello = greet;   // sayHello now points at the same function

greet();      // "hi"
sayHello();   // "hi" — same function, different name</code></pre>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-8-6-1-5': `
<pre class="language-javascript"><code class="language-javascript">function double(n) {
  return n * 2;
}

const result = double(5);

// JavaScript is thinking:
// Line 1: see function double → register the name "double" pointing at this function value.
// Line 2: read the body — store it as part of the function.
// Line 3: end of function definition.
// Line 5: see double(5) → look up the name "double", find the function it points at, call it with 5 as n, run the body, get 10 back, store it in result.</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-8-6-2-0': `
    <p>If you get <code>ReferenceError: someName is not defined</code>, the function name doesn't exist in this scope — it's misspelled, in a different file, or in a different function.</p>
<pre class="language-javascript"><code class="language-javascript">function calculateTotal() { ... }
calclateTotal();
// wrong: ReferenceError — typo in the name
// fix: spell it the same as the definition</code></pre>

    <p>If you get <code>TypeError: someName is not a function</code>, the name exists but it points at something that isn't a function — usually because a variable with the same name overwrote it.</p>
<pre class="language-javascript"><code class="language-javascript">function greet() { console.log("hi"); }
const greet = "hello";
greet();
// wrong: TypeError — greet is now a string
// fix: don't reuse function names as variable names</code></pre>
  `,

  /* 2.1 The part that makes it click */
  'topics-8-6-2-1': `
    <p>The function name is <strong>not the function itself</strong>. The name is just a pointer.</p>
    <p>The function is the value — the steps, the parameters, the body. The name is a label that lets you find the value later. Two names can point at the same function. The same name can be reassigned to point at something else.</p>
    <p>Once you separate "the work" from "the label," function expressions and arrow functions stop feeling weird — they're just labels (variables) pointing at function values.</p>
  `,

  /* 2.2 Common confusions */
  'topics-8-6-2-2': `
    <p><strong>Confusion: name vs body</strong></p>
<pre class="language-javascript"><code class="language-javascript">function greet() {            // greet is the name
  console.log("Hello");       // this line is the body, NOT the name
}

console.log(greet);           // logs the entire function (name + body)
console.log(greet.name);      // logs just "greet"</code></pre>
    <p>The name is the label. The body is the work. They're separate.</p>

    <p><strong>Confusion: declaration name vs variable name</strong></p>
<pre class="language-javascript"><code class="language-javascript">function greet() { ... }              // name is "greet" (from declaration)
const greet = function() { ... };     // name is "greet" (from variable)
const greet = function inner() { ... }; // variable is "greet", inner name is "inner"

greet();    // works
inner();    // wrong: "inner" only exists inside the function itself</code></pre>

    <p><strong>Confusion: anonymous functions</strong></p>
<pre class="language-javascript"><code class="language-javascript">setTimeout(function() { ... }, 1000);
// the function itself has no name
// but JS isn't bothered — it runs once and is gone

const handler = function() { ... };
// the function has no inner name, but the variable "handler" gives it a label</code></pre>

    <p><strong>Confusion: calling vs referencing</strong></p>
<pre class="language-javascript"><code class="language-javascript">function greet() { return "hi"; }

console.log(greet);     // logs the function (uses the name to find it)
console.log(greet());   // logs "hi" (uses the name to call it)
button.addEventListener("click", greet);    // passes the function (no parens — don't call yet)
button.addEventListener("click", greet());  // wrong: calls greet immediately, passes "hi"</code></pre>
    <p>The name alone <em>refers</em>. The name with <code>()</code> <em>runs</em>.</p>
  `,

  /* 2.3 Common mistakes */
  'topics-8-6-2-3': `
<pre class="language-javascript"><code class="language-javascript">function 1stTotal() { ... }
// wrong: can't start a name with a number
// fix: rename to firstTotal or totalOne</code></pre>

<pre class="language-javascript"><code class="language-javascript">function my-func() { ... }
// wrong: hyphens aren't allowed in function names
// fix: use camelCase → myFunc</code></pre>

<pre class="language-javascript"><code class="language-javascript">function function() { ... }
// wrong: "function" is a reserved keyword
// fix: pick a descriptive name → runFunction, executeStep</code></pre>

<pre class="language-javascript"><code class="language-javascript">function doStuff() { ... }
function process() { ... }
function thing() { ... }
// works, but vague names tell you nothing about what they do
// fix: name the action → sendEmail, validateForm, formatPrice</code></pre>

<pre class="language-javascript"><code class="language-javascript">function calculateOrderTotalIncludingTaxAndShippingAndDiscounts() { ... }
// works, but unreadable
// fix: shorter name, let the function do less → calculateOrderTotal</code></pre>

<pre class="language-javascript"><code class="language-javascript">function User() { ... }
function user() { ... }
// works in JS (case-sensitive), but easy to misread and confuse
// fix: pick distinct names</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-8-6-3-0': `
<pre class="language-javascript"><code class="language-javascript">// Verb-based names — describe an action
function sendEmail(to, subject) { ... }
function validateForm() { ... }
function calculateTotal(items) { ... }

// "is" / "has" prefix — for functions that return true/false
function isLoggedIn(user) { return user.token !== null; }
function hasPermission(user, action) { ... }

// "get" prefix — for retrieving values
function getCart() { return JSON.parse(localStorage.getItem("cart")); }
function getCurrentUser() { ... }

// "handle" prefix — for event handlers
function handleClick(event) { ... }
function handleSubmit(event) { ... }

// short helpers — fine when the meaning is obvious in context
function $(selector) { return document.querySelector(selector); }</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-8-6-3-1': `
    <p><strong>Example: name shows up in stack traces</strong></p>
<pre class="language-javascript"><code class="language-javascript">function loadUserProfile(userId) {
  return fetch("/api/users/" + userId).then(r => r.json());
}

loadUserProfile(123);
// if this throws, the error says "in loadUserProfile" — easy to find
// vs an anonymous arrow, where the trace might just say "anonymous"</code></pre>

    <p><strong>Example: passing a named function as a handler</strong></p>
<pre class="language-javascript"><code class="language-javascript">function handleAddToCart(event) {
  cartCount = cartCount + 1;
  cartBadge.textContent = cartCount;
}

addBtn.addEventListener("click", handleAddToCart);
// the name handleAddToCart describes what the click does
// also: the same handler can be removed later by name</code></pre>

    <p><strong>Example: same function, multiple names</strong></p>
<pre class="language-javascript"><code class="language-javascript">function showError(message) { ... }

const reportProblem = showError;   // alias — same function, different name

showError("Network failed");      // works
reportProblem("Network failed");  // also works — both call the same function</code></pre>

    <p><strong>Example: <code>.name</code> property</strong></p>
<pre class="language-javascript"><code class="language-javascript">function greet() { ... }
console.log(greet.name);          // "greet"

const sayHi = function() { ... };
console.log(sayHi.name);          // "sayHi" (taken from the variable)

const arrow = () => { ... };
console.log(arrow.name);          // "arrow" (also from the variable)
// useful when debugging or logging which function ran</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-8-6-3-2': `
    <ul>
      <li><strong>Function declaration</strong> → name comes after the <code>function</code> keyword</li>
      <li><strong>Function expression</strong> → name comes from the variable holding the function</li>
      <li><strong>Arrow function</strong> → also gets its name from the variable</li>
      <li><strong>Variables</strong> → function names follow the same naming rules as variables</li>
      <li><strong>camelCase</strong> → the standard convention for function names</li>
      <li><strong>Reserved keywords</strong> → words like <code>function</code>, <code>return</code>, <code>if</code> can't be names</li>
      <li><strong>Stack traces</strong> → function names appear in error messages</li>
      <li><strong>Naming conventions</strong> → start with a verb to describe the action</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-8-6-3-3': `
    <ul>
      <li>Function declaration</li>
      <li>Function expression</li>
      <li>Arrow function</li>
      <li>Variable naming rules</li>
      <li>camelCase</li>
      <li>Reserved keywords</li>
      <li>Anonymous functions</li>
      <li>Function naming conventions (verbs, "is", "get", "handle")</li>
    </ul>
  `,


  /* ========================================================= 
   Sub-lesson: 3.9.8 Functions → function body
 =======================================================*/

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-8-7-0-0': `
    <p>The function body is the code inside the curly braces — the actual work the function does when you call it.</p>
    <p>The name and parameters tell you <em>what</em> the function is. The body tells you <em>how</em> it does its job. Everything between the opening <code>{</code> and the closing <code>}</code> is the body.</p>
  `,

  /* 0.1 Syntax */
  'topics-8-7-0-1': `
<pre class="language-javascript"><code class="language-javascript">function greet(name) {
  const message = "Hello, " + name;
  console.log(message);
  return message;
}

// everything between { and } is the body</code></pre>
    <p>The body can be one line or hundreds. JavaScript runs the lines in order from top to bottom, every time the function is called.</p>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-8-7-0-2': `
<pre class="language-javascript"><code class="language-javascript">function calculateTotal(price, tax) {
  const taxAmount = price * tax;
  const total = price + taxAmount;
  return total;
}

// {                  → body starts here
// const taxAmount    → first step (declares a variable)
// const total        → second step (uses the previous one)
// return total       → final step (sends the value back)
// }                  → body ends here</code></pre>
    <p>Inside the body, you write code like you would anywhere else — declaring variables, calling other functions, using <code>if</code> statements, looping, and so on. The body is just normal JavaScript.</p>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-8-7-0-3': `
    <p>The braces are required for a function body, even if it's empty:</p>
<pre class="language-javascript"><code class="language-javascript">function doNothing() {}      // correct: empty body, but braces are still there
function doNothing() return; // wrong: SyntaxError</code></pre>

    <p>Code inside the body runs only when the function is called, not when it's defined:</p>
<pre class="language-javascript"><code class="language-javascript">function greet() {
  console.log("Hello");
}
// nothing has been logged yet — the body hasn't run

greet();
// now the body runs → "Hello"</code></pre>

    <p>Variables declared in the body only exist inside it:</p>
<pre class="language-javascript"><code class="language-javascript">function greet() {
  const message = "Hello";
  console.log(message);   // works — message exists here
}

console.log(message);     // wrong: ReferenceError — message doesn't exist out here</code></pre>

    <p>Arrow functions can skip the braces if the body is one expression:</p>
<pre class="language-javascript"><code class="language-javascript">const double = (n) => { return n * 2; };  // full body with braces
const double = (n) => n * 2;                // implicit return — no braces, no return needed</code></pre>
    <p>For declarations and regular function expressions, the braces are always required.</p>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-8-7-1-0': `
    <p>Functions need a clear boundary between "what's part of this function" and "what isn't." The curly braces draw that line.</p>
    <p>Everything inside the braces is the function's work. Everything outside is somewhere else — another function, the top of the file, a different scope. Without that boundary, JavaScript wouldn't know where the function's logic ended.</p>
  `,

  /* 1.1 Why use it */
  'topics-8-7-1-1': `
    <p>The body is where the actual logic lives. A clear, focused body — one that does one job well — makes the function easy to read and reuse.</p>
<pre class="language-javascript"><code class="language-javascript">// Body does one clear job
function formatPrice(price) {
  return "$" + price.toFixed(2);
}

// Body does too many things — harder to name, test, and reuse
function handleEverything(data) {
  const cleaned = data.trim().toLowerCase();
  const parts = cleaned.split(",");
  const result = parts.map(p => p * 2);
  document.body.innerHTML = result.join(", ");
  fetch("/api/save", { method: "POST", body: JSON.stringify(result) });
  alert("done");
}</code></pre>
    <p>A short, focused body is one of the strongest signals of good code. If the body is doing five different jobs, that's usually a sign it should be split into smaller functions.</p>
  `,

  /* 1.2 Where you use it */
  'topics-8-7-1-2': `
    <p>The body is where every operation happens — calculations, DOM updates, conditional logic, loops, calls to other functions.</p>
<pre class="language-javascript"><code class="language-javascript">function isValidEmail(email) {
  // body uses conditional logic
  if (typeof email !== "string") return false;
  return email.includes("@") && email.length > 3;
}

function renderProducts(products) {
  // body uses a loop
  for (const product of products) {
    const card = document.createElement("div");
    card.textContent = product.name;
    document.body.appendChild(card);
  }
}

function getCartTotal(cart) {
  // body uses other functions
  return cart.reduce((sum, item) => sum + item.price, 0);
}</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-8-7-1-3': `
    <p>The function body is the steps of the recipe. The name is the title, the parameters are the ingredients, and the body is the actual instructions: do this, then this, then this.</p>
    <p>When you call the function, JavaScript walks through those steps from top to bottom, one line at a time, until it either reaches a <code>return</code> statement or hits the closing brace.</p>
    <p>The body is also a private space. Variables you create inside the body only exist while the function runs — they're cleaned up the moment the function finishes.</p>
  `,

  /* 1.4 Mental model */
  'topics-8-7-1-4': `
    <p>The body is a sealed room. Code outside the function can't reach in to peek at what's happening, and variables inside can't be seen from outside.</p>
<pre class="language-javascript"><code class="language-javascript">function calculate() {
  // ┌─────────────────────────┐
  // │  inside the body:       │
  // │  variables live here    │
  // │  steps run here         │
  // │  the work happens here  │
  // └─────────────────────────┘
}

// out here, you can't see what's inside the body
// you can only call the function and use what it returns</code></pre>
    <p>The only way information gets in is through parameters. The only way information gets out is through <code>return</code> (or side effects like updating the page).</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-8-7-1-5': `
<pre class="language-javascript"><code class="language-javascript">function calculateTotal(price, tax) {
  const taxAmount = price * tax;
  const total = price + taxAmount;
  return total;
}

const result = calculateTotal(50, 0.08);

// JavaScript is thinking:
// Line 1: see function calculateTotal → register the function name and remember its parameters and body. Don't run the body yet.
// Line 7: see calculateTotal(50, 0.08) → look up the function, set price = 50 and tax = 0.08, jump into the body.
// Line 2: run the first step of the body → taxAmount = 50 * 0.08 = 4.
// Line 3: run the next step → total = 50 + 4 = 54.
// Line 4: run return total → exit the body and hand 54 back to the caller.
// Line 7: store 54 in result.</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-8-7-2-0': `
    <p>If a function isn't doing what you expect, the body is where you investigate. Add a <code>console.log</code> at the top, in the middle, and right before the <code>return</code> — see where the values stop matching what you thought.</p>
<pre class="language-javascript"><code class="language-javascript">function calculateTotal(price, tax) {
  console.log("got:", price, tax);          // top of body — what came in
  const taxAmount = price * tax;
  console.log("tax amount:", taxAmount);    // middle — intermediate values
  const total = price + taxAmount;
  console.log("returning:", total);         // before return — what's going out
  return total;
}</code></pre>

    <p>If a variable is "undefined" inside a body, it's almost always one of: the parameter wasn't passed, the variable was used before it was assigned, or the name is misspelled. The body is the only place these problems can hide — it's also the only place to find them.</p>
  `,

  /* 2.1 The part that makes it click */
  'topics-8-7-2-1': `
    <p>The body is the function. Everything else — the name, the parameters, the parentheses — is just framing.</p>
    <p>The name is how you call it. The parameters are the inputs. But the body is the work. When people say "what does this function do?", the answer is in the body.</p>
    <p>The body also has its own private scope. Variables you create inside it don't pollute the outside world, and they're freshly recreated every time the function is called.</p>
  `,

  /* 2.2 Common confusions */
  'topics-8-7-2-2': `
    <p><strong>Confusion: variables inside vs outside the body</strong></p>
<pre class="language-javascript"><code class="language-javascript">function greet() {
  const message = "Hello";
  console.log(message);   // works — message is inside the body
}

console.log(message);     // wrong: ReferenceError — message doesn't exist out here</code></pre>
    <p>Variables in the body are private. They only exist while the function is running.</p>

    <p><strong>Confusion: when the body actually runs</strong></p>
<pre class="language-javascript"><code class="language-javascript">function greet() {
  console.log("Hello");   // this line is NOT running yet
}
// the function is defined, but nothing has been logged

greet();
// NOW the body runs → "Hello"</code></pre>

    <p><strong>Confusion: <code>return</code> vs end of body</strong></p>
<pre class="language-javascript"><code class="language-javascript">function add(a, b) {
  return a + b;
  console.log("done");    // never runs — return exits the body immediately
}

function add(a, b) {
  const sum = a + b;
  // no return → function returns undefined when the body ends
}</code></pre>
    <p><code>return</code> ends the body early and hands a value back. Reaching the closing brace also ends the body — but with no value (returns <code>undefined</code>).</p>

    <p><strong>Confusion: empty body</strong></p>
<pre class="language-javascript"><code class="language-javascript">function placeholder() {}
// valid — empty body
// runs, does nothing, returns undefined
// useful as a default callback or a stub during development</code></pre>
  `,

  /* 2.3 Common mistakes */
  'topics-8-7-2-3': `
<pre class="language-javascript"><code class="language-javascript">function greet()
  console.log("hi");
// wrong: missing braces — body must be wrapped in { }
// fix: function greet() { console.log("hi"); }</code></pre>

<pre class="language-javascript"><code class="language-javascript">function calculate() {
  const result = 10 * 2;
}
const total = calculate();
// works, but total is undefined
// fix: add return result; before the closing brace</code></pre>

<pre class="language-javascript"><code class="language-javascript">function add(a, b) {
  return;
  a + b;
}
// wrong: return on its own line ends the body immediately, ignoring a + b
// fix: return a + b;</code></pre>

<pre class="language-javascript"><code class="language-javascript">function greet() {
  const message = "Hello";
}
console.log(message);
// wrong: message only exists inside the body
// fix: return message from the function, then use what comes back</code></pre>

<pre class="language-javascript"><code class="language-javascript">function doEverything() {
  // 200 lines of mixed logic doing five different jobs
}
// works, but the body is too big — hard to read, hard to debug
// fix: split into smaller functions, each with a focused body</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-8-7-3-0': `
<pre class="language-javascript"><code class="language-javascript">// Empty body
function placeholder() {}

// Single-line body
function greet() {
  console.log("hi");
}

// Body with a return
function double(n) {
  return n * 2;
}

// Body with multiple steps
function calculateTotal(price, tax) {
  const taxAmount = price * tax;
  const total = price + taxAmount;
  return total;
}

// Body with conditional logic
function getDiscount(user) {
  if (user.isMember) {
    return 0.10;
  }
  return 0;
}

// Body with a loop
function sumAll(numbers) {
  let total = 0;
  for (const n of numbers) {
    total = total + n;
  }
  return total;
}</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-8-7-3-1': `
    <p><strong>Example: a body that updates the DOM</strong></p>
<pre class="language-javascript"><code class="language-javascript">function showError(message) {
  errorBox.textContent = message;
  errorBox.classList.add("visible");
  setTimeout(() => errorBox.classList.remove("visible"), 3000);
}
// body has three steps that work together to show and auto-hide an error</code></pre>

    <p><strong>Example: a body with early return</strong></p>
<pre class="language-javascript"><code class="language-javascript">function isValidEmail(email) {
  if (typeof email !== "string") return false;
  if (email.length < 3) return false;
  if (!email.includes("@")) return false;
  return true;
}
// body uses early returns to bail out as soon as a check fails</code></pre>

    <p><strong>Example: body using helper functions</strong></p>
<pre class="language-javascript"><code class="language-javascript">function checkout() {
  if (!isCartValid())   return;
  if (!isUserLoggedIn()) return;
  const total = getCartTotal();
  submitOrder(total);
  showSuccessMessage();
}
// body is a clear sequence of steps, each delegated to a focused helper</code></pre>

    <p><strong>Example: body with a loop building HTML</strong></p>
<pre class="language-javascript"><code class="language-javascript">function renderProducts(products) {
  productList.innerHTML = "";
  for (const product of products) {
    const card = document.createElement("div");
    card.className = "product";
    card.textContent = product.name;
    productList.appendChild(card);
  }
}
// body clears the list, then loops to build a card for each product</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-8-7-3-2': `
    <ul>
      <li><strong>Curly braces</strong> → mark the start and end of the body</li>
      <li><strong>Parameters</strong> → variables that exist inside the body</li>
      <li><strong>Return</strong> → exits the body and sends a value back</li>
      <li><strong>Scope</strong> → variables in the body are private to that function</li>
      <li><strong>Statements</strong> → the body is a sequence of statements that run in order</li>
      <li><strong>Conditionals and loops</strong> → control how the body's steps run</li>
      <li><strong>Implicit return (arrows)</strong> → arrow functions can skip braces and <code>return</code> for one-line bodies</li>
      <li><strong>Single responsibility</strong> → a focused body does one job well</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-8-7-3-3': `
    <ul>
      <li>Curly braces / blocks</li>
      <li>Parameters and arguments</li>
      <li>Return values</li>
      <li>Scope and closures</li>
      <li>Statements and expressions</li>
      <li>Implicit return (arrow functions)</li>
      <li>Early return pattern</li>
      <li>Single-responsibility functions</li>
    </ul>
  `,


  /* ========================================================= 
   Sub-lesson: 3.9.9 Functions → calling a function
 =======================================================*/

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-8-8-0-0': `
    <p>Calling a function means actually running its body. You write the function's name, then add parentheses <code>()</code> after it. That's the signal to JavaScript: "run this now."</p>
    <p>Without the parentheses, you're just <em>referring</em> to the function, not running it.</p>
  `,

  /* 0.1 Syntax */
  'topics-8-8-0-1': `
<pre class="language-javascript"><code class="language-javascript">function greet() {
  console.log("Hello");
}

greet();   // call the function — runs the body, prints "Hello"</code></pre>
    <p>The <code>()</code> at the end is what makes the function actually do its work. The function can be called as many times as you want — each call runs the body fresh.</p>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-8-8-0-2': `
<pre class="language-javascript"><code class="language-javascript">function greet(name) {
  console.log("Hello, " + name);
}

greet("Os");

// greet      → the name of the function being called
// (          → opening paren — start of the call
// "Os"       → the argument being passed in
// )          → closing paren — end of the call
// ;          → end of statement</code></pre>
    <p>The whole <code>greet("Os")</code> piece is called a "function call." It's an expression — it produces a value (whatever the function returns).</p>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-8-8-0-3': `
    <p>The parentheses are required, even with no arguments:</p>
<pre class="language-javascript"><code class="language-javascript">greet();         // correct: empty parens still call the function
greet;           // wrong: this just refers to the function, doesn't run it</code></pre>

    <p>Arguments go inside the parens, separated by commas:</p>
<pre class="language-javascript"><code class="language-javascript">add(2, 3);                 // two arguments
formatPrice(19.99);        // one argument
log();                     // no arguments</code></pre>

    <p>You can chain a call directly off another call:</p>
<pre class="language-javascript"><code class="language-javascript">function getGreeting() { return "Hello"; }

getGreeting();            // returns "Hello"
getGreeting().toUpperCase();   // call getGreeting, then call toUpperCase on the result → "HELLO"</code></pre>

    <p>Each call is independent — variables inside the body are recreated every time:</p>
<pre class="language-javascript"><code class="language-javascript">function counter() {
  let count = 0;
  count = count + 1;
  console.log(count);
}

counter();   // 1
counter();   // 1 (not 2 — fresh count each call)
counter();   // 1</code></pre>
    <p>Each call is its own run. The function doesn't remember the previous call unless you store the value somewhere outside the body.</p>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-8-8-1-0': `
    <p>Defining a function isn't enough — JavaScript needs an explicit signal to actually run the code inside. That signal is the <code>()</code> after the function's name.</p>
    <p>Without that signal, defined functions would either run automatically (which would be chaos) or never run at all (which would be useless). Calling is the explicit "do it now" trigger.</p>
  `,

  /* 1.1 Why use it */
  'topics-8-8-1-1': `
    <p>You call a function whenever you want its work to happen. That's the entire point of having a function — define once, call when needed.</p>
<pre class="language-javascript"><code class="language-javascript">function showError(message) {
  errorBox.textContent = message;
}

// call it when an error happens
showError("Email is required");

// call it again later, with a different argument
showError("Network failed");

// call it from inside another function
function handleSubmit() {
  if (!isValid) {
    showError("Please fix the form");
  }
}</code></pre>
    <p>Each call is a separate run. The same function can be called from many different places, with different arguments, doing different work each time.</p>
  `,

  /* 1.2 Where you use it */
  'topics-8-8-1-2': `
    <p>Function calls happen everywhere — directly in your code, inside other functions, as event responses, inside conditionals and loops.</p>
<pre class="language-javascript"><code class="language-javascript">// Direct call in a script
init();

// Call inside another function's body
function setup() {
  loadConfig();
  attachListeners();
}

// Call as a response to an event
button.addEventListener("click", () => {
  saveData();
});

// Call inside a conditional
if (user.isLoggedIn) {
  showDashboard();
}

// Call inside a loop
for (const item of items) {
  renderItem(item);
}</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-8-8-1-3': `
    <p>Calling a function is like pressing the button on a microwave. The microwave itself just sits there — it has all the wiring, all the timers, all the logic. But nothing happens until you press the button.</p>
    <p>The function's name is the button's label. The parentheses are the press. Without the press, you've got a labeled button that never does anything.</p>
    <p>You can press the same button as many times as you want. Each press is a fresh run — the microwave doesn't remember whether you used it ten seconds ago or ten years ago.</p>
  `,

  /* 1.4 Mental model */
  'topics-8-8-1-4': `
    <p>The name points at the function. The <code>()</code> runs it.</p>
<pre class="language-javascript"><code class="language-javascript">greet         //  →  the function (a value sitting in memory)
greet()       //  →  RUN it now, give me the result</code></pre>
    <p>Think of it like this: the name is the door, and <code>()</code> is opening the door and walking through. Without opening it, you can stand there pointing at the door — but nothing inside actually happens.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-8-8-1-5': `
<pre class="language-javascript"><code class="language-javascript">function double(n) {
  return n * 2;
}

const a = double(5);
const b = double(10);

// JavaScript is thinking:
// Line 1: see function double → register the name pointing at the function value.
// Line 5: see double(5) → look up double, jump into the body with n = 5, run return n * 2 → 10. Store 10 in a.
// Line 6: see double(10) → look up the SAME function again, jump into the body fresh with n = 10, run return n * 2 → 20. Store 20 in b.
// each call is its own independent run of the body.</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-8-8-2-0': `
    <p>If a function isn't running, the most common cause is forgetting the <code>()</code>. The code looks "right" — the name is there — but nothing happens.</p>
<pre class="language-javascript"><code class="language-javascript">function startTimer() {
  console.log("timer started");
}

startTimer;
// nothing happens — the line refers to the function but doesn't call it
// fix: startTimer();</code></pre>

    <p>Another common bug: <strong>calling when you meant to reference</strong>. This shows up most with event listeners.</p>
<pre class="language-javascript"><code class="language-javascript">button.addEventListener("click", handleClick());
// wrong: handleClick() runs immediately, the result is passed to addEventListener
// fix: button.addEventListener("click", handleClick);  // pass the function, don't call it</code></pre>
    <p>If a click handler runs once on page load and then never again, that's almost always this mistake.</p>
  `,

  /* 2.1 The part that makes it click */
  'topics-8-8-2-1': `
    <p>The <code>()</code> is everything. It's not punctuation — it's the actual operation that runs the function.</p>
    <p>Without parens, the function name is just a value, like a number or a string. <code>greet</code> is the function value. <code>greet()</code> is "run greet, give me what it returns." Two completely different things.</p>
    <p>This is why you can pass functions around as values, store them in variables, and put them in arrays — without <code>()</code>, you're handling the function itself, not running it.</p>
  `,

  /* 2.2 Common confusions */
  'topics-8-8-2-2': `
    <p><strong>Confusion: <code>greet</code> vs <code>greet()</code></strong></p>
<pre class="language-javascript"><code class="language-javascript">function greet() { return "hello"; }

console.log(greet);     // logs the entire function (the recipe card)
console.log(greet());   // logs "hello" (the result of running it)</code></pre>
    <p>Without <code>()</code>, you have the function itself. With <code>()</code>, you have its result.</p>

    <p><strong>Confusion: passing a function vs calling it</strong></p>
<pre class="language-javascript"><code class="language-javascript">setTimeout(handleClick, 1000);     // pass it — JS will call it later
setTimeout(handleClick(), 1000);   // call it now — pass the result to setTimeout</code></pre>
    <p>When something else will call the function later (event listeners, timers, array methods), pass the name without <code>()</code>.</p>

    <p><strong>Confusion: where return values come from</strong></p>
<pre class="language-javascript"><code class="language-javascript">function add(a, b) { return a + b; }

const sum = add(2, 3);    // 5 — the call gives back what return produced
const fn  = add;          // the function itself, not 5
const x   = add;          // also the function — no parens means no call</code></pre>

    <p><strong>Confusion: calling vs executing the body</strong></p>
<pre class="language-javascript"><code class="language-javascript">function setupListener() {
  console.log("setting up");
  button.addEventListener("click", () => console.log("clicked"));
}

setupListener();
// "setting up" prints right away — that line ran inside the body
// "clicked" prints later, only when the button is clicked</code></pre>
    <p>Calling the function runs its body. The body might <em>register</em> code to run later, but that's a separate thing from the call itself.</p>
  `,

  /* 2.3 Common mistakes */
  'topics-8-8-2-3': `
<pre class="language-javascript"><code class="language-javascript">function startTimer() { ... }
startTimer;
// wrong: missing () — function is referenced, never called
// fix: startTimer();</code></pre>

<pre class="language-javascript"><code class="language-javascript">button.addEventListener("click", handleClick());
// wrong: handleClick() runs immediately, its return value is passed to addEventListener
// fix: button.addEventListener("click", handleClick);</code></pre>

<pre class="language-javascript"><code class="language-javascript">function add(a, b) { return a + b; }
const result = add 2, 3;
// wrong: missing parens around the arguments
// fix: const result = add(2, 3);</code></pre>

<pre class="language-javascript"><code class="language-javascript">function greet(name) { console.log("hi, " + name); }
greet;
greet ();
greet( );
// only the second and third actually call the function
// the spaces don't matter — but missing parens entirely (line 2) means no call</code></pre>

<pre class="language-javascript"><code class="language-javascript">function calculate() { return 42; }
const x = calculate;
console.log(x);     // logs the function, not 42
// fix: const x = calculate();  // call it to get the return value</code></pre>

<pre class="language-javascript"><code class="language-javascript">setTimeout(() => sendData(), 1000);
// works, but the arrow wrapper is unnecessary
// simpler: setTimeout(sendData, 1000);
// (only wrap if you need to pass arguments: setTimeout(() => sendData(payload), 1000))</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-8-8-3-0': `
<pre class="language-javascript"><code class="language-javascript">// No arguments
function sayHi() { console.log("hi"); }
sayHi();

// One argument
function greet(name) { console.log("Hello, " + name); }
greet("Os");

// Multiple arguments
function add(a, b) { return a + b; }
add(2, 3);

// Calling and using the return value
const total = add(50, 25);
console.log(total);   // 75

// Calling inside an expression
const message = "Total: " + add(50, 25);

// Calling inside another call
console.log(add(10, 20));     // 30

// Chained calls
function getName() { return "  Os  "; }
getName().trim().toUpperCase();   // "OS"</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-8-8-3-1': `
    <p><strong>Example: calling on page load</strong></p>
<pre class="language-javascript"><code class="language-javascript">function initApp() {
  loadUser();
  loadProducts();
  attachEventListeners();
}

initApp();
// the script ends, but initApp() set everything up</code></pre>

    <p><strong>Example: calling from an event</strong></p>
<pre class="language-javascript"><code class="language-javascript">function handleClick() {
  console.log("button was clicked");
}

button.addEventListener("click", handleClick);
// pass handleClick (no parens) — the browser will call it for you on each click</code></pre>

    <p><strong>Example: calling another function from inside one</strong></p>
<pre class="language-javascript"><code class="language-javascript">function handleSubmit(event) {
  event.preventDefault();
  if (!validateForm()) return;
  const data = collectFormData();
  sendToServer(data);
  showSuccessMessage();
}
// each line is a function call doing one focused job</code></pre>

    <p><strong>Example: calling inside a loop</strong></p>
<pre class="language-javascript"><code class="language-javascript">function renderProduct(product) {
  const card = document.createElement("div");
  card.textContent = product.name;
  productList.appendChild(card);
}

for (const product of products) {
  renderProduct(product);   // called once per product
}</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-8-8-3-2': `
    <ul>
      <li><strong>Function definition</strong> → you can only call functions that have been defined</li>
      <li><strong>Parentheses</strong> → the <code>()</code> is what triggers the call</li>
      <li><strong>Arguments</strong> → the values passed in between the parens</li>
      <li><strong>Parameters</strong> → the placeholders the arguments fill in</li>
      <li><strong>Return</strong> → what the call gives back to the caller</li>
      <li><strong>Function as value</strong> → without <code>()</code>, the name is just a value</li>
      <li><strong>Events</strong> → event listeners call functions when something happens</li>
      <li><strong>Stack trace</strong> → calls form a stack that shows up in errors</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-8-8-3-3': `
    <ul>
      <li>Referencing without calling</li>
      <li>Parentheses when calling</li>
      <li>Arguments and parameters</li>
      <li>Return values</li>
      <li>Function as a value</li>
      <li>Callback functions</li>
      <li>Event listeners</li>
      <li>Call stack</li>
    </ul>
  `,


  /* ========================================================= 
   Sub-lesson: 3.9.10 Functions → referencing without calling
 =======================================================*/

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-8-9-0-0': `
    <p>Referencing a function means using its name <em>without</em> the parentheses. You're pointing at the function as a value — not running it.</p>
    <p>Instead of "do this work now," you're saying "here's the function — somebody else will run it later."</p>
  `,

  /* 0.1 Syntax */
  'topics-8-9-0-1': `
<pre class="language-javascript"><code class="language-javascript">function handleClick() {
  console.log("clicked");
}

handleClick();    // calling — runs the body now
handleClick;      // referencing — points at the function, doesn't run it

button.addEventListener("click", handleClick);
// passing the reference — the browser will call it later, on each click</code></pre>
    <p>The same name does both jobs. Adding <code>()</code> calls. Leaving them off references.</p>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-8-9-0-2': `
<pre class="language-javascript"><code class="language-javascript">function handleClick() {
  console.log("clicked");
}

handleClick;

button.addEventListener("click", handleClick);

// handleClick;       → reference on its own — the function as a value, doesn't run
// button             → the element
// .addEventListener  → the method being called
// (                  → opens its argument list
// "click"            → first argument (the event name)
// handleClick        → second argument — a reference to the function (no parens, no call)
// )                  → closes the argument list
// ;                  → ends the statement</code></pre>
    <p>The key piece is <code>handleClick</code> with no <code>()</code> after it. That's a reference — the function being passed as a value. The browser stores it and calls it later, on each click. If you wrote <code>handleClick()</code> here, the function would run immediately and the click listener would get its return value instead of the function itself.</p>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-8-9-0-3': `
    <p>The presence of <code>()</code> is the difference between a reference and a call:</p>
<pre class="language-javascript"><code class="language-javascript">handleClick      // reference — value, doesn't run
handleClick()    // call — runs the body</code></pre>

    <p>You can store a reference in another variable:</p>
<pre class="language-javascript"><code class="language-javascript">function greet() { console.log("hi"); }

const sayHi = greet;    // sayHi now references the same function
sayHi();                // works — calls the function through its new name
greet();                // also works — both names point at the same function</code></pre>

    <p>You can put references in arrays or objects:</p>
<pre class="language-javascript"><code class="language-javascript">function doA() { console.log("A"); }
function doB() { console.log("B"); }

const actions = [doA, doB];        // array of function references
actions[0]();                       // calls doA → "A"

const handlers = { open: doA, close: doB };
handlers.close();                   // calls doB → "B"</code></pre>

    <p>References are how you pass functions to other code (callbacks, event listeners, array methods):</p>
<pre class="language-javascript"><code class="language-javascript">[1, 2, 3].map(double);             // pass the reference, map calls it for each item
fetch("/api").then(handleResponse); // pass the reference, .then calls it when the fetch resolves</code></pre>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-8-9-1-0': `
    <p>Sometimes you don't want to run a function <em>now</em> — you want something else to run it later. Maybe when a button is clicked, when a timer fires, when a fetch finishes, or once for each item in an array.</p>
    <p>Referencing without calling is how you hand the function over to that other code. You're not running it yourself — you're giving the function to someone else and saying "you decide when to call this."</p>
  `,

  /* 1.1 Why use it */
  'topics-8-9-1-1': `
    <p>Reference (no parens) when something else will call the function later. Call (with parens) when you want the work to happen right now.</p>
<pre class="language-javascript"><code class="language-javascript">function handleSave() {
  console.log("saving...");
}

// Reference — addEventListener will call it on each click
saveBtn.addEventListener("click", handleSave);

// Call — runs the function right now, once
handleSave();

// Reference — setTimeout will call it after 1 second
setTimeout(handleSave, 1000);

// Call — passes the result of handleSave (undefined) to setTimeout, which runs nothing useful
setTimeout(handleSave(), 1000);   // wrong — common mistake</code></pre>
    <p>The rule: if the surrounding code is going to call the function for you, hand over the reference, not the result.</p>
  `,

  /* 1.2 Where you use it */
  'topics-8-9-1-2': `
    <p>References show up everywhere callbacks are used.</p>
<pre class="language-javascript"><code class="language-javascript">// Event listeners
button.addEventListener("click", handleClick);

// Timers
setTimeout(handleTimeout, 2000);
setInterval(updateClock, 1000);

// Promises
fetch("/api/data").then(handleResponse);

// Array methods
[1, 2, 3].map(double);
items.filter(isInStock);
items.forEach(renderItem);

// Object properties (storing actions)
const handlers = {
  click: handleClick,
  hover: handleHover,
};

// Conditional handler selection
const handler = isAdmin ? handleAdminClick : handleUserClick;
button.addEventListener("click", handler);</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-8-9-1-3': `
    <p>Think of a function as a tool — like a hammer. Calling the function is picking up the hammer and using it. Referencing the function is handing the hammer to someone else, saying "use this when you need it."</p>
    <p>If you give someone the hammer, they decide when to use it. If you use the hammer yourself, the work happens right now.</p>
    <p>The parentheses are the difference between using the tool and handing it over. With <code>()</code>, you swing it. Without <code>()</code>, you pass it.</p>
  `,

  /* 1.4 Mental model */
  'topics-8-9-1-4': `
    <p>The function name is the function as a value. The parens are the action of running it.</p>
<pre class="language-javascript"><code class="language-javascript">handleClick    →  the function itself (a value)
handleClick()  →  run the function NOW, give me the result</code></pre>
    <p>When you pass a reference, you're handing over the function — the receiver decides when (and if) to call it. When you call, the work happens immediately and what you're passing is the <em>result</em>, not the function.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-8-9-1-5': `
<pre class="language-javascript"><code class="language-javascript">function handleClick() {
  console.log("clicked");
}

button.addEventListener("click", handleClick);

// JavaScript is thinking:
// Line 1: see function handleClick → register the name pointing at the function value.
// Line 5: see button.addEventListener("click", handleClick) → call addEventListener, pass it the string "click" and the function value (no () means don't run it now). The browser stores the reference and will call it on every click later.</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-8-9-2-0': `
    <p>If an event handler fires once on page load instead of when the user clicks, you almost certainly added <code>()</code> when you shouldn't have.</p>
<pre class="language-javascript"><code class="language-javascript">button.addEventListener("click", handleClick());
// wrong: handleClick() runs immediately on this line
// addEventListener gets the RETURN value (probably undefined)
// the click never fires the function

button.addEventListener("click", handleClick);
// correct: pass the reference; the browser calls it on each click</code></pre>

    <p>Same bug with <code>setTimeout</code>:</p>
<pre class="language-javascript"><code class="language-javascript">setTimeout(showAlert(), 1000);   // wrong — runs immediately, no delay
setTimeout(showAlert, 1000);     // correct — runs after 1 second</code></pre>
    <p>Rule of thumb: if the surrounding code is in charge of calling the function, leave off the parens.</p>
  `,

  /* 2.1 The part that makes it click */
  'topics-8-9-2-1': `
    <p>A function is a value. Like a number or a string, it can be stored, passed around, or replaced.</p>
    <p>The name is just a label. By itself, the label refers to the value. Adding <code>()</code> is a separate operation that says "take this function value and run it."</p>
    <p>Once you see this clearly, callbacks stop feeling weird: they're just function values being handed off so other code can call them at the right moment.</p>
  `,

  /* 2.2 Common confusions */
  'topics-8-9-2-2': `
    <p><strong>Confusion: passing vs invoking</strong></p>
<pre class="language-javascript"><code class="language-javascript">setTimeout(handleTimeout, 1000);    // pass the reference — runs after 1s
setTimeout(handleTimeout(), 1000);   // call now — pass the result to setTimeout</code></pre>
    <p>If you want something to happen <em>later</em>, pass the reference. If you call it now, you're running it now and only handing over the result.</p>

    <p><strong>Confusion: when you DO want to call inline</strong></p>
<pre class="language-javascript"><code class="language-javascript">// Sometimes calling inside the listener IS what you want
button.addEventListener("click", () => sendData(payload));
// the arrow function is the reference — sendData(payload) only runs on click
// this is how you pass arguments to the eventual call</code></pre>

    <p><strong>Confusion: function reference vs function call result</strong></p>
<pre class="language-javascript"><code class="language-javascript">function getNumber() { return 42; }

const a = getNumber;     // a is the function itself
const b = getNumber();   // b is 42 — the result of calling

a();    // 42
b();    // wrong: TypeError — b is just the number 42, not a function</code></pre>

    <p><strong>Confusion: removing event listeners</strong></p>
<pre class="language-javascript"><code class="language-javascript">// Adding an inline arrow — no way to remove later
button.addEventListener("click", () => doStuff());

// Adding a named reference — can be removed
button.addEventListener("click", handleClick);
button.removeEventListener("click", handleClick);   // works because we have the same reference</code></pre>
    <p>This is one of the strongest reasons to use named references: you can refer to the same function later.</p>
  `,

  /* 2.3 Common mistakes */
  'topics-8-9-2-3': `
<pre class="language-javascript"><code class="language-javascript">button.addEventListener("click", handleClick());
// wrong: () runs handleClick immediately on this line
// fix: button.addEventListener("click", handleClick);</code></pre>

<pre class="language-javascript"><code class="language-javascript">setTimeout(showAlert(), 2000);
// wrong: showAlert runs now, setTimeout gets undefined
// fix: setTimeout(showAlert, 2000);</code></pre>

<pre class="language-javascript"><code class="language-javascript">const action = handleSave();
// wrong: action holds the RESULT of handleSave (probably undefined)
// fix: const action = handleSave;  // store the function reference instead</code></pre>

<pre class="language-javascript"><code class="language-javascript">[1, 2, 3].map(double());
// wrong: double() runs once with no argument, map gets the return value
// fix: [1, 2, 3].map(double);  // pass the reference, map calls it per item</code></pre>

<pre class="language-javascript"><code class="language-javascript">button.addEventListener("click", () => handleClick);
// wrong: arrow function returns the reference but never calls it
// fix: button.addEventListener("click", handleClick);
// or:  button.addEventListener("click", () => handleClick());  // if you need the wrapper</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-8-9-3-0': `
<pre class="language-javascript"><code class="language-javascript">function double(n) { return n * 2; }

// Storing a reference
const fn = double;
fn(5);          // 10 — calling through the new name

// Passing a reference to an array method
[1, 2, 3].map(double);    // [2, 4, 6]

// Passing a reference to an event listener
btn.addEventListener("click", handleClick);

// Picking a reference based on a condition
const handler = isAdmin ? adminHandler : userHandler;
btn.addEventListener("click", handler);

// Storing references in an object
const actions = {
  open:  openModal,
  close: closeModal,
};
actions.open();    // calls openModal

// Calling vs referencing — same name, different intent
console.log(double);     // function
console.log(double(5));  // 10</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-8-9-3-1': `
    <p><strong>Example: same handler reused</strong></p>
<pre class="language-javascript"><code class="language-javascript">function closeModal() {
  modal.classList.remove("open");
}

closeBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
window.addEventListener("keydown", closeModal);
// one reference, three places that use it</code></pre>

    <p><strong>Example: removing a listener later</strong></p>
<pre class="language-javascript"><code class="language-javascript">function handleScroll() {
  console.log(window.scrollY);
}

window.addEventListener("scroll", handleScroll);

// later, when we want to stop listening:
window.removeEventListener("scroll", handleScroll);
// works because both calls reference the SAME function</code></pre>

    <p><strong>Example: array method callbacks</strong></p>
<pre class="language-javascript"><code class="language-javascript">function isInStock(product)  { return product.stock > 0; }
function getName(product)    { return product.name; }

const available = products.filter(isInStock);
const names = available.map(getName);
// pass references — filter and map call them once per item</code></pre>

    <p><strong>Example: command map</strong></p>
<pre class="language-javascript"><code class="language-javascript">const commands = {
  save:   saveDocument,
  open:   openFile,
  close:  closeFile,
  print:  printDocument,
};

function runCommand(name) {
  const fn = commands[name];
  if (fn) fn();
}

runCommand("save");
runCommand("print");
// each command is a reference, looked up by name and called when needed</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-8-9-3-2': `
    <ul>
      <li><strong>Calling a function</strong> → the opposite — referencing is about NOT calling</li>
      <li><strong>Function as a value</strong> → references are how you treat functions like values</li>
      <li><strong>Callbacks</strong> → callbacks are function references passed to other code</li>
      <li><strong>Event listeners</strong> → expect references, not calls</li>
      <li><strong>Timers</strong> → <code>setTimeout</code> and <code>setInterval</code> take references</li>
      <li><strong>Array methods</strong> → <code>map</code>, <code>filter</code>, <code>reduce</code> take references</li>
      <li><strong>Higher-order functions</strong> → functions that accept references as arguments</li>
      <li><strong><code>removeEventListener</code></strong> → only works when you pass the same reference</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-8-9-3-3': `
    <ul>
      <li>Calling a function</li>
      <li>Function as a value</li>
      <li>Callback functions</li>
      <li>Event listeners</li>
      <li>setTimeout and setInterval</li>
      <li>Array methods (<code>map</code>, <code>filter</code>, <code>forEach</code>)</li>
      <li>Higher-order functions</li>
      <li>Removing event listeners</li>
    </ul>
  `,


  /* ========================================================= 
   Sub-lesson: 3.9.11 Functions → parentheses when calling
 =======================================================*/

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-8-10-0-0': `
    <p>The parentheses <code>()</code> are what actually call a function. They're not optional, not decoration — they're the operation that runs the function's body.</p>
    <p>No <code>()</code>, no call. The function exists, but the work doesn't happen.</p>
  `,

  /* 0.1 Syntax */
  'topics-8-10-0-1': `
<pre class="language-javascript"><code class="language-javascript">function greet() {
  console.log("Hello");
}

greet();    // parens → call → "Hello" prints
greet;      // no parens → just refers to the function, nothing happens</code></pre>
    <p>The parens are required even when the function takes no arguments. An empty <code>()</code> still counts as a call.</p>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-8-10-0-2': `
<pre class="language-javascript"><code class="language-javascript">function add(a, b) {
  return a + b;
}

add(2, 3);

// add    → the function being called
// (      → opens the argument list — start of the call
// 2, 3   → arguments, separated by a comma
// )      → closes the argument list — end of the call
// ;      → ends the statement</code></pre>
    <p>The pair of parens is sometimes called the "call operator." When JavaScript sees a value followed by <code>()</code>, it tries to call that value as a function — whether you put arguments inside or leave them empty.</p>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-8-10-0-3': `
    <p>Empty parens are still required for no-argument functions:</p>
<pre class="language-javascript"><code class="language-javascript">function sayHi() { console.log("hi"); }

sayHi();     // correct
sayHi;       // wrong — no call happens</code></pre>

    <p>Arguments go inside the parens, separated by commas:</p>
<pre class="language-javascript"><code class="language-javascript">add(2, 3);                 // two arguments
formatPrice(19.99);        // one argument
log();                     // no arguments — empty parens</code></pre>

    <p>Whitespace around the parens is allowed but doesn't change anything:</p>
<pre class="language-javascript"><code class="language-javascript">greet();          // standard
greet ();         // works, but unusual style
greet( "Os" );    // also works — extra spaces are fine</code></pre>

    <p>Trying to call a non-function throws an error:</p>
<pre class="language-javascript"><code class="language-javascript">const x = 5;
x();      // wrong: TypeError — x is not a function

const greet = "hello";
greet();  // wrong: TypeError — greet is a string, not a function</code></pre>

    <p>You can call directly on a returned value:</p>
<pre class="language-javascript"><code class="language-javascript">function getGreeter() {
  return function() { console.log("hi"); };
}

getGreeter()();     // first () calls getGreeter, second () calls the returned function
// equivalent to:
const fn = getGreeter();
fn();</code></pre>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-8-10-1-0': `
    <p>JavaScript needs an explicit signal to actually run a function. Without that signal, the language can't tell whether you're trying to <em>use</em> the function as a value (referencing it) or <em>run</em> it (calling it).</p>
    <p>The parentheses are that signal. They're how you say, unambiguously, "execute this function, right now."</p>
  `,

  /* 1.1 Why use it */
  'topics-8-10-1-1': `
    <p>Use parens whenever you want the function's body to run. Anywhere you want a result from a function, or a side effect (like updating the page), you need <code>()</code>.</p>
<pre class="language-javascript"><code class="language-javascript">// Use parens when you want the work to happen
console.log("start");
init();
showWelcome();
console.log("end");

// Use parens when you want the return value
const total = calculateTotal(50, 0.08);
const valid = isValidEmail(input.value);

// Use parens when you want to use the result inline
if (isLoggedIn()) {
  showDashboard();
}

const greeting = "Hello, " + getCurrentUser();</code></pre>
    <p>If a function takes arguments, they go inside the parens. If it doesn't, the parens are still required — empty.</p>
  `,

  /* 1.2 Where you use it */
  'topics-8-10-1-2': `
    <p>Parens are everywhere a function actually runs.</p>
<pre class="language-javascript"><code class="language-javascript">// Direct call
init();

// Call to get a value
const total = sum(items);

// Call as a condition
if (isReady()) {
  start();
}

// Call inside another expression
console.log("Result: " + format(value));

// Method call (parens still required)
"Hello".toUpperCase();
[1, 2, 3].push(4);
products.map(p => p.name);

// Chained call
getName().trim().toUpperCase();</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-8-10-1-3': `
    <p>The parentheses are the "go" button. The function's name tells JavaScript which function you mean. The parens tell it to actually run.</p>
    <p>Even if the function takes no inputs, you still need empty parens — like pressing a button that has no settings. The press is what makes anything happen.</p>
    <p>Without the parens, you're not calling the function. You're just naming it. The function sits there, defined, ready, but unused.</p>
  `,

  /* 1.4 Mental model */
  'topics-8-10-1-4': `
    <p>The parens are an operator — like <code>+</code> for addition or <code>===</code> for comparison. They take a function value on the left and produce a result by running it.</p>
<pre class="language-javascript"><code class="language-javascript">2 + 3        // + operator → produces 5
greet()      // () operator → runs greet, produces its return value</code></pre>
    <p>The arguments inside the parens are inputs to the operation. Empty parens mean "run, no inputs."</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-8-10-1-5': `
<pre class="language-javascript"><code class="language-javascript">function add(a, b) {
  return a + b;
}

const result = add(2, 3);
console.log(result);

// JavaScript is thinking:
// Line 1: see function add → register the name pointing at the function value.
// Line 5: see add(2, 3) → look up add (got the function value), see () to its right → call it. Set a = 2, b = 3, run the body, return 5. Store 5 in result.
// Line 6: see console.log(result) → look up console.log, see () → call it with result (5). Logs 5.</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-8-10-2-0': `
    <p>"My function isn't running" is almost always one of two things: missing parens, or trying to call something that isn't a function.</p>
<pre class="language-javascript"><code class="language-javascript">init;
// nothing happens — missing parens
// fix: init();

const greeting = "hello";
greeting();
// TypeError — greeting is a string, not a function
// you can't call a non-function value</code></pre>

    <p>If you see <code>TypeError: X is not a function</code>, check what <code>X</code> actually is — usually it's been overwritten with another value, or it was never a function in the first place.</p>
  `,

  /* 2.1 The part that makes it click */
  'topics-8-10-2-1': `
    <p>The parens are the call. They're a separate, deliberate action from naming the function.</p>
    <p>Once you see <code>()</code> as an operator — something that <em>does</em> work, not just punctuation — function syntax stops feeling fiddly. Every time you write <code>()</code>, you're running the value to its left. Every time you don't, you're leaving it as a value.</p>
  `,

  /* 2.2 Common confusions */
  'topics-8-10-2-2': `
    <p><strong>Confusion: empty parens still count as a call</strong></p>
<pre class="language-javascript"><code class="language-javascript">function init() { console.log("ready"); }

init;       // not a call — nothing logs
init();     // call — "ready" logs
// the parens are required even with no arguments</code></pre>

    <p><strong>Confusion: parens around the args, not the function</strong></p>
<pre class="language-javascript"><code class="language-javascript">add(2, 3);     // correct: name first, then ( args )
(add)(2, 3);   // works, but the extra parens around add are pointless
add (2, 3);    // works, but unusual style — the space doesn't matter</code></pre>

    <p><strong>Confusion: parens in definition vs parens in call</strong></p>
<pre class="language-javascript"><code class="language-javascript">function greet(name) {     // parens here = parameter list (definition)
  console.log("hi, " + name);
}

greet("Os");                // parens here = argument list (call)
// same syntax, different roles</code></pre>
    <p>In the definition, the parens introduce the parameters. In the call, they introduce the arguments.</p>

    <p><strong>Confusion: methods need parens too</strong></p>
<pre class="language-javascript"><code class="language-javascript">"hello".toUpperCase;       // refers to the method, doesn't run it
"hello".toUpperCase();     // calls it — returns "HELLO"

[1, 2].length;              // property — no parens, no call
[1, 2].push(3);             // method — parens to call</code></pre>
    <p>Methods are functions stored on objects. They follow the same rule: <code>()</code> calls them, no <code>()</code> doesn't.</p>
  `,

  /* 2.3 Common mistakes */
  'topics-8-10-2-3': `
<pre class="language-javascript"><code class="language-javascript">init;
// wrong: missing () — function never runs
// fix: init();</code></pre>

<pre class="language-javascript"><code class="language-javascript">const greeting = "hello";
greeting();
// wrong: TypeError — greeting is a string, not a function
// fix: don't call non-function values</code></pre>

<pre class="language-javascript"><code class="language-javascript">add 2, 3;
// wrong: missing parens — JS doesn't know what to do
// fix: add(2, 3);</code></pre>

<pre class="language-javascript"><code class="language-javascript">function getValue() { return 42; }
const x = getValue;
console.log(x);     // logs the function, not 42
// fix: const x = getValue();   // call it to get 42</code></pre>

<pre class="language-javascript"><code class="language-javascript">"hello".toUpperCase;
// wrong: refers to the method but doesn't run it
// fix: "hello".toUpperCase();   // returns "HELLO"</code></pre>

<pre class="language-javascript"><code class="language-javascript">setTimeout(handleTimeout(), 1000);
// wrong: handleTimeout() runs immediately — setTimeout gets the result, not the function
// fix: setTimeout(handleTimeout, 1000);</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-8-10-3-0': `
<pre class="language-javascript"><code class="language-javascript">// No arguments — empty parens
function ping() { console.log("ping"); }
ping();

// One argument
function greet(name) { console.log("hi, " + name); }
greet("Os");

// Multiple arguments
function add(a, b) { return a + b; }
add(2, 3);

// Method call
const arr = [1, 2, 3];
arr.push(4);
arr.pop();

// Chained calls
"  hello  ".trim().toUpperCase();    // "HELLO"

// Call directly on a returned function
function makeGreeter() { return () => console.log("hi"); }
makeGreeter()();    // first () gets the inner function, second () calls it

// Call inside another call
console.log(add(2, 3));    // 5</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-8-10-3-1': `
    <p><strong>Example: parens to actually run setup</strong></p>
<pre class="language-javascript"><code class="language-javascript">function init() {
  loadConfig();
  attachListeners();
  renderUI();
}

init();
// without these parens, init never runs and the app does nothing</code></pre>

    <p><strong>Example: parens on every method</strong></p>
<pre class="language-javascript"><code class="language-javascript">const cleanedEmail = userInput.trim().toLowerCase();
const itemNames = products.map(p => p.name);
const total = prices.reduce((sum, p) => sum + p, 0);
// every method call has its own ()</code></pre>

    <p><strong>Example: call the result of a call</strong></p>
<pre class="language-javascript"><code class="language-javascript">function createCounter() {
  let count = 0;
  return function() {
    count = count + 1;
    return count;
  };
}

const counter = createCounter();
counter();    // 1
counter();    // 2
counter();    // 3
// createCounter() runs once and returns a function — counter() calls that function</code></pre>

    <p><strong>Example: parens inside conditions</strong></p>
<pre class="language-javascript"><code class="language-javascript">function isLoggedIn() { return user.token !== null; }
function hasPermission(action) { return user.permissions.includes(action); }

if (isLoggedIn() && hasPermission("edit")) {
  showEditButton();
}
// each function call uses parens to run and produce its return value</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-8-10-3-2': `
    <ul>
      <li><strong>Calling a function</strong> → parens are how you call</li>
      <li><strong>Referencing without calling</strong> → no parens means no call</li>
      <li><strong>Arguments</strong> → values passed inside the parens</li>
      <li><strong>Parameters</strong> → placeholders defined inside the parens at definition time</li>
      <li><strong>Return values</strong> → the call expression evaluates to whatever the function returns</li>
      <li><strong>Method calls</strong> → methods need parens just like regular functions</li>
      <li><strong>Chaining</strong> → calls can be linked together with <code>.</code></li>
      <li><strong>Call expression</strong> → the whole <code>name(...)</code> is one expression that produces a value</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-8-10-3-3': `
    <ul>
      <li>Calling a function</li>
      <li>Referencing without calling</li>
      <li>Arguments and parameters</li>
      <li>Return values</li>
      <li>Method calls</li>
      <li>Chained calls</li>
      <li>Call expressions</li>
      <li>"X is not a function" errors</li>
    </ul>
  `,


  /* ========================================================= 
   Sub-lesson: 3.9.12 Functions → parameters
 =======================================================*/

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-8-11-0-0': `
    <p>A parameter is a placeholder name for a value that will be passed in when the function is called. You write parameters between the parentheses when defining the function.</p>
    <p>Inside the body, the parameter behaves like a regular variable — but its value isn't decided until someone calls the function and supplies it.</p>
  `,

  /* 0.1 Syntax */
  'topics-8-11-0-1': `
<pre class="language-javascript"><code class="language-javascript">function greet(name) {        // "name" is a parameter
  console.log("Hello, " + name);
}

greet("Os");      // "Os" fills in the parameter — name is "Os" inside the body
greet("Sam");     // different call — name is "Sam"</code></pre>
    <p>The parameter is the slot. Each call decides what goes into the slot.</p>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-8-11-0-2': `
<pre class="language-javascript"><code class="language-javascript">function welcome(firstName, lastName) {
  console.log("Welcome, " + firstName + " " + lastName);
}

welcome("Os", "Garcia");
// prints: Welcome, Os Garcia

welcome("Sam", "Lee");
// prints: Welcome, Sam Lee

// function              → keyword that starts the declaration
// welcome               → the function name
// (                     → opens the parameter list
// firstName, lastName   → parameters — placeholder names for incoming values
// )                     → closes the parameter list
// { ... }               → the function body — uses the parameters as variables
// "Os", "Garcia"        → arguments fill the parameters in order on each call</code></pre>
    <p>The parameters <code>firstName</code> and <code>lastName</code> are written once in the definition. Each call fills them with different values — that's how the same function produces different output.</p>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-8-11-0-3': `
    <p>Multiple parameters are separated by commas:</p>
<pre class="language-javascript"><code class="language-javascript">function add(a, b)         { return a + b; }
function greet(first, last) { console.log(first + " " + last); }
function log()              { console.log("hi"); }   // no parameters — empty parens</code></pre>

    <p>Parameter names follow the same rules as variable names — letters, digits, <code>_</code>, <code>$</code>, no starting digit, no reserved keywords:</p>
<pre class="language-javascript"><code class="language-javascript">function process(userId) { ... }     // correct
function process(user_id) { ... }    // correct (but camelCase is conventional)
function process(1stUser) { ... }    // wrong — can't start with a digit
function process(class) { ... }      // wrong — reserved keyword</code></pre>

    <p>Parameters are local to the function — they don't exist outside the body:</p>
<pre class="language-javascript"><code class="language-javascript">function greet(name) {
  console.log(name);   // works — name exists inside the body
}

console.log(name);     // wrong: ReferenceError — name is local to greet</code></pre>

    <p>You can give a parameter a default value with <code>=</code>:</p>
<pre class="language-javascript"><code class="language-javascript">function greet(name = "friend") {
  console.log("Hello, " + name);
}

greet();         // "Hello, friend" — uses the default
greet("Os");     // "Hello, Os" — overrides the default</code></pre>
    <p>Defaults kick in when the argument is missing or <code>undefined</code>.</p>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-8-11-1-0': `
    <p>A function without parameters can only ever do one fixed thing. With parameters, the same function can do its job on different inputs each time.</p>
    <p>Parameters are what make functions <em>reusable across different values</em>. They turn a one-off block of code into a tool you can apply anywhere.</p>
  `,

  /* 1.1 Why use it */
  'topics-8-11-1-1': `
    <p>Use parameters whenever a function needs information from the outside to do its job. If you find yourself hardcoding a value inside a function and writing near-duplicate copies for different cases, that's a sign the value should be a parameter.</p>
<pre class="language-javascript"><code class="language-javascript">// Without parameters — three separate functions doing the same job
function greetOs()  { console.log("Hello, Os"); }
function greetSam() { console.log("Hello, Sam"); }
function greetAlex(){ console.log("Hello, Alex"); }

// With a parameter — one function, used three different ways
function greet(name) {
  console.log("Hello, " + name);
}
greet("Os");
greet("Sam");
greet("Alex");</code></pre>
    <p>The parameter is the difference between "does this exact thing" and "does this kind of thing."</p>
  `,

  /* 1.2 Where you use it */
  'topics-8-11-1-2': `
    <p>Almost every reusable function has at least one parameter — the value it operates on.</p>
<pre class="language-javascript"><code class="language-javascript">function isAdult(age)              { return age >= 18; }
function formatPrice(price)        { return "$" + price.toFixed(2); }
function showError(message)        { errorBox.textContent = message; }
function calculateTax(price, rate) { return price * rate; }

function buildCard(product) {
  const card = document.createElement("div");
  card.textContent = product.name;
  return card;
}

function handleClick(event) {       // event handlers receive the event as a parameter
  event.preventDefault();
}</code></pre>
    <p>Even built-in functions take parameters: <code>console.log(value)</code>, <code>setTimeout(fn, ms)</code>, <code>arr.map(callback)</code>. The parameter is how you tell them what to work on.</p>
  `,

  /* 1.3 Plain English explanation */
  'topics-8-11-1-3': `
    <p>Think of a parameter like a blank in a form. The function template says "fill in this part with a name" — and every time someone calls the function, they fill in the blank with whatever name they want.</p>
    <p>The form itself stays the same. The blank is where the customization happens. That's why one function can serve many different uses: the body is the form, and the parameters are the blanks that get filled differently each time.</p>
  `,

  /* 1.4 Mental model */
  'topics-8-11-1-4': `
    <p>A parameter is a local variable that exists only while the function is running, and it's automatically assigned its value from the call.</p>
<pre class="language-javascript"><code class="language-javascript">function greet(name) {
  // it's like JS does this for you on each call:
  // const name = (whatever was passed in);
  console.log("Hello, " + name);
}

greet("Os");
// behaves as if: const name = "Os"; then runs the body</code></pre>
    <p>Once the function finishes, the parameter is gone. The next call creates a fresh one.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-8-11-1-5': `
<pre class="language-javascript"><code class="language-javascript">function add(a, b) {
  return a + b;
}

const result = add(2, 3);

// JavaScript is thinking:
// Line 1: see function add → register it with two parameters: a and b. Don't run the body yet.
// Line 5: see add(2, 3) → look up add, jump into the body, set a = 2 and b = 3 (the parameters get their values from the call).
// Line 2: run return a + b → 2 + 3 = 5, exit the body, hand 5 back to the caller.
// Line 5: store 5 in result. The local a and b are now gone.</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-8-11-2-0': `
    <p>If a parameter is <code>undefined</code> inside the body, the call didn't pass a value for it.</p>
<pre class="language-javascript"><code class="language-javascript">function greet(name) {
  console.log("hi, " + name);
}

greet();
// prints "hi, undefined" — the parameter exists but no argument was passed
// fix: greet("Os"); — or set a default: function greet(name = "friend")</code></pre>

    <p>If you get unexpected results, log the parameter at the top of the body to see what actually came in:</p>
<pre class="language-javascript"><code class="language-javascript">function calculateTotal(price, tax) {
  console.log("got:", price, tax);   // see what was passed in
  return price + (price * tax);
}</code></pre>
  `,

  /* 2.1 The part that makes it click */
  'topics-8-11-2-1': `
    <p>The parameter is just a variable. It happens to get its value from the function call instead of from a regular <code>const</code> or <code>let</code> — but inside the body, it acts the same as any other variable.</p>
    <p>That's the whole trick: parameters are how the outside world hands data to a function. Once the data is inside, it's a local variable. When the function ends, that variable disappears.</p>
  `,

  /* 2.2 Common confusions */
  'topics-8-11-2-2': `
    <p><strong>Confusion: parameters vs arguments</strong></p>
<pre class="language-javascript"><code class="language-javascript">function add(a, b) {     // a and b are PARAMETERS — placeholders defined here
  return a + b;
}

add(5, 3);                // 5 and 3 are ARGUMENTS — actual values passed in</code></pre>
    <p>Parameters are written when defining. Arguments are passed when calling. Same idea from two sides.</p>

    <p><strong>Confusion: parameters are local</strong></p>
<pre class="language-javascript"><code class="language-javascript">function greet(name) {
  console.log(name);    // works — name exists in the body
}

console.log(name);      // wrong: ReferenceError — name doesn't exist out here</code></pre>
    <p>Parameters live and die with the function call. Outside the body, they don't exist.</p>

    <p><strong>Confusion: same name as outer variable</strong></p>
<pre class="language-javascript"><code class="language-javascript">const name = "outer";

function greet(name) {       // parameter "name" shadows the outer one
  console.log(name);         // logs whatever was passed in, NOT "outer"
}

greet("Os");                 // "Os"
console.log(name);           // "outer" — the outer variable is unchanged</code></pre>

    <p><strong>Confusion: order matters</strong></p>
<pre class="language-javascript"><code class="language-javascript">function divide(a, b) { return a / b; }

divide(10, 2);    // 5 — a is 10, b is 2
divide(2, 10);    // 0.2 — different result, same parameters
// arguments fill parameters in the order they appear</code></pre>

    <p><strong>Confusion: too many or too few arguments</strong></p>
<pre class="language-javascript"><code class="language-javascript">function add(a, b) { return a + b; }

add(2);           // b is undefined → 2 + undefined → NaN
add(2, 3, 4, 5);  // 4 and 5 are ignored — not an error</code></pre>
    <p>JavaScript doesn't enforce that the right number of arguments was passed. Missing values become <code>undefined</code>; extras are silently ignored.</p>
  `,

  /* 2.3 Common mistakes */
  'topics-8-11-2-3': `
<pre class="language-javascript"><code class="language-javascript">function greet(name) {
  console.log("hi, " + name);
}
greet();
// works, but prints "hi, undefined" — no argument passed
// fix: greet("Os"); — or set a default: function greet(name = "friend")</code></pre>

<pre class="language-javascript"><code class="language-javascript">function divide(a, b) { return a / b; }
divide(2, 10);
// works, but result might not be what you wanted
// fix: pass arguments in the right order — divide(10, 2)</code></pre>

<pre class="language-javascript"><code class="language-javascript">function greet name { ... }
// wrong: parameter must be inside parens
// fix: function greet(name) { ... }</code></pre>

<pre class="language-javascript"><code class="language-javascript">function process(1stUser) { ... }
// wrong: parameter names can't start with a digit
// fix: function process(firstUser) { ... }</code></pre>

<pre class="language-javascript"><code class="language-javascript">function greet(name) { ... }
console.log(name);
// wrong: name doesn't exist outside the function
// fix: only use parameters inside the body</code></pre>

<pre class="language-javascript"><code class="language-javascript">function add(a, b, c, d, e, f, g) { ... }
// works, but too many parameters is hard to read and easy to mess up
// fix: take an object instead — function add({a, b, c, d}) { ... }</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-8-11-3-0': `
<pre class="language-javascript"><code class="language-javascript">// No parameters
function ping() { console.log("ping"); }

// One parameter
function double(n) { return n * 2; }

// Multiple parameters
function add(a, b) { return a + b; }
function fullName(first, last) { return first + " " + last; }

// Default parameter
function greet(name = "friend") {
  console.log("hi, " + name);
}
greet();         // "hi, friend"
greet("Os");     // "hi, Os"

// Object as a parameter — useful when there are many fields
function createUser({ name, age, email }) {
  console.log(name, age, email);
}
createUser({ name: "Os", age: 30, email: "os@example.com" });</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-8-11-3-1': `
    <p><strong>Example: parameter that decides what gets shown</strong></p>
<pre class="language-javascript"><code class="language-javascript">function showError(message) {
  errorBox.textContent = message;
  errorBox.classList.add("visible");
}

showError("Email is required");
showError("Network failed");
// the parameter "message" lets the same function display any error text</code></pre>

    <p><strong>Example: event parameter</strong></p>
<pre class="language-javascript"><code class="language-javascript">function handleClick(event) {
  event.preventDefault();
  console.log("clicked at", event.clientX, event.clientY);
}

button.addEventListener("click", handleClick);
// the browser calls handleClick and passes the event as the argument
// "event" is the parameter that catches it</code></pre>

    <p><strong>Example: parameter for the data being processed</strong></p>
<pre class="language-javascript"><code class="language-javascript">function buildProductCard(product) {
  const card = document.createElement("div");
  card.className = "card";
  card.textContent = product.name;
  return card;
}

const card1 = buildProductCard({ name: "Hat" });
const card2 = buildProductCard({ name: "Shirt" });
// same function, different products, different cards</code></pre>

    <p><strong>Example: defaults for optional behavior</strong></p>
<pre class="language-javascript"><code class="language-javascript">function fetchUsers(limit = 10, offset = 0) {
  return fetch("/api/users?limit=" + limit + "&offset=" + offset);
}

fetchUsers();           // uses defaults — limit=10, offset=0
fetchUsers(50);         // limit=50, offset=0 (default)
fetchUsers(50, 100);    // limit=50, offset=100</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-8-11-3-2': `
    <ul>
      <li><strong>Arguments</strong> → the actual values that fill in the parameters when calling</li>
      <li><strong>Function body</strong> → where parameters are used as variables</li>
      <li><strong>Scope</strong> → parameters are local to the function</li>
      <li><strong>Default parameters</strong> → fallback values when an argument isn't passed</li>
      <li><strong>Destructuring</strong> → unpacking object or array parameters into named pieces</li>
      <li><strong>Variables</strong> → parameters follow the same naming rules</li>
      <li><strong>Reusability</strong> → parameters are what make a function reusable across different values</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-8-11-3-3': `
    <ul>
      <li>Arguments</li>
      <li>Default parameters</li>
      <li>Rest parameters (<code>...args</code>)</li>
      <li>Destructured parameters</li>
      <li>Function body</li>
      <li>Local scope</li>
      <li>Variable shadowing</li>
      <li>Variable naming rules</li>
    </ul>
  `,


  /* ========================================================= 
   Sub-lesson: 3.9.13 Functions → arguments
 =======================================================*/

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-8-12-0-0': `
    <p>An argument is the actual value you pass in when you call a function. It fills in the parameter slot.</p>
    <p>Parameters are the placeholders defined with the function. Arguments are the real values handed over each time the function is called.</p>
  `,

  /* 0.1 Syntax */
  'topics-8-12-0-1': `
<pre class="language-javascript"><code class="language-javascript">function double(n) {
  return n * 2;
}

double(5);     // 5 is the argument → returns 10
double(7);     // 7 is the argument → returns 14
double(100);   // 100 is the argument → returns 200</code></pre>
    <p>Every time you call the function, the argument inside the parens is what fills the parameter for that call. Different argument, different result.</p>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-8-12-0-2': `
<pre class="language-javascript"><code class="language-javascript">function buildEmail(to, subject) {
  return "To: " + to + "\\nSubject: " + subject;
}

buildEmail("os@example.com", "Welcome!");
// returns: "To: os@example.com\\nSubject: Welcome!"

// buildEmail            → the function being called
// (                     → opens the argument list
// "os@example.com"      → first argument — fills the "to" parameter
// ,                     → separator
// "Welcome!"            → second argument — fills the "subject" parameter
// )                     → closes the argument list
// ;                     → ends the statement</code></pre>
    <p>Arguments are matched to parameters in order. The first argument fills the first parameter, the second fills the second, and so on.</p>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-8-12-0-3': `
    <p>Arguments can be any value — numbers, strings, booleans, objects, arrays, even other functions:</p>
<pre class="language-javascript"><code class="language-javascript">log(42);                       // number argument
log("hello");                  // string argument
log(true);                     // boolean argument
log([1, 2, 3]);                // array argument
log({ name: "Os" });           // object argument
log(getCurrentUser);           // function argument (passed as a reference)</code></pre>

    <p>Arguments can also be expressions — JavaScript evaluates them before passing the result:</p>
<pre class="language-javascript"><code class="language-javascript">double(2 + 3);                 // 2 + 3 evaluates to 5 → double(5) → 10
double(getNumber());           // getNumber() runs first, its return value becomes the argument
double(price * 1.08);          // expression evaluated first, then passed</code></pre>

    <p>If you pass too few arguments, missing parameters are <code>undefined</code>:</p>
<pre class="language-javascript"><code class="language-javascript">function greet(first, last) {
  console.log("hi, " + first + " " + last);
}

greet("Os");
// prints: "hi, Os undefined" — last got no argument</code></pre>

    <p>If you pass too many, the extras are silently ignored:</p>
<pre class="language-javascript"><code class="language-javascript">function add(a, b) { return a + b; }
add(1, 2, 3, 4, 5);
// returns 3 — only a and b are used, the rest are dropped</code></pre>

    <p>JavaScript doesn't enforce argument count. Missing values become <code>undefined</code>; extras are ignored without warning.</p>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-8-12-1-0': `
    <p>A function with parameters needs a way to receive actual values. Arguments are how the call supplies those values.</p>
    <p>Without arguments, the parameters in the function would always be <code>undefined</code> — the function would have placeholder slots but nothing in them. Arguments are the bridge between the call site and the function's body.</p>
  `,

  /* 1.1 Why use it */
  'topics-8-12-1-1': `
    <p>You pass arguments any time you want a function to do its work on specific values. Each call can pass different arguments to get different results from the same function.</p>
<pre class="language-javascript"><code class="language-javascript">function formatPrice(amount) {
  return "$" + amount.toFixed(2);
}

formatPrice(19.99);    // returns "$19.99"
formatPrice(5);        // returns "$5.00"
formatPrice(1000);     // returns "$1000.00"

// the function is the same — the arguments make each call different</code></pre>
    <p>Arguments are how a single function handles many situations. Without them, you'd need a separate function for every possible input.</p>
  `,

  /* 1.2 Where you use it */
  'topics-8-12-1-2': `
    <p>Arguments appear at every function call — your own, built-in functions, and third-party libraries.</p>
<pre class="language-javascript"><code class="language-javascript">// Built-in functions
console.log("hello");                      // "hello" is the argument
parseInt("42");                            // "42" is the argument
setTimeout(showMessage, 1000);             // two arguments: a function reference and a number

// String methods
"hello world".indexOf("world");            // "world" is the argument

// Array methods
[1, 2, 3].push(4);                          // 4 is the argument
[1, 2, 3].includes(2);                      // 2 is the argument
[1, 2, 3].map(n => n * 2);                  // an arrow function is the argument

// Your own functions
showError("Email is required");
calculateTax(50, 0.08);
buildCard({ name: "Hat", price: 20 });</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-8-12-1-3': `
    <p>If a parameter is a blank in a form, an argument is what you write into that blank. The form (the function) stays the same. The blanks (parameters) stay the same. What changes each time is what you fill in (the arguments).</p>
    <p>Every time a function is called, the arguments are what give the parameters their values for that one run. The next call gets fresh arguments, fresh parameters, fresh result.</p>
  `,

  /* 1.4 Mental model */
  'topics-8-12-1-4': `
    <p>Arguments flow from the call site into the parameters, in order.</p>
<pre class="language-javascript"><code class="language-javascript">function greet(first, last) { ... }
//              ↑      ↑
//          parameter  parameter

greet("Os", "Garcia");
//      ↓     ↓
//   argument argument

// inside the body:
// first  = "Os"
// last   = "Garcia"</code></pre>
    <p>The first argument fills the first parameter, the second fills the second, and so on. Position is what matches them up — not name.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-8-12-1-5': `
<pre class="language-javascript"><code class="language-javascript">function multiply(x, y) {
  return x * y;
}

const result = multiply(4, 6);
console.log(result);
// prints: 24

// JavaScript is thinking:
// Line 1: see function multiply → register it with two parameters: x and y. Don't run the body yet.
// Line 5: see multiply(4, 6) → evaluate the arguments (4 and 6 are already values), look up multiply, jump into the body. Set x = 4, y = 6.
// Line 2: run return x * y → 4 * 6 = 24, exit the body, hand 24 back to the caller.
// Line 5: store 24 in result.
// Line 6: log result → 24.</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-8-12-2-0': `
    <p>If a function returns the wrong result, the most common cause is wrong arguments — wrong values, wrong order, or wrong types. Log the arguments at the top of the body to see what actually came in.</p>
<pre class="language-javascript"><code class="language-javascript">function divide(a, b) {
  console.log("got:", a, b);
  return a / b;
}

divide(2, 10);
// prints: got: 2 10
// returns: 0.2 — probably not what you wanted
// you passed (2, 10), but the function expects (top, bottom) → meant divide(10, 2)</code></pre>

    <p>If a parameter shows up as <code>undefined</code>, the call didn't pass an argument for it. Check the call site — and consider adding a default in the parameter list.</p>
  `,

  /* 2.1 The part that makes it click */
  'topics-8-12-2-1': `
    <p>Arguments and parameters are the same idea, named from two sides:</p>
    <ul>
      <li>From the function's side, they're <strong>parameters</strong> — slots waiting to be filled.</li>
      <li>From the caller's side, they're <strong>arguments</strong> — values being handed over.</li>
    </ul>
    <p>The same data, just named differently depending on whether you're writing the function or calling it.</p>
  `,

  /* 2.2 Common confusions */
  'topics-8-12-2-2': `
    <p><strong>Confusion: parameters vs arguments</strong></p>
<pre class="language-javascript"><code class="language-javascript">function add(a, b) {     // a, b are PARAMETERS — defined here
  return a + b;
}

add(5, 3);                // 5, 3 are ARGUMENTS — passed here</code></pre>
    <p>Parameters are written when defining. Arguments are passed when calling.</p>

    <p><strong>Confusion: order matters, names don't</strong></p>
<pre class="language-javascript"><code class="language-javascript">function divide(top, bottom) {
  return top / bottom;
}

divide(10, 2);    // top = 10, bottom = 2 → 5
divide(2, 10);    // top = 2, bottom = 10 → 0.2

// the variable names you use at the call site don't matter:
const a = 10, b = 2;
divide(a, b);     // top = 10 (value of a), bottom = 2 (value of b)</code></pre>
    <p>JavaScript matches arguments to parameters by position, not name.</p>

    <p><strong>Confusion: passing values vs passing references</strong></p>
<pre class="language-javascript"><code class="language-javascript">function changeIt(arr) {
  arr.push(99);
}

const numbers = [1, 2, 3];
changeIt(numbers);
console.log(numbers);
// prints: [1, 2, 3, 99] — the array WAS modified
// objects and arrays are passed by reference — changes inside the function affect the original</code></pre>

    <p><strong>Confusion: extra arguments don't error</strong></p>
<pre class="language-javascript"><code class="language-javascript">function add(a, b) { return a + b; }

add(1, 2, 3, 4);
// returns 3 — extras are silently ignored, no error
// JS doesn't check argument count — be careful, typos won't be caught</code></pre>
  `,

  /* 2.3 Common mistakes */
  'topics-8-12-2-3': `
<pre class="language-javascript"><code class="language-javascript">function divide(top, bottom) { return top / bottom; }
divide(2, 10);
// returns 0.2 — arguments in wrong order
// fix: divide(10, 2);</code></pre>

<pre class="language-javascript"><code class="language-javascript">function greet(first, last) {
  console.log("hi, " + first + " " + last);
}
greet("Os");
// prints: "hi, Os undefined" — missing second argument
// fix: greet("Os", "Garcia");</code></pre>

<pre class="language-javascript"><code class="language-javascript">function double(n) { return n * 2; }
double("5");
// returns "55" — string "5" + string "5", not 10
// fix: double(5); — pass a number, not a string</code></pre>

<pre class="language-javascript"><code class="language-javascript">function showUser(name age) { ... }
// wrong: missing comma between arguments
// fix: showUser("Os", 30);</code></pre>

<pre class="language-javascript"><code class="language-javascript">function process(data) { ... }
process();
// works, but data is undefined inside the body
// fix: process(actualData); — or set a default: function process(data = []) { ... }</code></pre>

<pre class="language-javascript"><code class="language-javascript">function logName(name) { console.log(name); }
logName(getName);
// passes the FUNCTION getName as the argument, not its return value
// fix: logName(getName()); — call it to get the name</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-8-12-3-0': `
<pre class="language-javascript"><code class="language-javascript">// Single value argument
function square(n) { return n * n; }
square(5);
// returns: 25

// Multiple arguments
function fullName(first, last) { return first + " " + last; }
fullName("Os", "Garcia");
// returns: "Os Garcia"

// Argument is an expression — evaluated first
function double(n) { return n * 2; }
double(3 + 4);
// 3 + 4 → 7 → double(7) → returns 14

// Argument is a variable
const price = 19.99;
function format(p) { return "$" + p.toFixed(2); }
format(price);
// returns: "$19.99"

// Argument is the result of another function
function getAge() { return 30; }
function isAdult(age) { return age >= 18; }
isAdult(getAge());
// getAge() → 30 → isAdult(30) → returns true

// Argument is an object or array
function showProduct(product) { return product.name; }
showProduct({ name: "Hat", price: 20 });
// returns: "Hat"</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-8-12-3-1': `
    <p><strong>Example: passing the event object</strong></p>
<pre class="language-javascript"><code class="language-javascript">function handleSubmit(event) {
  event.preventDefault();
  console.log("form submitted");
}

form.addEventListener("submit", handleSubmit);
// the browser calls handleSubmit and passes the event as the argument
// you didn't pass it manually — the event listener system did</code></pre>

    <p><strong>Example: arguments built dynamically</strong></p>
<pre class="language-javascript"><code class="language-javascript">function showWelcome(name) {
  alert("Welcome, " + name + "!");
}

const userName = nameInput.value;
showWelcome(userName);
// the argument comes from a form input — different each time the user types something different</code></pre>

    <p><strong>Example: passing data through callbacks</strong></p>
<pre class="language-javascript"><code class="language-javascript">function logItem(item) {
  console.log("processing:", item);
}

const items = ["a", "b", "c"];
items.forEach(logItem);
// forEach calls logItem three times, passing each item as the argument
// prints:
//   processing: a
//   processing: b
//   processing: c</code></pre>

    <p><strong>Example: arguments mixed from many sources</strong></p>
<pre class="language-javascript"><code class="language-javascript">function calculateTotal(price, taxRate, discount) {
  const taxed = price + (price * taxRate);
  return taxed - discount;
}

const total = calculateTotal(
  product.price,         // from a product object
  REGION_TAX_RATE,       // from a constant
  user.couponDiscount    // from the user
);
// each argument comes from a different place, all combined into one call</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-8-12-3-2': `
    <ul>
      <li><strong>Parameters</strong> → the placeholders that arguments fill</li>
      <li><strong>Calling a function</strong> → arguments go inside the call's parens</li>
      <li><strong>Default parameters</strong> → fallback values when no argument is passed</li>
      <li><strong>Pass by value vs reference</strong> → primitives copy, objects share</li>
      <li><strong>Expressions</strong> → arguments can be expressions, evaluated before the call</li>
      <li><strong>Argument order</strong> → matched to parameters by position, not name</li>
      <li><strong>Function references</strong> → functions can themselves be arguments</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-8-12-3-3': `
    <ul>
      <li>Parameters</li>
      <li>Default parameters</li>
      <li>Rest parameters (<code>...args</code>)</li>
      <li>Spread syntax (<code>...</code>)</li>
      <li>Pass by value vs pass by reference</li>
      <li>Function as argument (callbacks)</li>
      <li>Argument expressions</li>
    </ul>
  `,


  /* ========================================================= 
   Sub-lesson: 3.9.14 Functions → return values
 =======================================================*/

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-8-13-0-0': `
    <p>A return value is the value a function hands back to whoever called it. You use the <code>return</code> keyword inside the body to send a value out.</p>
    <p>Think of arguments as data going <em>into</em> the function and the return value as data coming <em>out</em>.</p>
  `,

  /* 0.1 Syntax */
  'topics-8-13-0-1': `
<pre class="language-javascript"><code class="language-javascript">function square(n) {
  return n * n;
}

const result = square(4);
console.log(result);
// prints: 16</code></pre>
    <p>The <code>return</code> statement does two things at once: it ends the function and hands a value back. The caller catches that value and can use it like any other.</p>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-8-13-0-2': `
<pre class="language-javascript"><code class="language-javascript">function getDiscountedPrice(price) {
  const discount = price * 0.10;
  return price - discount;
}

const finalPrice = getDiscountedPrice(50);
console.log(finalPrice);
// prints: 45

// function              → keyword starting the declaration
// getDiscountedPrice    → the function name
// (price)               → parameter
// const discount        → local variable used inside the body
// return                → keyword that ends the function and hands a value back
// price - discount      → the value being returned
// const finalPrice      → catches the returned value at the call site</code></pre>
    <p>Without <code>return</code>, the function still runs — but it doesn't hand anything back. The caller would just get <code>undefined</code>.</p>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-8-13-0-3': `
    <p><code>return</code> immediately ends the function — anything after it is unreachable:</p>
<pre class="language-javascript"><code class="language-javascript">function check() {
  return "done";
  console.log("never runs");   // dead code — return already exited
}</code></pre>

    <p>If you don't write <code>return</code>, the function returns <code>undefined</code>:</p>
<pre class="language-javascript"><code class="language-javascript">function noReturn() {
  const x = 5;
}

const result = noReturn();
console.log(result);
// prints: undefined</code></pre>

    <p><code>return</code> with no value also gives <code>undefined</code> — useful for ending a function early:</p>
<pre class="language-javascript"><code class="language-javascript">function processUser(user) {
  if (!user) return;       // bail out early — returns undefined
  console.log(user.name);
}</code></pre>

    <p>You can return any value: a number, string, boolean, object, array, or even another function:</p>
<pre class="language-javascript"><code class="language-javascript">function getNumber()  { return 42; }
function getName()    { return "Os"; }
function getActive()  { return true; }
function getUser()    { return { name: "Os", age: 30 }; }
function getItems()   { return [1, 2, 3]; }
function getGreeter() { return function() { return "hi"; }; }</code></pre>

    <p>A function call is an expression — the call itself produces the returned value, so you can use it inline:</p>
<pre class="language-javascript"><code class="language-javascript">function add(a, b) { return a + b; }

const total = add(2, 3) * 10;             // 5 * 10 → 50
console.log("Sum: " + add(2, 3));         // "Sum: 5"
if (add(2, 3) > 4) { ... }                // 5 > 4 → true</code></pre>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-8-13-1-0': `
    <p>Functions often need to give something back — a calculated number, a formatted string, a fetched user, a yes/no answer. Without a way to send a value out, the work would happen but never reach the rest of your code.</p>
    <p><code>return</code> is how a function shares its result. The caller catches it and uses it however they need to.</p>
  `,

  /* 1.1 Why use it */
  'topics-8-13-1-1': `
    <p>Use <code>return</code> when the function produces a value that the rest of your code needs. Use it whenever the function answers a question or transforms data.</p>
<pre class="language-javascript"><code class="language-javascript">// Functions that compute and return a value
function calculateTax(price, rate) { return price * rate; }
function formatPrice(amount)       { return "$" + amount.toFixed(2); }
function isAdult(age)              { return age >= 18; }

// Used at the call site
const tax = calculateTax(100, 0.08);
console.log(formatPrice(tax));
// prints: "$8.00"

if (isAdult(user.age)) {
  showAdultContent();
}</code></pre>
    <p>If a function only causes side effects (like updating the DOM), it usually doesn't need to return anything. If it produces information, it almost always should.</p>
  `,

  /* 1.2 Where you use it */
  'topics-8-13-1-2': `
    <p>Return values appear anywhere a function produces a result you need to use.</p>
<pre class="language-javascript"><code class="language-javascript">// Built-in methods all return values
"hello".toUpperCase();           // returns "HELLO"
[1, 2, 3].includes(2);           // returns true
Math.max(5, 9, 3);               // returns 9
JSON.parse('{"a":1}');           // returns { a: 1 }

// Your own functions
function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function getCartTotal(cart) {
  return cart.reduce((sum, item) => sum + item.price, 0);
}

const cart = getCart();
const total = getCartTotal(cart);
console.log("Total: $" + total);</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-8-13-1-3': `
    <p>If calling a function is like asking someone to do a task, the return value is their answer.</p>
    <p>You hand them inputs (arguments). They do the work (the body). When they're done, they hand back a result (the return value). If they don't hand anything back, you get <code>undefined</code> — the equivalent of a shrug.</p>
    <p>The return value is how a function's work flows out into the rest of your code. Without it, the work happens but nobody gets to use the result.</p>
  `,

  /* 1.4 Mental model */
  'topics-8-13-1-4': `
    <p>A function call is an expression that evaluates to whatever the function returns.</p>
<pre class="language-javascript"><code class="language-javascript">function add(a, b) { return a + b; }

add(2, 3)
// JS sees: call add with 2, 3
// inside: return 2 + 3 → 5
// the WHOLE expression "add(2, 3)" becomes 5
// from the outside, calling add(2, 3) is the same as writing 5</code></pre>
    <p>That's why you can use a function call anywhere you'd use a value: in math, in conditionals, as an argument to another function. The call <em>is</em> a value, once it's been run.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-8-13-1-5': `
<pre class="language-javascript"><code class="language-javascript">function getDouble(n) {
  const result = n * 2;
  return result;
}

const x = getDouble(7);
console.log(x);
// prints: 14

// JavaScript is thinking:
// Line 1: see function getDouble → register it. Don't run the body yet.
// Line 6: see getDouble(7) → look up getDouble, jump into the body, set n = 7.
// Line 2: run const result = 7 * 2 → result is 14.
// Line 3: run return result → exit the body, hand 14 back to the caller.
// Line 6: store 14 in x.
// Line 7: log x → 14.</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-8-13-2-0': `
    <p>If you call a function and the result is <code>undefined</code> when you expected something else, the function probably forgot to <code>return</code>.</p>
<pre class="language-javascript"><code class="language-javascript">function calculateTotal(price, tax) {
  const total = price + (price * tax);
  // forgot return!
}

const t = calculateTotal(50, 0.08);
console.log(t);
// prints: undefined — the function ran, but never returned</code></pre>

    <p>The other common bug: <code>return</code> with nothing on it accidentally ending the function early.</p>
<pre class="language-javascript"><code class="language-javascript">function add(a, b) {
  return;
  a + b;
}
const sum = add(2, 3);
// returns undefined — return on its own line ends the function immediately
// fix: return a + b;</code></pre>
    <p>If a function should produce a value but doesn't, check that <code>return</code> is there and that the value is on the same line.</p>
  `,

  /* 2.1 The part that makes it click */
  'topics-8-13-2-1': `
    <p>A function call <em>becomes</em> its return value. Once it runs, the call expression and the returned value are interchangeable in the surrounding code.</p>
    <p><code>add(2, 3)</code> becomes <code>5</code>. <code>getName()</code> becomes <code>"Os"</code>. <code>isAdult(20)</code> becomes <code>true</code>. The function disappears, the value remains.</p>
    <p>This is why functions can be combined like building blocks — the output of one becomes the input of the next.</p>
  `,

  /* 2.2 Common confusions */
  'topics-8-13-2-2': `
    <p><strong>Confusion: <code>return</code> vs <code>console.log</code></strong></p>
<pre class="language-javascript"><code class="language-javascript">function showA(n) {
  console.log(n * 2);    // prints to console, but doesn't hand back
}

function returnA(n) {
  return n * 2;          // hands the value back to the caller
}

const a = showA(5);      // logs 10, but a is undefined
const b = returnA(5);    // b is 10</code></pre>
    <p><code>console.log</code> shows. <code>return</code> hands back. They look similar but do completely different jobs.</p>

    <p><strong>Confusion: return ends the function</strong></p>
<pre class="language-javascript"><code class="language-javascript">function process(value) {
  if (!value) return;       // bail out early
  console.log("processing:", value);
  return "done";            // ends the function with "done"
  console.log("never runs");  // dead code
}</code></pre>
    <p>Whatever line <code>return</code> runs on, the function exits there. Code after it is ignored.</p>

    <p><strong>Confusion: returning undefined vs returning nothing</strong></p>
<pre class="language-javascript"><code class="language-javascript">function a() { }                  // returns undefined (no return)
function b() { return; }          // returns undefined (return with no value)
function c() { return undefined; } // returns undefined (explicit)
// all three are equivalent — just different ways of saying nothing</code></pre>

    <p><strong>Confusion: must use the returned value</strong></p>
<pre class="language-javascript"><code class="language-javascript">function getName() { return "Os"; }

getName();
// the function runs and returns "Os", but nothing catches the value — it's discarded

const name = getName();
// now the value is captured in a variable</code></pre>
    <p>If you don't store the return value or use it inline, it just disappears.</p>
  `,

  /* 2.3 Common mistakes */
  'topics-8-13-2-3': `
<pre class="language-javascript"><code class="language-javascript">function double(n) {
  n * 2;
}
const result = double(5);
console.log(result);
// prints: undefined — forgot the return keyword
// fix: return n * 2;</code></pre>

<pre class="language-javascript"><code class="language-javascript">function add(a, b) {
  return;
  a + b;
}
// returns undefined — return on its own line ended the function
// fix: return a + b;</code></pre>

<pre class="language-javascript"><code class="language-javascript">function getValue() {
  console.log(42);
}
const x = getValue();
console.log(x);
// prints: 42 then undefined — console.log shows but doesn't return
// fix: return 42;</code></pre>

<pre class="language-javascript"><code class="language-javascript">function check(value) {
  if (value > 10) {
    return "big";
  }
  // forgot a return for the else case
}
console.log(check(5));
// prints: undefined — only one branch returns
// fix: add return "small"; for the other case</code></pre>

<pre class="language-javascript"><code class="language-javascript">function makeUser(name) {
  return
    { name: name };
}
const user = makeUser("Os");
console.log(user);
// prints: undefined — return ends at the line break, the object is unreachable
// fix: keep return on the same line as the value
//      return { name: name };  OR  return (
//                                    { name: name }
//                                  );</code></pre>

<pre class="language-javascript"><code class="language-javascript">function calculate() {
  return 10;
  return 20;
}
calculate();
// returns 10 — the second return is dead code, never runs
// fix: only one return path per case</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-8-13-3-0': `
<pre class="language-javascript"><code class="language-javascript">// Returning a number
function add(a, b) { return a + b; }
add(2, 3);
// returns: 5

// Returning a string
function greeting(name) { return "Hello, " + name; }
greeting("Os");
// returns: "Hello, Os"

// Returning a boolean
function isEven(n) { return n % 2 === 0; }
isEven(4);
// returns: true

// Returning an object
function createUser(name, age) {
  return { name: name, age: age };
}
createUser("Os", 30);
// returns: { name: "Os", age: 30 }

// Returning early
function validate(value) {
  if (!value) return false;
  if (value.length < 3) return false;
  return true;
}

// Using the returned value inline
function double(n) { return n * 2; }
console.log(double(5) + double(10));
// prints: 30  (10 + 20)</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-8-13-3-1': `
    <p><strong>Example: returning a calculated value</strong></p>
<pre class="language-javascript"><code class="language-javascript">function getCartTotal(cart) {
  return cart.reduce((sum, item) => sum + item.price, 0);
}

const cart = [{ price: 10 }, { price: 20 }, { price: 30 }];
const total = getCartTotal(cart);
console.log("Total: $" + total);
// prints: "Total: $60"</code></pre>

    <p><strong>Example: returning true/false from a check</strong></p>
<pre class="language-javascript"><code class="language-javascript">function isValidEmail(email) {
  return email.includes("@") && email.length > 3;
}

if (isValidEmail(emailInput.value)) {
  submitForm();
} else {
  showError("Invalid email");
}
// the return value drives the if/else decision</code></pre>

    <p><strong>Example: returning a built object</strong></p>
<pre class="language-javascript"><code class="language-javascript">function buildProduct(name, price) {
  return {
    name: name,
    price: price,
    formatted: "$" + price.toFixed(2),
  };
}

const product = buildProduct("Hat", 19.99);
console.log(product.formatted);
// prints: "$19.99"</code></pre>

    <p><strong>Example: chaining calls together</strong></p>
<pre class="language-javascript"><code class="language-javascript">function getName() { return "  Os  "; }

const cleanName = getName().trim().toUpperCase();
console.log(cleanName);
// prints: "OS"
// each method returns a string, the next method runs on that returned value</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-8-13-3-2': `
    <ul>
      <li><strong>Function body</strong> → return is a statement inside the body</li>
      <li><strong>Calling a function</strong> → the call expression evaluates to the return value</li>
      <li><strong>Arguments</strong> → data flowing in; return values are data flowing out</li>
      <li><strong>Console.log vs return</strong> → showing vs handing back</li>
      <li><strong>Early return</strong> → using <code>return</code> to bail out of a function</li>
      <li><strong>Implicit return</strong> → arrow functions can return without the keyword</li>
      <li><strong>Chaining</strong> → calling a method on a returned value</li>
      <li><strong>Composition</strong> → using one function's return as another's argument</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-8-13-3-3': `
    <ul>
      <li><code>return</code> keyword</li>
      <li><code>console.log()</code> vs return</li>
      <li>Early return pattern</li>
      <li>Implicit return (arrow functions)</li>
      <li>Function composition</li>
      <li>Chained method calls</li>
      <li>Dead code</li>
      <li>Returning <code>undefined</code></li>
    </ul>
  `,


  /* ========================================================= 
   Sub-lesson: 3.9.15 Functions → console.log() vs return
 =======================================================*/

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-8-14-0-0': `
    <p><code>console.log()</code> and <code>return</code> are the two most-confused things in functions, because they both seem to "produce a value" — but they do completely different jobs.</p>
    <p><code>console.log()</code> <strong>shows</strong> a value in the developer console for you to read. <code>return</code> <strong>hands</strong> a value back to the code that called the function, so the program can keep using it.</p>
  `,

  /* 0.1 Syntax */
  'topics-8-14-0-1': `
<pre class="language-javascript"><code class="language-javascript">function showDouble(n) {
  console.log(n * 2);     // prints to the console
}

function returnDouble(n) {
  return n * 2;           // hands the value back to the caller
}

showDouble(5);
// prints: 10  (then the function ends, nothing is handed back)

const result = returnDouble(5);
console.log(result);
// prints: 10  (the value 10 was handed back, stored in result, then logged)</code></pre>
    <p>Same math, different outcomes. <code>showDouble</code> only displays. <code>returnDouble</code> produces a value the rest of the program can use.</p>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-8-14-0-2': `
<pre class="language-javascript"><code class="language-javascript">function getPrice(amount) {
  console.log("calculating...");   // shown for the developer
  return amount * 1.08;            // handed back to the caller
}

const total = getPrice(50);
console.log("Total: $" + total);
// prints:
//   calculating...
//   Total: $54

// console.log("calculating...")  → side effect — text appears in the console
// return amount * 1.08           → hands 54 back to whoever called getPrice
// const total = getPrice(50)     → catches the returned value (54)
// console.log("Total: $" + ...)  → uses that returned value to build the final message</code></pre>
    <p>You can have both in the same function. <code>console.log()</code> is for you (the developer) — <code>return</code> is for the rest of the program.</p>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-8-14-0-3': `
    <p><code>console.log()</code> doesn't return a useful value — it returns <code>undefined</code>:</p>
<pre class="language-javascript"><code class="language-javascript">const x = console.log("hi");
console.log(x);
// prints:
//   hi
//   undefined
// console.log shows "hi", then returns undefined, which is what x catches</code></pre>

    <p><code>return</code> doesn't print anything to the console — you have to log the returned value yourself:</p>
<pre class="language-javascript"><code class="language-javascript">function getValue() {
  return 42;
}

getValue();
// nothing appears in the console — the value was returned but not logged

console.log(getValue());
// prints: 42 — now you've caught the returned value and logged it</code></pre>

    <p>You can use <code>return</code>'s value anywhere in your code. <code>console.log()</code>'s output exists only in the console:</p>
<pre class="language-javascript"><code class="language-javascript">function add(a, b) { return a + b; }

const x = add(2, 3);     // 5 → can be reused, stored, passed around
const y = add(2, 3) * 10; // 50 → return value used in math

function showAdd(a, b) { console.log(a + b); }
const z = showAdd(2, 3);  // prints 5, but z is undefined</code></pre>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-8-14-1-0': `
    <p>People often see <code>console.log()</code> and assume the function is "outputting" a value. It's not — <code>console.log()</code> just prints to a developer tool. The rest of your code can't read what's in the console.</p>
    <p>If a function is supposed to produce a value the program will actually use — calculating a total, checking validity, building an object — you need <code>return</code>. If you only need to <em>see</em> the value while debugging, <code>console.log()</code> is fine.</p>
  `,

  /* 1.1 Why use it */
  'topics-8-14-1-1': `
    <p>Use <code>return</code> when the function produces a value the rest of the code needs. Use <code>console.log()</code> only to inspect what's happening while you write or debug code.</p>
<pre class="language-javascript"><code class="language-javascript">// Wrong: function "produces" a value, but only logs it
function getTax(price) {
  console.log(price * 0.08);
}

const tax = getTax(50);
console.log(tax);
// prints:
//   4
//   undefined  — you can't reuse the calculated tax

// Right: function returns the value
function getTax(price) {
  return price * 0.08;
}

const tax = getTax(50);
console.log("Tax: $" + tax);
// prints: "Tax: $4"</code></pre>
    <p>The rule of thumb: if you'll do anything with the value besides look at it, use <code>return</code>.</p>
  `,

  /* 1.2 Where you use it */
  'topics-8-14-1-2': `
    <p><code>return</code> shows up in functions that produce values. <code>console.log()</code> shows up while debugging or in functions whose only job is to display something.</p>
<pre class="language-javascript"><code class="language-javascript">// return — the function's job is to produce a value
function calculateTotal(price, tax) { return price + (price * tax); }
function isAdult(age)                { return age >= 18; }
function buildUser(name, age)        { return { name: name, age: age }; }

// console.log — the function's job is to show something OR for debugging
function debugCart(cart) {
  console.log("cart contents:", cart);
  console.log("item count:", cart.length);
}

// inside other functions, while debugging
function calculateTotal(price, tax) {
  console.log("got price:", price, "tax:", tax);   // temporary — for debugging
  const total = price + (price * tax);
  console.log("total:", total);                      // also temporary
  return total;                                       // the actual output
}</code></pre>
    <p>Once the bug's fixed, you remove the <code>console.log()</code> lines. The <code>return</code> stays.</p>
  `,

  /* 1.3 Plain English explanation */
  'topics-8-14-1-3': `
    <p>Imagine you ask a coworker to calculate something. There are two ways they can answer: they can shout the result across the room (<code>console.log</code>) — you hear it, but you can't put it in a spreadsheet — or they can write it on paper and hand it to you (<code>return</code>) — now you can use it however you want.</p>
    <p>The shouted answer is fine if you just want to know what they got. But if you need to actually use the number for something else, you need it in your hand. <code>return</code> is the paper. <code>console.log</code> is the shout.</p>
  `,

  /* 1.4 Mental model */
  'topics-8-14-1-4': `
    <p>Two completely different directions:</p>
<pre class="language-javascript"><code class="language-javascript">function example(n) {
  console.log(n);     // → goes OUT to the developer's console (you can read it)
  return n;           // → goes BACK to the caller (the program can use it)
}</code></pre>
    <p><code>console.log</code> is a side door pointed at you. <code>return</code> is the front door pointed at the rest of the program. They go to different places, for different audiences.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-8-14-1-5': `
<pre class="language-javascript"><code class="language-javascript">function showSquare(n) {
  console.log(n * n);
}

function getSquare(n) {
  return n * n;
}

const a = showSquare(4);
const b = getSquare(4);
console.log("a is:", a);
console.log("b is:", b);
// prints:
//   16
//   a is: undefined
//   b is: 16

// JavaScript is thinking:
// Line 9: see showSquare(4) → run the body, console.log shows 16, function ends with no return → returns undefined. Store undefined in a.
// Line 10: see getSquare(4) → run the body, return 4 * 4 → 16. Store 16 in b.
// Line 11: log "a is:" and a → "a is: undefined".
// Line 12: log "b is:" and b → "b is: 16".</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-8-14-2-0': `
    <p>If you call a function and try to use its result, but the result is <code>undefined</code> — the function is probably using <code>console.log</code> instead of <code>return</code>.</p>
<pre class="language-javascript"><code class="language-javascript">function getDiscount(price) {
  console.log(price * 0.10);
}

const discount = getDiscount(50);
const finalPrice = 50 - discount;
console.log(finalPrice);
// prints:
//   5
//   NaN  — discount is undefined, so 50 - undefined is NaN
// fix: change console.log to return inside getDiscount</code></pre>

    <p>The flip side: if you write a clean <code>return</code> but nothing shows in the console, you forgot to log the result. <code>return</code> alone doesn't print anything — you have to log the value at the call site (or at the top level) to see it.</p>
  `,

  /* 2.1 The part that makes it click */
  'topics-8-14-2-1': `
    <p><code>console.log()</code> is a <strong>side effect</strong>. It changes the world (the console) but doesn't produce a value for the program.</p>
    <p><code>return</code> is the function's <strong>output</strong>. It's the value the function gives back so the rest of the program can use it.</p>
    <p>Once you see this split — "showing" vs "producing" — you stop conflating them. Logs are for you. Returns are for the program.</p>
  `,

  /* 2.2 Common confusions */
  'topics-8-14-2-2': `
    <p><strong>Confusion: thinking <code>console.log</code> "outputs" a value</strong></p>
<pre class="language-javascript"><code class="language-javascript">function getFive() {
  console.log(5);
}

const x = getFive();
console.log(x);
// prints:
//   5
//   undefined
// the 5 was shown in the console, but the function didn't return it — x is undefined</code></pre>
    <p><code>console.log</code> doesn't pass values out of the function. Only <code>return</code> does.</p>

    <p><strong>Confusion: <code>return</code> doesn't print on its own</strong></p>
<pre class="language-javascript"><code class="language-javascript">function getNumber() { return 42; }

getNumber();
// nothing visible in the console — the value was returned, but nobody logged it

console.log(getNumber());
// prints: 42 — now you've caught and logged the return value</code></pre>

    <p><strong>Confusion: which to use</strong></p>
<pre class="language-javascript"><code class="language-javascript">// Use return when the value will be USED
function getCartTotal(cart) {
  return cart.reduce((sum, item) => sum + item.price, 0);
}

// Use console.log when you only need to SEE the value (debugging or display)
function debugCart(cart) {
  console.log("cart length:", cart.length);
  console.log("first item:", cart[0]);
}</code></pre>
    <p>If the value flows on into more code — return. If it just needs to be displayed for the developer — log.</p>

    <p><strong>Confusion: using both together</strong></p>
<pre class="language-javascript"><code class="language-javascript">function calculate(price, tax) {
  console.log("running with:", price, tax);   // for debugging
  const total = price + (price * tax);
  return total;                                 // for the program
}

const final = calculate(50, 0.08);
console.log("final:", final);
// prints:
//   running with: 50 0.08
//   final: 54</code></pre>
    <p>You can use both. <code>console.log</code> for the developer, <code>return</code> for the program. They don't conflict.</p>
  `,

  /* 2.3 Common mistakes */
  'topics-8-14-2-3': `
<pre class="language-javascript"><code class="language-javascript">function double(n) {
  console.log(n * 2);
}
const result = double(5);
console.log(result);
// prints:
//   10
//   undefined
// fix: return n * 2;</code></pre>

<pre class="language-javascript"><code class="language-javascript">function getName() {
  return "Os";
}
getName();
// nothing prints — return alone doesn't display
// fix: console.log(getName());  — or save and use the value</code></pre>

<pre class="language-javascript"><code class="language-javascript">function isAdult(age) {
  console.log(age >= 18);
}
if (isAdult(20)) {
  showAdultContent();
}
// the if check fails — isAdult logs true but RETURNS undefined
// fix: return age >= 18;</code></pre>

<pre class="language-javascript"><code class="language-javascript">function calculate(price) {
  return price * 1.08;
  console.log("done");
}
// "done" never prints — return ended the function
// fix: console.log before return, OR remove the unreachable line</code></pre>

<pre class="language-javascript"><code class="language-javascript">function showError(msg) {
  return console.log(msg);
}
const x = showError("oops");
console.log(x);
// prints:
//   oops
//   undefined
// returning console.log() returns undefined — usually pointless
// fix: just call console.log, no return needed</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-8-14-3-0': `
<pre class="language-javascript"><code class="language-javascript">// console.log only — for displaying, no usable result
function showStatus() {
  console.log("All systems operational");
}
showStatus();
// prints: "All systems operational"

// return only — the function produces a value
function getStatus() {
  return "operational";
}
const status = getStatus();
console.log("status:", status);
// prints: "status: operational"

// Both — log for debugging, return for the program
function calculateTip(bill, percent) {
  console.log("calculating tip on", bill);
  return bill * (percent / 100);
}
const tip = calculateTip(50, 20);
console.log("tip:", tip);
// prints:
//   calculating tip on 50
//   tip: 10

// console.log inside the call site
function double(n) { return n * 2; }
console.log(double(7));
// prints: 14 — calling and logging at once</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-8-14-3-1': `
    <p><strong>Example: validation that needs the result</strong></p>
<pre class="language-javascript"><code class="language-javascript">function isValidEmail(email) {
  return email.includes("@") && email.length > 3;
}

if (isValidEmail(emailInput.value)) {
  submitForm();
} else {
  showError("Invalid email");
}
// must use return — the if statement needs the boolean</code></pre>

    <p><strong>Example: temporary debug logs while developing</strong></p>
<pre class="language-javascript"><code class="language-javascript">function processOrder(order) {
  console.log("incoming order:", order);          // debug — remove later
  const total = calculateTotal(order.items);
  console.log("calculated total:", total);        // debug — remove later
  return total;                                    // the actual result
}
// console.log helps while building, but the return is what matters</code></pre>

    <p><strong>Example: function whose only job is to display</strong></p>
<pre class="language-javascript"><code class="language-javascript">function logUserInfo(user) {
  console.log("Name: " + user.name);
  console.log("Email: " + user.email);
  console.log("Active: " + user.active);
}

logUserInfo({ name: "Os", email: "os@example.com", active: true });
// prints:
//   Name: Os
//   Email: os@example.com
//   Active: true
// no return needed — the function only exists to display</code></pre>

    <p><strong>Example: debugging a returned value</strong></p>
<pre class="language-javascript"><code class="language-javascript">function getCartTotal(cart) {
  return cart.reduce((sum, item) => sum + item.price, 0);
}

console.log(getCartTotal(myCart));
// shows what the function returned — useful while testing
// in the final code, the return value would be assigned to a variable instead</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-8-14-3-2': `
    <ul>
      <li><strong>return</strong> → produces a value the rest of the program can use</li>
      <li><strong>console.log()</strong> → side effect that shows a value in the developer console</li>
      <li><strong>Side effects</strong> → things a function does to the outside world</li>
      <li><strong>Pure functions</strong> → functions with no side effects, only return values</li>
      <li><strong>Debugging</strong> → <code>console.log</code> is the simplest debugging tool</li>
      <li><strong>undefined</strong> → what functions return when there's no <code>return</code> statement</li>
      <li><strong>Function composition</strong> → only works with returned values, not logged ones</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-8-14-3-3': `
    <ul>
      <li><code>return</code> keyword</li>
      <li><code>console.log()</code></li>
      <li>Side effects vs return values</li>
      <li>Pure functions</li>
      <li>Debugging with console</li>
      <li><code>console.warn</code>, <code>console.error</code>, <code>console.table</code></li>
      <li><code>undefined</code></li>
      <li>Function composition</li>
    </ul>
  `,


  /* ========================================================= 
   Sub-lesson: 3.9.16 Functions → scope
 =======================================================*/

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-8-15-0-0': `
    <p>Scope is the set of variables a piece of code can see and use. Every function creates its own scope — its own private workspace where local variables live.</p>
    <p>Code inside a function can see variables defined inside that function, plus variables from the surrounding scope. Code outside the function can't see what's inside it.</p>
  `,

  /* 0.1 Syntax */
  'topics-8-15-0-1': `
<pre class="language-javascript"><code class="language-javascript">const outerName = "Os";

function sayHi() {
  const innerMessage = "Hello!";
  console.log(outerName);       // works — function can see outer
  console.log(innerMessage);    // works — function can see its own
}

sayHi();
// prints:
//   Os
//   Hello!

console.log(innerMessage);
// ReferenceError — innerMessage is inside the function, not visible out here</code></pre>
    <p>Inside the function, both variables are reachable. Outside the function, only <code>outerName</code> exists — <code>innerMessage</code> doesn't escape.</p>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-8-15-0-2': `
<pre class="language-javascript"><code class="language-javascript">const APP_NAME = "Tracker";          // global scope

function startApp() {
  const startTime = Date.now();      // local scope of startApp
  console.log(APP_NAME + " started at " + startTime);
}

startApp();
// prints something like: "Tracker started at 1735000000000"

console.log(APP_NAME);    // works — global is visible everywhere
console.log(startTime);   // ReferenceError — local to startApp

// const APP_NAME       → global scope (top of the file)
// function startApp    → creates a new local scope
// const startTime      → lives only inside startApp's scope
// inside startApp      → can see APP_NAME (outer) AND startTime (own)
// outside startApp     → can see APP_NAME, but NOT startTime</code></pre>
    <p>Each function call creates a fresh local scope. When the function ends, that scope is thrown away — its local variables disappear.</p>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-8-15-0-3': `
    <p>Scope works like nested boxes — inner scopes can see out, outer scopes can't see in:</p>
<pre class="language-javascript"><code class="language-javascript">const a = 1;                  // outer scope

function outer() {
  const b = 2;                // outer's local scope
  
  function inner() {
    const c = 3;              // inner's local scope
    console.log(a, b, c);     // works — sees all three
  }

  inner();
  console.log(a, b);          // works — sees its own and the outer
  console.log(c);             // ReferenceError — c is inside inner
}

outer();
console.log(a);               // works
console.log(b, c);            // ReferenceError — b and c are inside functions</code></pre>

    <p>Variables in different scopes can have the same name without conflicting:</p>
<pre class="language-javascript"><code class="language-javascript">const name = "outer name";

function showName() {
  const name = "inner name";    // shadows the outer one
  console.log(name);            // "inner name"
}

showName();
console.log(name);              // "outer name"  — outer untouched</code></pre>

    <p>Parameters are also part of the function's local scope:</p>
<pre class="language-javascript"><code class="language-javascript">function greet(name) {        // name is local to greet
  console.log("Hello, " + name);
}

greet("Os");
console.log(name);            // ReferenceError — name was the parameter, gone now</code></pre>

    <p>Variables declared with <code>var</code> have function scope; <code>let</code> and <code>const</code> have block scope (smaller — limited to the nearest <code>{ }</code>):</p>
<pre class="language-javascript"><code class="language-javascript">function example() {
  if (true) {
    var v = 1;       // var: function-scoped
    let l = 2;       // let: block-scoped
    const c = 3;     // const: block-scoped
  }
  console.log(v);    // 1 — var leaks out of the if block
  console.log(l);    // ReferenceError — let stays inside the if
  console.log(c);    // ReferenceError — const stays inside the if
}</code></pre>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-8-15-1-0': `
    <p>If every variable were visible everywhere, big programs would be impossible. Two functions could accidentally share a variable named <code>count</code>, overwrite each other, and silently break things.</p>
    <p>Scope solves this by giving each function a private space. What happens inside the function stays inside. The rest of the program is protected from the function's intermediate steps.</p>
  `,

  /* 1.1 Why use it */
  'topics-8-15-1-1': `
    <p>You don't really "use" scope — it just exists. But understanding it lets you write functions that don't leak their internals into the rest of your code.</p>
<pre class="language-javascript"><code class="language-javascript">// Good: variables stay inside the function
function calculateTotal(items) {
  let total = 0;            // local — disappears when the function ends
  for (const item of items) {
    total = total + item.price;
  }
  return total;
}

const cartTotal = calculateTotal([{ price: 10 }, { price: 20 }]);
console.log(cartTotal);
// prints: 30
// outside the function, "total" doesn't exist — and that's a good thing</code></pre>
    <p>Keeping variables local means they can't accidentally collide with other code, and they're cleaned up automatically when the function finishes.</p>
  `,

  /* 1.2 Where you use it */
  'topics-8-15-1-2': `
    <p>Scope is in play every time a function runs. Most of the time you don't think about it consciously — until something goes wrong.</p>
<pre class="language-javascript"><code class="language-javascript">// Common scope patterns:

// 1. Helper variables stay inside the function
function buildGreeting(name) {
  const time = new Date().getHours();
  const period = time < 12 ? "morning" : "afternoon";
  return "Good " + period + ", " + name;
}

// 2. Reading outer variables (allowed)
const TAX_RATE = 0.08;
function withTax(price) {
  return price + (price * TAX_RATE);
}

// 3. Inner function reading outer's variables (allowed)
function makeCounter() {
  let count = 0;
  return function() {
    count = count + 1;     // inner can see outer's count
    return count;
  };
}</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-8-15-1-3': `
    <p>Think of a function like a sealed room. Inside the room, you can use anything in the room and anything visible through the door (the outer scope). But people outside the room can't see what's inside.</p>
    <p>Variables you create inside the function are objects in the room. They exist while the function is running and disappear when the function ends. The outer code never sees them.</p>
    <p>This is why two different functions can both have a variable called <code>count</code> without any conflict — they're in different rooms.</p>
  `,

  /* 1.4 Mental model */
  'topics-8-15-1-4': `
    <p>Scopes are nested. Inner scopes can look outward, but outer scopes can't look inward.</p>
<pre class="language-javascript"><code class="language-javascript">// global scope
//  ┌──────────────────────────────────────┐
//  │  const APP = "tracker";              │
//  │                                      │
//  │  function start() {  ← local scope ┐ │
//  │  ┌──────────────────────────────┐  │ │
//  │  │  const time = Date.now();    │  │ │
//  │  │  console.log(APP);  // OK    │  │ │
//  │  │  console.log(time); // OK    │  │ │
//  │  └──────────────────────────────┘  │ │
//  │  }                                  │ │
//  │                                      │
//  │  console.log(APP);   // OK          │
//  │  console.log(time);  // ReferenceError│
//  └──────────────────────────────────────┘</code></pre>
    <p>The function is a smaller box inside the bigger box. From inside, you can see out. From outside, the inner box looks like a black box.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-8-15-1-5': `
<pre class="language-javascript"><code class="language-javascript">const greeting = "Hello";

function makeMessage(name) {
  const fullMessage = greeting + ", " + name;
  return fullMessage;
}

const msg = makeMessage("Os");
console.log(msg);
// prints: "Hello, Os"

// JavaScript is thinking:
// Line 1: register greeting in global scope, value "Hello".
// Line 3: register makeMessage in global scope. Don't run it yet.
// Line 8: see makeMessage("Os") → call it. Create a NEW local scope for this call. In the local scope: name = "Os".
// Line 4: const fullMessage → look up greeting (not local, check outer → "Hello"), build "Hello, Os", store in local fullMessage.
// Line 5: return fullMessage → exit, hand "Hello, Os" back. The local scope (with name and fullMessage) is thrown away.
// Line 8: store the returned value in msg.
// Line 9: log msg → "Hello, Os".</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-8-15-2-0': `
    <p>If you get <code>ReferenceError: x is not defined</code>, the variable doesn't exist in the current scope. Either it was declared inside a function and you're trying to use it outside, or it's misspelled.</p>
<pre class="language-javascript"><code class="language-javascript">function calculate() {
  const result = 42;
}

calculate();
console.log(result);
// ReferenceError — result is local to calculate, can't be seen out here
// fix: return result from calculate, then capture it: const result = calculate();</code></pre>

    <p>If you get unexpected values, you might be reading or writing to a variable in the wrong scope. Add <code>console.log</code> inside and outside the function to see which version is being used.</p>
  `,

  /* 2.1 The part that makes it click */
  'topics-8-15-2-1': `
    <p>Each function call creates a fresh, throwaway local scope. The scope is born when the function is called, lives while the function runs, and dies when the function returns.</p>
    <p>Inside that scope, you have your own private versions of all the local variables. Outside the function, that scope is invisible — it might as well not exist.</p>
    <p>This is what makes functions self-contained. They do their work without polluting the rest of the program, and the rest of the program can't reach in to mess with them.</p>
  `,

  /* 2.2 Common confusions */
  'topics-8-15-2-2': `
    <p><strong>Confusion: trying to use a local variable outside</strong></p>
<pre class="language-javascript"><code class="language-javascript">function getTotal() {
  const total = 100;
}

getTotal();
console.log(total);
// ReferenceError — total only exists inside getTotal
// fix: return total, then catch it outside</code></pre>

    <p><strong>Confusion: outer vs inner with the same name</strong></p>
<pre class="language-javascript"><code class="language-javascript">const value = "outer";

function show() {
  const value = "inner";    // creates a NEW variable in this scope
  console.log(value);       // "inner" — finds the local one first
}

show();
console.log(value);
// prints:
//   inner
//   outer
// the inner const didn't replace the outer — it's a separate variable in a different scope</code></pre>

    <p><strong>Confusion: reading outer is fine, but be careful with assignments</strong></p>
<pre class="language-javascript"><code class="language-javascript">let count = 0;

function increment() {
  count = count + 1;     // modifies the OUTER count
}

increment();
increment();
console.log(count);
// prints: 2 — the function reaches out and changes the outer variable
// this is allowed, but can make code hard to follow if overused</code></pre>
    <p>If you write <code>const newCount</code> inside the function, you create a local variable. If you assign without <code>const</code>/<code>let</code>, you're modifying whatever variable already exists in the nearest scope.</p>

    <p><strong>Confusion: each call has its own fresh scope</strong></p>
<pre class="language-javascript"><code class="language-javascript">function counter() {
  let count = 0;
  count = count + 1;
  console.log(count);
}

counter();    // prints 1
counter();    // prints 1 — NOT 2
counter();    // prints 1 — count is recreated each call

// the local count is born and dies with each call
// to remember between calls, the variable has to live OUTSIDE the function</code></pre>
  `,

  /* 2.3 Common mistakes */
  'topics-8-15-2-3': `
<pre class="language-javascript"><code class="language-javascript">function getData() {
  const data = fetchSomething();
}

getData();
console.log(data);
// ReferenceError — data is local
// fix: return data; then const data = getData();</code></pre>

<pre class="language-javascript"><code class="language-javascript">let total = 100;
function update() {
  total = 200;       // modifies the outer total — probably not intentional
}
update();
console.log(total);
// prints: 200
// fix: if you want a local copy, use const total = 200; inside the function</code></pre>

<pre class="language-javascript"><code class="language-javascript">function process(items) {
  for (const item of items) {
    const cleaned = item.trim();
  }
  console.log(cleaned);
}
// ReferenceError — cleaned is inside the for block, not visible after it
// fix: declare let cleaned outside the loop, or use the value inside the loop</code></pre>

<pre class="language-javascript"><code class="language-javascript">function makeList() {
  result = [1, 2, 3];     // missing const/let — creates an unintentional global
  return result;
}
makeList();
console.log(result);
// prints: [1, 2, 3] — but this is a leak; result shouldn't be global
// fix: const result = [1, 2, 3];</code></pre>

<pre class="language-javascript"><code class="language-javascript">function counter() {
  let count = 0;
  count = count + 1;
  return count;
}
counter();    // 1
counter();    // 1 — NOT 2, because count is recreated each call
// fix: move count outside the function if you want it to persist</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-8-15-3-0': `
<pre class="language-javascript"><code class="language-javascript">// Local stays local
function calculate() {
  const x = 10;
  return x * 2;
}
calculate();        // 20
// console.log(x); // would error — x doesn't exist here

// Function reads outer variable
const TAX = 0.08;
function withTax(price) {
  return price + (price * TAX);
}
withTax(100);       // 108

// Function writes to outer variable
let clickCount = 0;
function track() {
  clickCount = clickCount + 1;
}
track();
track();
console.log(clickCount);
// prints: 2

// Same name, different scopes
const message = "outer";
function show() {
  const message = "inner";
  console.log(message);
}
show();
console.log(message);
// prints:
//   inner
//   outer

// Nested function — inner can see outer's locals
function outer() {
  const greeting = "Hello";
  function inner() {
    console.log(greeting);
  }
  inner();
}
outer();
// prints: "Hello"</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-8-15-3-1': `
    <p><strong>Example: helper variables stay private</strong></p>
<pre class="language-javascript"><code class="language-javascript">function formatDate(timestamp) {
  const date = new Date(timestamp);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();
  return month + "/" + day + "/" + year;
}

const result = formatDate(1735000000000);
console.log(result);
// prints something like: "12/24/2024"
// month, day, year, date — all clean up after the function returns</code></pre>

    <p><strong>Example: shared state lives outside the function</strong></p>
<pre class="language-javascript"><code class="language-javascript">let cartCount = 0;

function addToCart() {
  cartCount = cartCount + 1;
  cartBadge.textContent = cartCount;
}

addBtn.addEventListener("click", addToCart);
// cartCount has to be outside addToCart so it survives between clicks</code></pre>

    <p><strong>Example: factory using closures</strong></p>
<pre class="language-javascript"><code class="language-javascript">function makeCounter() {
  let count = 0;
  return function() {
    count = count + 1;
    return count;
  };
}

const counter = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter());
// prints:
//   1
//   2
//   3
// the inner function "remembers" count from its outer scope, even after makeCounter has returned</code></pre>

    <p><strong>Example: avoiding name collisions</strong></p>
<pre class="language-javascript"><code class="language-javascript">function processOrder(order) {
  const total = order.items.reduce((sum, i) => sum + i.price, 0);
  return total;
}

function processRefund(refund) {
  const total = refund.amount * -1;
  return total;
}
// both functions use "total" — no conflict because each is in its own scope</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-8-15-3-2': `
    <ul>
      <li><strong>Local variables</strong> → variables declared inside the function's scope</li>
      <li><strong>Global variables</strong> → variables visible to all code</li>
      <li><strong>Block scope</strong> → <code>let</code>/<code>const</code> are limited to <code>{ }</code></li>
      <li><strong>Function scope</strong> → <code>var</code> is limited to the function</li>
      <li><strong>Variable shadowing</strong> → an inner variable hiding an outer one with the same name</li>
      <li><strong>Closures</strong> → inner functions remembering outer variables after the outer function returns</li>
      <li><strong>Hoisting</strong> → how declarations are processed before code runs</li>
      <li><strong>Encapsulation</strong> → keeping a function's internals private</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-8-15-3-3': `
    <ul>
      <li>Local variables</li>
      <li>Global variables</li>
      <li>Block scope vs function scope</li>
      <li><code>var</code>, <code>let</code>, <code>const</code></li>
      <li>Variable shadowing</li>
      <li>Closures</li>
      <li>The scope chain</li>
      <li>Encapsulation</li>
    </ul>
  `,


  /* ========================================================= 
   Sub-lesson: 3.9.17 Functions → local variables
 =======================================================*/

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-8-16-0-0': `
    <p>A local variable is a variable declared inside a function. It only exists while that function is running, and it can only be seen from inside that function's body.</p>
    <p>Local variables include any <code>const</code> or <code>let</code> you declare in the body, plus the function's parameters.</p>
  `,

  /* 0.1 Syntax */
  'topics-8-16-0-1': `
<pre class="language-javascript"><code class="language-javascript">function buildGreeting() {
  const time = "morning";
  let greeting = "Good " + time;
  return greeting;
}

console.log(buildGreeting());
// prints: "Good morning"

console.log(time);
// ReferenceError — time is local to buildGreeting</code></pre>
    <p><code>time</code> and <code>greeting</code> live inside the function. They're created when the function runs and disappear when it returns.</p>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-8-16-0-2': `
<pre class="language-javascript"><code class="language-javascript">function buildSummary(reportName) {
  const today = new Date().toDateString();
  let header = reportName + " — " + today;
  return header;
}

console.log(buildSummary("Sales"));
// prints something like: "Sales — Tue Dec 24 2024"

// reportName    → parameter (local — exists for this call only)
// const today   → local variable, declared inside the body
// let header    → local variable, can be reassigned
// return        → ends the function; local variables disappear after this</code></pre>
    <p>Parameters and locally declared variables behave the same way once the function starts: both live in the function's local scope and both vanish when the function ends.</p>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-8-16-0-3': `
    <p>Local variables exist only inside the function:</p>
<pre class="language-javascript"><code class="language-javascript">function setup() {
  const config = { theme: "dark" };
  console.log(config);    // works
}

setup();
console.log(config);      // ReferenceError — config doesn't exist out here</code></pre>

    <p>Each call creates a fresh set of local variables:</p>
<pre class="language-javascript"><code class="language-javascript">function tick() {
  let count = 0;
  count = count + 1;
  console.log(count);
}

tick();    // prints: 1
tick();    // prints: 1 — count was reset to 0 again
tick();    // prints: 1
// every call gets a brand-new count, starting at 0</code></pre>

    <p>Locals declared with <code>let</code>/<code>const</code> are also block-scoped — they only exist within the nearest <code>{ }</code>:</p>
<pre class="language-javascript"><code class="language-javascript">function check(value) {
  if (value > 10) {
    const message = "big";
    console.log(message);   // works — inside the if block
  }
  console.log(message);     // ReferenceError — message is gone after the if
}</code></pre>

    <p>Local variables can have the same name as outer variables — the local one wins inside the function:</p>
<pre class="language-javascript"><code class="language-javascript">const status = "outer";

function check() {
  const status = "inner";
  console.log(status);     // "inner"
}

check();
console.log(status);       // "outer" — outer untouched</code></pre>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-8-16-1-0': `
    <p>Functions need workspace — temporary variables to do their job. If those workspace variables stayed around forever, every function would leak its internals into the rest of the program.</p>
    <p>Local variables solve this. They give each function a private scratchpad that's automatically cleaned up when the function ends. The function gets to do its work without polluting anything else.</p>
  `,

  /* 1.1 Why use it */
  'topics-8-16-1-1': `
    <p>Use local variables for any value the function needs to compute, transform, or hold temporarily. If a value is only relevant to this one function, it should be local.</p>
<pre class="language-javascript"><code class="language-javascript">function calculateOrderTotal(items) {
  const subtotal = items.reduce((sum, i) => sum + i.price, 0);
  const tax = subtotal * 0.08;
  const shipping = subtotal > 50 ? 0 : 5;
  return subtotal + tax + shipping;
}

const items = [{ price: 30 }, { price: 25 }];
console.log(calculateOrderTotal(items));
// prints: 59.4
// subtotal, tax, shipping are intermediate steps — they only matter inside the function</code></pre>
    <p>Keeping these intermediate values local means they don't clutter the global scope, can't accidentally collide with other code, and are garbage-collected as soon as the function returns.</p>
  `,

  /* 1.2 Where you use it */
  'topics-8-16-1-2': `
    <p>Local variables show up in nearly every function — anywhere you need to break work into steps.</p>
<pre class="language-javascript"><code class="language-javascript">function formatPhoneNumber(raw) {
  const digits = raw.replace(/\\D/g, "");
  const area = digits.slice(0, 3);
  const prefix = digits.slice(3, 6);
  const line = digits.slice(6, 10);
  return "(" + area + ") " + prefix + "-" + line;
}

console.log(formatPhoneNumber("8005551234"));
// prints: "(800) 555-1234"

function buildUserCard(user) {
  const card = document.createElement("div");
  const heading = document.createElement("h2");
  heading.textContent = user.name;
  card.appendChild(heading);
  return card;
}</code></pre>
    <p>Each step gets its own named local variable, which makes the function easier to read.</p>
  `,

  /* 1.3 Plain English explanation */
  'topics-8-16-1-3': `
    <p>A local variable is like a sticky note you write only for yourself, in your own room. You can use it however you want while you're working. When you leave the room, you throw the sticky note away.</p>
    <p>The next time you come back into the room (call the function again), you start with no sticky notes — fresh slate. And nobody outside the room ever sees what you wrote.</p>
    <p>That's the whole idea: temporary, private, automatic cleanup.</p>
  `,

  /* 1.4 Mental model */
  'topics-8-16-1-4': `
    <p>Local variables are born when the function starts and die when the function ends.</p>
<pre class="language-javascript"><code class="language-javascript">function example() {
  // ┌──────── function call begins ────────┐
  const a = 1;       // a is born
  const b = 2;       // b is born
  return a + b;
  // └──────── function call ends ─────────┘
  //   a and b are gone, scope is destroyed
}

example();
// each call to example() creates a brand-new "a" and "b"
// they don't carry over from one call to the next</code></pre>
    <p>If you want a value to survive between calls, it can't live as a local variable — it has to live outside the function.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-8-16-1-5': `
<pre class="language-javascript"><code class="language-javascript">function makeLabel(name, count) {
  const formatted = name + " (" + count + ")";
  return formatted;
}

const label = makeLabel("Inbox", 5);
console.log(label);
// prints: "Inbox (5)"

// JavaScript is thinking:
// Line 1: register makeLabel. Don't run the body yet.
// Line 6: see makeLabel("Inbox", 5) → call it. Create a fresh local scope. Locals so far: name = "Inbox", count = 5.
// Line 2: const formatted = "Inbox" + " (" + 5 + ")" → formatted is now "Inbox (5)". Stored in the local scope.
// Line 3: return formatted → exit the function with "Inbox (5)". The local scope (name, count, formatted) is destroyed.
// Line 6: the returned value is stored in label.
// Line 7: log label → "Inbox (5)".</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-8-16-2-0': `
    <p>If you call a function expecting a local value to be available afterward, you'll get a <code>ReferenceError</code>. That's the signal — you need to <code>return</code> the value out, not reach in.</p>
<pre class="language-javascript"><code class="language-javascript">function process() {
  const result = 42;
}

process();
console.log(result);
// ReferenceError — result is local to process
// fix: return result; then capture it: const result = process();</code></pre>

    <p>If a counter or accumulator inside a function isn't growing across calls, it's because the local variable resets every time. Move the variable outside the function (or use a closure) if you want it to persist.</p>
  `,

  /* 2.1 The part that makes it click */
  'topics-8-16-2-1': `
    <p>Locals are <strong>scratch paper</strong>. The function gets a fresh sheet at the start of every call, scribbles whatever it needs, then throws the sheet away.</p>
    <p>The function can <em>show</em> you what it wrote (via <code>return</code>) before the paper goes in the trash — but the paper itself is never accessible from outside.</p>
    <p>This is why local variables are safe by default: they can't outlive the function, can't conflict with anything else, and can't be tampered with from outside.</p>
  `,

  /* 2.2 Common confusions */
  'topics-8-16-2-2': `
    <p><strong>Confusion: locals are gone after the function ends</strong></p>
<pre class="language-javascript"><code class="language-javascript">function getUser() {
  const user = { name: "Os" };
}

getUser();
console.log(user);
// ReferenceError — user no longer exists
// fix: return user, then catch it</code></pre>

    <p><strong>Confusion: parameters are also locals</strong></p>
<pre class="language-javascript"><code class="language-javascript">function greet(name) {        // name is a local variable
  console.log("hi, " + name);
}

greet("Os");
console.log(name);
// ReferenceError — name was a parameter, lives only inside greet</code></pre>

    <p><strong>Confusion: each call has its own copy</strong></p>
<pre class="language-javascript"><code class="language-javascript">function tick() {
  let count = 0;
  count = count + 1;
  return count;
}

console.log(tick());
console.log(tick());
console.log(tick());
// prints:
//   1
//   1
//   1
// count is recreated as 0 on every call — the function doesn't remember between calls</code></pre>

    <p><strong>Confusion: locals can shadow outer variables</strong></p>
<pre class="language-javascript"><code class="language-javascript">const total = 100;

function calculate() {
  const total = 50;     // a NEW local — outer total is hidden inside this function
  return total;
}

console.log(calculate());
console.log(total);
// prints:
//   50
//   100
// the local total only exists inside the function, the outer one is unchanged</code></pre>
  `,

  /* 2.3 Common mistakes */
  'topics-8-16-2-3': `
<pre class="language-javascript"><code class="language-javascript">function getValue() {
  const value = 42;
}
getValue();
console.log(value);
// ReferenceError — value is local
// fix: return value;  then  const value = getValue();</code></pre>

<pre class="language-javascript"><code class="language-javascript">function counter() {
  let count = 0;
  count = count + 1;
  return count;
}
counter();   // 1
counter();   // 1 — NOT 2
// fix: move count outside the function if you want it to persist</code></pre>

<pre class="language-javascript"><code class="language-javascript">function setup() {
  config = { theme: "dark" };    // missing const/let — accidentally global
}
setup();
console.log(config);
// prints: { theme: "dark" } — but this is a leak, not intentional
// fix: const config = { theme: "dark" };</code></pre>

<pre class="language-javascript"><code class="language-javascript">function build() {
  for (const item of items) {
    const card = makeCard(item);
  }
  document.body.appendChild(card);
}
// ReferenceError — card is inside the for block, gone after the loop ends
// fix: append inside the loop, or collect in an array declared above the loop</code></pre>

<pre class="language-javascript"><code class="language-javascript">const total = 100;
function add(amount) {
  const total = total + amount;    // ReferenceError — can't read const total before it's initialized
  return total;
}
// fix: rename the local, or use a different approach
// e.g.  function add(amount) { return total + amount; }</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-8-16-3-0': `
<pre class="language-javascript"><code class="language-javascript">// Single local for an intermediate value
function double(n) {
  const result = n * 2;
  return result;
}
double(5);
// returns: 10

// Multiple locals to break work into steps
function fullName(first, last) {
  const trimmedFirst = first.trim();
  const trimmedLast = last.trim();
  const combined = trimmedFirst + " " + trimmedLast;
  return combined;
}
fullName("  Os ", " Garcia ");
// returns: "Os Garcia"

// Local that gets reassigned
function addAll(numbers) {
  let total = 0;
  for (const n of numbers) {
    total = total + n;
  }
  return total;
}
addAll([1, 2, 3, 4]);
// returns: 10

// Parameter as a local
function greet(name) {
  return "Hello, " + name;
}
greet("Os");
// returns: "Hello, Os"</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-8-16-3-1': `
    <p><strong>Example: building a string in steps</strong></p>
<pre class="language-javascript"><code class="language-javascript">function formatAddress(user) {
  const street = user.address.street;
  const city = user.address.city;
  const zip = user.address.zip;
  return street + ", " + city + " " + zip;
}

const user = { address: { street: "123 Main", city: "Austin", zip: "78701" } };
console.log(formatAddress(user));
// prints: "123 Main, Austin 78701"</code></pre>

    <p><strong>Example: building DOM elements</strong></p>
<pre class="language-javascript"><code class="language-javascript">function createCard(title, body) {
  const card = document.createElement("div");
  const heading = document.createElement("h3");
  const paragraph = document.createElement("p");

  heading.textContent = title;
  paragraph.textContent = body;
  card.appendChild(heading);
  card.appendChild(paragraph);

  return card;
}

const newCard = createCard("Welcome", "Glad you're here.");
document.body.appendChild(newCard);
// every helper variable is local — only the final card escapes via return</code></pre>

    <p><strong>Example: validation with locals for clarity</strong></p>
<pre class="language-javascript"><code class="language-javascript">function isValidPassword(password) {
  const minLength = password.length >= 8;
  const hasNumber = /\\d/.test(password);
  const hasLetter = /[a-zA-Z]/.test(password);
  return minLength && hasNumber && hasLetter;
}

console.log(isValidPassword("hello123"));
// prints: true
// each rule is its own local boolean — much clearer than chaining everything in one expression</code></pre>

    <p><strong>Example: parsing JSON safely</strong></p>
<pre class="language-javascript"><code class="language-javascript">function getCart() {
  const raw = localStorage.getItem("cart");
  const parsed = raw ? JSON.parse(raw) : [];
  return parsed;
}

const cart = getCart();
console.log(cart);
// raw and parsed are local helpers — they disappear, only the cart array escapes</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-8-16-3-2': `
    <ul>
      <li><strong>Scope</strong> → local variables exist within the function's scope</li>
      <li><strong>Parameters</strong> → also local variables — they live and die with the call</li>
      <li><strong>Global variables</strong> → the opposite — visible everywhere</li>
      <li><strong>Block scope</strong> → <code>let</code>/<code>const</code> are scoped to the nearest <code>{ }</code></li>
      <li><strong>Variable shadowing</strong> → a local with the same name as an outer variable</li>
      <li><strong>Garbage collection</strong> → locals are freed when the function ends</li>
      <li><strong>Closures</strong> → inner functions can keep outer locals alive longer than usual</li>
      <li><strong>Encapsulation</strong> → keeping work private to the function</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-8-16-3-3': `
    <ul>
      <li>Scope</li>
      <li>Global variables</li>
      <li>Parameters</li>
      <li>Block scope vs function scope</li>
      <li>Variable shadowing</li>
      <li>Closures</li>
      <li>Garbage collection</li>
      <li>Side effects</li>
    </ul>
  `,


  /* ========================================================= 
   Sub-lesson: 3.9.18 Functions → global variables
 =======================================================*/

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-8-17-0-0': `
    <p>A global variable is a variable declared at the top level of your script — outside of any function. It's visible to every function and every line of code in the file.</p>
    <p>Globals are the opposite of locals. Locals only exist inside the function they were declared in. Globals exist everywhere.</p>
  `,

  /* 0.1 Syntax */
  'topics-8-17-0-1': `
<pre class="language-javascript"><code class="language-javascript">const APP_NAME = "Tracker";       // global — outside any function

function start() {
  console.log("Starting " + APP_NAME);
}

function stop() {
  console.log("Stopping " + APP_NAME);
}

start();
stop();
// prints:
//   Starting Tracker
//   Stopping Tracker</code></pre>
    <p><code>APP_NAME</code> is declared once at the top, and both functions can read it. That's the defining feature of a global — it's reachable from anywhere.</p>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-8-17-0-2': `
<pre class="language-javascript"><code class="language-javascript">let pageViews = 0;                 // global — at the top level

function recordVisit() {
  pageViews = pageViews + 1;       // function reads and updates the global
  console.log("Total views: " + pageViews);
}

recordVisit();
recordVisit();
recordVisit();
// prints:
//   Total views: 1
//   Total views: 2
//   Total views: 3

// let pageViews = 0          → declared at the top — global scope
// function recordVisit()     → has its own local scope, but can see globals
// pageViews = pageViews + 1  → reaches outside its scope, modifies the global
// each call updates the same global, so the count carries over</code></pre>
    <p>The function doesn't have its own <code>pageViews</code>. It reads and modifies the one outside, which is why the value persists between calls.</p>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-8-17-0-3': `
    <p>Anything declared at the top level of a script (outside all functions) is global within that file:</p>
<pre class="language-javascript"><code class="language-javascript">const TAX_RATE = 0.08;       // global
let cartCount = 0;            // global

function addItem() {
  cartCount = cartCount + 1;  // can see the global
}

function getTax(price) {
  return price * TAX_RATE;    // can see the global
}</code></pre>

    <p>Globals stay alive for the entire life of the page — they don't get cleaned up when a function returns:</p>
<pre class="language-javascript"><code class="language-javascript">let total = 0;

function add(n) {
  total = total + n;
}

add(5);
add(3);
console.log(total);
// prints: 8 — total survives between calls</code></pre>

    <p>Forgetting <code>const</code>/<code>let</code> creates an accidental global, even inside a function:</p>
<pre class="language-javascript"><code class="language-javascript">function setup() {
  config = { theme: "dark" };   // no const/let — accidentally creates a global
}

setup();
console.log(config);
// prints: { theme: "dark" }
// fix: always use const or let</code></pre>

    <p>Locals can shadow globals — same name, different scopes:</p>
<pre class="language-javascript"><code class="language-javascript">const status = "active";       // global

function check() {
  const status = "local";      // shadows the global inside this function
  console.log(status);          // "local"
}

check();
console.log(status);            // "active" — global untouched</code></pre>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-8-17-1-0': `
    <p>Some values need to be shared across many functions — a tax rate, a current user, an app config, a click counter. If those values lived inside one function, no other function could read them.</p>
    <p>Globals solve this by living at the top level, where every function can reach them. They're how separate functions coordinate around a shared value.</p>
  `,

  /* 1.1 Why use it */
  'topics-8-17-1-1': `
    <p>Use globals sparingly — only for values that genuinely need to be shared everywhere. The most common good cases are constants and persistent state.</p>
<pre class="language-javascript"><code class="language-javascript">// Good: shared constants
const TAX_RATE = 0.08;
const MAX_ITEMS_PER_PAGE = 20;
const API_URL = "https://api.example.com";

function getTax(price)         { return price * TAX_RATE; }
function getPageSize()         { return MAX_ITEMS_PER_PAGE; }
function fetchUsers()          { return fetch(API_URL + "/users"); }

// Good: persistent state across calls
let cartCount = 0;

function addToCart() {
  cartCount = cartCount + 1;
  cartBadge.textContent = cartCount;
}</code></pre>
    <p>The rule of thumb: if the value should be visible in three or more places and never changes (or rarely changes), it's a fair candidate for a global.</p>
  `,

  /* 1.2 Where you use it */
  'topics-8-17-1-2': `
    <p>Globals show up most often as configuration constants and shared state.</p>
<pre class="language-javascript"><code class="language-javascript">// Configuration constants
const APP_VERSION = "1.2.0";
const DEFAULT_THEME = "light";
const FEATURE_FLAGS = {
  newCheckout: true,
  betaSearch: false,
};

// Shared application state
let currentUser = null;
let cart = [];
let isOnline = true;

// DOM references used everywhere
const cartBadge = document.querySelector("#cart-count");
const errorBox = document.querySelector("#error-message");

// Functions all over the file use these globals
function login(user)           { currentUser = user; }
function logout()              { currentUser = null; }
function getCurrentUser()      { return currentUser; }
function isLoggedIn()          { return currentUser !== null; }</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-8-17-1-3': `
    <p>If local variables are sticky notes inside a private room, globals are signs hanging in the hallway. Everyone walking by can read them, and anyone can change them.</p>
    <p>That's powerful — every function can see the same sign without you having to pass it in. But it's also risky: if too many functions can change the sign, it gets hard to track who changed it last and why.</p>
    <p>Globals are useful, but they're a tool to use carefully. The more globals you have, the more your functions secretly depend on each other through shared state.</p>
  `,

  /* 1.4 Mental model */
  'topics-8-17-1-4': `
    <p>Globals live at the top level, where everyone can see them. Locals live inside their function, hidden from outside.</p>
<pre class="language-javascript"><code class="language-javascript">// global scope (the hallway)
//  ┌──────────────────────────────────────┐
//  │  const TAX_RATE = 0.08;              │  ← every function can see this
//  │                                      │
//  │  function getTax() {                 │
//  │    const price = 100;   ← only here  │
//  │    return price * TAX_RATE;          │
//  │  }                                   │
//  │                                      │
//  │  function addToCart() {              │
//  │    const item = "Hat"; ← only here   │
//  │    console.log(TAX_RATE);            │
//  │  }                                   │
//  └──────────────────────────────────────┘</code></pre>
    <p>Both functions can read <code>TAX_RATE</code>. Neither can read the other's locals.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-8-17-1-5': `
<pre class="language-javascript"><code class="language-javascript">let score = 0;

function addPoint() {
  score = score + 1;
}

addPoint();
addPoint();
console.log(score);
// prints: 2

// JavaScript is thinking:
// Line 1: register score in global scope, value 0.
// Line 3: register addPoint. Don't run it yet.
// Line 7: call addPoint() → create a fresh local scope. Run the body.
// Line 4: score = score + 1 → no local "score" exists; look outward → finds the global score (0). Compute 0 + 1 = 1. Assign back to the global score.
// Line 7: function ends, local scope destroyed. The global score is now 1.
// Line 8: call addPoint() again → new local scope. score = 1 + 1 = 2. Global score is now 2.
// Line 9: log score → 2.</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-8-17-2-0': `
    <p>If a value seems to "change on its own" or behave unpredictably, suspect a global. With many functions modifying the same global, it's easy to lose track of which one changed it.</p>
<pre class="language-javascript"><code class="language-javascript">let count = 0;

function add()    { count = count + 1; }
function reset()  { count = 0; }
function double() { count = count * 2; }

add();
add();
double();
reset();
console.log(count);
// prints: 0
// any of these functions could have changed count — debugging means tracing every place it was touched</code></pre>

    <p>Another sign: if your function works correctly the first time but breaks on the second call, you might be relying on a global that didn't get reset. Locals would naturally start fresh; globals don't.</p>
  `,

  /* 2.1 The part that makes it click */
  'topics-8-17-2-1': `
    <p>A global is a variable that <strong>outlives any single function call</strong>. Local variables come and go with each call. Globals stick around for the entire life of the page.</p>
    <p>That permanence is the whole point. It's what lets a click counter remember its count between clicks, or what lets a user object stay logged in as the user navigates the page.</p>
    <p>The flip side: anything that outlives a function can be touched by anything that comes after. That's why globals are powerful and risky at the same time.</p>
  `,

  /* 2.2 Common confusions */
  'topics-8-17-2-2': `
    <p><strong>Confusion: globals vs locals</strong></p>
<pre class="language-javascript"><code class="language-javascript">const outside = "global";        // global

function show() {
  const inside = "local";        // local
  console.log(outside);          // works — globals are visible everywhere
  console.log(inside);           // works — local within its own function
}

show();
console.log(outside);            // works
console.log(inside);             // ReferenceError — locals don't escape</code></pre>

    <p><strong>Confusion: assigning vs declaring</strong></p>
<pre class="language-javascript"><code class="language-javascript">let count = 0;       // global declaration

function bump() {
  count = count + 1;   // assignment — modifies the global
}

function reset() {
  let count = 0;       // declaration — creates a new LOCAL count, doesn't touch the global
}

bump();
reset();
console.log(count);
// prints: 1 — reset's local count was a separate variable, the global was untouched</code></pre>
    <p>Adding <code>const</code>/<code>let</code> creates a new local. Without it, you're modifying whatever variable already exists in the nearest scope.</p>

    <p><strong>Confusion: accidental globals</strong></p>
<pre class="language-javascript"><code class="language-javascript">function setup() {
  result = computeResult();   // missing const/let — creates a global by accident
  return result;
}
// fix: const result = computeResult();
// always declare with const or let, even inside functions</code></pre>

    <p><strong>Confusion: when persistence is wrong</strong></p>
<pre class="language-javascript"><code class="language-javascript">let total = 0;     // global

function sum(numbers) {
  total = 0;       // have to manually reset, or it carries from previous calls
  for (const n of numbers) {
    total = total + n;
  }
  return total;
}

// safer with a local — each call gets a fresh start automatically
function sum(numbers) {
  let total = 0;
  for (const n of numbers) {
    total = total + n;
  }
  return total;
}</code></pre>
    <p>If you only need a value during the function's run, use a local. Globals are for things that need to stick around.</p>
  `,

  /* 2.3 Common mistakes */
  'topics-8-17-2-3': `
<pre class="language-javascript"><code class="language-javascript">function setup() {
  config = { theme: "dark" };    // missing const/let → accidental global
}
// fix: const config = { theme: "dark" };</code></pre>

<pre class="language-javascript"><code class="language-javascript">let userName = "Os";

function setName(name) {
  userName = name;
}
function clearName() {
  let userName = "";   // creates a NEW local, doesn't touch the global
}

setName("Sam");
clearName();
console.log(userName);
// prints: "Sam" — clearName didn't actually clear anything
// fix: in clearName, drop the let — userName = "";</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Too many globals — hard to know which function affects what
let user = null;
let cart = [];
let theme = "light";
let language = "en";
let isPremium = false;
let lastVisit = null;
// works, but every function in the file can read or change all of these
// fix: group related state into objects, or move it into closures</code></pre>

<pre class="language-javascript"><code class="language-javascript">const TAX_RATE = 0.08;
function discount() {
  TAX_RATE = 0.05;   // TypeError — can't reassign const
}
// fix: use let if you need it to change, or pass a different value as a parameter</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Reusing a global as a temporary
let temp;
function process(items) {
  for (const item of items) {
    temp = transform(item);
    save(temp);
  }
}
// works, but temp is exposed to every other function
// fix: make temp local — let temp = ... inside the function</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-8-17-3-0': `
<pre class="language-javascript"><code class="language-javascript">// Constants used in many places
const TAX_RATE = 0.08;
const MAX_ITEMS = 50;

function getTax(price) {
  return price * TAX_RATE;
}

console.log(getTax(100));
// prints: 8

// Counter that persists between calls
let clicks = 0;

function recordClick() {
  clicks = clicks + 1;
  return clicks;
}

console.log(recordClick());
console.log(recordClick());
console.log(recordClick());
// prints:
//   1
//   2
//   3

// Shared state object
const user = {
  name: "Os",
  loggedIn: false,
};

function login(name) {
  user.name = name;
  user.loggedIn = true;
}

login("Sam");
console.log(user);
// prints: { name: "Sam", loggedIn: true }</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-8-17-3-1': `
    <p><strong>Example: app-wide configuration</strong></p>
<pre class="language-javascript"><code class="language-javascript">const API_URL = "https://api.example.com";
const TIMEOUT_MS = 5000;

async function fetchUsers() {
  return fetch(API_URL + "/users", { timeout: TIMEOUT_MS });
}

async function fetchProducts() {
  return fetch(API_URL + "/products", { timeout: TIMEOUT_MS });
}
// both functions read the same constants — change once, applies everywhere</code></pre>

    <p><strong>Example: cart that persists across many handlers</strong></p>
<pre class="language-javascript"><code class="language-javascript">let cart = [];

function addToCart(product) {
  cart.push(product);
  updateBadge();
}

function removeFromCart(productId) {
  cart = cart.filter(p => p.id !== productId);
  updateBadge();
}

function updateBadge() {
  cartBadge.textContent = cart.length;
}

addBtn.addEventListener("click", () => addToCart({ id: 1, name: "Hat" }));
removeBtn.addEventListener("click", () => removeFromCart(1));
// the cart survives between every click because it lives at the global level</code></pre>

    <p><strong>Example: cached DOM references</strong></p>
<pre class="language-javascript"><code class="language-javascript">const errorBox = document.querySelector("#error");
const successBox = document.querySelector("#success");
const submitBtn = document.querySelector("#submit");

function showError(msg) {
  errorBox.textContent = msg;
  errorBox.classList.add("visible");
}

function showSuccess(msg) {
  successBox.textContent = msg;
  successBox.classList.add("visible");
}
// querySelector runs once at the top — every function reuses the cached references</code></pre>

    <p><strong>Example: feature flags</strong></p>
<pre class="language-javascript"><code class="language-javascript">const FEATURES = {
  newCheckout: true,
  betaSearch: false,
};

function checkout() {
  if (FEATURES.newCheckout) {
    runNewCheckout();
  } else {
    runOldCheckout();
  }
}
// global FEATURES is read by any function that needs to branch on a flag</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-8-17-3-2': `
    <ul>
      <li><strong>Local variables</strong> → the opposite — visible only inside one function</li>
      <li><strong>Scope</strong> → globals live in the global scope; everything can see them</li>
      <li><strong>Constants</strong> → most useful globals are <code>const</code> values that never change</li>
      <li><strong>Shared state</strong> → globals are how state persists across function calls</li>
      <li><strong>Variable shadowing</strong> → a local with the same name hides the global inside that function</li>
      <li><strong>Accidental globals</strong> → forgetting <code>const</code>/<code>let</code> creates one by accident</li>
      <li><strong>Side effects</strong> → modifying a global is a side effect</li>
      <li><strong>Encapsulation</strong> → using fewer globals keeps code more self-contained</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-8-17-3-3': `
    <ul>
      <li>Local variables</li>
      <li>Scope</li>
      <li>Constants</li>
      <li>Variable shadowing</li>
      <li>Accidental globals</li>
      <li>Side effects</li>
      <li>The <code>window</code> object (in browsers)</li>
      <li>Modules and namespacing</li>
    </ul>
  `,


  /* ========================================================= 
   Sub-lesson: 3.9.19 Functions → functions using outside variables
 =======================================================*/

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-8-18-0-0': `
    <p>A function can use variables from the surrounding code — not just its own parameters and locals. When a function reads or modifies a variable that lives outside it, it's "reaching out" into the surrounding scope.</p>
    <p>This is the foundation of <strong>closures</strong>: an inner function remembering and using variables from the outer code that contained it.</p>
  `,

  /* 0.1 Syntax */
  'topics-8-18-0-1': `
<pre class="language-javascript"><code class="language-javascript">const userName = "Os";

function greet() {
  console.log("Hello, " + userName);   // userName isn't a parameter, isn't local — it's outside
}

greet();
// prints: "Hello, Os"</code></pre>
    <p>The function didn't receive <code>userName</code> as an argument. It just reached up into the surrounding scope and used it. Any function can do this with any variable that exists in its outer scopes.</p>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-8-18-0-2': `
<pre class="language-javascript"><code class="language-javascript">let visitCount = 0;

function trackVisit() {
  visitCount = visitCount + 1;
  console.log("Total visits: " + visitCount);
}

trackVisit();
trackVisit();
trackVisit();
// prints:
//   Total visits: 1
//   Total visits: 2
//   Total visits: 3

// let visitCount = 0          → outer variable, declared in the surrounding scope
// function trackVisit         → has access to its outer scope
// visitCount = visitCount + 1 → reads the outer variable, modifies it
// each call sees the updated value because they all reference the same outer variable</code></pre>
    <p>Because <code>visitCount</code> lives outside the function, it persists between calls. The function isn't creating a new variable each time — it's modifying the one outside.</p>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-8-18-0-3': `
    <p>A function can read any variable from any enclosing scope:</p>
<pre class="language-javascript"><code class="language-javascript">const a = 1;

function outer() {
  const b = 2;

  function inner() {
    const c = 3;
    console.log(a, b, c);   // can see all three
  }

  inner();
}

outer();
// prints: 1 2 3</code></pre>

    <p>If a function modifies an outer variable, the change persists:</p>
<pre class="language-javascript"><code class="language-javascript">let count = 0;

function increment() {
  count = count + 1;
}

increment();
increment();
console.log(count);
// prints: 2 — the outer variable was modified twice</code></pre>

    <p>Reading is fine. Reassigning <code>const</code> is not — same rule as anywhere else:</p>
<pre class="language-javascript"><code class="language-javascript">const config = { theme: "light" };

function update() {
  config.theme = "dark";    // modifying a property — fine
  // config = { theme: "dark" };  // wrong — can't reassign const
}

update();
console.log(config);
// prints: { theme: "dark" }</code></pre>

    <p>An inner function can keep working with outer variables even after the outer function has finished — that's a closure:</p>
<pre class="language-javascript"><code class="language-javascript">function makeCounter() {
  let count = 0;
  return function() {
    count = count + 1;
    return count;
  };
}

const counter = makeCounter();
console.log(counter());
console.log(counter());
// prints:
//   1
//   2
// makeCounter() has already returned — but the inner function still remembers count</code></pre>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-8-18-1-0': `
    <p>If functions could only see their own parameters and locals, every shared value would have to be passed in as an argument every single time. That'd make code repetitive and tightly coupled.</p>
    <p>Letting functions read from their surroundings lets them work with shared state — counters that persist, configs that apply everywhere, helper variables shared across multiple functions — without constantly passing the same things around.</p>
  `,

  /* 1.1 Why use it */
  'topics-8-18-1-1': `
    <p>Use outside variables when several functions need to share state or settings, or when a function needs to "remember" something between calls. The most common pattern is the closure: an inner function that captures and uses a variable from its containing function.</p>
<pre class="language-javascript"><code class="language-javascript">// Without using outside variables — count has to be passed and returned each time
function increment(count) {
  return count + 1;
}
let total = 0;
total = increment(total);
total = increment(total);

// Using outside variables — cleaner, count lives in one place
let count = 0;
function tick() {
  count = count + 1;
}
tick();
tick();
console.log(count);
// prints: 2</code></pre>
    <p>The cleaner version is also riskier: every function reaching <code>count</code> can change it, so you have to be careful about who's allowed to. That's the tradeoff.</p>
  `,

  /* 1.2 Where you use it */
  'topics-8-18-1-2': `
    <p>This pattern is everywhere — closures, event handlers, factories, modules.</p>
<pre class="language-javascript"><code class="language-javascript">// Constants used by many functions
const API_URL = "https://api.example.com";

async function getUsers()    { return fetch(API_URL + "/users"); }
async function getProducts() { return fetch(API_URL + "/products"); }

// Click handler reading and modifying outer state
let clickCount = 0;
button.addEventListener("click", () => {
  clickCount = clickCount + 1;
  display.textContent = clickCount;
});

// Factory function returning an inner function that uses outer values
function makeMultiplier(factor) {
  return function(n) {
    return n * factor;        // factor comes from the outer scope
  };
}

const triple = makeMultiplier(3);
console.log(triple(10));
// prints: 30</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-8-18-1-3': `
    <p>A function isn't a sealed box. It's more like a room with a window. The function has its own things inside (locals, parameters), but it can also see out the window into the surrounding code — and use whatever's out there.</p>
    <p>That's why a click counter at the top of your file can be incremented by a function inside an event handler, even though they're written far apart. They share the same outer scope, so the inner function can reach the outer counter.</p>
    <p>The "remembering" part is what makes closures special: the function keeps its view through that window even if the outer function has long since finished. Whatever was in scope when the function was created stays available to it forever.</p>
  `,

  /* 1.4 Mental model */
  'topics-8-18-1-4': `
    <p>A function carries an invisible link back to the scope it was defined in. Wherever it gets called from, it can still see those original surrounding variables.</p>
<pre class="language-javascript"><code class="language-javascript">function makeGreeter(greeting) {
  return function(name) {
    return greeting + ", " + name;    // ← reaches out for "greeting"
  };
}

const sayHi = makeGreeter("Hi");
const sayHello = makeGreeter("Hello");

console.log(sayHi("Os"));
console.log(sayHello("Sam"));
// prints:
//   Hi, Os
//   Hello, Sam
// each inner function carries its own remembered "greeting"</code></pre>
    <p>The inner function isn't just code — it's code <em>plus</em> a snapshot of the surrounding variables it depends on. That snapshot is the closure.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-8-18-1-5': `
<pre class="language-javascript"><code class="language-javascript">let lastUser = null;

function login(name) {
  lastUser = name;
  console.log("Logged in as " + lastUser);
}

login("Os");
login("Sam");
// prints:
//   Logged in as Os
//   Logged in as Sam

// JavaScript is thinking:
// Line 1: register lastUser in the global scope, value null.
// Line 3: register login. Don't run it yet.
// Line 8: see login("Os") → call it. Local scope: name = "Os".
// Line 4: see lastUser = name → no local "lastUser", look outward → finds the global one. Set global lastUser to "Os".
// Line 5: log "Logged in as " + lastUser → "Logged in as Os".
// Line 6: function ends. Local scope (with name) destroyed. Global lastUser is still "Os".
// Line 9: see login("Sam") → fresh local scope: name = "Sam".
// Line 4: lastUser = "Sam" → updates the same global. (Was "Os", now "Sam".)
// Line 5: logs "Logged in as Sam".</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-8-18-2-0': `
    <p>If a function seems to "remember" something between calls but you didn't intend that, it's reading from an outer variable. If you wanted a fresh value each call, you need a local.</p>
<pre class="language-javascript"><code class="language-javascript">let total = 0;

function sum(numbers) {
  for (const n of numbers) {
    total = total + n;     // reaches outside — accumulates between calls!
  }
  return total;
}

console.log(sum([1, 2, 3]));
console.log(sum([1, 2, 3]));
// prints:
//   6
//   12  — wrong! the second call kept adding to the first call's total
// fix: declare total inside the function (let total = 0; inside the body)</code></pre>

    <p>If a closure seems to "lose" its outer value, double-check that the outer variable was a <code>const</code> or <code>let</code> in the right scope. Closures hold references, not snapshots — but the variable still has to exist in the function's chain of outer scopes.</p>
  `,

  /* 2.1 The part that makes it click */
  'topics-8-18-2-1': `
    <p>Functions can see "outward" but not "inward." A function can reach into its surrounding scopes to read or modify variables. But code outside the function can't reach inside it.</p>
    <p>This is why globals and closures both work: the function is allowed to look out and use what it finds. And it's why local variables stay private: nothing on the outside has a way to look in.</p>
    <p>Once you see this, scope stops feeling like a list of rules and starts feeling like a one-way mirror.</p>
  `,

  /* 2.2 Common confusions */
  'topics-8-18-2-2': `
    <p><strong>Confusion: outside variable vs parameter</strong></p>
<pre class="language-javascript"><code class="language-javascript">const greeting = "Hello";

function greet(name) {       // name comes IN as an argument
  console.log(greeting + ", " + name);   // greeting comes from OUTSIDE
}

greet("Os");
// prints: "Hello, Os"
// greeting wasn't passed in — the function just reached up to find it</code></pre>

    <p><strong>Confusion: inner function still works after outer returns</strong></p>
<pre class="language-javascript"><code class="language-javascript">function makeGreeter(greeting) {
  return function(name) {
    return greeting + ", " + name;
  };
}

const hello = makeGreeter("Hello");
console.log(hello("Os"));
// prints: "Hello, Os"
// makeGreeter has already finished, but "Hello" is still alive inside hello — that's a closure</code></pre>

    <p><strong>Confusion: closure captures the variable, not its value at the moment</strong></p>
<pre class="language-javascript"><code class="language-javascript">let count = 0;

function show() {
  console.log(count);    // reads the LATEST value of count
}

show();             // 0
count = 5;
show();             // 5 — show always reads the current count, not a snapshot</code></pre>

    <p><strong>Confusion: shadowing — local hides outer</strong></p>
<pre class="language-javascript"><code class="language-javascript">const name = "outer";

function greet() {
  const name = "inner";    // creates a NEW local — outer is hidden inside
  console.log(name);
}

greet();
console.log(name);
// prints:
//   inner
//   outer</code></pre>
  `,

  /* 2.3 Common mistakes */
  'topics-8-18-2-3': `
<pre class="language-javascript"><code class="language-javascript">let total = 0;
function sum(numbers) {
  for (const n of numbers) {
    total = total + n;
  }
  return total;
}
sum([1, 2]);
sum([1, 2]);
// returns 3, then 6 — the global accumulates
// fix: declare let total = 0 INSIDE the function</code></pre>

<pre class="language-javascript"><code class="language-javascript">function process() {
  result = computeStuff();   // missing const/let → accidentally creates a global
}
// fix: const result = computeStuff();</code></pre>

<pre class="language-javascript"><code class="language-javascript">const items = [1, 2, 3];
const handlers = [];

for (var i = 0; i < items.length; i++) {
  handlers.push(function() { console.log(i); });
}

handlers[0]();
handlers[1]();
handlers[2]();
// prints: 3, 3, 3 — every closure reads the SAME outer i (now 3)
// fix: use let i instead of var i — let is block-scoped, each loop gets its own i</code></pre>

<pre class="language-javascript"><code class="language-javascript">const config = { theme: "light" };

function freeze() {
  config = { theme: "dark" };   // TypeError — can't reassign const
}
// fix: modify a property: config.theme = "dark";
// or use let if you really need to reassign</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Way too much shared state
let user = null;
let cart = [];
let orders = [];
function loginUser()      { user = ...; }
function addToCart()      { cart.push(...); }
function placeOrder()     { orders.push(...); user = ...; cart = []; }
// any function can change anything — bugs become hard to trace
// fix: group related state into objects, or limit who's allowed to modify what</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-8-18-3-0': `
<pre class="language-javascript"><code class="language-javascript">// Reading an outer constant
const TAX_RATE = 0.08;
function withTax(price) {
  return price + (price * TAX_RATE);
}
withTax(100);
// returns: 108

// Modifying an outer counter
let clicks = 0;
function track() {
  clicks = clicks + 1;
}
track();
track();
console.log(clicks);
// prints: 2

// Inner function remembers an outer value (closure)
function greeter(greeting) {
  return function(name) {
    return greeting + ", " + name;
  };
}
const hi = greeter("Hi");
console.log(hi("Os"));
// prints: "Hi, Os"

// Counter factory — each counter has its own private count
function makeCounter() {
  let count = 0;
  return function() {
    count = count + 1;
    return count;
  };
}
const c1 = makeCounter();
const c2 = makeCounter();
console.log(c1());
console.log(c1());
console.log(c2());
// prints:
//   1
//   2
//   1   — c2 has its own separate count</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-8-18-3-1': `
    <p><strong>Example: handler reaching out for state</strong></p>
<pre class="language-javascript"><code class="language-javascript">let cartCount = 0;

addBtn.addEventListener("click", () => {
  cartCount = cartCount + 1;
  cartBadge.textContent = cartCount;
});
// the click handler reads and updates cartCount from the outer scope</code></pre>

    <p><strong>Example: configuration captured by helpers</strong></p>
<pre class="language-javascript"><code class="language-javascript">const API_URL = "https://api.example.com";

async function fetchUsers()    { return fetch(API_URL + "/users"); }
async function fetchProducts() { return fetch(API_URL + "/products"); }
async function fetchOrders()   { return fetch(API_URL + "/orders"); }
// every function uses the same outer API_URL — no need to pass it in</code></pre>

    <p><strong>Example: closure for private state</strong></p>
<pre class="language-javascript"><code class="language-javascript">function createIdGenerator() {
  let id = 0;
  return function nextId() {
    id = id + 1;
    return id;
  };
}

const nextId = createIdGenerator();
console.log(nextId());
console.log(nextId());
console.log(nextId());
// prints:
//   1
//   2
//   3
// id is hidden — nothing outside can read or change it</code></pre>

    <p><strong>Example: customizing helpers</strong></p>
<pre class="language-javascript"><code class="language-javascript">function withPrefix(prefix) {
  return function(message) {
    console.log("[" + prefix + "] " + message);
  };
}

const logInfo = withPrefix("INFO");
const logError = withPrefix("ERROR");

logInfo("user logged in");
logError("network failed");
// prints:
//   [INFO] user logged in
//   [ERROR] network failed
// each returned function remembers its own prefix</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-8-18-3-2': `
    <ul>
      <li><strong>Closures</strong> → an inner function remembering its outer scope</li>
      <li><strong>Scope chain</strong> → how JavaScript looks up variables from inner to outer scopes</li>
      <li><strong>Local variables</strong> → the function's own variables, separate from outer ones</li>
      <li><strong>Global variables</strong> → outer variables visible everywhere</li>
      <li><strong>Variable shadowing</strong> → a local with the same name hides the outer</li>
      <li><strong>Factory functions</strong> → functions that return other functions with captured state</li>
      <li><strong>Side effects</strong> → modifying outer variables is a side effect</li>
      <li><strong>Encapsulation</strong> → closures let you hide state behind a function</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-8-18-3-3': `
    <ul>
      <li>Closures</li>
      <li>Scope chain</li>
      <li>Local vs global variables</li>
      <li>Variable shadowing</li>
      <li>Factory functions</li>
      <li>Higher-order functions</li>
      <li>Module pattern</li>
      <li>The classic loop-and-closure bug</li>
    </ul>
  `,


  /* ========================================================= 
   Sub-lesson: 3.9.20 Functions → functions receiving strings
 =======================================================*/

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-8-19-0-0': `
    <p>A function "receives" a string when you pass a string in as an argument. Inside the function, the parameter holds that string and the body can read it, transform it, combine it with other text, or check it against rules.</p>
    <p>Strings are one of the most common things functions work with — names, messages, URLs, form input, search terms.</p>
  `,

  /* 0.1 Syntax */
  'topics-8-19-0-1': `
<pre class="language-javascript"><code class="language-javascript">function shout(text) {
  return text.toUpperCase() + "!";
}

console.log(shout("hello"));
console.log(shout("good morning"));
// prints:
//   HELLO!
//   GOOD MORNING!</code></pre>
    <p>The parameter <code>text</code> holds whatever string was passed in. Inside the body, you can use it like any other string — calling string methods, concatenating with <code>+</code>, slicing, comparing.</p>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-8-19-0-2': `
<pre class="language-javascript"><code class="language-javascript">function makeUsername(firstName, lastName) {
  const cleaned = (firstName + lastName).toLowerCase();
  return cleaned.replace(/\\s+/g, "");
}

console.log(makeUsername("Os", "Garcia"));
console.log(makeUsername("Sam ", " Lee"));
// prints:
//   osgarcia
//   samlee

// firstName, lastName       → string parameters
// (firstName + lastName)    → concatenate the two strings
// .toLowerCase()            → string method called on the result
// .replace(/\\s+/g, "")      → another method, removes whitespace
// return cleaned...         → the final string is handed back</code></pre>
    <p>Once a string is inside the function, you can do anything with it — every string method works on a parameter just like any other string variable.</p>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-8-19-0-3': `
    <p>String arguments must be wrapped in quotes — single, double, or backticks:</p>
<pre class="language-javascript"><code class="language-javascript">greet("Os");        // double quotes
greet('Os');         // single quotes
greet(\`Os\`);         // backticks (template literal)

greet(Os);           // wrong: ReferenceError — Os is treated as a variable name
// fix: wrap the value in quotes</code></pre>

    <p>The parameter is a regular variable holding a string — all string methods are available:</p>
<pre class="language-javascript"><code class="language-javascript">function describe(text) {
  console.log("length:", text.length);
  console.log("upper:", text.toUpperCase());
  console.log("first char:", text[0]);
  console.log("first 3:", text.slice(0, 3));
  console.log("contains 'lo':", text.includes("lo"));
}

describe("hello world");
// prints:
//   length: 11
//   upper: HELLO WORLD
//   first char: h
//   first 3: hel
//   contains 'lo': true</code></pre>

    <p>If a non-string is passed, the function may still run — but the result might be unexpected:</p>
<pre class="language-javascript"><code class="language-javascript">function shout(text) {
  return text.toUpperCase();
}

shout("hi");        // "HI" — fine
shout(42);          // TypeError — numbers don't have toUpperCase
shout(null);        // TypeError — null doesn't have toUpperCase
shout(undefined);   // TypeError — undefined doesn't have toUpperCase</code></pre>

    <p>You can build new strings inside the function using <code>+</code> or template literals:</p>
<pre class="language-javascript"><code class="language-javascript">function welcome(name) {
  return "Welcome, " + name + "!";          // concatenation
}

function welcome2(name) {
  return \`Welcome, \${name}!\`;               // template literal — easier to read with multiple inserts
}

welcome("Os");      // returns "Welcome, Os!"
welcome2("Os");     // returns "Welcome, Os!"</code></pre>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-8-19-1-0': `
    <p>Most user-facing data is text — names, addresses, messages, search queries, error messages. Without a way for functions to take strings as input, every piece of text-processing logic would have to be inlined wherever it's needed.</p>
    <p>Functions that receive strings let you wrap text-processing logic in a name and reuse it. One <code>formatPrice</code>, one <code>capitalizeName</code>, one <code>buildErrorMessage</code> — used everywhere those operations are needed.</p>
  `,

  /* 1.1 Why use it */
  'topics-8-19-1-1': `
    <p>Use string parameters whenever a function needs to operate on text. Validation, formatting, building messages, parsing URLs, transforming user input — all of these are functions that receive strings.</p>
<pre class="language-javascript"><code class="language-javascript">// Formatting
function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}
capitalize("hello");
// returns: "Hello"

// Validation
function isValidEmail(email) {
  return email.includes("@") && email.length > 3;
}
isValidEmail("test@x.com");
// returns: true

// Building messages
function welcomeMessage(name) {
  return "Welcome to the app, " + name + "!";
}
welcomeMessage("Os");
// returns: "Welcome to the app, Os!"</code></pre>
    <p>Each one is a small, named tool you can use anywhere in the codebase.</p>
  `,

  /* 1.2 Where you use it */
  'topics-8-19-1-2': `
    <p>String parameters show up everywhere user input or display text is involved.</p>
<pre class="language-javascript"><code class="language-javascript">// Form handling
function trimInput(value) {
  return value.trim();
}

// Building UI text
function buildBadgeText(label, count) {
  return label + " (" + count + ")";
}

// Working with URLs
function getPathFromUrl(url) {
  return url.split("?")[0];
}

// Search and filtering
function matchesQuery(name, query) {
  return name.toLowerCase().includes(query.toLowerCase());
}

// Building HTML
function makeHeading(text) {
  return "<h1>" + text + "</h1>";
}</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-8-19-1-3': `
    <p>A function that receives a string is just a function with a slot waiting for some text. When you call it, you hand it the text you want it to work with, and the function does whatever its job is — clean it up, check it, format it, build something with it.</p>
    <p>Inside the function, the string parameter is just a normal variable that happens to hold text. You can use any string method on it, chop it up, glue it to other strings, or hand it back transformed.</p>
  `,

  /* 1.4 Mental model */
  'topics-8-19-1-4': `
    <p>The parameter is the slot. The argument is the text. Inside the function, the parameter behaves like any string variable.</p>
<pre class="language-javascript"><code class="language-javascript">function process(text) {
  // inside, "text" is just a string variable
  // you can do anything with it that you'd do with any string
}

process("hello");
// while this call is running:
// text = "hello"</code></pre>
    <p>Once you see the parameter as "just a string variable, but the value comes from the call," all the string-processing skills you already have apply directly inside the function.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-8-19-1-5': `
<pre class="language-javascript"><code class="language-javascript">function reverseWord(word) {
  const chars = word.split("");
  const reversed = chars.reverse();
  return reversed.join("");
}

const result = reverseWord("hello");
console.log(result);
// prints: "olleh"

// JavaScript is thinking:
// Line 1: register reverseWord. Don't run the body yet.
// Line 7: see reverseWord("hello") → call it. Local scope: word = "hello".
// Line 2: word.split("") → ["h", "e", "l", "l", "o"]. Store in local chars.
// Line 3: chars.reverse() → ["o", "l", "l", "e", "h"]. Store in local reversed.
// Line 4: reversed.join("") → "olleh". Return it.
// Line 7: store "olleh" in result.
// Line 8: log result → "olleh".</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-8-19-2-0': `
    <p>If you get <code>TypeError: ... is not a function</code> on a string method, the parameter probably isn't a string — it might be <code>undefined</code>, <code>null</code>, or a number.</p>
<pre class="language-javascript"><code class="language-javascript">function shout(text) {
  return text.toUpperCase();
}

shout();
// TypeError: Cannot read properties of undefined (reading 'toUpperCase')
// fix: pass a string, or check for undefined first
//   if (!text) return "";</code></pre>

    <p>If a string parameter contains unexpected content (extra spaces, mixed case, weird characters), log it at the top of the body to see exactly what came in:</p>
<pre class="language-javascript"><code class="language-javascript">function login(email) {
  console.log("got:", JSON.stringify(email));   // shows quotes and exact characters
  // ...
}

login("  test@example.com  ");
// prints: got: "  test@example.com  "
// JSON.stringify reveals hidden whitespace that a normal log wouldn't</code></pre>
  `,

  /* 2.1 The part that makes it click */
  'topics-8-19-2-1': `
    <p>A string parameter is a string. That's it. The fact that it came from outside the function doesn't change what you can do with it.</p>
    <p>Once it's inside the body, all your normal string skills apply — methods, concatenation, comparison, slicing. The parameter is just the doorway through which the string entered.</p>
  `,

  /* 2.2 Common confusions */
  'topics-8-19-2-2': `
    <p><strong>Confusion: passing a string vs passing a variable that holds a string</strong></p>
<pre class="language-javascript"><code class="language-javascript">function greet(name) {
  console.log("hi, " + name);
}

greet("Os");           // passing the string literal
const userName = "Os";
greet(userName);       // passing a variable that holds a string
// both end up with name = "Os" inside the function — same result</code></pre>

    <p><strong>Confusion: forgetting quotes</strong></p>
<pre class="language-javascript"><code class="language-javascript">greet(Os);
// ReferenceError — Os is treated as a variable name, but Os doesn't exist
// fix: greet("Os");</code></pre>

    <p><strong>Confusion: changing the parameter doesn't change the original</strong></p>
<pre class="language-javascript"><code class="language-javascript">function tidy(text) {
  text = text.trim();          // reassigns the local parameter
  return text;
}

const original = "  hello  ";
const tidied = tidy(original);
console.log(original);         // "  hello  " — unchanged
console.log(tidied);            // "hello"
// strings are immutable — methods like trim return a NEW string, they don't modify the original</code></pre>

    <p><strong>Confusion: empty string vs missing</strong></p>
<pre class="language-javascript"><code class="language-javascript">function describe(text) {
  if (!text) return "no text";
  return "got: " + text;
}

describe();          // "no text" — undefined is falsy
describe("");        // "no text" — empty string is also falsy
describe("hi");       // "got: hi"
// !text catches both undefined AND empty string — useful for "is anything there?"</code></pre>

    <p><strong>Confusion: + vs template literals</strong></p>
<pre class="language-javascript"><code class="language-javascript">function buildMessage(name, count) {
  return "Hello " + name + ", you have " + count + " messages.";    // concatenation
  return \`Hello \${name}, you have \${count} messages.\`;             // template literal
}
// both produce the same output — template literals are easier to read with multiple inserts</code></pre>
  `,

  /* 2.3 Common mistakes */
  'topics-8-19-2-3': `
<pre class="language-javascript"><code class="language-javascript">function shout(text) {
  return text.toUpperCase();
}
shout(42);
// TypeError — 42 is a number, doesn't have toUpperCase
// fix: pass a string, or coerce: text = String(text);</code></pre>

<pre class="language-javascript"><code class="language-javascript">function greet(name) {
  return "hi, " + name;
}
greet();
// returns: "hi, undefined" — no argument was passed
// fix: greet("Os"); — or set a default: function greet(name = "friend")</code></pre>

<pre class="language-javascript"><code class="language-javascript">function clean(text) {
  text.trim();         // result is thrown away
  return text;
}
clean("  hello  ");
// returns: "  hello  " — trim wasn't captured
// fix: text = text.trim(); — or return text.trim() directly</code></pre>

<pre class="language-javascript"><code class="language-javascript">function welcome(name) {
  return "Welcome " name;
}
// SyntaxError — missing + between the strings
// fix: return "Welcome " + name; — or use a template literal</code></pre>

<pre class="language-javascript"><code class="language-javascript">function login(email) {
  if (email == "test@example.com") { ... }
}
login("  test@example.com  ");
// won't match — extra spaces in the email
// fix: trim before comparing: if (email.trim() === "test@example.com")</code></pre>

<pre class="language-javascript"><code class="language-javascript">function isMatch(name, query) {
  return name.includes(query);
}
isMatch("Hello World", "hello");
// returns: false — case-sensitive
// fix: lowercase both sides: name.toLowerCase().includes(query.toLowerCase())</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-8-19-3-0': `
<pre class="language-javascript"><code class="language-javascript">// Returning a transformed string
function shout(text) {
  return text.toUpperCase() + "!";
}
shout("hello");
// returns: "HELLO!"

// Combining multiple string parameters
function fullName(first, last) {
  return first + " " + last;
}
fullName("Os", "Garcia");
// returns: "Os Garcia"

// Returning a boolean from a string check
function isLongEnough(text) {
  return text.length >= 8;
}
isLongEnough("hi");
isLongEnough("hello world");
// returns: false, then true

// Using a template literal
function welcome(name) {
  return \`Welcome, \${name}!\`;
}
welcome("Os");
// returns: "Welcome, Os!"

// Default parameter when no string is passed
function greet(name = "friend") {
  return "Hello, " + name;
}
greet();
greet("Os");
// returns: "Hello, friend", then "Hello, Os"</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-8-19-3-1': `
    <p><strong>Example: cleaning user input</strong></p>
<pre class="language-javascript"><code class="language-javascript">function cleanInput(value) {
  return value.trim().toLowerCase();
}

const email = cleanInput(emailInput.value);
console.log(email);
// strips spaces and normalizes casing — common before saving or comparing</code></pre>

    <p><strong>Example: validating a string</strong></p>
<pre class="language-javascript"><code class="language-javascript">function isValidUsername(username) {
  if (username.length < 3) return false;
  if (username.length > 20) return false;
  if (!/^[a-zA-Z0-9_]+$/.test(username)) return false;
  return true;
}

if (!isValidUsername(input.value)) {
  showError("Invalid username");
}</code></pre>

    <p><strong>Example: building a display string</strong></p>
<pre class="language-javascript"><code class="language-javascript">function formatTimeAgo(label) {
  return "Last updated: " + label;
}

statusBar.textContent = formatTimeAgo("2 minutes ago");
// the function packages the prefix so all "last updated" labels look consistent</code></pre>

    <p><strong>Example: search filter</strong></p>
<pre class="language-javascript"><code class="language-javascript">function matchesSearch(productName, query) {
  return productName.toLowerCase().includes(query.toLowerCase());
}

const results = products.filter(p => matchesSearch(p.name, searchInput.value));
console.log(results);
// case-insensitive search — works whether the user types "hat", "Hat", or "HAT"</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-8-19-3-2': `
    <ul>
      <li><strong>Strings</strong> → the data type the function operates on</li>
      <li><strong>Parameters</strong> → the slot that catches the incoming string</li>
      <li><strong>String methods</strong> → <code>.trim()</code>, <code>.toUpperCase()</code>, <code>.includes()</code>, etc.</li>
      <li><strong>String concatenation</strong> → using <code>+</code> to join strings together</li>
      <li><strong>Template literals</strong> → cleaner syntax for building strings with inserts</li>
      <li><strong>Default parameters</strong> → fallback when no string is passed</li>
      <li><strong>Form input</strong> → form values come in as strings</li>
      <li><strong>Validation</strong> → string checks are a common function pattern</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-8-19-3-3': `
    <ul>
      <li>Strings</li>
      <li>String methods</li>
      <li>Template literals</li>
      <li>String concatenation</li>
      <li>Parameters</li>
      <li>Default parameters</li>
      <li>Type coercion</li>
      <li>Form input handling</li>
    </ul>
  `,


  /* ========================================================= 
   Sub-lesson: 3.9.21 Functions → functions receiving numbers
 =======================================================*/

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-8-20-0-0': `
    <p>A function "receives" a number when you pass a number in as an argument. Inside the function, the parameter holds that number and the body can do math with it, compare it, format it, or use it to drive logic.</p>
    <p>Numbers are the second-most-common kind of input — prices, ages, counts, percentages, coordinates, scores.</p>
  `,

  /* 0.1 Syntax */
  'topics-8-20-0-1': `
<pre class="language-javascript"><code class="language-javascript">function tripleIt(n) {
  return n * 3;
}

console.log(tripleIt(4));
console.log(tripleIt(10));
// prints:
//   12
//   30</code></pre>
    <p>The parameter <code>n</code> holds whatever number was passed in. Inside the body, you can do math with it, compare it, or pass it to other functions.</p>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-8-20-0-2': `
<pre class="language-javascript"><code class="language-javascript">function applyDiscount(price, percent) {
  const discount = price * (percent / 100);
  const final = price - discount;
  return final;
}

console.log(applyDiscount(80, 25));
// prints: 60

// price, percent     → number parameters
// price * (percent / 100) → math operations on the parameters
// price - discount   → another calculation
// return final       → the resulting number is handed back</code></pre>
    <p>Once a number is inside the function, you can use any math operator (<code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>, <code>%</code>, <code>**</code>) and any number method (<code>toFixed</code>, <code>toString</code>) on it.</p>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-8-20-0-3': `
    <p>Number arguments are written without quotes:</p>
<pre class="language-javascript"><code class="language-javascript">double(5);          // correct: passing the number 5
double("5");         // wrong: passing the string "5"
                     // double would try to do "5" * 2 → JS coerces, returns 10 anyway
                     // but other operations would behave differently</code></pre>

    <p>The parameter holds a number — math operators and number methods work on it:</p>
<pre class="language-javascript"><code class="language-javascript">function describe(n) {
  console.log("doubled:", n * 2);
  console.log("squared:", n ** 2);
  console.log("rounded:", Math.round(n));
  console.log("two decimals:", n.toFixed(2));
  console.log("is even:", n % 2 === 0);
}

describe(7.456);
// prints:
//   doubled: 14.912
//   squared: 55.59145600000001
//   rounded: 7
//   two decimals: 7.46
//   is even: false</code></pre>

    <p>Watch out for <code>+</code> with strings — it concatenates instead of adding:</p>
<pre class="language-javascript"><code class="language-javascript">function add(a, b) {
  return a + b;
}

add(2, 3);          // returns: 5  (number + number)
add("2", "3");      // returns: "23"  (string + string)
add("2", 3);        // returns: "23"  (string + number → string)
// fix: convert to numbers first → Number(a) + Number(b)</code></pre>

    <p>Form inputs always arrive as strings — convert them to numbers explicitly:</p>
<pre class="language-javascript"><code class="language-javascript">const raw = priceInput.value;     // "19.99" — string
const price = Number(raw);         // 19.99 — actual number

function applyTax(price) {
  return price * 1.08;
}

applyTax(price);
// returns: 21.5892
// passing the string "19.99" might also work due to coercion, but explicit conversion is safer</code></pre>

    <p>Special values to know:</p>
<pre class="language-javascript"><code class="language-javascript">function check(n) {
  console.log(n);
}

check(NaN);          // NaN — "Not a Number", from invalid math
check(Infinity);     // Infinity — from things like 1/0
check(0.1 + 0.2);    // 0.30000000000000004 — floating-point quirk</code></pre>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-8-20-1-0': `
    <p>Most calculations in real apps — prices, ages, distances, averages, percentages — happen on numbers. Without functions to take numbers as input, math logic would have to be inlined every time you needed it.</p>
    <p>Functions that receive numbers let you wrap calculations in a name and reuse them. One <code>calculateTax</code>, one <code>formatPrice</code>, one <code>averageScore</code> — used everywhere those calculations are needed.</p>
  `,

  /* 1.1 Why use it */
  'topics-8-20-1-1': `
    <p>Use number parameters whenever a function does math, compares quantities, or formats numeric values.</p>
<pre class="language-javascript"><code class="language-javascript">// Math
function addTax(price) {
  return price + (price * 0.08);
}
addTax(50);
// returns: 54

// Comparison
function isAdult(age) {
  return age >= 18;
}
isAdult(20);
// returns: true

// Formatting
function formatPrice(amount) {
  return "$" + amount.toFixed(2);
}
formatPrice(19.999);
// returns: "$20.00"</code></pre>
    <p>Each one wraps a single calculation. The function name describes what the math means, which makes the calling code much easier to read.</p>
  `,

  /* 1.2 Where you use it */
  'topics-8-20-1-2': `
    <p>Number parameters show up anywhere quantities are involved — prices, sizes, counts, times, scores.</p>
<pre class="language-javascript"><code class="language-javascript">// Pricing
function applyDiscount(price, percent) { return price * (1 - percent / 100); }

// Quantity checks
function hasEnoughStock(stock, ordered)  { return stock >= ordered; }

// Time / age
function isOlderThan(age, threshold) { return age > threshold; }

// Display
function formatBytes(bytes) {
  if (bytes < 1024) return bytes + " B";
  return (bytes / 1024).toFixed(1) + " KB";
}

// Random / chance
function rollUnder(threshold) {
  return Math.random() < threshold;
}

// Geometry
function rectangleArea(width, height) { return width * height; }</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-8-20-1-3': `
    <p>A function that receives a number is just a function with a slot waiting for some quantity. When you call it, you hand it the number you want it to work with, and the function does whatever its job is — calculate, compare, round, format.</p>
    <p>Inside the function, the parameter is just a normal number variable. You can multiply it, divide it, compare it, round it, or use it as part of a bigger formula.</p>
  `,

  /* 1.4 Mental model */
  'topics-8-20-1-4': `
    <p>The parameter is the slot. The argument is the number. Inside the function, the parameter behaves like any number variable.</p>
<pre class="language-javascript"><code class="language-javascript">function process(n) {
  // inside, "n" is just a number variable
  // you can do anything with it that you'd do with any number
}

process(7);
// while this call is running:
// n = 7</code></pre>
    <p>Once you see the parameter as "just a number variable, but the value comes from the call," all your math skills work directly inside the function.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-8-20-1-5': `
<pre class="language-javascript"><code class="language-javascript">function bonus(score) {
  const reward = score * 10;
  return reward + 50;
}

const result = bonus(7);
console.log(result);
// prints: 120

// JavaScript is thinking:
// Line 1: register bonus. Don't run the body yet.
// Line 6: see bonus(7) → call it. Local scope: score = 7.
// Line 2: const reward = 7 * 10 → reward is 70.
// Line 3: return reward + 50 → 70 + 50 → 120, exit the function with 120.
// Line 6: store 120 in result. Local scope (score, reward) destroyed.
// Line 7: log result → 120.</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-8-20-2-0': `
    <p>If a calculation gives <code>NaN</code> ("Not a Number"), one of the inputs probably wasn't actually a number. Log the parameters with their types to see what came in.</p>
<pre class="language-javascript"><code class="language-javascript">function add(a, b) {
  console.log("a:", a, typeof a, "b:", b, typeof b);
  return a + b;
}

add(5, undefined);
// prints: a: 5 'number' b: undefined 'undefined'
// returns: NaN — undefined breaks the math
// fix: check inputs, or use defaults: function add(a = 0, b = 0)</code></pre>

    <p>If results are slightly off (like <code>0.1 + 0.2</code> giving <code>0.30000000000000004</code>), it's floating-point math — a JavaScript-wide quirk, not a bug in your function. Use <code>.toFixed()</code> or round to a fixed number of decimals when displaying.</p>
  `,

  /* 2.1 The part that makes it click */
  'topics-8-20-2-1': `
    <p>A number parameter is a number. The fact that it came from outside the function doesn't change what you can do with it.</p>
    <p>Once it's inside the body, all your math skills apply — operators, methods, comparisons, formulas. The parameter is just the doorway through which the number entered.</p>
  `,

  /* 2.2 Common confusions */
  'topics-8-20-2-2': `
    <p><strong>Confusion: <code>+</code> with strings</strong></p>
<pre class="language-javascript"><code class="language-javascript">function sum(a, b) {
  return a + b;
}

sum(2, 3);          // returns: 5
sum("2", "3");      // returns: "23" — strings concatenate
sum(2, "3");        // returns: "23" — number gets coerced to string
// fix: ensure inputs are numbers — sum(Number(a), Number(b)) — or use a number-specific operator</code></pre>

    <p><strong>Confusion: form values are strings</strong></p>
<pre class="language-javascript"><code class="language-javascript">function calculateTotal(price, quantity) {
  return price * quantity;
}

const price = priceInput.value;       // "19.99" — string
const qty = qtyInput.value;            // "2" — string

calculateTotal(price, qty);
// returns: 39.98 — works because * coerces strings to numbers
// but: calculateTotal("3", "5") with + would give "35" not 8
// safer: convert with Number() first</code></pre>

    <p><strong>Confusion: NaN doesn't equal anything, even itself</strong></p>
<pre class="language-javascript"><code class="language-javascript">function isValid(n) {
  return n === n;     // false only when n is NaN
}

isValid(5);           // true
isValid(NaN);         // false
// the proper check is Number.isNaN(n) — purpose-built for this</code></pre>

    <p><strong>Confusion: integer division</strong></p>
<pre class="language-javascript"><code class="language-javascript">function half(n) {
  return n / 2;
}

half(10);          // 5
half(7);           // 3.5 — JS uses floating-point division by default
// for integer results, use Math.floor: Math.floor(n / 2)</code></pre>

    <p><strong>Confusion: modulo for divisibility</strong></p>
<pre class="language-javascript"><code class="language-javascript">function isEven(n) {
  return n % 2 === 0;     // remainder when divided by 2 is 0
}

isEven(4);         // true
isEven(7);         // false
// % gives the remainder — useful for divisibility checks and cycling</code></pre>
  `,

  /* 2.3 Common mistakes */
  'topics-8-20-2-3': `
<pre class="language-javascript"><code class="language-javascript">function add(a, b) {
  return a + b;
}
add("5", "10");
// returns: "510" — string concatenation, not addition
// fix: convert first → Number("5") + Number("10") → 15</code></pre>

<pre class="language-javascript"><code class="language-javascript">function calculate(price) {
  return price.toFixed(2);
}
calculate("19.99");
// TypeError — toFixed only works on numbers
// fix: convert first → Number(price).toFixed(2)</code></pre>

<pre class="language-javascript"><code class="language-javascript">function divide(a, b) {
  return a / b;
}
divide(10, 0);
// returns: Infinity — not an error, but probably not what you want
// fix: check for zero first → if (b === 0) return null;</code></pre>

<pre class="language-javascript"><code class="language-javascript">function discount(price) {
  return price * 0.1;
}
discount();
// returns: NaN — undefined * 0.1 is NaN
// fix: set a default → function discount(price = 0)</code></pre>

<pre class="language-javascript"><code class="language-javascript">function isAdult(age) {
  if (age = 18) return true;
}
// always returns true — = is assignment, not comparison
// fix: use === for comparison → if (age === 18)</code></pre>

<pre class="language-javascript"><code class="language-javascript">function average(a, b) {
  return a + b / 2;
}
average(10, 20);
// returns: 20 — division happens before addition
// fix: parens → return (a + b) / 2;</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-8-20-3-0': `
<pre class="language-javascript"><code class="language-javascript">// Simple math
function square(n) {
  return n * n;
}
square(5);
// returns: 25

// Math with multiple parameters
function average(a, b, c) {
  return (a + b + c) / 3;
}
average(10, 20, 30);
// returns: 20

// Returning a boolean from a number check
function isPositive(n) {
  return n > 0;
}
isPositive(-3);
isPositive(7);
// returns: false, then true

// Formatting
function formatMoney(amount) {
  return "$" + amount.toFixed(2);
}
formatMoney(9.5);
// returns: "$9.50"

// Default parameter
function multiply(n, factor = 2) {
  return n * factor;
}
multiply(5);
multiply(5, 3);
// returns: 10, then 15</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-8-20-3-1': `
    <p><strong>Example: cart total with tax</strong></p>
<pre class="language-javascript"><code class="language-javascript">function calculateOrderTotal(subtotal, taxRate) {
  const tax = subtotal * taxRate;
  return subtotal + tax;
}

const total = calculateOrderTotal(100, 0.08);
console.log("Total: $" + total.toFixed(2));
// prints: "Total: $108.00"</code></pre>

    <p><strong>Example: progress bar percentage</strong></p>
<pre class="language-javascript"><code class="language-javascript">function getPercent(current, total) {
  return Math.round((current / total) * 100);
}

const percent = getPercent(45, 60);
progressBar.style.width = percent + "%";
console.log(percent);
// prints: 75
// progress bar fills 75%</code></pre>

    <p><strong>Example: clamping a value to a range</strong></p>
<pre class="language-javascript"><code class="language-javascript">function clamp(value, min, max) {
  if (value < min) return min;
  if (value > max) return max;
  return value;
}

console.log(clamp(150, 0, 100));
console.log(clamp(-10, 0, 100));
console.log(clamp(50, 0, 100));
// prints:
//   100
//   0
//   50
// useful for sliders, input limits, volume controls, anything bounded</code></pre>

    <p><strong>Example: rounding a price for display</strong></p>
<pre class="language-javascript"><code class="language-javascript">function roundToTwo(n) {
  return Math.round(n * 100) / 100;
}

const price = 19.99 * 1.08;       // 21.5892
console.log(roundToTwo(price));
// prints: 21.59
// avoids floating-point clutter when displaying prices</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-8-20-3-2': `
    <ul>
      <li><strong>Numbers</strong> → the data type the function operates on</li>
      <li><strong>Parameters</strong> → the slot that catches the incoming number</li>
      <li><strong>Math operators</strong> → <code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>, <code>%</code>, <code>**</code></li>
      <li><strong>Number methods</strong> → <code>.toFixed()</code>, <code>.toString()</code></li>
      <li><strong>Math object</strong> → <code>Math.round</code>, <code>Math.floor</code>, <code>Math.max</code>, etc.</li>
      <li><strong>Type coercion</strong> → strings can sneak into number math via <code>+</code></li>
      <li><strong>Comparison operators</strong> → <code>&lt;</code>, <code>&gt;</code>, <code>===</code></li>
      <li><strong>Default parameters</strong> → fallback when no number is passed</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-8-20-3-3': `
    <ul>
      <li>Numbers</li>
      <li>Math operators</li>
      <li>Math object methods</li>
      <li>Number methods (<code>toFixed</code>, <code>toString</code>)</li>
      <li>Type coercion</li>
      <li><code>NaN</code> and <code>Infinity</code></li>
      <li>Floating-point precision</li>
      <li>Default parameters</li>
    </ul>
  `,


  /* ========================================================= 
   Sub-lesson: 3.9.22 Functions → functions receiving arrays
 =======================================================*/

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-8-21-0-0': `
    <p>A function "receives" an array when you pass an array in as an argument. Inside the function, the parameter holds the entire array — and the body can read items from it, loop over it, transform it, or measure its length.</p>
    <p>Arrays are how you hand a function a <em>list</em> of things — products, scores, names, items in a cart — instead of one value at a time.</p>
  `,

  /* 0.1 Syntax */
  'topics-8-21-0-1': `
<pre class="language-javascript"><code class="language-javascript">function countItems(list) {
  return list.length;
}

console.log(countItems(["apple", "banana", "cherry"]));
console.log(countItems([1, 2, 3, 4, 5]));
// prints:
//   3
//   5</code></pre>
    <p>The parameter <code>list</code> holds the entire array. Inside the body, you can use <code>.length</code>, indexing, loops, and array methods on it.</p>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-8-21-0-2': `
<pre class="language-javascript"><code class="language-javascript">function summarize(scores) {
  const total = scores.reduce((sum, n) => sum + n, 0);
  const average = total / scores.length;
  return "Average: " + average;
}

console.log(summarize([80, 90, 100]));
// prints: "Average: 90"

// scores               → array parameter — holds the whole list
// scores.reduce(...)   → array method called on the parameter
// scores.length        → number of items in the array
// total / scores.length → math using both the running total and the array's size
// return ...           → the resulting string is handed back</code></pre>
    <p>The function gets the whole array. Methods like <code>reduce</code>, properties like <code>length</code>, and indexing all work the same as on any other array variable.</p>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-8-21-0-3': `
    <p>Array arguments are written with square brackets:</p>
<pre class="language-javascript"><code class="language-javascript">getMax([3, 7, 1]);              // pass an array literal directly
const numbers = [3, 7, 1];
getMax(numbers);                  // pass a variable that holds an array
// both pass the same array into getMax</code></pre>

    <p>The parameter is a regular variable holding an array — all array operations work:</p>
<pre class="language-javascript"><code class="language-javascript">function inspect(items) {
  console.log("length:", items.length);
  console.log("first:", items[0]);
  console.log("last:", items[items.length - 1]);
  console.log("includes 'b':", items.includes("b"));
  console.log("joined:", items.join(", "));
}

inspect(["a", "b", "c"]);
// prints:
//   length: 3
//   first: a
//   last: c
//   includes 'b': true
//   joined: a, b, c</code></pre>

    <p>Arrays are passed by <strong>reference</strong> — modifying the parameter modifies the original:</p>
<pre class="language-javascript"><code class="language-javascript">function addItem(list) {
  list.push("new");          // modifies the same array the caller passed in
}

const items = ["a", "b"];
addItem(items);
console.log(items);
// prints: ["a", "b", "new"] — the original was changed!</code></pre>

    <p>Reassigning the parameter does <strong>not</strong> affect the original:</p>
<pre class="language-javascript"><code class="language-javascript">function reset(list) {
  list = [];          // reassigns the local parameter, doesn't touch the original
}

const items = ["a", "b"];
reset(items);
console.log(items);
// prints: ["a", "b"] — unchanged</code></pre>

    <p>If you want to avoid mutating the original, copy it first or use a non-mutating method:</p>
<pre class="language-javascript"><code class="language-javascript">function withExtra(list) {
  return [...list, "new"];   // returns a NEW array, original is untouched
}

const items = ["a", "b"];
const result = withExtra(items);
console.log(items);
console.log(result);
// prints:
//   ["a", "b"]
//   ["a", "b", "new"]</code></pre>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-8-21-1-0': `
    <p>A lot of real work involves a list of things — products, todos, scores, search results, cart items. Without arrays as parameters, you'd have to handle items one by one or pile them into separate variables.</p>
    <p>Functions that receive arrays let you wrap list-processing logic in a name. Compute totals, filter for matches, build summaries, render lists — all with one function that works for any list of any size.</p>
  `,

  /* 1.1 Why use it */
  'topics-8-21-1-1': `
    <p>Use array parameters whenever a function needs to operate on a collection — counting, summing, filtering, transforming, finding, building.</p>
<pre class="language-javascript"><code class="language-javascript">// Sum a list of numbers
function total(prices) {
  return prices.reduce((sum, p) => sum + p, 0);
}
total([10, 20, 30]);
// returns: 60

// Filter a list
function inStock(products) {
  return products.filter(p => p.stock > 0);
}
inStock([{ name: "Hat", stock: 0 }, { name: "Shirt", stock: 5 }]);
// returns: [{ name: "Shirt", stock: 5 }]

// Find one item
function findByName(items, target) {
  return items.find(item => item.name === target);
}
findByName([{ name: "Os" }, { name: "Sam" }], "Sam");
// returns: { name: "Sam" }</code></pre>
    <p>Each one wraps a single list operation. The function name describes what the operation produces.</p>
  `,

  /* 1.2 Where you use it */
  'topics-8-21-1-2': `
    <p>Array parameters show up everywhere a list is involved — shopping carts, search results, form options, tables, charts.</p>
<pre class="language-javascript"><code class="language-javascript">// Cart math
function getCartTotal(items) {
  return items.reduce((sum, i) => sum + i.price * i.quantity, 0);
}

// Search
function searchProducts(products, query) {
  const q = query.toLowerCase();
  return products.filter(p => p.name.toLowerCase().includes(q));
}

// UI rendering
function renderList(items) {
  for (const item of items) {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  }
}

// Average calculation
function averageScore(scores) {
  if (scores.length === 0) return 0;
  return scores.reduce((sum, s) => sum + s, 0) / scores.length;
}

// Removing duplicates
function unique(values) {
  return [...new Set(values)];
}</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-8-21-1-3': `
    <p>A function that receives an array is a function with a slot waiting for a whole list. When you call it, you hand over the list, and the function does whatever its job is — counts the items, picks one out, builds a summary, transforms each one.</p>
    <p>Inside the function, the parameter is just a normal array. Same indexing, same length, same methods. The only thing that's different is where the array came from.</p>
    <p>One thing to remember: when you pass an array, you're passing the actual array — not a copy. If the function changes the array (with <code>push</code>, <code>splice</code>, etc.), the change is visible to the caller.</p>
  `,

  /* 1.4 Mental model */
  'topics-8-21-1-4': `
    <p>The parameter is the slot. The argument is the array. The function and the caller share the same array — both can see and change it.</p>
<pre class="language-javascript"><code class="language-javascript">const items = [1, 2, 3];
//                ↓ shared
function modify(list) {
  list.push(4);     // modifies the SAME array
}
modify(items);
console.log(items);
// prints: [1, 2, 3, 4]
// items and list both pointed at the same array — pushing affected both</code></pre>
    <p>This is "pass by reference" — the function gets a reference to the same array, not a separate copy.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-8-21-1-5': `
<pre class="language-javascript"><code class="language-javascript">function biggest(numbers) {
  let max = numbers[0];
  for (const n of numbers) {
    if (n > max) max = n;
  }
  return max;
}

const result = biggest([5, 12, 3, 9]);
console.log(result);
// prints: 12

// JavaScript is thinking:
// Line 1: register biggest. Don't run the body yet.
// Line 9: see biggest([5, 12, 3, 9]) → call it. Local scope: numbers = [5, 12, 3, 9].
// Line 2: max = numbers[0] → max is 5.
// Line 3-5: loop over [5, 12, 3, 9] → check each. 5 not > 5. 12 > 5 → max becomes 12. 3 not > 12. 9 not > 12.
// Line 6: return max → 12. Local scope destroyed.
// Line 9: store 12 in result.
// Line 10: log result → 12.</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-8-21-2-0': `
    <p>If passing an array changes it in unexpected ways, the function is mutating it. Check for <code>push</code>, <code>pop</code>, <code>shift</code>, <code>unshift</code>, <code>splice</code>, <code>sort</code>, or <code>reverse</code> — those modify in place.</p>
<pre class="language-javascript"><code class="language-javascript">function getSorted(list) {
  return list.sort();           // sort modifies the original AND returns it
}

const items = [3, 1, 2];
const sorted = getSorted(items);
console.log(items);
console.log(sorted);
// prints:
//   [1, 2, 3]
//   [1, 2, 3]
// the original was mutated!
// fix: copy first → return [...list].sort();</code></pre>

    <p>If <code>arr.length</code> is unexpectedly 0 or undefined, log the parameter to confirm an array was actually passed:</p>
<pre class="language-javascript"><code class="language-javascript">function process(items) {
  console.log("got:", items, Array.isArray(items));
  // ...
}

process();              // prints: got: undefined false
process("hello");       // prints: got: "hello" false — string, not array
process([1, 2]);        // prints: got: [1, 2] true</code></pre>
  `,

  /* 2.1 The part that makes it click */
  'topics-8-21-2-1': `
    <p>An array parameter is the same array the caller has — not a copy. The function and the caller are both holding references that point at the same list in memory.</p>
    <p>That's why mutating methods (<code>push</code>, <code>splice</code>, etc.) leak changes back to the caller. And why returning a new array (with <code>map</code>, <code>filter</code>, spread) is the safe way to "modify" without surprises.</p>
    <p>Once you internalize this, choosing between mutating and non-mutating methods stops being arbitrary — it's about whether you want the original to change.</p>
  `,

  /* 2.2 Common confusions */
  'topics-8-21-2-2': `
    <p><strong>Confusion: arrays are shared, not copied</strong></p>
<pre class="language-javascript"><code class="language-javascript">function addZero(list) {
  list.push(0);
}

const nums = [1, 2, 3];
addZero(nums);
console.log(nums);
// prints: [1, 2, 3, 0] — the original was changed
// in contrast, primitives (numbers, strings) are copied:
function addOne(n) { n = n + 1; }
let x = 5;
addOne(x);
console.log(x);
// prints: 5 — primitive was copied, original untouched</code></pre>

    <p><strong>Confusion: mutating vs non-mutating methods</strong></p>
<pre class="language-javascript"><code class="language-javascript">// Mutating — changes the original
function badRemoveFirst(list) {
  list.shift();         // modifies original
  return list;
}

// Non-mutating — returns a new array
function goodRemoveFirst(list) {
  return list.slice(1);  // returns a new array, original untouched
}</code></pre>

    <p><strong>Confusion: reassigning the parameter</strong></p>
<pre class="language-javascript"><code class="language-javascript">function emptyOut(list) {
  list = [];        // local parameter now points to a new array
                    // but the original outside is unchanged
}

const items = [1, 2, 3];
emptyOut(items);
console.log(items);
// prints: [1, 2, 3] — unchanged
// note: list.length = 0 WOULD have changed the original</code></pre>

    <p><strong>Confusion: empty array isn't undefined</strong></p>
<pre class="language-javascript"><code class="language-javascript">function describe(list) {
  if (!list) return "no list";
  if (list.length === 0) return "empty";
  return "has items";
}

describe();          // "no list" — undefined is falsy
describe([]);        // "empty" — empty array is TRUTHY (despite length 0)
describe([1, 2]);    // "has items"
// to check for empty, look at length, not truthiness</code></pre>

    <p><strong>Confusion: passing array elements vs the array</strong></p>
<pre class="language-javascript"><code class="language-javascript">function addThree(a, b, c) { return a + b + c; }

const nums = [1, 2, 3];
addThree(nums);          // wrong — passes the whole array as a, b and c are undefined
addThree(...nums);       // correct — spread expands the array into separate arguments</code></pre>
  `,

  /* 2.3 Common mistakes */
  'topics-8-21-2-3': `
<pre class="language-javascript"><code class="language-javascript">function getSorted(list) {
  return list.sort();
}
const original = [3, 1, 2];
getSorted(original);
console.log(original);
// prints: [1, 2, 3] — original was mutated by sort
// fix: return [...list].sort(); — copy first</code></pre>

<pre class="language-javascript"><code class="language-javascript">function average(scores) {
  const sum = scores.reduce((a, b) => a + b);
  return sum / scores.length;
}
average([]);
// returns: NaN — empty array breaks the math
// fix: if (scores.length === 0) return 0; at the top</code></pre>

<pre class="language-javascript"><code class="language-javascript">function first(items) {
  return items[1];
}
first(["a", "b", "c"]);
// returns: "b" — arrays are 0-indexed, not 1-indexed
// fix: items[0] for the first item</code></pre>

<pre class="language-javascript"><code class="language-javascript">function describe(list) {
  if (list.length > 0) return "has items";
  return "empty";
}
describe();
// TypeError — undefined doesn't have .length
// fix: if (!list) return "no list"; before checking length</code></pre>

<pre class="language-javascript"><code class="language-javascript">function clean(list) {
  for (let i = 0; i < list.length; i++) {
    if (list[i] === null) list.splice(i, 1);
  }
}
clean([1, null, null, 2]);
// bug: splice changes the array as you iterate, indices shift
// fix: filter and return a new array → return list.filter(x => x !== null);</code></pre>

<pre class="language-javascript"><code class="language-javascript">function combine(a, b) {
  return a + b;
}
combine([1, 2], [3, 4]);
// returns: "1,23,4" — + on arrays converts them to strings and concatenates
// fix: return [...a, ...b]; — spread to build a new array</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-8-21-3-0': `
<pre class="language-javascript"><code class="language-javascript">// Counting items
function howMany(list) {
  return list.length;
}
howMany([10, 20, 30]);
// returns: 3

// Summing numbers
function sumAll(numbers) {
  return numbers.reduce((sum, n) => sum + n, 0);
}
sumAll([1, 2, 3, 4]);
// returns: 10

// Finding the maximum
function highest(numbers) {
  return Math.max(...numbers);
}
highest([5, 12, 3, 9]);
// returns: 12

// Filtering
function evens(numbers) {
  return numbers.filter(n => n % 2 === 0);
}
evens([1, 2, 3, 4, 5, 6]);
// returns: [2, 4, 6]

// Joining into a string
function listOut(items) {
  return items.join(", ");
}
listOut(["apple", "banana", "cherry"]);
// returns: "apple, banana, cherry"</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-8-21-3-1': `
    <p><strong>Example: cart total</strong></p>
<pre class="language-javascript"><code class="language-javascript">function getCartTotal(items) {
  return items.reduce((sum, i) => sum + i.price * i.quantity, 0);
}

const cart = [
  { name: "Hat", price: 20, quantity: 2 },
  { name: "Shirt", price: 30, quantity: 1 },
];

console.log("Total: $" + getCartTotal(cart));
// prints: "Total: $70"</code></pre>

    <p><strong>Example: filter products by category</strong></p>
<pre class="language-javascript"><code class="language-javascript">function byCategory(products, category) {
  return products.filter(p => p.category === category);
}

const products = [
  { name: "Hat", category: "clothing" },
  { name: "Apple", category: "food" },
  { name: "Shirt", category: "clothing" },
];

console.log(byCategory(products, "clothing"));
// prints: [{ name: "Hat", ... }, { name: "Shirt", ... }]</code></pre>

    <p><strong>Example: rendering a list to the page</strong></p>
<pre class="language-javascript"><code class="language-javascript">function renderTodos(todos) {
  todoList.innerHTML = "";
  for (const todo of todos) {
    const li = document.createElement("li");
    li.textContent = todo.text;
    todoList.appendChild(li);
  }
}

renderTodos([
  { text: "Buy milk" },
  { text: "Walk the dog" },
  { text: "Pay bills" },
]);
// builds three <li> elements, one per todo</code></pre>

    <p><strong>Example: removing duplicates</strong></p>
<pre class="language-javascript"><code class="language-javascript">function unique(values) {
  return [...new Set(values)];
}

console.log(unique([1, 2, 2, 3, 3, 3, 4]));
// prints: [1, 2, 3, 4]
// Set drops duplicates, spread turns it back into an array</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-8-21-3-2': `
    <ul>
      <li><strong>Arrays</strong> → the data type the function operates on</li>
      <li><strong>Array methods</strong> → <code>.map()</code>, <code>.filter()</code>, <code>.reduce()</code>, <code>.find()</code>, etc.</li>
      <li><strong>Mutating vs non-mutating methods</strong> → some change the original, some return a new array</li>
      <li><strong>Pass by reference</strong> → arrays are shared between caller and function</li>
      <li><strong>Spread syntax</strong> → <code>[...arr]</code> for copying or expanding</li>
      <li><strong>Loops</strong> → <code>for</code>, <code>for...of</code>, <code>forEach</code> for processing each item</li>
      <li><strong>Indexing</strong> → <code>arr[0]</code> for accessing specific items</li>
      <li><strong>Length property</strong> → <code>arr.length</code> for counting items</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-8-21-3-3': `
    <ul>
      <li>Arrays</li>
      <li>Array methods (<code>map</code>, <code>filter</code>, <code>reduce</code>)</li>
      <li>Mutating array methods (<code>push</code>, <code>splice</code>, <code>sort</code>)</li>
      <li>Pass by reference vs pass by value</li>
      <li>Spread syntax</li>
      <li>Loops</li>
      <li>Empty array handling</li>
      <li><code>Array.isArray()</code></li>
    </ul>
  `,


  /* ========================================================= 
   Sub-lesson: 3.9.23 Functions → functions receiving objects
 =======================================================*/

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-8-22-0-0': `
    <p>A function "receives" an object when you pass an object in as an argument. Inside the function, the parameter holds the entire object — and the body can read its properties, modify them, or build something new from them.</p>
    <p>Objects are how you bundle related data together. Instead of passing five separate values for a user (name, age, email, etc.), you pass one object that contains all of them.</p>
  `,

  /* 0.1 Syntax */
  'topics-8-22-0-1': `
<pre class="language-javascript"><code class="language-javascript">function describePet(pet) {
  return pet.name + " is a " + pet.species;
}

console.log(describePet({ name: "Rex", species: "dog" }));
console.log(describePet({ name: "Whiskers", species: "cat" }));
// prints:
//   Rex is a dog
//   Whiskers is a cat</code></pre>
    <p>The parameter <code>pet</code> holds the whole object. Inside the body, you read properties with dot notation (<code>pet.name</code>) or bracket notation (<code>pet["name"]</code>).</p>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-8-22-0-2': `
<pre class="language-javascript"><code class="language-javascript">function buildOrder(customer) {
  const greeting = "Hi " + customer.name;
  const total = customer.items * customer.price;
  return greeting + ", your total is $" + total;
}

const order = buildOrder({ name: "Os", items: 3, price: 12 });
console.log(order);
// prints: "Hi Os, your total is $36"

// customer            → object parameter — holds the whole bundle
// customer.name       → reads the "name" property
// customer.items      → reads the "items" property
// customer.price      → reads the "price" property
// the function pulls out the properties it needs and uses them in calculations</code></pre>
    <p>The function receives the whole object and digs into it for whatever properties it needs. The caller doesn't have to remember the order of arguments — the property names tell you what's what.</p>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-8-22-0-3': `
    <p>Object arguments are written with curly braces:</p>
<pre class="language-javascript"><code class="language-javascript">describePet({ name: "Rex", species: "dog" });    // pass an object literal
const pet = { name: "Rex", species: "dog" };
describePet(pet);                                  // pass a variable that holds an object</code></pre>

    <p>Read properties with dot notation or bracket notation:</p>
<pre class="language-javascript"><code class="language-javascript">function show(user) {
  console.log(user.name);          // dot notation
  console.log(user["email"]);      // bracket notation
  
  const key = "age";
  console.log(user[key]);          // bracket notation with a variable
}

show({ name: "Os", email: "os@x.com", age: 30 });
// prints:
//   Os
//   os@x.com
//   30</code></pre>

    <p>Objects are passed by <strong>reference</strong> — modifying the parameter modifies the original:</p>
<pre class="language-javascript"><code class="language-javascript">function activate(user) {
  user.active = true;     // modifies the same object the caller passed in
}

const me = { name: "Os", active: false };
activate(me);
console.log(me);
// prints: { name: "Os", active: true } — the original was changed</code></pre>

    <p>Reassigning the parameter does <strong>not</strong> affect the original:</p>
<pre class="language-javascript"><code class="language-javascript">function reset(user) {
  user = {};        // reassigns the local parameter, doesn't touch the original
}

const me = { name: "Os" };
reset(me);
console.log(me);
// prints: { name: "Os" } — unchanged</code></pre>

    <p>You can destructure parameters to pull out properties directly:</p>
<pre class="language-javascript"><code class="language-javascript">function describe({ name, species }) {       // destructured parameter
  return name + " is a " + species;
}

describe({ name: "Rex", species: "dog" });
// returns: "Rex is a dog"
// the function pulls "name" and "species" out of the object automatically</code></pre>

    <p>Missing properties become <code>undefined</code>:</p>
<pre class="language-javascript"><code class="language-javascript">function describePet(pet) {
  return pet.name + " is " + pet.age + " years old";
}

describePet({ name: "Rex" });
// returns: "Rex is undefined years old" — age wasn't set
// fix: add a fallback → pet.age || "?"</code></pre>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-8-22-1-0': `
    <p>When a function needs a lot of related information — a user with a name, email, age, and role — passing each piece as a separate argument gets unwieldy. The order matters, and you have to remember which is which.</p>
    <p>Objects bundle related data into one named package. The function receives one object, and the property names describe each piece. Easier to call, easier to read, easier to extend.</p>
  `,

  /* 1.1 Why use it */
  'topics-8-22-1-1': `
    <p>Use an object parameter when a function needs several related pieces of information that belong together — or when you have so many parameters that order is hard to remember.</p>
<pre class="language-javascript"><code class="language-javascript">// Hard to read — many positional arguments
function createUser(name, age, email, role, isActive) {
  // ...
}
createUser("Os", 30, "os@x.com", "admin", true);

// Easier — one object with named fields
function createUser(user) {
  // ...
}
createUser({
  name: "Os",
  age: 30,
  email: "os@x.com",
  role: "admin",
  isActive: true,
});</code></pre>
    <p>The second version is self-documenting. The reader doesn't have to remember which position is the email and which is the role — the keys spell it out.</p>
  `,

  /* 1.2 Where you use it */
  'topics-8-22-1-2': `
    <p>Object parameters are common anywhere data has structure — users, products, events, configs, API payloads.</p>
<pre class="language-javascript"><code class="language-javascript">// User profile rendering
function renderProfile(user) {
  nameEl.textContent = user.name;
  emailEl.textContent = user.email;
}

// Building a card from a product
function buildCard(product) {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = "<h3>" + product.name + "</h3><p>$" + product.price + "</p>";
  return card;
}

// Event handlers receiving the event object
function handleClick(event) {
  event.preventDefault();
  console.log(event.target);
}

// Configuring something with options
function fetchData(options) {
  const url = options.url;
  const method = options.method || "GET";
  return fetch(url, { method });
}</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-8-22-1-3': `
    <p>An object is a bundle of labeled facts — name, age, email, all packaged together. Passing an object to a function is like handing someone a folder with everything they need to do the job.</p>
    <p>The function opens the folder, picks out the labels it cares about, and uses what it finds. The caller didn't have to lay out the contents in a specific order — the labels make it clear which is which.</p>
    <p>One thing to remember: just like with arrays, the function gets the same object — not a copy. Changing properties of the parameter changes the original.</p>
  `,

  /* 1.4 Mental model */
  'topics-8-22-1-4': `
    <p>The parameter is the slot. The argument is the object. The function and the caller share the same object — both can see and change it.</p>
<pre class="language-javascript"><code class="language-javascript">const me = { name: "Os", active: false };
//             ↓ shared
function activate(user) {
  user.active = true;     // modifies the SAME object
}

activate(me);
console.log(me);
// prints: { name: "Os", active: true }
// me and user both pointed at the same object — changing a property affected both</code></pre>
    <p>Like arrays, objects are passed by reference. The function gets a reference to the same object, not a separate copy.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-8-22-1-5': `
<pre class="language-javascript"><code class="language-javascript">function getFullName(person) {
  const first = person.first;
  const last = person.last;
  return first + " " + last;
}

const result = getFullName({ first: "Os", last: "Garcia" });
console.log(result);
// prints: "Os Garcia"

// JavaScript is thinking:
// Line 1: register getFullName. Don't run the body yet.
// Line 7: see getFullName({ first: "Os", last: "Garcia" }) → call it. Local scope: person = the passed-in object.
// Line 2: const first = person.first → look up the "first" property → "Os". Store in local first.
// Line 3: const last = person.last → look up "last" → "Garcia". Store in local last.
// Line 4: return first + " " + last → "Os Garcia". Local scope destroyed.
// Line 7: store "Os Garcia" in result.
// Line 8: log result → "Os Garcia".</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-8-22-2-0': `
    <p>If you read a property and get <code>undefined</code>, the object either doesn't have that property or the property name is misspelled. Log the whole object to see what's actually there.</p>
<pre class="language-javascript"><code class="language-javascript">function showEmail(user) {
  console.log("user:", user);
  console.log("email:", user.email);
}

showEmail({ name: "Os", emial: "os@x.com" });
// prints:
//   user: { name: 'Os', emial: 'os@x.com' }
//   email: undefined
// the object has "emial" — typo. Property names are case- and spelling-sensitive.</code></pre>

    <p>If your function unexpectedly mutates the caller's data, check whether you're reassigning properties (<code>user.name = ...</code>) on the parameter. Returning a new object is the safe alternative.</p>
  `,

  /* 2.1 The part that makes it click */
  'topics-8-22-2-1': `
    <p>An object parameter is the same object the caller has — not a copy. The function and the caller are both holding references to the same object in memory.</p>
    <p>That's why setting <code>user.active = true</code> inside the function leaks back to the caller. And why returning a new object (with spread, <code>Object.assign</code>) is the safe way to "modify" without surprises.</p>
    <p>Same rule as arrays: structures (objects and arrays) are passed by reference. Primitives (numbers, strings, booleans) are passed by value.</p>
  `,

  /* 2.2 Common confusions */
  'topics-8-22-2-2': `
    <p><strong>Confusion: objects are shared, not copied</strong></p>
<pre class="language-javascript"><code class="language-javascript">function activate(user) {
  user.active = true;
}

const me = { name: "Os", active: false };
activate(me);
console.log(me);
// prints: { name: "Os", active: true } — original was changed
// in contrast, primitives are copied:
function setName(name) { name = "X"; }
let n = "Os";
setName(n);
console.log(n);
// prints: "Os" — unchanged</code></pre>

    <p><strong>Confusion: dot vs bracket notation</strong></p>
<pre class="language-javascript"><code class="language-javascript">function get(user, field) {
  return user.field;       // wrong — looks for a property literally called "field"
  return user[field];      // correct — looks up the property whose name is in the variable
}

get({ name: "Os" }, "name");
// without brackets: returns undefined
// with brackets: returns "Os"</code></pre>

    <p><strong>Confusion: missing property is undefined, not an error</strong></p>
<pre class="language-javascript"><code class="language-javascript">function describe(pet) {
  return pet.name + " is " + pet.age;
}

describe({ name: "Rex" });
// returns: "Rex is undefined"
// JS doesn't error when reading a missing property — it just gives undefined
// fix: provide a fallback → pet.age || "unknown"</code></pre>

    <p><strong>Confusion: returning a new object vs modifying the parameter</strong></p>
<pre class="language-javascript"><code class="language-javascript">// Mutates — modifies the caller's object
function badRename(user, newName) {
  user.name = newName;
}

// Pure — returns a new object, original untouched
function goodRename(user, newName) {
  return { ...user, name: newName };
}</code></pre>

    <p><strong>Confusion: destructuring</strong></p>
<pre class="language-javascript"><code class="language-javascript">function withProperty(user) {
  return user.name + " is " + user.age;
}

function withDestructuring({ name, age }) {
  return name + " is " + age;
}

const me = { name: "Os", age: 30 };
withProperty(me);          // "Os is 30"
withDestructuring(me);     // "Os is 30"
// destructuring pulls properties out at call time — same effect, less typing inside the body</code></pre>
  `,

  /* 2.3 Common mistakes */
  'topics-8-22-2-3': `
<pre class="language-javascript"><code class="language-javascript">function show(user) {
  console.log(user.Name);
}
show({ name: "Os" });
// prints: undefined — property names are case-sensitive
// fix: user.name (lowercase) to match the actual key</code></pre>

<pre class="language-javascript"><code class="language-javascript">function get(obj, field) {
  return obj.field;
}
get({ name: "Os" }, "name");
// returns: undefined — looks for a literal property called "field"
// fix: return obj[field];</code></pre>

<pre class="language-javascript"><code class="language-javascript">function clearUser(user) {
  user = null;
}
const me = { name: "Os" };
clearUser(me);
console.log(me);
// prints: { name: "Os" } — reassigning the parameter doesn't affect the original
// fix: delete user.name; — modify properties, not the variable itself</code></pre>

<pre class="language-javascript"><code class="language-javascript">function describe(pet) {
  return pet.name.toUpperCase();
}
describe();
// TypeError — undefined doesn't have .name
// fix: check first → if (!pet) return "";</code></pre>

<pre class="language-javascript"><code class="language-javascript">function update(user) {
  user.name = user.name.trim();
}
const me = { name: "  Os  " };
update(me);
// works, but mutates the caller's object — they might not want that
// fix: return { ...user, name: user.name.trim() };</code></pre>

<pre class="language-javascript"><code class="language-javascript">function combine(a, b) {
  return a + b;
}
combine({ x: 1 }, { y: 2 });
// returns: "[object Object][object Object]" — + on objects is not what you want
// fix: return { ...a, ...b }; — spread to merge into a new object</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-8-22-3-0': `
<pre class="language-javascript"><code class="language-javascript">// Reading a property
function greet(user) {
  return "Hello, " + user.name;
}
greet({ name: "Os" });
// returns: "Hello, Os"

// Combining two properties
function fullName(person) {
  return person.first + " " + person.last;
}
fullName({ first: "Os", last: "Garcia" });
// returns: "Os Garcia"

// Returning a derived object
function makeCard(product) {
  return {
    title: product.name,
    label: "$" + product.price.toFixed(2),
  };
}
makeCard({ name: "Hat", price: 19.99 });
// returns: { title: "Hat", label: "$19.99" }

// Using destructuring
function describe({ name, age }) {
  return name + " is " + age + " years old";
}
describe({ name: "Os", age: 30 });
// returns: "Os is 30 years old"

// Default values for missing properties
function welcome({ name = "friend" } = {}) {
  return "Hello, " + name;
}
welcome();                    // "Hello, friend"
welcome({ name: "Os" });      // "Hello, Os"</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-8-22-3-1': `
    <p><strong>Example: rendering a user profile</strong></p>
<pre class="language-javascript"><code class="language-javascript">function renderProfile(user) {
  nameEl.textContent = user.name;
  emailEl.textContent = user.email;
  avatarEl.src = user.avatar;
}

renderProfile({
  name: "Os",
  email: "os@example.com",
  avatar: "/images/os.jpg",
});
// updates all three DOM elements from one object</code></pre>

    <p><strong>Example: building HTML from a product</strong></p>
<pre class="language-javascript"><code class="language-javascript">function buildProductCard(product) {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = \`
    <h3>\${product.name}</h3>
    <p>$\${product.price.toFixed(2)}</p>
    <p>Stock: \${product.stock}</p>
  \`;
  return card;
}

const card = buildProductCard({
  name: "Hat",
  price: 19.99,
  stock: 12,
});
document.body.appendChild(card);</code></pre>

    <p><strong>Example: function with options</strong></p>
<pre class="language-javascript"><code class="language-javascript">function showNotification({ title, body, duration = 3000 }) {
  const note = document.createElement("div");
  note.innerHTML = "<h4>" + title + "</h4><p>" + body + "</p>";
  document.body.appendChild(note);
  setTimeout(() => note.remove(), duration);
}

showNotification({ title: "Saved!", body: "Your changes are saved." });
showNotification({ title: "Error", body: "Try again", duration: 5000 });
// destructured parameters with defaults — flexible and self-documenting</code></pre>

    <p><strong>Example: returning a non-mutating update</strong></p>
<pre class="language-javascript"><code class="language-javascript">function withDiscount(product, percent) {
  return {
    ...product,
    price: product.price * (1 - percent / 100),
  };
}

const original = { name: "Hat", price: 100 };
const sale = withDiscount(original, 20);
console.log(original.price);
console.log(sale.price);
// prints:
//   100
//   80
// the original is untouched — sale is a new object</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-8-22-3-2': `
    <ul>
      <li><strong>Objects</strong> → the data type the function operates on</li>
      <li><strong>Properties</strong> → individual fields read with dot or bracket notation</li>
      <li><strong>Destructuring</strong> → pulling properties out of the parameter directly</li>
      <li><strong>Pass by reference</strong> → objects are shared between caller and function</li>
      <li><strong>Spread syntax</strong> → <code>{ ...obj }</code> for copying or merging</li>
      <li><strong>Default values</strong> → fallbacks for missing properties</li>
      <li><strong>Mutation vs immutability</strong> → modify in place or return a new object</li>
      <li><strong>Event objects</strong> → DOM events are objects passed to handlers</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-8-22-3-3': `
    <ul>
      <li>Objects</li>
      <li>Object properties (dot/bracket notation)</li>
      <li>Destructuring</li>
      <li>Pass by reference vs pass by value</li>
      <li>Spread syntax</li>
      <li>Default parameters</li>
      <li>Object mutation</li>
      <li>Optional chaining (<code>?.</code>)</li>
    </ul>
  `,


  /* ========================================================= 
   Sub-lesson: 3.9.24 Functions → functions inside event listeners
 =======================================================*/

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-8-23-0-0': `
    <p>An event listener is a way to register a function to run when something happens — a click, a keypress, a form submission. The function you provide is called the <strong>handler</strong> or <strong>callback</strong>, and the browser runs it for you when the event fires.</p>
    <p>You don't call this function yourself. You hand it over, and the browser calls it later, every time the event happens.</p>
  `,

  /* 0.1 Syntax */
  'topics-8-23-0-1': `
<pre class="language-javascript"><code class="language-javascript">const button = document.querySelector("#save");

button.addEventListener("click", function() {
  console.log("button clicked!");
});

// every time the button is clicked, "button clicked!" is logged
// the function is registered now, but it doesn't run until a click happens</code></pre>
    <p><code>addEventListener</code> takes two arguments: the event name (a string) and the function to run. The function is the second argument — it's a callback waiting for the event.</p>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-8-23-0-2': `
<pre class="language-javascript"><code class="language-javascript">const button = document.querySelector("#submit");

function handleClick(event) {
  console.log("clicked at", event.clientX);
}

button.addEventListener("click", handleClick);

// const button                → the DOM element to watch
// function handleClick        → the function to run when clicked
// event                       → parameter the browser passes — info about the event
// addEventListener            → method that registers the listener
// "click"                     → the event name
// handleClick                 → reference to the function (no parens — don't call yet)</code></pre>
    <p>The function isn't called when you register it. The browser stores it and calls it itself, passing the event object each time.</p>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-8-23-0-3': `
    <p>Pass the function as a <strong>reference</strong>, not a call:</p>
<pre class="language-javascript"><code class="language-javascript">button.addEventListener("click", handleClick);    // correct — pass the function
button.addEventListener("click", handleClick());  // wrong — calls handleClick immediately

// the second one runs handleClick once on this line, then passes the result (probably undefined)
// to addEventListener, so the click never fires anything</code></pre>

    <p>The handler can be a named function, an inline function expression, or an arrow function:</p>
<pre class="language-javascript"><code class="language-javascript">// Named function
function handleClick() { console.log("clicked"); }
button.addEventListener("click", handleClick);

// Inline function expression
button.addEventListener("click", function() {
  console.log("clicked");
});

// Arrow function (most common in modern code)
button.addEventListener("click", () => {
  console.log("clicked");
});</code></pre>

    <p>The browser passes an <strong>event object</strong> as the first argument:</p>
<pre class="language-javascript"><code class="language-javascript">button.addEventListener("click", (event) => {
  console.log("type:", event.type);          // "click"
  console.log("target:", event.target);       // the element that was clicked
  console.log("at x:", event.clientX);        // mouse coordinates
});

// you don't pass the event yourself — the browser provides it on each call</code></pre>

    <p>To remove a listener, use the same function reference:</p>
<pre class="language-javascript"><code class="language-javascript">function handleClick() { console.log("clicked"); }

button.addEventListener("click", handleClick);
button.removeEventListener("click", handleClick);
// works because we have a stable reference to the same function

button.addEventListener("click", () => console.log("clicked"));
// you CAN'T remove this — there's no name to refer to</code></pre>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-8-23-1-0': `
    <p>JavaScript pages are interactive — users click buttons, type into inputs, submit forms. The script needs a way to react to those actions. But the script can't sit in a loop waiting for clicks; the browser has to tell it.</p>
    <p>Event listeners solve this by letting you say: "when this event happens, run this function." You hand the browser a function and walk away. The browser triggers it whenever the event fires.</p>
  `,

  /* 1.1 Why use it */
  'topics-8-23-1-1': `
    <p>Use event listeners whenever you want code to run in response to user interaction or browser events.</p>
<pre class="language-javascript"><code class="language-javascript">// Button click
saveBtn.addEventListener("click", () => {
  saveData();
});

// Form submit
form.addEventListener("submit", (event) => {
  event.preventDefault();
  validateAndSubmit();
});

// Input changes
emailInput.addEventListener("input", (event) => {
  console.log("typed:", event.target.value);
});

// Keyboard
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeModal();
});

// Page load
window.addEventListener("load", () => {
  console.log("page is fully loaded");
});</code></pre>
    <p>Each one is a single function tied to a specific event. The browser does the wiring; you just write the response.</p>
  `,

  /* 1.2 Where you use it */
  'topics-8-23-1-2': `
    <p>Almost every interactive page is built around event listeners.</p>
<pre class="language-javascript"><code class="language-javascript">// Form validation as the user types
emailInput.addEventListener("input", (e) => {
  errorBox.textContent = isValid(e.target.value) ? "" : "Invalid email";
});

// Toggle UI state on click
menuButton.addEventListener("click", () => {
  sidebar.classList.toggle("open");
});

// Submit handler
loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = collectFormData();
  await sendLogin(data);
});

// Prevent the default browser action
link.addEventListener("click", (e) => {
  e.preventDefault();
  openInModal(link.href);
});

// Drag-and-drop
dropzone.addEventListener("dragover", (e) => e.preventDefault());
dropzone.addEventListener("drop", (e) => handleDrop(e));</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-8-23-1-3': `
    <p>An event listener is like leaving a note for the doorbell. The note says: "If anyone rings the bell, do this." You don't stand at the door waiting — you go on with your life, and the bell triggers the response when it happens.</p>
    <p>The function you pass to <code>addEventListener</code> is the note. You hand it over once. Every time the event happens, the browser reads the note and runs the function.</p>
    <p>The function isn't called when you write it — that's the part that trips people up. Writing the listener registers the callback. The browser calls it later, on each event.</p>
  `,

  /* 1.4 Mental model */
  'topics-8-23-1-4': `
    <p>You hand the browser a function. The browser holds onto it and calls it for you when the event fires.</p>
<pre class="language-javascript"><code class="language-javascript">button.addEventListener("click", handleClick);

// you           browser
//  ↓               ↓
// "here's a     "got it. I'll call it 
//  function"     when 'click' happens"

// later, on each click:
// browser → calls handleClick(event)</code></pre>
    <p>The function lives in the browser's listener list. Each click triggers a call. You're not running the function — the browser is, repeatedly, in response to the event.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-8-23-1-5': `
<pre class="language-javascript"><code class="language-javascript">const button = document.querySelector("#count");
let count = 0;

function bump() {
  count = count + 1;
  console.log("count is now:", count);
}

button.addEventListener("click", bump);

// JavaScript is thinking:
// Line 1: find the element with id "count", store it in button.
// Line 2: register count in global scope, value 0.
// Line 4: register bump. Don't run it yet.
// Line 9: see button.addEventListener("click", bump) → call addEventListener with two arguments: the string "click" and a reference to bump. The browser stores bump in its listener list. The script ends — but the listener stays registered.

// Later, the user clicks the button:
// browser fires a "click" event → looks up listeners for "click" on this button → finds bump → calls bump(event).
// inside bump: count = 0 + 1 → 1. Logs "count is now: 1".

// Next click:
// browser calls bump again. count = 1 + 1 → 2. Logs "count is now: 2".</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-8-23-2-0': `
    <p>If a handler runs once on page load and then never again, you almost certainly added <code>()</code> after the function name when registering it.</p>
<pre class="language-javascript"><code class="language-javascript">button.addEventListener("click", handleClick());
// wrong: handleClick() runs immediately on this line
// addEventListener gets the RETURN value (probably undefined)

button.addEventListener("click", handleClick);
// correct: pass the function reference; the browser calls it on each click</code></pre>

    <p>If a handler doesn't fire at all, check three things: the element exists when you register, the event name is spelled right ("click", not "clicked"), and the listener was added after the element exists in the DOM (or after <code>DOMContentLoaded</code>).</p>
  `,

  /* 2.1 The part that makes it click */
  'topics-8-23-2-1': `
    <p>Event listeners turn function references into <strong>delayed actions</strong>. You define a function. You hand it over. Later — could be milliseconds, could be hours — the browser runs it for you.</p>
    <p>This is why functions can be passed around as values: so other code (the browser, a library, a parent component) can hold onto them and call them at the right moment. Once you see this, the whole concept of callbacks clicks into place.</p>
  `,

  /* 2.2 Common confusions */
  'topics-8-23-2-2': `
    <p><strong>Confusion: pass the function, don't call it</strong></p>
<pre class="language-javascript"><code class="language-javascript">button.addEventListener("click", handleClick);     // pass — browser calls later
button.addEventListener("click", handleClick());    // call — runs now, useless
// always pass the function reference, no parens</code></pre>

    <p><strong>Confusion: passing arguments to a handler</strong></p>
<pre class="language-javascript"><code class="language-javascript">// Wrong — calls deleteItem immediately
button.addEventListener("click", deleteItem(123));

// Right — wrap in an arrow that calls deleteItem on click
button.addEventListener("click", () => deleteItem(123));</code></pre>

    <p><strong>Confusion: each addEventListener adds a new listener</strong></p>
<pre class="language-javascript"><code class="language-javascript">button.addEventListener("click", handleClick);
button.addEventListener("click", handleClick);
button.addEventListener("click", handleClick);
// click once → handleClick fires three times — each call added a new listener
// fix: only register once, or remove before re-adding</code></pre>

    <p><strong>Confusion: arrow vs named function for removal</strong></p>
<pre class="language-javascript"><code class="language-javascript">// CAN'T be removed — no reference to the same function
button.addEventListener("click", () => console.log("hi"));
button.removeEventListener("click", () => console.log("hi"));   // doesn't work — different function

// CAN be removed
function handleClick() { console.log("hi"); }
button.addEventListener("click", handleClick);
button.removeEventListener("click", handleClick);   // works</code></pre>

    <p><strong>Confusion: <code>event.preventDefault</code></strong></p>
<pre class="language-javascript"><code class="language-javascript">form.addEventListener("submit", (event) => {
  event.preventDefault();    // stops the browser's default form submission
  customSubmit();
});

link.addEventListener("click", (event) => {
  event.preventDefault();    // stops the browser from following the link
  customAction();
});
// preventDefault is how you say "don't do the browser's normal thing — I'm handling it"</code></pre>
  `,

  /* 2.3 Common mistakes */
  'topics-8-23-2-3': `
<pre class="language-javascript"><code class="language-javascript">button.addEventListener("click", handleClick());
// wrong: () makes it run on registration, not on click
// fix: button.addEventListener("click", handleClick);</code></pre>

<pre class="language-javascript"><code class="language-javascript">const button = document.querySelector("#save");
button.addEventListener("click", () => alert("saved"));
// might fail with: Cannot read properties of null
// the script ran before the button existed in the DOM
// fix: put the script at the bottom of the body, OR use DOMContentLoaded:
//   document.addEventListener("DOMContentLoaded", () => { ... });</code></pre>

<pre class="language-javascript"><code class="language-javascript">form.addEventListener("submit", () => {
  console.log("submitted");
});
// the page reloads after submitting — your handler ran, but the browser also did its default submit
// fix: take event as a parameter and call event.preventDefault();</code></pre>

<pre class="language-javascript"><code class="language-javascript">button.addEventListener("Click", handleClick);
// wrong: event names are case-sensitive, "Click" isn't a real event
// fix: "click" (lowercase)</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Inside a loop, accidentally registering many listeners
buttons.forEach(btn => {
  btn.addEventListener("click", () => alert("hi"));
  btn.addEventListener("click", () => alert("hi"));
});
// each button now fires alert twice
// fix: register each listener once</code></pre>

<pre class="language-javascript"><code class="language-javascript">button.addEventListener("click", () => {
  doSomething();
});
button.removeEventListener("click", () => {
  doSomething();
});
// removeEventListener does nothing — the two arrow functions are different
// fix: store the handler in a variable first
//   const handler = () => doSomething();
//   button.addEventListener("click", handler);
//   button.removeEventListener("click", handler);</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-8-23-3-0': `
<pre class="language-javascript"><code class="language-javascript">// Click handler with an arrow function
button.addEventListener("click", () => {
  console.log("clicked");
});

// Click handler with a named function (easier to debug, removable)
function handleClick() {
  console.log("clicked");
}
button.addEventListener("click", handleClick);

// Reading event info
button.addEventListener("click", (event) => {
  console.log("clicked at:", event.clientX, event.clientY);
});

// Reading input value as the user types
input.addEventListener("input", (event) => {
  console.log("typed:", event.target.value);
});

// Preventing default behavior on a form
form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("would submit, but stopped the page reload");
});

// Removing a listener later
function once() {
  console.log("ran once");
  button.removeEventListener("click", once);
}
button.addEventListener("click", once);</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-8-23-3-1': `
    <p><strong>Example: counter button</strong></p>
<pre class="language-javascript"><code class="language-javascript">let count = 0;
const counterBtn = document.querySelector("#counter");
const counterDisplay = document.querySelector("#counter-value");

counterBtn.addEventListener("click", () => {
  count = count + 1;
  counterDisplay.textContent = count;
});
// each click increments the count and updates the display</code></pre>

    <p><strong>Example: form submission</strong></p>
<pre class="language-javascript"><code class="language-javascript">const loginForm = document.querySelector("#login");

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();        // stop the page reload
  const email = event.target.email.value;
  const password = event.target.password.value;
  await login({ email, password });
});</code></pre>

    <p><strong>Example: keyboard shortcut</strong></p>
<pre class="language-javascript"><code class="language-javascript">document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
  if (event.key === "/" && event.ctrlKey) {
    focusSearch();
  }
});</code></pre>

    <p><strong>Example: live search</strong></p>
<pre class="language-javascript"><code class="language-javascript">const searchInput = document.querySelector("#search");

searchInput.addEventListener("input", (event) => {
  const query = event.target.value.toLowerCase();
  const matches = products.filter(p => p.name.toLowerCase().includes(query));
  renderResults(matches);
});
// every keystroke filters the product list and re-renders</code></pre>

    <p><strong>Example: same handler, multiple elements</strong></p>
<pre class="language-javascript"><code class="language-javascript">function closeModal() {
  modal.classList.remove("open");
}

closeBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeModal();
});
// one named function reused across three different triggers</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-8-23-3-2': `
    <ul>
      <li><strong>Callbacks</strong> → handlers are callbacks the browser will run</li>
      <li><strong>Function references</strong> → you pass the function without calling it</li>
      <li><strong>Event object</strong> → the browser passes event details as an argument</li>
      <li><strong>preventDefault()</strong> → stops the browser's default behavior</li>
      <li><strong>removeEventListener</strong> → unregisters a listener (needs the same reference)</li>
      <li><strong>DOM events</strong> → click, input, submit, keydown, load, etc.</li>
      <li><strong>event.target</strong> → the element the event happened on</li>
      <li><strong>Event delegation</strong> → listening on a parent for events on its children</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-8-23-3-3': `
    <ul>
      <li>Callback functions</li>
      <li>Event object</li>
      <li><code>event.preventDefault()</code></li>
      <li><code>event.target</code></li>
      <li>Common DOM events (click, input, submit, keydown)</li>
      <li>Event delegation</li>
      <li>Removing event listeners</li>
      <li>DOMContentLoaded</li>
    </ul>
  `,


  /* ========================================================= 
   Sub-lesson: 3.9.25 Functions → callback functions
 =======================================================*/

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-8-24-0-0': `
    <p>A callback is a function passed as an argument to another function, to be called later. The receiving function decides when to call it — after a delay, after a fetch finishes, on every item in a list, when an event fires.</p>
    <p>You're not calling the callback yourself. You're handing it over and saying "call this when it's time."</p>
  `,

  /* 0.1 Syntax */
  'topics-8-24-0-1': `
<pre class="language-javascript"><code class="language-javascript">function announce() {
  console.log("3 seconds passed!");
}

setTimeout(announce, 3000);
// announce is the callback — setTimeout will call it after 3000 milliseconds
// the script keeps running in the meantime</code></pre>
    <p><code>setTimeout</code> doesn't run <code>announce</code> when this line executes. It registers it. Three seconds later, the browser calls <code>announce</code> on its own.</p>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-8-24-0-2': `
<pre class="language-javascript"><code class="language-javascript">function processItem(name) {
  console.log("processing:", name);
}

const items = ["apple", "banana", "cherry"];
items.forEach(processItem);

// prints:
//   processing: apple
//   processing: banana
//   processing: cherry

// processItem            → the callback function (defined separately)
// items.forEach(...)     → method that takes a callback and calls it once per item
// processItem (no parens) → reference passed in, NOT called now
// forEach calls processItem(item) for each item in the array</code></pre>
    <p>You define <code>processItem</code> once. <code>forEach</code> calls it three times — once per item — passing each value as the argument. You never call <code>processItem</code> directly; <code>forEach</code> does it for you.</p>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-8-24-0-3': `
    <p>Pass the function as a <strong>reference</strong>, not a call:</p>
<pre class="language-javascript"><code class="language-javascript">setTimeout(showAlert, 1000);     // correct — pass the function, runs after 1s
setTimeout(showAlert(), 1000);   // wrong — calls showAlert NOW, passes its return value</code></pre>

    <p>The receiving function decides when (and how often) to call the callback:</p>
<pre class="language-javascript"><code class="language-javascript">// setTimeout calls it once, after a delay
setTimeout(handler, 1000);

// setInterval calls it repeatedly, every interval
setInterval(handler, 1000);

// addEventListener calls it on every event
button.addEventListener("click", handler);

// forEach calls it once per array item
[1, 2, 3].forEach(handler);</code></pre>

    <p>Callbacks can be named functions, expressions, or arrow functions:</p>
<pre class="language-javascript"><code class="language-javascript">// Named function
function logIt(value) { console.log(value); }
[1, 2, 3].forEach(logIt);

// Inline function expression
[1, 2, 3].forEach(function(value) {
  console.log(value);
});

// Arrow function (most common in modern code)
[1, 2, 3].forEach((value) => console.log(value));</code></pre>

    <p>The receiving function passes arguments to your callback — what they are depends on who's calling:</p>
<pre class="language-javascript"><code class="language-javascript">// forEach passes (item, index, array)
[10, 20, 30].forEach((item, index) => {
  console.log(index, item);
});
// prints:
//   0 10
//   1 20
//   2 30

// addEventListener passes the event object
button.addEventListener("click", (event) => {
  console.log("clicked at:", event.clientX);
});

// fetch().then passes the response
fetch("/api").then((response) => {
  console.log(response.status);
});</code></pre>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-8-24-1-0': `
    <p>Some work has to happen <em>later</em> — when a button is clicked, when data finishes loading, when a timer fires, when each item in a list is processed. The script can't sit and wait for those things; it needs a way to say "here's what to do when it happens."</p>
    <p>Callbacks solve this. You define the response, hand it over, and the surrounding system runs it at the right moment. Your code keeps moving in the meantime.</p>
  `,

  /* 1.1 Why use it */
  'topics-8-24-1-1': `
    <p>Use a callback whenever another function or system needs to call your code at the right moment — events, timers, async operations, list processing.</p>
<pre class="language-javascript"><code class="language-javascript">// "When the button is clicked, run this"
button.addEventListener("click", () => {
  saveDocument();
});

// "After 2 seconds, run this"
setTimeout(() => {
  hideNotification();
}, 2000);

// "For each product, run this"
products.forEach((product) => {
  console.log(product.name);
});

// "Once the data loads, run this"
fetch("/api/users").then((response) => {
  console.log("loaded");
});</code></pre>
    <p>Callbacks are how JavaScript stays responsive. The script doesn't block waiting for the click, the timer, the fetch, or the loop iteration — it hands over the next-step function and moves on.</p>
  `,

  /* 1.2 Where you use it */
  'topics-8-24-1-2': `
    <p>Callbacks are everywhere a function gets passed to another function.</p>
<pre class="language-javascript"><code class="language-javascript">// Array methods
[1, 2, 3].map(n => n * 2);
[1, 2, 3].filter(n => n > 1);
[1, 2, 3].reduce((sum, n) => sum + n, 0);
[1, 2, 3].forEach(n => console.log(n));

// Timers
setTimeout(() => console.log("later"), 1000);
setInterval(() => console.log("tick"), 1000);

// Events
button.addEventListener("click", () => console.log("clicked"));

// Promises
fetch("/api").then(r => r.json()).then(data => console.log(data));

// Sorting with custom logic
[3, 1, 2].sort((a, b) => a - b);

// Custom helpers
function withLogging(fn, label) {
  return function(...args) {
    console.log(label, "called with", args);
    return fn(...args);
  };
}</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-8-24-1-3': `
    <p>A callback is a function you give to another function with the instruction "call me back when you're ready." You don't run it yourself. You hand it over and walk away.</p>
    <p>The receiving function — <code>setTimeout</code>, <code>addEventListener</code>, <code>forEach</code>, <code>fetch</code> — knows when the right moment is. It calls the callback for you, sometimes once, sometimes many times, sometimes seconds later, sometimes immediately.</p>
    <p>The whole point: you write what should happen <em>when</em> something occurs, but you don't have to manage the timing yourself. The system that knows when it happens does the calling.</p>
  `,

  /* 1.4 Mental model */
  'topics-8-24-1-4': `
    <p>You hand a function to another function. That other function decides when to call it.</p>
<pre class="language-javascript"><code class="language-javascript">// you                                     who calls it
// ↓                                              ↓
setTimeout(myCallback, 1000);                // setTimeout — once, after 1s
button.addEventListener("click", myCallback); // browser — on every click
[1, 2, 3].forEach(myCallback);                // forEach — once per item
fetch("/api").then(myCallback);               // fetch — when the data arrives</code></pre>
    <p>The function isn't special. It's a value being handed to another function so it can be called at the right time. That's the whole pattern.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-8-24-1-5': `
<pre class="language-javascript"><code class="language-javascript">function shout(value) {
  console.log(value.toUpperCase());
}

["hello", "world"].forEach(shout);
// prints:
//   HELLO
//   WORLD

// JavaScript is thinking:
// Line 1: register shout. Don't run it yet.
// Line 5: see ["hello", "world"].forEach(shout) → call forEach on the array, pass shout (no parens) as the callback.
// forEach loops internally:
//   call 1: shout("hello") → "hello".toUpperCase() → "HELLO" → log "HELLO".
//   call 2: shout("world") → "world".toUpperCase() → "WORLD" → log "WORLD".
// forEach finishes, returns undefined. The script continues on line 6.</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-8-24-2-0': `
    <p>If a callback runs once on registration instead of when it should — same bug as event listeners. You added <code>()</code> after the function name.</p>
<pre class="language-javascript"><code class="language-javascript">setTimeout(saveData(), 1000);
// wrong: saveData() runs immediately, setTimeout gets undefined
// fix: setTimeout(saveData, 1000);

[1, 2, 3].forEach(processItem());
// wrong: processItem() runs once, forEach gets undefined as the callback
// fix: [1, 2, 3].forEach(processItem);</code></pre>

    <p>If a callback expects arguments but doesn't receive them, check what the receiving function actually passes — different functions pass different things:</p>
<pre class="language-javascript"><code class="language-javascript">// forEach passes (item, index, array)
[10, 20].forEach((value) => console.log(value));   // value, value
[10, 20].forEach((value, i) => console.log(i, value));  // includes index

// setTimeout passes nothing
setTimeout((event) => console.log(event), 1000);
// event is undefined — setTimeout doesn't pass an event</code></pre>
  `,

  /* 2.1 The part that makes it click */
  'topics-8-24-2-1': `
    <p>A callback is just a function being treated as a value. You hand it over instead of running it. The receiving code calls it at the right moment.</p>
    <p>This is the whole reason functions can be passed around. Once you see this — function as value, called by someone else, at a time of their choosing — events, timers, array methods, and promises all become variations of the same idea.</p>
  `,

  /* 2.2 Common confusions */
  'topics-8-24-2-2': `
    <p><strong>Confusion: pass the function, don't call it</strong></p>
<pre class="language-javascript"><code class="language-javascript">setTimeout(handleTimer, 1000);     // correct — function reference
setTimeout(handleTimer(), 1000);   // wrong — runs immediately</code></pre>

    <p><strong>Confusion: passing arguments to the callback</strong></p>
<pre class="language-javascript"><code class="language-javascript">// Wrong — calls deleteItem immediately, passes its return value
setTimeout(deleteItem(123), 1000);

// Right — wrap in an arrow that calls deleteItem when the timer fires
setTimeout(() => deleteItem(123), 1000);</code></pre>

    <p><strong>Confusion: callbacks vs regular function calls</strong></p>
<pre class="language-javascript"><code class="language-javascript">// Regular call — you call the function, the function returns a value
const total = add(2, 3);

// Callback — you hand a function to someone else, they call it later
setTimeout(notifyDone, 1000);
// you don't get notifyDone's return value — setTimeout calls it for you

// Both involve functions, but the timing is completely different</code></pre>

    <p><strong>Confusion: arrow vs named callback</strong></p>
<pre class="language-javascript"><code class="language-javascript">// Both work — same effect
[1, 2, 3].forEach(function(n) { console.log(n); });
[1, 2, 3].forEach((n) => console.log(n));

// Naming helps when the callback is reused or needs to be removed
function logIt(n) { console.log(n); }
[1, 2, 3].forEach(logIt);
[4, 5, 6].forEach(logIt);
// the same function used in two places</code></pre>

    <p><strong>Confusion: the callback's parameters come from the caller</strong></p>
<pre class="language-javascript"><code class="language-javascript">// forEach decides what to pass to your callback
[10, 20, 30].forEach((item, index) => {
  // forEach passes the item, then the index, then the whole array
});

// addEventListener passes the event object
button.addEventListener("click", (event) => {
  // event was passed by the browser, not by you
});
// you don't pick the parameter names randomly — they catch what the caller hands over</code></pre>
  `,

  /* 2.3 Common mistakes */
  'topics-8-24-2-3': `
<pre class="language-javascript"><code class="language-javascript">setTimeout(showMessage(), 1000);
// wrong: showMessage() runs immediately
// fix: setTimeout(showMessage, 1000);</code></pre>

<pre class="language-javascript"><code class="language-javascript">[1, 2, 3].map(double());
// wrong: double() runs once, map gets undefined as the callback
// fix: [1, 2, 3].map(double);</code></pre>

<pre class="language-javascript"><code class="language-javascript">button.addEventListener("click", () => {
  console.log("clicked");
});
button.removeEventListener("click", () => {
  console.log("clicked");
});
// remove does nothing — the two arrows are different functions
// fix: store the handler in a variable first</code></pre>

<pre class="language-javascript"><code class="language-javascript">setTimeout(deleteUser(userId), 5000);
// wrong: deleteUser runs immediately, the user is gone before the timer
// fix: setTimeout(() => deleteUser(userId), 5000);</code></pre>

<pre class="language-javascript"><code class="language-javascript">["a", "b"].forEach(item => {
  setTimeout(() => console.log(item), 1000);
  return item.toUpperCase();
});
// the return value is ignored — forEach doesn't use it
// fix: if you want the transformed array, use map instead of forEach</code></pre>

<pre class="language-javascript"><code class="language-javascript">function withDelay(callback) {
  setTimeout(callback(), 1000);   // wrong — calls immediately
}
// fix: setTimeout(callback, 1000); — pass the reference</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-8-24-3-0': `
<pre class="language-javascript"><code class="language-javascript">// Callback to a timer
function notify() {
  console.log("done!");
}
setTimeout(notify, 1000);
// after 1 second, prints: done!

// Callback to forEach
function showItem(item) {
  console.log("item:", item);
}
["a", "b", "c"].forEach(showItem);
// prints:
//   item: a
//   item: b
//   item: c

// Callback to map (callback's return value is collected)
const doubled = [1, 2, 3].map((n) => n * 2);
console.log(doubled);
// prints: [2, 4, 6]

// Callback to filter
const evens = [1, 2, 3, 4].filter((n) => n % 2 === 0);
console.log(evens);
// prints: [2, 4]

// Callback to reduce
const total = [10, 20, 30].reduce((sum, n) => sum + n, 0);
console.log(total);
// prints: 60

// Callback to event listener
button.addEventListener("click", () => console.log("clicked"));</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-8-24-3-1': `
    <p><strong>Example: rendering a list with map</strong></p>
<pre class="language-javascript"><code class="language-javascript">const products = [
  { name: "Hat", price: 20 },
  { name: "Shirt", price: 30 },
];

const html = products.map((product) => {
  return "<div>" + product.name + " — $" + product.price + "</div>";
}).join("");

document.body.innerHTML = html;
// the callback runs once per product, returning HTML for each one
// map collects the results into a new array</code></pre>

    <p><strong>Example: filtering search results</strong></p>
<pre class="language-javascript"><code class="language-javascript">function matchesQuery(product) {
  return product.name.toLowerCase().includes(query.toLowerCase());
}

const results = products.filter(matchesQuery);
console.log(results);
// filter calls matchesQuery once per product, keeps the ones that return true</code></pre>

    <p><strong>Example: chained promise callbacks</strong></p>
<pre class="language-javascript"><code class="language-javascript">fetch("/api/users")
  .then((response) => response.json())
  .then((users) => {
    console.log("got users:", users.length);
    return users.filter(u => u.active);
  })
  .then((activeUsers) => {
    renderUserList(activeUsers);
  });
// each .then takes a callback that runs when the previous step finishes</code></pre>

    <p><strong>Example: defining a custom helper that takes a callback</strong></p>
<pre class="language-javascript"><code class="language-javascript">function debounce(fn, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

const debouncedSearch = debounce((query) => {
  console.log("searching for:", query);
}, 300);

input.addEventListener("input", (e) => debouncedSearch(e.target.value));
// debounce takes a callback and returns a version that only fires after the user stops typing</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-8-24-3-2': `
    <ul>
      <li><strong>Function references</strong> → callbacks are references passed without parens</li>
      <li><strong>Higher-order functions</strong> → functions that take callbacks as arguments</li>
      <li><strong>Event listeners</strong> → handlers are callbacks the browser calls on events</li>
      <li><strong>Timers</strong> → <code>setTimeout</code> and <code>setInterval</code> use callbacks</li>
      <li><strong>Array methods</strong> → <code>map</code>, <code>filter</code>, <code>reduce</code>, <code>forEach</code></li>
      <li><strong>Promises</strong> → <code>.then()</code> takes callbacks for when the promise resolves</li>
      <li><strong>Asynchronous code</strong> → callbacks let work continue while waiting</li>
      <li><strong>Closures</strong> → callbacks often capture variables from where they were defined</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-8-24-3-3': `
    <ul>
      <li>Higher-order functions</li>
      <li>Function references</li>
      <li>Event listeners</li>
      <li>Array methods (<code>map</code>, <code>filter</code>, <code>reduce</code>)</li>
      <li>Promises and <code>.then()</code></li>
      <li><code>setTimeout</code> and <code>setInterval</code></li>
      <li>Asynchronous JavaScript</li>
      <li>Callback hell (nested callbacks)</li>
    </ul>
  `,


  /* ========================================================= 
   Sub-lesson: 3.9.26 Functions → higher-order functions
 =======================================================*/

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-8-25-0-0': `
    <p>A higher-order function is a function that takes another function as an argument, returns a function, or both. It's a function that <em>works with</em> other functions instead of just plain values.</p>
    <p>You've already used many of them: <code>setTimeout</code>, <code>addEventListener</code>, <code>map</code>, <code>filter</code>, <code>forEach</code>. They're "higher-order" because they operate at one level above regular functions — they treat functions themselves as the data they work on.</p>
  `,

  /* 0.1 Syntax */
  'topics-8-25-0-1': `
<pre class="language-javascript"><code class="language-javascript">function repeat(times, action) {
  for (let i = 0; i < times; i++) {
    action(i);
  }
}

repeat(3, (i) => console.log("step:", i));
// prints:
//   step: 0
//   step: 1
//   step: 2</code></pre>
    <p><code>repeat</code> is a higher-order function because it takes another function (<code>action</code>) as an argument. It calls that function however many times needed, passing the current step.</p>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-8-25-0-2': `
<pre class="language-javascript"><code class="language-javascript">function forEachItem(list, doSomething) {
  for (const item of list) {
    doSomething(item);
  }
}

forEachItem(["a", "b", "c"], (letter) => {
  console.log("got:", letter);
});

// prints:
//   got: a
//   got: b
//   got: c

// forEachItem            → the higher-order function (takes a function as input)
// list                   → first parameter (data)
// doSomething            → second parameter — a FUNCTION
// doSomething(item)      → calls the passed-in function on each item
// (letter) => { ... }    → the function being handed in as an argument</code></pre>
    <p>The point: <code>forEachItem</code> doesn't decide what to do with each letter. It just loops, and lets the caller pass in the action.</p>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-8-25-0-3': `
    <p>Two basic shapes — taking a function, returning a function, or both:</p>
<pre class="language-javascript"><code class="language-javascript">// Takes a function as input
function runTwice(action) {
  action();
  action();
}
runTwice(() => console.log("hi"));
// prints:
//   hi
//   hi

// Returns a function
function makeGreeter(greeting) {
  return function(name) {
    return greeting + ", " + name;
  };
}
const sayHi = makeGreeter("Hi");
sayHi("Os");
// returns: "Hi, Os"</code></pre>

    <p>The function being passed in is called wherever it makes sense — sometimes once, sometimes many times:</p>
<pre class="language-javascript"><code class="language-javascript">// Once
setTimeout(showAlert, 1000);

// Once per item in a list
[1, 2, 3].forEach(showItem);

// Once per event
button.addEventListener("click", handleClick);

// Many times in a custom loop
function repeat(n, fn) {
  for (let i = 0; i < n; i++) fn(i);
}
repeat(5, (i) => console.log(i));</code></pre>

    <p>Functions that return functions are called <strong>function factories</strong>:</p>
<pre class="language-javascript"><code class="language-javascript">function multiplyBy(factor) {
  return function(n) {
    return n * factor;
  };
}

const double = multiplyBy(2);
const triple = multiplyBy(3);

console.log(double(5));
console.log(triple(5));
// prints:
//   10
//   15
// each returned function "remembers" its own factor — that's a closure</code></pre>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-8-25-1-0': `
    <p>Without higher-order functions, every loop, every event handler, every transform would have to be written from scratch. With them, you can write the looping logic once and let the caller decide what to do at each step.</p>
    <p>It's the difference between writing "for each product, print its name" five different times for five different lists, vs. writing one general "for each item, do this thing" function and reusing it everywhere.</p>
  `,

  /* 1.1 Why use it */
  'topics-8-25-1-1': `
    <p>Use higher-order functions when you want to <strong>separate the work from the action</strong> — the looping/timing/event-handling stays general, and the specific behavior is handed in by the caller.</p>
<pre class="language-javascript"><code class="language-javascript">// Without higher-order — duplicated loop logic
function logAllNames(products) {
  for (const p of products) console.log(p.name);
}
function logAllPrices(products) {
  for (const p of products) console.log(p.price);
}
function logAllStock(products) {
  for (const p of products) console.log(p.stock);
}

// With higher-order — one general function, three behaviors
products.forEach((p) => console.log(p.name));
products.forEach((p) => console.log(p.price));
products.forEach((p) => console.log(p.stock));</code></pre>
    <p>The general looping is built once (in <code>forEach</code>). What's done at each step is up to the caller — that's the callback.</p>
  `,

  /* 1.2 Where you use it */
  'topics-8-25-1-2': `
    <p>Higher-order functions are the foundation of most modern JavaScript code. Most array methods, every event listener, every promise chain, every timer is one.</p>
<pre class="language-javascript"><code class="language-javascript">// Built-in higher-order functions you already use:

[1, 2, 3].map((n) => n * 2);                // map
[1, 2, 3].filter((n) => n > 1);              // filter
[1, 2, 3].reduce((sum, n) => sum + n, 0);    // reduce
[1, 2, 3].forEach((n) => console.log(n));    // forEach

setTimeout(() => console.log("later"), 1000);
button.addEventListener("click", handleClick);
fetch("/api").then((response) => response.json());

// Common pattern: writing your own
function withLogging(fn, label) {
  return function(...args) {
    console.log(label, "called with", args);
    return fn(...args);
  };
}

const loggedAdd = withLogging((a, b) => a + b, "add");
loggedAdd(2, 3);
// prints: "add called with [2, 3]"
// returns: 5</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-8-25-1-3': `
    <p>A higher-order function is a function that handles the boring repetitive part — looping, timing, event-watching — and lets you slot in the specific thing you want done.</p>
    <p>Think of it like a vending machine. The machine handles taking your money, dispensing the item, and returning change. You just press the button to say <em>which</em> snack you want. The machine doesn't care what's inside — it just delivers what you picked.</p>
    <p><code>forEach</code> handles the looping. You hand it the function that says what to do with each item. Same idea — general process plus your specific action.</p>
  `,

  /* 1.4 Mental model */
  'topics-8-25-1-4': `
    <p>Functions are values. Higher-order functions are values that <em>work with</em> other values that happen to be functions.</p>
<pre class="language-javascript"><code class="language-javascript">// Regular function — works with values
function double(n) {
  return n * 2;
}
double(5);   // 10

// Higher-order function — works with a function (also a value!)
function applyTwice(fn, value) {
  return fn(fn(value));
}
applyTwice(double, 5);
// double(double(5)) → double(10) → 20</code></pre>
    <p>Once you see functions as values, higher-order functions are just functions that accept those values. Nothing magical — same parameter mechanism, just for functions instead of numbers or strings.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-8-25-1-5': `
<pre class="language-javascript"><code class="language-javascript">function applyTo(value, transform) {
  return transform(value);
}

const result = applyTo(7, (n) => n * 3);
console.log(result);
// prints: 21

// JavaScript is thinking:
// Line 1: register applyTo. Don't run the body yet.
// Line 5: see applyTo(7, (n) => n * 3) → call applyTo. Local scope: value = 7, transform = the arrow function.
// Line 2: return transform(value) → call transform with 7 → arrow runs: 7 * 3 = 21. Return 21 from applyTo.
// Line 5: store 21 in result.
// Line 6: log result → 21.</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-8-25-2-0': `
    <p>Same warning as callbacks: pass the function reference, don't call it.</p>
<pre class="language-javascript"><code class="language-javascript">repeat(3, doStuff());     // wrong — runs doStuff once, repeat gets undefined
repeat(3, doStuff);        // correct — passes the function reference</code></pre>

    <p>If a higher-order function isn't doing what you expect, log inside the callback to see if it's even being called and what arguments it's receiving:</p>
<pre class="language-javascript"><code class="language-javascript">[1, 2, 3].map((n, i) => {
  console.log("called with:", n, "index:", i);
  return n * 2;
});
// prints:
//   called with: 1 index: 0
//   called with: 2 index: 1
//   called with: 3 index: 2
// confirms map is calling the callback once per item</code></pre>
  `,

  /* 2.1 The part that makes it click */
  'topics-8-25-2-1': `
    <p>A higher-order function isn't a special kind of function. It's just a regular function whose job involves another function. The "higher" doesn't mean fancier — it means "operating on functions instead of values."</p>
    <p>Once you see this, the whole idea collapses into something simple: functions are values, and you can pass values into other functions. That's it.</p>
  `,

  /* 2.2 Common confusions */
  'topics-8-25-2-2': `
    <p><strong>Confusion: higher-order function vs callback</strong></p>
<pre class="language-javascript"><code class="language-javascript">[1, 2, 3].forEach((n) => console.log(n));

// forEach           → the higher-order function (it takes a function as input)
// (n) => console.log(n) → the callback (the function being passed in)

// They're two sides of the same coin:
// - higher-order is the receiver
// - callback is what gets received</code></pre>

    <p><strong>Confusion: when does the inner function actually run?</strong></p>
<pre class="language-javascript"><code class="language-javascript">function makeGreeter(greeting) {
  console.log("making greeter");
  return function(name) {
    console.log("greeting now");
    return greeting + ", " + name;
  };
}

const hi = makeGreeter("Hi");
// prints: "making greeter" — outer function ran

hi("Os");
// prints: "greeting now" — inner function runs only when YOU call it
// returns: "Hi, Os"</code></pre>

    <p><strong>Confusion: "function as input" vs "function as output"</strong></p>
<pre class="language-javascript"><code class="language-javascript">// Takes a function as input
function timer(callback) {
  setTimeout(callback, 1000);
}

// Returns a function as output
function makeAdder(x) {
  return function(y) { return x + y; };
}

// Does both
function withLogging(fn) {
  return function(...args) {
    console.log("calling", fn);
    return fn(...args);
  };
}</code></pre>

    <p><strong>Confusion: built-ins are higher-order too</strong></p>
<pre class="language-javascript"><code class="language-javascript">setTimeout(showAlert, 1000);          // setTimeout is higher-order
button.addEventListener("click", fn);  // addEventListener is higher-order
fetch("/api").then(handleData);         // .then is higher-order
[1, 2].map(double);                     // map is higher-order

// you've been using higher-order functions all along</code></pre>
  `,

  /* 2.3 Common mistakes */
  'topics-8-25-2-3': `
<pre class="language-javascript"><code class="language-javascript">function doTimes(n, fn) {
  for (let i = 0; i < n; i++) fn();
}
doTimes(3, sayHi());
// wrong: sayHi() runs immediately, doTimes gets undefined as fn
// fix: doTimes(3, sayHi);</code></pre>

<pre class="language-javascript"><code class="language-javascript">[1, 2, 3].map((n) => {
  n * 2;     // forgot to return
});
// returns: [undefined, undefined, undefined]
// fix: return n * 2; — or use implicit return: (n) => n * 2</code></pre>

<pre class="language-javascript"><code class="language-javascript">function once(fn) {
  let called = false;
  return function() {
    if (called) return;
    called = true;
    fn();
  };
}
const handler = once(saveData);
handler();
handler();
handler();
// saveData runs once, then nothing — that's the point of "once"
// works because closure remembers "called" between calls</code></pre>

<pre class="language-javascript"><code class="language-javascript">function logger(label) {
  return console.log(label);
}
const log = logger("INFO");
log("hello");
// TypeError — log is undefined (console.log returned undefined)
// fix: return a function, not the result of calling console.log
//   function logger(label) {
//     return function(message) { console.log(label, message); };
//   }</code></pre>

<pre class="language-javascript"><code class="language-javascript">function withDelay(callback, delay) {
  setTimeout(callback(), delay);
}
// wrong: callback() runs immediately
// fix: setTimeout(callback, delay);</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-8-25-3-0': `
<pre class="language-javascript"><code class="language-javascript">// Higher-order: takes a function
function repeat(n, fn) {
  for (let i = 0; i < n; i++) fn(i);
}
repeat(3, (i) => console.log(i));
// prints:
//   0
//   1
//   2

// Higher-order: returns a function
function multiplyBy(factor) {
  return function(n) {
    return n * factor;
  };
}
const double = multiplyBy(2);
console.log(double(7));
// prints: 14

// Higher-order: built-ins
[1, 2, 3].map((n) => n * 10);
// returns: [10, 20, 30]

[1, 2, 3].filter((n) => n > 1);
// returns: [2, 3]

[1, 2, 3].reduce((sum, n) => sum + n, 0);
// returns: 6

// Higher-order helper: adds logging to any function
function logged(label, fn) {
  return function(...args) {
    console.log(label + ":", args);
    return fn(...args);
  };
}
const loggedAdd = logged("add", (a, b) => a + b);
loggedAdd(2, 3);
// prints: "add: [2, 3]"
// returns: 5</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-8-25-3-1': `
    <p><strong>Example: array methods are higher-order</strong></p>
<pre class="language-javascript"><code class="language-javascript">const products = [
  { name: "Hat",   price: 20, stock: 5 },
  { name: "Shirt", price: 30, stock: 0 },
  { name: "Shoes", price: 80, stock: 12 },
];

const inStock = products.filter((p) => p.stock > 0);
const names = inStock.map((p) => p.name);
const total = inStock.reduce((sum, p) => sum + p.price, 0);

console.log(names);
console.log(total);
// prints:
//   ["Hat", "Shoes"]
//   100
// each callback says what to do — filter/map/reduce handle the looping</code></pre>

    <p><strong>Example: factory creating handlers</strong></p>
<pre class="language-javascript"><code class="language-javascript">function makeRemoveHandler(itemId) {
  return function() {
    cart = cart.filter((item) => item.id !== itemId);
    renderCart();
  };
}

cart.forEach((item) => {
  const btn = document.querySelector("#remove-" + item.id);
  btn.addEventListener("click", makeRemoveHandler(item.id));
});
// each button gets its own handler that "remembers" the right itemId</code></pre>

    <p><strong>Example: sorting with custom logic</strong></p>
<pre class="language-javascript"><code class="language-javascript">const products = [
  { name: "Shoes", price: 80 },
  { name: "Hat", price: 20 },
  { name: "Shirt", price: 30 },
];

products.sort((a, b) => a.price - b.price);
console.log(products);
// sort is higher-order — it calls the callback to decide ordering
// the callback returns a number; sort uses it to compare pairs</code></pre>

    <p><strong>Example: building a debouncer</strong></p>
<pre class="language-javascript"><code class="language-javascript">function debounce(fn, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

const debouncedSearch = debounce((query) => {
  console.log("searching for:", query);
}, 300);

input.addEventListener("input", (e) => debouncedSearch(e.target.value));
// debounce takes a function and returns a wrapped version
// the wrapped version only fires after the user stops typing for 300ms</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-8-25-3-2': `
    <ul>
      <li><strong>Callbacks</strong> → the functions passed into higher-order functions</li>
      <li><strong>Function references</strong> → how you pass functions without calling them</li>
      <li><strong>Function factories</strong> → higher-order functions that return new functions</li>
      <li><strong>Closures</strong> → returned functions often "remember" outer variables</li>
      <li><strong>Array methods</strong> → <code>map</code>, <code>filter</code>, <code>reduce</code> are all higher-order</li>
      <li><strong>Event listeners</strong> → <code>addEventListener</code> is higher-order</li>
      <li><strong>Promises</strong> → <code>.then()</code> is higher-order</li>
      <li><strong>Composition</strong> → combining small functions into bigger ones</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-8-25-3-3': `
    <ul>
      <li>Callback functions</li>
      <li>Function factories</li>
      <li>Closures</li>
      <li>Array methods</li>
      <li>Function composition</li>
      <li>Currying (advanced)</li>
      <li><code>.bind()</code>, <code>.call()</code>, <code>.apply()</code> (advanced)</li>
      <li>Function references</li>
    </ul>
  `,


  /* ========================================================= 
   Sub-lesson: 3.9.27 Functions → function factories
 =======================================================*/

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-8-26-0-0': `
    <p>A function factory is a function whose job is to <strong>create and return another function</strong>. You call the factory once to get a custom-built function back, then use the returned function whenever you want.</p>
    <p>Each function the factory returns can "remember" the values that were used to create it — that's a closure in action.</p>
  `,

  /* 0.1 Syntax */
  'topics-8-26-0-1': `
<pre class="language-javascript"><code class="language-javascript">function makeMultiplier(factor) {
  return function(n) {
    return n * factor;
  };
}

const double = makeMultiplier(2);
const triple = makeMultiplier(3);

console.log(double(5));
console.log(triple(5));
// prints:
//   10
//   15</code></pre>
    <p><code>makeMultiplier</code> is the factory. Each call to it builds and returns a new function — one that multiplies by 2, another that multiplies by 3. Each returned function remembers its own <code>factor</code>.</p>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-8-26-0-2': `
<pre class="language-javascript"><code class="language-javascript">function makeGreeter(greeting) {
  return function(name) {
    return greeting + ", " + name + "!";
  };
}

const sayHi = makeGreeter("Hi");
const sayHello = makeGreeter("Hello");

console.log(sayHi("Os"));
console.log(sayHello("Sam"));
// prints:
//   Hi, Os!
//   Hello, Sam!

// makeGreeter            → the factory function
// (greeting)             → input that customizes the returned function
// return function(name)  → the inner function — the "product" being made
// greeting + ", " + name → uses the captured greeting and the new name
// sayHi, sayHello        → two separate functions, each remembering their own greeting</code></pre>
    <p>Each call to <code>makeGreeter</code> creates a brand-new function. Both inner functions have access to their own <code>greeting</code> value, frozen in time when the factory ran.</p>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-8-26-0-3': `
    <p>The returned function can be a function expression, an arrow, or even a named function:</p>
<pre class="language-javascript"><code class="language-javascript">// Function expression
function makeAdder(x) {
  return function(y) { return x + y; };
}

// Arrow (most common in modern code)
function makeAdder(x) {
  return (y) => x + y;
}

// Named (rare, but useful for stack traces)
function makeAdder(x) {
  return function adder(y) { return x + y; };
}

const add5 = makeAdder(5);
console.log(add5(3));
// prints: 8</code></pre>

    <p>Each call to the factory creates a fresh function with its own captured values:</p>
<pre class="language-javascript"><code class="language-javascript">function makeCounter() {
  let count = 0;
  return function() {
    count = count + 1;
    return count;
  };
}

const c1 = makeCounter();
const c2 = makeCounter();

console.log(c1());
console.log(c1());
console.log(c2());
// prints:
//   1
//   2
//   1
// c1 and c2 each have their own count — they don't share state</code></pre>

    <p>The captured values are private — there's no way to reach in and change them from outside:</p>
<pre class="language-javascript"><code class="language-javascript">function makeIdGenerator() {
  let id = 0;
  return function() {
    id = id + 1;
    return id;
  };
}

const nextId = makeIdGenerator();
nextId.id;        // undefined — you can't access "id" from outside
nextId();         // 1
nextId();         // 2
// the id variable is hidden inside the closure</code></pre>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-8-26-1-0': `
    <p>Sometimes you need many similar functions that differ only in some small setting — a multiplier with different factors, a logger with different prefixes, a validator with different rules. Writing each one by hand gets repetitive.</p>
    <p>A factory wraps the differences as parameters, so you can produce as many variations as you need from a single template. The factory builds them on demand, each one ready to use.</p>
  `,

  /* 1.1 Why use it */
  'topics-8-26-1-1': `
    <p>Use a factory when you find yourself writing similar functions over and over, or when you need to "lock in" a value for later use without passing it every single time.</p>
<pre class="language-javascript"><code class="language-javascript">// Without a factory — three near-identical functions
function logInfo(msg)    { console.log("[INFO]", msg); }
function logWarn(msg)    { console.log("[WARN]", msg); }
function logError(msg)   { console.log("[ERROR]", msg); }

// With a factory — one template, three results
function makeLogger(label) {
  return function(msg) {
    console.log("[" + label + "]", msg);
  };
}

const logInfo = makeLogger("INFO");
const logWarn = makeLogger("WARN");
const logError = makeLogger("ERROR");

logInfo("user logged in");
logError("server crashed");
// prints:
//   [INFO] user logged in
//   [ERROR] server crashed</code></pre>
    <p>One template, customized at the moment of creation. Easier to maintain — change the format in one place, all the loggers update.</p>
  `,

  /* 1.2 Where you use it */
  'topics-8-26-1-2': `
    <p>Factories are common when building reusable utilities, customized handlers, or self-contained counters and IDs.</p>
<pre class="language-javascript"><code class="language-javascript">// Custom validators
function makeMinLength(min) {
  return function(value) { return value.length >= min; };
}
const isLongPassword = makeMinLength(8);

// Counter with private state
function makeCounter(start = 0) {
  let count = start;
  return function() { return ++count; };
}
const nextOrderId = makeCounter(1000);

// Themed handlers
function makeShowToast(theme) {
  return function(message) {
    const toast = document.createElement("div");
    toast.className = "toast " + theme;
    toast.textContent = message;
    document.body.appendChild(toast);
  };
}
const showSuccess = makeShowToast("success");
const showError = makeShowToast("error");

// Configured fetchers
function makeApiClient(baseUrl) {
  return function(path) { return fetch(baseUrl + path); };
}
const fetchUsers = makeApiClient("https://api.example.com");</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-8-26-1-3': `
    <p>A factory is a function that builds tools. You hand it a setting; it hands you back a tool that's been pre-configured to use that setting. Each tool keeps its own settings forever — they're built right in.</p>
    <p>Imagine a workshop that makes custom stamps. You walk in and say "I want a stamp that says HI." The workshop builds it and gives it to you. Next person walks in and asks for HELLO — they get a different stamp. Both stamps work the same way; they just have different text baked in.</p>
    <p>That's a factory. You set up the variations once. The factory makes the actual functions on demand.</p>
  `,

  /* 1.4 Mental model */
  'topics-8-26-1-4': `
    <p>Calling the factory creates a new function. The new function "remembers" what was passed in.</p>
<pre class="language-javascript"><code class="language-javascript">function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

const add5 = makeAdder(5);
//          ↓
//    add5 is now a function that always adds 5
//    it has "5" frozen inside it

const add10 = makeAdder(10);
//          ↓
//    a different function that always adds 10
//    it has "10" frozen inside it

add5(3);    // 8
add10(3);   // 13
// each function has its own remembered value</code></pre>
    <p>The factory plus its captured value is what makes each returned function unique. The body is the same template; the value is different.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-8-26-1-5': `
<pre class="language-javascript"><code class="language-javascript">function makeMultiplier(factor) {
  return function(n) {
    return n * factor;
  };
}

const triple = makeMultiplier(3);
const result = triple(7);
console.log(result);
// prints: 21

// JavaScript is thinking:
// Line 1: register makeMultiplier. Don't run the body yet.
// Line 7: see makeMultiplier(3) → call it. Local scope: factor = 3.
// Line 2: return function(n) { ... } → create a new function value. The function remembers factor = 3 from its surroundings. Return it.
// Line 7: store the returned function in triple. The factory is done — but factor stays alive inside triple's closure.
// Line 8: see triple(7) → call triple. Local scope: n = 7. The closure still has factor = 3.
// Line 3: return 7 * 3 → 21. Return 21 from triple.
// Line 8: store 21 in result.
// Line 9: log result → 21.</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-8-26-2-0': `
    <p>If a factory returns the same value every time instead of a new function, you forgot the inner <code>function</code> or arrow:</p>
<pre class="language-javascript"><code class="language-javascript">function makeAdder(x) {
  return x + 5;             // wrong — returns a number
}
const add5 = makeAdder(5);
add5(3);
// TypeError — add5 is just 10, not a function
// fix: return function(y) { return x + y; };</code></pre>

    <p>If two functions made by the factory share state when they shouldn't, the factory is using a variable from <em>outside</em> instead of declaring it inside:</p>
<pre class="language-javascript"><code class="language-javascript">let count = 0;     // wrong: shared between all counters

function makeCounter() {
  return function() { return ++count; };
}

const a = makeCounter();
const b = makeCounter();
console.log(a());
console.log(b());
// prints:
//   1
//   2  — both share the same count!
// fix: declare count INSIDE makeCounter so each call gets its own</code></pre>
  `,

  /* 2.1 The part that makes it click */
  'topics-8-26-2-1': `
    <p>A factory uses two facts together:</p>
    <ul>
      <li>Functions are values — so a function can return another function.</li>
      <li>Inner functions remember their outer scope — so the returned function carries its captured values around.</li>
    </ul>
    <p>Combine those two ideas, and you get a factory: a function that produces customized functions, each one carrying its own private setup.</p>
  `,

  /* 2.2 Common confusions */
  'topics-8-26-2-2': `
    <p><strong>Confusion: when does the inner function run?</strong></p>
<pre class="language-javascript"><code class="language-javascript">function makeGreeter(greeting) {
  console.log("factory running");
  return function(name) {
    console.log("greeter running");
    return greeting + ", " + name;
  };
}

const hi = makeGreeter("Hi");
// prints: "factory running" — outer function ran when called

hi("Os");
// prints: "greeter running" — inner function runs when YOU call it
// returns: "Hi, Os"</code></pre>

    <p><strong>Confusion: each factory call creates a new function</strong></p>
<pre class="language-javascript"><code class="language-javascript">function makeCounter() {
  let count = 0;
  return function() { return ++count; };
}

const a = makeCounter();
const b = makeCounter();

// a and b are TWO DIFFERENT functions
// each one has its own private count

a();   // 1
a();   // 2
b();   // 1 — b has its own count, untouched by a
a();   // 3</code></pre>

    <p><strong>Confusion: a factory's locals are private</strong></p>
<pre class="language-javascript"><code class="language-javascript">function makeCounter() {
  let count = 0;
  return function() { return ++count; };
}

const counter = makeCounter();
counter();
counter();

console.log(counter.count);     // undefined — you can't reach inside
console.log(count);              // ReferenceError — count is hidden in the closure
// the only way to interact with count is through the returned function</code></pre>

    <p><strong>Confusion: factory vs class</strong></p>
<pre class="language-javascript"><code class="language-javascript">// Factory — produces a function
function makeCounter() {
  let count = 0;
  return function() { return ++count; };
}

// Class — produces an object with methods (different topic)
class Counter {
  constructor() { this.count = 0; }
  next() { return ++this.count; }
}

// Both create instances with private state, but a factory returns a function and a class returns an object</code></pre>
  `,

  /* 2.3 Common mistakes */
  'topics-8-26-2-3': `
<pre class="language-javascript"><code class="language-javascript">function makeAdder(x) {
  return x;       // returns a number, not a function
}
const add5 = makeAdder(5);
add5(3);
// TypeError: add5 is not a function
// fix: return function(y) { return x + y; };</code></pre>

<pre class="language-javascript"><code class="language-javascript">let count = 0;
function makeCounter() {
  return function() { return ++count; };
}
const a = makeCounter();
const b = makeCounter();
a(); a(); b();
console.log(count);
// prints: 3 — all counters share the same outer count
// fix: declare let count = 0 INSIDE makeCounter</code></pre>

<pre class="language-javascript"><code class="language-javascript">function makeGreeter(greeting) {
  return greeting + ", world";
}
const hi = makeGreeter("Hi");
console.log(hi);
// prints: "Hi, world" — string, not a function
// fix: return a function: return function(name) { return greeting + ", " + name; };</code></pre>

<pre class="language-javascript"><code class="language-javascript">const make = function() {
  return function() { return "hi"; };
};
const fn = make;
console.log(fn());
// prints: function — make wasn't called, fn is still the factory itself
// fix: const fn = make(); — call the factory to GET the inner function</code></pre>

<pre class="language-javascript"><code class="language-javascript">function makeAdder(x) {
  return (y) => x + y;
}
const add5 = makeAdder(5);
add5;
// nothing — referencing without calling
// fix: add5(3); — call the function the factory returned</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-8-26-3-0': `
<pre class="language-javascript"><code class="language-javascript">// Adder factory
function makeAdder(x) {
  return (y) => x + y;
}
const add5 = makeAdder(5);
console.log(add5(10));
// prints: 15

// Greeting factory
function makeGreeter(greeting) {
  return (name) => greeting + ", " + name;
}
const sayHi = makeGreeter("Hi");
console.log(sayHi("Os"));
// prints: "Hi, Os"

// Counter factory with private state
function makeCounter() {
  let count = 0;
  return () => ++count;
}
const next = makeCounter();
console.log(next());
console.log(next());
console.log(next());
// prints:
//   1
//   2
//   3

// Validator factory
function makeMinLength(min) {
  return (value) => value.length >= min;
}
const isLongEnough = makeMinLength(8);
console.log(isLongEnough("hi"));
console.log(isLongEnough("hello world"));
// prints: false, then true

// Two counters, independent state
function makeCounter() {
  let count = 0;
  return () => ++count;
}
const a = makeCounter();
const b = makeCounter();
a(); a(); a();
b();
console.log(a(), b());
// prints: 4 2 — each has its own count</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-8-26-3-1': `
    <p><strong>Example: themed loggers</strong></p>
<pre class="language-javascript"><code class="language-javascript">function makeLogger(level) {
  const styles = {
    info:  "color: blue",
    warn:  "color: orange",
    error: "color: red",
  };
  return function(message) {
    console.log("%c[" + level.toUpperCase() + "] " + message, styles[level]);
  };
}

const logInfo = makeLogger("info");
const logWarn = makeLogger("warn");
const logError = makeLogger("error");

logInfo("user logged in");
logError("server unreachable");
// each logger has its own pre-configured level and style</code></pre>

    <p><strong>Example: ID generator with private counter</strong></p>
<pre class="language-javascript"><code class="language-javascript">function makeIdGenerator(prefix) {
  let counter = 0;
  return function() {
    counter = counter + 1;
    return prefix + "-" + counter;
  };
}

const nextUserId = makeIdGenerator("user");
const nextOrderId = makeIdGenerator("order");

console.log(nextUserId());
console.log(nextUserId());
console.log(nextOrderId());
// prints:
//   user-1
//   user-2
//   order-1
// each generator has its own counter</code></pre>

    <p><strong>Example: API client with base URL</strong></p>
<pre class="language-javascript"><code class="language-javascript">function makeApiClient(baseUrl) {
  return {
    get: (path)        => fetch(baseUrl + path),
    post: (path, body) => fetch(baseUrl + path, { method: "POST", body: JSON.stringify(body) }),
  };
}

const api = makeApiClient("https://api.example.com");
api.get("/users");
api.post("/users", { name: "Os" });
// once configured, the base URL is baked in</code></pre>

    <p><strong>Example: handler factory inside a loop</strong></p>
<pre class="language-javascript"><code class="language-javascript">function makeRemoveHandler(itemId) {
  return function() {
    cart = cart.filter((item) => item.id !== itemId);
    renderCart();
  };
}

cart.forEach((item) => {
  const btn = document.querySelector("#remove-" + item.id);
  btn.addEventListener("click", makeRemoveHandler(item.id));
});
// each button gets its own handler that knows the right itemId — no shared state bug</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-8-26-3-2': `
    <ul>
      <li><strong>Closures</strong> → returned functions remember the factory's locals</li>
      <li><strong>Higher-order functions</strong> → factories are higher-order (return a function)</li>
      <li><strong>Private state</strong> → captured variables can't be reached from outside</li>
      <li><strong>Function references</strong> → the factory hands back a callable function value</li>
      <li><strong>Local variables</strong> → the factory's locals become the closure's private storage</li>
      <li><strong>Reusability</strong> → one template, many customized results</li>
      <li><strong>Currying</strong> → an advanced pattern related to factories</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-8-26-3-3': `
    <ul>
      <li>Closures</li>
      <li>Higher-order functions</li>
      <li>Encapsulation</li>
      <li>Module pattern</li>
      <li>Private state</li>
      <li>Currying (advanced)</li>
      <li>Classes</li>
      <li>The classic loop-and-closure bug</li>
    </ul>
  `,


  /* ========================================================= 
   Sub-lesson: 3.9.28 Functions → common mistakes
 =======================================================*/

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-8-27-0-0': `
    <p>This is a roundup of the bugs that catch almost everyone learning functions: forgetting to call, forgetting to return, getting confused about scope, and treating function references like function calls.</p>
    <p>None of these are obscure edge cases. They're the day-one through day-thirty mistakes that show up over and over until the patterns click.</p>
  `,

  /* 0.1 Syntax */
  'topics-8-27-0-1': `
<pre class="language-javascript"><code class="language-javascript">// The four mistake categories you'll see again and again:

// 1. Forgetting to call
function init() { console.log("starting"); }
init;
// nothing happens — the function was referenced but not called
// fix: init();

// 2. Forgetting to return
function double(n) { n * 2; }
const result = double(5);
// result is undefined — the math happened but nothing was sent back
// fix: return n * 2;

// 3. Scope confusion
function getData() { const data = [1, 2, 3]; }
getData();
console.log(data);
// ReferenceError — data is local to getData
// fix: return data; then catch it: const data = getData();

// 4. Calling vs referencing
button.addEventListener("click", handleClick());
// runs handleClick immediately, listener gets undefined
// fix: button.addEventListener("click", handleClick);</code></pre>
    <p>Every function bug you'll write in your first month is some flavor of one of these four.</p>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-8-27-0-2': `
<pre class="language-javascript"><code class="language-javascript">// One example with multiple mistakes overlapping:
function calculateTotal(price, tax) {
  const total = price + (price * tax);
}

const result = calculateTotal(50, 0.08);
console.log(result);
button.addEventListener("click", calculateTotal());

// prints: undefined
// the click handler runs ONCE on registration, then never again

// What's wrong, line by line:
// const total = price + ...   → calculation happens but goes nowhere
// no return                   → the function gives nothing back → result is undefined
// calculateTotal()            → in addEventListener, () runs it immediately
// addEventListener gets undefined as the handler → the click listener does nothing

// Fixed:
function calculateTotal(price, tax) {
  return price + (price * tax);    // ← return added
}

const result = calculateTotal(50, 0.08);
console.log(result);                                              // 54
button.addEventListener("click", () => calculateTotal(50, 0.08));  // wrap in arrow to call later</code></pre>
    <p>The fix patterns are short. Recognizing the bug is the harder skill — that's what this lesson trains.</p>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-8-27-0-3': `
    <p>Each mistake has a clear visual signature. Knowing what to look for is the fastest way to fix it.</p>

    <p><strong>1. The "I called my function but nothing happened" signature:</strong></p>
<pre class="language-javascript"><code class="language-javascript">init;          // missing ()
runApp;        // missing ()
showError;     // missing ()
// fix: add () to actually run them</code></pre>

    <p><strong>2. The "result is undefined" signature:</strong></p>
<pre class="language-javascript"><code class="language-javascript">function calc() {
  const x = 5;
  x * 2;            // result of math is thrown away
}
// the function body does work, but never says "return"
// fix: add return — return x * 2;</code></pre>

    <p><strong>3. The "ReferenceError: x is not defined" signature:</strong></p>
<pre class="language-javascript"><code class="language-javascript">function load() {
  const items = fetchItems();
}
load();
console.log(items);    // ReferenceError
// items is local — only exists inside load
// fix: return items, then capture: const items = load();</code></pre>

    <p><strong>4. The "click handler ran once and stopped" signature:</strong></p>
<pre class="language-javascript"><code class="language-javascript">button.addEventListener("click", handleClick());
setTimeout(showAlert(), 1000);
[1, 2, 3].forEach(processItem());
// each one calls the function NOW instead of passing it to be called later
// fix: drop the () — pass the reference</code></pre>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-8-27-1-0': `
    <p>JavaScript doesn't yell at you when you make most of these mistakes. <code>greet;</code> is valid syntax — it just doesn't do anything. <code>function calc() { x * 2; }</code> is valid — it just returns <code>undefined</code>. <code>addEventListener("click", handler())</code> runs without an error.</p>
    <p>That's what makes them tricky. There's no error message pointing to the line. The code "runs," and the bug is that the result is silently wrong. Recognizing these patterns by sight is the only way to catch them quickly.</p>
  `,

  /* 1.1 Why use it */
  'topics-8-27-1-1': `
    <p>Memorize the four mistake patterns. When something doesn't work as expected, run through them in order:</p>
<pre class="language-javascript"><code class="language-javascript">// 1. Did I actually call the function? (look for () after the name)
init();      // not init;

// 2. Does the function actually return its result?
function add(a, b) { return a + b; }     // not just a + b;

// 3. Am I trying to use a value outside the scope where it lives?
function get() { return 42; }            // return it OUT
const x = get();                          // catch it OUTSIDE

// 4. Am I passing a function or calling it?
btn.addEventListener("click", handleClick);    // pass — no ()
setTimeout(showAlert, 1000);                    // pass — no ()</code></pre>
    <p>This 4-question checklist solves the vast majority of "why isn't my function working?" moments.</p>
  `,

  /* 1.2 Where you use it */
  'topics-8-27-1-2': `
    <p>These mistakes show up everywhere functions are used — definitions, calls, callbacks, event listeners. The same patterns repeat across all of them.</p>
<pre class="language-javascript"><code class="language-javascript">// In a script that's supposed to run on load:
init;                              // missing () — script does nothing

// In a calculation:
function getTax(price) { price * 0.08; }
const tax = getTax(100);           // tax is undefined

// In an event listener:
button.addEventListener("click", save());

// In a setTimeout:
setTimeout(showWelcome(), 2000);

// Trying to access a function's locals:
function getCart() { const cart = []; }
getCart();
console.log(cart);                 // ReferenceError</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-8-27-1-3': `
    <p>Most function bugs come from confusing two things: "naming a function" vs "running a function," and "what's inside" vs "what comes back out."</p>
    <p>The name is just a label. <code>()</code> after the name is what actually runs the code. Without <code>()</code>, you're pointing at the function. With <code>()</code>, you're pressing its button.</p>
    <p>And the only way data leaves a function is through <code>return</code>. Variables you create inside the function are private. If you want them to live outside, you have to hand them out the front door.</p>
    <p>Once those two ideas are solid, most function mistakes look obvious instead of mysterious.</p>
  `,

  /* 1.4 Mental model */
  'topics-8-27-1-4': `
    <p>The four most common mistakes map to two big-picture confusions:</p>
<pre class="language-javascript"><code class="language-javascript">// Confusion #1: Naming vs Running
greet              // points at the function
greet()            // RUNS the function

// Without () — function exists but never runs
// With ()    — function runs

// Confusion #2: Inside vs Outside
function get() {
  const x = 5;          // x lives inside — invisible from outside
  return x;             // hand it OUT to whoever called
}

const result = get();    // catch the value on the outside

// Without return — value stays trapped inside
// With return    — value reaches the outside</code></pre>
    <p>Bug list:</p>
    <ul>
      <li>Forgot <code>()</code> → function never ran (Confusion #1)</li>
      <li>Forgot <code>return</code> → value never escaped (Confusion #2)</li>
      <li>Tried to read a local outside → value was never released (Confusion #2)</li>
      <li>Added <code>()</code> in a callback slot → function ran too early (Confusion #1)</li>
    </ul>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-8-27-1-5': `
<pre class="language-javascript"><code class="language-javascript">function calculate(price) {
  const tax = price * 0.08;
}

const total = calculate(100);
console.log(total);

button.addEventListener("click", calculate(100));

// What runs and what doesn't:
// Line 1: register calculate. Don't run the body yet.
// Line 5: see calculate(100) → call it. Local scope: price = 100. Inside: tax = 8. Function ends with no return → returns undefined. Store undefined in total.
// Line 6: log total → undefined. (Bug 1: missing return.)
// Line 8: see calculate(100) → call it again. Same thing: returns undefined. addEventListener gets undefined as the handler — registers nothing useful. (Bug 2: calling instead of passing.)
// Result: console shows undefined. Clicks do nothing. Both bugs silent.

// Fixed:
function calculate(price) {
  return price * 0.08;             // bug 1 fixed: added return
}
const total = calculate(100);       // total = 8
button.addEventListener("click", () => calculate(100));   // bug 2 fixed: arrow wraps the call</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-8-27-2-0': `
    <p>When something function-related is wrong, the fastest debugging path is a 4-question checklist:</p>
<pre class="language-javascript"><code class="language-javascript">// 1. Did the function actually run?
function init() {
  console.log("INIT RAN");      // log at the top to confirm
  // ...
}
init();
// if "INIT RAN" doesn't print, you forgot () somewhere

// 2. Did it receive what you expected?
function process(data) {
  console.log("got:", data);    // log the parameters first
  // ...
}

// 3. Did it return what you expected?
function calc(n) {
  const result = n * 2;
  console.log("returning:", result);   // log right before return
  return result;
}

// 4. Did the caller actually use the return value?
const r = calc(5);
console.log("got back:", r);    // log on the caller side too</code></pre>
    <p>If <code>console.log("INIT RAN")</code> doesn't appear, the function isn't being called. If the parameter is <code>undefined</code>, the call site forgot to pass an argument. If the return value is <code>undefined</code>, the function forgot to <code>return</code>. Each step reveals which bug it is.</p>
  `,

  /* 2.1 The part that makes it click */
  'topics-8-27-2-1': `
    <p>Almost every function bug is a tiny version of one mismatch: <strong>you wrote one thing, but JavaScript sees another.</strong></p>
    <p>You wrote <code>greet</code>, but JavaScript sees "value, no call." You wrote <code>x * 2</code>, but JavaScript sees "expression, then thrown away." You wrote <code>handler()</code>, but JavaScript runs it instantly.</p>
    <p>Once the mismatches stop being surprising — once you read code the way JavaScript reads it — the bugs start screaming at you from the page.</p>
  `,

  /* 2.2 Common confusions */
  'topics-8-27-2-2': `
    <p><strong>Confusion: "I called the function!" — but did you?</strong></p>
<pre class="language-javascript"><code class="language-javascript">init;            // looks like a call, but isn't — no parens
init ();         // works (extra space is fine)
init();          // standard

// the parens are mandatory, not decorative</code></pre>

    <p><strong>Confusion: <code>console.log</code> isn't <code>return</code></strong></p>
<pre class="language-javascript"><code class="language-javascript">function double(n) {
  console.log(n * 2);     // shows in console
}
const result = double(5);
// prints: 10
console.log(result);
// prints: undefined
// console.log doesn't hand the value back — only return does</code></pre>

    <p><strong>Confusion: "the function ran, why didn't the value escape?"</strong></p>
<pre class="language-javascript"><code class="language-javascript">function getData() {
  const data = [1, 2, 3];
  // data exists here
}
getData();
console.log(data);
// ReferenceError — data was a local variable, gone when getData ended
// fix: return data; then capture it — const data = getData();</code></pre>

    <p><strong>Confusion: callbacks aren't the same as direct calls</strong></p>
<pre class="language-javascript"><code class="language-javascript">// Direct call — runs now, you get the result
const x = handleClick();

// Callback — pass the function, browser calls it later
button.addEventListener("click", handleClick);
button.addEventListener("click", handleClick());   // wrong — runs now</code></pre>

    <p><strong>Confusion: not every "function" returns a useful value</strong></p>
<pre class="language-javascript"><code class="language-javascript">const list = [1, 2, 3];
const result = list.forEach((n) => n * 2);
console.log(result);
// prints: undefined — forEach never returns the array
// fix: use map if you want a transformed array</code></pre>
  `,

  /* 2.3 Common mistakes */
  'topics-8-27-2-3': `
<pre class="language-javascript"><code class="language-javascript">function init() { console.log("starting"); }
init;
// missing () — function never runs
// fix: init();</code></pre>

<pre class="language-javascript"><code class="language-javascript">function add(a, b) {
  a + b;
}
const sum = add(2, 3);
// sum is undefined — no return
// fix: return a + b;</code></pre>

<pre class="language-javascript"><code class="language-javascript">function getUser() {
  const user = { name: "Os" };
}
getUser();
console.log(user);
// ReferenceError — user is local
// fix: return user; then catch it</code></pre>

<pre class="language-javascript"><code class="language-javascript">button.addEventListener("click", handleClick());
setTimeout(showAlert(), 1000);
// both call the function immediately
// fix: drop the () — pass the reference</code></pre>

<pre class="language-javascript"><code class="language-javascript">function double(n) {
  console.log(n * 2);
}
const result = double(5);
console.log(result);
// prints: 10, then undefined
// console.log shows but doesn't return
// fix: return n * 2;</code></pre>

<pre class="language-javascript"><code class="language-javascript">function counter() {
  let count = 0;
  count = count + 1;
  return count;
}
counter();
counter();
counter();
// each call returns 1 — count is recreated on every call
// fix: move count outside the function (or use a closure)</code></pre>

<pre class="language-javascript"><code class="language-javascript">function makeAdder(x) {
  return x + 5;
}
const add5 = makeAdder(5);
add5(3);
// TypeError — add5 is the number 10, not a function
// fix: return function(y) { return x + y; };</code></pre>

<pre class="language-javascript"><code class="language-javascript">function process(data) {
  return;
  data.map(...);
}
// return on its own ends the function — the second line is dead code
// fix: keep the value on the same line as return</code></pre>

<pre class="language-javascript"><code class="language-javascript">function setup() {
  config = { theme: "dark" };
}
// missing const/let — accidentally creates a global
// fix: const config = { theme: "dark" };</code></pre>

<pre class="language-javascript"><code class="language-javascript">function welcome(name) {
  console.log("hi, " + name);
}
welcome();
// prints: "hi, undefined"
// no argument was passed
// fix: welcome("Os"); — or set a default: function welcome(name = "friend")</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-8-27-3-0': `
<pre class="language-javascript"><code class="language-javascript">// MISTAKE: missing call
function init() { console.log("ready"); }
init;
// nothing happens
// FIX:
init();

// MISTAKE: missing return
function double(n) { n * 2; }
console.log(double(5));
// prints: undefined
// FIX:
function double(n) { return n * 2; }
console.log(double(5));   // 10

// MISTAKE: scope leak attempt
function get() { const value = 42; }
get();
console.log(value);
// ReferenceError
// FIX:
function get() { return 42; }
const value = get();
console.log(value);   // 42

// MISTAKE: calling in a callback slot
setTimeout(showAlert(), 1000);
// runs immediately
// FIX:
setTimeout(showAlert, 1000);

// MISTAKE: log instead of return
function tax(price) { console.log(price * 0.08); }
const t = tax(100);
console.log(t);
// prints: 8, undefined
// FIX:
function tax(price) { return price * 0.08; }
const t = tax(100);
console.log(t);   // 8</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-8-27-3-1': `
    <p><strong>Example: form submit handler runs once and never again</strong></p>
<pre class="language-javascript"><code class="language-javascript">// Buggy
form.addEventListener("submit", handleSubmit());
// handleSubmit runs immediately on page load, then submits never trigger anything

// Fixed
form.addEventListener("submit", handleSubmit);
// browser calls handleSubmit on each submit</code></pre>

    <p><strong>Example: validation always returns true</strong></p>
<pre class="language-javascript"><code class="language-javascript">// Buggy
function isValid(value) {
  value.length > 3;
}
if (isValid("hi")) submitForm();
// "hi" is short, but the if always passes — isValid returns undefined, which is falsy
// wait — that's actually false. Let's try the real common bug:

function isValid(value) {
  if (value.length > 3) return true;
}
if (isValid("hi")) {
  // never runs — but neither does the else
} else {
  console.log("too short");
}
// works for the first branch only — when length <= 3, isValid returns undefined
// fix: explicitly return false in the else case
//   if (value.length > 3) return true;
//   return false;
// or just: return value.length > 3;</code></pre>

    <p><strong>Example: cart total comes back undefined</strong></p>
<pre class="language-javascript"><code class="language-javascript">// Buggy
function getCartTotal(items) {
  items.reduce((sum, i) => sum + i.price, 0);
}
const total = getCartTotal([{ price: 10 }]);
console.log(total);
// prints: undefined

// Fixed
function getCartTotal(items) {
  return items.reduce((sum, i) => sum + i.price, 0);
}
const total = getCartTotal([{ price: 10 }]);
console.log(total);
// prints: 10</code></pre>

    <p><strong>Example: trying to use a fetched value outside the function</strong></p>
<pre class="language-javascript"><code class="language-javascript">// Buggy
async function loadUser() {
  const user = await fetchUser();
}
await loadUser();
console.log(user);
// ReferenceError — user is local

// Fixed
async function loadUser() {
  const user = await fetchUser();
  return user;
}
const user = await loadUser();
console.log(user);   // works</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-8-27-3-2': `
    <ul>
      <li><strong>Calling a function</strong> → the <code>()</code> is what runs it</li>
      <li><strong>Referencing without calling</strong> → the name alone is a value</li>
      <li><strong>Return values</strong> → how a function hands a value back to the caller</li>
      <li><strong>Local variables</strong> → only visible inside the function</li>
      <li><strong>Scope</strong> → controls what's visible from where</li>
      <li><strong>Callbacks</strong> → passed as references, not calls</li>
      <li><strong>Default parameters</strong> → catches missing arguments</li>
      <li><strong>Debugging functions</strong> → the next lesson — strategies for diagnosing these</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-8-27-3-3': `
    <ul>
      <li>Calling vs referencing functions</li>
      <li>Return values</li>
      <li>Scope and local variables</li>
      <li>Callbacks</li>
      <li>Event listeners</li>
      <li>Default parameters</li>
      <li>Debugging functions</li>
      <li><code>undefined</code> vs missing</li>
    </ul>
  `,


  /* ========================================================= 
   Sub-lesson: 3.9.29 Functions → debugging functions
 =======================================================*/

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-8-28-0-0': `
    <p>Debugging a function is the systematic process of figuring out why it isn't doing what you expected. The four big questions: <strong>did it run? what did it receive? what did it return? did anyone catch what came back?</strong></p>
    <p><code>console.log</code> is your main tool. You sprinkle it inside the function and around the call site, and the output tells you which step is broken.</p>
  `,

  /* 0.1 Syntax */
  'topics-8-28-0-1': `
<pre class="language-javascript"><code class="language-javascript">function calculate(price, tax) {
  console.log("1. ran with:", price, tax);     // did it run? what came in?
  const total = price + (price * tax);
  console.log("2. computed:", total);          // what did the math give?
  return total;
}

const result = calculate(50, 0.08);
console.log("3. caller got:", result);         // what did the caller see?

// prints:
//   1. ran with: 50 0.08
//   2. computed: 54
//   3. caller got: 54</code></pre>
    <p>Three logs, three confirmations. If any one of them shows the wrong thing — or doesn't print at all — you know exactly where the bug is.</p>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-8-28-0-2': `
<pre class="language-javascript"><code class="language-javascript">function processOrder(order) {
  console.log("[in]", order);                            // log 1: confirm it ran + see input
  
  if (!order) {
    console.log("[guard] no order, exiting early");      // log 2: trace branches
    return;
  }
  
  const total = order.items.reduce((sum, i) => sum + i.price, 0);
  console.log("[mid] total computed:", total);            // log 3: intermediate value
  
  const discounted = total * (1 - (order.discount || 0));
  console.log("[mid] after discount:", discounted);       // log 4: another intermediate
  
  console.log("[out] returning:", discounted);            // log 5: confirm what's leaving
  return discounted;
}

const result = processOrder({ items: [{ price: 50 }], discount: 0.1 });
console.log("[caller] got back:", result);                // log 6: caller's view

// prints:
//   [in] { items: [...], discount: 0.1 }
//   [mid] total computed: 50
//   [mid] after discount: 45
//   [out] returning: 45
//   [caller] got back: 45

// [in], [mid], [out], [caller] → labels make logs easy to read in the console
// each log answers ONE question: did this step happen, with what value?</code></pre>
    <p>Labels matter. When the console fills up with values, "[in]" and "[out]" and "[caller]" tell you which step you're looking at without scrolling back to read which log statement printed it.</p>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-8-28-0-3': `
    <p>Log objects with their label so it's clear what's being printed:</p>
<pre class="language-javascript"><code class="language-javascript">console.log("user:", user);              // good — labeled
console.log(user);                         // bad — no label, hard to find later

// you can log multiple values in one call:
console.log("user:", user, "active:", isActive);</code></pre>

    <p>Use <code>JSON.stringify</code> to see hidden whitespace or tricky characters in strings:</p>
<pre class="language-javascript"><code class="language-javascript">function login(email) {
  console.log("got:", JSON.stringify(email));
  // shows the exact string with quotes — reveals leading/trailing spaces
}

login("  test@example.com  ");
// prints: got: "  test@example.com  "</code></pre>

    <p>Use <code>typeof</code> when you suspect the wrong type:</p>
<pre class="language-javascript"><code class="language-javascript">function add(a, b) {
  console.log("a:", a, typeof a, "b:", b, typeof b);
  return a + b;
}

add(2, "3");
// prints: a: 2 'number' b: 3 'string'
// returns: "23" — the type mismatch tells you why + concatenated instead of adding</code></pre>

    <p>Step through with the browser debugger when logs aren't enough:</p>
<pre class="language-javascript"><code class="language-javascript">function complicated(data) {
  debugger;        // browser pauses here when DevTools is open
  // ... step through line by line, see all variables
}</code></pre>

    <p>Other useful console methods:</p>
<pre class="language-javascript"><code class="language-javascript">console.log("normal");       // standard
console.warn("warning");      // yellow, stands out
console.error("error");       // red, includes a stack trace
console.table([{ a: 1 }, { a: 2 }]);     // pretty-prints arrays of objects
console.trace();              // shows how you got to this line
console.group("section");     // start a grouped section
console.groupEnd();           // close it</code></pre>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-8-28-1-0': `
    <p>Functions can fail silently. <code>greet;</code> doesn't error. A function with no <code>return</code> doesn't error. A callback called too early doesn't error. The code "runs" — but the result is wrong, and JavaScript won't tell you why.</p>
    <p>Debugging is how you make the silent failures visible. Logs at the right places turn an invisible bug into a clear chain of evidence: this ran, that didn't, this value was wrong, that's where it broke.</p>
  `,

  /* 1.1 Why use it */
  'topics-8-28-1-1': `
    <p>Debug systematically. The 4-question checklist solves nearly every function bug:</p>
<pre class="language-javascript"><code class="language-javascript">function double(n) {
  console.log("Q1: ran?", "yes");        // 1. Did it run?
  console.log("Q2: input:", n);          // 2. What did it receive?
  const result = n * 2;
  console.log("Q3: returning:", result); // 3. What is it returning?
  return result;
}

const x = double(5);
console.log("Q4: caller:", x);           // 4. What did the caller get?</code></pre>
    <p>If "Q1" never prints, the function isn't being called. If Q2 shows <code>undefined</code>, the call site forgot to pass an argument. If Q3 is wrong, the math is broken. If Q3 looks right but Q4 doesn't, the caller isn't catching the value.</p>
    <p>Each log answers exactly one question. The first log that doesn't match your expectation is where the bug lives.</p>
  `,

  /* 1.2 Where you use it */
  'topics-8-28-1-2': `
    <p>Logs go in three predictable places: top of the body, before each branch, and right before <code>return</code>.</p>
<pre class="language-javascript"><code class="language-javascript">function checkout(cart, user) {
  console.log("[checkout] start", { cart, user });           // top of body — see inputs

  if (cart.length === 0) {
    console.log("[checkout] empty cart, bail");              // before early return
    return null;
  }

  const total = calculateTotal(cart);
  console.log("[checkout] total:", total);                    // after intermediate step

  if (!user.isVerified) {
    console.log("[checkout] user not verified");             // another branch
    return { ok: false, reason: "verify" };
  }

  console.log("[checkout] returning success");                // before final return
  return { ok: true, total };
}</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-8-28-1-3': `
    <p>Debugging a function is detective work. The function should do A, then B, then C — instead it gives you a wrong result. Your job is to figure out which step is lying.</p>
    <p>Logs are like asking each step "did you do your job?" out loud. The first one that gives a weird answer is your suspect. From there, you zoom in: what did <em>that</em> step actually receive? What did it produce? Why was it wrong?</p>
    <p>You don't need fancy tools. <code>console.log</code> at three or four spots is enough to crack 90% of function bugs. The remaining 10% is where the browser debugger or stepping through with breakpoints comes in.</p>
  `,

  /* 1.4 Mental model */
  'topics-8-28-1-4': `
    <p>Picture the function as a pipe. Data flows in, gets transformed, flows out. Logs are little windows you cut into the pipe to see what's flowing past at each point.</p>
<pre class="language-javascript"><code class="language-javascript">// caller → (window 1) → step 1 → (window 2) → step 2 → (window 3) → caller again

function process(data) {
  console.log("[1] got:", data);          // window 1
  const cleaned = clean(data);
  console.log("[2] cleaned:", cleaned);   // window 2
  const result = transform(cleaned);
  console.log("[3] returning:", result);  // window 3
  return result;
}

const out = process(input);
console.log("[4] caller got:", out);       // window 4</code></pre>
    <p>The window where the data first looks wrong is where the bug is — not at the windows downstream.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-8-28-1-5': `
<pre class="language-javascript"><code class="language-javascript">function calculateTax(price, rate) {
  console.log("[in] price:", price, "rate:", rate);
  const tax = price * rate;
  console.log("[out] returning:", tax);
  return tax;
}

const result = calculateTax(100, 0.08);
console.log("[caller] got:", result);

// prints:
//   [in] price: 100 rate: 0.08
//   [out] returning: 8
//   [caller] got: 8

// JavaScript is thinking:
// Line 1: register calculateTax. Don't run the body yet.
// Line 8: see calculateTax(100, 0.08) → call it. Local scope: price = 100, rate = 0.08.
// Line 2: log "[in] price: 100 rate: 0.08" — confirms it ran with the right inputs.
// Line 3: tax = 100 * 0.08 → 8.
// Line 4: log "[out] returning: 8" — confirms what's about to leave.
// Line 5: return 8 → exit. Local scope destroyed.
// Line 8: store 8 in result.
// Line 9: log "[caller] got: 8" — confirms the caller received it.

// All four checkpoints align — no bug. If [out] showed 8 but [caller] showed undefined, the bug would be at the call site (probably missing the assignment).</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-8-28-2-0': `
    <p>The bug is at the <strong>first checkpoint that prints something unexpected</strong>. Don't over-investigate downstream effects — they're symptoms, not the cause.</p>
<pre class="language-javascript"><code class="language-javascript">function getUser(id) {
  console.log("[in] id:", id);
  const user = users.find(u => u.id === id);
  console.log("[out] returning:", user);
  return user;
}

const u = getUser(7);
console.log("[caller] got:", u);

// scenario: prints "[in] id: 7", "[out] returning: undefined", "[caller] got: undefined"
//   → "[out] returning: undefined" is the FIRST suspicious log — the bug is in find
//   → maybe users array doesn't contain id 7, or .id is actually .userId, or the array is empty
// don't go fix the caller — the data was already wrong before it got returned</code></pre>

    <p>If <strong>no logs print at all</strong>, the function isn't being called. Usually that's a missing <code>()</code>, or the wrong element selector returning <code>null</code> on the listener line.</p>
  `,

  /* 2.1 The part that makes it click */
  'topics-8-28-2-1': `
    <p>Bugs aren't mysterious — they're just steps where reality doesn't match expectation. Logs show you reality. The first place reality and expectation diverge is the bug.</p>
    <p>Don't try to debug by reading code and guessing. Add logs, run the code, look at the output, find the first wrong value. The act of inserting logs forces you to break the code into checkable steps — and that alone usually reveals the issue before you even read the output.</p>
  `,

  /* 2.2 Common confusions */
  'topics-8-28-2-2': `
    <p><strong>Confusion: silent vs noisy bugs</strong></p>
<pre class="language-javascript"><code class="language-javascript">// Noisy — JS throws an error, easy to track down
greet(undefined);   // function tries undefined.toUpperCase() → TypeError with line number

// Silent — JS runs without complaint, but the result is wrong
function double(n) { n * 2; }    // forgot return → returns undefined silently
// the only sign is that the result downstream is wrong</code></pre>
    <p>Silent bugs are the harder kind. Logs make them noisy.</p>

    <p><strong>Confusion: where to start when nothing's working</strong></p>
<pre class="language-javascript"><code class="language-javascript">// Step 1 — does the function run AT ALL?
function init() {
  console.log("INIT FIRED");
  // ...
}
init;        // wrong — never runs
init();      // right — "INIT FIRED" appears

// If "INIT FIRED" doesn't appear, you have a calling problem, not a logic problem.
// Don't debug logic until you've confirmed the function is even running.</code></pre>

    <p><strong>Confusion: <code>console.log</code> shows objects "live"</strong></p>
<pre class="language-javascript"><code class="language-javascript">const user = { name: "Os" };
console.log(user);
user.name = "Sam";
// when you expand the object in DevTools, you might see "Sam" — even though you logged BEFORE the change
// browsers show the current state, not the snapshot
// fix: console.log(JSON.stringify(user)) — captures the value at log time</code></pre>

    <p><strong>Confusion: removing logs after fixing</strong></p>
<pre class="language-javascript"><code class="language-javascript">function calculate(price, tax) {
  console.log("debug:", price, tax);    // helpful while debugging
  return price * tax;
}
// once the bug is fixed, remove the log — leaving them in clutters production output
// some teams use a logger that can be disabled in production</code></pre>

    <p><strong>Confusion: the bug isn't where the symptom appears</strong></p>
<pre class="language-javascript"><code class="language-javascript">// "My total is undefined!"
const total = getCartTotal(cart);
// the bug isn't on this line — it's INSIDE getCartTotal (probably forgot a return)
// log inside the function to find where the value gets lost</code></pre>
  `,

  /* 2.3 Common mistakes */
  'topics-8-28-2-3': `
<pre class="language-javascript"><code class="language-javascript">// Logging without labels — confusing in a busy console
console.log(user);
console.log(price);
console.log(total);
// hard to tell which line printed which value
// fix: add labels — console.log("user:", user); console.log("price:", price);</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Trying to read the function's body to find a bug
// rather than running with logs to see actual behavior
// fix: trust the output, not your guess about what the code does</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Adding too many logs everywhere instead of stepping methodically
// makes the console unreadable
// fix: start with input, output, and caller — add more only if needed</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Logging the result of a function call you also need
console.log(getCartTotal(cart));
// later realizing you can't access the value because you only printed it
// fix: store first, then log
//   const total = getCartTotal(cart);
//   console.log("total:", total);
//   // total is still usable below</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Removing all logs before fully confirming the fix
// the bug might still be there in another path
// fix: leave logs in until you've tested the fix from multiple angles</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Forgetting to check the network tab when fetch() is involved
function loadUser() {
  return fetch("/api/user").then(r => r.json());
}
// if loadUser returns nothing, the request might have failed
// console alone won't show that — open the network tab to see the actual response</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-8-28-3-0': `
<pre class="language-javascript"><code class="language-javascript">// 4-question template
function calc(price) {
  console.log("Q1+Q2: ran with:", price);
  const result = price * 1.08;
  console.log("Q3: returning:", result);
  return result;
}
const total = calc(100);
console.log("Q4: caller got:", total);
// prints:
//   Q1+Q2: ran with: 100
//   Q3: returning: 108
//   Q4: caller got: 108

// Logging types when math is suspicious
function add(a, b) {
  console.log("a:", a, typeof a, "b:", b, typeof b);
  return a + b;
}
add(2, "3");
// prints: a: 2 'number' b: 3 'string'
// returns: "23" — type mismatch revealed

// Logging hidden whitespace in strings
function check(value) {
  console.log("value:", JSON.stringify(value));
}
check("  hello  ");
// prints: value: "  hello  " — quotes show the spaces

// Tracing branches
function classify(n) {
  console.log("input:", n);
  if (n < 0) { console.log("negative"); return "neg"; }
  if (n === 0) { console.log("zero"); return "zero"; }
  console.log("positive"); return "pos";
}
classify(5);
// prints: input: 5 / positive

// Confirming an event handler runs
button.addEventListener("click", () => {
  console.log("CLICK FIRED");
  // ...
});
// if "CLICK FIRED" doesn't appear, the listener isn't attached</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-8-28-3-1': `
    <p><strong>Example: tracing a form submission flow</strong></p>
<pre class="language-javascript"><code class="language-javascript">form.addEventListener("submit", async (event) => {
  console.log("[submit] handler fired");
  event.preventDefault();

  const data = collectFormData();
  console.log("[submit] collected:", data);

  if (!isValid(data)) {
    console.log("[submit] validation failed");
    return;
  }

  console.log("[submit] sending to server...");
  const response = await sendToServer(data);
  console.log("[submit] server replied:", response);

  console.log("[submit] showing success");
  showSuccess();
});

// running the form, you can read down the console:
// each label tells you which step happened. The first missing log is the bug.</code></pre>

    <p><strong>Example: locating a typo in a property name</strong></p>
<pre class="language-javascript"><code class="language-javascript">function showProfile(user) {
  console.log("user object:", user);
  nameEl.textContent = user.Name;       // prints "undefined"
}

showProfile({ name: "Os" });
// console reveals user has "name" (lowercase), but the code reads "Name" (capital)
// without the log, you'd just see "undefined" on the page and not know why</code></pre>

    <p><strong>Example: confirming a callback is actually being called</strong></p>
<pre class="language-javascript"><code class="language-javascript">products.forEach((p) => {
  console.log("processing:", p.name);
  renderProduct(p);
});

// if "processing: ..." prints 0 times, products is empty
// if it prints 3 times but only 1 thing appears on the page, the bug is in renderProduct
// the log narrows down which side has the problem</code></pre>

    <p><strong>Example: type debugging with an event</strong></p>
<pre class="language-javascript"><code class="language-javascript">priceInput.addEventListener("input", (event) => {
  const raw = event.target.value;
  console.log("raw:", raw, typeof raw);     // always 'string' from form inputs
  const price = Number(raw);
  console.log("converted:", price, typeof price);
  console.log("with tax:", price * 1.08);
});

// reveals the classic form input bug: the value comes in as a string
// "5" * 1.08 still works (coercion), but "5" + 1.08 would give "51.08"</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-8-28-3-2': `
    <ul>
      <li><strong>Common mistakes</strong> → the previous lesson — the bugs you're likely debugging</li>
      <li><strong><code>console.log</code></strong> → the main debugging tool</li>
      <li><strong><code>typeof</code></strong> → checks what kind of value you have</li>
      <li><strong><code>JSON.stringify</code></strong> → reveals hidden characters and snapshots state</li>
      <li><strong>Browser DevTools</strong> → console, network tab, debugger, breakpoints</li>
      <li><strong><code>debugger</code> statement</strong> → pauses execution so you can step through</li>
      <li><strong>Stack traces</strong> → show the chain of function calls that led to an error</li>
      <li><strong>Return values</strong> → checking what came back is half the debugging</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-8-28-3-3': `
    <ul>
      <li>Common mistakes</li>
      <li><code>console.log</code>, <code>console.warn</code>, <code>console.error</code></li>
      <li><code>console.table</code>, <code>console.group</code>, <code>console.trace</code></li>
      <li><code>typeof</code></li>
      <li>The <code>debugger</code> statement</li>
      <li>Browser DevTools</li>
      <li>Stack traces</li>
      <li>Network tab (for fetch debugging)</li>
    </ul>
  `,
});