
Object.assign(CONTENT,{

/* ==========================================================
     SECTION 5:  5.4–5.5 (Window / Browser, Storage)
========================================================== */
/* ========================================================= 
   Sub-lesson: 5.5.1 Storage → localStorage.setItem()
 =======================================================*/

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'methods-4-0-0-0': `
    <p><strong><code>localStorage.setItem(key, value)</code></strong> is a built-in browser method that saves a value under a name (the key) in the browser's persistent storage. Think of it as writing a note to a labeled folder — the label is the key, the note is the value. Later, any JavaScript on the same site can read that value back by asking for the same key.</p>
    <p>The values are always saved as strings. Even if you pass a number or a boolean, the browser converts it to text before storing. If you want to save an object or an array, you convert it to a string first with <code>JSON.stringify()</code>, and convert it back with <code>JSON.parse()</code> when you read it. And the data persists — it survives page reloads, tab closes, browser restarts, even computer shutdowns.</p>
  `,

  /* 0.1 Syntax */
  'methods-4-0-0-1': `
<pre class="language-javascript"><code class="language-javascript">// Basic form — two arguments: the key, then the value
localStorage.setItem("username", "Alice");

// Value is always stored as a string, even if you pass another type
localStorage.setItem("count", 5);       // saved as the string "5"
localStorage.setItem("isDark", true);   // saved as the string "true"

// Storing an object — use JSON.stringify first
localStorage.setItem("user", JSON.stringify({ id: 42, name: "Alice" }));

// Storing an array — same idea
localStorage.setItem("tags", JSON.stringify(["admin", "beta", "vip"]));

// Overwrites any existing value under the same key
localStorage.setItem("theme", "dark");
localStorage.setItem("theme", "light");   // "dark" is gone, replaced by "light"</code></pre>

    <p>Shape: <code>localStorage.setItem(key, value)</code>. Both arguments are converted to strings if they aren't already.</p>
  `,

  /* 0.2 Anatomy / Breakdown */
  'methods-4-0-0-2': `
<pre class="language-javascript"><code class="language-javascript">localStorage.setItem("theme", "dark");
// │           │       │        │
// │           │       │        └── the VALUE — always coerced to a string before saving
// │           │       └── the KEY — always coerced to a string
// │           └── the method name
// └── the localStorage object — the browser's built-in per-origin storage

// what the browser does under the hood:
// 1. converts the key to a string (via String()).
// 2. converts the value to a string (via String()).
// 3. writes { "theme": "dark" } into the origin's storage bucket on disk.
// 4. the write is committed synchronously — when setItem returns, the data is saved.
// 5. next time you call localStorage.getItem("theme"), the browser reads it back from disk.

// the storage bucket itself is a big key-value map that persists across:
// - page reloads
// - tab closes and reopens
// - browser restarts
// - computer shutdowns
//
// it's only cleared when:
// - your code calls removeItem(key) or clear()
// - the user clears site data / cookies
// - the origin is deleted from browser storage settings
// - the storage quota is exceeded and the browser evicts old data (rare)</code></pre>
  `,

  /* 0.3 Syntax Details That Matter */
  'methods-4-0-0-3': `
    <p><strong>The value is ALWAYS a string.</strong> Non-strings get coerced. This is the biggest gotcha with localStorage — numbers come back as strings, booleans come back as the strings "true" or "false":</p>
<pre class="language-javascript"><code class="language-javascript">localStorage.setItem("count", 5);
localStorage.getItem("count");   // "5" — string, not number
localStorage.getItem("count") + 1;   // "51" — string concatenation, not addition

localStorage.setItem("dark", true);
localStorage.getItem("dark");    // "true" — string
localStorage.getItem("dark") === true;    // false! it's not the boolean

// this is why objects/arrays need JSON.stringify — they'd otherwise become
// "[object Object]" or "1,2,3" which you can't get your data back from.</code></pre>

    <p><strong>Storage is per-origin.</strong> Every website has its own separate localStorage bucket. <code>example.com</code> can't see storage from <code>othersite.com</code>. Even subdomains and different protocols count as different origins:</p>
<pre class="language-javascript"><code class="language-javascript">// these are separate localStorage stores:
// - http://example.com
// - https://example.com                 (different protocol)
// - https://www.example.com             (different subdomain)
// - https://example.com:8080            (different port)</code></pre>

    <p><strong>There's a size limit — usually around 5MB per origin.</strong> Exceeding it throws a <code>QuotaExceededError</code>:</p>
<pre class="language-javascript"><code class="language-javascript">try {
  localStorage.setItem("bigThing", veryLargeString);
} catch (err) {
  if (err.name === "QuotaExceededError") {
    console.warn("out of space");
  }
}</code></pre>

    <p><strong>Setting a key to <code>null</code> or <code>undefined</code> stores the STRING <code>"null"</code> or <code>"undefined"</code>, not the actual empty value.</strong> This is a common source of confusion:</p>
<pre class="language-javascript"><code class="language-javascript">localStorage.setItem("token", null);
localStorage.getItem("token");   // "null" — the STRING "null", not the value null
localStorage.getItem("token") === null;   // false!

// to actually "clear" a key, use removeItem, not setItem(null)
localStorage.removeItem("token");
localStorage.getItem("token") === null;   // true (getItem returns null for missing keys)</code></pre>

    <p><strong>Storage is synchronous.</strong> Unlike fetching from a server, <code>setItem</code> runs immediately and blocks until done. For most small values, this is instant. For very large values, it can briefly freeze the page:</p>
<pre class="language-javascript"><code class="language-javascript">localStorage.setItem("cache", giantJsonString);   // page pauses until write completes
console.log("this runs AFTER the write finishes");</code></pre>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'methods-4-0-1-0': `
    <p>Web pages are stateless by default. Every time you close a tab, everything the JavaScript remembered — settings, form drafts, cart contents, which tab was active — vanishes. The next time you visit, the app starts from zero. That's usually not what you want. Users expect their theme choice to stick, their unfinished form to still be there, their preferences to be remembered.</p>
    <p><code>localStorage.setItem</code> is the simplest way to give your app memory that survives page reloads. You save something once, and it's there next time you (or your JavaScript) come looking. Without it, you'd need a server, a database, and network calls just to remember something as small as "the user prefers dark mode."</p>
  `,

  /* 1.1 Why use it */
  'methods-4-0-1-1': `
    <p>Because it's the easiest way to persist small pieces of data on the client without any backend involvement. No database setup, no API endpoint, no async code — just <code>setItem</code>. For settings, preferences, cached responses, and draft form data, it's exactly the right tool. Millions of websites use it for exactly this.</p>
    <p>It's also fast. Reads and writes are synchronous and typically take under a millisecond for reasonable-sized values. For small data that needs to stick around, nothing simpler or quicker exists in the browser.</p>
  `,

  /* 1.2 Where you use it */
  'methods-4-0-1-2': `
<pre class="language-javascript"><code class="language-javascript">// Saving user preferences
localStorage.setItem("theme", "dark");
localStorage.setItem("fontSize", "large");

// Remembering the last visited page or tab
localStorage.setItem("lastTab", "profile");

// Draft form autosave
form.addEventListener("input", () =&gt; {
  localStorage.setItem("draft", JSON.stringify(readForm()));
});

// Caching a fetched value that doesn't change often
const cached = localStorage.getItem("productList");
if (!cached) {
  const list = await fetch("/api/products").then(r =&gt; r.json());
  localStorage.setItem("productList", JSON.stringify(list));
}

// Saving a "you've seen this" flag so a banner doesn't reappear
localStorage.setItem("welcomeDismissed", "true");

// Persisting a shopping cart between visits
localStorage.setItem("cart", JSON.stringify(cartItems));</code></pre>

    <p>General rule: anything you want the browser to remember between reloads, that's small and non-sensitive, is a fit for localStorage.</p>
  `,

  /* 1.3 Plain English explanation */
  'methods-4-0-1-3': `
    <p>Imagine the browser gives every website a small notebook, private to that site, that stays on your desk between visits. <code>localStorage.setItem</code> is you writing a labeled sticky note and putting it in the notebook. Later — even after you leave and come back tomorrow — you can flip open the notebook, find the sticky with the label you remember, and read what you wrote.</p>
    <p>The catch: everything you write in the notebook has to be plain text. Numbers, yes/no answers, whole lists — all of them get turned into text on the way in. That's why saving an object needs an extra step (converting it to JSON text first). The notebook doesn't understand shapes, only sentences. And once you write something down, it stays there — through reloads, restarts, even shutdowns — until you (or the user) deliberately erases it.</p>
  `,

  /* 1.4 Mental model */
  'methods-4-0-1-4': `
    <p>Picture the browser as a hotel that gives every website a small safe deposit box in the lobby. Your JavaScript code is a temporary guest that checks in when the page loads and checks out when the tab closes. Regular JavaScript variables are things you carry in your pockets — they leave with you. But anything you place in the safe deposit box stays in the box, waiting for your next stay.</p>
    <p><code>localStorage.setItem</code> is you telling the concierge: "put this note in slot #<em>theme</em>. Replace whatever's in there now." The concierge writes it down (in text), files it away, and confirms it's saved before you walk away. Every guest at the same hotel address gets the same box back next time they check in — that's why setItem in one tab and getItem in another (same site) see the same data.</p>
    <p>The box only holds paper — no shapes, no numbers, no objects. If you want to store a diagram, you have to describe it in words first (JSON). And each hotel address has its own box: your box at hotel <em>example.com</em> is not the same as your box at hotel <em>othersite.com</em>.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'methods-4-0-1-5': `
<pre class="language-javascript"><code class="language-javascript">// A theme toggle: user clicks, app changes theme, saves the choice.

const toggle = document.querySelector(".theme-toggle");

toggle.addEventListener("click", () =&gt; {
  const nextTheme = document.body.dataset.theme === "dark" ? "light" : "dark";
  document.body.dataset.theme = nextTheme;
  localStorage.setItem("theme", nextTheme);
});

// what happens when the user clicks:
// 1. the click event fires. handler runs.
// 2. reads document.body.dataset.theme — currently "dark".
// 3. nextTheme = "light".
// 4. dataset.theme is set to "light" → CSS flips to light theme.
// 5. localStorage.setItem("theme", "light") is called.
//    - browser converts key "theme" to string (already a string).
//    - browser converts value "light" to string (already a string).
//    - writes { "theme": "light" } into this origin's storage bucket.
//    - the write is synchronous — done before the handler returns.
// 6. handler exits. UI shows light theme.
//
// User closes the tab. Comes back next day. Opens the same site.
// The app runs its startup code:
//
// const savedTheme = localStorage.getItem("theme");
// if (savedTheme) document.body.dataset.theme = savedTheme;
//
// what happens:
// 1. localStorage.getItem("theme") looks up the origin's bucket.
// 2. finds "theme" → "light" (from yesterday).
// 3. returns "light".
// 4. dataset.theme = "light" → CSS applies light theme before the user sees anything.
//
// the setItem call from yesterday is the reason the app "remembers."</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'methods-4-0-2-0': `
    <p>To see what's in localStorage right now:</p>
<pre class="language-javascript"><code class="language-javascript">// list all keys and values
console.log(Object.entries(localStorage));

// or open DevTools → Application tab → Local Storage → &lt;your site&gt;
// (Storage tab in Firefox)
// you'll see a live table of every key/value pair for this origin.

// check one specific key
console.log(localStorage.getItem("theme"));

// count how many things you have stored
console.log(localStorage.length);
</code></pre>
    <p>If a value isn't there when you expect it: check the exact key spelling and case. <code>"userName"</code> and <code>"username"</code> are different keys. Also check that you're on the same origin — localStorage is per-origin, so <code>localhost:3000</code> and <code>localhost:5173</code> have separate stores.</p>
    <p>If a value looks wrong: remember everything is a string. <code>getItem("count") + 1</code> concatenates instead of adding. If you saved an object, remember to <code>JSON.parse()</code> it — the raw string from localStorage looks like <code>'{"id":1,"name":"Alice"}'</code>, not an object.</p>
  `,

  /* 2.1 The part that makes it click */
  'methods-4-0-2-1': `
    <p>The aha: <strong>localStorage is like giving the browser a memory that lives outside your JavaScript.</strong> Your code, variables, and state all vanish when the tab closes. localStorage doesn't. It's the one place you can put something and be sure it'll still be there tomorrow, next week, or next month:</p>
<pre class="language-javascript"><code class="language-javascript">// this variable lasts only as long as the page is open:
let userName = "Alice";
// close the tab → variable gone.

// this survives everything:
localStorage.setItem("userName", "Alice");
// close the tab, close the browser, restart the computer.
// come back tomorrow → still there.</code></pre>
    <p>Once that clicks, you stop trying to shoehorn things into memory-only variables and start reaching for localStorage anywhere the user would expect "the app to remember." Preferences, drafts, cached data, dismissed banners — all natural fits.</p>
  `,

  /* 2.2 Common confusions */
  'methods-4-0-2-2': `
    <p><strong>"Why do numbers come back as strings?"</strong> Because localStorage only stores strings. There's no type information saved — when you pass in <code>5</code>, the browser calls <code>String(5)</code> and stores the string <code>"5"</code>. When you read it back, you get <code>"5"</code>, not <code>5</code>. To use it as a number, you have to coerce: <code>Number(getItem("count"))</code>.</p>

    <p><strong>"Is localStorage the same as sessionStorage?"</strong> Same API, different lifetime. <code>localStorage</code> persists forever (until cleared). <code>sessionStorage</code> is wiped when the tab closes. Use sessionStorage for short-lived data that shouldn't outlive the tab (like an in-progress checkout step). Use localStorage for anything that should survive.</p>

    <p><strong>"Does localStorage work across devices?"</strong> No. It's per-browser-per-device-per-origin. Data saved on your desktop doesn't sync to your phone. If you need cross-device sync ("my settings follow me"), you need a server with user accounts.</p>

    <p><strong>"Is it secure to store login tokens?"</strong> Not really. Any JavaScript on your site can read localStorage — including third-party scripts (analytics, ads, browser extensions). For authentication, use httpOnly cookies which JavaScript can't read.</p>

    <p><strong>"Can other tabs see my localStorage?"</strong> Yes, if they're on the same origin. Two tabs open to <code>example.com</code> share the same localStorage. This can be useful (updating a setting in one tab affects the other) but is a surprise if you're expecting per-tab isolation. Use <code>sessionStorage</code> for that.</p>

    <p><strong>"What about incognito/private mode?"</strong> localStorage usually works in incognito, but the data is cleared when the incognito session ends. Some strict private modes throw an error when you try to save. Wrap in try/catch if it matters.</p>
  `,

  /* 2.3 Common mistakes */
  'methods-4-0-2-3': `
<pre class="language-javascript"><code class="language-javascript">// Mistake 1: forgetting to JSON.stringify an object
localStorage.setItem("user", { id: 1, name: "Alice" });
localStorage.getItem("user");   // "[object Object]" — useless string
// fix:
localStorage.setItem("user", JSON.stringify({ id: 1, name: "Alice" }));

// Mistake 2: expecting numbers back as numbers
localStorage.setItem("count", 5);
const c = localStorage.getItem("count") + 1;   // "51" — string concatenation
// fix:
const c = Number(localStorage.getItem("count")) + 1;   // 6

// Mistake 3: expecting booleans back as booleans
localStorage.setItem("dark", true);
if (localStorage.getItem("dark") === true) { }   // never — it's the STRING "true"
// fix:
if (localStorage.getItem("dark") === "true") { }

// Mistake 4: setting to null instead of removing
localStorage.setItem("token", null);
localStorage.getItem("token");   // "null" — the STRING
// fix:
localStorage.removeItem("token");

// Mistake 5: assuming localStorage is available
// In some private browsing modes, or when disabled, this throws or does nothing
localStorage.setItem("x", "y");
// fix: wrap in try/catch when it matters
try {
  localStorage.setItem("x", "y");
} catch (err) {
  console.warn("storage unavailable:", err);
}

// Mistake 6: storing sensitive data
localStorage.setItem("password", userPassword);   // ✗ any JS on the site can read this
// fix: don't store secrets in localStorage. use httpOnly cookies for auth tokens.

// Mistake 7: trying to store more than the quota
localStorage.setItem("bigCache", massiveJsonString);
// QuotaExceededError once you cross ~5MB
// fix: catch the error, use IndexedDB for large data, or invalidate old cache first

// Mistake 8: typos in keys
localStorage.setItem("userName", "Alice");
localStorage.getItem("username");   // null — different key
// fix: use constants for key names
const KEY_USERNAME = "userName";
localStorage.setItem(KEY_USERNAME, "Alice");

// Mistake 9: overwriting instead of merging
const settings = JSON.parse(localStorage.getItem("settings") || "{}");
localStorage.setItem("settings", JSON.stringify({ theme: "dark" }));
// this REPLACES the whole settings object — any other saved keys are lost.
// fix: merge before saving
localStorage.setItem("settings", JSON.stringify({ ...settings, theme: "dark" }));</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'methods-4-0-3-0': `
<pre class="language-javascript"><code class="language-javascript">// Save a simple string
localStorage.setItem("username", "Alice");

// Save a number (will come back as string)
localStorage.setItem("visitCount", 3);

// Save a boolean (will come back as string)
localStorage.setItem("isDark", true);

// Save an object (via JSON)
localStorage.setItem("user", JSON.stringify({ id: 1, name: "Alice" }));

// Save an array (via JSON)
localStorage.setItem("tags", JSON.stringify(["admin", "vip"]));

// Overwrite an existing value
localStorage.setItem("theme", "dark");
localStorage.setItem("theme", "light");   // replaces "dark"

// Save with a wrapped helper for objects
function setJSON(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
setJSON("settings", { theme: "dark", fontSize: 14 });</code></pre>
  `,

  /* 3.1 Real website uses */
  'methods-4-0-3-1': `
    <p><strong>Example: saving a theme preference so it survives page reloads</strong></p>
<pre class="language-javascript"><code class="language-javascript">const themeToggle = document.querySelector(".theme-toggle");

themeToggle.addEventListener("click", () =&gt; {
  const current = document.body.dataset.theme || "light";
  const next = current === "light" ? "dark" : "light";
  document.body.dataset.theme = next;
  localStorage.setItem("theme", next);   // ← remembers the choice
});

// On page load, apply the saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  document.body.dataset.theme = savedTheme;
}
// next visit, the site opens in the theme the user chose. no server involved.</code></pre>

    <p><strong>Example: autosaving a long-form draft</strong></p>
<pre class="language-javascript"><code class="language-javascript">const editor = document.querySelector(".editor");

// autosave every time the user types
editor.addEventListener("input", () =&gt; {
  localStorage.setItem("draft", editor.value);
});

// on load, restore the last draft
const savedDraft = localStorage.getItem("draft");
if (savedDraft) editor.value = savedDraft;

// if the user's laptop crashes or they accidentally close the tab,
// they don't lose their work. the browser remembers.</code></pre>

    <p><strong>Example: storing a small cache to avoid redundant API calls</strong></p>
<pre class="language-javascript"><code class="language-javascript">async function getCountries() {
  const cached = localStorage.getItem("countries");
  if (cached) return JSON.parse(cached);
  
  const list = await fetch("/api/countries").then(r =&gt; r.json());
  localStorage.setItem("countries", JSON.stringify(list));
  return list;
}
// first call: hits the API, caches the list.
// every subsequent call: instant, from localStorage. no network hit.</code></pre>
  `,

  /* 3.2 Connects to */
  'methods-4-0-3-2': `
    <ul>
      <li><strong><code>localStorage.getItem()</code></strong> → the read counterpart to setItem</li>
      <li><strong><code>localStorage.removeItem()</code></strong> → deletes a single key</li>
      <li><strong><code>localStorage.clear()</code></strong> → wipes the entire origin's storage</li>
      <li><strong><code>sessionStorage.setItem()</code></strong> → same API, but data clears when the tab closes</li>
      <li><strong><code>JSON.stringify()</code></strong> → needed to save objects and arrays</li>
      <li><strong><code>JSON.parse()</code></strong> → needed to read them back</li>
      <li><strong>Origin / same-origin policy</strong> → why storage is isolated per site</li>
      <li><strong>Storage quota</strong> → the ~5MB limit and QuotaExceededError</li>
      <li><strong>Cookies</strong> → alternate storage, server-visible, smaller</li>
      <li><strong>IndexedDB</strong> → the right tool for larger persistent data</li>
      <li><strong>Storage events</strong> → cross-tab sync notification when storage changes</li>
    </ul>
  `,

  /* 3.3 See also */
  'methods-4-0-3-3': `
    <ul>
      <li><code>localStorage.getItem()</code></li>
      <li><code>localStorage.removeItem()</code></li>
      <li><code>localStorage.clear()</code></li>
      <li><code>sessionStorage.setItem()</code></li>
      <li><code>JSON.stringify()</code></li>
      <li><code>JSON.parse()</code></li>
      <li>Storage events</li>
      <li>Cookies</li>
      <li>IndexedDB</li>
      <li>QuotaExceededError</li>
      <li>DevTools Application/Storage panel</li>
    </ul>
  `,

/* ========================================================= 
   Sub-lesson: 5.5.2 Storage → localStorage.getItem()
 =======================================================*/

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'methods-4-1-0-0': `
    <p><strong><code>localStorage.getItem(key)</code></strong> is a built-in browser method that reads a value out of the browser's built-in storage. You pass in the key (the label you used when saving), and the browser returns whatever string is stored under that key. It's the read counterpart to <code>setItem</code> — the same key you wrote with is the same key you read with.</p>
    <p>The return is always one of exactly two things: the stored string, or <code>null</code> if the key doesn't exist. Nothing else. Not a number, not a boolean, not an object, not <code>undefined</code>. That narrow contract makes reads predictable — and it's why coercion (Number, JSON.parse, string comparisons) is your job every time you read.</p>
  `,

  /* 0.1 Syntax */
  'methods-4-1-0-1': `
<pre class="language-javascript"><code class="language-javascript">// Basic form — one argument: the key
localStorage.getItem("theme");           // returns "dark" if you saved it, or null

// Read into a variable
const theme = localStorage.getItem("theme");

// Chain with defaults for missing keys
const theme = localStorage.getItem("theme") || "light";
const theme = localStorage.getItem("theme") ?? "light";   // more precise — only defaults on null

// Read an object (that was saved via JSON.stringify)
const user = JSON.parse(localStorage.getItem("user"));

// Read with a safe fallback in case the value doesn't exist
const cart = JSON.parse(localStorage.getItem("cart") || "[]");

// Read and use directly
document.body.dataset.theme = localStorage.getItem("theme") || "light";</code></pre>

    <p>Shape: <code>localStorage.getItem(key)</code>. Returns either the stored string, or <code>null</code> if the key doesn't exist.</p>
  `,

  /* 0.2 Anatomy / Breakdown */
  'methods-4-1-0-2': `
<pre class="language-javascript"><code class="language-javascript">const value = localStorage.getItem("theme");
// │       │           │       │
// │       │           │       └── the KEY — the label you saved under
// │       │           └── the method name
// │       └── the localStorage object
// └── the variable that receives the result

// what the browser does under the hood:
// 1. converts the key to a string (via String()).
// 2. looks up the string in the origin's storage bucket.
// 3. if found → returns the stored string.
// 4. if not found → returns null.
// 5. the return is synchronous — the value is ready by the time getItem completes.

// the return values, at a glance:
// getItem("existing key")   → "&lt;stored string value&gt;"
// getItem("missing key")    → null
// getItem("")               → null (unless you stored an empty string under "")
// getItem(undefined)         → null (unless you stored under the STRING "undefined")
// getItem(null)              → null (unless you stored under the STRING "null")

// storage NEVER returns:
// - undefined (only null for missing keys)
// - a number, boolean, object, or array (always a string)
// - an error/exception (getItem is safe on any key)</code></pre>
  `,

  /* 0.3 Syntax Details That Matter */
  'methods-4-1-0-3': `
    <p><strong>The key must match exactly — case-sensitive, whitespace-sensitive.</strong> Storage keys aren't fuzzy-matched:</p>
<pre class="language-javascript"><code class="language-javascript">localStorage.setItem("userName", "Alice");
localStorage.getItem("userName");   // "Alice"
localStorage.getItem("username");    // null — different casing
localStorage.getItem("user Name");   // null — different whitespace
localStorage.getItem("UserName");    // null — different casing</code></pre>

    <p><strong>Return value is always a string OR null.</strong> Never a number, boolean, object, or undefined. This is the most important thing to remember about <code>getItem</code>:</p>
<pre class="language-javascript"><code class="language-javascript">localStorage.setItem("count", 5);
typeof localStorage.getItem("count");   // "string" — not "number"

localStorage.setItem("dark", true);
typeof localStorage.getItem("dark");    // "string" — not "boolean"

// missing keys return null (never undefined)
localStorage.getItem("nothingHere");    // null
typeof localStorage.getItem("nothingHere");   // "object" (typeof null is "object")</code></pre>

    <p><strong>Empty strings are distinct from missing keys.</strong> If you save an empty string, <code>getItem</code> returns the empty string — NOT null. This means truthy checks like <code>if (getItem(...))</code> can miss legitimately-stored empty values:</p>
<pre class="language-javascript"><code class="language-javascript">localStorage.setItem("draft", "");   // saves an empty string
localStorage.getItem("draft");        // "" — NOT null
localStorage.getItem("draft") === null;   // false — the key exists
localStorage.getItem("draft") === "";     // true

if (localStorage.getItem("draft")) {
  // WON'T run — "" is falsy
}

// use === null for existence check, or use ?? for defaults
const draft = localStorage.getItem("draft") ?? "no draft";   // preserves ""</code></pre>

    <p><strong>The string <code>"null"</code> and the value <code>null</code> are completely different.</strong> If you accidentally stored the string "null" (e.g., by passing null to setItem, which coerces to string), <code>getItem</code> returns the string, not null:</p>
<pre class="language-javascript"><code class="language-javascript">localStorage.setItem("token", null);   // stores the STRING "null"
localStorage.getItem("token");           // "null" — STRING
localStorage.getItem("token") === null;  // false! it's not the null VALUE
typeof localStorage.getItem("token");    // "string"</code></pre>

    <p><strong>Reading is synchronous and fast.</strong> Even though storage lives on disk, browsers cache the whole store in memory. A single <code>getItem</code> call is typically under a microsecond. You can read freely inside loops or event handlers without worrying about performance.</p>

    <p><strong>Bracket notation also works — but is less safe.</strong> localStorage exposes each key as a property, so you can also read like a regular object:</p>
<pre class="language-javascript"><code class="language-javascript">// these three look equivalent for simple keys:
localStorage.getItem("theme");
localStorage["theme"];
localStorage.theme;

// but getItem is safer — it always works, even for keys that clash with built-ins:
localStorage.getItem("length");   // reads a stored key called "length"
localStorage.length;               // reads the BUILT-IN length property (count of stored items)</code></pre>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'methods-4-1-1-0': `
    <p>The counterpart to "save something for later" is "get it back when I need it." Saving with <code>setItem</code> is only half of persistence — the other half is retrieving. <code>getItem</code> is how your JavaScript reaches back into whatever was previously saved and pulls it into the current session.</p>
    <p>This is what makes persistence useful. Without <code>getItem</code>, you'd be writing to a store you couldn't read from. With it, every piece of saved state becomes accessible on the next page load, the next tab, the next visit tomorrow. It's the "remember what I did last time" mechanism.</p>
  `,

  /* 1.1 Why use it */
  'methods-4-1-1-1': `
    <p>Because it's the simplest way to restore state on page load. When your app boots, you check localStorage for saved preferences, drafts, cart items, or session flags, and use whatever you find. That's it — no server call, no async waiting. If the value is there, you get it instantly.</p>
    <p>The synchronous, zero-config nature of <code>getItem</code> is why it dominates client-side persistence for small data. Anything you need "right now, on page load, before rendering" — theme, layout, saved-draft, dismissed-banner — is a one-line lookup.</p>
  `,

  /* 1.2 Where you use it */
  'methods-4-1-1-2': `
<pre class="language-javascript"><code class="language-javascript">// On page load, to restore saved preferences
const theme = localStorage.getItem("theme");
if (theme) document.body.dataset.theme = theme;

// Reading a saved draft into an editor
const editor = document.querySelector(".editor");
editor.value = localStorage.getItem("draft") || "";

// Restoring a cart between visits
const cart = JSON.parse(localStorage.getItem("cart") || "[]");
renderCart(cart);

// Checking a one-time flag
if (localStorage.getItem("welcomeSeen") === "true") {
  hideWelcomeBanner();
}

// Reading and updating a value
const count = Number(localStorage.getItem("visitCount")) || 0;
localStorage.setItem("visitCount", count + 1);

// Reading with a fallback default
const language = localStorage.getItem("language") || "en";

// Inside a fetch cache pattern
async function getUser(id) {
  const cached = localStorage.getItem("user_" + id);
  if (cached) return JSON.parse(cached);
  const fresh = await fetch("/api/user/" + id).then(r =&gt; r.json());
  localStorage.setItem("user_" + id, JSON.stringify(fresh));
  return fresh;
}

// Reading the last-used filter to restore it
const filter = localStorage.getItem("lastFilter") || "all";
select.value = filter;

// Checking if the user has completed onboarding
if (!localStorage.getItem("onboardingDone")) {
  startOnboarding();
}</code></pre>

    <p>Anywhere you saved something with <code>setItem</code>, you'll use <code>getItem</code> later to read it back.</p>
  `,

  /* 1.3 Plain English explanation */
  'methods-4-1-1-3': `
    <p>Reading from storage is like looking up a name in an address book. You give the book a name (the key), and the book either tells you the address for that name (the value) or says "nobody by that name here" (null).</p>
    <p>You don't remove or modify anything by looking. The address is still in the book for the next time you (or someone else) looks it up. And if you look up a name that was never in the book, the book doesn't get upset or crash — it just calmly says "no entry for that name."</p>
    <p>One important detail: everything the book gives back is written as text. If the "address" is a number, you get the digits as text, and you have to interpret them yourself. If the "address" is a whole list of things, they were originally written down as a text description, and you have to translate the description back into a real list. The book doesn't know what type of thing you meant to store — it just remembers letters.</p>
  `,

  /* 1.4 Mental model */
  'methods-4-1-1-4': `
    <p>Picture a small filing cabinet at your desk with hundreds of labeled slots. Reading with <code>getItem</code> is you pulling open a slot by its label and looking inside. Two outcomes: either there's a slip of paper in the slot (with whatever was written on it earlier), or the slot is empty (and you get an "empty" signal — <code>null</code>).</p>
    <p>Two things about the cabinet that matter: (1) every slot holds paper only — not objects, not numbers, not booleans. If someone wrote "42" on the paper, you have to remember it means the number 42; the paper itself just has characters. (2) The empty signal is a specific "no slot found" indicator, not "the slot is there but it's blank." A slot with a blank piece of paper (empty string) is different from a slot that doesn't exist (null). Same cabinet, different states.</p>
    <p>Every read is a snapshot of the cabinet at that instant. Another tab (same origin) may open the cabinet and change a slot's contents; your next <code>getItem</code> will see whatever's in there now. There's no isolation — one cabinet, shared per origin, always reflecting the latest write.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'methods-4-1-1-5': `
<pre class="language-javascript"><code class="language-javascript">// A "welcome back" flow: check if the user has visited before, restore their theme.

const savedTheme = localStorage.getItem("theme");
const lastVisit = localStorage.getItem("lastVisit");

if (savedTheme) {
  document.body.dataset.theme = savedTheme;
}

if (lastVisit) {
  showWelcomeBack("Last seen: " + lastVisit);
} else {
  showFirstTimeWelcome();
}

localStorage.setItem("lastVisit", new Date().toISOString());

// step by step, for a returning user:
// 1. localStorage.getItem("theme") runs.
//    - browser looks up "theme" in this origin's storage.
//    - finds "dark" (from a previous visit's setItem call).
//    - returns "dark".
// 2. savedTheme = "dark".
// 3. localStorage.getItem("lastVisit") runs.
//    - looks up "lastVisit" — finds "2024-01-15T10:22:00Z".
//    - returns that string.
// 4. lastVisit = "2024-01-15T10:22:00Z".
// 5. if (savedTheme) is truthy → sets dataset.theme = "dark".
// 6. if (lastVisit) is truthy → showWelcomeBack fires.
// 7. new setItem writes today's date over yesterday's "lastVisit".
//
// step by step, for a first-time user:
// 1. localStorage.getItem("theme") runs.
//    - "theme" not found in storage → returns null.
// 2. savedTheme = null.
// 3. localStorage.getItem("lastVisit") runs.
//    - not found → returns null.
// 4. lastVisit = null.
// 5. if (savedTheme) is falsy → skip.
// 6. if (lastVisit) is falsy → showFirstTimeWelcome fires.
// 7. setItem writes today's date for the FIRST time.
//    (next visit, this code path takes the "returning user" branch.)
//
// two getItem calls, two return possibilities each, four total branches — all synchronous.</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'methods-4-1-2-0': `
    <p>When <code>getItem</code> returns unexpected values:</p>
<pre class="language-javascript"><code class="language-javascript">// symptom: getItem returns null but you're SURE you saved something
console.log("all keys:", Object.keys(localStorage));
// see all keys currently stored. if yours isn't there:
// - check spelling and case: "userName" ≠ "username" ≠ "UserName"
// - check origin: localhost:3000 and localhost:5173 have separate stores
// - check that setItem actually ran (a silent throw or an early return could skip it)

// symptom: getItem returns "null" (the STRING) instead of null
console.log(localStorage.getItem("token"));
// if it's the STRING "null":
// - someone did localStorage.setItem("token", null) which stored the string "null"
// - fix: remove and re-save, and use removeItem to clear (not setItem(null))

// symptom: getItem returns the wrong TYPE
localStorage.getItem("count") + 1;   // "51" not 6
// remember: getItem ALWAYS returns a string (or null).
// numeric math needs Number() first; boolean check needs === "true"

// symptom: getItem returns "[object Object]"
console.log(localStorage.getItem("user"));
// you saved an object without JSON.stringify — the object was coerced to that string.
// no recovering the original data. from now on:
// - always stringify before setItem
// - always parse after getItem

// symptom: JSON.parse throws
JSON.parse(localStorage.getItem("data"));
// stored value isn't valid JSON. common causes:
// - saved with setItem(key, obj) instead of setItem(key, JSON.stringify(obj))
// - value was manually edited in DevTools
// fix: wrap parse in try/catch, or validate before saving</code></pre>

    <p>Quick inspection: open DevTools → Application (or Storage) tab → Local Storage → your origin. You'll see a live table of every key and value.</p>
  `,

  /* 2.1 The part that makes it click */
  'methods-4-1-2-1': `
    <p>The aha: <strong><code>getItem</code> is where saved state meets the current session.</strong> When your page loads, all your JavaScript variables start at their defaults. localStorage is the one place that already has data — data from your last visit, from another tab, from earlier today. <code>getItem</code> is how you pull that pre-existing data into your fresh variables:</p>
<pre class="language-javascript"><code class="language-javascript">// on every page load, this sequence runs:
// 1. all variables reset to defaults
let theme = "light";
let cart = [];

// 2. getItem checks storage for anything left from before
const savedTheme = localStorage.getItem("theme");
const savedCart = localStorage.getItem("cart");

// 3. if something's there, hydrate your variables from it
if (savedTheme) theme = savedTheme;
if (savedCart) cart = JSON.parse(savedCart);

// now your "fresh" page has the same state as when the user last visited.
// getItem is the bridge from persistent past to live present.</code></pre>
    <p>Once you see that pattern, "restore state on load" becomes a habit: for every important variable, check localStorage first, then apply defaults if nothing's there.</p>
  `,

  /* 2.2 Common confusions */
  'methods-4-1-2-2': `
    <p><strong>"Why does getItem return null and not undefined?"</strong> The specification chose <code>null</code> as the "key not found" signal. Regular object property access gives <code>undefined</code>, but storage is a different API and made a different choice. Practically: always compare with <code>=== null</code> to check existence, and don't check for undefined — it will never happen.</p>

    <p><strong>"Are null and the string 'null' the same?"</strong> No. <code>null</code> is a real JavaScript value that means "no value here." The string <code>"null"</code> is four characters: <code>n</code>, <code>u</code>, <code>l</code>, <code>l</code>. If someone accidentally stored the string, <code>getItem</code> gives you the string, not the value. Use strict equality (<code>=== null</code>) to detect the real null.</p>

    <p><strong>"Is empty string the same as missing?"</strong> No. If you set a key to <code>""</code>, the key exists with an empty value, and <code>getItem</code> returns <code>""</code> — not null. Truthy checks (<code>if (getItem(...))</code>) treat both empty string and null as "no value," which usually isn't what you want. Use <code>=== null</code> for "does the key exist" and <code>??</code> for "give me a default only if truly missing."</p>

    <p><strong>"Why do I get strings back for numbers I saved?"</strong> Storage doesn't remember types. Every value gets converted to text on the way in (via <code>String()</code>), and every read gives you that same text. If you need a number, coerce with <code>Number()</code> or <code>parseInt()</code>. If you need a boolean, compare with <code>=== "true"</code>. If you need an object, use JSON.</p>

    <p><strong>"Does getItem ever throw?"</strong> Very rarely. Reading is one of the safest operations in JavaScript — it accepts any key, returns null for anything missing, and doesn't validate. The only realistic throw is if localStorage itself is disabled (some strict private-browsing modes), but even that usually shows up when you first touch <code>localStorage</code>, not on a specific getItem call.</p>

    <p><strong>"Can I trust the value I read?"</strong> For your own app's data, yes — nothing you didn't write should be there. But localStorage is user-editable through DevTools. Anyone can open the console and type <code>localStorage.setItem("isAdmin", "true")</code>. Never use localStorage for permission or authorization checks — those must be validated on a server.</p>
  `,

  /* 2.3 Common mistakes */
  'methods-4-1-2-3': `
<pre class="language-javascript"><code class="language-javascript">// Mistake 1: expecting the value's original type back
localStorage.setItem("count", 5);
const c = localStorage.getItem("count") + 1;   // "51" — string concatenation
// fix: coerce
const c = Number(localStorage.getItem("count")) + 1;

// Mistake 2: forgetting to JSON.parse
localStorage.setItem("user", JSON.stringify({ id: 1 }));
const user = localStorage.getItem("user");
user.id;   // undefined — you have a string, not an object
// fix:
const user = JSON.parse(localStorage.getItem("user"));

// Mistake 3: parsing without checking for null
const user = JSON.parse(localStorage.getItem("user"));
user.id;   // TypeError if the key wasn't stored (JSON.parse(null) returns null)
// fix: default first
const user = JSON.parse(localStorage.getItem("user") || "{}");

// Mistake 4: using || when the stored value could be an empty string or "0"
const theme = localStorage.getItem("theme") || "light";
// this defaults to "light" if theme is stored as "" too — probably fine
// but if you want to preserve empties, use ??:
const theme = localStorage.getItem("theme") ?? "light";

// Mistake 5: typos in the key
localStorage.setItem("userName", "Alice");
localStorage.getItem("username");   // null — wrong case
// fix: use a constant
const KEY_USERNAME = "userName";
localStorage.setItem(KEY_USERNAME, "Alice");
localStorage.getItem(KEY_USERNAME);

// Mistake 6: expecting stored booleans to work as real booleans
if (localStorage.getItem("dark") === true) { }   // false — it's a string
if (localStorage.getItem("dark") === "true") { }  // correct
if (localStorage.getItem("dark")) { }              // truthy check works but "false" is truthy too

// Mistake 7: reading in a place where storage isn't ready
// (rare — but in some SSR frameworks, running on the server, there IS no localStorage)
if (typeof localStorage !== "undefined") {
  const theme = localStorage.getItem("theme");
}

// Mistake 8: caching the result and re-using it after another script modified storage
const theme = localStorage.getItem("theme");
// ... user changes theme in another tab ...
console.log(theme);   // still the OLD value — you cached it in a variable
// fix: re-read when you need the current value

// Mistake 9: reading a key that shouldn't be trusted
const isAdmin = localStorage.getItem("isAdmin") === "true";
if (isAdmin) grantAdminAccess();
// localStorage is user-editable through DevTools — anyone can set this to "true"
// fix: NEVER trust client storage for permission checks. authenticate on the server.

// Mistake 10: expecting getItem to give you an object
const settings = localStorage.getItem("settings");
settings.theme;   // undefined — settings is a string
// fix: parse first
const settings = JSON.parse(localStorage.getItem("settings") || "{}");
settings.theme;</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'methods-4-1-3-0': `
<pre class="language-javascript"><code class="language-javascript">// Simple string
localStorage.setItem("name", "Alice");
localStorage.getItem("name");             // "Alice"

// Missing key
localStorage.getItem("nothingHere");      // null

// With a default fallback
localStorage.getItem("theme") || "light"; // "light" if theme was never set

// Reading an object (via JSON)
localStorage.setItem("user", JSON.stringify({ id: 1, name: "Alice" }));
JSON.parse(localStorage.getItem("user")); // { id: 1, name: "Alice" }

// Reading and coercing a number
Number(localStorage.getItem("count"));    // 5 (number), or NaN if not stored

// Reading and coercing a boolean
localStorage.getItem("dark") === "true";  // true only if you stored "true"

// Read with safe JSON parse
function getJSON(key, fallback) {
  const raw = localStorage.getItem(key);
  if (raw === null) return fallback;
  try {
    return JSON.parse(raw);
  } catch {
    return fallback;
  }
}
getJSON("user", {});   // safely returns the object, or {} if missing/corrupt

// Existence check
if (localStorage.getItem("welcomeSeen") !== null) {
  hideWelcome();
}

// Typed helpers
function getNumber(key, fallback = 0) {
  const raw = localStorage.getItem(key);
  if (raw === null) return fallback;
  const num = Number(raw);
  return Number.isNaN(num) ? fallback : num;
}

function getBool(key, fallback = false) {
  const raw = localStorage.getItem(key);
  if (raw === null) return fallback;
  return raw === "true";
}</code></pre>
  `,

  /* 3.1 Real website uses */
  'methods-4-1-3-1': `
    <p><strong>Example: restoring the theme before the page renders</strong></p>
<pre class="language-javascript"><code class="language-javascript">// place this at the very top of your entry script, or inline in &lt;head&gt;
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  document.documentElement.dataset.theme = savedTheme;
}
// applying the theme BEFORE first paint prevents a flash of the wrong theme.
// getItem is synchronous, so this runs instantly.</code></pre>

    <p><strong>Example: restoring an autosaved draft</strong></p>
<pre class="language-javascript"><code class="language-javascript">const editor = document.querySelector(".editor");

// on page load, check for a saved draft and restore
const draft = localStorage.getItem("draft");
if (draft) {
  editor.value = draft;
  showDraftBanner("We restored your last draft.");
}

// continue autosaving as the user types
editor.addEventListener("input", () =&gt; {
  localStorage.setItem("draft", editor.value);
});</code></pre>

    <p><strong>Example: local cache with expiration</strong></p>
<pre class="language-javascript"><code class="language-javascript">const CACHE_KEY = "productList";
const CACHE_MAX_AGE = 60 * 60 * 1000;   // 1 hour

async function getProducts() {
  const raw = localStorage.getItem(CACHE_KEY);
  if (raw) {
    const { savedAt, data } = JSON.parse(raw);
    if (Date.now() - savedAt &lt; CACHE_MAX_AGE) {
      return data;   // fresh enough — return cached
    }
  }
  // cache missing or stale — fetch fresh
  const data = await fetch("/api/products").then(r =&gt; r.json());
  localStorage.setItem(CACHE_KEY, JSON.stringify({ savedAt: Date.now(), data }));
  return data;
}
// pattern: bundle a timestamp with the data to detect staleness on read.</code></pre>

    <p><strong>Example: distinguishing "never set" from "explicitly empty"</strong></p>
<pre class="language-javascript"><code class="language-javascript">const raw = localStorage.getItem("draft");

if (raw === null) {
  // user has never used the editor before
  showWelcomePrompt();
} else if (raw === "") {
  // user cleared their draft explicitly
  showEmptyEditorState();
} else {
  // user has content to restore
  editor.value = raw;
}
// three distinct UX cases, each handled correctly because we distinguish null from "".</code></pre>

    <p><strong>Example: typed accessor helpers used throughout an app</strong></p>
<pre class="language-javascript"><code class="language-javascript">// storage-helpers.js
export function getString(key, fallback = "") {
  return localStorage.getItem(key) ?? fallback;
}
export function getNumber(key, fallback = 0) {
  const raw = localStorage.getItem(key);
  if (raw === null) return fallback;
  const num = Number(raw);
  return Number.isNaN(num) ? fallback : num;
}
export function getBool(key, fallback = false) {
  const raw = localStorage.getItem(key);
  if (raw === null) return fallback;
  return raw === "true";
}
export function getJSON(key, fallback = null) {
  const raw = localStorage.getItem(key);
  if (raw === null) return fallback;
  try { return JSON.parse(raw); }
  catch { return fallback; }
}

// usage anywhere in the app:
import { getBool, getNumber, getJSON } from "./storage-helpers.js";
const isDark = getBool("darkMode", false);
const count = getNumber("visitCount", 0);
const user = getJSON("user", null);
// callers don't have to remember string coercion rules — helpers handle it.</code></pre>
  `,

  /* 3.2 Connects to */
  'methods-4-1-3-2': `
    <ul>
      <li><strong><code>localStorage.setItem()</code></strong> → the write counterpart to getItem</li>
      <li><strong><code>localStorage.removeItem()</code></strong> → deletes a key so getItem returns null again</li>
      <li><strong><code>localStorage.clear()</code></strong> → after this, every getItem returns null</li>
      <li><strong><code>localStorage.length</code></strong> → count of stored keys (for iteration)</li>
      <li><strong><code>localStorage.key(index)</code></strong> → get a key by index (rarely needed)</li>
      <li><strong><code>JSON.parse()</code></strong> → needed to read stored objects/arrays</li>
      <li><strong><code>Number()</code>, <code>parseInt()</code></strong> → coerce stored numbers back to real numbers</li>
      <li><strong>Nullish coalescing (<code>??</code>)</strong> → default only when null, preserves empty strings</li>
      <li><strong>Logical OR (<code>||</code>)</strong> → default when null or empty (looser but common)</li>
      <li><strong>Strict equality (<code>===</code>)</strong> → the correct way to compare stored strings and check for null</li>
      <li><strong>The "storage" event</strong> → fires when storage changes in ANOTHER tab (cross-tab sync)</li>
      <li><strong>DevTools Application/Storage panel</strong> → inspect all stored values live</li>
    </ul>
  `,

  /* 3.3 See also */
  'methods-4-1-3-3': `
    <ul>
      <li><code>localStorage.setItem()</code></li>
      <li><code>localStorage.removeItem()</code></li>
      <li><code>localStorage.clear()</code></li>
      <li><code>sessionStorage.getItem()</code></li>
      <li><code>JSON.parse()</code></li>
      <li><code>Number()</code>, <code>parseInt()</code></li>
      <li>Nullish coalescing (<code>??</code>)</li>
      <li>Truthy vs falsy values</li>
      <li>The "storage" event</li>
      <li>DevTools Application/Storage panel</li>
    </ul>
  `,

  /* ========================================================= 
   Sub-lesson: 5.5.3 Storage → localStorage.removeItem()
 =======================================================*/

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'methods-4-2-0-0': `
    <p><strong><code>localStorage.removeItem(key)</code></strong> is a built-in browser method that deletes one specific key from the browser's storage. You pass in the key you want to erase, and the browser removes that entry entirely — the key and its value both disappear from the storage bucket. After removal, calling <code>getItem</code> on that same key returns <code>null</code>, exactly as if the value had never been saved.</p>
    <p>It's the "clean up after myself" method. Where <code>setItem</code> adds and <code>getItem</code> reads, <code>removeItem</code> deletes. Only one key at a time — if you want to remove several, you call <code>removeItem</code> for each one. If you want to remove everything, use <code>clear()</code> instead. If you call <code>removeItem</code> on a key that doesn't exist, nothing happens; no error is thrown, the storage is unchanged, execution continues normally.</p>
  `,

  /* 0.1 Syntax */
  'methods-4-2-0-1': `
<pre class="language-javascript"><code class="language-javascript">// Basic form — one argument: the key to remove
localStorage.removeItem("theme");

// Safe on missing keys — no error, silently does nothing
localStorage.removeItem("wasNeverSaved");   // ok

// Remove multiple keys — one call each
localStorage.removeItem("theme");
localStorage.removeItem("draft");
localStorage.removeItem("cart");

// Common pattern: remove-then-set for a "clear and reset" flow
localStorage.removeItem("draft");
localStorage.setItem("draft", "");

// Returns undefined — the return value isn't useful
const result = localStorage.removeItem("theme");   // undefined

// After removal, getItem returns null
localStorage.setItem("theme", "dark");
localStorage.removeItem("theme");
localStorage.getItem("theme");   // null</code></pre>

    <p>Shape: <code>localStorage.removeItem(key)</code>. Returns <code>undefined</code>. Silent if the key doesn't exist.</p>
  `,

  /* 0.2 Anatomy / Breakdown */
  'methods-4-2-0-2': `
<pre class="language-javascript"><code class="language-javascript">localStorage.removeItem("theme");
// │           │           │
// │           │           └── the KEY to remove — coerced to string
// │           └── the method name
// └── the localStorage object

// what the browser does under the hood:
// 1. converts the key to a string (via String()).
// 2. checks the origin's storage bucket for a matching entry.
// 3. if found → deletes the key and its value from the bucket.
//    - the write is committed synchronously to disk.
//    - any listener on the "storage" event in OTHER tabs is notified.
// 4. if not found → does nothing. no error, no warning, no return value.
// 5. returns undefined either way.

// what removeItem does NOT do:
// - it does NOT return the deleted value (unlike some other APIs).
// - it does NOT accept multiple keys — one call per key.
// - it does NOT throw if the key is missing.
// - it does NOT free memory or optimize storage — it just removes the entry.
// - it does NOT affect other origins or other browsers.

// what you should think of it as:
// - "unset this specific slot in my origin's storage bucket."
// - after the call, the slot is empty (equivalent to never having been set).
// - the change is permanent and immediate.</code></pre>
  `,

  /* 0.3 Syntax Details That Matter */
  'methods-4-2-0-3': `
    <p><strong>The key must match exactly — case-sensitive.</strong> Just like <code>getItem</code> and <code>setItem</code>, the key comparison is exact. A tiny casing difference means the removal targets nothing:</p>
<pre class="language-javascript"><code class="language-javascript">localStorage.setItem("userName", "Alice");
localStorage.removeItem("username");   // does NOTHING — different case
localStorage.getItem("userName");       // "Alice" — still there
localStorage.removeItem("userName");   // now removed
localStorage.getItem("userName");       // null</code></pre>

    <p><strong>Removing a nonexistent key is silent — no error, no warning.</strong> This is a design choice that makes cleanup code safer, but can also hide bugs where you assumed a value was being cleaned up but never was:</p>
<pre class="language-javascript"><code class="language-javascript">localStorage.removeItem("keyThatDoesntExist");   // no error, does nothing
// this is fine for cleanup: "remove if present, otherwise skip."
// but it also means if you TYPO the key, you'll never know it didn't work.
// fix: verify with getItem after removal, or use a shared constant for keys.</code></pre>

    <p><strong>Returns <code>undefined</code>.</strong> Not the removed value, not a boolean success/fail — just <code>undefined</code>. Don't try to use the return value:</p>
<pre class="language-javascript"><code class="language-javascript">const removed = localStorage.removeItem("theme");   // undefined
console.log(removed);   // undefined
if (removed) { }         // always false — nothing to check

// if you need to know what WAS there before removing, read first:
const oldValue = localStorage.getItem("theme");
localStorage.removeItem("theme");
console.log("removed:", oldValue);</code></pre>

    <p><strong>The removal is immediate and synchronous.</strong> Once <code>removeItem</code> returns, the value is gone from storage on disk. There's no async operation, no queue, no "pending" state:</p>
<pre class="language-javascript"><code class="language-javascript">localStorage.setItem("theme", "dark");
localStorage.removeItem("theme");
localStorage.getItem("theme");   // null — immediately, no delay

// even a page reload wouldn't restore it. it's gone from disk.</code></pre>

    <p><strong>It triggers the <code>storage</code> event in OTHER tabs.</strong> If your site is open in multiple tabs at the same origin, removing a key in one tab fires a <code>storage</code> event in every other tab. Not in the tab that did the removal — only in siblings:</p>
<pre class="language-javascript"><code class="language-javascript">// Tab A:
window.addEventListener("storage", (e) =&gt; {
  console.log("storage changed:", e.key, "new value:", e.newValue);
});

// Tab B:
localStorage.removeItem("theme");
// Tab A sees: "storage changed: theme new value: null"
// (newValue is null for removals; oldValue holds what was there)</code></pre>

    <p><strong>It only affects the current origin.</strong> Removing from one origin doesn't touch another. <code>example.com</code> can't remove keys from <code>othersite.com</code>. Subdomains and protocols count as different origins here too.</p>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'methods-4-2-1-0': `
    <p>Once you start saving to localStorage, you also need to be able to un-save. A user logs out — their session key needs to go. A draft gets submitted — you don't want it to reappear next time. A cache goes stale — the old value has to be cleared out to make room for a fresh one. Without a way to remove individual keys, storage would just grow forever, and old data would leak into new features.</p>
    <p><code>removeItem</code> is the answer for one-key-at-a-time cleanup. It's the standard "I'm done with this specific value, delete it" tool. Precise and surgical, not blunt — it doesn't touch anything else in storage. Compared to <code>clear()</code> (which wipes everything), <code>removeItem</code> lets you keep the useful stuff and drop only the parts that no longer belong.</p>
  `,

  /* 1.1 Why use it */
  'methods-4-2-1-1': `
    <p>Because you can't fix data problems with more data. If a stored value goes bad (corrupt JSON, wrong shape, obsolete key names), the fix is often to delete the entry and let the next flow re-create it clean. Overwriting with a "reset" value works, but sometimes leaves half-formed keys hanging around. <code>removeItem</code> removes them cleanly, so the app's next boot sees a clean slate for that specific piece of state.</p>
    <p>It's also the correct tool for privacy-sensitive cleanup. If your app stores tokens, drafts, or preferences that the user might want cleared without wiping their whole browser storage, <code>removeItem</code> lets you delete just what you own. On logout especially, removing the auth-related keys is a small but important gesture that avoids leaving credentials sitting around after the user has "left."</p>
  `,

  /* 1.2 Where you use it */
  'methods-4-2-1-2': `
<pre class="language-javascript"><code class="language-javascript">// On logout — remove auth-related keys
function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("userId");
  localStorage.removeItem("refreshToken");
  redirect("/login");
}

// After a form successfully submits — clear the autosaved draft
form.addEventListener("submit", async (e) =&gt; {
  e.preventDefault();
  await submit(readForm());
  localStorage.removeItem("draft");   // no need to restore it next time
});

// Clearing a stale cache
async function refreshCache(key) {
  localStorage.removeItem(key);        // wipe old
  const fresh = await fetchFreshData();
  localStorage.setItem(key, JSON.stringify(fresh));
}

// Feature-flag cleanup after a rollout
localStorage.removeItem("betaFeatureFlag");   // no longer needed

// Removing a dismissed-once banner if the user "re-enables" tips
tipToggle.addEventListener("change", () =&gt; {
  if (tipToggle.checked) {
    localStorage.removeItem("tipDismissed");   // tip will show again
  } else {
    localStorage.setItem("tipDismissed", "true");
  }
});

// Invalidating a broken value instead of trying to fix it
try {
  const parsed = JSON.parse(localStorage.getItem("settings"));
  useSettings(parsed);
} catch {
  console.warn("settings storage is corrupt, resetting");
  localStorage.removeItem("settings");   // let the next load recreate it
}

// Migrating away from an old key name
if (localStorage.getItem("old_userPref")) {
  localStorage.setItem("userPref", localStorage.getItem("old_userPref"));
  localStorage.removeItem("old_userPref");   // don't leave behind the old key
}

// Cleaning up user-scoped keys on account switch
function switchAccount(newUserId) {
  localStorage.removeItem("cart_" + currentUserId);
  localStorage.removeItem("recentlyViewed_" + currentUserId);
  currentUserId = newUserId;
}

// Undo a temporary override
document.querySelector(".reset-theme").addEventListener("click", () =&gt; {
  localStorage.removeItem("theme");   // fall back to whatever the default is
  document.body.dataset.theme = defaultTheme;
});</code></pre>

    <p>General rule: any time a stored value has outlived its usefulness — session ended, draft submitted, cache stale, migration done — <code>removeItem</code> is the tool.</p>
  `,

  /* 1.3 Plain English explanation */
  'methods-4-2-1-3': `
    <p>Imagine the browser's storage as a filing cabinet full of labeled folders. <code>setItem</code> puts a folder in. <code>getItem</code> pulls a folder out to look at. <code>removeItem</code> throws a folder in the trash. The label and the contents are both gone; the drawer where the folder used to sit is now empty.</p>
    <p>You don't have to check if the folder exists before throwing it away. If it's not there, nothing happens — no drama, no error, the cabinet is unchanged. And you only trash one folder at a time; if you want to empty the whole cabinet, that's a different tool. This one is precise. It removes exactly what you name, leaves the rest alone, and moves on.</p>
  `,

  /* 1.4 Mental model */
  'methods-4-2-1-4': `
    <p>Think of localStorage as a whiteboard mounted on a wall. <code>setItem</code> writes a labeled line: "theme = dark". <code>getItem</code> reads a line by its label. <code>removeItem</code> is you walking up to the whiteboard with an eraser and wiping off one specific labeled line — just the "theme = dark" line, nothing else. The other lines stay untouched.</p>
    <p>If the line you're trying to erase isn't there, you just wave the eraser over an empty spot. No harm done. If someone in the next room is watching a mirror of your whiteboard (another tab on the same origin), they see the line vanish in real time — that's the "storage" event firing.</p>
    <p>The whiteboard is your app's private notes area. Erasing is local, precise, and immediate. Nothing about the erasure is queued or delayed — the moment you swipe the eraser, that line is gone from every reader's view.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'methods-4-2-1-5': `
<pre class="language-javascript"><code class="language-javascript">// A logout flow: user clicks Log Out, we clear their session data.

const logoutBtn = document.querySelector(".logout");

logoutBtn.addEventListener("click", () =&gt; {
  // Before: storage has these keys:
  //   token → "eyJhbGc..."
  //   userId → "42"
  //   theme → "dark"
  //   cart → "[...]"
  //   language → "en"

  localStorage.removeItem("token");
  localStorage.removeItem("userId");
  localStorage.removeItem("cart");

  window.location.href = "/login";
});

// step by step:
// 1. click event fires. handler runs.
// 2. localStorage.removeItem("token") runs.
//    - browser looks up "token" in the origin's storage bucket.
//    - finds it → deletes the entry (key + value).
//    - write is committed to disk immediately.
//    - other tabs on the same origin get a "storage" event: key="token", newValue=null.
// 3. localStorage.removeItem("userId") runs. same sequence.
//    - "userId" found → deleted.
//    - other tabs notified.
// 4. localStorage.removeItem("cart") runs. same sequence.
// 5. after all three calls, storage now contains:
//    theme → "dark"
//    language → "en"
//    ("token", "userId", "cart" are gone)
// 6. window.location.href = "/login" navigates to the login page.
//
// notice we DIDN'T remove "theme" or "language" — those are user preferences
// that should persist across logins. removeItem lets us keep them.
// this is the whole point vs. clear() which would delete everything.
//
// on the login page:
// - localStorage.getItem("token") → null (deleted)
// - localStorage.getItem("theme") → "dark" (still there, UI opens in dark mode)
// - if the user opens another tab: it also sees token as null (storage event fired).</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'methods-4-2-2-0': `
    <p>When <code>removeItem</code> "isn't removing":</p>
<pre class="language-javascript"><code class="language-javascript">// symptom: I called removeItem but the value is still in getItem
console.log("before:", localStorage.getItem("theme"));
localStorage.removeItem("theme");
console.log("after:", localStorage.getItem("theme"));

// if "after" is still the old value, one of these is happening:
// 1. Typo in the key — removeItem targeted a different key than what's stored.
//    Compare exact spellings and case.
// 2. Wrong origin — you're inspecting one origin (like localhost:5173)
//    but the code ran on another (localhost:3000).
//    Check location.origin.
// 3. Another code path IMMEDIATELY re-saved the value after your removal.
//    Add a console.log inside your setItem calls to spot the re-save.

// symptom: I want to know if removeItem actually removed something
// (removeItem doesn't tell you). Read first, then remove:
const oldValue = localStorage.getItem("theme");
localStorage.removeItem("theme");
console.log("removed:", oldValue === null ? "nothing was there" : oldValue);

// symptom: value comes back after a page reload
// - localStorage IS persistent — if removeItem worked, the value stays gone.
// - if the value comes back on reload, your app's startup code is re-creating it.
// - search your code for setItem on that key and check if it runs unconditionally.

// symptom: value comes back after a navigation
// - could be from a different tab. localStorage is shared per origin.
// - subscribe to the "storage" event to watch cross-tab changes:
window.addEventListener("storage", (e) =&gt; {
  console.log(e.key, "changed to:", e.newValue);
});</code></pre>

    <p>Inspect live in DevTools: Application (or Storage) tab → Local Storage → your origin. You'll see the remove happen in real time.</p>
  `,

  /* 2.1 The part that makes it click */
  'methods-4-2-2-1': `
    <p>The aha: <strong><code>removeItem</code> gives you fine control that <code>clear()</code> doesn't.</strong> <code>clear()</code> is a bulldozer — it removes every single key from your origin, including preferences you'd want to keep. <code>removeItem</code> is a scalpel — remove exactly the keys that no longer belong, keep everything else intact:</p>
<pre class="language-javascript"><code class="language-javascript">// storage contains:
//   token, userId, cart          ← session data (should die on logout)
//   theme, language, tipDismissed ← user preferences (should survive logout)

// wrong tool — clear() nukes preferences too
localStorage.clear();
// user logs back in and finds their theme reset and tips reappearing. bad UX.

// right tool — removeItem picks off just the session data
localStorage.removeItem("token");
localStorage.removeItem("userId");
localStorage.removeItem("cart");
// preferences persist. user logs back in to a familiar-feeling app.</code></pre>
    <p>Once that clicks, you stop reaching for <code>clear()</code> as the default cleanup and start being specific about what needs to go. A well-behaved app knows which keys are transient and which are permanent, and removes them accordingly.</p>
  `,

  /* 2.2 Common confusions */
  'methods-4-2-2-2': `
    <p><strong>"Does removeItem actually delete the data or just hide it?"</strong> It actually deletes it. The key is gone from storage on disk. Reloading the page won't bring it back. Opening a new tab won't bring it back. It's permanently removed for this origin. If you want to "hide" a value while keeping it around, save it under a different key or store a flag alongside it.</p>

    <p><strong>"What's the difference between removeItem and setItem with an empty value?"</strong> They leave storage in different states. <code>setItem(key, "")</code> keeps the key with an empty string as its value — <code>getItem</code> returns <code>""</code>. <code>removeItem(key)</code> deletes the key entirely — <code>getItem</code> returns <code>null</code>. Use removeItem when you want the key to "not exist"; use setItem("") when you want the key to exist but be blank.</p>

    <p><strong>"Does removeItem fire the storage event in my current tab?"</strong> No. Only in OTHER tabs on the same origin. This is intentional — the tab that made the change already knows it happened. If you need to react to your own removals, do it right after the call, in the same code path.</p>

    <p><strong>"Can I remove multiple keys at once?"</strong> Not with a single call. removeItem takes one key. You call it repeatedly, or you use a loop. For "remove everything," use <code>clear()</code>. There's no "remove all keys starting with foo_" built-in either — you'd loop over <code>Object.keys(localStorage)</code> and filter.</p>

    <p><strong>"What happens if I remove a key that doesn't exist?"</strong> Nothing happens. No error, no warning, no return signal. This is safe — you can call removeItem in cleanup code without checking existence first. But it also means typos in key names are silent, so use constants for key names if you're calling remove in a lot of places.</p>

    <p><strong>"Does removeItem work in incognito?"</strong> Yes, same as setItem. In incognito, storage exists for the browsing session and gets cleared when the session ends. Your removeItem calls work normally during the session.</p>

    <p><strong>"Should I removeItem on unload to clean up?"</strong> Usually no. That defeats the whole point of localStorage (persistence). If a value is meant to be per-session, save it with <code>sessionStorage</code> instead — the browser cleans it up automatically. Reserve removeItem for meaningful cleanup like logout, submission, or explicit "reset" actions.</p>
  `,

  /* 2.3 Common mistakes */
  'methods-4-2-2-3': `
<pre class="language-javascript"><code class="language-javascript">// Mistake 1: typo in the key — silent failure
localStorage.setItem("userName", "Alice");
localStorage.removeItem("username");   // wrong case → does nothing
localStorage.getItem("userName");       // "Alice" — still there
// fix: use a constant
const KEY_USERNAME = "userName";
localStorage.setItem(KEY_USERNAME, "Alice");
localStorage.removeItem(KEY_USERNAME);   // now consistent

// Mistake 2: expecting removeItem to return the removed value
const removed = localStorage.removeItem("theme");   // undefined, always
if (removed) { }   // always false
// fix: read first, then remove
const oldValue = localStorage.getItem("theme");
localStorage.removeItem("theme");
console.log("removed:", oldValue);

// Mistake 3: using clear() when you meant removeItem
function logout() {
  localStorage.clear();   // ✗ wipes theme, language, ALL preferences
}
// fix: remove only what belongs to the session
function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("userId");
  localStorage.removeItem("cart");
}

