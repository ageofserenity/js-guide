Object.assign(CONTENT, {

          /* ==========================================================
     SECTION 3: MAIN TOPIC GUIDES / LESSON CONTENT
     COVERS THE BASIC LESSONS 3.12 - 3.13
     ========================================================== */

          /* ==========================================================
     TOPIC 3.12: DOM
     ========================================================== */

/* ========================================================= 
   Sub-lesson: 3.12.1 DOM → what the DOM is
 =======================================================*/

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-11-0-0-0': `
    <p>The <strong>DOM</strong> (Document Object Model) is JavaScript's live, in-memory representation of the HTML page. When the browser loads an HTML file, it doesn't keep the HTML around as raw text — it parses it into a tree of objects, and that tree is what JavaScript can read, change, and respond to. The DOM is that tree.</p>
    <p>Every tag in your HTML — <code>&lt;div&gt;</code>, <code>&lt;p&gt;</code>, <code>&lt;button&gt;</code>, <code>&lt;img&gt;</code> — becomes a JavaScript object. Every piece of text, every attribute, every nested tag, all of it. Once your script runs, "the page" and "the DOM" are the same thing — change the DOM, the page changes.</p>
  `,

  /* 0.1 Syntax */
  'topics-11-0-0-1': `
<pre class="language-javascript"><code class="language-javascript">// Given this HTML:
// <h1 id="title">Hello</h1>

// JavaScript can find that h1 in the DOM:
const heading = document.getElementById("title");

console.log(heading);              // <h1 id="title">Hello</h1>
console.log(heading.textContent);  // "Hello"

// And change it. The page updates immediately.
heading.textContent = "Goodbye";

// the user now sees "Goodbye" on the page.
// no reload, no refresh — the DOM IS the page.</code></pre>
    <p>The DOM isn't a copy of the HTML you're working with on the side — it's the live thing. Every change to the DOM is a change to what the user sees, the moment it happens.</p>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-11-0-0-2': `
<pre class="language-javascript"><code class="language-javascript">// HTML:
// &lt;body&gt;
//   &lt;h1&gt;Welcome&lt;/h1&gt;
//   &lt;p&gt;Hello, &lt;strong&gt;world&lt;/strong&gt;!&lt;/p&gt;
// &lt;/body&gt;

// becomes a tree of nested DOM objects:
//
//   document
//    └── &lt;html&gt;
//         └── &lt;body&gt;
//              ├── &lt;h1&gt;
//              │    └── "Welcome"           ← text node
//              └── &lt;p&gt;
//                   ├── "Hello, "            ← text node
//                   ├── &lt;strong&gt;
//                   │    └── "world"         ← text node
//                   └── "!"                  ← text node

// every box is a JavaScript object with properties and methods.
// the objects are CONNECTED — each one knows its parent, its children, its siblings.
// JavaScript can walk this tree, modify any node, add new ones, remove old ones.</code></pre>

<p>The "tree" structure isn't just a metaphor — the DOM literally has parent/child/sibling relationships you can navigate in code. <code>element.parentNode</code>, <code>element.children</code>, <code>element.nextSibling</code> all walk the tree.</p>
`,

  /* 0.3 Syntax Details That Matter */
  'topics-11-0-0-3': `
    <p><strong>The DOM exists at runtime, not in the HTML file.</strong> When you save an HTML file, the file has text. The DOM only comes into existence when the browser loads the file and parses it into objects:</p>
<pre class="language-javascript"><code class="language-javascript">// the HTML file (on disk) is just text:
//   <h1>Hello</h1>

// when the browser opens the page:
//   1. it reads the text
//   2. parses it into a tree of objects
//   3. attaches that tree to "document"
//   4. JavaScript can now interact with it

// closing the page or refreshing destroys the DOM. saving a fresh HTML file
// doesn't update an open DOM — the user has to reload for that.</code></pre>

    <p><strong>Changing the DOM updates the visible page. Changing the HTML file does not.</strong> This is the part that surprises beginners — your script's changes are real but temporary:</p>
<pre class="language-javascript"><code class="language-javascript">document.getElementById("title").textContent = "New Title";

// the page on screen now shows "New Title".
// but the HTML file on disk is unchanged.
// reload the page → the DOM is rebuilt from the (unchanged) file → "New Title" is gone.

// to make changes persist, you need:
//   - localStorage / sessionStorage (saves data the script can re-apply on reload)
//   - a server / database (saves data that comes back on reload)
//   - editing the actual HTML file (saves the change permanently in the file)</code></pre>

    <p><strong>The DOM is JavaScript's only way to interact with the page.</strong> There's no "look at the HTML directly" — even reading the HTML goes through the DOM:</p>
<pre class="language-javascript"><code class="language-javascript">// reading the page's content
console.log(document.body.innerHTML);   // string of HTML inside body
console.log(document.title);            // page title
console.log(document.URL);              // current URL

// reading specific elements
const button = document.querySelector("button");
console.log(button.textContent);        // button's visible text

// no part of "interact with the page" works without the DOM.
// every JavaScript task that touches the page goes through document.</code></pre>

    <p><strong>The DOM is the same tree no matter how you got to it.</strong> Different selection methods (<code>getElementById</code>, <code>querySelector</code>, etc.) are different ways of <em>finding</em> nodes in the tree, but the tree itself is the same:</p>
<pre class="language-javascript"><code class="language-javascript">// these find the SAME element three different ways
const a = document.getElementById("title");
const b = document.querySelector("#title");
const c = document.getElementsByTagName("h1")[0];

console.log(a === b);   // true (if there's only one h1, c too)

// changing one changes all of them, because they're all pointing at the same DOM node.
a.textContent = "Updated";
console.log(b.textContent);   // "Updated"</code></pre>

    <p><strong>The DOM and HTML are similar but not identical.</strong> The HTML file is the input; the DOM is what the browser builds from it. The browser may correct, fill in, or restructure things along the way:</p>
<pre class="language-javascript"><code class="language-javascript">// HTML file:
//   <table><tr><td>Hi</td></tr></table>
//
// DOM that the browser builds:
//   <table>
//     <tbody>      ← browser inserted this automatically
//       <tr>
//         <td>Hi</td>
//       </tr>
//     </tbody>
//   </table>

// the source HTML didn't have <tbody>. the DOM does.
// rule: when JavaScript looks at the DOM, it sees what the BROWSER has —
// not necessarily what's in the file.</code></pre>

    <p><strong>The DOM has a starting object: <code>document</code>.</strong> Every script can access it without doing anything special — it's a global the browser provides:</p>
<pre class="language-javascript"><code class="language-javascript">// document is automatically available
console.log(document);                 // the entire page object
console.log(document.title);           // page title
console.log(document.body);            // <body> element
console.log(document.head);            // <head> element

// almost every DOM task starts with document.
// it's the root of the tree.</code></pre>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-11-0-1-0': `
    <p>Without the DOM, JavaScript would just be a calculator running in the background — it could compute things but not show them, react to clicks, or change the page. The DOM is the bridge between "JavaScript code" and "what the user sees and does."</p>
    <p>It also solves the problem of representing HTML in a way code can manipulate. Raw HTML text is hard to work with — you'd have to write a parser to find a specific tag and another to safely change it. The DOM does that work for you and gives you objects and methods that are designed to be modified.</p>
  `,

  /* 1.1 Why use it */
  'topics-11-0-1-1': `
    <p>Almost everything interactive a website does is the DOM in action:</p>
<pre class="language-javascript"><code class="language-javascript">// Updating text — changes what the user reads
document.getElementById("count").textContent = "5 items in cart";

// Showing/hiding things — changes the layout
document.querySelector(".loading").style.display = "none";

// Adding new elements — builds dynamic content
const li = document.createElement("li");
li.textContent = "New task";
document.querySelector("ul").appendChild(li);

// Reading user input — the page tells JavaScript what's typed
const input = document.querySelector("input").value;

// Reacting to clicks — the page tells JavaScript when things happen
document.querySelector("button").addEventListener("click", handleClick);

// Removing things — clearing or replacing content
document.querySelector(".popup").remove();

// every line above is a DOM operation. without the DOM, none of this works.</code></pre>

    <p>Every modern web app — search results, social feeds, shopping carts, chat windows — is built on these basic DOM operations, repeated and combined.</p>
  `,

  /* 1.2 Where you use it */
  'topics-11-0-1-2': `
<pre class="language-javascript"><code class="language-javascript">// Reading page content
const title = document.title;
const text = document.querySelector("p").textContent;

// Updating what's shown
document.getElementById("status").textContent = "Saved!";

// Building new content
const div = document.createElement("div");
div.textContent = "Hello";
document.body.appendChild(div);

// Reacting to user actions
document.querySelector("button").addEventListener("click", () => {
  alert("clicked");
});

// Reading form input
const name = document.querySelector("#name-field").value;

// Toggling visibility
document.querySelector(".menu").classList.toggle("open");

// Walking the page structure
const list = document.querySelector("ul");
const items = list.children;
const first = list.firstChild;
const parent = list.parentNode;

// every browser-based interactive task touches the DOM somewhere.</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-11-0-1-3': `
    <p>The HTML file is a recipe. The DOM is the cake the browser baked from it. Once the browser has baked the cake, working with the recipe is irrelevant — you work with the cake. JavaScript is in the kitchen with the cake, free to add frosting, slice it, replace a layer, decorate it. The user sees the cake change in real time.</p>
    <p>The recipe (the HTML file) is also still around. If someone re-bakes (reloads the page), they get a fresh cake from the original recipe — none of your decorations carry over. That's why DOM changes are temporary unless you also save them somewhere.</p>
    <p>Every other DOM lesson in this guide is about ways to interact with the cake — finding a piece of it, reading what's there, changing it, adding to it, listening for someone to poke it. <code>document</code> is the kitchen counter where the cake sits.</p>
  `,

  /* 1.4 Mental model */
  'topics-11-0-1-4': `
    <p>Picture an upside-down family tree. At the top is one root: <code>document</code>. Below it, branches spread out. <code>&lt;html&gt;</code> is the trunk. <code>&lt;head&gt;</code> and <code>&lt;body&gt;</code> are the first two branches. From <code>&lt;body&gt;</code>, more branches: every <code>&lt;div&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;p&gt;</code>, all branching out. At the very tips of the tree are the leaves: text and small elements like images.</p>
    <p>The DOM is that tree. Every box is a JavaScript object. Every connection between boxes is a parent/child relationship you can navigate in code. JavaScript can climb up (find a parent), climb down (find a child), or jump sideways (find a sibling). It can also chop off a branch (remove an element), graft a new one on (add an element), or paint a leaf (change text or styles).</p>
    <p>The user only sees the leaves and the visible parts of the branches. But the whole tree is there in memory, available for JavaScript to inspect or change at any time.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-11-0-1-5': `
<pre class="language-javascript"><code class="language-javascript">// HTML on the page:
// <body>
//   <h1 id="greeting">Hello</h1>
//   <button id="changeBtn">Change</button>
// </body>

// JavaScript:
const heading = document.getElementById("greeting");
const button = document.getElementById("changeBtn");

button.addEventListener("click", () => {
  heading.textContent = "Hi there!";
});

// what's happening, step by step:
// 1. Browser loads the HTML file.
// 2. Browser parses it into the DOM:
//      document
//        └── <html>
//             └── <body>
//                  ├── <h1 id="greeting">Hello</h1>
//                  └── <button id="changeBtn">Change</button>
// 3. Browser runs the script.
// 4. document.getElementById("greeting") walks the tree, finds the <h1>,
//    returns the JavaScript object representing it. We name it "heading".
// 5. Same for the button. We name it "button".
// 6. addEventListener attaches a function to the button — "when clicked, run this."
// 7. Script finishes. Page is now interactive.
// 8. User clicks the button.
// 9. Browser fires the click event. Our function runs.
// 10. heading.textContent = "Hi there!" updates the DOM node.
// 11. Browser sees the DOM change. Re-renders the page. User sees "Hi there!".

// the DOM was the connection between the user's click and the visible change.
// without it, step 10 wouldn't have anywhere to update, and step 11 wouldn't have
// anything to re-render.</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-11-0-2-0': `
    <p>If JavaScript "isn't doing anything" to the page, the bug is almost always in the DOM connection — either the script can't find the element, or it's modifying something different than you think. Two checks reveal most of these:</p>
<pre class="language-javascript"><code class="language-javascript">// 1. Did you find the element?
const button = document.getElementById("submit");
console.log(button);   // null means not found

// null shows up when:
//   - the id is misspelled
//   - the element doesn't exist yet (script ran before HTML was parsed)
//   - the element is in an iframe or shadow DOM
//   - the script is on a different page than expected

// 2. Are you modifying the right element?
const links = document.querySelectorAll("a");
console.log(links);   // a NodeList — NOT a single element

// if you write links.textContent = "...", it does nothing useful —
// you'd need to loop and set each one.</code></pre>

    <p>The other big debugging tool is the browser's <strong>Inspect</strong> feature. Right-click any element on a page → "Inspect" → DevTools opens showing the live DOM. You can see exactly what JavaScript sees, and confirm your changes are happening (or not).</p>
  `,

  /* 2.1 The part that makes it click */
  'topics-11-0-2-1': `
    <p>Once you see that "the page" and "the DOM" are the same thing — that every visible character on the page corresponds to a JavaScript object in memory — every other DOM lesson stops being a list of methods to memorize and starts feeling like ways of interacting with one consistent system. Want to change something the user sees? Find the matching DOM node and change it. The methods (<code>textContent</code>, <code>style</code>, <code>classList</code>, etc.) are just specific ways of doing that.</p>
    <p>The DOM is also the reason "JavaScript runs in the browser" matters at all. In any other environment (Node.js, scripts on a server), there's no DOM — no document, no querySelector, no buttons. The DOM is the browser's gift to JavaScript: a way to actually <em>do</em> something the user can see.</p>
  `,

  /* 2.2 Common confusions */
  'topics-11-0-2-2': `
    <p><strong>Confusion: thinking the DOM is the HTML</strong></p>
<pre class="language-javascript"><code class="language-javascript">// HTML is text in a file. DOM is objects in memory.
// they're related but not the same.
// HTML file:
//   &lt;p&gt;Hello&lt;/p&gt;
// DOM:
//   an object representing &lt;p&gt;, with .textContent === "Hello"
// changing the DOM:
document.querySelector("p").textContent = "Goodbye";
// the page updates. but the HTML FILE is unchanged.
// reload → DOM rebuilds from the unchanged file → "Hello" again.</code></pre>

    <p><strong>Confusion: thinking changes to the page persist</strong></p>
<pre class="language-javascript"><code class="language-javascript">// the DOM is in MEMORY. memory is wiped on reload.
// any change you make is gone the next time the page loads — unless you also save it.

// to make changes persist, save the data:
localStorage.setItem("greeting", "Hi");
// then on the next load, read it back and re-apply:
const saved = localStorage.getItem("greeting");
if (saved) document.querySelector("h1").textContent = saved;</code></pre>

    <p><strong>Confusion: thinking <code>document</code> and <code>window</code> are the same</strong></p>
<pre class="language-javascript"><code class="language-javascript">// document — the page (the DOM tree)
// window  — the BROWSER tab/frame the page lives in

document.title         // "My Site" (page title)
window.innerWidth      // 1280 (browser width in pixels)
window.location        // info about the URL
window.alert("hi")     // browser alert dialog

// document is INSIDE window. window also has things that aren't about the page:
// timers, navigation, dialogs, viewport size, browser features.

// for DOM work, you'll mostly use document. window comes up for browser-level stuff.</code></pre>

    <p><strong>Confusion: thinking JavaScript "is" the DOM</strong></p>
<pre class="language-javascript"><code class="language-javascript">// JavaScript is a programming language. it has variables, loops, functions,
// math — none of which require a DOM.

// the DOM is a SET OF OBJECTS the browser provides to scripts running in a page.
// it's an API: "here's a tree, here are methods to walk and change it."

// JavaScript running in Node.js (server-side) has NO DOM:
//   document — undefined
//   querySelector — doesn't exist
//   window — doesn't exist

// in a browser, all of those are available because the BROWSER created them.</code></pre>

    <p><strong>Confusion: thinking the DOM only matters for "frontend developers"</strong></p>
<pre class="language-javascript"><code class="language-javascript">// any JavaScript that runs in a browser uses the DOM. that includes:
//   - simple scripts on basic websites
//   - frameworks like React, Vue, Svelte (they manage the DOM for you)
//   - browser extensions
//   - bookmarklets
//   - automated tests that drive a real browser

// understanding the DOM is the foundation for all of those.
// frameworks hide it, but they don't replace it — under the hood, they do the
// same querySelector / textContent / appendChild work this section teaches.</code></pre>
  `,

  /* 2.3 Common mistakes */
  'topics-11-0-2-3': `
<pre class="language-javascript"><code class="language-javascript">// Trying to use the DOM before it exists
// HTML:
// <head>
//   <script src="app.js"></script>
// </head>
// <body>
//   <h1 id="title">Hello</h1>
// </body>

// app.js:
const title = document.getElementById("title");
console.log(title);   // null — script ran before <h1> existed

// fix: put the script at the END of body, or use defer
// <body>
//   <h1 id="title">Hello</h1>
//   <script src="app.js"></script>
// </body></code></pre>

<pre class="language-javascript"><code class="language-javascript">// Editing the HTML file instead of the DOM (then refreshing)
// expected: page updates dynamically as user clicks
// actual: nothing happens until reload, and the dynamic interaction is lost
// fix: edit the DOM with JavaScript — that's the whole point of a script
document.getElementById("title").textContent = "Updated";</code></pre>

<pre class="language-javascript"><code class="language-javascript">document.title = "New Page Title";
// title in the browser tab updates. but document.title is JUST the title.
// confused with: changing the &lt;h1&gt; on the page
// fix: be specific about what you're targeting
document.querySelector("h1").textContent = "New Heading";</code></pre>

<pre class="language-javascript"><code class="language-javascript">const items = document.querySelectorAll("li");
items.textContent = "Hello";
// items is a NodeList (collection), not a single element
// fix: loop, or pick one
items.forEach(li => li.textContent = "Hello");
// or
items[0].textContent = "Hello";</code></pre>

<pre class="language-javascript"><code class="language-javascript">document.title = "Saved!";
setTimeout(() => location.reload(), 1000);
// the title flashes briefly, then the reload wipes the DOM
// confused: thought the change would survive the reload
// fix: store the data, then re-apply on the next load
localStorage.setItem("lastStatus", "Saved!");
// on next load:
const status = localStorage.getItem("lastStatus");
if (status) document.title = status;</code></pre>

<pre class="language-javascript"><code class="language-javascript">if (document.getElementById("missing").textContent === "x") { ... }
// crashes — getElementById returned null, and you can't read .textContent of null
// fix: check for null first
const el = document.getElementById("missing");
if (el && el.textContent === "x") { ... }</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-11-0-3-0': `
<pre class="language-javascript"><code class="language-javascript">// The starting point — document
console.log(document);          // the whole page object
console.log(document.title);    // page title
console.log(document.body);     // <body> element
console.log(document.head);     // <head> element

// Find an element
const heading = document.getElementById("title");

// Read what's there
console.log(heading.textContent);

// Change what's shown
heading.textContent = "New Heading";

// Walk the tree
const body = document.body;
console.log(body.children);          // direct children
console.log(body.firstChild);
console.log(body.parentNode);        // <html>

// Add a new element
const div = document.createElement("div");
div.textContent = "I'm new";
document.body.appendChild(div);

// Remove an element
document.querySelector(".old").remove();

// React to a click
document.querySelector("button").addEventListener("click", () => {
  console.log("clicked");
});

// Read the entire HTML inside body (as a string)
console.log(document.body.innerHTML);

// Look up the URL the page is on
console.log(document.URL);

// Confirm DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM ready, safe to query elements");
});</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-11-0-3-1': `
    <p><strong>Example: a counter that updates the page on click</strong></p>
<pre class="language-javascript"><code class="language-javascript">// HTML:
// <p>You clicked <span id="count">0</span> times.</p>
// <button id="btn">Click me</button>

let count = 0;
const countSpan = document.getElementById("count");
const button = document.getElementById("btn");

button.addEventListener("click", () => {
  count = count + 1;
  countSpan.textContent = count;
});
// every click changes the DOM. the user sees the new number immediately.</code></pre>

    <p><strong>Example: showing a loaded message after data arrives</strong></p>
<pre class="language-javascript"><code class="language-javascript">async function loadProducts() {
  document.querySelector(".status").textContent = "Loading...";
  const data = await fetch("/api/products").then(r => r.json());
  document.querySelector(".status").textContent = "Loaded " + data.length + " items";
}
// the DOM serves as the "screen" — updating textContent is how the user sees progress.</code></pre>

    <p><strong>Example: building a list from data</strong></p>
<pre class="language-javascript"><code class="language-javascript">function renderTodos(todos) {
  const ul = document.querySelector("ul.todos");
  ul.innerHTML = "";
  for (let i = 0; i < todos.length; i++) {
    const li = document.createElement("li");
    li.textContent = todos[i].text;
    ul.appendChild(li);
  }
}
// the loop creates fresh DOM nodes for every todo. the page updates as a result.
// this pattern — array → loop → new DOM nodes — is how dynamic content gets onto the page.</code></pre>

    <p><strong>Example: a dropdown that opens when its trigger is clicked</strong></p>
<pre class="language-javascript"><code class="language-javascript">const trigger = document.querySelector(".dropdown-trigger");
const menu = document.querySelector(".dropdown-menu");

trigger.addEventListener("click", () => {
  menu.classList.toggle("open");
});
// "open" is a CSS class that makes the menu visible.
// the DOM operation (toggling a class) is what causes the visual change.</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-11-0-3-2': `
    <ul>
      <li><strong><code>document</code></strong> → the root object the DOM hangs off of</li>
      <li><strong>Selecting elements</strong> → how you find specific nodes in the tree</li>
      <li><strong><code>textContent</code> / <code>innerHTML</code></strong> → read or change what an element displays</li>
      <li><strong><code>style</code> / <code>classList</code></strong> → change how an element looks</li>
      <li><strong><code>createElement</code> / <code>appendChild</code></strong> → add new nodes to the tree</li>
      <li><strong><code>remove()</code></strong> → take nodes off the tree</li>
      <li><strong>Events</strong> → react to clicks, typing, scrolling — also DOM-based</li>
      <li><strong>HTML</strong> → the source the DOM is parsed from</li>
      <li><strong>CSS</strong> → applied to DOM nodes; classList changes which rules match</li>
      <li><strong>localStorage</strong> → for persisting changes across page reloads</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-11-0-3-3': `
    <ul>
      <li><code>document</code></li>
      <li><code>document.body</code> / <code>document.head</code></li>
      <li><code>getElementById</code> / <code>querySelector</code></li>
      <li><code>textContent</code> / <code>innerHTML</code></li>
      <li><code>createElement</code> / <code>appendChild</code></li>
      <li>The DOM tree</li>
      <li>HTML vs DOM</li>
      <li>Browser events</li>
      <li>DOM loaded timing</li>
      <li><code>window</code> vs <code>document</code></li>
    </ul>
  `,
  /* ========================================================= 
   Sub-lesson: 3.12.2 DOM → DOM as JavaScript's view of HTML
 =======================================================*/

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-11-1-0-0': `
    <p>The DOM is JavaScript's <em>view</em> of the HTML — not a copy of it, not the file itself, but a live, navigable representation that JavaScript was specifically designed to read and modify. HTML is what the developer writes; the DOM is what JavaScript sees.</p>
    <p>This framing matters because once you stop thinking of HTML and the DOM as the same thing, a lot of beginner confusion goes away. The HTML file is static text on disk. The DOM is dynamic, in-memory, and tied to the page the user is currently looking at. JavaScript only ever interacts with the DOM — it has no built-in way to read or write the HTML file directly.</p>
  `,

  /* 0.1 Syntax */
  'topics-11-1-0-1': `