// Mistake 4: using setItem(key, null) instead of removeItem
localStorage.setItem("token", null);   // stores the STRING "null"
localStorage.getItem("token");           // "null" — not null
localStorage.getItem("token") === null;  // false
// fix:
localStorage.removeItem("token");

// Mistake 5: using setItem(key, "") to "delete"
localStorage.setItem("token", "");
localStorage.getItem("token") === null;   // false — key still exists with empty value
if (localStorage.getItem("token")) { }     // false, but code checking existence with === null is broken
// fix:
localStorage.removeItem("token");

// Mistake 6: removing then immediately re-saving (accidentally)
function updateTheme(newTheme) {
  localStorage.removeItem("theme");     // ✗ pointless
  localStorage.setItem("theme", newTheme);   // setItem overwrites anyway
}
// fix: just setItem
function updateTheme(newTheme) {
  localStorage.setItem("theme", newTheme);
}

// Mistake 7: forgetting to remove related keys on logout
function logout() {
  localStorage.removeItem("token");   // ✗ leaves userId, cart, etc.
}
// fix: remove ALL session-related keys
function logout() {
  ["token", "userId", "cart", "refreshToken"].forEach(k =&gt; {
    localStorage.removeItem(k);
  });
}

// Mistake 8: removing a value in a loop that's iterating storage
for (let i = 0; i &lt; localStorage.length; i++) {
  const key = localStorage.key(i);
  if (key.startsWith("temp_")) {
    localStorage.removeItem(key);   // ✗ mutating during iteration skips keys
  }
}
// fix: collect first, remove second
const toRemove = [];
for (let i = 0; i &lt; localStorage.length; i++) {
  const key = localStorage.key(i);
  if (key.startsWith("temp_")) toRemove.push(key);
}
toRemove.forEach(k =&gt; localStorage.removeItem(k));

// Mistake 9: assuming removeItem prevents future save
localStorage.removeItem("draft");
// ... user types in editor ...
// autosave handler runs setItem("draft", ...) again — the key comes right back
// fix: also disable/remove the autosave, or clear the input the autosave reads from

// Mistake 10: expecting removeItem to trigger your own storage event
window.addEventListener("storage", handler);   // only fires in OTHER tabs
localStorage.removeItem("theme");
// handler doesn't run in THIS tab. that's by design.
// if you need same-tab reaction, dispatch your own event or call the handler directly.</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'methods-4-2-3-0': `
<pre class="language-javascript"><code class="language-javascript">// Basic — remove one key
localStorage.setItem("theme", "dark");
localStorage.removeItem("theme");
localStorage.getItem("theme");   // null

// Safe on nonexistent keys
localStorage.removeItem("neverExisted");   // no error, does nothing

// Read before remove
const oldValue = localStorage.getItem("draft");
localStorage.removeItem("draft");
console.log("was:", oldValue);

// Remove multiple keys
["token", "userId", "cart"].forEach(k =&gt; localStorage.removeItem(k));

// Conditional remove
if (localStorage.getItem("expiredCache")) {
  localStorage.removeItem("expiredCache");
}

// Remove and set fallback
localStorage.removeItem("theme");
document.body.dataset.theme = "light";   // default