<pre class="language-javascript"><code class="language-javascript">// HTML written by the developer (in a .html file):
// &lt;body&gt;
//   &lt;h1&gt;Welcome&lt;/h1&gt;
//   &lt;p class="message"&gt;Hello!&lt;/p&gt;
// &lt;/body&gt;

// JavaScript's view of that HTML, after the browser parses it:
console.log(document.body);
// &lt;body&gt;
//   &lt;h1&gt;Welcome&lt;/h1&gt;
//   &lt;p class="message"&gt;Hello!&lt;/p&gt;
// &lt;/body&gt;

// looks the same — but it's actually a tree of objects, not text.
console.log(document.querySelector("h1"));
// &lt;h1&gt;Welcome&lt;/h1&gt;
console.log(typeof document.querySelector("h1"));
// "object" — JavaScript sees an object, not a string of HTML</code></pre>
    <p>The HTML is the input. The DOM is the parsed-and-ready version JavaScript can actually work with — every tag a real object, every attribute readable as a property, every change instantly reflected on screen.</p>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-11-1-0-2': `
<pre class="language-javascript"><code class="language-javascript">// HTML the developer wrote:
//
//   &lt;ul id="menu"&gt;
//     &lt;li&gt;Home&lt;/li&gt;
//     &lt;li&gt;About&lt;/li&gt;
//   &lt;/ul&gt;
// What JavaScript sees (a tree of related objects):
//
//   ul (object)
//   ├── id: "menu"
//   ├── children: [li1, li2]
//   ├── parentNode: &lt;body&gt;
//   ├── textContent: "HomeAbout"
//   ├── innerHTML: "&lt;li&gt;Home&lt;/li&gt;&lt;li&gt;About&lt;/li&gt;"
//   └── methods: appendChild, remove, querySelector, ...
//
//        li1 (object)
//        ├── textContent: "Home"
//        ├── parentNode: &lt;ul&gt;
//        ├── nextSibling: li2
//        └── methods: ...
//
//        li2 (object)
//        ├── textContent: "About"
//        ├── parentNode: &lt;ul&gt;
//        ├── previousSibling: li1
//        └── methods: ...
// HTML on disk:        text characters
// HTML as DOM:         JavaScript objects connected in a tree
// HTML on screen:      pixels rendered from the DOM</code></pre>
    <p>The HTML file shows up in three different forms depending on who's looking. The developer sees text. JavaScript sees objects. The user sees pixels. They all describe the same content, but they're three different representations.</p>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-11-1-0-3': `
    <p><strong>HTML is the source — the DOM is built from it.</strong> Until the browser parses the HTML, there is no DOM. After parsing, JavaScript only ever talks to the DOM:</p>
<pre class="language-javascript"><code class="language-javascript">// timeline:
// 1. browser receives the HTML file (text)
// 2. browser parses the HTML into a tree of objects
// 3. that tree becomes "document" — JavaScript can now access it
// 4. browser renders the page based on the DOM
// 5. JavaScript runs, modifying the DOM
// 6. browser re-renders based on the changes

// JavaScript never reads the file directly. it only sees the DOM.</code></pre>

    <p><strong>The DOM is a "view" because it can differ from the literal HTML.</strong> Browsers correct, fill in, and normalize the source on the way to building the DOM:</p>
<pre class="language-javascript"><code class="language-javascript">// what the developer wrote:
//   &lt;p&gt;missing close tag
//   &lt;p&gt;another paragraph

// what the DOM looks like (the browser auto-closed the first &lt;p&gt;):
//   &lt;p&gt;missing close tag&lt;/p&gt;
//   &lt;p&gt;another paragraph&lt;/p&gt;

// what the developer wrote:
//   &lt;table&gt;&lt;tr&gt;&lt;td&gt;cell&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;

// what the DOM looks like (browser auto-inserted &lt;tbody&gt;):
//   &lt;table&gt;
//     &lt;tbody&gt;
//       &lt;tr&gt;&lt;td&gt;cell&lt;/td&gt;&lt;/tr&gt;
//     &lt;/tbody&gt;
//   &lt;/table&gt;

// rule: when JavaScript queries the DOM, it sees what the BROWSER built —
// not necessarily what's literally in the source file.</code></pre>

    <p><strong>Once the DOM exists, the original HTML file is no longer in the loop.</strong> Anything the script does, it does to the DOM:</p>
<pre class="language-javascript"><code class="language-javascript">// reading what's currently shown:
const text = document.querySelector("p").textContent;
// reads from the DOM, not from the file

// changing what's shown:
document.querySelector("p").textContent = "Updated";
// writes to the DOM, not to the file
// the file on disk is unchanged
// the user sees the change immediately

// even reading "the HTML":
const html = document.body.innerHTML;
// this returns a string GENERATED FROM the DOM
// it might not be character-for-character identical to the original file</code></pre>

    <p><strong>Different selection methods give different views of the same DOM.</strong> The tree is one thing; the methods are different angles into it:</p>
<pre class="language-javascript"><code class="language-javascript">document.getElementById("menu")           // by id
document.querySelector("#menu")             // by CSS selector
document.getElementsByTagName("ul")[0]      // by tag, first one
document.querySelectorAll("ul")[0]          // by selector, first match

// all four can return the same &lt;ul&gt; element if the page only has one with id "menu".
// changing the element through any one of them changes "the same" element —
// they're all references to one object in the DOM tree.</code></pre>

    <p><strong>The DOM exposes things the HTML doesn't show.</strong> Computed styles, current state of inputs, current scroll position — all available through the DOM, none of it visible in the source HTML:</p>
<pre class="language-javascript"><code class="language-javascript">const input = document.querySelector("input[name=username]");

// HTML source:
//   &lt;input name="username"&gt;

// what the DOM lets JavaScript read:
console.log(input.value);                 // current text typed by the user
console.log(input.checked);                // for checkboxes/radios
console.log(input.getBoundingClientRect()); // size and screen position
console.log(getComputedStyle(input).color); // actual color after CSS applied

// none of this is in the HTML file. it's runtime state the DOM exposes.</code></pre>

    <p><strong>Some HTML is in the file but not in the DOM.</strong> Comments, doctype declarations, and similar elements are usually parsed but mostly ignored by typical DOM queries:</p>
<pre class="language-javascript"><code class="language-javascript">// HTML source:
//   &lt;!-- this comment isn't visible to most queries --&gt;
//   &lt;p&gt;visible text&lt;/p&gt;

// querySelectorAll("*") would skip the comment.
// document.querySelector("p") finds only the &lt;p&gt;.

// the comment IS in the DOM tree, just as a Comment node — but most DOM operations
// you'll do don't touch it.</code></pre>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-11-1-1-0': `
    <p>The "DOM as JavaScript's view" framing solves a confusion that beginners hit early: "I changed the page with JavaScript, but when I look at the HTML file, my change isn't there." That's because the change was to the DOM, not the file. The HTML file is the input that <em>built</em> the DOM, but they're not the same thing once the page is loaded.</p>
    <p>Understanding this also explains why JavaScript needs methods like <code>querySelector</code> at all — if HTML and the DOM were the same, you could just "search the HTML." But they're not, and the DOM provides the search and modification methods because that's the only interface JavaScript has.</p>
  `,

  /* 1.1 Why use it */
  'topics-11-1-1-1': `
    <p>Internalizing this view changes how you reason about page changes:</p>
<pre class="language-javascript"><code class="language-javascript">// Question: "Why doesn't my page change persist when I refresh?"
// Answer:   Because you changed the DOM, not the file. Refresh rebuilds the
//           DOM from the unchanged file.

// Question: "Why can't I read my CSS file with JavaScript?"
// Answer:   You can't directly. But you CAN read the COMPUTED styles the DOM
//           applied — getComputedStyle(element).

// Question: "Why does my &lt;textarea&gt;'s value not show up in innerHTML?"
// Answer:   Because what the user TYPED isn't in the source HTML or the
//           initial DOM HTML — it's a runtime property (.value) the DOM tracks.

// every DOM-related question gets clearer once you stop conflating it with HTML.</code></pre>
  `,

  /* 1.2 Where you use it */
  'topics-11-1-1-2': `
<pre class="language-javascript"><code class="language-javascript">// HTML — the static starting point
// &lt;h1 class="title"&gt;Hello&lt;/h1&gt;

// DOM — the dynamic, queryable, modifiable representation
const heading = document.querySelector(".title");

// HTML defines what's there initially. DOM defines what's there NOW.
heading.textContent = "Goodbye";   // DOM changes immediately

// HTML can't react. DOM can.
heading.addEventListener("click", () => {
  heading.classList.toggle("flipped");
});

// HTML is in the file. DOM is in memory.
// to save DOM changes, save the data and re-apply on load:
const newText = heading.textContent;
localStorage.setItem("heading", newText);
window.addEventListener("load", () => {
  const saved = localStorage.getItem("heading");
  if (saved) heading.textContent = saved;
});

// HTML is what the developer typed. DOM is what the browser BUILT from it.
// the two might differ (auto-corrected tags, inserted &lt;tbody&gt;, etc.)</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-11-1-1-3': `
    <p>HTML is the script of a play, written down on paper. The DOM is the actual stage with actors on it, ready to move and react. The script told the director how to set up the stage at the beginning, but once the curtain rises, what the audience sees is the stage — not the script.</p>
    <p>JavaScript is the director, walking around the stage during the performance. It can't change the script (the file on disk), but it can move actors, swap costumes, add new performers, or rearrange the set. The audience sees those changes happen in real time.</p>
    <p>If you reset the play (refresh the page), the stage gets cleared and re-set from the script — every change the director made during the previous performance is gone. The script is still the source of truth; it's just not where the action happens.</p>
  `,

  /* 1.4 Mental model */
  'topics-11-1-1-4': `
    <p>Picture two adjacent rooms separated by a one-way mirror. The first room contains the HTML file — a static document, sitting still. The second room contains the DOM — a 3D model of the page that JavaScript can walk around, examine, and modify.</p>
    <p>The mirror only goes one direction. The HTML room can send a copy of itself through to the DOM room when the page loads, building the model. After that, the rooms are disconnected. Changes JavaScript makes to the model don't propagate back through the mirror — the HTML file stays exactly as it was.</p>
    <p>The user is in the DOM room. They see the model. They interact with it. JavaScript is in the DOM room with them, making changes the user sees instantly. The HTML file is in a different room entirely — useful as the original source, but not where any of the live action happens.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-11-1-1-5': `
<pre class="language-javascript"><code class="language-javascript">// Three forms of the same content, from disk to screen:

// 1. HTML file on disk (just text):
// &lt;body&gt;
//   &lt;h1&gt;Welcome&lt;/h1&gt;
// &lt;/body&gt;

// 2. After the browser parses, the DOM in memory looks like:
// (object) document
//   .body (object)
//     .children
//       (object) &lt;h1&gt;
//         .textContent: "Welcome"
//         .parentNode: &lt;body&gt;

// 3. The user sees pixels rendered from that DOM object — large bold text "Welcome".

// JavaScript runs:
document.querySelector("h1").textContent = "Hello";

// step by step:
//   1. document.querySelector walks the DOM tree, finds the h1 OBJECT.
//   2. Setting .textContent = "Hello" updates that object's text property.
//   3. Browser detects the change, re-renders the page.
//   4. User now sees "Hello" instead of "Welcome".

// what DIDN'T happen:
//   - the HTML FILE on disk is unchanged ("Welcome" still in the source)
//   - if the page reloads, the DOM is rebuilt from the file → "Welcome" returns
//   - "Hello" only existed in the DOM, in memory, until the next reload

// the DOM is JavaScript's view: live, modifiable, but separate from the file.</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-11-1-2-0': `
    <p>If something on the page looks different from what your HTML file says, the answer is almost always "the DOM has changed since load." Open DevTools → Elements (or Inspector) — that panel shows the LIVE DOM, not the source HTML:</p>
<pre class="language-javascript"><code class="language-javascript">// HTML source:
// &lt;p id="msg"&gt;Original&lt;/p&gt;

// JavaScript on the page:
document.getElementById("msg").textContent = "Modified";

// view source (Ctrl+U) shows: "Original"
// DevTools → Elements panel shows: "Modified"

// the difference: "view source" reads the FILE; the Elements panel reads the DOM.
// if your debugging confused you because two things didn't match,
// you were looking at two different representations of the page.</code></pre>

    <p>Another clue: "I edited the HTML file but the page doesn't update." That's because the page is showing the DOM that was built from the file <em>at load time</em>. The browser has to re-parse the file to rebuild the DOM. Save → reload, and you'll see the change.</p>
  `,

  /* 2.1 The part that makes it click */
  'topics-11-1-2-1': `
    <p>HTML is the recipe. The DOM is the meal on the table. JavaScript is the chef sitting at the table, making last-second adjustments — adding salt, swapping a side, garnishing. The recipe doesn't change; the meal does. Anyone arriving at the table sees the current meal, not the recipe.</p>
    <p>Once you see the DOM as a separate, live representation that JavaScript exclusively interacts with, the rest of DOM programming becomes about learning the controls — how to find a node, how to read it, how to change it, how to add a new one. The DOM is the medium; the methods are the brushes.</p>
  `,

  /* 2.2 Common confusions */
  'topics-11-1-2-2': `
    <p><strong>Confusion: "View Source" shows the current page</strong></p>
<pre class="language-javascript"><code class="language-javascript">// "View Source" shows the HTML the server sent — the original FILE.
// it does NOT reflect any changes JavaScript has made since the page loaded.

// to see the live DOM, use DevTools → Elements / Inspector panel.
// that panel updates as JavaScript modifies the page.

// rule of thumb:
//   View Source        → static HTML from the server
//   DevTools Elements  → live DOM as it is right now</code></pre>

    <p><strong>Confusion: thinking <code>innerHTML</code> gives you the original HTML</strong></p>
<pre class="language-javascript"><code class="language-javascript">// HTML source:
//   &lt;ul&gt;&lt;li&gt;One&lt;/li&gt;&lt;li&gt;Two&lt;/li&gt;&lt;/ul&gt;

// after JavaScript adds an item:
const ul = document.querySelector("ul");
const li = document.createElement("li");
li.textContent = "Three";
ul.appendChild(li);

// now innerHTML reflects the CURRENT DOM:
console.log(ul.innerHTML);
// "&lt;li&gt;One&lt;/li&gt;&lt;li&gt;Two&lt;/li&gt;&lt;li&gt;Three&lt;/li&gt;"

// it's NOT what was in the file — it's a string built from the DOM right now.</code></pre>

    <p><strong>Confusion: thinking the browser preserves the original HTML exactly</strong></p>
<pre class="language-javascript"><code class="language-javascript">// HTML source:
//   &lt;p   class = "msg" &gt;Hello&lt;/p&gt;     ← extra spaces, weird formatting

// what the DOM has:
//   &lt;p class="msg"&gt;Hello&lt;/p&gt;           ← normalized

// the browser may:
//   - normalize whitespace
//   - reorder attributes
//   - auto-close tags
//   - insert missing wrappers (like &lt;tbody&gt; for tables)
//   - lowercase tag names

// the DOM reflects the BROWSER's interpretation, not the file's literal content.</code></pre>

    <p><strong>Confusion: HTML and DOM are the same thing</strong></p>
<pre class="language-javascript"><code class="language-javascript">// they're related but not identical.

// HTML:
//   - text in a file
//   - written by a developer
//   - the SOURCE
//   - doesn't change unless the file is edited and re-uploaded

// DOM:
//   - JavaScript objects in memory
//   - built by the BROWSER from the HTML
//   - can be modified by scripts at runtime
//   - tied to the page the user is viewing right now

// every time someone says "the DOM" — that's the live, modifiable version.
// every time someone says "the HTML" — that could mean either the file or its
// initial DOM state, depending on context.</code></pre>

    <p><strong>Confusion: thinking JavaScript "edits HTML"</strong></p>
<pre class="language-javascript"><code class="language-javascript">document.querySelector("h1").textContent = "New";

// this DOESN'T edit any HTML file. it edits the DOM.
// the visible page changes because the browser re-renders the DOM, not because
// any file was saved.

// "edits the HTML" is a sloppy way of saying "edits the DOM" —
// most of the time, what you really mean is the DOM.</code></pre>
  `,

  /* 2.3 Common mistakes */
  'topics-11-1-2-3': `
<pre class="language-javascript"><code class="language-javascript">// Editing the HTML file expecting it to change a running page
// (developer types in their editor and looks at an open browser tab)
// page: unchanged
// fix: refresh the browser to re-parse the file into a new DOM</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Looking at View Source to debug a JavaScript-driven UI
// View Source shows the original file — your live changes won't be there
// fix: use DevTools → Elements panel for the live DOM</code></pre>

<pre class="language-javascript"><code class="language-javascript">document.querySelector("input").innerHTML;
// expected: the user's typed value
// actual: empty string (innerHTML doesn't reflect form input state)
// fix: use the .value property
document.querySelector("input").value;</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Reading a stylesheet to see what color an element is
// (you can't read external CSS files from JavaScript directly)
// fix: read the COMPUTED style on the DOM element
const color = getComputedStyle(element).color;</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Comparing innerHTML between page loads expecting consistency
const a = document.body.innerHTML;
location.reload();
// after reload, innerHTML may differ slightly (whitespace, normalization)
// the DOM that gets built isn't bit-identical to the file or to the previous DOM
// fix: compare the data that produced the DOM, not the rendered HTML string</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Saving DOM changes by editing the HTML file from JavaScript
// JavaScript in a browser CAN'T write to disk
// fix: save the data somewhere persistent (localStorage, server, IndexedDB)
//      then re-apply on the next page load
localStorage.setItem("title", "Custom");
window.addEventListener("DOMContentLoaded", () => {
  const t = localStorage.getItem("title");
  if (t) document.title = t;
});</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Assuming HTML attributes match DOM properties exactly
const link = document.querySelector("a");
console.log(link.getAttribute("href"));   // "/about"
console.log(link.href);                    // "https://example.com/about"
// the ATTRIBUTE is what's in the HTML; the PROPERTY is the DOM's resolved version
// fix: pick the right one for the job — getAttribute for raw, .href for resolved</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-11-1-3-0': `
<pre class="language-javascript"><code class="language-javascript">// HTML source vs DOM after JavaScript

// HTML:    &lt;p id="x"&gt;Original&lt;/p&gt;
// initial DOM: &lt;p id="x"&gt;Original&lt;/p&gt;
document.getElementById("x").textContent = "Changed";
// DOM now: &lt;p id="x"&gt;Changed&lt;/p&gt;
// HTML file: still says "Original"

// Reading from the DOM, not the file
const html = document.body.innerHTML;
// returns a string built from the LIVE DOM, including any JavaScript changes

// Writing the DOM affects only memory, not disk
document.body.innerHTML += "&lt;p&gt;injected&lt;/p&gt;";
// page shows new paragraph; HTML file is unchanged

// Form input — exists only in the DOM, not in the source HTML
// HTML:  &lt;input&gt;
const input = document.querySelector("input");
// before user types: input.value === ""
// after user types "hi": input.value === "hi"
// the source HTML doesn't track this — only the live DOM does

// Computed styles — only available through the DOM
const el = document.querySelector(".target");
const styles = getComputedStyle(el);
console.log(styles.fontSize);   // browser-resolved final size

// Auto-corrected HTML
// File: &lt;p&gt;missing close
// DOM:  &lt;p&gt;missing close&lt;/p&gt;   ← browser closed it for you
console.log(document.querySelector("p").outerHTML);
// will show the corrected version

// Live DOM via DevTools
// (in browser): right-click → Inspect → Elements panel
// shows what JavaScript sees right now, not what the file said

// HTML attribute vs DOM property — different views of the same thing
// HTML:  &lt;a href="/about"&gt;link&lt;/a&gt;
const a = document.querySelector("a");
a.getAttribute("href");   // "/about"
a.href;                    // "https://example.com/about"</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-11-1-3-1': `
    <p><strong>Example: live counter that updates the DOM, not the file</strong></p>
<pre class="language-javascript"><code class="language-javascript">// HTML:
// &lt;span id="visits"&gt;0&lt;/span&gt; visits

let count = parseInt(localStorage.getItem("visits") || "0");
count++;
document.getElementById("visits").textContent = count;
localStorage.setItem("visits", count);
// the DOM updates so the user sees the new count immediately.
// localStorage handles persistence — the HTML file never changes.</code></pre>

    <p><strong>Example: search filter — DOM changes, source HTML untouched</strong></p>
<pre class="language-javascript"><code class="language-javascript">function filterList(query) {
  const items = document.querySelectorAll("li");
  items.forEach(li =&gt; {
    if (li.textContent.includes(query)) {
      li.style.display = "";
    } else {
      li.style.display = "none";
    }
  });
}
// every li either appears or disappears as the user types.
// the HTML file remains unchanged — only the live DOM is being filtered.</code></pre>

    <p><strong>Example: confirming a DOM change with DevTools</strong></p>
<pre class="language-javascript"><code class="language-javascript">// JavaScript:
document.body.classList.add("dark-mode");

// to confirm:
//   1. open DevTools → Elements panel
//   2. find &lt;body&gt; in the tree
//   3. you'll see class="dark-mode" listed
//   4. View Source would show the original (without dark-mode)

// the discrepancy isn't a bug — it's the difference between source HTML and live DOM.</code></pre>

    <p><strong>Example: form data that lives only in the DOM</strong></p>
<pre class="language-javascript"><code class="language-javascript">// HTML:
// &lt;form&gt;
//   &lt;input name="email"&gt;
//   &lt;button type="button" id="check"&gt;Check&lt;/button&gt;
// &lt;/form&gt;

document.getElementById("check").addEventListener("click", () =&gt; {
  const email = document.querySelector("input[name=email]").value;
  console.log("user typed:", email);
});
// the typed value is a property of the DOM input element.
// it never appears in the HTML file or in innerHTML — it's runtime state only.</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-11-1-3-2': `
    <ul>
      <li><strong>HTML</strong> → the source the DOM is built from</li>
      <li><strong><code>document</code></strong> → the JavaScript object that gives you the DOM tree</li>
      <li><strong><code>innerHTML</code></strong> → a string view of the live DOM, not the original file</li>
      <li><strong>HTML attributes vs DOM properties</strong> → two views of the same thing (<code>getAttribute</code> vs <code>.href</code>)</li>
      <li><strong>DevTools Elements panel</strong> → shows the live DOM</li>
      <li><strong>View Source</strong> → shows the original HTML file</li>
      <li><strong>Computed styles</strong> → final styling visible only through the DOM</li>
      <li><strong>localStorage</strong> → for making DOM changes persist across reloads</li>
      <li><strong>Form input <code>.value</code></strong> → runtime state that lives only in the DOM</li>
      <li><strong>Browser HTML normalization</strong> → why the DOM may differ from the literal source</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-11-1-3-3': `
    <ul>
      <li>HTML</li>
      <li><code>document</code></li>
      <li>HTML attributes vs DOM properties</li>
      <li><code>innerHTML</code> vs source HTML</li>
      <li>DevTools Elements panel</li>
      <li>View Source</li>
      <li>Computed styles</li>
      <li>Form input <code>.value</code></li>
      <li>localStorage / persistence</li>
      <li>Browser HTML parsing rules</li>
    </ul>
  `,

  /* ========================================================= 
   Sub-lesson: 3.12.3 DOM → document
 =======================================================*/

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-11-2-0-0': `
    <p><code>document</code> is the JavaScript object that represents the entire web page. It's the top of the DOM tree — every element, every text node, every attribute on the page sits underneath it. When JavaScript wants to interact with the page, almost every interaction starts with <code>document</code>.</p>
    <p>It's a global variable the browser provides automatically. You don't have to declare it, import it, or set it up — the moment your script runs in a browser, <code>document</code> already exists and points at the current page.</p>
  `,

  /* 0.1 Syntax */
  'topics-11-2-0-1': `