// A cleanup helper
function clearSessionKeys() {
  const sessionKeys = ["token", "userId", "cart", "refreshToken"];
  sessionKeys.forEach(k =&gt; localStorage.removeItem(k));
}

// Filter and remove by prefix
Object.keys(localStorage)
  .filter(k =&gt; k.startsWith("draft_"))
  .forEach(k =&gt; localStorage.removeItem(k));

// Migration: copy under new key, remove old
const oldPref = localStorage.getItem("old_pref");
if (oldPref) {
  localStorage.setItem("pref", oldPref);
  localStorage.removeItem("old_pref");
}

// Reset a single value while keeping the key
localStorage.removeItem("draft");
localStorage.setItem("draft", "");   // now exists but empty

// Remove and verify
localStorage.removeItem("theme");
if (localStorage.getItem("theme") === null) {
  console.log("removed successfully");
}</code></pre>
  `,

  /* 3.1 Real website uses */
  'methods-4-2-3-1': `
    <p><strong>Example: proper logout that keeps preferences</strong></p>
<pre class="language-javascript"><code class="language-javascript">const SESSION_KEYS = ["token", "userId", "refreshToken", "cart"];
const PREFERENCE_KEYS = ["theme", "language", "tipDismissed"];

function logout() {
  // remove only what belongs to the session
  SESSION_KEYS.forEach(k =&gt; localStorage.removeItem(k));
  // preferences stay — user sees their theme applied on the login page
  window.location.href = "/login";
}
// contrast with localStorage.clear() which would erase preferences too.</code></pre>

    <p><strong>Example: clearing a draft after a successful submission</strong></p>
<pre class="language-javascript"><code class="language-javascript">const form = document.querySelector("#submit-form");
const editor = form.querySelector("textarea");

// autosave as the user types
editor.addEventListener("input", () =&gt; {
  localStorage.setItem("blogDraft", editor.value);
});

// on successful submit, clear the draft
form.addEventListener("submit", async (e) =&gt; {
  e.preventDefault();
  try {
    await submitPost(readForm());
    localStorage.removeItem("blogDraft");   // don't restore it next time
    editor.value = "";
    showToast("Posted!");
  } catch (err) {
    // on failure, KEEP the draft so the user doesn't lose their work
    showToast("Failed to post. Your draft is saved.");
  }
});</code></pre>

    <p><strong>Example: invalidating a corrupted stored value</strong></p>
<pre class="language-javascript"><code class="language-javascript">function loadSettings() {
  const raw = localStorage.getItem("settings");
  if (!raw) return DEFAULT_SETTINGS;
  
  try {
    const parsed = JSON.parse(raw);
    if (!isValidSettings(parsed)) throw new Error("shape mismatch");
    return parsed;
  } catch (err) {
    console.warn("settings storage is corrupt, resetting:", err);
    localStorage.removeItem("settings");   // let next save recreate it
    return DEFAULT_SETTINGS;
  }
}</code></pre>

    <p><strong>Example: migrating away from old key names</strong></p>