<pre class="language-javascript"><code class="language-javascript">// document is already available — no setup needed
console.log(document);          // the entire page object

// access common parts of the page through it
console.log(document.title);    // the page's title (browser tab text)
console.log(document.body);     // the &lt;body&gt; element
console.log(document.head);     // the &lt;head&gt; element

// find elements through it
const heading = document.querySelector("h1");
const button = document.getElementById("btn");

// almost every DOM task you'll ever do starts with "document."</code></pre>
    <p>Think of <code>document</code> as the entry point to everything on the page. You can read what's there, find specific elements, create new ones, or modify what's already loaded — all by starting with <code>document</code>.</p>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-11-2-0-2': `
<pre class="language-javascript"><code class="language-javascript">// "document" is an object with many properties and methods. The most common ones:
//
//   document
//   ├── title              → the page's title string
//   ├── body               → the &lt;body&gt; element
//   ├── head               → the &lt;head&gt; element
//   ├── URL                → the current page's URL
//   ├── documentElement    → the &lt;html&gt; element
//   ├── querySelector(sel) → find ONE element matching a CSS selector
//   ├── querySelectorAll(sel) → find ALL elements matching
//   ├── getElementById(id) → find ONE element by id
//   ├── createElement(tag) → make a new element (not yet on the page)
//   ├── addEventListener(...) → react to page-level events
//   └── ... and many more

// every property is a way of READING something about the page
// every method is a way of DOING something with the page</code></pre>
    <p>You don't need to memorize the whole list — just know that "anything you want to do with the page" usually has a method on <code>document</code> that does it. When in doubt, type <code>document.</code> in the console and your editor will list the options.</p>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-11-2-0-3': `
    <p><strong><code>document</code> is global — it works anywhere in a browser script.</strong> You don't import or declare it. It's just there:</p>
<pre class="language-javascript"><code class="language-javascript">// any function, any file, any script tag — document is available
function logTitle() {
  console.log(document.title);
}
logTitle();

// also works inside event handlers, timers, promises, etc.
setTimeout(() =&gt; {
  console.log(document.body);
}, 1000);</code></pre>

    <p><strong>It only exists in browsers.</strong> In Node.js or other non-browser environments, <code>document</code> is undefined:</p>
<pre class="language-javascript"><code class="language-javascript">// in a browser
console.log(document);   // [object HTMLDocument]

// in Node.js (server-side JavaScript)
console.log(document);   // ReferenceError: document is not defined

// rule: document is a BROWSER feature, not a JavaScript language feature.</code></pre>

    <p><strong><code>document.body</code> and <code>document.head</code> point to those specific elements directly.</strong> No need to query for them:</p>
<pre class="language-javascript"><code class="language-javascript">// the slow way
const body = document.querySelector("body");

// the direct way
const body = document.body;

// both give you the same &lt;body&gt; element.
// document.body is faster to type and slightly faster to run.</code></pre>

    <p><strong><code>document.title</code> reads and writes the browser tab's title.</strong> Set it, and the tab text changes:</p>
<pre class="language-javascript"><code class="language-javascript">console.log(document.title);   // "My Site"

document.title = "Saved!";
// the browser tab now shows "Saved!"

// useful for showing status in the tab — like Gmail showing "(3) Inbox" when
// new messages arrive.</code></pre>

    <p><strong><code>document.URL</code> and <code>document.location</code> are about the page's address.</strong> Different from each other in subtle ways:</p>
<pre class="language-javascript"><code class="language-javascript">console.log(document.URL);          // "https://example.com/page" — string
console.log(document.location);     // a Location object with more details
console.log(location.href);          // also the full URL
console.log(location.pathname);      // just the path: "/page"
console.log(location.search);        // query string: "?id=5"

// document.URL is read-only.
// location.href can be ASSIGNED to navigate to a different page:
location.href = "/about";   // navigates the browser to /about</code></pre>

    <p><strong>Most DOM methods on <code>document</code> search the WHOLE page.</strong> You can also call those methods on a single element to search only inside it:</p>
<pre class="language-javascript"><code class="language-javascript">// searches the entire page for the first .item
const anyItem = document.querySelector(".item");

// searches only INSIDE the sidebar for the first .item
const sidebar = document.querySelector(".sidebar");
const sidebarItem = sidebar.querySelector(".item");

// rule: starting from document searches everywhere.
//       starting from an element scopes the search to that element's contents.</code></pre>

    <p><strong><code>document</code> can listen for page-level events.</strong> Events like "the page finished loading" or "the user pressed a key anywhere on the page":</p>
<pre class="language-javascript"><code class="language-javascript">// page-level events — listen on document
document.addEventListener("DOMContentLoaded", () =&gt; {
  console.log("HTML has finished parsing, DOM is ready");
});

document.addEventListener("keydown", e =&gt; {
  console.log("user pressed:", e.key);
});

// element-level events — listen on the specific element
document.querySelector("button").addEventListener("click", () =&gt; {
  console.log("button clicked");
});</code></pre>

    <p><strong><code>document</code> is technically an object you could store in a variable.</strong> Not usually useful, but it makes the point that it's just a regular JavaScript object:</p>
<pre class="language-javascript"><code class="language-javascript">const doc = document;
doc.title = "Renamed via alias";
// works exactly the same — document is just a normal object reference

// you can also check what it actually is
console.log(typeof document);       // "object"
console.log(document instanceof Object);   // true</code></pre>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-11-2-1-0': `
    <p>JavaScript by itself has no built-in concept of "the page." It can do math, store data, run loops — but none of that connects to anything the user sees. <code>document</code> is the bridge. It's the object the browser hands JavaScript that says "here's the page; do what you want with it."</p>
    <p>Without <code>document</code>, scripts couldn't find any element, read any content, or change anything visible. Every DOM operation depends on it. Even when you call something like <code>element.appendChild()</code>, that element traces its existence back to a <code>document</code> method (<code>createElement</code>) or a <code>document</code> query.</p>
  `,

  /* 1.1 Why use it */
  'topics-11-2-1-1': `
    <p>Every interaction with the page starts at <code>document</code>:</p>
<pre class="language-javascript"><code class="language-javascript">// Reading the page
console.log(document.title);
console.log(document.body.textContent);

// Finding elements
const btn = document.querySelector(".save-btn");
const list = document.getElementById("todo-list");

// Creating new elements
const div = document.createElement("div");

// Reacting to page-level events
document.addEventListener("DOMContentLoaded", init);

// Navigating
console.log(document.URL);
location.href = "/dashboard";

// every script that touches the page touches document somewhere.</code></pre>

    <p>You'll rarely use just <code>document</code> on its own — but it's almost always the starting point. Even when your code uses an element variable (<code>const btn = ...</code>), that variable came from a <code>document</code> query.</p>
  `,

  /* 1.2 Where you use it */
  'topics-11-2-1-2': `
<pre class="language-javascript"><code class="language-javascript">// Find an element
const heading = document.querySelector("h1");
const submitBtn = document.getElementById("submit");

// Find many elements
const cards = document.querySelectorAll(".card");

// Create a new element
const li = document.createElement("li");

// Direct access to common elements
document.body.classList.add("loaded");
document.head.appendChild(newStyleTag);

// Change the tab title
document.title = "Loading...";

// Read the URL
console.log(document.URL);

// React to page-level events
document.addEventListener("DOMContentLoaded", startApp);
document.addEventListener("keydown", handleShortcut);

// Get the &lt;html&gt; element (rarely needed)
console.log(document.documentElement);

// Check the page's language
console.log(document.documentElement.lang);   // "en", "fr", etc.</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-11-2-1-3': `
    <p><code>document</code> is the front door to the page. Every time JavaScript wants to read, change, or react to something on the page, it walks through that door. You don't have to set it up or unlock it — it's always open the moment your script runs.</p>
    <p>Most of the time, you won't think much about <code>document</code> directly. You'll just write <code>document.querySelector(...)</code> or <code>document.body.appendChild(...)</code> and move on. But every one of those operations starts with <code>document</code>, because <code>document</code> is what gives you access to everything the page contains.</p>
    <p>It's also the only global JavaScript object that knows anything about the page. <code>window</code> knows about the browser tab and the URL. <code>console</code> knows about logging. But <code>document</code> is specifically about <em>the page</em> — its structure, its contents, its elements. If you want to talk to the page, you talk to <code>document</code>.</p>
  `,

  /* 1.4 Mental model */
  'topics-11-2-1-4': `
    <p>Picture the page as a big building. <code>document</code> is the lobby — the central hub everyone walks through to get anywhere else. Want to find a specific room (an element)? Ask the lobby's directory (<code>querySelector</code>). Want to deliver something new (a new element)? Bring it through the lobby and then to the room. Want to know what floor you're on (the URL)? The lobby has a sign.</p>
    <p>You don't ever skip the lobby. Every JavaScript interaction with the page is, somewhere, going through <code>document</code> — directly or indirectly. Once you have a specific element in hand, you can work with it locally, but to <em>find</em> it in the first place, you started in the lobby.</p>
    <p>The lobby is also where the building announces things to everyone. Page-loaded? The lobby tells you. Someone pressed a key? The lobby hears it. <code>document.addEventListener</code> is "listen for things the whole building cares about."</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-11-2-1-5': `
<pre class="language-javascript"><code class="language-javascript">// HTML on the page:
// &lt;body&gt;
//   &lt;h1 id="title"&gt;Welcome&lt;/h1&gt;
//   &lt;button id="save"&gt;Save&lt;/button&gt;
// &lt;/body&gt;

// JavaScript:
document.title = "My App";
const heading = document.getElementById("title");
heading.textContent = "Hello!";
document.getElementById("save").addEventListener("click", () =&gt; {
  document.title = "Saved!";
});

// Step by step:
// 1. document.title = "My App"
//    → browser tab text changes to "My App"
// 2. document.getElementById("title")
//    → searches the entire DOM, finds the &lt;h1&gt; with id "title"
//    → returns the element object, stored in "heading"
// 3. heading.textContent = "Hello!"
//    → page now shows "Hello!" instead of "Welcome"
// 4. document.getElementById("save")
//    → searches the entire DOM, finds the &lt;button&gt;
// 5. .addEventListener("click", ...)
//    → attaches a function to the button
// 6. when user clicks the button:
//    → document.title = "Saved!" runs
//    → browser tab text changes to "Saved!"

// notice: EVERY operation that touched the page started with document.
// even the click handler that fires later uses document.title.</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-11-2-2-0': `
    <p>The fastest way to inspect what <code>document</code> is and what it offers: type <code>document.</code> (with the dot) in your browser console. The autocomplete dropdown lists every property and method available:</p>
<pre class="language-javascript"><code class="language-javascript">// in the browser console:
document.
// → dropdown shows: title, body, head, URL, querySelector,
//   getElementById, createElement, addEventListener, ...

// or log the whole thing
console.log(document);
// → click the arrow to expand and explore</code></pre>

    <p>If you ever get "<code>document is not defined</code>" — you're running JavaScript outside a browser (Node.js, a build tool, etc.). The fix is to run the script in a browser, or use a tool like JSDOM that provides a fake <code>document</code>.</p>

    <p>If <code>document.querySelector(...)</code> returns <code>null</code> when you expected an element, the script probably ran before the HTML was parsed. The DOM doesn't have the element yet, even though it's in the HTML file. That's the "DOM loaded timing" issue covered later in this section.</p>
  `,

  /* 2.1 The part that makes it click */
  'topics-11-2-2-1': `
    <p><code>document</code> isn't a special syntax or a language feature — it's just an object the browser gives you. Like any object, it has properties (<code>title</code>, <code>body</code>) and methods (<code>querySelector</code>, <code>createElement</code>). You use it the same way you'd use any other object: dot notation, method calls, the works.</p>
    <p>What makes it special is what it points at. It points at the page. Every property is a piece of the page. Every method either reads, creates, or modifies the page. Once you internalize that <code>document</code> is "the page, as a JavaScript object," every DOM lesson that follows is just "ways of working with this one object."</p>
  `,

  /* 2.2 Common confusions */
  'topics-11-2-2-2': `
    <p><strong>Confusion: <code>document</code> vs <code>window</code></strong></p>
<pre class="language-javascript"><code class="language-javascript">// document — the PAGE (DOM tree)
//   document.title, document.body, document.querySelector, ...

// window — the BROWSER tab/frame containing the page
//   window.innerWidth, window.location, window.alert, ...

// document is actually a property of window:
console.log(window.document === document);   // true

// for DOM work, use document.
// for browser/tab stuff, use window.</code></pre>

    <p><strong>Confusion: thinking <code>document.title</code> is the <code>&lt;h1&gt;</code></strong></p>
<pre class="language-javascript"><code class="language-javascript">// document.title is the BROWSER TAB title — the &lt;title&gt; in &lt;head&gt;
//
// HTML:
// &lt;head&gt;
//   &lt;title&gt;My Site&lt;/title&gt;     ← this is document.title
// &lt;/head&gt;
// &lt;body&gt;
//   &lt;h1&gt;Welcome&lt;/h1&gt;            ← this is NOT document.title
// &lt;/body&gt;

// to change the visible heading:
document.querySelector("h1").textContent = "New Heading";

// to change the tab text:
document.title = "New Tab Title";</code></pre>

    <p><strong>Confusion: thinking <code>document.body</code> is everything on the page</strong></p>
<pre class="language-javascript"><code class="language-javascript">// document.body is JUST the &lt;body&gt; element — its children, its contents.
// it does NOT include &lt;head&gt;.

// to access &lt;head&gt;, use document.head.
// to access &lt;html&gt;, use document.documentElement.
// document itself is the whole thing (head + body + the rest).</code></pre>

    <p><strong>Confusion: thinking you have to "set up" <code>document</code></strong></p>
<pre class="language-javascript"><code class="language-javascript">// in a browser, you do NOT need to:
//   - import document
//   - declare it
//   - create it
//   - initialize it

// it's already there:
console.log(document);   // works immediately, no setup

// the only place you'd need a "polyfill" for document is in Node.js
// (where it doesn't normally exist) — and tools like JSDOM handle that.</code></pre>

    <p><strong>Confusion: thinking <code>document</code> updates after page navigation</strong></p>
<pre class="language-javascript"><code class="language-javascript">// document refers to the CURRENT page only.
// navigating to a new URL gives you a brand new document object.

// if you navigate away with location.href = "/new":
//   - the current page is destroyed
//   - your script stops running
//   - a fresh page loads with a fresh document
//   - any variables you set are gone

// document doesn't "follow" you across navigations.</code></pre>

    <p><strong>Confusion: trying to use <code>document</code> at the top of a script before the body exists</strong></p>
<pre class="language-javascript"><code class="language-javascript">// HTML:
// &lt;head&gt;
//   &lt;script&gt;
//     console.log(document.body);   // null — body hasn't been parsed yet
//   &lt;/script&gt;
// &lt;/head&gt;
// &lt;body&gt;...&lt;/body&gt;

// fix: put the script at the end of body, or wait for DOMContentLoaded:
document.addEventListener("DOMContentLoaded", () =&gt; {
  console.log(document.body);   // now exists
});</code></pre>
  `,

  /* 2.3 Common mistakes */
  'topics-11-2-2-3': `
<pre class="language-javascript"><code class="language-javascript">document.title = "New Heading";
// expected: change the &lt;h1&gt; on the page
// actual: changed the browser tab text instead
// fix: use the right target
document.querySelector("h1").textContent = "New Heading";</code></pre>

<pre class="language-javascript"><code class="language-javascript">const body = Document.body;
// "Document" with capital D is the CLASS, not the instance
// fix: lowercase
const body = document.body;</code></pre>

<pre class="language-javascript"><code class="language-javascript">// In Node.js
console.log(document);
// ReferenceError: document is not defined
// fix: document only exists in browsers
// for testing without a browser, use JSDOM or similar</code></pre>

<pre class="language-javascript"><code class="language-javascript">// HTML:
// &lt;head&gt;
//   &lt;script src="app.js"&gt;&lt;/script&gt;
// &lt;/head&gt;
// &lt;body&gt;
//   &lt;button id="go"&gt;Go&lt;/button&gt;
// &lt;/body&gt;

// app.js
document.getElementById("go").addEventListener("click", ...);
// Error: Cannot read property 'addEventListener' of null
// the button doesn't exist yet when the script runs
// fix: put the script at the end of body, or use DOMContentLoaded
document.addEventListener("DOMContentLoaded", () =&gt; {
  document.getElementById("go").addEventListener("click", ...);
});</code></pre>

<pre class="language-javascript"><code class="language-javascript">document.body = "&lt;p&gt;Hi&lt;/p&gt;";
// you can't assign a string to document.body — it expects an element
// fix: use innerHTML if you want to replace the body's contents
document.body.innerHTML = "&lt;p&gt;Hi&lt;/p&gt;";</code></pre>

<pre class="language-javascript"><code class="language-javascript">document.title.textContent = "New";
// document.title is a STRING, not an element — strings don't have .textContent
// fix: assign directly
document.title = "New";</code></pre>

<pre class="language-javascript"><code class="language-javascript">if (document.URL = "/about") { ... }
// "=" is assignment, not comparison — this tries to change document.URL
// document.URL is read-only, so this silently fails on assignment
// fix: use === for comparison, location.href for navigation
if (document.URL.endsWith("/about")) { ... }
// or to navigate:
location.href = "/about";</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-11-2-3-0': `
<pre class="language-javascript"><code class="language-javascript">// Read the page's title
console.log(document.title);

// Change the tab title
document.title = "Loading...";

// Get the body element
const body = document.body;

// Get the head element
const head = document.head;

// Get the &lt;html&gt; element
const html = document.documentElement;

// Read the URL
console.log(document.URL);
console.log(location.href);   // same string

// Find an element (anywhere on the page)
const btn = document.querySelector("button");

// Find by id (fastest, most direct)
const heading = document.getElementById("title");

// Find many elements
const items = document.querySelectorAll(".item");

// Create a new element (not yet on the page)
const li = document.createElement("li");
li.textContent = "Hello";
document.body.appendChild(li);   // now it's on the page

// Listen for the DOM being ready
document.addEventListener("DOMContentLoaded", () =&gt; {
  console.log("DOM ready, safe to query elements");
});

// Listen for any key press on the page
document.addEventListener("keydown", e =&gt; {
  console.log("key:", e.key);
});

// Check if document is available (mostly for shared code)
if (typeof document !== "undefined") {
  // we're in a browser
}</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-11-2-3-1': `
    <p><strong>Example: changing the tab title when there are unread messages</strong></p>
<pre class="language-javascript"><code class="language-javascript">function updateTabTitle(unreadCount) {
  if (unreadCount &gt; 0) {
    document.title = "(" + unreadCount + ") Inbox";
  } else {
    document.title = "Inbox";
  }
}
// Gmail-style notification badge.
// document.title is the entry point for tab updates.</code></pre>

    <p><strong>Example: app initialization on DOM ready</strong></p>
<pre class="language-javascript"><code class="language-javascript">document.addEventListener("DOMContentLoaded", () =&gt; {
  // safe to query elements now
  const root = document.getElementById("app");
  renderUI(root);
  attachEventHandlers();
});
// the DOMContentLoaded event fires once when the page's HTML is parsed.
// any code that needs elements should run after this.</code></pre>

    <p><strong>Example: keyboard shortcut handler</strong></p>
<pre class="language-javascript"><code class="language-javascript">document.addEventListener("keydown", e =&gt; {
  if (e.ctrlKey &amp;&amp; e.key === "k") {
    e.preventDefault();
    openSearch();
  }
});
// listening on document means the shortcut works no matter what's focused.
// listening on a specific element would only fire when that element has focus.</code></pre>

    <p><strong>Example: dynamically adding a stylesheet to the page</strong></p>
<pre class="language-javascript"><code class="language-javascript">function loadTheme(themeName) {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "/themes/" + themeName + ".css";
  document.head.appendChild(link);
}
// creates a new &lt;link&gt; element and adds it to &lt;head&gt;.
// document.head is the direct reference — no need to query for it.</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-11-2-3-2': `
    <ul>
      <li><strong>The DOM tree</strong> → <code>document</code> is the root of it</li>
      <li><strong><code>document.body</code> / <code>document.head</code></strong> → direct shortcuts to common elements</li>
      <li><strong><code>document.title</code></strong> → reads/writes the browser tab text</li>
      <li><strong><code>document.URL</code> / <code>location</code></strong> → the page's address</li>
      <li><strong><code>querySelector</code> / <code>getElementById</code></strong> → methods on document for finding elements</li>
      <li><strong><code>createElement</code></strong> → method on document for building new elements</li>
      <li><strong><code>addEventListener</code></strong> → on document, listens for page-level events like DOMContentLoaded and keydown</li>
      <li><strong><code>window</code></strong> → the parent of document; for browser/tab-level stuff</li>
      <li><strong>DOMContentLoaded</strong> → the event that fires when the DOM is ready to be queried</li>
      <li><strong>Scope of search</strong> → starting from document searches everywhere; starting from an element scopes the search</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-11-2-3-3': `
    <ul>
      <li><code>document.body</code></li>
      <li><code>document.head</code></li>
      <li><code>document.title</code></li>
      <li><code>document.URL</code> / <code>location</code></li>
      <li><code>document.documentElement</code></li>
      <li><code>querySelector</code> / <code>querySelectorAll</code></li>
      <li><code>getElementById</code></li>
      <li><code>createElement</code></li>
      <li><code>DOMContentLoaded</code> event</li>
      <li><code>window</code> object</li>
    </ul>
  `,

  /* ========================================================= 
   Sub-lesson: 3.12.4 DOM → selecting elements
 =======================================================*/

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-11-3-0-0': `
    <p><strong>Selecting elements</strong> means finding a specific element (or group of elements) in the DOM so JavaScript can read it, change it, or react to it. You can't do anything to an element until you've selected it first — selection is the bridge between "the page has this thing" and "JavaScript has a reference to it."</p>
    <p>The three main selection methods are <code>getElementById</code>, <code>querySelector</code>, and <code>querySelectorAll</code>. They cover almost every selection case you'll ever need.</p>
  `,

  /* 0.1 Syntax */
  'topics-11-3-0-1': `
<pre class="language-javascript"><code class="language-javascript">// HTML:
// &lt;h1 id="title"&gt;Welcome&lt;/h1&gt;
// &lt;button class="btn"&gt;Click me&lt;/button&gt;
// &lt;ul&gt;
//   &lt;li class="item"&gt;A&lt;/li&gt;
//   &lt;li class="item"&gt;B&lt;/li&gt;
// &lt;/ul&gt;

// getElementById — find ONE element by id
const heading = document.getElementById("title"); 
// &lt;h1 id="title"&gt;Welcome&lt;/h1&gt;

// querySelector — find the FIRST element matching a CSS selector
const button = document.querySelector(".btn");
// &lt;button class="btn"&gt;Click me&lt;/button&gt;