<pre class="language-javascript"><code class="language-javascript">// After a rename: "userPref" → "userPreferences"
// One-time migration on app startup

const legacy = localStorage.getItem("userPref");
if (legacy) {
  localStorage.setItem("userPreferences", legacy);
  localStorage.removeItem("userPref");   // don't leave the old key behind
}
// after this runs once, only the new key is in storage.
// future visits see nothing to migrate and skip the migration entirely.</code></pre>

    <p><strong>Example: clearing per-user data on account switch</strong></p>
<pre class="language-javascript"><code class="language-javascript">function switchAccount(newUserId) {
  // remove keys scoped to the current user
  const userSpecificKeys = [
    "cart_" + currentUserId,
    "recentlyViewed_" + currentUserId,
    "notifications_" + currentUserId,
  ];
  userSpecificKeys.forEach(k =&gt; localStorage.removeItem(k));
  
  currentUserId = newUserId;
  loadUserData(newUserId);
}
// each user's data is scoped by key, so removing them cleanly separates accounts.
// alternative: prefix ALL user keys and use a Object.keys filter to bulk-remove.</code></pre>

    <p><strong>Example: "un-dismiss" a tip</strong></p>
<pre class="language-javascript"><code class="language-javascript">const tipToggle = document.querySelector(".show-tips-toggle");

tipToggle.addEventListener("change", () =&gt; {
  if (tipToggle.checked) {
    // user wants tips again — remove the "dismissed" flag entirely
    localStorage.removeItem("tipDismissed");
    location.reload();   // re-render with tips visible
  } else {
    // user is opting out
    localStorage.setItem("tipDismissed", "true");
  }
});
// using removeItem for the "on" case cleans up the storage back to its
// default state, rather than storing an explicit "false" value.</code></pre>
  `,

  /* 3.2 Connects to */
  'methods-4-2-3-2': `
    <ul>
      <li><strong><code>localStorage.setItem()</code></strong> → the write counterpart</li>
      <li><strong><code>localStorage.getItem()</code></strong> → after removeItem, returns null for that key</li>
      <li><strong><code>localStorage.clear()</code></strong> → remove ALL keys at once (blunt instrument)</li>
      <li><strong><code>localStorage.length</code></strong> → decreases by one after a successful remove</li>
      <li><strong><code>Object.keys(localStorage)</code></strong> → to iterate and filter keys before removing</li>
      <li><strong>The "storage" event</strong> → fires in OTHER tabs when a key is removed here</li>
      <li><strong><code>sessionStorage.removeItem()</code></strong> → same API for session-scoped storage</li>
      <li><strong>Logout flows</strong> → primary use case for removeItem</li>
      <li><strong>Cache invalidation</strong> → the "delete stale entry" step of caching</li>
      <li><strong>Data migration</strong> → after copying to a new key, remove the old one</li>
      <li><strong>null vs empty string</strong> → removeItem gives null; setItem("") gives ""</li>
    </ul>
  `,

  /* 3.3 See also */
  'methods-4-2-3-3': `
    <ul>
      <li><code>localStorage.setItem()</code></li>
      <li><code>localStorage.getItem()</code></li>
      <li><code>localStorage.clear()</code></li>
      <li><code>sessionStorage.removeItem()</code></li>
      <li><code>Object.keys(localStorage)</code></li>
      <li>The "storage" event</li>
      <li>Cache invalidation</li>
      <li>Logout patterns</li>
      <li>DevTools Application/Storage panel</li>
    </ul>
  `,


});