// querySelectorAll — find ALL elements matching a CSS selector
const items = document.querySelectorAll(".item");
//   &lt;li class="item"&gt;A&lt;/li&gt;
//   &lt;li class="item"&gt;B&lt;/li&gt;

// each method returns something usable:
console.log(heading);   // &lt;h1&gt; element (or null)
console.log(button);    // first &lt;button&gt; with class "btn" (or null)
console.log(items);     // a NodeList of all .item elements</code></pre>
    <p>Each method picks a different kind of needle out of the haystack — one by id, one by anything, or all of them.</p>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-11-3-0-2': `
<pre class="language-javascript"><code class="language-javascript">
document.getElementById(idString)
//   - input: just the id value (no "#" needed)
//   - returns: the matching element, or null
//   - searches: the whole document
//   - returns: ONE element

document.querySelector(cssSelector)
//   - input: any CSS selector string (".btn", "#title", "div p", etc.)
//   - returns: the first matching element, or null
//   - searches: the whole document (unless called on an element)
//   - returns: ONE element

document.querySelectorAll(cssSelector)
//   - input: any CSS selector string
//   - returns: a NodeList containing ALL matching elements
//   - searches: the whole document (unless called on an element)
//   - returns: a COLLECTION

// quick decision tree:
//   - looking up one element by id?         → getElementById
//   - looking up one element by anything?   → querySelector
//   - looking up multiple elements?         → querySelectorAll</code></pre>
    <p>The three methods cover the three common cases: one element by id, one element by selector, or many elements. Most code uses <code>querySelector</code> and <code>querySelectorAll</code> for everything; <code>getElementById</code> sticks around because it's slightly faster and more direct.</p>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-11-3-0-3': `
    <p><strong><code>getElementById</code> takes just the id, no <code>#</code> prefix.</strong> This trips people up because the other methods need the prefix:</p>
<pre class="language-javascript"><code class="language-javascript">// Wrong — getElementById doesn't use the # symbol
document.getElementById("#title");   // returns null

// Right — just the id value
document.getElementById("title");

// querySelector DOES need the # because it takes a full CSS selector
document.querySelector("#title");    // also works, finds the same element</code></pre>

    <p><strong><code>querySelector</code> takes any CSS selector — same syntax as your stylesheet.</strong> Anything you can write in CSS, you can write here:</p>
<pre class="language-javascript"><code class="language-javascript">document.querySelector("h1");                  // first h1
document.querySelector(".btn");                  // first element with class "btn"
document.querySelector("#title");                // element with id "title"
document.querySelector("button.primary");        // button with class "primary"
document.querySelector("ul li:first-child");     // first li inside a ul
document.querySelector("[data-role='admin']");   // element with data-role="admin"
document.querySelector("nav a");                  // first &lt;a&gt; inside &lt;nav&gt;</code></pre>

    <p><strong><code>querySelector</code> returns only the FIRST match.</strong> Even if 100 elements match, you get the first one in document order:</p>
<pre class="language-javascript"><code class="language-javascript">// HTML has three .item elements
const item = document.querySelector(".item");
// returns ONLY the first one
// the other two are ignored

// to get all of them:
const items = document.querySelectorAll(".item");</code></pre>

    <p><strong><code>querySelectorAll</code> returns a NodeList, not an array.</strong> You can loop over it with <code>forEach</code> or a regular for loop, but it doesn't have full array methods:</p>
<pre class="language-javascript"><code class="language-javascript">const items = document.querySelectorAll(".item");

console.log(items.length);   // works — NodeList has .length
items.forEach(item =&gt; { ... });   // works — NodeList has forEach

// items.map(...) — does NOT work directly, NodeList isn't an array
// convert to a real array if needed:
const arr = Array.from(items);
arr.map(item =&gt; item.textContent);</code></pre>

    <p><strong>All three return <code>null</code> (or empty NodeList) when nothing matches.</strong> Always check before using the result:</p>
<pre class="language-javascript"><code class="language-javascript">const missing = document.getElementById("nope");
console.log(missing);   // null

// trying to use null causes errors
missing.textContent = "hi";
// TypeError: Cannot set property 'textContent' of null

// safe pattern:
const el = document.getElementById("maybe");
if (el) {
  el.textContent = "hi";
}

// querySelectorAll never returns null — it returns an empty NodeList instead
const none = document.querySelectorAll(".nope");
console.log(none.length);   // 0</code></pre>

    <p><strong>You can call these methods on any element, not just <code>document</code>.</strong> That scopes the search to that element's contents:</p>
<pre class="language-javascript"><code class="language-javascript">// search the whole page
const allLinks = document.querySelectorAll("a");

// search only inside the &lt;nav&gt;
const nav = document.querySelector("nav");
const navLinks = nav.querySelectorAll("a");

// useful when the page has many sections with similar elements
const article = document.querySelector("article");
const articleHeading = article.querySelector("h2");
// this finds the h2 inside the article, not the page's main h1.</code></pre>

    <p><strong><code>getElementById</code> only works on document — not on individual elements.</strong> The others work on both:</p>
<pre class="language-javascript"><code class="language-javascript">const sidebar = document.querySelector(".sidebar");

// Works
sidebar.querySelector(".widget");
sidebar.querySelectorAll(".widget");

// Doesn't exist on individual elements
sidebar.getElementById("widget-1");   // TypeError

// just use querySelector with # for the same effect:
sidebar.querySelector("#widget-1");</code></pre>

    <p><strong>IDs should be unique. If multiple elements share an id, <code>getElementById</code> returns the first one.</strong> This is technically invalid HTML, but browsers don't crash on it:</p>
<pre class="language-javascript"><code class="language-javascript">// HTML (invalid — two elements with the same id):
// &lt;div id="x"&gt;First&lt;/div&gt;
// &lt;div id="x"&gt;Second&lt;/div&gt;

document.getElementById("x");
// returns the FIRST div
// the second one is still in the DOM but harder to find

// rule: keep ids unique. it's not just a style preference, it's how browsers
// were designed to work.</code></pre>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-11-3-1-0': `
    <p>The DOM has potentially thousands of elements. To do anything useful, JavaScript needs a way to pick out exactly which one you want — by name, by category, by position, by some attribute. Without selection, you'd have no way to say "the save button," "the cart items," or "the third paragraph in the article."</p>
    <p>Selection is also what turns CSS knowledge into JavaScript power. The CSS selector syntax you already know (<code>.class</code>, <code>#id</code>, <code>tag</code>, <code>parent &gt; child</code>) works directly in <code>querySelector</code> and <code>querySelectorAll</code>. No new vocabulary needed.</p>
  `,

  /* 1.1 Why use it */
  'topics-11-3-1-1': `
    <p>Every DOM task starts by finding something to act on:</p>
<pre class="language-javascript"><code class="language-javascript">// Read what's there
const text = document.querySelector("h1").textContent;

// Change what's shown
document.getElementById("status").textContent = "Saved!";

// Wire up an event
document.querySelector(".btn").addEventListener("click", handleClick);

// Update many things at once
document.querySelectorAll(".error").forEach(el =&gt; el.classList.add("hidden"));

// Read user input
const value = document.querySelector("input[name=email]").value;

// every line above starts with "find this element" before doing anything else.</code></pre>

    <p>If you can write a CSS selector for it, you can find it with <code>querySelector</code>. That's most of what selection is.</p>
  `,

  /* 1.2 Where you use it */
  'topics-11-3-1-2': `
<pre class="language-javascript"><code class="language-javascript">// By id — fast and direct
const form = document.getElementById("login-form");

// By class — usually for groups of similar items
const cards = document.querySelectorAll(".card");

// By tag — when you want every element of a kind
const allLinks = document.querySelectorAll("a");

// Combined selectors — narrowing down
const submitBtn = document.querySelector("form button[type=submit]");
const activeTab = document.querySelector(".tab.active");
const firstError = document.querySelector(".form .error");

// Scoped to a parent — when you have many similar sections
const article = document.querySelector("article");
const articleTitle = article.querySelector("h2");

// Pseudo-classes (work the same as in CSS)
const firstItem = document.querySelector("li:first-child");
const lastItem = document.querySelector("li:last-child");

// Attribute selectors
const required = document.querySelectorAll("input[required]");
const adminLinks = document.querySelectorAll("[data-role='admin']");

// Multiple selectors at once
const headings = document.querySelectorAll("h1, h2, h3");</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-11-3-1-3': `
    <p>Selecting an element is asking the page "where's that thing?" and getting back a JavaScript handle to it. Once you have the handle, you can do anything to that element — read it, change it, listen to it, remove it. Without the handle, you can't.</p>
    <p>The three methods correspond to three questions you might ask: "find the one with this id" (<code>getElementById</code>), "find the first one matching this rule" (<code>querySelector</code>), or "find all of them matching this rule" (<code>querySelectorAll</code>). In practice, <code>querySelector</code> and <code>querySelectorAll</code> handle most cases, because their CSS-selector input is so flexible.</p>
    <p>Selection always returns something — an element, a list of elements, or <code>null</code> if nothing matches. The "<code>null</code> if nothing matches" part is where most beginner bugs hide; trying to do anything to <code>null</code> crashes.</p>
  `,

  /* 1.4 Mental model */
  'topics-11-3-1-4': `
    <p>Imagine the DOM as a giant library with millions of books. You can't do anything to a book until you've found it on the shelves. The three selection methods are three ways of finding a book.</p>
    <p><code>getElementById</code> is like asking the librarian for a book by its catalog number — fast, direct, guaranteed to land you on the exact book if it exists. <code>querySelector</code> is like saying "find me the first book on the third shelf with a blue cover" — more flexible, but you get the first match and only the first match. <code>querySelectorAll</code> is the same flexible search, but you get back every book that matches, not just the first.</p>
    <p>Once you have the book in hand (the element), you can read it, mark it up, tear out a page, or put a sticky note on it. But the finding-the-book step has to happen first. Every DOM operation that follows depends on it.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-11-3-1-5': `
<pre class="language-javascript"><code class="language-javascript">// HTML:
// &lt;header&gt;
//   &lt;h1 id="title"&gt;Welcome&lt;/h1&gt;
//   &lt;nav&gt;
//     &lt;a class="link" href="/"&gt;Home&lt;/a&gt;
//     &lt;a class="link" href="/about"&gt;About&lt;/a&gt;
//     &lt;a class="link" href="/contact"&gt;Contact&lt;/a&gt;
//   &lt;/nav&gt;
// &lt;/header&gt;

// 1. Find one element by id
const title = document.getElementById("title");
// → JavaScript walks the DOM, finds the &lt;h1 id="title"&gt;
// → returns the element object

// 2. Find the first &lt;a&gt; with class "link"
const firstLink = document.querySelector(".link");
// → returns the &lt;a&gt; for "Home" (first in document order)
// → the other two .link elements are ignored

// 3. Find all &lt;a&gt; with class "link"
const allLinks = document.querySelectorAll(".link");
// → returns a NodeList with all three &lt;a&gt; elements
// → allLinks.length === 3

// 4. Use the results
title.textContent = "Hello there!";    // updates the &lt;h1&gt;
firstLink.style.color = "red";          // colors the first link
allLinks.forEach(a =&gt; a.classList.add("nav-link"));   // adds class to all three

// notice: every change starts with a "find" step.
// without title, firstLink, or allLinks, JavaScript would have no way to act
// on those elements.</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-11-3-2-0': `
    <p>If your code crashes with "<code>Cannot read property X of null</code>," your selector didn't find anything. Log the result first and inspect it:</p>
<pre class="language-javascript"><code class="language-javascript">const el = document.querySelector(".save-btn");
console.log(el);
// null  → selector didn't match anything
// &lt;button class="save-btn"&gt;...&lt;/button&gt;  → found it

// when null:
//   - is the class/id spelled correctly?
//   - did you forget the . or # prefix in querySelector?
//   - did you write "btn-save" in JS but "save-btn" in HTML?
//   - did the script run before the element existed?
//   - is the element inside an iframe or shadow DOM?</code></pre>

    <p>For <code>querySelectorAll</code>, log <code>.length</code> first — if it's 0, no elements matched. If it's 1 when you expected more, your selector is too specific.</p>

    <p>Quickest verification: paste the same selector into the browser's DevTools console:</p>
<pre class="language-javascript"><code class="language-javascript">// in the console, run:
document.querySelectorAll(".save-btn")
// returns a NodeList — instantly shows you what matched, with no script needed.

// if it returns the right elements there, your JS selector is correct —
// the bug is probably timing (script ran too early).</code></pre>
  `,

  /* 2.1 The part that makes it click */
  'topics-11-3-2-1': `
    <p>The three methods aren't three different concepts — they're three convenient shortcuts for the same idea: "give me a reference to elements in the DOM." Once you have a reference, the methods don't matter anymore. <code>getElementById("x")</code> and <code>querySelector("#x")</code> hand you the same object, and any operation you do on that object behaves identically.</p>
    <p>This is why <code>querySelector</code> is so popular: one method, full CSS selector support, covers most cases. <code>getElementById</code> hangs around for speed and explicitness; <code>querySelectorAll</code> is just "querySelector but plural." Three doors, same room behind them.</p>
  `,

  /* 2.2 Common confusions */
  'topics-11-3-2-2': `
    <p><strong>Confusion: forgetting the <code>.</code> or <code>#</code> in <code>querySelector</code></strong></p>
<pre class="language-javascript"><code class="language-javascript">// HTML: &lt;button class="btn"&gt;...&lt;/button&gt;

document.querySelector("btn");    // looks for a &lt;btn&gt; TAG (which doesn't exist)
document.querySelector(".btn");   // looks for class "btn" ✓
document.querySelector("#btn");   // looks for id "btn"

// querySelector uses CSS selector syntax — same rules as your stylesheet.</code></pre>

    <p><strong>Confusion: including <code>#</code> in <code>getElementById</code></strong></p>
<pre class="language-javascript"><code class="language-javascript">document.getElementById("#title");   // returns null — # is part of the id, not the prefix
document.getElementById("title");      // ✓ just the id value

// getElementById is the only one that doesn't use CSS syntax.
// it takes a plain id string.</code></pre>

    <p><strong>Confusion: treating <code>querySelector</code> result like a NodeList</strong></p>
<pre class="language-javascript"><code class="language-javascript">const btn = document.querySelector(".btn");
btn.forEach(...);   // TypeError — btn is ONE element, not a list

// querySelector returns a single element (or null).
// querySelectorAll returns a NodeList.
// don't mix them up.</code></pre>

    <p><strong>Confusion: treating <code>querySelectorAll</code> result like one element</strong></p>
<pre class="language-javascript"><code class="language-javascript">const items = document.querySelectorAll(".item");
items.textContent = "hi";   // doesn't error, doesn't work — NodeList has no .textContent

// to act on each one, loop:
items.forEach(item =&gt; item.textContent = "hi");
// or get just the first:
items[0].textContent = "hi";</code></pre>

    <p><strong>Confusion: querying before the element exists</strong></p>
<pre class="language-javascript"><code class="language-javascript">// HTML order matters
// &lt;head&gt;
//   &lt;script src="app.js"&gt;&lt;/script&gt;    ← runs FIRST
// &lt;/head&gt;
// &lt;body&gt;
//   &lt;button id="save"&gt;Save&lt;/button&gt;    ← doesn't exist when script runs
// &lt;/body&gt;

// app.js
document.getElementById("save");   // null

// fix: put the script at the END of body, or wait for DOMContentLoaded
document.addEventListener("DOMContentLoaded", () =&gt; {
  document.getElementById("save").addEventListener("click", ...);
});</code></pre>

    <p><strong>Confusion: thinking <code>querySelector</code> is always slower than <code>getElementById</code></strong></p>
<pre class="language-javascript"><code class="language-javascript">// historically true, but modern browsers optimize both very well.
// the speed difference is measured in microseconds for normal use.

// in practice: use whichever reads more clearly.
// getElementById is fine. querySelector is fine.
// only think about performance if you're doing tens of thousands of queries.</code></pre>
  `,

  /* 2.3 Common mistakes */
  'topics-11-3-2-3': `
<pre class="language-javascript"><code class="language-javascript">document.getElementById("#title");
// "#" is for CSS selectors, not getElementById
// fix: drop the #
document.getElementById("title");</code></pre>

<pre class="language-javascript"><code class="language-javascript">document.querySelector("btn");
// looks for a &lt;btn&gt; tag, which doesn't exist
// fix: add the . or # depending on what you're targeting
document.querySelector(".btn");   // class
document.querySelector("#btn");   // id</code></pre>

<pre class="language-javascript"><code class="language-javascript">const btns = document.querySelectorAll(".btn");
btns.addEventListener("click", ...);
// NodeList doesn't have addEventListener — only individual elements do
// fix: loop and attach to each
btns.forEach(btn =&gt; btn.addEventListener("click", ...));</code></pre>

<pre class="language-javascript"><code class="language-javascript">const btn = document.querySelector(".save-btn");
btn.textContent = "Saved!";
// crashes if .save-btn doesn't exist — btn is null
// fix: check first
const btn = document.querySelector(".save-btn");
if (btn) btn.textContent = "Saved!";</code></pre>

<pre class="language-javascript"><code class="language-javascript">// HTML has two elements with id="x"
const el = document.getElementById("x");
// returns the first one — second is silently ignored
// fix: ids must be unique; use class for "multiple of the same kind"
// &lt;div class="x"&gt;...&lt;/div&gt;
// &lt;div class="x"&gt;...&lt;/div&gt;
document.querySelectorAll(".x");</code></pre>

<pre class="language-javascript"><code class="language-javascript">document.querySelector("nav a");
document.querySelector("nav  a");
// extra spaces in a selector are usually fine, but make sure you didn't mean a child combinator
document.querySelector("nav &gt; a");   // direct child only (no nested)
// "nav a" means "any descendant a", "nav &gt; a" means "direct child only"</code></pre>

<pre class="language-javascript"><code class="language-javascript">document.querySelector(".item").map(item =&gt; item.textContent);
// querySelector returns ONE element, not a list — can't .map()
// fix: use querySelectorAll
const texts = Array.from(document.querySelectorAll(".item")).map(item =&gt; item.textContent);</code></pre>

<pre class="language-javascript"><code class="language-javascript">// In HTML:
// &lt;div class="user-card"&gt;...&lt;/div&gt;

// In JS:
document.querySelector(".usercard");
// no match — class is "user-card" with a dash, not "usercard"
// fix: spelling and dashes have to match exactly
document.querySelector(".user-card");</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-11-3-3-0': `
<pre class="language-javascript"><code class="language-javascript">// Basics
const title = document.getElementById("title");
const btn = document.querySelector(".btn");
const items = document.querySelectorAll(".item");

// By tag
const firstP = document.querySelector("p");
const allDivs = document.querySelectorAll("div");

// By attribute
const required = document.querySelectorAll("input[required]");
const userBtn = document.querySelector("[data-user]");

// Combined
const submitBtn = document.querySelector("form button[type=submit]");
const activeNav = document.querySelector("nav .active");
const headings = document.querySelectorAll("h1, h2, h3");

// Pseudo-classes
const firstLi = document.querySelector("li:first-child");
const lastLi = document.querySelector("li:last-child");

// Scoped — within a parent
const sidebar = document.querySelector(".sidebar");
const sidebarLinks = sidebar.querySelectorAll("a");

// Checking the result
const maybe = document.querySelector(".maybe");
if (maybe) {
  maybe.textContent = "Found!";
}

// Looping over many
const cards = document.querySelectorAll(".card");
cards.forEach(card =&gt; {
  card.classList.add("loaded");
});

// Converting NodeList to array
const arr = Array.from(document.querySelectorAll(".item"));
const upperTexts = arr.map(el =&gt; el.textContent.toUpperCase());

// Counting matches
const errorCount = document.querySelectorAll(".error").length;</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-11-3-3-1': `
    <p><strong>Example: wiring up a save button</strong></p>
<pre class="language-javascript"><code class="language-javascript">const saveBtn = document.getElementById("save");
const statusEl = document.getElementById("status");

saveBtn.addEventListener("click", () =&gt; {
  statusEl.textContent = "Saving...";
  saveData().then(() =&gt; {
    statusEl.textContent = "Saved!";
  });
});
// two selections, two references, one event handler.
// every interactive UI element follows this pattern.</code></pre>

    <p><strong>Example: highlighting all required fields</strong></p>
<pre class="language-javascript"><code class="language-javascript">function markRequired() {
  const fields = document.querySelectorAll("input[required]");
  fields.forEach(field =&gt; {
    field.classList.add("required-field");
  });
}
// querySelectorAll grabs every input with the required attribute.
// the loop adds a class to each.</code></pre>

    <p><strong>Example: showing different content per tab</strong></p>
<pre class="language-javascript"><code class="language-javascript">function showTab(tabName) {
  // hide all panels
  document.querySelectorAll(".panel").forEach(p =&gt; p.classList.add("hidden"));

  // show only the matching one
  const panel = document.querySelector("[data-tab='" + tabName + "']");
  if (panel) {
    panel.classList.remove("hidden");
  }
}
// two queries: one to hide everything, one to show the matching panel.
// attribute selectors are perfect for "find the one tagged with X."</code></pre>

    <p><strong>Example: scoped queries inside a card component</strong></p>
<pre class="language-javascript"><code class="language-javascript">function setupCard(cardEl) {
  const title = cardEl.querySelector(".card-title");
  const button = cardEl.querySelector(".card-action");
  const items = cardEl.querySelectorAll(".card-item");

  button.addEventListener("click", () =&gt; {
    items.forEach(item =&gt; item.classList.toggle("expanded"));
  });
}

// apply setup to every card on the page
document.querySelectorAll(".card").forEach(setupCard);

// scoped queries (cardEl.querySelector) only look INSIDE this card.
// without scoping, clicking one card's button would affect ALL cards.</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-11-3-3-2': `
    <ul>
      <li><strong><code>document</code></strong> → the starting point for most selections</li>
      <li><strong>CSS selectors</strong> → the same syntax used in <code>querySelector</code> and <code>querySelectorAll</code></li>
      <li><strong><code>querySelector</code> returns one element</strong> → covered in detail in the next lesson</li>
      <li><strong><code>querySelectorAll</code> returns many</strong> → returns a NodeList</li>
      <li><strong>NodeList</strong> → the collection type returned by <code>querySelectorAll</code></li>
      <li><strong><code>null</code> when not found</strong> → always check before using</li>
      <li><strong>Scoped queries</strong> → calling <code>querySelector</code> on an element instead of <code>document</code></li>
      <li><strong>DOM loaded timing</strong> → why selections can return null if the script runs too early</li>
      <li><strong>Element vs NodeList</strong> → don't try to use element methods on a list, or vice versa</li>
      <li><strong>Attribute and pseudo selectors</strong> → <code>[required]</code>, <code>:first-child</code>, etc.</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-11-3-3-3': `
    <ul>
      <li><code>getElementById</code></li>
      <li><code>querySelector</code></li>
      <li><code>querySelectorAll</code></li>
      <li>CSS selectors</li>
      <li>NodeList</li>
      <li>Scoped queries</li>
      <li><code>null</code> when not found</li>
      <li>DOMContentLoaded</li>
      <li>Attribute selectors</li>
      <li><code>Array.from()</code></li>
    </ul>
  `,

/* ========================================================= 
   Sub-lesson: 3.12.5 DOM → selector syntax
 =======================================================*/

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-11-4-0-0': `
    <p><strong>Selector syntax</strong> is the mini-language you use inside <code>querySelector</code> and <code>querySelectorAll</code> to describe what you're looking for. It's the same syntax used in CSS — every CSS selector you've ever written is also a valid JavaScript selector.</p>
    <p>The three most common forms are: a bare tag name like <code>"button"</code> targets every <code>&lt;button&gt;</code>, a dot prefix like <code>".btn"</code> targets the class <code>btn</code>, and a hash prefix like <code>"#menu"</code> targets the id <code>menu</code>. Everything else builds on those three.</p>
  `,

  /* 0.1 Syntax */
  'topics-11-4-0-1': `
<pre class="language-javascript"><code class="language-javascript">// HTML:
// &lt;button id="save" class="btn primary"&gt;Save&lt;/button&gt;

// Tag — just the element name, no prefix
document.querySelector("button");

// Class — dot prefix, then the class name
document.querySelector(".btn");
document.querySelector(".primary");

// Id — hash prefix, then the id value
document.querySelector("#save");

// all three find the SAME button in this example,
// because that button has the tag, both classes, AND the id.</code></pre>
    <p>The prefix tells the selector "look for this <em>kind</em> of thing." No prefix means tag, dot means class, hash means id. Once you know those three, the rest of CSS selectors are combinations.</p>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-11-4-0-2': `
<pre class="language-javascript"><code class="language-javascript">// The three basic forms:
//
//   "tagname"      → find by tag (no prefix)
//   ".classname"   → find by class (dot prefix)
//   "#idname"      → find by id (hash prefix)
//
// Combined forms (no spaces between):
//
//   "tag.class"           → tag AND class together
//   "tag#id"              → tag AND id together
//   ".class1.class2"      → element with BOTH classes
//   "[attr]"              → element with this attribute
//   "[attr='value']"      → element with attribute matching value
//
// Hierarchy forms (with spaces):
//
//   "parent child"        → child is anywhere INSIDE parent (descendant)
//   "parent &gt; child"      → child is a DIRECT child of parent
//   "elem1, elem2"        → either elem1 or elem2 (comma = OR)
//
// Pseudo-classes (colon prefix):
//
//   ":first-child"        → first child of its parent
//   ":last-child"         → last child of its parent
//   ":hover"              → currently hovered (matches at query time only)
//   ":checked"            → for checked checkboxes/radios</code></pre>
    <p>These pieces all combine. <code>"nav a.active"</code> means "an <code>a</code> with class <code>active</code> that lives inside a <code>nav</code>." Once you can read the parts, you can build any selector by stacking them.</p>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-11-4-0-3': `
    <p><strong>No prefix = tag name.</strong> The selector is just the tag, lowercase, no decorations:</p>
<pre class="language-javascript"><code class="language-javascript">document.querySelector("h1");          // first &lt;h1&gt;
document.querySelector("button");       // first &lt;button&gt;
document.querySelector("input");        // first &lt;input&gt;
document.querySelector("p");            // first &lt;p&gt;
document.querySelectorAll("li");        // every &lt;li&gt;</code></pre>

    <p><strong>Dot prefix = class.</strong> One dot, then the class name (no quotes inside the selector — the whole thing is one string):</p>
<pre class="language-javascript"><code class="language-javascript">document.querySelector(".btn");         // first element with class "btn"
document.querySelector(".user-card");   // first .user-card
document.querySelectorAll(".item");      // every .item

// stacking multiple classes — element with ALL listed classes
document.querySelector(".btn.primary"); // class "btn" AND class "primary"</code></pre>

    <p><strong>Hash prefix = id.</strong> One hash, then the id value:</p>
<pre class="language-javascript"><code class="language-javascript">document.querySelector("#title");
document.querySelector("#save-btn");
document.querySelector("#user-12345");

// ids are unique, so querySelector("#x") and getElementById("x") return the
// same thing.</code></pre>

    <p><strong>Combine tag + class or tag + id by stacking with no space.</strong> Spaces mean hierarchy; no space means "same element":</p>
<pre class="language-javascript"><code class="language-javascript">// Same element, multiple checks
document.querySelector("button.primary");      // a &lt;button&gt; with class "primary"
document.querySelector("input#email");         // an &lt;input&gt; with id "email"
document.querySelector("a.link.active");       // an &lt;a&gt; with both classes
document.querySelector("div.card.featured");   // a &lt;div&gt; with both classes

// stacking has no spaces.
// "button .primary" (with space) means something different — see hierarchy below.</code></pre>

    <p><strong>Spaces mean hierarchy.</strong> "Parent space child" = "child anywhere inside parent":</p>
<pre class="language-javascript"><code class="language-javascript">// HTML:
// &lt;nav&gt;
//   &lt;a class="link"&gt;Home&lt;/a&gt;
//   &lt;ul&gt;
//     &lt;li&gt;
//       &lt;a class="link"&gt;About&lt;/a&gt;
//     &lt;/li&gt;
//   &lt;/ul&gt;
// &lt;/nav&gt;

document.querySelector("nav a");
// finds the first &lt;a&gt; anywhere inside &lt;nav&gt; — could be deeply nested
// matches "Home" first

document.querySelectorAll("nav a");
// returns BOTH &lt;a&gt; elements — both are inside nav</code></pre>

    <p><strong>Greater-than (<code>&gt;</code>) means DIRECT child only.</strong> No nesting allowed:</p>
<pre class="language-javascript"><code class="language-javascript">// HTML same as above

document.querySelectorAll("nav &gt; a");
// finds ONLY the "Home" link
// the "About" link is nested inside ul &gt; li, not directly inside nav

// rule: space = "descendant (anywhere inside)", &gt; = "direct child only"</code></pre>

    <p><strong>Commas mean OR.</strong> Match either selector:</p>
<pre class="language-javascript"><code class="language-javascript">document.querySelectorAll("h1, h2, h3");
// every h1, h2, or h3 on the page

document.querySelectorAll(".btn, .link");
// every element with class "btn" OR class "link"</code></pre>

    <p><strong>Square brackets for attributes.</strong> Match by attribute presence or value:</p>
<pre class="language-javascript"><code class="language-javascript">// has the attribute
document.querySelectorAll("[required]");           // every required input
document.querySelectorAll("[data-id]");            // every element with data-id

// attribute equals value
document.querySelector("[type='email']");
document.querySelector("[data-role='admin']");

// attribute starts with, contains, ends with
document.querySelectorAll("[href^='https']");      // starts with "https"
document.querySelectorAll("[class*='nav']");       // class contains "nav"
document.querySelectorAll("[src$='.png']");        // ends with ".png"</code></pre>

    <p><strong>Colon prefix for pseudo-classes.</strong> Match by state or position:</p>
<pre class="language-javascript"><code class="language-javascript">document.querySelector("li:first-child");     // first li in its parent
document.querySelector("li:last-child");       // last li in its parent
document.querySelectorAll("li:nth-child(2)"); // every 2nd-child li
document.querySelectorAll("input:checked");   // checked inputs (now)
document.querySelectorAll("a:not(.disabled)"); // every a that ISN'T .disabled</code></pre>

    <p><strong>Class names with dashes are fine — they're just part of the name.</strong> Don't escape dashes or split them:</p>
<pre class="language-javascript"><code class="language-javascript">// HTML: &lt;div class="user-profile-card"&gt;...&lt;/div&gt;

document.querySelector(".user-profile-card");   // ✓ works exactly as written
document.querySelector(".user.profile.card");   // ✗ looks for 3 separate classes</code></pre>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-11-4-1-0': `
    <p>Without a precise way to describe "which element you want," every DOM query would have to walk the entire tree manually. Selector syntax solves that by giving you one short string that the browser knows how to match — the same syntax CSS already uses to style elements.</p>
    <p>The shared syntax also means you don't have to learn a separate "JavaScript selector language." If you already use CSS, you already know how to write selectors. The only new part is putting them inside <code>querySelector()</code> instead of inside a stylesheet.</p>
  `,

  /* 1.1 Why use it */
  'topics-11-4-1-1': `
    <p>The right selector picks out exactly the elements you mean, no more and no less:</p>
<pre class="language-javascript"><code class="language-javascript">// too broad — grabs every button
document.querySelectorAll("button");

// narrower — only buttons inside the save form
document.querySelectorAll("form#save-form button");

// precise — the primary action button in the save form
document.querySelector("form#save-form button.primary");

// most specific — the save button with a specific data-id
document.querySelector("button[data-action='save']");

// the more specific the selector, the more confident you can be that you got
// exactly what you wanted.</code></pre>

    <p>Specificity matters because pages get bigger as you build them. A selector that matches one button today might match three buttons after you add more features. Tight selectors prevent that drift.</p>
  `,

  /* 1.2 Where you use it */
  'topics-11-4-1-2': `
<pre class="language-javascript"><code class="language-javascript">// Tag — broad sweeps
document.querySelectorAll("img");
document.querySelectorAll("a");

// Class — usually for groups of similar items
document.querySelectorAll(".card");
document.querySelectorAll(".error");

// Id — for one specific element
document.getElementById("login-form");
document.querySelector("#user-menu");

// Tag + class — narrow down by both
document.querySelectorAll("button.primary");
document.querySelectorAll("input.error");

// Hierarchy — scope inside a container
document.querySelectorAll(".sidebar .widget");
document.querySelectorAll("nav &gt; ul &gt; li");

// Attribute — based on data or properties
document.querySelectorAll("[required]");
document.querySelectorAll("[data-feature='beta']");

// Combinations — when one rule isn't enough
document.querySelector("form#login input[type='email']");

// OR — multiple targets at once
document.querySelectorAll("h1, h2, h3, h4");

// Pseudo-classes — state or position
document.querySelectorAll("input:checked");
document.querySelectorAll("li:first-child");</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-11-4-1-3': `
    <p>A selector is a description. "Find me the button" is the description; the selector is just that description written in a way the browser understands. <code>"button"</code> means "any button." <code>".save"</code> means "anything with class 'save'." <code>"#login"</code> means "the thing with id 'login'." Stack pieces together — <code>"button.save"</code> — and the description gets more specific.</p>
    <p>The three prefixes are the rules. No prefix means "look at the tag name." A dot means "look at the class list." A hash means "look at the id." Everything else (spaces, <code>&gt;</code>, commas, brackets, colons) is for combining those basics into more precise descriptions.</p>
    <p>You don't have to memorize every selector. The basics (tag, class, id) cover most of what you'll write. The rest you can look up when you need to match something unusual. The point is to write a description that matches exactly what you want — not too broad, not too narrow.</p>
  `,

  /* 1.4 Mental model */
  'topics-11-4-1-4': `
    <p>Think of selector syntax like giving directions to a stranger. "The button" is vague — could be any button. "The save button" is better. "The save button on the login form" is precise. The more specific your description, the more confident the stranger can be that they're at the right place.</p>
    <p>The prefixes are the categories of detail you can mention. Tag is the <em>kind</em> of thing. Class is the <em>category</em> it belongs to. Id is its <em>name</em>. Hierarchy is its <em>location</em>. Attributes are its <em>properties</em>. Each piece narrows the search.</p>
    <p>Most of the time you don't need all of them. A class alone is often enough. But when one class matches three places, you reach for combinations — class + tag, class + parent, class + attribute — until the description matches only what you want.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-11-4-1-5': `
<pre class="language-javascript"><code class="language-javascript">// HTML:
// &lt;form id="login"&gt;
//   &lt;input type="email" name="email" required&gt;
//   &lt;input type="password" name="password" required&gt;
//   &lt;button class="btn primary"&gt;Log in&lt;/button&gt;
// &lt;/form&gt;
// &lt;button class="btn"&gt;Reset&lt;/button&gt;

// 1. By tag — finds the FIRST button on the page
document.querySelector("button");
// returns: the "Log in" button (it's first in document order)

// 2. By class — finds the FIRST element with class "btn"
document.querySelector(".btn");
// returns: also the "Log in" button (same element, different angle)

// 3. By two classes — needs both
document.querySelector(".btn.primary");
// returns: "Log in" button only — Reset doesn't have "primary"

// 4. By id then descendant
document.querySelector("#login button");
// returns: "Log in" — the only button inside the form

// 5. By attribute
document.querySelectorAll("input[required]");
// returns: NodeList with the email and password inputs

// 6. Direct child
document.querySelectorAll("#login &gt; button");
// returns: NodeList with just "Log in" (button IS a direct child of form)

// 7. Combined with comma — any one match
document.querySelectorAll("h1, .btn");
// returns: every h1, plus every .btn

// every selector is a description. the browser matches elements against it,
// returns whatever fits.</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-11-4-2-0': `
    <p>The fastest way to check whether a selector is right: paste it into the DevTools console. The browser runs it instantly and shows you what matched:</p>
<pre class="language-javascript"><code class="language-javascript">// in the browser console:
document.querySelectorAll(".user-card .name")
// → returns a NodeList. you can see exactly which elements matched.

// if it returns 0 matches:
//   - typo in the class name?
//   - missed the . or #?
//   - selector too restrictive?

// if it returns more than expected:
//   - selector too loose
//   - need to add a parent scope or tag</code></pre>

    <p>DevTools also has a special <code>$$()</code> shortcut in the console that's the same as <code>document.querySelectorAll</code>, and <code>$()</code> which is the same as <code>document.querySelector</code>. They're faster to type while debugging:</p>
<pre class="language-javascript"><code class="language-javascript">$(".btn");        // same as document.querySelector(".btn")
$$(".btn");       // same as document.querySelectorAll(".btn")

// these only work in the browser console — not in your actual script files.</code></pre>
  `,

  /* 2.1 The part that makes it click */
  'topics-11-4-2-1': `
    <p>Selector syntax isn't a JavaScript invention — it's CSS, embedded inside a string. Anywhere you can write a CSS rule (<code>nav a.active</code>, <code>input[required]</code>, <code>li:first-child</code>), you can write that same string inside <code>querySelector</code>. The browser hands the string to the same matching engine CSS uses to apply your stylesheets.</p>
    <p>That's why learning selectors pays off in both directions: better CSS knowledge means better DOM queries, and writing DOM queries deepens your CSS instincts. The two share a vocabulary, and getting fluent in one helps the other.</p>
  `,

  /* 2.2 Common confusions */
  'topics-11-4-2-2': `
    <p><strong>Confusion: forgetting the <code>.</code> or <code>#</code></strong></p>
<pre class="language-javascript"><code class="language-javascript">// HTML: &lt;div class="card"&gt;...&lt;/div&gt;

document.querySelector("card");    // looks for &lt;card&gt; tag (doesn't exist)
document.querySelector(".card");   // ✓ class "card"

// no prefix = tag name. always use . for class, # for id.</code></pre>

    <p><strong>Confusion: space vs no space</strong></p>
<pre class="language-javascript"><code class="language-javascript">// "button.primary"   → ONE element that IS a button AND has class "primary"
// "button .primary"  → an element with class "primary" INSIDE a button

// big difference. spaces mean hierarchy, no spaces mean "same element."</code></pre>

    <p><strong>Confusion: <code>.class1.class2</code> vs <code>.class1 .class2</code></strong></p>
<pre class="language-javascript"><code class="language-javascript">// HTML:
// &lt;div class="card featured"&gt;...&lt;/div&gt;
// &lt;div class="card"&gt;
//   &lt;span class="featured"&gt;...&lt;/span&gt;
// &lt;/div&gt;

document.querySelector(".card.featured");
// no space — element with BOTH classes
// matches: the first &lt;div&gt;

document.querySelector(".card .featured");
// space — .featured INSIDE .card
// matches: the &lt;span&gt; inside the second &lt;div&gt;</code></pre>

    <p><strong>Confusion: trying to use a class string that starts with a number</strong></p>
<pre class="language-javascript"><code class="language-javascript">// HTML: &lt;div class="2col"&gt;...&lt;/div&gt;

document.querySelector(".2col");
// SyntaxError in older browsers, may behave oddly
// fix: avoid classes starting with digits. or escape:
document.querySelector(".\\32 col");   // ugly — better to rename the class</code></pre>

    <p><strong>Confusion: using HTML attribute names that don't match the property</strong></p>
<pre class="language-javascript"><code class="language-javascript">// HTML attribute: class
// CSS/selector syntax: .className or [class='value']
// JavaScript property: element.className or element.classList

// don't mix them:
document.querySelector("[class='btn']");    // looks for class EXACTLY "btn"
                                              // misses class="btn primary"
document.querySelector(".btn");              // ✓ matches anything with class "btn"

// rule: use .className for class checks. only use [class='x'] for very strict matches.</code></pre>

    <p><strong>Confusion: thinking selectors are case-sensitive</strong></p>
<pre class="language-javascript"><code class="language-javascript">// HTML tag names are case-insensitive in HTML — but selectors usually expect lowercase
document.querySelector("BUTTON");   // works in HTML documents
document.querySelector("button");   // ✓ preferred

// class names ARE case-sensitive:
// &lt;div class="Card"&gt;...&lt;/div&gt;
document.querySelector(".card");    // does NOT match — wrong case
document.querySelector(".Card");    // ✓

// rule: keep class names consistent and lowercase. avoid mixed case.</code></pre>
  `,

  /* 2.3 Common mistakes */
  'topics-11-4-2-3': `
<pre class="language-javascript"><code class="language-javascript">document.querySelector("btn");
// looks for a &lt;btn&gt; tag (doesn't exist)
// fix: add the dot for class
document.querySelector(".btn");</code></pre>

<pre class="language-javascript"><code class="language-javascript">document.getElementById("#title");
// "#" is for querySelector syntax, not getElementById
// fix: drop the #
document.getElementById("title");</code></pre>

<pre class="language-javascript"><code class="language-javascript">// HTML: &lt;div class="user-card"&gt;...&lt;/div&gt;
document.querySelector(".user.card");
// looks for an element with BOTH class "user" AND class "card"
// "user-card" is ONE class with a dash, not two classes
// fix: keep the dash
document.querySelector(".user-card");</code></pre>

<pre class="language-javascript"><code class="language-javascript">document.querySelector("button.primary, .secondary");
// the comma creates two separate selectors:
//   "button.primary"  → button with class primary
//   ".secondary"      → anything with class secondary
// might not be what you wanted
// to be explicit, write out both options:
document.querySelectorAll("button.primary, button.secondary");</code></pre>

<pre class="language-javascript"><code class="language-javascript">document.querySelector("nav&gt;a");
// no spaces around &gt; — works, but harder to read
// fix: add spaces for clarity (still valid)
document.querySelector("nav &gt; a");</code></pre>

<pre class="language-javascript"><code class="language-javascript">document.querySelector(".btn primary");
// space between .btn and primary — looks for .primary INSIDE .btn
// probably meant: element with BOTH classes
// fix: remove the space
document.querySelector(".btn.primary");</code></pre>

<pre class="language-javascript"><code class="language-javascript">document.querySelector('[data-id="123"]');
// in a JS string already wrapped in single quotes, the inner double quotes are fine
// but mixing quote types causes errors:
document.querySelector("[data-id="123"]");   // SyntaxError — quotes conflict
// fix: alternate quotes
document.querySelector('[data-id="123"]');
// or escape:
document.querySelector("[data-id=\\"123\\"]");</code></pre>

<pre class="language-javascript"><code class="language-javascript">document.querySelector(".error #message");
// looks for #message INSIDE .error
// if you wanted message that ALSO has class error:
document.querySelector("#message.error");
// no space, same-element rule</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-11-4-3-0': `
<pre class="language-javascript"><code class="language-javascript">// Tag
document.querySelector("h1");
document.querySelectorAll("li");

// Class
document.querySelector(".active");
document.querySelectorAll(".item");

// Id
document.querySelector("#header");
document.getElementById("header");

// Tag + class
document.querySelector("button.primary");
document.querySelectorAll("input.required");

// Tag + id
document.querySelector("form#login");

// Multiple classes (no spaces)
document.querySelector(".btn.large.primary");

// Descendant (space)
document.querySelector("article p");
document.querySelectorAll(".sidebar a");

// Direct child (&gt;)
document.querySelectorAll("ul &gt; li");

// OR (comma)
document.querySelectorAll("h1, h2, h3");

// Attribute presence
document.querySelectorAll("[required]");
document.querySelectorAll("[disabled]");

// Attribute value
document.querySelector("[type='email']");
document.querySelector("[data-role='admin']");

// Attribute starts with / contains / ends with
document.querySelectorAll("[href^='https://']");
document.querySelectorAll("[class*='icon']");
document.querySelectorAll("[src$='.svg']");

// First / last
document.querySelector("li:first-child");
document.querySelector("li:last-child");

// nth-child
document.querySelectorAll("tr:nth-child(odd)");
document.querySelectorAll("li:nth-child(3n)");

// Not
document.querySelectorAll("a:not(.disabled)");
document.querySelectorAll("li:not(:first-child)");</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-11-4-3-1': `
    <p><strong>Example: form validation — find all required empty inputs</strong></p>
<pre class="language-javascript"><code class="language-javascript">function findEmptyRequiredFields() {
  return document.querySelectorAll("input[required]");
}

function highlightEmpty() {
  findEmptyRequiredFields().forEach(input =&gt; {
    if (input.value.trim() === "") {
      input.classList.add("error");
    }
  });
}
// attribute selector grabs all the required inputs at once.</code></pre>

    <p><strong>Example: highlight the active link in a nav</strong></p>
<pre class="language-javascript"><code class="language-javascript">function setActiveLink(currentPath) {
  // clear any existing active
  document.querySelectorAll("nav a.active").forEach(a =&gt; a.classList.remove("active"));

  // set the new one
  const link = document.querySelector("nav a[href='" + currentPath + "']");
  if (link) link.classList.add("active");
}
// first call uses both a class and a tag for precision.
// second call uses attribute matching to find by href.</code></pre>

    <p><strong>Example: tab switcher</strong></p>
<pre class="language-javascript"><code class="language-javascript">function showTab(name) {
  // hide all panels
  document.querySelectorAll(".tab-panel").forEach(p =&gt; p.classList.add("hidden"));

  // deactivate all triggers
  document.querySelectorAll(".tab-button").forEach(b =&gt; b.classList.remove("active"));

  // show the matching panel
  const panel = document.querySelector(".tab-panel[data-name='" + name + "']");
  if (panel) panel.classList.remove("hidden");

  // activate the matching button
  const btn = document.querySelector(".tab-button[data-name='" + name + "']");
  if (btn) btn.classList.add("active");
}
// four different selector patterns work together: by class, by class + attribute,
// scoped to one match each.</code></pre>

    <p><strong>Example: collapsing every card except the clicked one</strong></p>
<pre class="language-javascript"><code class="language-javascript">document.querySelector(".card-list").addEventListener("click", e =&gt; {
  const card = e.target.closest(".card");
  if (!card) return;

  // collapse other cards
  document.querySelectorAll(".card.expanded").forEach(c =&gt; {
    if (c !== card) c.classList.remove("expanded");
  });

  // expand the clicked one
  card.classList.toggle("expanded");
});
// querySelectorAll grabs all currently-expanded cards.
// the loop closes everything except the one we just clicked.</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-11-4-3-2': `
    <ul>
      <li><strong>CSS selectors</strong> → same syntax, same engine</li>
      <li><strong><code>querySelector</code> / <code>querySelectorAll</code></strong> → the methods that use this syntax</li>
      <li><strong>Tag names</strong> → HTML element names like <code>div</code>, <code>p</code>, <code>button</code></li>
      <li><strong>Classes</strong> → reusable labels on multiple elements</li>
      <li><strong>Ids</strong> → unique labels on one element</li>
      <li><strong>Attribute selectors</strong> → <code>[required]</code>, <code>[type='email']</code>, etc.</li>
      <li><strong>Combinators</strong> → space (descendant), <code>&gt;</code> (direct child), <code>,</code> (OR)</li>
      <li><strong>Pseudo-classes</strong> → <code>:first-child</code>, <code>:last-child</code>, <code>:checked</code>, <code>:not()</code></li>
      <li><strong>Specificity</strong> → narrow selectors are more reliable as the page grows</li>
      <li><strong>Scoping</strong> → calling <code>querySelector</code> on an element instead of <code>document</code></li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-11-4-3-3': `
    <ul>
      <li>CSS selectors</li>
      <li>Tag names</li>
      <li>Classes (<code>.class</code>)</li>
      <li>Ids (<code>#id</code>)</li>
      <li>Attribute selectors (<code>[attr]</code>, <code>[attr='value']</code>)</li>
      <li>Descendant vs direct child (<code>space</code> vs <code>&gt;</code>)</li>
      <li>OR (<code>,</code>)</li>
      <li>Pseudo-classes (<code>:first-child</code>, <code>:checked</code>, <code>:not()</code>)</li>
      <li><code>querySelector</code></li>
      <li><code>querySelectorAll</code></li>
    </ul>
  `,

  /* ========================================================= 
   Sub-lesson: 3.12.6 DOM → querySelector returns one element
 =======================================================*/

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-11-5-0-0': `
    <p><code>querySelector</code> always returns <strong>one</strong> thing: either the first matching element in the DOM, or <code>null</code> if nothing matched. It never returns an array, never returns a list, never returns multiple elements. One element, or <code>null</code>.</p>
    <p>This single-result behavior is what makes <code>querySelector</code> different from <code>querySelectorAll</code> (which always returns a collection, even if only one thing matches, even if nothing matches). Knowing which is which prevents most of the early DOM mistakes.</p>
  `,

  /* 0.1 Syntax */
  'topics-11-5-0-1': `
<pre class="language-javascript"><code class="language-javascript">// HTML:
// &lt;button class="btn"&gt;A&lt;/button&gt;
// &lt;button class="btn"&gt;B&lt;/button&gt;
// &lt;button class="btn"&gt;C&lt;/button&gt;

// querySelector — returns ONLY the first match
const btn = document.querySelector(".btn");
console.log(btn);          // &lt;button class="btn"&gt;A&lt;/button&gt;
console.log(btn.textContent);   // "A"

// the other two buttons are ignored — querySelector stopped at the first match.

// if nothing matches:
const missing = document.querySelector(".does-not-exist");
console.log(missing);   // null</code></pre>
    <p>One match → that element. No match → <code>null</code>. Never anything else.</p>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-11-5-0-2': `
<pre class="language-javascript"><code class="language-javascript">
document.querySelector(selectorString)
//
//   input:    a CSS selector string
//   returns:  the FIRST matching element  (one DOM object)
//             OR null  (if nothing matched)
//
// "first" means first in document order — top to bottom, as the HTML appears.
// not "first one created" or "first one selected" — first in the actual HTML tree.

// example:
// &lt;div class="x"&gt;A&lt;/div&gt;
// &lt;div class="x"&gt;B&lt;/div&gt;
// &lt;div class="x"&gt;C&lt;/div&gt;

document.querySelector(".x")
// → returns A (first in source order)
// → B and C are still in the DOM, just not returned by THIS query</code></pre>
    <p>The "first" rule is mechanical: walk the tree top to bottom, return the first node that matches the selector. Stop. Anything after that is ignored.</p>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-11-5-0-3': `
    <p><strong>"First" means first in document order, not "first added by JavaScript."</strong> Adding new elements doesn't change the order — only their position in the HTML/DOM does:</p>
<pre class="language-javascript"><code class="language-javascript">// HTML:
// &lt;p class="msg"&gt;Original&lt;/p&gt;

// JavaScript adds another at the top
const newP = document.createElement("p");
newP.className = "msg";
newP.textContent = "Inserted";
document.body.prepend(newP);   // insert at the beginning

// HTML now effectively:
// &lt;p class="msg"&gt;Inserted&lt;/p&gt;
// &lt;p class="msg"&gt;Original&lt;/p&gt;

document.querySelector(".msg").textContent;   // "Inserted" — first in the DOM now</code></pre>

    <p><strong>If nothing matches, you get <code>null</code> — never an empty array or an empty element.</strong> This is the most common source of crashes:</p>
<pre class="language-javascript"><code class="language-javascript">const btn = document.querySelector(".not-here");
console.log(btn);   // null

// trying to do anything with null crashes:
btn.textContent = "hi";
// TypeError: Cannot set property 'textContent' of null

// always defend against null when you're not 100% sure the element exists:
if (btn) {
  btn.textContent = "hi";
}
// or with optional chaining (modern shortcut):
btn?.classList.add("active");</code></pre>

    <p><strong>The result is a real DOM element — you can use any element method/property on it.</strong> Read, write, listen, modify:</p>
<pre class="language-javascript"><code class="language-javascript">const heading = document.querySelector("h1");

// read
heading.textContent;
heading.className;
heading.getAttribute("data-id");

// write
heading.textContent = "New";
heading.classList.add("active");
heading.style.color = "red";

// listen
heading.addEventListener("click", handler);

// inspect
heading.parentNode;
heading.children;
heading.nextElementSibling;</code></pre>

    <p><strong>Calling <code>querySelector</code> on an element instead of <code>document</code> scopes the search.</strong> The element-version finds the first match <em>inside that element</em>:</p>
<pre class="language-javascript"><code class="language-javascript">// HTML:
// &lt;section class="news"&gt;
//   &lt;h2&gt;News&lt;/h2&gt;
// &lt;/section&gt;
// &lt;section class="updates"&gt;
//   &lt;h2&gt;Updates&lt;/h2&gt;
// &lt;/section&gt;

// page-wide — finds the first h2 anywhere
document.querySelector("h2");
// returns the "News" h2 (first in document order)

// scoped to one section
const updates = document.querySelector(".updates");
updates.querySelector("h2");
// returns the "Updates" h2 — search was scoped inside the updates section</code></pre>

    <p><strong><code>querySelector</code> is identical to <code>querySelectorAll(...)[0]</code> in spirit, but more efficient.</strong> The browser knows to stop at the first match:</p>
<pre class="language-javascript"><code class="language-javascript">// these return the same element (assuming at least one match):
document.querySelector(".item");
document.querySelectorAll(".item")[0];

// but querySelector is faster — it stops searching after finding one.
// querySelectorAll walks the whole tree to gather every match.

// when you only need one, use querySelector.</code></pre>

    <p><strong>You can use any CSS selector, including complex ones, and still get one result.</strong> The complexity changes what counts as a "match" but doesn't change the "one result" rule:</p>
<pre class="language-javascript"><code class="language-javascript">document.querySelector("nav ul li:first-child a.active");
// could be the most specific selector in the world — still returns one element (or null).

document.querySelector("h1, h2, h3");
// even with OR (comma), returns the first match for any of those tags.</code></pre>

    <p><strong>The returned element is "live" — modifying it modifies the page.</strong> The variable isn't a copy; it's a reference to the actual DOM object:</p>
<pre class="language-javascript"><code class="language-javascript">const heading = document.querySelector("h1");
const sameHeading = document.querySelector("h1");

console.log(heading === sameHeading);   // true — both point to the same DOM node

heading.textContent = "Changed";
console.log(sameHeading.textContent);   // "Changed" — same object</code></pre>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-11-5-1-0': `
    <p>Most of the time you only want one specific element — the submit button, the page title, a specific input. Looping over a list when you just need one thing is awkward. <code>querySelector</code> gives you back the single element directly, ready to use, without indexing into a collection or stopping a loop early.</p>
    <p>The "or null" half of the return value is also important: it lets your code defend against missing elements without throwing. The element might exist or might not; <code>querySelector</code> tells you which without crashing.</p>
  `,

  /* 1.1 Why use it */
  'topics-11-5-1-1': `
    <p>When you want exactly one element, <code>querySelector</code> reads cleanest:</p>
<pre class="language-javascript"><code class="language-javascript">// Get the page heading
const h1 = document.querySelector("h1");

// Get the submit button
const submit = document.querySelector("button[type='submit']");

// Get the first error message
const error = document.querySelector(".error");

// Get a specific input
const email = document.querySelector("input[name='email']");

// every line above wants ONE thing. querySelector returns that one thing.
// no array indexing, no .forEach, no early break.</code></pre>

    <p>It's also the natural pair to <code>getElementById</code> when you want to use CSS-style selectors instead of plain ids — same single-result idea, different lookup mechanism.</p>
  `,

  /* 1.2 Where you use it */
  'topics-11-5-1-2': `
<pre class="language-javascript"><code class="language-javascript">// One specific element
const form = document.querySelector("#login");
const heading = document.querySelector("h1");
const firstItem = document.querySelector("li");

// One element by attribute
const userInput = document.querySelector("input[name='user']");
const beta = document.querySelector("[data-feature='beta']");

// One nested element
const sidebarHeading = document.querySelector(".sidebar h2");
const submitInForm = document.querySelector("#login button[type='submit']");

// Defensive — might not exist yet
const banner = document.querySelector(".error-banner");
if (banner) banner.remove();

// Optional chaining for "act if exists"
document.querySelector(".tooltip")?.classList.add("hidden");

// Scoped to a parent
const article = document.querySelector("article");
const articleTitle = article.querySelector(".title");

// Comparing references
const a = document.querySelector("#a");
const b = document.querySelector("#a");
console.log(a === b);   // true — same DOM node</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-11-5-1-3': `
    <p><code>querySelector</code> asks the page "find me the first thing that matches this description." If something matches, you get that thing — one element, ready to read or change. If nothing matches, you get <code>null</code>, which is JavaScript's way of saying "couldn't find it."</p>
    <p>The "first match" part is mechanical: walk the page top to bottom, return the first match, ignore everything else. You don't pick which match — the DOM order decides. If you wanted a different match (the third, the last, the one with a specific attribute), you'd narrow the selector or use <code>querySelectorAll</code> and index into the list.</p>
    <p>The "or null" part is the thing to remember. Every <code>querySelector</code> call could fail to find anything, and your code has to handle that — either by checking before using the result, or by being sure the element exists. Forgetting this is where most <code>"Cannot read property X of null"</code> errors come from.</p>
  `,

  /* 1.4 Mental model */
  'topics-11-5-1-4': `
    <p>Picture asking a librarian to find you a book. You give them a description ("a red book with 'JavaScript' on the spine"), they walk the shelves top to bottom, and they hand you back one book — the first one they spotted that matches. Even if ten books match, you get one.</p>
    <p>If they can't find any matching book, they come back empty-handed and say "no match." They don't hand you a fake book, an empty bag, or a list of zero books — just nothing. That "nothing" is <code>null</code>. Your job is to check whether the librarian came back with a book or with nothing, and handle both cases.</p>
    <p>Once you have the book in hand, it's a real, full book. You can read it, mark it up, return it, copy it. That's the element. The librarian's role is over — they got you the book. Now it's just you and the book.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-11-5-1-5': `
<pre class="language-javascript"><code class="language-javascript">// HTML:
// &lt;ul&gt;
//   &lt;li class="task"&gt;Buy milk&lt;/li&gt;
//   &lt;li class="task"&gt;Walk dog&lt;/li&gt;
//   &lt;li class="task"&gt;Read book&lt;/li&gt;
// &lt;/ul&gt;

const task = document.querySelector(".task");

// step by step:
// 1. document.querySelector(".task") starts at the top of the DOM.
// 2. it walks the tree in document order, looking for the first .task.
// 3. it reaches &lt;li class="task"&gt;Buy milk&lt;/li&gt;. Match.
// 4. it STOPS searching. The other two .task elements are ignored.
// 5. it returns the element object representing "Buy milk".

console.log(task);              // &lt;li class="task"&gt;Buy milk&lt;/li&gt;
console.log(task.textContent);   // "Buy milk"

// note: querySelector did NOT return [li1, li2, li3].
// it didn't return a NodeList. it returned ONE element — the first one.

// querySelectorAll would have returned all three:
const tasks = document.querySelectorAll(".task");
console.log(tasks.length);   // 3</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-11-5-2-0': `
    <p>If your code crashes with "<code>Cannot read property X of null</code>" right after a <code>querySelector</code> call, the selector didn't match anything. Log the result and inspect:</p>
<pre class="language-javascript"><code class="language-javascript">const el = document.querySelector(".save-btn");
console.log(el);
// null  → selector didn't match anything (selector wrong, or element doesn't exist yet)
// &lt;button class="save-btn"&gt;...&lt;/button&gt;  → found it, your code should work

// when null:
//   - typo in the selector?
//   - missing . or # prefix?
//   - element not in the DOM yet (script ran too early)?
//   - selector too restrictive (".btn.primary" when no element has both)?</code></pre>

    <p>If your code finds the wrong element instead of the one you wanted, the selector matched something earlier in the DOM. Tighten the selector — add a parent scope, a class, or an attribute — until only the right element matches.</p>
<pre class="language-javascript"><code class="language-javascript">// too broad — returns the wrong button
const btn = document.querySelector("button");

// narrower — the right one
const btn = document.querySelector(".save-form button[type='submit']");</code></pre>
  `,

  /* 2.1 The part that makes it click */
  'topics-11-5-2-1': `
    <p>The "one element or null" rule is what makes <code>querySelector</code> simple to reason about. There's no list to loop over, no array to index into, no possibility of multiple values back. You either have an element to work with, or you don't. Two cases — handle both, and you're done.</p>
    <p>This also makes <code>querySelector</code> a natural fit for "find this specific thing" code: ids, unique elements, things you know are singular. When you find yourself wanting "all of them" or "the third one," that's the signal to switch to <code>querySelectorAll</code> instead.</p>
  `,

  /* 2.2 Common confusions */
  'topics-11-5-2-2': `
    <p><strong>Confusion: thinking <code>querySelector</code> returns a list</strong></p>
<pre class="language-javascript"><code class="language-javascript">const btn = document.querySelector(".btn");
btn.forEach(...);   // TypeError — btn is one element, not a list

// querySelector returns ONE element. you don't loop over it.
// to loop, use querySelectorAll:
document.querySelectorAll(".btn").forEach(...);</code></pre>

    <p><strong>Confusion: not checking for null</strong></p>
<pre class="language-javascript"><code class="language-javascript">document.querySelector(".maybe").textContent = "hi";
// crashes if .maybe doesn't exist — querySelector returned null
// fix: check first
const el = document.querySelector(".maybe");
if (el) el.textContent = "hi";

// or use optional chaining
document.querySelector(".maybe")?.classList.add("done");</code></pre>

    <p><strong>Confusion: thinking <code>querySelector(".x")</code> returns "all the .x elements"</strong></p>
<pre class="language-javascript"><code class="language-javascript">// HTML has 5 .item elements
const item = document.querySelector(".item");
// returns ONE — the first .item in document order.
// the other four are still in the DOM, just not returned by this query.

// if you wanted to touch all of them, use querySelectorAll.</code></pre>

    <p><strong>Confusion: querySelector returns "first found" not "best match"</strong></p>
<pre class="language-javascript"><code class="language-javascript">// "first" is purely about position, not relevance or specificity.
// if you have 3 buttons:
// &lt;button class="btn"&gt;A&lt;/button&gt;
// &lt;button class="btn primary"&gt;B&lt;/button&gt;
// &lt;button class="btn"&gt;C&lt;/button&gt;

document.querySelector(".btn");
// returns A — first .btn in source order
// B has more classes (.btn.primary), but A still wins because of position</code></pre>

    <p><strong>Confusion: thinking <code>querySelector</code> always finds the visible one</strong></p>
<pre class="language-javascript"><code class="language-javascript">// querySelector doesn't care about visibility.
// hidden elements, display:none elements, off-screen elements — all match.

// HTML:
// &lt;button class="btn" style="display: none"&gt;Hidden&lt;/button&gt;
// &lt;button class="btn"&gt;Visible&lt;/button&gt;

document.querySelector(".btn");
// returns the HIDDEN button — it's first in the DOM, visibility is irrelevant.

// if you only want visible elements, you have to filter manually.</code></pre>

    <p><strong>Confusion: thinking the variable copies the element</strong></p>
<pre class="language-javascript"><code class="language-javascript">const a = document.querySelector("h1");
const b = document.querySelector("h1");

a.textContent = "Changed";
console.log(b.textContent);   // "Changed" — same object

// querySelector returns a REFERENCE to the DOM node, not a copy.
// every call that finds the same element returns the same reference.</code></pre>
  `,

  /* 2.3 Common mistakes */
  'topics-11-5-2-3': `
<pre class="language-javascript"><code class="language-javascript">document.querySelector(".btn").textContent = "Saved";
// crashes if .btn doesn't exist
// fix: check for null
const btn = document.querySelector(".btn");
if (btn) btn.textContent = "Saved";</code></pre>

<pre class="language-javascript"><code class="language-javascript">const items = document.querySelector(".item");
items.forEach(item =&gt; ...);
// querySelector returns ONE element, not a list — forEach doesn't exist
// fix: use querySelectorAll for lists
const items = document.querySelectorAll(".item");
items.forEach(item =&gt; ...);</code></pre>

<pre class="language-javascript"><code class="language-javascript">const btn = document.querySelector("button");
// expected: the SUBMIT button
// got: some other button that appears earlier in the DOM
// fix: narrow the selector
const btn = document.querySelector("form#login button[type='submit']");</code></pre>

<pre class="language-javascript"><code class="language-javascript">if (document.querySelector(".error") = null) { ... }
// "=" is assignment, not comparison
// fix: use === for comparison, but better — check truthiness directly
if (document.querySelector(".error")) { ... }
if (document.querySelector(".error") === null) { ... }   // also works</code></pre>

<pre class="language-javascript"><code class="language-javascript">document.querySelector(".btn")[0];
// indexing into a single element returns undefined
// fix: querySelector already returns one element — drop the [0]
document.querySelector(".btn");</code></pre>

<pre class="language-javascript"><code class="language-javascript">const el = document.querySelector(".missing");
el.addEventListener("click", handler);
// crashes if .missing isn't on the page
// fix: defend with optional chaining or an if
document.querySelector(".missing")?.addEventListener("click", handler);</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Inside a card-list, querying without scoping
function setupCard(card) {
  const title = document.querySelector(".title");   // finds the FIRST .title on the page
  title.textContent = card.data.title;
}
// every card overwrites the same title because document-wide query finds the same element
// fix: scope to the card
function setupCard(card) {
  const title = card.querySelector(".title");
  title.textContent = card.data.title;
}</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-11-5-3-0': `
<pre class="language-javascript"><code class="language-javascript">// Finding one
const title = document.querySelector("h1");
const submit = document.querySelector("button[type='submit']");
const firstError = document.querySelector(".error");

// Handling null safely
const el = document.querySelector(".maybe");
if (el) {
  el.textContent = "Found";
}

// Optional chaining shortcut
document.querySelector(".tooltip")?.classList.add("hidden");

// Reading values
const value = document.querySelector("input[name='email']").value;

// Listening to events
document.querySelector("#save").addEventListener("click", () =&gt; {
  console.log("Saved!");
});

// Scoped query
const card = document.querySelector(".card");
const cardTitle = card.querySelector(".title");
const cardAction = card.querySelector(".action");

// Comparing references
const a = document.querySelector("h1");
const b = document.querySelector("h1");
console.log(a === b);   // true

// Combined with createElement
const list = document.querySelector("ul");
const newItem = document.createElement("li");
newItem.textContent = "New";
list.appendChild(newItem);

// Finding by attribute
const adminPanel = document.querySelector("[data-role='admin']");

// First match in a complex selector
const firstActiveTab = document.querySelector(".tabs .tab.active");

// Checking existence as boolean
const hasErrors = document.querySelector(".error") !== null;</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-11-5-3-1': `
    <p><strong>Example: wiring up a single form's submit button</strong></p>
<pre class="language-javascript"><code class="language-javascript">function setupLoginForm() {
  const form = document.querySelector("#login-form");
  if (!form) return;

  const submitBtn = form.querySelector("button[type='submit']");
  const emailInput = form.querySelector("input[name='email']");

  submitBtn.addEventListener("click", () =&gt; {
    console.log("logging in:", emailInput.value);
  });
}
// each query returns ONE element. each variable holds one DOM reference.
// scoping the inner queries to "form" prevents collisions with other forms.</code></pre>

    <p><strong>Example: showing a tooltip when an element is found</strong></p>
<pre class="language-javascript"><code class="language-javascript">function showTooltip(message) {
  const tooltip = document.querySelector(".tooltip");
  if (!tooltip) {
    console.warn("no .tooltip element on the page");
    return;
  }
  tooltip.textContent = message;
  tooltip.classList.remove("hidden");
}
// defending against null lets the function fail gracefully instead of crashing.</code></pre>

    <p><strong>Example: clearing a single banner when present</strong></p>
<pre class="language-javascript"><code class="language-javascript">function dismissBanner() {
  document.querySelector(".banner")?.remove();
}
// optional chaining means "if the banner exists, remove it; otherwise do nothing."
// no banner, no crash, no fuss.</code></pre>

    <p><strong>Example: navigating to a specific section on the page</strong></p>
<pre class="language-javascript"><code class="language-javascript">function scrollToSection(name) {
  const section = document.querySelector("section[data-name='" + name + "']");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  } else {
    console.warn("section not found:", name);
  }
}
// one section is the target — querySelector returns one or null.
// the if-check handles missing sections cleanly.</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-11-5-3-2': `
    <ul>
      <li><strong><code>querySelectorAll</code></strong> → the plural counterpart that returns all matches</li>
      <li><strong><code>getElementById</code></strong> → also returns one element, but only by id</li>
      <li><strong>CSS selector syntax</strong> → what goes inside <code>querySelector(...)</code></li>
      <li><strong><code>null</code> when not found</strong> → the second possible return value, easily forgotten</li>
      <li><strong>Optional chaining (<code>?.</code>)</strong> → modern shortcut for handling null safely</li>
      <li><strong>Document order</strong> → "first" means first in the source HTML</li>
      <li><strong>Scoped queries</strong> → calling on an element instead of <code>document</code></li>
      <li><strong>References vs copies</strong> → the result is a live reference to the DOM node</li>
      <li><strong>DOM loaded timing</strong> → premature queries return null even when the element exists in HTML</li>
      <li><strong>Element methods</strong> → what you can do once you have the element</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-11-5-3-3': `
    <ul>
      <li><code>querySelector</code></li>
      <li><code>querySelectorAll</code></li>
      <li><code>getElementById</code></li>
      <li><code>null</code> when not found</li>
      <li>Optional chaining (<code>?.</code>)</li>
      <li>CSS selector syntax</li>
      <li>Scoped queries</li>
      <li>Document order</li>
      <li>References vs copies</li>
      <li><code>DOMContentLoaded</code></li>
    </ul>
  `,

  /* ========================================================= 
   Sub-lesson: 3.12.7 DOM → querySelectorAll returns many
 =======================================================*/

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-11-6-0-0': `
    <p><code>querySelectorAll</code> returns <strong>every</strong> element that matches the selector — not just the first one. Instead of a single element, you get back a <strong>NodeList</strong>: a collection of all matching elements, in document order.</p>
    <p>Even if only one element matches, you still get a NodeList (with one item). Even if zero elements match, you still get a NodeList (empty, length 0). It never returns <code>null</code>. The return type is always the same — a NodeList — just with different contents depending on how many matches there were.</p>
  `,

  /* 0.1 Syntax */
  'topics-11-6-0-1': `
<pre class="language-javascript"><code class="language-javascript">// HTML:
// &lt;li class="task"&gt;Buy milk&lt;/li&gt;
// &lt;li class="task"&gt;Walk dog&lt;/li&gt;
// &lt;li class="task"&gt;Read book&lt;/li&gt;

const tasks = document.querySelectorAll(".task");
// &lt;li class="task"&gt;Buy milk&lt;/li&gt;
// &lt;li class="task"&gt;Walk dog&lt;/li&gt;
// &lt;li class="task"&gt;Read book&lt;/li&gt;
console.log(tasks);          // NodeList(3) [li, li, li]
console.log(tasks.length);    // 3

// access by index — just like an array
console.log(tasks[0].textContent);   // "Buy milk"
console.log(tasks[1].textContent);   // "Walk dog"
console.log(tasks[2].textContent);   // "Read book"

// loop over each one
tasks.forEach(task =&gt; {
  console.log(task.textContent);
});</code></pre>
    <p>One call, many results. The NodeList behaves a lot like an array — you can index into it, check its length, and use <code>forEach</code> — but it's not a full array.</p>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-11-6-0-2': `
<pre class="language-javascript"><code class="language-javascript">
document.querySelectorAll(selectorString)
//
//   input:    a CSS selector string
//   returns:  a NodeList containing ALL matching elements
//
// the NodeList:
//   - has .length (number of matches)
//   - is indexable: list[0], list[1], list[2], ...
//   - has .forEach() for looping
//   - is "iterable" — works with for...of
//   - is NOT a real array — no .map, .filter, .reduce, .push, etc.
//
// possible return shapes:
//   match 0 elements   → empty NodeList, length 0
//   match 1 element    → NodeList with 1 item
//   match many         → NodeList with many items
//
// you NEVER get null from querySelectorAll. always a NodeList.</code></pre>
    <p>The "always returns a NodeList" rule is important — it means you can always safely do <code>result.length</code> or <code>result.forEach(...)</code> without checking for null first.</p>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-11-6-0-3': `
    <p><strong>Order matches document order.</strong> The first element in the NodeList is the first matching element in the HTML, top to bottom:</p>
<pre class="language-javascript"><code class="language-javascript">// HTML:
// &lt;p class="x"&gt;A&lt;/p&gt;
// &lt;p class="x"&gt;B&lt;/p&gt;
// &lt;p class="x"&gt;C&lt;/p&gt;

const list = document.querySelectorAll(".x");
console.log(list[0].textContent);   // "A"
console.log(list[1].textContent);   // "B"
console.log(list[2].textContent);   // "C"
// always source order, regardless of how the elements were added.</code></pre>

    <p><strong><code>.length</code> tells you how many matched.</strong> Always check this when you're not sure how many results to expect:</p>
<pre class="language-javascript"><code class="language-javascript">const items = document.querySelectorAll(".item");
console.log(items.length);   // 0 if none, 1 if one, N if many

if (items.length === 0) {
  console.log("nothing found");
} else {
  console.log("found " + items.length + " items");
}</code></pre>

    <p><strong>You can loop with <code>forEach</code>, <code>for...of</code>, or a regular <code>for</code> loop.</strong> All three work fine on NodeList:</p>
<pre class="language-javascript"><code class="language-javascript">const items = document.querySelectorAll(".item");

// forEach
items.forEach(item =&gt; {
  console.log(item.textContent);
});

// for...of
for (const item of items) {
  console.log(item.textContent);
}

// regular for with index
for (let i = 0; i &lt; items.length; i++) {
  console.log(i, items[i].textContent);
}</code></pre>

    <p><strong>NodeList is not a real array. Most array methods don't work directly.</strong> Convert it if you need <code>.map</code>, <code>.filter</code>, <code>.reduce</code>, etc.:</p>
<pre class="language-javascript"><code class="language-javascript">const items = document.querySelectorAll(".item");

// these don't exist on NodeList:
items.map(...);     // TypeError
items.filter(...);  // TypeError
items.push(...);    // TypeError

// convert with Array.from():
const arr = Array.from(items);
arr.map(item =&gt; item.textContent);
arr.filter(item =&gt; item.classList.contains("active"));

// or the spread shortcut:
const arr2 = [...items];
arr2.map(item =&gt; item.textContent);</code></pre>

    <p><strong>NodeLists from <code>querySelectorAll</code> are static, not live.</strong> If the DOM changes after the query, the NodeList doesn't update:</p>
<pre class="language-javascript"><code class="language-javascript">// HTML has 3 .item elements
const items = document.querySelectorAll(".item");
console.log(items.length);   // 3

// add a new .item to the DOM
const newItem = document.createElement("div");
newItem.className = "item";
document.body.appendChild(newItem);

// the NodeList from before still has the original 3:
console.log(items.length);   // still 3, not 4

// to see the new one, query again:
const fresh = document.querySelectorAll(".item");
console.log(fresh.length);   // 4</code></pre>

    <p><strong>Scoping works — call it on an element to search only inside that element.</strong> Same as <code>querySelector</code>:</p>
<pre class="language-javascript"><code class="language-javascript">// HTML:
// &lt;section class="sidebar"&gt;
//   &lt;a&gt;Sidebar 1&lt;/a&gt;
//   &lt;a&gt;Sidebar 2&lt;/a&gt;
// &lt;/section&gt;
// &lt;section class="main"&gt;
//   &lt;a&gt;Main 1&lt;/a&gt;
//   &lt;a&gt;Main 2&lt;/a&gt;
// &lt;/section&gt;

const allLinks = document.querySelectorAll("a");
// → 4 elements (everything on the page)

const sidebar = document.querySelector(".sidebar");
const sidebarLinks = sidebar.querySelectorAll("a");
// → 2 elements (only inside sidebar)</code></pre>

    <p><strong>Empty NodeList is "falsy" only in terms of length, not the NodeList itself.</strong> An empty NodeList is still a truthy object:</p>
<pre class="language-javascript"><code class="language-javascript">const none = document.querySelectorAll(".not-here");
console.log(none);          // NodeList [] (empty)
console.log(none.length);    // 0

if (none) {
  console.log("truthy");   // this DOES log — NodeList is truthy even when empty
}

// to check for "found something," check length:
if (none.length &gt; 0) {
  console.log("found at least one");
}
// or just check length directly:
if (none.length) {
  console.log("found at least one");
}</code></pre>

    <p><strong>You can also access NodeList items with <code>.item(index)</code>, but indexing is more common.</strong> Both do the same thing:</p>
<pre class="language-javascript"><code class="language-javascript">const items = document.querySelectorAll(".item");

items[0];           // common
items.item(0);      // also valid, just less common

// indexing returns undefined for out-of-range:
items[100];         // undefined
items.item(100);    // null</code></pre>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-11-6-1-0': `
    <p>When you want to apply the same change to many elements at once — every card, every link, every error message — you need a way to get them all back from one query. <code>querySelectorAll</code> solves that: one call, every matching element, ready to loop over.</p>
    <p>It also gives you a count. <code>length</code> tells you how many matches there were, which is often the question you actually wanted to answer ("how many errors are on the page?"). Without it, you'd have to build the count manually.</p>
  `,

  /* 1.1 Why use it */
  'topics-11-6-1-1': `
    <p>The classic case: apply the same change to many elements:</p>
<pre class="language-javascript"><code class="language-javascript">// Mark all required fields with an error class
document.querySelectorAll("input[required]").forEach(input =&gt; {
  if (input.value === "") input.classList.add("error");
});

// Disable all buttons during a save operation
document.querySelectorAll("button").forEach(btn =&gt; btn.disabled = true);

// Clear all current notifications
document.querySelectorAll(".notification").forEach(n =&gt; n.remove());

// Count items
const errorCount = document.querySelectorAll(".error").length;

// every line above relies on "get all of them and act on each."
// without querySelectorAll, you'd need a different approach (recursion, walking the DOM)
// to find all the matches manually.</code></pre>

    <p>It's also useful for the "is there even one?" question — <code>.length &gt; 0</code> tells you immediately, no looping needed.</p>
  `,

  /* 1.2 Where you use it */
  'topics-11-6-1-2': `
<pre class="language-javascript"><code class="language-javascript">// Loop over every match
document.querySelectorAll(".card").forEach(card =&gt; {
  card.classList.add("loaded");
});

// Count matches
const errorCount = document.querySelectorAll(".error").length;

// Index into the result
const items = document.querySelectorAll(".item");
const second = items[1];
const last = items[items.length - 1];

// Convert to an array for map/filter/reduce
const titles = Array.from(document.querySelectorAll("h2"))
  .map(h =&gt; h.textContent);

// Scope to a section
const formInputs = document.querySelector("#login")
  .querySelectorAll("input");

// "Are there any of these?" — check length
if (document.querySelectorAll(".unread").length &gt; 0) {
  console.log("you have unread messages");
}

// Find AND remove
document.querySelectorAll(".old").forEach(el =&gt; el.remove());

// Find AND transform into something else
const ids = [...document.querySelectorAll("[data-id]")]
  .map(el =&gt; el.dataset.id);</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-11-6-1-3': `
    <p><code>querySelectorAll</code> asks the page "find me every element matching this description." You get back a collection — a NodeList — containing all the matches, in the order they appear in the HTML. Empty, one item, hundreds of items — same kind of result, just different contents.</p>
    <p>The NodeList lets you do everything you'd normally want to do with a list: count it (<code>.length</code>), index into it (<code>list[0]</code>), or loop over it (<code>forEach</code>, <code>for...of</code>, <code>for</code>). It's "array-like" — close enough to feel like an array for most cases, but technically not one. If you need true array methods (<code>.map</code>, <code>.filter</code>), you convert it first with <code>Array.from</code> or the spread operator.</p>
    <p>One thing to watch: NodeLists from <code>querySelectorAll</code> are a snapshot. If you query, then add elements, your snapshot doesn't update. That's usually fine — you query right before you act — but it can surprise you if you cache the result and expect it to stay current.</p>
  `,

  /* 1.4 Mental model */
  'topics-11-6-1-4': `
    <p>Picture the librarian from <code>querySelector</code>, but now they don't stop at the first match — they walk the entire library and bring back every book that fits the description. They give you the stack, in shelf order. Three books, ten books, zero books — same kind of delivery, just different stacks.</p>
    <p>Once you have the stack, you can flip through it (<code>forEach</code>), grab the second one off the top (<code>list[1]</code>), or count how many they brought you (<code>.length</code>). What you can't do is start adding or removing books from the stack itself — it's a snapshot of what the librarian found, frozen at the moment they handed it over.</p>
    <p>The stack you have isn't an array, even though it acts like one most of the time. If you want to do array things like map every book into a list of titles, you copy the stack into a real array first.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-11-6-1-5': `
<pre class="language-javascript"><code class="language-javascript">// HTML:
// &lt;div class="card"&gt;Card A&lt;/div&gt;
// &lt;div class="card"&gt;Card B&lt;/div&gt;
// &lt;div class="card"&gt;Card C&lt;/div&gt;

const cards = document.querySelectorAll(".card");

// step by step:
// 1. document.querySelectorAll(".card") walks the whole DOM tree.
// 2. it collects EVERY element matching .card, in document order.
// 3. it wraps them in a NodeList.
// 4. it returns that NodeList — even if 0, 1, or 100 matched.

console.log(cards);          // NodeList(3) [div, div, div]
console.log(cards.length);   // 3
console.log(cards[0]);       // first .card
console.log(cards[2]);       // last .card

// looping
cards.forEach(card =&gt; {
  card.classList.add("active");
});
// after this runs, all three .card divs have class "active"

// querySelector would have returned ONLY the first .card.
// querySelectorAll returned ALL of them.</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-11-6-2-0': `
    <p>If your <code>querySelectorAll</code> isn't doing what you expect, log the result's <code>.length</code> first — it tells you immediately whether the selector matched anything:</p>
<pre class="language-javascript"><code class="language-javascript">const items = document.querySelectorAll(".item");
console.log("found:", items.length);

// 0 — selector didn't match anything
//   - typo? wrong class? missing prefix?
// 1 — exactly one matched
//   - might mean your selector is too restrictive
// N — many matched
//   - your selector is working; loop with forEach to act on each</code></pre>

    <p>If you cached a NodeList and it seems "stale," remember: it's a snapshot from when you called the method. Re-query to get the current state:</p>
<pre class="language-javascript"><code class="language-javascript">// at startup
const cards = document.querySelectorAll(".card");
console.log(cards.length);   // 3

// later, after some cards are added/removed
addNewCard();
console.log(cards.length);   // still 3 — stale!

// re-query
const fresh = document.querySelectorAll(".card");
console.log(fresh.length);   // current count</code></pre>
  `,

  /* 2.1 The part that makes it click */
  'topics-11-6-2-1': `
    <p>The pair <code>querySelector</code> / <code>querySelectorAll</code> covers nearly every "find elements" need. One returns one element (or null); the other returns a collection (possibly empty). Same selector syntax, different return shapes — which one you use depends entirely on whether you want one thing or many things.</p>
    <p>Once you have a NodeList, the rest is just collection mechanics. Count its length, loop over its items, index into it, or convert it to a real array if you need fancier array methods. None of it is DOM-specific — the same patterns apply to any array-like collection in JavaScript.</p>
  `,

  /* 2.2 Common confusions */
  'topics-11-6-2-2': `
    <p><strong>Confusion: treating NodeList like an array</strong></p>
<pre class="language-javascript"><code class="language-javascript">const items = document.querySelectorAll(".item");

items.map(item =&gt; item.textContent);     // TypeError — no .map
items.filter(item =&gt; item.checked);       // TypeError — no .filter
items.push(newItem);                       // TypeError — no .push

// fix: convert with Array.from() or the spread operator
const arr = Array.from(items);
arr.map(...);

// or
const arr2 = [...items];
arr2.filter(...);</code></pre>

    <p><strong>Confusion: treating NodeList like one element</strong></p>
<pre class="language-javascript"><code class="language-javascript">const buttons = document.querySelectorAll(".btn");
buttons.addEventListener("click", handler);   // TypeError — NodeList doesn't have addEventListener

// fix: loop and attach to each
buttons.forEach(btn =&gt; btn.addEventListener("click", handler));</code></pre>

    <p><strong>Confusion: thinking <code>querySelectorAll</code> returns null when nothing matches</strong></p>
<pre class="language-javascript"><code class="language-javascript">const none = document.querySelectorAll(".not-here");
console.log(none === null);    // false
console.log(none);              // NodeList(0) — empty NodeList
console.log(none.length);       // 0

// querySelectorAll NEVER returns null — always a NodeList.
// to check "did anything match", use length:
if (none.length === 0) { ... }
if (none.length &gt; 0) { ... }</code></pre>

    <p><strong>Confusion: thinking NodeList is live</strong></p>
<pre class="language-javascript"><code class="language-javascript">const items = document.querySelectorAll(".item");
console.log(items.length);   // 3

// add a new item
const fresh = document.createElement("div");
fresh.className = "item";
document.body.appendChild(fresh);

console.log(items.length);   // still 3 — NodeList is a SNAPSHOT, not live

// to see the new item:
const updated = document.querySelectorAll(".item");
console.log(updated.length);   // 4

// note: some other DOM collections (HTMLCollection from getElementsByTagName)
// ARE live. but querySelectorAll's NodeList is not.</code></pre>

    <p><strong>Confusion: thinking <code>NodeList[0]</code> and <code>querySelector(...)</code> are the same speed</strong></p>
<pre class="language-javascript"><code class="language-javascript">// They return the same element, but the work is different:

document.querySelector(".item");
// stops after finding the first match.

document.querySelectorAll(".item")[0];
// walks the entire DOM to collect ALL matches, then takes the first.

// if you only need one, use querySelector. it's more efficient.</code></pre>

    <p><strong>Confusion: querySelectorAll empty result is "falsy"</strong></p>
<pre class="language-javascript"><code class="language-javascript">const none = document.querySelectorAll(".missing");

if (none) {
  console.log("found something");   // ALWAYS logs — NodeList is truthy, even empty
}

// the NodeList itself is always a truthy object.
// to check "was it empty?", check length:
if (none.length) {
  console.log("found something");
}</code></pre>
  `,

  /* 2.3 Common mistakes */
  'topics-11-6-2-3': `
<pre class="language-javascript"><code class="language-javascript">const items = document.querySelectorAll(".item");
items.textContent = "hi";
// NodeList doesn't have textContent — that's an element property
// fix: loop
items.forEach(item =&gt; item.textContent = "hi");</code></pre>

<pre class="language-javascript"><code class="language-javascript">const items = document.querySelectorAll(".item");
items.map(item =&gt; item.textContent);
// NodeList has no .map method
// fix: convert to array first
Array.from(items).map(item =&gt; item.textContent);
// or
[...items].map(item =&gt; item.textContent);</code></pre>

<pre class="language-javascript"><code class="language-javascript">const buttons = document.querySelectorAll("button");
if (buttons) {
  buttons.forEach(b =&gt; b.disabled = true);
}
// the if always passes — NodeList is truthy even when empty
// fix: check length
if (buttons.length &gt; 0) {
  buttons.forEach(b =&gt; b.disabled = true);
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">const items = document.querySelectorAll(".item");
items[0].remove();
items[1].remove();
items[2].remove();
// NodeList captured 3 items
// after removing, NodeList still references the same DOM nodes — but they're no longer on the page
// (this technically works, but trying to use them as if still on the page can cause issues)
// fix: convert to array and loop, or use forEach
items.forEach(item =&gt; item.remove());</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Caching a NodeList that should be re-queried
const cards = document.querySelectorAll(".card");
function refresh() {
  cards.forEach(card =&gt; updateCard(card));   // doesn't include newly added cards
}
// fix: re-query inside the function
function refresh() {
  document.querySelectorAll(".card").forEach(card =&gt; updateCard(card));
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">const list = document.querySelectorAll(".item");
console.log(list[100]);   // undefined — out of range
console.log(list[100].textContent);   // TypeError
// fix: check length or use optional chaining
if (list[100]) list[100].textContent = "hi";
list[100]?.textContent = "hi";   // NOTE: optional chaining on assignment isn't valid; use if instead</code></pre>

<pre class="language-javascript"><code class="language-javascript">document.querySelectorAll(".item").forEach((item, i) =&gt; {
  if (i === 0) item.remove();
  console.log(item.classList);   // first item was removed — still has class info but not in DOM
});
// removing items during forEach can confuse later iterations
// fix: collect items, then act
const items = Array.from(document.querySelectorAll(".item"));
items.forEach((item, i) =&gt; {
  if (i === 0) item.remove();
});</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-11-6-3-0': `
<pre class="language-javascript"><code class="language-javascript">// Find all
const cards = document.querySelectorAll(".card");
const required = document.querySelectorAll("input[required]");
const headings = document.querySelectorAll("h1, h2, h3");

// Count
console.log(document.querySelectorAll(".error").length);

// Index into
const items = document.querySelectorAll(".item");
const first = items[0];
const last = items[items.length - 1];

// Loop with forEach
items.forEach((item, i) =&gt; {
  console.log(i, item.textContent);
});

// Loop with for...of
for (const item of items) {
  console.log(item);
}

// Loop with regular for
for (let i = 0; i &lt; items.length; i++) {
  console.log(items[i]);
}

// Add class to many
document.querySelectorAll(".error").forEach(el =&gt; el.classList.add("highlight"));

// Remove many
document.querySelectorAll(".obsolete").forEach(el =&gt; el.remove());

// Convert to array
const arr = Array.from(document.querySelectorAll(".tag"));
const arr2 = [...document.querySelectorAll(".tag")];

// Use array methods after converting
const checked = Array.from(document.querySelectorAll("input[type=checkbox]"))
  .filter(input =&gt; input.checked);

const titles = [...document.querySelectorAll("h2")]
  .map(h =&gt; h.textContent);

// Scope to a parent
const list = document.querySelector("ul");
const listItems = list.querySelectorAll("li");

// Check empty
const hasErrors = document.querySelectorAll(".error").length &gt; 0;

// Wire up many event handlers
document.querySelectorAll(".tab").forEach(tab =&gt; {
  tab.addEventListener("click", handleTab);
});</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-11-6-3-1': `
    <p><strong>Example: highlight all errors in a form</strong></p>
<pre class="language-javascript"><code class="language-javascript">function highlightErrors() {
  const errorFields = document.querySelectorAll(".field.error");
  errorFields.forEach(field =&gt; {
    field.scrollIntoView({ block: "center" });
    field.classList.add("shake");
  });
}
// querySelectorAll grabs every error field. forEach applies the same change to each.</code></pre>

    <p><strong>Example: count unread notifications</strong></p>
<pre class="language-javascript"><code class="language-javascript">function updateBadge() {
  const count = document.querySelectorAll(".notification.unread").length;
  const badge = document.querySelector(".badge");
  if (count &gt; 0) {
    badge.textContent = count;
    badge.classList.remove("hidden");
  } else {
    badge.classList.add("hidden");
  }
}
// no looping — just need the count. .length gives it in one shot.</code></pre>

    <p><strong>Example: wire up tabs on page load</strong></p>
<pre class="language-javascript"><code class="language-javascript">document.querySelectorAll(".tab").forEach(tab =&gt; {
  tab.addEventListener("click", () =&gt; {
    document.querySelectorAll(".tab").forEach(t =&gt; t.classList.remove("active"));
    tab.classList.add("active");
  });
});
// outer forEach attaches a listener to each tab.
// inner forEach clears "active" from all tabs whenever one is clicked.</code></pre>

    <p><strong>Example: filter a list of items based on a query</strong></p>
<pre class="language-javascript"><code class="language-javascript">function filterItems(query) {
  const items = document.querySelectorAll(".item");
  items.forEach(item =&gt; {
    if (item.textContent.toLowerCase().includes(query)) {
      item.classList.remove("hidden");
    } else {
      item.classList.add("hidden");
    }
  });
}
// one querySelectorAll, one forEach. each item is hidden or shown based on the query.</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-11-6-3-2': `
    <ul>
      <li><strong><code>querySelector</code></strong> → the singular counterpart that returns one element or null</li>
      <li><strong>NodeList</strong> → the collection type returned by <code>querySelectorAll</code></li>
      <li><strong><code>forEach</code></strong> → built into NodeList, the standard way to loop</li>
      <li><strong><code>Array.from</code> / spread (<code>[...]</code>)</strong> → convert to a real array for <code>.map</code>, <code>.filter</code>, etc.</li>
      <li><strong>Static vs live collections</strong> → querySelectorAll is static; getElementsByTagName is live</li>
      <li><strong>CSS selector syntax</strong> → same selectors as querySelector</li>
      <li><strong>Document order</strong> → results come back in source order</li>
      <li><strong>Scoped queries</strong> → calling on an element instead of <code>document</code></li>
      <li><strong>Empty results</strong> → still a NodeList (truthy), check <code>.length</code> for "found anything?"</li>
      <li><strong>Index access</strong> → <code>list[0]</code>, <code>list[i]</code>, <code>list[list.length - 1]</code></li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-11-6-3-3': `
    <ul>
      <li><code>querySelector</code></li>
      <li><code>querySelectorAll</code></li>
      <li>NodeList</li>
      <li><code>Array.from()</code></li>
      <li>Spread operator <code>[...list]</code></li>
      <li><code>forEach</code></li>
      <li><code>for...of</code></li>
      <li>Live vs static collections</li>
      <li>Scoped queries</li>
      <li>CSS selectors</li>
    </ul>
  `,

  /* ========================================================= 
   Sub-lesson: 3.12.8 DOM → NodeList basics
 =======================================================*/

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-11-7-0-0': `
    <p>A <strong>NodeList</strong> is the collection type the browser returns when you ask for multiple DOM nodes at once — most commonly from <code>querySelectorAll</code>. It looks and acts <em>almost</em> like an array, but it isn't one. Some array methods work on it, others don't.</p>
    <p>Understanding NodeList properly means knowing both sides of that "almost." The parts that work like an array let you loop, count, and index into the results naturally. The parts that don't — no <code>.map</code>, no <code>.filter</code>, no <code>.push</code> — are the small details that catch you off guard until you've seen them once.</p>
  `,

  /* 0.1 Syntax */
  'topics-11-7-0-1': `
<pre class="language-javascript"><code class="language-javascript">// querySelectorAll always returns a NodeList
const items = document.querySelectorAll(".item");

console.log(items);           // NodeList(3) [li, li, li]
console.log(items.length);     // 3
console.log(items[0]);         // first &lt;li&gt;
console.log(items[1]);         // second &lt;li&gt;

// what works on NodeList:
items.length;                // number of items
items[i];                     // index access
items.forEach(fn);            // loop
for (const item of items) {}  // iterable

// what doesn't:
items.map(...);               // not an array method on NodeList
items.filter(...);
items.push(...);</code></pre>
    <p>It's array-shaped for the basics — but it's not actually an array. Once you accept that, you know when to use NodeList directly and when to convert it.</p>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-11-7-0-2': `
<pre class="language-javascript"><code class="language-javascript">// A NodeList is an OBJECT (not an Array). Its essential pieces:
//
//   .length             → how many items
//   list[index]         → access by position (0-based)
//   .forEach(callback)  → loop method built in
//   .item(index)        → same as list[index], rarely used
//   .entries()          → for [index, item] pairs
//   .keys()             → indices
//   .values()           → items
//
// What it DOESN'T have:
//   .map, .filter, .reduce, .find, .some, .every
//   .push, .pop, .shift, .unshift, .splice, .slice
//   .indexOf, .includes
//   .concat, .join, .sort, .reverse
//
// to use any of those, convert first:
//   const arr = Array.from(list);
//   const arr = [...list];
// after conversion, all array methods are available.</code></pre>
    <p>The split is consistent: <em>read-only iteration</em> works (length, indexing, forEach, for...of). <em>Array transformation methods</em> don't. Convert it the moment you need transformation, and you're back in normal array territory.</p>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-11-7-0-3': `
    <p><strong>NodeList is "array-like" — it has <code>.length</code> and numeric indexes, but its prototype is not Array.</strong> This is why some array methods are missing:</p>
<pre class="language-javascript"><code class="language-javascript">const list = document.querySelectorAll(".item");

console.log(Array.isArray(list));    // false — NOT an array
console.log(list instanceof Array);   // false
console.log(list instanceof NodeList);   // true
console.log(typeof list);             // "object"

// it LOOKS like an array because of length + numeric keys, but it's a different type.</code></pre>

    <p><strong><code>forEach</code> on a NodeList works just like on an array.</strong> Same callback signature, same behavior:</p>
<pre class="language-javascript"><code class="language-javascript">const items = document.querySelectorAll("li");

items.forEach((item, index, list) =&gt; {
  console.log(index, item.textContent);
});

// item  → current element
// index → its position in the NodeList
// list  → the whole NodeList (rarely needed)

// callback can return anything — return value is ignored.</code></pre>

    <p><strong>NodeList is iterable, so <code>for...of</code> works.</strong> Useful when you want to <code>break</code> out of the loop early, which <code>forEach</code> doesn't allow:</p>
<pre class="language-javascript"><code class="language-javascript">const items = document.querySelectorAll(".item");

// for...of — supports break and continue
for (const item of items) {
  if (item.classList.contains("stop")) break;
  console.log(item.textContent);
}

// forEach — cannot break
items.forEach(item =&gt; {
  // there's no way to stop this loop early.
  // throwing an error works but is ugly. use for...of or for instead.
});</code></pre>

    <p><strong>Convert with <code>Array.from()</code> or the spread operator for array methods.</strong> Both produce a real array:</p>
<pre class="language-javascript"><code class="language-javascript">const list = document.querySelectorAll(".tag");

// Array.from — explicit and supports a mapping function
const tags1 = Array.from(list);
const tags2 = Array.from(list, el =&gt; el.textContent);   // map during conversion

// spread operator — short and clean
const tags3 = [...list];
const tags4 = [...list].map(el =&gt; el.textContent);

// after conversion, all array methods are available:
tags1.filter(el =&gt; el.classList.contains("active"));
tags1.reduce((acc, el) =&gt; acc + el.textContent.length, 0);
tags1.sort((a, b) =&gt; a.textContent.localeCompare(b.textContent));</code></pre>

    <p><strong>NodeLists from <code>querySelectorAll</code> are static.</strong> Other DOM collections (HTMLCollection from older methods) are live:</p>
<pre class="language-javascript"><code class="language-javascript">// Static — snapshot at the moment of the query
const staticList = document.querySelectorAll(".item");

// Live — automatically updates as the DOM changes
const liveList = document.getElementsByClassName("item");

// Add a new .item to the DOM
const newEl = document.createElement("div");
newEl.className = "item";
document.body.appendChild(newEl);

console.log(staticList.length);   // unchanged from before — snapshot
console.log(liveList.length);      // incremented — live

// rule: querySelectorAll → NodeList (static)
//       getElementsByTagName, getElementsByClassName → HTMLCollection (live)</code></pre>

    <p><strong>Out-of-range indexing returns <code>undefined</code>, not an error.</strong> The <code>.item()</code> method returns <code>null</code> instead:</p>
<pre class="language-javascript"><code class="language-javascript">const items = document.querySelectorAll(".item");
console.log(items.length);   // 3

console.log(items[5]);         // undefined
console.log(items.item(5));    // null
console.log(items[5].textContent);   // TypeError: cannot read property of undefined

// to check safely:
if (items[5]) items[5].classList.add("found");
items[5]?.classList.add("found");   // optional chaining</code></pre>

    <p><strong>You can also get <code>[index, item]</code> pairs with <code>.entries()</code>.</strong> Useful when you want both during iteration:</p>
<pre class="language-javascript"><code class="language-javascript">const items = document.querySelectorAll(".item");

for (const [index, item] of items.entries()) {
  console.log(index, item.textContent);
}

// equivalent to:
items.forEach((item, index) =&gt; {
  console.log(index, item.textContent);
});</code></pre>

    <p><strong>NodeList items can be anything that's a DOM node — usually elements, but not always.</strong> Some methods return text nodes or comments:</p>
<pre class="language-javascript"><code class="language-javascript">// querySelectorAll only returns ELEMENTS — never text/comment nodes
document.querySelectorAll("*");   // every element in the document

// childNodes returns ALL node types — including text and comments
const all = document.body.childNodes;
all.forEach(node =&gt; {
  console.log(node.nodeType, node.nodeName);
  // 1 = element, 3 = text, 8 = comment
});

// "NodeList" is a generic term — the contents depend on what method made it.
// from querySelectorAll: always elements.
// from childNodes: any node type.</code></pre>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-11-7-1-0': `
    <p>NodeList exists because the DOM needed a way to return "many nodes at once" before JavaScript had iteration or array-like patterns nailed down. It's specifically designed to feel like an array for the operations that matter most (loop, count, index) without being a full array under the hood.</p>
    <p>Knowing how it differs from an array prevents the most common confusion: trying to call <code>.map</code> on it and getting an error. Once you know the rule ("convert if you need array methods"), the rest of NodeList just works.</p>
  `,

  /* 1.1 Why use it */
  'topics-11-7-1-1': `
    <p>Most of the time, you don't <em>choose</em> NodeList — you get one whether you wanted it or not, as the return value of <code>querySelectorAll</code> or <code>childNodes</code>. The question is what to do with it:</p>
<pre class="language-javascript"><code class="language-javascript">// Just iterate? Use it directly — no conversion needed.
document.querySelectorAll(".btn").forEach(btn =&gt; btn.disabled = true);

// Need to count? .length works.
const count = document.querySelectorAll(".error").length;

// Need to index? Bracket notation works.
const first = document.querySelectorAll(".item")[0];

// Need to .map, .filter, .reduce, .find? Convert first.
const titles = [...document.querySelectorAll("h2")].map(h =&gt; h.textContent);

// Need to .sort or .reverse? Convert first.
const sorted = Array.from(document.querySelectorAll(".item"))
  .sort((a, b) =&gt; a.textContent.localeCompare(b.textContent));</code></pre>

    <p>The rule of thumb: if you're only reading or looping, use the NodeList as-is. If you're transforming or sorting, convert first.</p>
  `,

  /* 1.2 Where you use it */
  'topics-11-7-1-2': `
<pre class="language-javascript"><code class="language-javascript">// Direct usage — read and iterate
const items = document.querySelectorAll(".item");
console.log(items.length);
items.forEach(item =&gt; console.log(item.textContent));

// Direct usage — index access
const items = document.querySelectorAll("li");
items[0];                          // first
items[items.length - 1];           // last
items[Math.floor(items.length / 2)];   // middle

// Direct usage — for...of with break
for (const el of items) {
  if (el.classList.contains("stop")) break;
  process(el);
}

// Convert when needing array methods
const titles = [...document.querySelectorAll("h2")].map(h =&gt; h.textContent);
const checked = Array.from(document.querySelectorAll("input"))
  .filter(input =&gt; input.checked);

// Convert to count specific items
const errorCount = [...document.querySelectorAll(".field")]
  .filter(f =&gt; f.classList.contains("error")).length;

// Convert to find one matching a predicate
const expanded = [...document.querySelectorAll(".panel")]
  .find(p =&gt; p.classList.contains("open"));

// Iterate with index using entries()
for (const [i, item] of items.entries()) {
  console.log(i, item);
}</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-11-7-1-3': `
    <p>A NodeList is "a list of DOM nodes" — that's it. It's not an array, not a regular object, just a special list type the browser hands back when you ask for multiple things. Most of the time you treat it like an array: count it, index into it, loop over it. The browser cooperates because those are the operations a list needs to support.</p>
    <p>The catch is when you reach for array-only features like <code>.map</code>, <code>.filter</code>, or <code>.push</code>. NodeList doesn't have those. The fix is one line — convert with <code>Array.from()</code> or spread (<code>[...list]</code>) — and then you have a real array with all the methods.</p>
    <p>The biggest practical difference from an array (besides missing methods) is that a NodeList from <code>querySelectorAll</code> is a snapshot. It captures the matches at the moment you called the method, and never updates after that. Adding new matching elements to the page doesn't make them show up in your old NodeList. That's fine most of the time — you query right before you act — but it's the gotcha to remember.</p>
  `,

  /* 1.4 Mental model */
  'topics-11-7-1-4': `
    <p>Picture a polaroid photo. You take a snapshot of every <code>.item</code> on the page right now. The photo has them lined up, in order, and you can count them, point to the third one, or flip through them one by one. But the photo doesn't update if the scene changes — adding a new <code>.item</code> later doesn't appear on the photo you already took.</p>
    <p>The polaroid also can't be reshuffled, cropped, or merged with another photo. Those are array operations. If you want to sort, filter, or transform what's in the photo, you copy the photo's contents into a real list (an array) first. Then you can do all the editing you want on the array — but the original NodeList photo stays exactly as it was.</p>
    <p>The polaroid metaphor explains both halves: the convenience (instant, ordered, easy to read) and the limitations (snapshot, missing array tools). Once you've seen both, the NodeList stops feeling weird.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-11-7-1-5': `
<pre class="language-javascript"><code class="language-javascript">// HTML:
// &lt;li class="item"&gt;A&lt;/li&gt;
// &lt;li class="item"&gt;B&lt;/li&gt;
// &lt;li class="item"&gt;C&lt;/li&gt;

const items = document.querySelectorAll(".item");

// What you have now:
console.log(items);
// NodeList(3) [li.item, li.item, li.item]

// You can:
console.log(items.length);   // 3
console.log(items[0]);        // &lt;li class="item"&gt;A&lt;/li&gt;
console.log(items[2]);        // &lt;li class="item"&gt;C&lt;/li&gt;

items.forEach(item =&gt; console.log(item.textContent));
// "A", "B", "C"

// You CAN'T:
items.map(item =&gt; item.textContent);   // TypeError

// Fix — convert:
const arr = Array.from(items);
console.log(arr);   // [li, li, li] — now a real array
arr.map(item =&gt; item.textContent);   // ["A", "B", "C"]

// note: arr is a new array, but the items inside it are still the same DOM nodes.
// modifying arr[0] still modifies the &lt;li&gt; on the page.
arr[0].textContent = "Changed";
console.log(items[0].textContent);   // "Changed" — same DOM node, different containers</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-11-7-2-0': `
    <p>If you get "<code>X is not a function</code>" right after a <code>querySelectorAll</code>, you probably tried to call an array-only method on the NodeList. Log the result first to confirm it's a NodeList:</p>
<pre class="language-javascript"><code class="language-javascript">const list = document.querySelectorAll(".item");
console.log(list);
// NodeList(3) [...]  → it's a NodeList; convert before using .map etc.

// quick conversion fixes most errors:
[...list].map(el =&gt; el.textContent);
Array.from(list).filter(el =&gt; el.checked);</code></pre>

    <p>If a NodeList seems "stale" — missing newly added elements — it's because <code>querySelectorAll</code>'s result is a static snapshot. Re-query when you need fresh results:</p>
<pre class="language-javascript"><code class="language-javascript">// at startup
const cards = document.querySelectorAll(".card");
console.log(cards.length);   // 3

addNewCard();                 // adds a 4th .card to the DOM

console.log(cards.length);    // still 3 — stale

const fresh = document.querySelectorAll(".card");
console.log(fresh.length);    // 4</code></pre>
  `,

  /* 2.1 The part that makes it click */
  'topics-11-7-2-1': `
    <p>NodeList isn't a "broken array" or an "almost-array" — it's its own thing, with its own job. It exists to be returned from DOM methods, and it does that job efficiently: indexable, iterable, countable, loopable. The missing array methods aren't bugs; they're just not in NodeList's scope.</p>
    <p>The friction beginners feel comes from expecting it to be a full array. Once you stop expecting that and treat conversion (<code>Array.from</code>, spread) as a normal step when you need array power, the awkwardness disappears. NodeList for iteration, real arrays for transformation — that's the rhythm.</p>
  `,

  /* 2.2 Common confusions */
  'topics-11-7-2-2': `
    <p><strong>Confusion: thinking <code>typeof list</code> tells you it's an array</strong></p>
<pre class="language-javascript"><code class="language-javascript">const list = document.querySelectorAll(".item");
console.log(typeof list);             // "object"
console.log(Array.isArray(list));     // false — NOT an array

// "object" is too vague to help here.
// use Array.isArray() to check for a real array.
// use instanceof NodeList to check for a NodeList specifically.</code></pre>

    <p><strong>Confusion: calling array methods directly</strong></p>
<pre class="language-javascript"><code class="language-javascript">const items = document.querySelectorAll(".item");
items.map(item =&gt; item.textContent);     // TypeError: items.map is not a function
items.filter(item =&gt; item.checked);       // TypeError
items.push(newItem);                       // TypeError

// fix: convert before using array methods
[...items].map(item =&gt; item.textContent);
Array.from(items).filter(...);</code></pre>

    <p><strong>Confusion: thinking NodeList updates automatically</strong></p>
<pre class="language-javascript"><code class="language-javascript">const items = document.querySelectorAll(".item");
console.log(items.length);   // 3

// add new items
addManyItems();

console.log(items.length);   // STILL 3 — querySelectorAll's NodeList is static

// fix: re-query, or use a live collection (getElementsByClassName)</code></pre>

    <p><strong>Confusion: NodeList vs HTMLCollection</strong></p>
<pre class="language-javascript"><code class="language-javascript">// Both are array-like, both have length, both indexable.
// But they're different types with different methods.

const nodeList = document.querySelectorAll(".item");     // NodeList — static
const htmlColl = document.getElementsByClassName("item");  // HTMLCollection — live

nodeList.forEach(...);   // ✓ NodeList has forEach
htmlColl.forEach(...);   // ✗ HTMLCollection has no forEach

// to use forEach on HTMLCollection, convert to array:
Array.from(htmlColl).forEach(...);

// rule: querySelectorAll → NodeList (preferred for most code).
//       getElementsByX → HTMLCollection (older, live, fewer methods).</code></pre>

    <p><strong>Confusion: thinking an empty NodeList is falsy</strong></p>
<pre class="language-javascript"><code class="language-javascript">const none = document.querySelectorAll(".not-here");

if (none) console.log("found");    // ALWAYS logs — NodeList is truthy even when empty

// to check empty:
if (none.length === 0) console.log("empty");
if (!none.length) console.log("empty");</code></pre>

    <p><strong>Confusion: comparing NodeLists for equality</strong></p>
<pre class="language-javascript"><code class="language-javascript">const a = document.querySelectorAll(".item");
const b = document.querySelectorAll(".item");

console.log(a === b);   // false — different NodeList objects, even with same items

// to compare contents:
const sameContents = a.length === b.length &amp;&amp;
  [...a].every((el, i) =&gt; el === b[i]);</code></pre>
  `,

  /* 2.3 Common mistakes */
  'topics-11-7-2-3': `
<pre class="language-javascript"><code class="language-javascript">const items = document.querySelectorAll(".item");
const upperTexts = items.map(item =&gt; item.textContent.toUpperCase());
// TypeError — NodeList has no .map
// fix: convert first
const upperTexts = [...items].map(item =&gt; item.textContent.toUpperCase());</code></pre>

<pre class="language-javascript"><code class="language-javascript">const buttons = document.querySelectorAll("button");
buttons.push(newButton);
// TypeError — NodeList has no .push
// fix: NodeLists aren't meant to be modified. add to the DOM directly:
document.body.appendChild(newButton);</code></pre>

<pre class="language-javascript"><code class="language-javascript">const items = document.querySelectorAll(".item");
items[10].textContent = "hi";
// TypeError: cannot set property of undefined — index out of range
// fix: check first
if (items[10]) items[10].textContent = "hi";</code></pre>

<pre class="language-javascript"><code class="language-javascript">if (document.querySelectorAll(".error")) {
  console.log("errors found");
}
// always runs — NodeList is truthy even empty
// fix: check length
if (document.querySelectorAll(".error").length &gt; 0) {
  console.log("errors found");
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">const items = document.querySelectorAll(".item");
addNewItem();
items.forEach(item =&gt; console.log(item));   // doesn't include the new one
// fix: re-query for fresh results
document.querySelectorAll(".item").forEach(item =&gt; console.log(item));</code></pre>

<pre class="language-javascript"><code class="language-javascript">document.querySelectorAll(".item").map(...);
// trying to chain on the NodeList directly
// fix: convert in one line
[...document.querySelectorAll(".item")].map(...);
Array.from(document.querySelectorAll(".item")).map(...);</code></pre>

<pre class="language-javascript"><code class="language-javascript">const items = document.querySelectorAll(".item");
const arr = Array.from(items);
arr.push("new");
console.log(items.length);   // unchanged — arr is a separate array
// the original NodeList isn't modified by changes to the converted array
// this is usually what you want, but worth being aware of</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-11-7-3-0': `
<pre class="language-javascript"><code class="language-javascript">// Get a NodeList
const items = document.querySelectorAll(".item");

// Length
console.log(items.length);

// Index access
const first = items[0];
const last = items[items.length - 1];

// Loop with forEach
items.forEach((item, i) =&gt; {
  console.log(i, item);
});

// Loop with for...of (supports break)
for (const item of items) {
  if (item.classList.contains("stop")) break;
  console.log(item);
}

// Loop with classic for
for (let i = 0; i &lt; items.length; i++) {
  console.log(items[i]);
}

// Get [index, item] pairs
for (const [i, item] of items.entries()) {
  console.log(i, item);
}

// Convert to array (spread)
const arr = [...items];

// Convert to array (Array.from)
const arr2 = Array.from(items);

// Convert and transform in one step
const titles = Array.from(items, item =&gt; item.textContent);

// Map after conversion
const upperTitles = [...items].map(item =&gt; item.textContent.toUpperCase());

// Filter after conversion
const active = [...items].filter(item =&gt; item.classList.contains("active"));

// Find after conversion
const expanded = [...items].find(item =&gt; item.classList.contains("expanded"));

// Reduce after conversion
const totalChars = [...items].reduce((sum, item) =&gt; sum + item.textContent.length, 0);

// Check existence
if (items.length &gt; 0) console.log("some items found");

// Empty check
const isEmpty = items.length === 0;

// Type check
console.log(items instanceof NodeList);   // true
console.log(Array.isArray(items));        // false</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-11-7-3-1': `
    <p><strong>Example: count items matching a condition</strong></p>
<pre class="language-javascript"><code class="language-javascript">function countUnread(notifications) {
  return [...notifications].filter(n =&gt; n.classList.contains("unread")).length;
}

const count = countUnread(document.querySelectorAll(".notification"));
console.log("unread:", count);
// the NodeList is converted so .filter is available.
// the count comes from filtering the array, not the NodeList.</code></pre>

    <p><strong>Example: extract text from many elements</strong></p>
<pre class="language-javascript"><code class="language-javascript">function getAllHeadingTexts() {
  return [...document.querySelectorAll("h1, h2, h3")].map(h =&gt; h.textContent);
}

const titles = getAllHeadingTexts();
console.log(titles);   // ["Welcome", "About Us", "Contact"]
// spread + map turns the NodeList into an array of strings.</code></pre>

    <p><strong>Example: sort options before rendering</strong></p>
<pre class="language-javascript"><code class="language-javascript">function sortDropdownOptions(select) {
  const options = Array.from(select.querySelectorAll("option"));
  options.sort((a, b) =&gt; a.textContent.localeCompare(b.textContent));
  options.forEach(opt =&gt; select.appendChild(opt));
}
// NodeLists can't be sorted directly.
// converting to array, sorting, and re-appending reorders the options in the DOM.</code></pre>

    <p><strong>Example: highlight every other row</strong></p>
<pre class="language-javascript"><code class="language-javascript">function stripeRows(table) {
  const rows = table.querySelectorAll("tr");
  rows.forEach((row, i) =&gt; {
    if (i % 2 === 1) row.classList.add("stripe");
  });
}
// forEach gives you index for free. no conversion needed for this case.</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-11-7-3-2': `
    <ul>
      <li><strong><code>querySelectorAll</code></strong> → the most common source of NodeLists</li>
      <li><strong>NodeList vs HTMLCollection</strong> → two similar but different DOM collection types</li>
      <li><strong>Array-like objects</strong> → NodeList is a classic example</li>
      <li><strong><code>Array.from()</code></strong> → standard way to convert NodeList to a real array</li>
      <li><strong>Spread operator (<code>[...]</code>)</strong> → shorter way to convert</li>
      <li><strong><code>forEach</code></strong> → works on NodeList directly</li>
      <li><strong><code>for...of</code></strong> → also works directly, supports <code>break</code></li>
      <li><strong>Array methods</strong> → only available after conversion</li>
      <li><strong>Static vs live collections</strong> → querySelectorAll is static</li>
      <li><strong><code>childNodes</code></strong> → another method that returns a NodeList (with all node types, not just elements)</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-11-7-3-3': `
    <ul>
      <li>NodeList</li>
      <li>HTMLCollection</li>
      <li><code>querySelectorAll</code></li>
      <li><code>childNodes</code></li>
      <li><code>Array.from()</code></li>
      <li>Spread operator</li>
      <li><code>forEach</code></li>
      <li><code>for...of</code></li>
      <li>Array-like objects</li>
      <li>Live vs static collections</li>
    </ul>
  `,

});