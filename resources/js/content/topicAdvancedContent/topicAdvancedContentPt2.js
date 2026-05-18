Object.assign(CONTENT, {

          /* ==========================================================
     SECTION 3: MAIN TOPIC GUIDES / LESSON CONTENT
     COVERS THE BASIC LESSONS 3.12 - 3.13
     DOM & Events
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
/* ========================================================= 
   Sub-lesson: 3.12.9 DOM → changing text: textContent, innerHTML
 =======================================================*/

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-11-8-0-0': `
    <p><code>textContent</code> and <code>innerHTML</code> are the two main properties for reading or changing what's <em>inside</em> a DOM element. Both can be used to get the current contents and to replace them. The difference is how they treat HTML markup.</p>
    <p><code>textContent</code> works with <strong>plain text only</strong> — it ignores tags, treats everything as a string of characters. <code>innerHTML</code> works with <strong>HTML</strong> — tags are parsed and become real elements on the page. They're both useful; knowing when to pick which is the whole point of this lesson.</p>
  `,

  /* 0.1 Syntax */
  'topics-11-8-0-1': `
<pre class="language-javascript"><code class="language-javascript">// HTML:
// &lt;p id="msg"&gt;Hello, &lt;strong&gt;world&lt;/strong&gt;!&lt;/p&gt;

const msg = document.getElementById("msg");

// READING
console.log(msg.textContent);   // "Hello, world!"
                                  // → tags stripped, just the text
console.log(msg.innerHTML);     // "Hello, &lt;strong&gt;world&lt;/strong&gt;!"
                                  // → tags preserved, as a string

// WRITING plain text
msg.textContent = "Goodbye!";
// page shows: "Goodbye!"

// WRITING markup
msg.innerHTML = "&lt;em&gt;Goodbye!&lt;/em&gt;";
// page shows: "Goodbye!" (rendered in italic, because &lt;em&gt; was parsed as a real tag)</code></pre>
    <p>Same idea — change what's inside an element — but two flavors. <code>textContent</code> is the safe, simple one. <code>innerHTML</code> is more powerful but more dangerous.</p>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-11-8-0-2': `
<pre class="language-javascript"><code class="language-javascript">
element.textContent
//   reading: returns a string with all the text inside (and inside descendants),
//            tags stripped, whitespace preserved
//   writing: replaces everything inside with one plain text node
//            tags in your string appear as LITERAL CHARACTERS
//
element.innerHTML
//   reading: returns a string of the HTML inside, tags and all
//   writing: parses your string as HTML, creates real elements/text nodes
//            tags in your string become REAL TAGS on the page
//
// example:
// &lt;p id="x"&gt;Hello&lt;/p&gt;
//
// p.textContent = "&lt;strong&gt;Hi&lt;/strong&gt;";
// → page shows the literal text: &lt;strong&gt;Hi&lt;/strong&gt;
//
// p.innerHTML = "&lt;strong&gt;Hi&lt;/strong&gt;";
// → page shows: Hi (bold, because &lt;strong&gt; was parsed)
//
// rule of thumb:
//   plain text only        → textContent  (safer, faster)
//   need real HTML tags    → innerHTML    (more powerful, more risk)</code></pre>
    <p>The two properties look almost interchangeable — both read, both write, both work on the same elements. The actual divide is whether your string is treated as data (textContent) or as code (innerHTML).</p>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-11-8-0-3': `
    <p><strong>Writing either one REPLACES everything inside the element.</strong> Both wipe the previous contents:</p>
<pre class="language-javascript"><code class="language-javascript">// HTML:
// &lt;div id="box"&gt;
//   &lt;p&gt;Old paragraph&lt;/p&gt;
//   &lt;img src="..."&gt;
// &lt;/div&gt;

const box = document.getElementById("box");

box.textContent = "Reset";
// HTML: &lt;div id="box"&gt;Reset&lt;/div&gt;
// the &lt;p&gt; and &lt;img&gt; are GONE

box.innerHTML = "&lt;p&gt;New&lt;/p&gt;";
// HTML: &lt;div id="box"&gt;&lt;p&gt;New&lt;/p&gt;&lt;/div&gt;
// also wiped first, then the new HTML is inserted</code></pre>

    <p><strong>Tags in a <code>textContent</code> string appear as literal characters.</strong> No parsing happens:</p>
<pre class="language-javascript"><code class="language-javascript">document.querySelector("p").textContent = "&lt;strong&gt;Bold?&lt;/strong&gt;";
// the page literally shows: &lt;strong&gt;Bold?&lt;/strong&gt;
// the user sees the angle brackets — the &lt;strong&gt; doesn't become bold.

// this is why textContent is safe with user input — anything that looks like
// HTML is shown as plain text, not executed as markup.</code></pre>

    <p><strong>Tags in an <code>innerHTML</code> string get parsed into real elements.</strong> The browser creates new DOM nodes from your string:</p>
<pre class="language-javascript"><code class="language-javascript">document.querySelector("p").innerHTML = "&lt;strong&gt;Bold!&lt;/strong&gt;";
// the &lt;strong&gt; becomes a real &lt;strong&gt; element.
// the page shows: Bold! (in bold)

// you can build complex structures in one assignment:
document.querySelector("#list").innerHTML =
  "&lt;li&gt;Apple&lt;/li&gt;&lt;li&gt;Banana&lt;/li&gt;&lt;li&gt;Cherry&lt;/li&gt;";</code></pre>

    <p><strong><code>innerHTML</code> with user input is a security risk.</strong> Anything a user typed (or that came from an untrusted source) gets parsed — including <code>&lt;script&gt;</code> tags, event attributes, and other executable HTML:</p>
<pre class="language-javascript"><code class="language-javascript">// imagine the user typed this into a search field:
const userInput = "&lt;img src=x onerror='alert(1)'&gt;";

// SAFE — shows the literal text, no script runs
document.querySelector(".result").textContent = userInput;

// UNSAFE — actually inserts an &lt;img&gt;, the onerror fires, alert pops up
document.querySelector(".result").innerHTML = userInput;

// rule: NEVER use innerHTML with user-provided content.
// use textContent, or escape/sanitize the input first.</code></pre>

    <p><strong><code>textContent</code> is faster than <code>innerHTML</code>.</strong> No HTML parser needs to run, no new elements need to be created — just text nodes:</p>
<pre class="language-javascript"><code class="language-javascript">// fast — replace text only
element.textContent = "Saved";

// slower — parse HTML, build a tree, insert it
element.innerHTML = "&lt;span&gt;Saved&lt;/span&gt;";

// for high-frequency updates (timers, animations), textContent is preferred.
// for one-time renders with real markup, innerHTML is fine.</code></pre>

    <p><strong>Form inputs use <code>.value</code>, not <code>textContent</code> or <code>innerHTML</code>.</strong> Both of those work with the "inside" of an element; inputs don't have an "inside" the same way:</p>
<pre class="language-javascript"><code class="language-javascript">// HTML: &lt;input id="name"&gt;

const input = document.getElementById("name");

input.textContent = "Alex";   // doesn't update the field
input.innerHTML = "Alex";      // doesn't update the field either
input.value = "Alex";           // ✓ now the field shows "Alex"

// rule: form fields use .value. everything else uses textContent or innerHTML.</code></pre>

    <p><strong>Reading <code>textContent</code> vs <code>innerHTML</code>:</strong> Same element, different views of its contents:</p>
<pre class="language-javascript"><code class="language-javascript">// HTML:
// &lt;div id="card"&gt;
//   &lt;h2&gt;Title&lt;/h2&gt;
//   &lt;p&gt;Some &lt;em&gt;text&lt;/em&gt;.&lt;/p&gt;
// &lt;/div&gt;

const card = document.getElementById("card");

console.log(card.textContent);
// "Title Some text." (tags stripped, whitespace preserved)

console.log(card.innerHTML);
// "&lt;h2&gt;Title&lt;/h2&gt;&lt;p&gt;Some &lt;em&gt;text&lt;/em&gt;.&lt;/p&gt;"
// (full HTML as a string)</code></pre>

    <p><strong>NodeList doesn't have either property.</strong> You have to loop over individual elements:</p>
<pre class="language-javascript"><code class="language-javascript">const items = document.querySelectorAll(".item");

items.textContent = "Hi";   // doesn't error, doesn't work (NodeList has no textContent)
items.innerHTML = "&lt;b&gt;Hi&lt;/b&gt;";   // same — silent no-op

// fix: loop
items.forEach(item =&gt; item.textContent = "Hi");
items.forEach(item =&gt; item.innerHTML = "&lt;b&gt;Hi&lt;/b&gt;");</code></pre>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-11-8-1-0': `
    <p>Almost every interactive page eventually needs to update what an element says — a status message, a counter, a search result, a notification badge. <code>textContent</code> and <code>innerHTML</code> are the two basic tools for that.</p>
    <p>Having two of them is what lets you choose your trade-off. Need just plain text? <code>textContent</code> — safer and faster. Need to drop in real HTML (a link, a bold word, a list)? <code>innerHTML</code> — more flexible but with sharper edges. Understanding both means you can pick the right tool every time.</p>
  `,

  /* 1.1 Why use it */
  'topics-11-8-1-1': `
    <p>The two cover different needs:</p>
<pre class="language-javascript"><code class="language-javascript">// textContent — the most common case: just text changes
document.getElementById("status").textContent = "Saving...";
document.querySelector(".count").textContent = 42;
document.querySelector(".preview").textContent = userInput;   // safe with user input

// innerHTML — when you need actual HTML
document.querySelector(".message").innerHTML =
  "Visit &lt;a href='/help'&gt;our help page&lt;/a&gt; for details.";

document.querySelector(".list").innerHTML =
  "&lt;li&gt;Item 1&lt;/li&gt;&lt;li&gt;Item 2&lt;/li&gt;&lt;li&gt;Item 3&lt;/li&gt;";

// rule of thumb:
// can you express it as plain text? → textContent
// do you need real tags (links, formatting, structure)? → innerHTML
// is the value from a user or untrusted source? → textContent ALWAYS</code></pre>

    <p>Most production code uses <code>textContent</code> for the simple updates and <code>innerHTML</code> only when actually building markup — and even then, often with trusted/templated strings rather than free-form user input.</p>
  `,

  /* 1.2 Where you use it */
  'topics-11-8-1-2': `
<pre class="language-javascript"><code class="language-javascript">// textContent — plain text changes
document.querySelector(".status").textContent = "Online";
document.querySelector(".count").textContent = 5;
document.querySelector(".price").textContent = "$" + price.toFixed(2);
document.querySelector(".user-name").textContent = user.name;
document.querySelector(".error").textContent = "";   // clear
document.querySelector(".time").textContent = new Date().toLocaleTimeString();

// textContent — echoing user input safely
document.querySelector(".preview").textContent = searchBox.value;

// innerHTML — building markup with mixed text and tags
document.querySelector(".message").innerHTML =
  "Hello &lt;strong&gt;" + escape(name) + "&lt;/strong&gt;, welcome back!";

// innerHTML — rendering a list from data
const html = items.map(item =&gt; "&lt;li&gt;" + escape(item) + "&lt;/li&gt;").join("");
document.querySelector("ul").innerHTML = html;

// innerHTML — replacing an entire section's structure
document.querySelector(".card").innerHTML =
  "&lt;h2&gt;" + title + "&lt;/h2&gt;" +
  "&lt;p&gt;" + description + "&lt;/p&gt;" +
  "&lt;button class='btn'&gt;Click me&lt;/button&gt;";

// READING — both directions work
const text = document.querySelector("p").textContent;
const html2 = document.querySelector("p").innerHTML;

// clearing an element entirely
document.querySelector(".list").textContent = "";
document.querySelector(".list").innerHTML = "";   // also works</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-11-8-1-3': `
    <p>Both properties answer the question "what's inside this element?" — but they answer it differently. <code>textContent</code> answers in plain text: "the words inside, as a string." <code>innerHTML</code> answers in markup: "the HTML inside, tags and all."</p>
    <p>When you write to them, the same difference applies. Writing to <code>textContent</code> sets the element's contents to a plain string — no HTML parsing, tags appear as literal characters. Writing to <code>innerHTML</code> tells the browser "treat this string as HTML, parse it, and put the resulting elements inside" — so tags become real tags.</p>
    <p>The practical guidance: default to <code>textContent</code>. Reach for <code>innerHTML</code> when you specifically need real HTML in the result. Never use <code>innerHTML</code> with user input directly — escape it first, or use <code>textContent</code> instead.</p>
  `,

  /* 1.4 Mental model */
  'topics-11-8-1-4': `
    <p>Imagine two ways to deliver a message to a sign-maker: hand them a typed-out paragraph, or hand them HTML markup with formatting instructions. <code>textContent</code> is the typed paragraph — they put exactly those characters on the sign, even if you wrote "&lt;b&gt;bold&lt;/b&gt;" — they'll put those literal angle brackets up there. <code>innerHTML</code> is the HTML markup — they read the instructions and produce a sign with real formatting.</p>
    <p>The plain-paragraph approach is safer because there's no "instructions" — whatever the user wrote goes up as-is, no commands hidden inside. The HTML-markup approach is more flexible because you can include real formatting, but you have to trust the source — if a malicious user wrote "&lt;script&gt;steal data&lt;/script&gt;," the sign-maker would dutifully wire up a script.</p>
    <p>The choice between them is "do I need formatting, and do I trust the input?" If yes to formatting and yes to trust, <code>innerHTML</code>. Otherwise, <code>textContent</code>.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-11-8-1-5': `
<pre class="language-javascript"><code class="language-javascript">// HTML:
// &lt;div id="box"&gt;Original&lt;/div&gt;

const box = document.getElementById("box");

// 1. Assign a string with tags to textContent
box.textContent = "&lt;strong&gt;Hi&lt;/strong&gt;";

// step by step:
//   a. the element's children are wiped
//   b. a single text node is created with the literal string "&lt;strong&gt;Hi&lt;/strong&gt;"
//   c. it becomes the only child
//   d. the page shows: &lt;strong&gt;Hi&lt;/strong&gt;  (literal angle brackets)
//
// HTML in the DOM:
// &lt;div id="box"&gt;&amp;lt;strong&amp;gt;Hi&amp;lt;/strong&amp;gt;&lt;/div&gt;
//                ^ characters escaped because the angle brackets are content, not tags

// 2. Assign the same string to innerHTML
box.innerHTML = "&lt;strong&gt;Hi&lt;/strong&gt;";

// step by step:
//   a. the element's children are wiped
//   b. the string is PARSED as HTML
//   c. a real &lt;strong&gt; element is created, with a text node "Hi" inside
//   d. that &lt;strong&gt; becomes the box's only child
//   e. the page shows: Hi (in bold)
//
// HTML in the DOM:
// &lt;div id="box"&gt;&lt;strong&gt;Hi&lt;/strong&gt;&lt;/div&gt;
//                ^ real &lt;strong&gt; element

// same input string, two different results — that's the entire distinction.</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-11-8-2-0': `
    <p>If your assignment doesn't seem to do what you expected, log both views to see what's actually in the element:</p>
<pre class="language-javascript"><code class="language-javascript">const el = document.querySelector(".target");

console.log("textContent:", JSON.stringify(el.textContent));
console.log("innerHTML:", JSON.stringify(el.innerHTML));

// the JSON.stringify wrapper shows whitespace clearly, so you can see:
//   - is the text empty?
//   - is there hidden whitespace?
//   - are there tags inside you didn't realize were there?</code></pre>

    <p>Common patterns of bug:</p>
<pre class="language-javascript"><code class="language-javascript">// 1. textContent shows literal "&lt;..." instead of formatting
//    cause: assigned HTML-looking text to textContent; needed innerHTML

// 2. innerHTML inserts but nothing renders / weird structure
//    cause: malformed HTML in the string (unclosed tag, missing quote)

// 3. Page suddenly missing icons / images after assignment
//    cause: textContent or innerHTML wiped nested elements you didn't realize were there

// 4. Form field unchanged
//    cause: used textContent/innerHTML on an &lt;input&gt; — should be .value</code></pre>
  `,

  /* 2.1 The part that makes it click */
  'topics-11-8-2-1': `
    <p>The two properties aren't different things — they're two views of the same thing. The element's contents exist as a tree of DOM nodes. <code>textContent</code> renders that tree as plain text. <code>innerHTML</code> renders it as HTML markup. When you write to either one, you're rebuilding the contents from a string the browser parses (innerHTML) or treats as literal text (textContent).</p>
    <p>The choice between them isn't about effects — both replace the element's inside. It's about what your string means. If your string is words, use <code>textContent</code>. If your string is HTML, use <code>innerHTML</code>. If you're not sure or the string came from outside your code, default to <code>textContent</code> for safety.</p>
  `,

  /* 2.2 Common confusions */
  'topics-11-8-2-2': `
    <p><strong>Confusion: thinking <code>textContent</code> renders HTML tags</strong></p>
<pre class="language-javascript"><code class="language-javascript">document.querySelector("p").textContent = "&lt;strong&gt;Bold&lt;/strong&gt;";
// page shows the literal text: &lt;strong&gt;Bold&lt;/strong&gt;
// it does NOT become bold.
// fix: use innerHTML if you want tags to be parsed
document.querySelector("p").innerHTML = "&lt;strong&gt;Bold&lt;/strong&gt;";</code></pre>

    <p><strong>Confusion: thinking <code>innerHTML</code> is "just a string"</strong></p>
<pre class="language-javascript"><code class="language-javascript">document.querySelector("p").innerHTML = userInput;
// SECURITY RISK — anything the user typed is parsed as HTML.
// &lt;script&gt; tags, onerror handlers, etc., can run.
// fix: use textContent for untrusted input
document.querySelector("p").textContent = userInput;</code></pre>

    <p><strong>Confusion: using textContent or innerHTML on form inputs</strong></p>
<pre class="language-javascript"><code class="language-javascript">document.querySelector("input").textContent = "hi";   // doesn't appear in input
document.querySelector("input").innerHTML = "hi";      // doesn't either
document.querySelector("input").value = "hi";          // ✓ this works

// rule: inputs use .value, not textContent/innerHTML</code></pre>

    <p><strong>Confusion: appending with assignment</strong></p>
<pre class="language-javascript"><code class="language-javascript">document.querySelector("p").textContent = " more text";
// expected: append " more text"
// actual:   replaced everything; element now shows " more text" only

// to append:
const p = document.querySelector("p");
p.textContent += " more text";
// or:
p.textContent = p.textContent + " more text";</code></pre>

    <p><strong>Confusion: assigning innerHTML wipes everything, including event handlers</strong></p>
<pre class="language-javascript"><code class="language-javascript">// HTML: &lt;div id="box"&gt;&lt;button&gt;Click&lt;/button&gt;&lt;/div&gt;
const btn = document.querySelector("button");
btn.addEventListener("click", () =&gt; console.log("clicked!"));

// later:
document.getElementById("box").innerHTML = "&lt;button&gt;Click&lt;/button&gt;";
// the new button is a brand-new element. the old button (with its listener) is GONE.
// the new button has NO listener.

// rule: reassigning innerHTML destroys child elements and their listeners.
// re-attach listeners after, or modify just the text you want to change.</code></pre>

    <p><strong>Confusion: NodeList doesn't have these</strong></p>
<pre class="language-javascript"><code class="language-javascript">document.querySelectorAll(".item").textContent = "hi";
// NodeList has no textContent — silently does nothing useful
// fix: loop
document.querySelectorAll(".item").forEach(el =&gt; el.textContent = "hi");</code></pre>

    <p><strong>Confusion: thinking <code>innerHTML</code> reads what you wrote</strong></p>
<pre class="language-javascript"><code class="language-javascript">document.querySelector("p").innerHTML = '&lt;span class="x"&gt;hi&lt;/span&gt;';
console.log(document.querySelector("p").innerHTML);
// might log it back with slightly different formatting
// the browser normalizes — attribute quotes, capitalization, attribute order may change

// reading innerHTML gives the BROWSER's serialization of the current DOM,
// not necessarily byte-identical to what you assigned.</code></pre>
  `,

  /* 2.3 Common mistakes */
  'topics-11-8-2-3': `
<pre class="language-javascript"><code class="language-javascript">document.querySelector("p").textContent = "&lt;strong&gt;Bold&lt;/strong&gt;";
// shows literal angle brackets, doesn't become bold
// fix: innerHTML when you need real tags
document.querySelector("p").innerHTML = "&lt;strong&gt;Bold&lt;/strong&gt;";</code></pre>

<pre class="language-javascript"><code class="language-javascript">document.querySelector(".result").innerHTML = userInput;
// security risk — user can inject HTML/scripts
// fix: use textContent for untrusted content
document.querySelector(".result").textContent = userInput;</code></pre>

<pre class="language-javascript"><code class="language-javascript">document.querySelector("input").textContent = "Alex";
// inputs don't display textContent
// fix: use .value
document.querySelector("input").value = "Alex";</code></pre>

<pre class="language-javascript"><code class="language-javascript">// HTML: &lt;div&gt;&lt;img&gt;&lt;p&gt;Hello&lt;/p&gt;&lt;/div&gt;
document.querySelector("div").textContent = "Updated";
// the &lt;img&gt; and &lt;p&gt; are GONE — replaced by plain text
// fix: target the specific text element
document.querySelector("div p").textContent = "Updated";</code></pre>

<pre class="language-javascript"><code class="language-javascript">document.querySelector(".name").textContent = " Alex";
// expected to append; actually replaced
// fix: concat
const el = document.querySelector(".name");
el.textContent = el.textContent + " Alex";
// or:
el.textContent += " Alex";</code></pre>

<pre class="language-javascript"><code class="language-javascript">// re-render destroys handlers
document.getElementById("list").innerHTML = generateListHTML();
// any addEventListener on the previous children is gone
// fix: re-attach handlers after innerHTML, or use event delegation on the parent</code></pre>

<pre class="language-javascript"><code class="language-javascript">document.querySelectorAll(".item").innerHTML = "&lt;b&gt;hi&lt;/b&gt;";
// NodeList has no innerHTML
// fix: loop
document.querySelectorAll(".item").forEach(el =&gt; el.innerHTML = "&lt;b&gt;hi&lt;/b&gt;");</code></pre>

<pre class="language-javascript"><code class="language-javascript">const el = document.querySelector(".missing");
el.textContent = "hi";
// crashes when null
// fix: check first
const el = document.querySelector(".missing");
if (el) el.textContent = "hi";</code></pre>

<pre class="language-javascript"><code class="language-javascript">document.querySelector(".result").textContent = userObject;
// shows "[object Object]"
// fix: format manually
document.querySelector(".result").textContent =
  userObject.name + " (" + userObject.email + ")";</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-11-8-3-0': `
<pre class="language-javascript"><code class="language-javascript">// Reading
const text = document.querySelector("p").textContent;
const html = document.querySelector("p").innerHTML;

// Writing plain text
document.querySelector("h1").textContent = "Welcome";
document.querySelector(".count").textContent = 5;
document.querySelector(".price").textContent = "$" + price.toFixed(2);
document.querySelector(".time").textContent = new Date().toLocaleTimeString();

// Clearing
document.querySelector(".error").textContent = "";
document.querySelector(".list").innerHTML = "";

// Writing markup
document.querySelector(".message").innerHTML =
  "Click &lt;a href='/help'&gt;here&lt;/a&gt; for help.";

// Building a list
const items = ["A", "B", "C"];
const html2 = items.map(i =&gt; "&lt;li&gt;" + i + "&lt;/li&gt;").join("");
document.querySelector("ul").innerHTML = html2;

// Safe user input echo
document.querySelector(".echo").textContent = userInput;

// Conditional content
document.querySelector(".status").textContent = isOnline ? "Online" : "Offline";

// Append text
const el = document.querySelector(".log");
el.textContent += "\\nNew entry";

// Number to display
document.querySelector(".score").textContent = String(score);

// Update via event
document.querySelector("#save").addEventListener("click", () =&gt; {
  document.querySelector(".status").textContent = "Saved at " + Date.now();
});

// Update many
document.querySelectorAll(".tag").forEach(el =&gt; el.textContent = "•");

// innerHTML for templated render — using concatenation
document.querySelector(".card").innerHTML =
  "&lt;h2&gt;" + title + "&lt;/h2&gt;" +
  "&lt;p&gt;" + description + "&lt;/p&gt;";

// Reading checks
if (document.querySelector(".msg").textContent.includes("error")) {
  showRetry();
}</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-11-8-3-1': `
    <p><strong>Example: status indicator (textContent)</strong></p>
<pre class="language-javascript"><code class="language-javascript">function setStatus(text) {
  document.querySelector(".status").textContent = text;
}

setStatus("Connecting...");
fetch("/api/ping")
  .then(() =&gt; setStatus("Connected"))
  .catch(() =&gt; setStatus("Failed"));
// plain text only. textContent is fast, simple, and safe.</code></pre>

    <p><strong>Example: rendering an article from data (innerHTML)</strong></p>
<pre class="language-javascript"><code class="language-javascript">function renderArticle(data) {
  const article = document.querySelector("article");
  article.innerHTML =
    "&lt;h2&gt;" + escapeHTML(data.title) + "&lt;/h2&gt;" +
    "&lt;p class='meta'&gt;" + escapeHTML(data.author) + " — " + escapeHTML(data.date) + "&lt;/p&gt;" +
    "&lt;div class='body'&gt;" + data.body + "&lt;/div&gt;";
}
// innerHTML is necessary here because we need real headings, paragraphs, classes.
// note: any user-provided values go through escapeHTML() to prevent XSS.</code></pre>

    <p><strong>Example: safe live search preview (textContent)</strong></p>
<pre class="language-javascript"><code class="language-javascript">const search = document.querySelector("input[type=search]");
const preview = document.querySelector(".preview");

search.addEventListener("input", () =&gt; {
  preview.textContent = "You searched for: " + search.value;
});
// textContent is safe with raw user input.
// even if they type &lt;script&gt;..., it shows up as literal characters.</code></pre>

    <p><strong>Example: clearing and replacing a list (innerHTML)</strong></p>
<pre class="language-javascript"><code class="language-javascript">function renderTags(tags) {
  const container = document.querySelector(".tags");
  container.innerHTML = tags
    .map(t =&gt; "&lt;span class='tag'&gt;" + escapeHTML(t) + "&lt;/span&gt;")
    .join("");
}
// one assignment replaces the whole list.
// innerHTML lets us insert real &lt;span&gt; elements with classes.</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-11-8-3-2': `
    <ul>
      <li><strong><code>textContent</code></strong> → plain-text version: safer, faster, no parsing</li>
      <li><strong><code>innerHTML</code></strong> → HTML version: more powerful, can introduce security risks</li>
      <li><strong><code>innerText</code></strong> → similar to textContent but respects CSS visibility</li>
      <li><strong><code>.value</code></strong> → for form inputs, separate from these two</li>
      <li><strong>XSS / safe text rendering</strong> → why textContent matters with user input</li>
      <li><strong>Escaping HTML</strong> → cleaning input before using innerHTML</li>
      <li><strong>Template literals</strong> → useful for building innerHTML strings with backticks</li>
      <li><strong>Replacing children</strong> → both properties wipe existing children when assigned</li>
      <li><strong>Event handlers</strong> → re-assigning innerHTML removes any listeners on previous children</li>
      <li><strong>NodeList iteration</strong> → both properties exist on elements, not on NodeList directly</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-11-8-3-3': `
    <ul>
      <li><code>textContent</code></li>
      <li><code>innerHTML</code></li>
      <li><code>innerText</code></li>
      <li><code>.value</code> for form fields</li>
      <li>XSS / safe rendering</li>
      <li>Escaping HTML</li>
      <li>Template literals</li>
      <li>Replacing children</li>
      <li>Event delegation (alternative to re-attaching listeners after innerHTML)</li>
      <li>String concatenation / formatting</li>
    </ul>
  `,

  /* ========================================================= 
   Sub-lesson: 3.12.10 DOM → changing styles: style, classList
 =======================================================*/

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-11-9-0-0': `
    <p><code>style</code> and <code>classList</code> are the two main ways to change how an element <em>looks</em> from JavaScript. They both modify visual appearance, but they take very different approaches.</p>
    <p><code>element.style</code> sets <strong>inline styles</strong> directly on the element — like writing <code>style="color: red"</code> on the HTML tag itself. <code>element.classList</code> toggles <strong>CSS classes</strong> on and off — like adding or removing class names that match rules in your stylesheet. The first is for one-off, dynamic values; the second is for swapping pre-defined looks.</p>
  `,

  /* 0.1 Syntax */
  'topics-11-9-0-1': `
<pre class="language-javascript"><code class="language-javascript">// HTML: &lt;p id="msg"&gt;Hello&lt;/p&gt;

const p = document.getElementById("msg");

// style — set a CSS property directly on the element
p.style.color = "red";
p.style.fontSize = "24px";
p.style.backgroundColor = "yellow";

// classList — add, remove, or toggle CSS classes
p.classList.add("highlight");
p.classList.remove("highlight");
p.classList.toggle("active");
p.classList.contains("active");   // true or false

// after style: &lt;p id="msg" style="color: red; font-size: 24px; background-color: yellow"&gt;
// after classList.add: &lt;p id="msg" class="highlight"&gt;</code></pre>
    <p>Both update the visual look of the page in real time. The choice between them depends on whether you want to set a specific value (<code>style</code>) or switch between styled states (<code>classList</code>).</p>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-11-9-0-2': `
<pre class="language-javascript"><code class="language-javascript">
element.style
//   - an object with one property per CSS property
//   - CSS property names use camelCase: background-color → backgroundColor
//   - sets INLINE styles (style="..." on the element)
//   - high specificity — beats stylesheet rules
//   - one property at a time (or use .cssText to set many)
//
element.classList
//   - an object with methods for manipulating class names
//   - .add(name)      → add a class
//   - .remove(name)   → remove a class
//   - .toggle(name)   → flip it (add if missing, remove if present)
//   - .contains(name) → check if it's there (true/false)
//   - .replace(a, b)  → swap one class for another
//
// when to use which:
//   style     → dynamic, computed values: el.style.left = mouseX + "px"
//   classList → predefined visual states: el.classList.add("error")</code></pre>
    <p>The two work together. <code>style</code> is for raw CSS values that come from JavaScript logic. <code>classList</code> is for triggering rules you already wrote in CSS. Most production code leans on <code>classList</code> for clean separation of concerns.</p>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-11-9-0-3': `
    <p><strong>CSS properties in <code>.style</code> use camelCase, not hyphens.</strong> JavaScript identifiers can't contain hyphens, so multi-word CSS properties get converted:</p>
<pre class="language-javascript"><code class="language-javascript">// CSS                  JavaScript
// background-color  →  backgroundColor
// font-size         →  fontSize
// margin-top        →  marginTop
// border-radius     →  borderRadius
// z-index           →  zIndex

el.style.backgroundColor = "blue";
el.style.fontSize = "18px";
el.style.marginTop = "20px";

// single-word properties stay the same:
el.style.color = "red";
el.style.opacity = "0.5";
el.style.display = "none";</code></pre>

    <p><strong>Values are strings, including units like <code>"px"</code>, <code>"%"</code>, or <code>"em"</code>.</strong> Forgetting the unit silently fails:</p>
<pre class="language-javascript"><code class="language-javascript">// Right — string with units
el.style.width = "200px";
el.style.fontSize = "1.5em";
el.style.opacity = "0.8";   // opacity is unitless but still a string

// Wrong — number without units
el.style.width = 200;        // doesn't apply — needs "px"
el.style.fontSize = 16;      // doesn't apply

// for numeric values, concatenate:
el.style.left = mouseX + "px";
el.style.height = (rows * 40) + "px";</code></pre>

    <p><strong>Reading a style only works if it was set inline.</strong> Styles from a stylesheet don't show up in <code>.style</code>:</p>
<pre class="language-javascript"><code class="language-javascript">// CSS file:
// .box { background-color: blue; }

// HTML: &lt;div class="box" style="color: red"&gt;...&lt;/div&gt;

const box = document.querySelector(".box");
console.log(box.style.color);            // "red" — set inline
console.log(box.style.backgroundColor);  // "" — set in CSS, not visible to .style

// to read the actual rendered style (including stylesheet rules), use getComputedStyle:
const styles = getComputedStyle(box);
console.log(styles.backgroundColor);   // "rgb(0, 0, 255)"
console.log(styles.color);              // "rgb(255, 0, 0)"</code></pre>

    <p><strong><code>classList.add</code> and <code>.remove</code> are safe to call repeatedly.</strong> Adding a class that's already there or removing a class that isn't there does nothing — no error:</p>
<pre class="language-javascript"><code class="language-javascript">el.classList.add("active");
el.classList.add("active");   // already there — no error, no duplicate
el.classList.add("active");   // still just one "active" class

el.classList.remove("missing");   // not there — no error, just nothing happens

// safe to call without checking first.</code></pre>

    <p><strong><code>classList.toggle</code> flips the class.</strong> Add if missing, remove if present. Optionally takes a boolean to force a state:</p>
<pre class="language-javascript"><code class="language-javascript">// flip on each call
el.classList.toggle("open");   // adds "open" if missing, removes if present

// force a state — toggle(name, true) always adds; toggle(name, false) always removes
el.classList.toggle("open", isExpanded);
// if isExpanded is true, "open" is added
// if isExpanded is false, "open" is removed
// equivalent to:
//   if (isExpanded) el.classList.add("open");
//   else el.classList.remove("open");</code></pre>

    <p><strong>You can add or remove multiple classes at once.</strong> Pass them as separate arguments:</p>
<pre class="language-javascript"><code class="language-javascript">el.classList.add("highlight", "warning", "shake");
el.classList.remove("loading", "pending");

// not allowed:
el.classList.add("highlight warning");   // does NOT work — treats it as one class with a space
// (and modern browsers may throw "InvalidCharacterError")</code></pre>

    <p><strong>Setting <code>style.someProp = ""</code> removes that inline style.</strong> The element falls back to the stylesheet value:</p>
<pre class="language-javascript"><code class="language-javascript">// CSS file:
// p { color: black; }

// HTML: &lt;p style="color: red"&gt;Hi&lt;/p&gt;

const p = document.querySelector("p");
console.log(p.style.color);   // "red"

p.style.color = "";   // remove the inline style
console.log(p.style.color);   // ""
// the element now displays its stylesheet color (black).</code></pre>

    <p><strong>Use <code>classList</code> when the styles are defined in CSS; use <code>style</code> when JavaScript is computing the value.</strong> This is the cleanest mental rule:</p>
<pre class="language-javascript"><code class="language-javascript">// computed, dynamic — use style
el.style.left = (mouseX - 10) + "px";
el.style.transform = "rotate(" + angle + "deg)";

// predefined visual state — use classList
el.classList.add("error");        // CSS has .error { color: red; border: ... }
el.classList.toggle("collapsed"); // CSS has .collapsed { display: none; }

// the rule isn't strict — but in most codebases, classList changes are easier
// to maintain because the visual rules live in one place (the CSS file).</code></pre>

    <p><strong>NodeList doesn't have <code>style</code> or <code>classList</code> directly.</strong> Loop to apply changes to many elements:</p>
<pre class="language-javascript"><code class="language-javascript">const items = document.querySelectorAll(".item");

items.style.color = "red";          // doesn't work — NodeList has no style
items.classList.add("active");       // doesn't work — NodeList has no classList

// fix: loop
items.forEach(item =&gt; item.style.color = "red");
items.forEach(item =&gt; item.classList.add("active"));</code></pre>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-11-9-1-0': `
    <p>HTML and CSS handle the initial appearance of a page. But once the page is running, anything that needs to change visually — a button highlighting on hover, an error message turning red, a modal sliding open — has to happen through JavaScript. <code>style</code> and <code>classList</code> are how that happens.</p>
    <p>Having two tools means you can pick the right approach. Set one specific property dynamically? <code>style</code>. Swap between defined visual states? <code>classList</code>. The two cover almost every "make the page look different" task, and they cooperate cleanly with the CSS you already wrote.</p>
  `,

  /* 1.1 Why use it */
  'topics-11-9-1-1': `
    <p>Each tool fits different jobs:</p>
<pre class="language-javascript"><code class="language-javascript">// style — for one-off, computed values
el.style.left = mouseX + "px";              // dynamic positioning
el.style.transform = "rotate(" + deg + "deg)";   // computed rotation
el.style.opacity = progress;                 // animated fade

// classList — for visual states defined in CSS
el.classList.add("error");        // matches .error { ... } in CSS
el.classList.toggle("expanded");   // expand/collapse a panel
el.classList.remove("loading");    // hide a spinner

// rule of thumb:
//   - if the VALUE comes from JavaScript logic → style
//   - if the LOOK is one of a few preset states → classList</code></pre>

    <p>Using <code>classList</code> when you can is generally cleaner because it keeps styling in the CSS file. JavaScript only flips switches; CSS decides what those switches mean visually.</p>
  `,

  /* 1.2 Where you use it */
  'topics-11-9-1-2': `
<pre class="language-javascript"><code class="language-javascript">// style — dynamic positioning
el.style.left = x + "px";
el.style.top = y + "px";

// style — computed values
el.style.width = (count * 20) + "px";
el.style.transform = "scale(" + zoom + ")";

// style — color from data
el.style.backgroundColor = product.color;

// style — clearing inline styles
el.style.color = "";   // fall back to stylesheet

// classList — visual states
el.classList.add("active");
el.classList.add("loading");
el.classList.add("error");

// classList — toggling
el.classList.toggle("open");
el.classList.toggle("dark-mode");

// classList — checking
if (el.classList.contains("disabled")) { ... }

// classList — multiple at once
el.classList.add("primary", "large", "rounded");
el.classList.remove("loading", "pending");

// classList — replace one for another
el.classList.replace("old", "new");

// classList — force a state with a boolean
el.classList.toggle("hidden", isHidden);
// adds "hidden" if isHidden is true, removes it otherwise

// loop for many elements
document.querySelectorAll(".tab").forEach(t =&gt; t.classList.remove("active"));</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-11-9-1-3': `
    <p><code>style</code> is the JavaScript version of writing <code>style="..."</code> directly on an HTML tag. Each CSS property is a property on the <code>.style</code> object — you assign string values, including units. The element gets that exact inline styling, which beats stylesheet rules.</p>
    <p><code>classList</code> is a wrapper around the element's <code>class</code> attribute. Adding a class is like writing <code>class="foo"</code> on the tag. Removing is like deleting it. Toggling flips it on or off. The actual styles tied to that class live in your CSS file — JavaScript just decides which classes apply.</p>
    <p>Most of the time, <code>classList</code> is the better choice. It keeps your CSS in one place and your JavaScript focused on "what state is this in?" instead of "what color should it be?" Use <code>style</code> when you genuinely need a value that JavaScript computes — positions, sizes, dynamic colors — that wouldn't make sense as a fixed class.</p>
  `,

  /* 1.4 Mental model */
  'topics-11-9-1-4': `
    <p>Picture each element as having two layers of styling. The <strong>class layer</strong> is a set of labels (CSS classes), each one connected to a stylesheet rule that says "anything labeled X should look like this." Adding or removing labels with <code>classList</code> changes which rules apply.</p>
    <p>The <strong>inline layer</strong> sits on top of everything else — direct paint orders written on the element itself. <code>style</code> writes orders to this layer. Inline orders always win, because they're attached directly to the element instead of described in a separate document.</p>
    <p>Most of the time, you change classes — flip labels on and off, let the stylesheet do the heavy lifting. Reach for inline styles only when you need a specific value that classes can't express, like "move to this exact pixel" or "use this color the user just picked."</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-11-9-1-5': `
<pre class="language-javascript"><code class="language-javascript">// HTML: &lt;div id="alert" class="message"&gt;Heads up!&lt;/div&gt;
// CSS:
//   .message { padding: 10px; }
//   .message.error { background-color: #ffe; border: 1px solid red; color: red; }

const alert = document.getElementById("alert");

// 1. Add a class — the .error rule kicks in
alert.classList.add("error");
// HTML now: &lt;div id="alert" class="message error"&gt;Heads up!&lt;/div&gt;
// the element displays with the .error background, border, and color.

// 2. Inline style — overrides the class for a specific property
alert.style.fontSize = "20px";
// HTML now: &lt;div id="alert" class="message error" style="font-size: 20px"&gt;...&lt;/div&gt;
// font is bigger; everything else is still from the CSS rules.

// 3. Toggle the class — remove "error"
alert.classList.toggle("error");
// HTML now: &lt;div id="alert" class="message" style="font-size: 20px"&gt;...&lt;/div&gt;
// the .error styles are gone. font-size is still 20px (it was set inline).

// 4. Clear the inline style
alert.style.fontSize = "";
// HTML now: &lt;div id="alert" class="message" style=""&gt;...&lt;/div&gt;
// inline styles are gone. element shows just the .message base styles.

// the two systems coexist:
//   - classList controls which CSS rules apply
//   - style sets inline overrides on top</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-11-9-2-0': `
    <p>If <code>el.style.X = ...</code> doesn't seem to work, check three things in order:</p>
<pre class="language-javascript"><code class="language-javascript">// 1. Did you spell the CSS property in camelCase?
el.style.background-color = "red";   // SyntaxError — hyphens aren't valid JS
el.style.backgroundColor = "red";     // ✓

// 2. Did you include units?
el.style.width = 200;       // doesn't apply
el.style.width = "200px";    // ✓

// 3. Is the property actually visible? Some require display modes:
el.style.transform = "rotate(45deg)";   // requires display: block, inline-block, etc.
// inline elements don't transform unless you set display first</code></pre>

    <p>If <code>classList.add</code> doesn't seem to do anything visible:</p>
<pre class="language-javascript"><code class="language-javascript">// Check the class is actually getting added:
el.classList.add("foo");
console.log(el.classList.contains("foo"));   // true
console.log(el.className);                    // shows the class string

// if class is there but no visual change, the CSS rule isn't matching:
//   - is the class name spelled right in BOTH places?
//   - is your stylesheet actually loaded?
//   - is another rule overriding (check specificity)?
//
// open DevTools → Elements panel → inspect the element to see what styles are applied.</code></pre>
  `,

  /* 2.1 The part that makes it click */
  'topics-11-9-2-1': `
    <p><code>style</code> and <code>classList</code> aren't competing tools — they're different layers of the same styling system. The class layer connects an element to your CSS rules. The inline layer is JavaScript writing direct orders. They stack: classes provide the base look, inline styles override specific properties on top.</p>
    <p>The right tool depends on whether the styling is part of a defined visual state (use classes) or a one-off value JavaScript is computing in the moment (use inline style). In most modern code, classes do 90% of the work, and inline styles handle the few cases where a specific computed value is needed.</p>
  `,

  /* 2.2 Common confusions */
  'topics-11-9-2-2': `
    <p><strong>Confusion: using hyphens in <code>style</code></strong></p>
<pre class="language-javascript"><code class="language-javascript">el.style.background-color = "red";   // SyntaxError
el.style.font-size = "20px";          // SyntaxError

// fix: camelCase
el.style.backgroundColor = "red";
el.style.fontSize = "20px";

// alternative — bracket notation with the CSS name as a string
el.style["background-color"] = "red";   // also works, less common</code></pre>

    <p><strong>Confusion: forgetting units</strong></p>
<pre class="language-javascript"><code class="language-javascript">el.style.width = 200;          // silently fails — needs "px"
el.style.width = "200px";       // ✓
el.style.width = 200 + "px";    // also ✓ (build the string)

// most numeric CSS properties need units. exceptions:
el.style.opacity = "0.5";       // unitless
el.style.zIndex = "10";          // unitless
el.style.flex = "1";             // unitless</code></pre>

    <p><strong>Confusion: <code>className</code> vs <code>classList</code></strong></p>
<pre class="language-javascript"><code class="language-javascript">// className is a STRING of all the classes
console.log(el.className);   // "btn primary active"

// classList is an OBJECT with methods
el.classList.add("new");
el.classList.remove("active");
el.classList.toggle("highlighted");

// you CAN assign to className, but it replaces ALL classes:
el.className = "fresh";   // wipes everything else, only "fresh" remains
el.className = "fresh primary";   // can set multiple, separated by spaces

// prefer classList for adding/removing single classes.
// className is fine when you're setting the full class string at once.</code></pre>

    <p><strong>Confusion: reading <code>el.style.X</code> when it was set in CSS</strong></p>
<pre class="language-javascript"><code class="language-javascript">// CSS: .box { color: blue; }

el.style.color;   // "" — empty, because the color wasn't set INLINE

// to read the actual color used:
const styles = getComputedStyle(el);
console.log(styles.color);   // "rgb(0, 0, 255)"

// rule:
//   .style       → only inline styles (style="..." attribute)
//   getComputedStyle → final computed value, including from stylesheets</code></pre>

    <p><strong>Confusion: <code>classList.add("foo bar")</code></strong></p>
<pre class="language-javascript"><code class="language-javascript">el.classList.add("foo bar");
// modern browsers throw: InvalidCharacterError
// (the space isn't allowed inside one class name)

// fix: pass them as separate arguments
el.classList.add("foo", "bar");</code></pre>

    <p><strong>Confusion: thinking inline styles "remove" class styles</strong></p>
<pre class="language-javascript"><code class="language-javascript">// CSS: .red-text { color: red; }

// HTML: &lt;p class="red-text"&gt;Hi&lt;/p&gt;
el.style.color = "blue";
// the inline style is BLUE — wins for color
// the .red-text class is still there — but its color is overridden

// setting style doesn't remove classes:
console.log(el.classList.contains("red-text"));   // still true
console.log(el.style.color);   // "blue"

// to actually remove the class:
el.classList.remove("red-text");</code></pre>

    <p><strong>Confusion: NodeList doesn't have these</strong></p>
<pre class="language-javascript"><code class="language-javascript">const items = document.querySelectorAll(".item");
items.style.color = "red";           // doesn't work
items.classList.add("active");        // doesn't work

// fix: loop
items.forEach(item =&gt; {
  item.style.color = "red";
  item.classList.add("active");
});</code></pre>
  `,

  /* 2.3 Common mistakes */
  'topics-11-9-2-3': `
<pre class="language-javascript"><code class="language-javascript">el.style.background-color = "red";
// SyntaxError — hyphens not allowed in property names
// fix: camelCase
el.style.backgroundColor = "red";</code></pre>

<pre class="language-javascript"><code class="language-javascript">el.style.width = 200;
// silently fails — width needs a unit
// fix: include "px" or another unit
el.style.width = "200px";</code></pre>

<pre class="language-javascript"><code class="language-javascript">el.classList.add("foo bar");
// throws InvalidCharacterError — can't include a space in one class name
// fix: separate arguments
el.classList.add("foo", "bar");</code></pre>

<pre class="language-javascript"><code class="language-javascript">el.className = "active";
// wipes ALL existing classes — keeps only "active"
// fix: use classList for non-destructive changes
el.classList.add("active");</code></pre>

<pre class="language-javascript"><code class="language-javascript">// CSS: .box { background: blue; }
console.log(el.style.background);
// "" — style only shows inline values
// fix: getComputedStyle for actual rendered values
const styles = getComputedStyle(el);
console.log(styles.background);</code></pre>

<pre class="language-javascript"><code class="language-javascript">document.querySelectorAll(".tab").classList.add("ready");
// NodeList has no classList
// fix: loop
document.querySelectorAll(".tab").forEach(t =&gt; t.classList.add("ready"));</code></pre>

<pre class="language-javascript"><code class="language-javascript">if (el.classList === "active") { ... }
// classList isn't a string — it's an object
// fix: use .contains()
if (el.classList.contains("active")) { ... }</code></pre>

<pre class="language-javascript"><code class="language-javascript">el.style.color = "red";
// later, trying to "reset" — but you forgot you set it
el.style.color = null;
// becomes the string "null" in some cases, doesn't reset properly
// fix: use empty string to clear an inline style
el.style.color = "";</code></pre>

<pre class="language-javascript"><code class="language-javascript">el.classList.toggle("open");
el.classList.toggle("open");
el.classList.toggle("open");
// each call flips — three flips ends up adding it
// fix: use the boolean form to force a specific state
el.classList.toggle("open", shouldBeOpen);</code></pre>

<pre class="language-javascript"><code class="language-javascript">const el = document.querySelector(".missing");
el.classList.add("highlight");
// crashes if .missing isn't there
// fix: check first
const el = document.querySelector(".missing");
if (el) el.classList.add("highlight");</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-11-9-3-0': `
<pre class="language-javascript"><code class="language-javascript">// Inline style — single property
el.style.color = "red";
el.style.backgroundColor = "yellow";
el.style.fontSize = "20px";

// Inline style — with computed values
el.style.left = (mouseX - 10) + "px";
el.style.transform = "rotate(" + angle + "deg)";
el.style.opacity = String(progress);

// Inline style — clearing
el.style.color = "";

// classList — basics
el.classList.add("active");
el.classList.remove("active");
el.classList.toggle("active");

// classList — checking
if (el.classList.contains("active")) {
  console.log("it is active");
}

// classList — multiple
el.classList.add("primary", "large", "rounded");
el.classList.remove("loading", "pending");

// classList — replace
el.classList.replace("old", "new");

// classList — force a state
el.classList.toggle("hidden", isHidden);

// Reading classes
console.log(el.className);              // "btn primary active"
console.log(el.classList.length);        // 3
console.log([...el.classList]);          // ["btn", "primary", "active"]

// Toggle dark mode
document.body.classList.toggle("dark-mode");

// Update many elements
document.querySelectorAll(".tab").forEach(t =&gt; t.classList.remove("active"));
clickedTab.classList.add("active");

// Get computed style
const rendered = getComputedStyle(el);
console.log(rendered.color);             // "rgb(255, 0, 0)"
console.log(rendered.fontSize);           // "16px"</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-11-9-3-1': `
    <p><strong>Example: tab switcher</strong></p>
<pre class="language-javascript"><code class="language-javascript">function showTab(name) {
  document.querySelectorAll(".tab").forEach(t =&gt; t.classList.remove("active"));
  document.querySelectorAll(".panel").forEach(p =&gt; p.classList.add("hidden"));

  document.querySelector(".tab[data-tab='" + name + "']").classList.add("active");
  document.querySelector(".panel[data-tab='" + name + "']").classList.remove("hidden");
}
// classList handles every visual state change.
// the CSS file has rules for .active, .hidden — JS just flips the labels.</code></pre>

    <p><strong>Example: dynamic positioning of a tooltip</strong></p>
<pre class="language-javascript"><code class="language-javascript">function positionTooltip(tooltip, target) {
  const rect = target.getBoundingClientRect();
  tooltip.style.left = (rect.left + rect.width / 2) + "px";
  tooltip.style.top = (rect.bottom + 5) + "px";
  tooltip.classList.add("visible");
}
// style — for computed numeric positions (no class could express this)
// classList — for "is it visible or not" (defined in CSS)</code></pre>

    <p><strong>Example: dark mode toggle</strong></p>
<pre class="language-javascript"><code class="language-javascript">document.querySelector("#dark-toggle").addEventListener("click", () =&gt; {
  const isDark = document.body.classList.toggle("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
});
// one class flip switches the whole theme.
// the CSS handles every visual change (.dark body, .dark .card, etc.).</code></pre>

    <p><strong>Example: progress bar fill</strong></p>
<pre class="language-javascript"><code class="language-javascript">function updateProgress(percent) {
  const bar = document.querySelector(".progress-bar");
  bar.style.width = percent + "%";
  bar.classList.toggle("complete", percent &gt;= 100);
}
// style — for the dynamic width based on the current percent
// classList — for the "complete" visual state (color change, checkmark) at 100%</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-11-9-3-2': `
    <ul>
      <li><strong><code>style</code></strong> → inline styles, for computed or dynamic values</li>
      <li><strong><code>classList</code></strong> → toggling CSS classes, the cleaner everyday choice</li>
      <li><strong>CSS specificity</strong> → inline styles beat stylesheet rules by default</li>
      <li><strong><code>getComputedStyle</code></strong> → for reading the final rendered style, not just inline</li>
      <li><strong><code>className</code></strong> → the string form; setting it replaces all classes at once</li>
      <li><strong>CSS variables</strong> → setting <code>style.setProperty("--my-var", "10px")</code></li>
      <li><strong>Transitions</strong> → CSS transitions trigger when classList changes</li>
      <li><strong>CSS naming conventions</strong> → camelCase for JavaScript, hyphens in CSS</li>
      <li><strong>NodeList iteration</strong> → for applying changes to many elements</li>
      <li><strong>Optional chaining</strong> → for safe access when an element might not exist</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-11-9-3-3': `
    <ul>
      <li><code>style</code></li>
      <li><code>classList</code></li>
      <li><code>className</code></li>
      <li><code>getComputedStyle</code></li>
      <li>CSS specificity</li>
      <li>CSS transitions</li>
      <li>CSS variables (custom properties)</li>
      <li>Inline vs stylesheet styles</li>
      <li>camelCase property names</li>
      <li>Pixel units and other CSS values</li>
    </ul>
  `,

  /* ========================================================= 
   Sub-lesson: 3.12.11 DOM → adding classes
 =======================================================*/

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-11-10-0-0': `
    <p><code>classList.add()</code> is the method for <strong>adding a CSS class to an element</strong> from JavaScript. It's how you switch an element into a styled state defined in your CSS — like marking a form field as <code>.error</code>, a button as <code>.primary</code>, or a panel as <code>.expanded</code>.</p>
    <p>The new class joins whatever classes the element already has. It doesn't replace anything, doesn't wipe other classes — just appends. The visual change happens because your CSS file has a rule for that class.</p>
  `,

  /* 0.1 Syntax */
  'topics-11-10-0-1': `
<pre class="language-javascript"><code class="language-javascript">// HTML: &lt;button class="btn"&gt;Save&lt;/button&gt;

const btn = document.querySelector("button");

btn.classList.add("primary");
// HTML now: &lt;button class="btn primary"&gt;Save&lt;/button&gt;

btn.classList.add("large");
// HTML now: &lt;button class="btn primary large"&gt;Save&lt;/button&gt;

// the existing "btn" class is preserved.
// the new classes are added alongside.</code></pre>
    <p>One call, one (or more) new classes appended to the element. The element keeps whatever it already had.</p>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-11-10-0-2': `
<pre class="language-javascript"><code class="language-javascript">
element.classList.add(name)
//   - name: a class name string (no dots, no spaces)
//   - adds the class to the element's class list
//   - if the class is already there, nothing changes
//   - if the class is new, it appears at the end of the class list
element.classList.add(name1, name2, name3)
//   - add multiple classes in one call
//   - each as a separate argument
//
// the result is reflected in:
//   - the element's "class" attribute in the HTML
//   - element.classList (the DOMTokenList object)
//   - element.className (the full class string)
//
// example progression:
//   start:        class=""
//   add("btn"):   class="btn"
//   add("big"):   class="btn big"
//   add("btn"):   class="btn big"  (already there — no change)</code></pre>
    <p>Adding is idempotent — calling <code>add</code> with a class that's already there is safe and has no effect. You don't need to check first.</p>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-11-10-0-3': `
    <p><strong>Pass class names without dots.</strong> The <code>.</code> is only for CSS selectors, not for class names:</p>
<pre class="language-javascript"><code class="language-javascript">// Wrong — the dot becomes part of the class name
el.classList.add(".active");
// element gets class=".active" — invalid, CSS rule .active won't match

// Right — just the name
el.classList.add("active");
// element gets class="active" — matches the .active CSS rule</code></pre>

    <p><strong>Add multiple classes by passing multiple arguments.</strong> Each one is a separate string:</p>
<pre class="language-javascript"><code class="language-javascript">// Good — multiple arguments
el.classList.add("primary", "large", "rounded");
// element gets all three classes added

// Bad — one string with spaces
el.classList.add("primary large rounded");
// throws "InvalidCharacterError" — a class name can't contain spaces</code></pre>

    <p><strong>Adding a class that's already there does nothing.</strong> No error, no duplicate:</p>
<pre class="language-javascript"><code class="language-javascript">el.classList.add("active");
el.classList.add("active");
el.classList.add("active");
// element ends up with class="active" — just once

// you don't need to check first:
if (!el.classList.contains("active")) el.classList.add("active");   // unnecessary
el.classList.add("active");   // same effect, simpler</code></pre>

    <p><strong>Class names are case-sensitive.</strong> "Active" and "active" are different classes:</p>
<pre class="language-javascript"><code class="language-javascript">// CSS:
// .active { ... }

el.classList.add("active");   // ✓ matches .active in CSS
el.classList.add("Active");   // adds a SEPARATE class — won't match .active
el.classList.add("ACTIVE");   // another separate class

// rule: pick a casing convention (usually all lowercase) and stick to it.</code></pre>

    <p><strong>The visual change comes from CSS — JavaScript just adds the class.</strong> If you don't see the change, the CSS rule isn't matching:</p>
<pre class="language-javascript"><code class="language-javascript">el.classList.add("highlight");
// adds class="highlight" to the element

// but the user sees no change UNLESS your CSS has:
//   .highlight { background-color: yellow; }
// or similar.

// to verify the class is actually getting added:
console.log(el.classList.contains("highlight"));   // true
console.log(el.className);   // shows the full class string</code></pre>

    <p><strong>You can add classes you'll only use temporarily.</strong> Combined with <code>remove</code> later, this is the standard pattern for animations and transient states:</p>
<pre class="language-javascript"><code class="language-javascript">// CSS:
// .shake { animation: shake 0.5s; }

const el = document.querySelector(".error-field");
el.classList.add("shake");

setTimeout(() =&gt; el.classList.remove("shake"), 500);
// the animation plays once, then the class is removed
// adding it again later (e.g., on the next failed submission) re-triggers it</code></pre>

    <p><strong>NodeList doesn't have <code>classList</code>.</strong> You have to loop over individual elements:</p>
<pre class="language-javascript"><code class="language-javascript">const items = document.querySelectorAll(".item");
items.classList.add("highlight");   // doesn't error, doesn't work

// fix: loop
items.forEach(item =&gt; item.classList.add("highlight"));</code></pre>

    <p><strong>If the element might not exist, check before calling.</strong> <code>classList.add</code> on <code>null</code> crashes:</p>
<pre class="language-javascript"><code class="language-javascript">const el = document.querySelector(".missing");
el.classList.add("active");
// TypeError: Cannot read property 'classList' of null

// fix: check first
const el = document.querySelector(".missing");
if (el) el.classList.add("active");</code></pre>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-11-10-1-0': `
    <p>Most UI states aren't hard-coded into the HTML — they appear and disappear based on what the user does. A form field shouldn't start out with an "error" look; it should get that look <em>after</em> validation fails. <code>classList.add()</code> is the moment that change happens.</p>
    <p>Compared to using <code>style</code>, adding a class keeps your styling in CSS where it belongs. JavaScript only decides "this element is now in the error state" — your stylesheet decides what "error state" looks like. Cleaner, easier to maintain, easier to theme.</p>
  `,

  /* 1.1 Why use it */
  'topics-11-10-1-1': `
    <p>Most "make this look different" tasks are one <code>classList.add</code> call:</p>
<pre class="language-javascript"><code class="language-javascript">// Mark a field as having an error
input.classList.add("error");

// Show a loading state on a button
btn.classList.add("loading");

// Activate a navigation item
link.classList.add("active");

// Apply a theme
document.body.classList.add("dark-mode");

// Highlight a search match
match.classList.add("found");

// Open a modal
modal.classList.add("open");

// in every case, the visual rule lives in CSS. JavaScript just flips the switch.</code></pre>

    <p>It's also additive — adding "loading" doesn't remove "primary." That makes it safe to stack states without thinking about what's already there.</p>
  `,

  /* 1.2 Where you use it */
  'topics-11-10-1-2': `
<pre class="language-javascript"><code class="language-javascript">// Single class
el.classList.add("active");

// Multiple classes at once
el.classList.add("primary", "large", "rounded");

// Conditionally
if (user.isAdmin) {
  banner.classList.add("admin-only");
}

// On an event
btn.addEventListener("click", () =&gt; {
  btn.classList.add("clicked");
});

// To start an animation
el.classList.add("fade-in");

// To mark validation failures
input.classList.add("invalid");

// To enable a feature flag visually
document.body.classList.add("beta-features");

// To loop over many elements
document.querySelectorAll(".tab").forEach(t =&gt; t.classList.add("ready"));

// To respond to data
products.forEach(p =&gt; {
  if (p.onSale) p.element.classList.add("sale");
});

// As part of a state transition
function showLoading() {
  document.body.classList.add("loading");
}
function hideLoading() {
  document.body.classList.remove("loading");
}</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-11-10-1-3': `
    <p><code>classList.add</code> sticks a label on an element. The label by itself doesn't change anything visually — but CSS rules are listening for those labels. The moment you stick the "highlight" label on, every CSS rule that targets <code>.highlight</code> kicks in and styles the element accordingly.</p>
    <p>The labels stack. An element can have any number of labels at once, and each one can match a different CSS rule. So you might have "btn" (base styles), "primary" (color), "large" (size), "loading" (transient state) — all four classes contributing to how the element looks at this moment.</p>
    <p>Adding a label that's already there does nothing. Adding a new label appends it. Removing a label takes it off (next lesson). It's just a list, and <code>add</code> is "put this in the list."</p>
  `,

  /* 1.4 Mental model */
  'topics-11-10-1-4': `
    <p>Picture an element wearing a stack of name tags. Each tag is a class. The element's look is the combined effect of every name tag it's wearing — the CSS file has a description for each tag, and the element wears all of them at once.</p>
    <p><code>classList.add</code> hands the element one more name tag. The element doesn't take off any of its existing tags; it just adds the new one to the stack. If the new tag has a matching CSS rule, the element's look updates instantly. If not, nothing visible happens — but the tag is still on the element, ready for any rule that might reference it later.</p>
    <p>If you try to hand the element a tag it already has, nothing happens. You can't double-up on the same name tag. This means you can call <code>add</code> safely without checking first — there's no risk of duplicating.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-11-10-1-5': `
<pre class="language-javascript"><code class="language-javascript">// HTML: &lt;input id="email" class="field"&gt;
// CSS:
//   .field { border: 1px solid gray; }
//   .field.error { border-color: red; background: #ffe; }
//   .field.required { font-weight: bold; }

const input = document.getElementById("email");

// Step 1: input has class "field" only
console.log(input.className);    // "field"

// Step 2: add the "required" class
input.classList.add("required");
console.log(input.className);    // "field required"
// element now has BOTH "field" and "required" — both CSS rules apply

// Step 3: validation fails, add "error"
input.classList.add("error");
console.log(input.className);    // "field required error"
// now THREE classes — all three CSS rules apply

// step 4: try to add "error" again
input.classList.add("error");
console.log(input.className);    // "field required error" — no duplicate

// the visual result:
//   - red border (from .field.error)
//   - light yellow background (from .field.error)
//   - bold text (from .field.required)
//   - base border (from .field, overridden by .error for border-color)
//
// adding classes stacks them. each class connects to its own CSS rule.</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-11-10-2-0': `
    <p>If <code>classList.add</code> "isn't doing anything visible," confirm the class is actually being added before suspecting your JavaScript:</p>
<pre class="language-javascript"><code class="language-javascript">el.classList.add("highlight");
console.log(el.classList.contains("highlight"));   // should be true
console.log(el.className);                          // should include "highlight"

// if both are correct but nothing visible changed, the CSS isn't matching:
//   - is the stylesheet actually loaded?
//   - is "highlight" spelled the same in both files?
//   - is some other rule overriding it (specificity)?
//   - is the parent hiding the element (display: none)?
//
// open DevTools → Elements → click the element → "Styles" tab shows which rules apply.</code></pre>

    <p>Common silent-failure causes:</p>
<pre class="language-javascript"><code class="language-javascript">// 1. Including the dot
el.classList.add(".active");
// adds the literal class ".active", not "active" — won't match CSS rule .active

// 2. Spaces in one argument
el.classList.add("primary large");
// throws InvalidCharacterError

// 3. Element doesn't exist
document.querySelector(".missing").classList.add("active");
// TypeError on null

// 4. Stylesheet typo
// CSS has ".activ" (typo); JS adds "active" — they don't match</code></pre>
  `,

  /* 2.1 The part that makes it click */
  'topics-11-10-2-1': `
    <p><code>classList.add</code> doesn't change how the element looks — it changes which CSS rules <em>apply</em> to the element. The visual change is downstream: CSS rules match the new class, the browser recomputes styles, the element repaints. JavaScript's only job is to update the class list.</p>
    <p>This separation is what makes <code>classList</code> so clean to work with. Your JavaScript code stays focused on "what state should this element be in?" Your CSS code stays focused on "what does each state look like?" Two clear responsibilities, one tiny method call to bridge them.</p>
  `,

  /* 2.2 Common confusions */
  'topics-11-10-2-2': `
    <p><strong>Confusion: including the dot</strong></p>
<pre class="language-javascript"><code class="language-javascript">el.classList.add(".btn");   // adds literal class ".btn" — bad
el.classList.add("btn");     // ✓ adds class "btn"

// the dot is for SELECTORS, not for class names.</code></pre>

    <p><strong>Confusion: multiple classes in one string</strong></p>
<pre class="language-javascript"><code class="language-javascript">el.classList.add("btn primary");   // throws InvalidCharacterError

// to add multiple, pass separate arguments:
el.classList.add("btn", "primary");</code></pre>

    <p><strong>Confusion: thinking <code>add</code> replaces existing classes</strong></p>
<pre class="language-javascript"><code class="language-javascript">// HTML: &lt;p class="msg"&gt;Hi&lt;/p&gt;

el.classList.add("error");
// p still has "msg" — now class="msg error"
// add does NOT replace, only appends.

// to replace ALL classes:
el.className = "error";

// to swap one for another:
el.classList.replace("msg", "error");</code></pre>

    <p><strong>Confusion: case sensitivity</strong></p>
<pre class="language-javascript"><code class="language-javascript">// CSS: .active { ... }

el.classList.add("Active");
// adds class "Active" (capital A) — does NOT match .active in CSS

// rule: keep casing consistent. typically all-lowercase.</code></pre>

    <p><strong>Confusion: nothing happens visually</strong></p>
<pre class="language-javascript"><code class="language-javascript">el.classList.add("highlight");
// no change on screen

// most common cause: there's no .highlight rule in your CSS.
// JavaScript adding a class only changes appearance if the stylesheet has matching rules.

// fix: write the CSS rule that matches the class.</code></pre>

    <p><strong>Confusion: <code>classList</code> vs <code>className</code></strong></p>
<pre class="language-javascript"><code class="language-javascript">// classList is the OBJECT with methods (.add, .remove, .toggle, .contains)
// className is the STRING of all classes joined together

el.classList.add("new");          // adds without disturbing other classes
el.className = "new";              // REPLACES all classes with just "new"

// prefer classList for adding/removing.
// className is fine when you want to set the full class string at once.</code></pre>

    <p><strong>Confusion: NodeList doesn't have classList</strong></p>
<pre class="language-javascript"><code class="language-javascript">document.querySelectorAll(".tab").classList.add("ready");
// NodeList has no classList — silently does nothing useful

// fix: loop
document.querySelectorAll(".tab").forEach(t =&gt; t.classList.add("ready"));</code></pre>
  `,

  /* 2.3 Common mistakes */
  'topics-11-10-2-3': `
<pre class="language-javascript"><code class="language-javascript">el.classList.add(".active");
// adds the literal string ".active" — won't match CSS rule .active
// fix: drop the dot
el.classList.add("active");</code></pre>

<pre class="language-javascript"><code class="language-javascript">el.classList.add("btn primary");
// throws InvalidCharacterError — can't have spaces in one class
// fix: separate arguments
el.classList.add("btn", "primary");</code></pre>

<pre class="language-javascript"><code class="language-javascript">el.className.add("active");
// className is a STRING — strings don't have .add()
// fix: use classList for adding
el.classList.add("active");</code></pre>

<pre class="language-javascript"><code class="language-javascript">document.querySelectorAll(".tab").classList.add("active");
// NodeList has no classList
// fix: loop
document.querySelectorAll(".tab").forEach(t =&gt; t.classList.add("active"));</code></pre>

<pre class="language-javascript"><code class="language-javascript">const el = document.querySelector(".missing");
el.classList.add("active");
// crashes if .missing isn't there
// fix: check first
const el = document.querySelector(".missing");
if (el) el.classList.add("active");</code></pre>

<pre class="language-javascript"><code class="language-javascript">el.classList.add("Active");
// CSS rule is .active (lowercase) — they don't match
// fix: match the casing in your stylesheet
el.classList.add("active");</code></pre>

<pre class="language-javascript"><code class="language-javascript">if (!el.classList.contains("active")) {
  el.classList.add("active");
}
// the check is unnecessary — add is idempotent
// fix: just add
el.classList.add("active");</code></pre>

<pre class="language-javascript"><code class="language-javascript">el.classList.add("");
// empty string — throws SyntaxError
// fix: don't pass empty strings; validate input first
if (className) el.classList.add(className);</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-11-10-3-0': `
<pre class="language-javascript"><code class="language-javascript">// Single class
el.classList.add("active");

// Multiple at once
el.classList.add("primary", "large", "rounded");

// Conditionally
if (user.isAdmin) el.classList.add("admin");
if (item.featured) card.classList.add("featured");

// On an event
btn.addEventListener("click", () =&gt; btn.classList.add("clicked"));

// Animation trigger
el.classList.add("fade-in");

// Validation marker
input.classList.add("invalid");

// Page-wide theme
document.body.classList.add("dark-mode");

// In a loop
document.querySelectorAll(".tab").forEach(t =&gt; t.classList.add("ready"));

// From data
products.forEach(p =&gt; {
  if (p.onSale) p.element.classList.add("sale");
});

// Safe with null check
const el = document.querySelector(".target");
if (el) el.classList.add("active");

// Verify after adding
el.classList.add("highlight");
console.log(el.classList.contains("highlight"));   // true

// Combined with other DOM work
const div = document.createElement("div");
div.classList.add("card", "elevated");
div.textContent = "Hello";
document.body.appendChild(div);

// Temporary state (remove later)
el.classList.add("shake");
setTimeout(() =&gt; el.classList.remove("shake"), 500);</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-11-10-3-1': `
    <p><strong>Example: marking an invalid form field</strong></p>
<pre class="language-javascript"><code class="language-javascript">function validate(input) {
  if (input.value.trim() === "") {
    input.classList.add("error");
  }
}

document.querySelectorAll("input[required]").forEach(input =&gt; {
  input.addEventListener("blur", () =&gt; validate(input));
});
// when the user leaves a required field empty, "error" gets added.
// the CSS rule .error styles the field in red.</code></pre>

    <p><strong>Example: switching to a "loading" state on a button</strong></p>
<pre class="language-javascript"><code class="language-javascript">async function handleSave() {
  const btn = document.querySelector("#save");
  btn.classList.add("loading");
  btn.disabled = true;
  await save();
  btn.classList.remove("loading");
  btn.disabled = false;
}
// "loading" is a CSS class that shows a spinner and dims the button.
// adding it visually communicates that something's in progress.</code></pre>

    <p><strong>Example: enabling dark mode site-wide</strong></p>
<pre class="language-javascript"><code class="language-javascript">document.querySelector("#dark-toggle").addEventListener("click", () =&gt; {
  document.body.classList.add("dark-mode");
  localStorage.setItem("theme", "dark");
});
// the dark-mode class on &lt;body&gt; cascades to every descendant via CSS.
// one class add changes the entire page's look.</code></pre>

    <p><strong>Example: highlighting items that match a search</strong></p>
<pre class="language-javascript"><code class="language-javascript">function highlightMatches(query) {
  document.querySelectorAll(".item").forEach(item =&gt; {
    if (item.textContent.toLowerCase().includes(query.toLowerCase())) {
      item.classList.add("match");
    }
  });
}
// for each match, add the "match" class.
// CSS rule .match { background: yellow } visually highlights them.</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-11-10-3-2': `
    <ul>
      <li><strong><code>classList</code></strong> → the object that holds <code>add</code> and other methods</li>
      <li><strong><code>classList.remove</code></strong> → the opposite operation, covered next</li>
      <li><strong><code>classList.toggle</code></strong> → flip a class on or off</li>
      <li><strong><code>classList.contains</code></strong> → check if a class is present</li>
      <li><strong><code>className</code></strong> → the string version; replaces all classes when assigned</li>
      <li><strong>CSS classes</strong> → the labels that JavaScript adds, defined in your stylesheet</li>
      <li><strong>CSS specificity</strong> → which class rule wins when multiple apply</li>
      <li><strong>CSS transitions</strong> → adding a class can trigger a smooth animation</li>
      <li><strong>NodeList iteration</strong> → for adding the same class to many elements</li>
      <li><strong>State management</strong> → using classes to represent UI state (active, loading, error)</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-11-10-3-3': `
    <ul>
      <li><code>classList.remove</code></li>
      <li><code>classList.toggle</code></li>
      <li><code>classList.contains</code></li>
      <li><code>classList.replace</code></li>
      <li><code>className</code></li>
      <li>CSS classes</li>
      <li>CSS specificity</li>
      <li>CSS transitions</li>
      <li>State-based styling</li>
      <li>Conditional class application</li>
    </ul>
  `,

  /* ========================================================= 
   Sub-lesson: 3.12.12 DOM → removing classes
 =======================================================*/

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-11-11-0-0': `
    <p><code>classList.remove()</code> is the method for <strong>taking a CSS class off an element</strong>. It's the counterpart to <code>add</code>: where <code>add</code> puts an element <em>into</em> a styled state, <code>remove</code> pulls it out.</p>
    <p>Use it to clear errors after fixing them, hide loading spinners when work finishes, deactivate previously selected tabs, or undo any visual state that JavaScript set earlier. Only the named class goes away — all other classes on the element stay put.</p>
  `,

  /* 0.1 Syntax */
  'topics-11-11-0-1': `
<pre class="language-javascript"><code class="language-javascript">// HTML: &lt;button class="btn primary loading"&gt;Save&lt;/button&gt;

const btn = document.querySelector("button");

btn.classList.remove("loading");
// HTML now: &lt;button class="btn primary"&gt;Save&lt;/button&gt;

btn.classList.remove("primary");
// HTML now: &lt;button class="btn"&gt;Save&lt;/button&gt;

// other classes stay. only the named class is taken off.</code></pre>
    <p>Pick the class name; the method removes it. Everything else the element was wearing stays exactly as it was.</p>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-11-11-0-2': `
<pre class="language-javascript"><code class="language-javascript">
element.classList.remove(name)
//   - name: a class name string (no dots, no spaces)
//   - removes that class from the element's class list
//   - if the class isn't there, nothing happens (no error)
//   - other classes are not affected
//
element.classList.remove(name1, name2, name3)
//   - remove multiple classes in one call
//   - each as a separate argument
//
// example progression:
//   start:            class="btn primary loading"
//   remove("loading"): class="btn primary"
//   remove("primary"): class="btn"
//   remove("btn"):     class=""
//   remove("foo"):     class=""  (foo wasn't there — no change)</code></pre>
    <p>Like <code>add</code>, it's idempotent — calling <code>remove</code> on a class that isn't there is safe and has no effect. No need to check first.</p>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-11-11-0-3': `
    <p><strong>Pass class names without dots.</strong> Same rule as <code>add</code> — the dot is for CSS selectors only:</p>
<pre class="language-javascript"><code class="language-javascript">// Wrong
el.classList.remove(".active");
// tries to remove the literal class ".active" (which isn't there)
// the actual "active" class is NOT removed

// Right
el.classList.remove("active");</code></pre>

    <p><strong>Remove multiple classes by passing multiple arguments.</strong> Each one a separate string:</p>
<pre class="language-javascript"><code class="language-javascript">// Good
el.classList.remove("loading", "pending", "hidden");

// Bad — one string with spaces
el.classList.remove("loading pending");
// throws "InvalidCharacterError" — class names can't have spaces</code></pre>

    <p><strong>Removing a class that isn't there does nothing.</strong> No error, no warning, no problem:</p>
<pre class="language-javascript"><code class="language-javascript">// HTML: &lt;p class="msg"&gt;Hi&lt;/p&gt;

el.classList.remove("error");
// "error" wasn't on the element — nothing happens
// no exception, no console warning

// you don't need to check first:
if (el.classList.contains("error")) el.classList.remove("error");   // unnecessary
el.classList.remove("error");   // same effect, simpler</code></pre>

    <p><strong>Class names are case-sensitive.</strong> "Active" and "active" are different:</p>
<pre class="language-javascript"><code class="language-javascript">// HTML: &lt;div class="active"&gt;...&lt;/div&gt;

el.classList.remove("Active");
// "Active" (capital A) isn't on the element — does nothing
// the lowercase "active" stays.

el.classList.remove("active");
// ✓ removes the actual class.</code></pre>

    <p><strong>Removing a class doesn't affect inline styles.</strong> Inline <code>style</code> overrides win regardless of class changes:</p>
<pre class="language-javascript"><code class="language-javascript">// CSS: .red { color: red; }
// HTML: &lt;p class="red" style="color: green"&gt;Hi&lt;/p&gt;

const p = document.querySelector("p");
p.classList.remove("red");
// the .red rule no longer applies
// but the inline style="color: green" is still there
// the text is still green

// to clear the inline style too:
p.style.color = "";</code></pre>

    <p><strong>Common pairing with <code>add</code> — start a state, then clean it up later.</strong> The two together cover most "show then hide" flows:</p>
<pre class="language-javascript"><code class="language-javascript">// show a loading state
btn.classList.add("loading");

// later, when work is done
btn.classList.remove("loading");

// or for a temporary animation
el.classList.add("shake");
setTimeout(() =&gt; el.classList.remove("shake"), 500);</code></pre>

    <p><strong>To clear ALL classes at once, use <code>className = ""</code> instead.</strong> <code>classList.remove</code> takes specific names, not "everything":</p>
<pre class="language-javascript"><code class="language-javascript">// remove specific classes
el.classList.remove("a", "b", "c");

// remove EVERY class
el.className = "";

// alternative: remove every class by spreading the current list
el.classList.remove(...el.classList);
// works, but reads weirder than just el.className = ""</code></pre>

    <p><strong>NodeList doesn't have <code>classList</code>.</strong> Loop over individual elements:</p>
<pre class="language-javascript"><code class="language-javascript">const items = document.querySelectorAll(".item");
items.classList.remove("active");   // doesn't work — NodeList has no classList

// fix: loop
items.forEach(item =&gt; item.classList.remove("active"));</code></pre>

    <p><strong>Check before calling on possibly-missing elements.</strong> <code>classList.remove</code> on <code>null</code> crashes:</p>
<pre class="language-javascript"><code class="language-javascript">const el = document.querySelector(".missing");
el.classList.remove("active");
// TypeError: Cannot read property 'classList' of null

// fix:
const el = document.querySelector(".missing");
if (el) el.classList.remove("active");</code></pre>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-11-11-1-0': `
    <p>States that JavaScript sets shouldn't last forever. An error message that pops up needs to disappear once the user fixes the field. A loading spinner needs to vanish when the data arrives. A selected tab needs to be deselected when the user picks a different one. <code>classList.remove</code> is the cleanup half of that pattern.</p>
    <p>It's also surgical — only the named class goes away. If your element has five classes for different reasons, removing one leaves the other four intact. No accidental wiping of base styles or unrelated state.</p>
  `,

  /* 1.1 Why use it */
  'topics-11-11-1-1': `
    <p>Anytime you've set a class with <code>add</code>, you usually want to undo it later:</p>
<pre class="language-javascript"><code class="language-javascript">// Clear an error after the field is fixed
input.classList.remove("error");

// Hide a loading spinner when fetch finishes
btn.classList.remove("loading");

// Deactivate a previously-active tab
oldTab.classList.remove("active");

// Close a modal
modal.classList.remove("open");

// Stop highlighting after the search is cleared
items.forEach(item =&gt; item.classList.remove("match"));

// Turn off dark mode
document.body.classList.remove("dark-mode");</code></pre>

    <p>It's also the "deactivate the others" half of many selection patterns — before activating a new item, remove the "active" class from all the previous ones.</p>
  `,

  /* 1.2 Where you use it */
  'topics-11-11-1-2': `
<pre class="language-javascript"><code class="language-javascript">// Single class
el.classList.remove("active");

// Multiple at once
el.classList.remove("loading", "pending", "draft");

// In an event handler
btn.addEventListener("click", () =&gt; {
  btn.classList.remove("disabled");
});

// After validation passes
input.classList.remove("error");

// As cleanup after a temporary state
el.classList.add("shake");
setTimeout(() =&gt; el.classList.remove("shake"), 500);

// Deactivate before activating something else
document.querySelectorAll(".tab").forEach(t =&gt; t.classList.remove("active"));
clickedTab.classList.add("active");

// Reverse a feature flag
document.body.classList.remove("beta-features");

// Clear a "matched" highlight
document.querySelectorAll(".item").forEach(i =&gt; i.classList.remove("match"));

// Pair with add for toggling between states
function showSpinner() {
  document.body.classList.add("loading");
}
function hideSpinner() {
  document.body.classList.remove("loading");
}

// Conditionally
if (user.subscriptionExpired) {
  premium.classList.remove("unlocked");
}

// Safe with null check
const el = document.querySelector(".target");
if (el) el.classList.remove("highlighted");</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-11-11-1-3': `
    <p><code>classList.remove</code> takes a label off an element. The element still has every other label it was wearing — just not the one you removed. Any CSS rules that depended on that specific label stop applying; rules tied to the remaining labels keep doing their thing.</p>
    <p>It's safe to call whether or not the label is actually there. Removing a label that isn't on the element is a quiet no-op, not an error. That makes it easy to write cleanup code without first checking what state the element is in.</p>
    <p>The most common pattern: pair <code>add</code> and <code>remove</code> to flip between states. Set "loading" with <code>add</code>, clear it with <code>remove</code>. Mark "error" with <code>add</code>, unmark it with <code>remove</code>. Same element, same other classes — just one label turning on and off as needed.</p>
  `,

  /* 1.4 Mental model */
  'topics-11-11-1-4': `
    <p>Going back to the name-tag metaphor: <code>classList.add</code> hands the element a new name tag, <code>classList.remove</code> takes one off. The other name tags stay exactly where they are — only the one you named gets unpinned.</p>
    <p>If you ask the element to remove a name tag it doesn't have, it just shrugs. No error, no scolding. This is intentional — it means you can call <code>remove</code> as part of cleanup code without first confirming the tag was ever there. Either it's there and gets removed, or it wasn't and nothing changes.</p>
    <p>The CSS rules tied to that tag stop applying the moment the tag is gone. The element's look updates instantly. Rules tied to the other tags it's still wearing keep working — the change is isolated to whatever the removed class was responsible for.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-11-11-1-5': `
<pre class="language-javascript"><code class="language-javascript">// HTML: &lt;input id="email" class="field error required"&gt;
// CSS:
//   .field { border: 1px solid gray; }
//   .field.required { font-weight: bold; }
//   .field.error { border-color: red; background: #ffe; }

const input = document.getElementById("email");

// Step 1: input has three classes
console.log(input.className);    // "field error required"
// visual: bold text, red border, light yellow background

// Step 2: user fixes the field, validation passes
input.classList.remove("error");
console.log(input.className);    // "field required"
// the .error rule no longer applies
// visual: bold text, gray border, normal background
// "field" and "required" are still there — bold text stays

// Step 3: try to remove "error" again
input.classList.remove("error");
console.log(input.className);    // "field required" — no change, no error

// Step 4: remove a class that was never there
input.classList.remove("disabled");
console.log(input.className);    // "field required" — still unchanged, no error

// classList.remove is targeted and safe.
// only the named class is affected. missing classes are silently ignored.</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-11-11-2-0': `
    <p>If <code>classList.remove</code> "doesn't seem to do anything," confirm the class was actually on the element first:</p>
<pre class="language-javascript"><code class="language-javascript">console.log(el.className);   // shows the full class string
console.log(el.classList.contains("loading"));   // true or false

el.classList.remove("loading");

console.log(el.classList.contains("loading"));   // should be false
console.log(el.className);

// if the class wasn't there to begin with, remove is a no-op.
// if you see the class still in className after remove, look for typos —
// "Loading" vs "loading", trailing spaces, etc.</code></pre>

    <p>Common failure patterns:</p>
<pre class="language-javascript"><code class="language-javascript">// 1. Including the dot
el.classList.remove(".active");
// tries to remove ".active" (a class with a dot in its name) — not "active"

// 2. Case mismatch
el.classList.remove("Active");
// the class is "active" — case doesn't match, nothing removed

// 3. Trying to remove from null
document.querySelector(".missing").classList.remove("active");
// TypeError on null

// 4. The class was never added with classList — it's only set inline as style
el.style.color = "red";
el.classList.remove("red");   // doesn't change the inline color (that's not a class)
// fix: clear the inline style instead
el.style.color = "";</code></pre>
  `,

  /* 2.1 The part that makes it click */
  'topics-11-11-2-1': `
    <p><code>classList.remove</code> is the natural counterpart to <code>classList.add</code>. They're not separate concepts — they're two halves of "managing class state on an element." One puts a label on, the other takes it off. Together they cover almost every visual state transition you'll need.</p>
    <p>The "silently does nothing if the class isn't there" rule is intentional, not a quirk. It means cleanup code can be lazy: just call <code>remove</code>, don't worry about whether the class is currently on the element. The result is the same either way — the class is no longer there afterwards.</p>
  `,

  /* 2.2 Common confusions */
  'topics-11-11-2-2': `
    <p><strong>Confusion: including the dot</strong></p>
<pre class="language-javascript"><code class="language-javascript">el.classList.remove(".active");
// tries to remove a class literally named ".active" — not "active"
// fix:
el.classList.remove("active");</code></pre>

    <p><strong>Confusion: thinking <code>remove</code> clears all classes</strong></p>
<pre class="language-javascript"><code class="language-javascript">// HTML: &lt;p class="btn primary large"&gt;...&lt;/p&gt;

el.classList.remove("primary");
// only "primary" is removed
// element still has "btn" and "large"

// to remove all classes:
el.className = "";
// or:
el.classList.remove(...el.classList);   // spreads each into separate arguments</code></pre>

    <p><strong>Confusion: multiple classes in one string</strong></p>
<pre class="language-javascript"><code class="language-javascript">el.classList.remove("btn primary");
// throws InvalidCharacterError

// pass separate arguments:
el.classList.remove("btn", "primary");</code></pre>

    <p><strong>Confusion: case sensitivity</strong></p>
<pre class="language-javascript"><code class="language-javascript">// HTML: class="active"

el.classList.remove("Active");   // does nothing — capital A doesn't match
el.classList.remove("active");   // ✓ matches and removes

// keep all class casing consistent in your stylesheet and JS.</code></pre>

    <p><strong>Confusion: remove vs <code>className = ""</code></strong></p>
<pre class="language-javascript"><code class="language-javascript">// classList.remove → takes a specific class off, keeps others
// className = "" → wipes ALL classes

el.className = "loading active primary";

el.classList.remove("loading");
// → "active primary"

el.className = "";
// → "" (nothing — everything wiped)</code></pre>

    <p><strong>Confusion: thinking <code>remove</code> removes the element</strong></p>
<pre class="language-javascript"><code class="language-javascript">el.classList.remove("active");
// removes the CLASS, not the element
// the element is still on the page

// to remove the ELEMENT:
el.remove();</code></pre>

    <p><strong>Confusion: NodeList doesn't have classList</strong></p>
<pre class="language-javascript"><code class="language-javascript">document.querySelectorAll(".tab").classList.remove("active");
// NodeList has no classList — silently does nothing

// fix: loop
document.querySelectorAll(".tab").forEach(t =&gt; t.classList.remove("active"));</code></pre>

    <p><strong>Confusion: trying to remove a class that came from an inline style</strong></p>
<pre class="language-javascript"><code class="language-javascript">// HTML: &lt;p style="color: red"&gt;Hi&lt;/p&gt;

el.classList.remove("color: red");   // not a class — does nothing
el.style.color = "";                  // ✓ this clears the inline style

// classes and inline styles are two different systems.
// classList.remove only handles classes.</code></pre>
  `,

  /* 2.3 Common mistakes */
  'topics-11-11-2-3': `
<pre class="language-javascript"><code class="language-javascript">el.classList.remove(".active");
// tries to remove class ".active" — not "active"
// fix: drop the dot
el.classList.remove("active");</code></pre>

<pre class="language-javascript"><code class="language-javascript">el.classList.remove("btn primary");
// throws InvalidCharacterError
// fix: separate arguments
el.classList.remove("btn", "primary");</code></pre>

<pre class="language-javascript"><code class="language-javascript">el.className.remove("active");
// className is a STRING — strings don't have .remove()
// fix: use classList
el.classList.remove("active");</code></pre>

<pre class="language-javascript"><code class="language-javascript">document.querySelectorAll(".tab").classList.remove("active");
// NodeList has no classList
// fix: loop
document.querySelectorAll(".tab").forEach(t =&gt; t.classList.remove("active"));</code></pre>

<pre class="language-javascript"><code class="language-javascript">const el = document.querySelector(".missing");
el.classList.remove("active");
// crashes if .missing isn't there
// fix: check first
const el = document.querySelector(".missing");
if (el) el.classList.remove("active");</code></pre>

<pre class="language-javascript"><code class="language-javascript">el.classList.remove("Active");
// HTML class is "active" — case mismatch
// fix: match the case
el.classList.remove("active");</code></pre>

<pre class="language-javascript"><code class="language-javascript">if (el.classList.contains("active")) {
  el.classList.remove("active");
}
// unnecessary check — remove is safe even when class isn't there
// fix: just remove
el.classList.remove("active");</code></pre>

<pre class="language-javascript"><code class="language-javascript">el.classList.remove("");
// empty string — throws SyntaxError
// fix: validate before calling
if (className) el.classList.remove(className);</code></pre>

<pre class="language-javascript"><code class="language-javascript">el.classList.remove("active");
// expected the element to disappear — but only the class was removed
// fix: if you want to delete the element entirely
el.remove();</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-11-11-3-0': `
<pre class="language-javascript"><code class="language-javascript">// Single class
el.classList.remove("active");

// Multiple at once
el.classList.remove("loading", "pending", "draft");

// Clear an error
input.classList.remove("error");

// Stop showing loading
btn.classList.remove("loading");

// Close a modal
modal.classList.remove("open");

// Reset a temporary highlight
match.classList.remove("highlight");

// Undo a previous selection
document.querySelectorAll(".tab").forEach(t =&gt; t.classList.remove("active"));

// Conditional removal
if (user.signedOut) banner.classList.remove("logged-in");

// Pair with add for state changes
function clearErrors(input) {
  input.classList.remove("error", "warning", "invalid");
}

// On an event
input.addEventListener("input", () =&gt; {
  input.classList.remove("error");
});

// In a timeout (temporary state)
el.classList.add("shake");
setTimeout(() =&gt; el.classList.remove("shake"), 500);

// Loop over many
document.querySelectorAll(".item").forEach(i =&gt; i.classList.remove("hidden"));

// Safe null check
const el = document.querySelector(".target");
if (el) el.classList.remove("done");

// Verify after removal
el.classList.remove("done");
console.log(el.classList.contains("done"));   // false

// Replace one with another
el.classList.remove("old");
el.classList.add("new");
// or:
el.classList.replace("old", "new");</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-11-11-3-1': `
    <p><strong>Example: clearing an error as the user types</strong></p>
<pre class="language-javascript"><code class="language-javascript">document.querySelectorAll("input").forEach(input =&gt; {
  input.addEventListener("input", () =&gt; {
    input.classList.remove("error");
  });
});
// as soon as the user starts editing, the error class is removed.
// the visual feedback disappears immediately, encouraging the user.</code></pre>

    <p><strong>Example: hiding a loading spinner when work completes</strong></p>
<pre class="language-javascript"><code class="language-javascript">async function loadData() {
  const container = document.querySelector(".content");
  container.classList.add("loading");

  const data = await fetch("/api/data").then(r =&gt; r.json());
  render(data);

  container.classList.remove("loading");
}
// add at the start, remove at the end. simple show-and-hide pattern.</code></pre>

    <p><strong>Example: deselecting before reselecting</strong></p>
<pre class="language-javascript"><code class="language-javascript">function selectTab(tab) {
  document.querySelectorAll(".tab").forEach(t =&gt; t.classList.remove("active"));
  tab.classList.add("active");
}
// first remove "active" from every tab, then add it to the new one.
// the "remove from all, add to one" pattern is everywhere in selection UIs.</code></pre>

    <p><strong>Example: dismissing a notification</strong></p>
<pre class="language-javascript"><code class="language-javascript">document.querySelector(".banner .close").addEventListener("click", () =&gt; {
  document.querySelector(".banner").classList.remove("visible");
});
// removing "visible" triggers the CSS transition that fades the banner out.
// pairs naturally with adding "visible" when the banner first appears.</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-11-11-3-2': `
    <ul>
      <li><strong><code>classList.add</code></strong> → the counterpart that puts classes on</li>
      <li><strong><code>classList.toggle</code></strong> → covered next; combines add and remove based on current state</li>
      <li><strong><code>classList.contains</code></strong> → check whether a class is present</li>
      <li><strong><code>classList.replace</code></strong> → remove one class and add another in one call</li>
      <li><strong><code>className</code></strong> → setting to "" removes ALL classes at once</li>
      <li><strong>CSS classes</strong> → the labels that classList.remove takes off</li>
      <li><strong>CSS transitions</strong> → removing a class can trigger a smooth animation</li>
      <li><strong>Inline styles</strong> → classList.remove doesn't touch them; use <code>style.X = ""</code></li>
      <li><strong>NodeList iteration</strong> → for removing the same class from many elements</li>
      <li><strong>State management</strong> → using classes to track UI state, removed when state ends</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-11-11-3-3': `
    <ul>
      <li><code>classList.add</code></li>
      <li><code>classList.toggle</code></li>
      <li><code>classList.contains</code></li>
      <li><code>classList.replace</code></li>
      <li><code>className</code></li>
      <li>CSS classes</li>
      <li>CSS transitions</li>
      <li>Inline styles vs classes</li>
      <li>State cleanup patterns</li>
      <li><code>element.remove()</code></li>
    </ul>
  `,

  /* ========================================================= 
   Sub-lesson: 3.12.13 DOM → toggling classes
 =======================================================*/

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-11-12-0-0': `
    <p><code>classList.toggle()</code> is the method for <strong>flipping a class on or off</strong> based on whether it's currently there. If the class is present, <code>toggle</code> removes it. If it's missing, <code>toggle</code> adds it. One method, two outcomes, decided automatically by the element's current state.</p>
    <p>It's the natural choice for any "on/off" UI pattern — opening and closing a menu, switching dark mode, expanding and collapsing a panel, marking and unmarking favorites. Instead of writing separate add/remove logic, <code>toggle</code> handles the back-and-forth for you.</p>
  `,

  /* 0.1 Syntax */
  'topics-11-12-0-1': `
<pre class="language-javascript"><code class="language-javascript">// HTML: &lt;div id="menu" class=""&gt;...&lt;/div&gt;

const menu = document.getElementById("menu");

menu.classList.toggle("open");
// "open" wasn't there → it gets ADDED
// HTML now: &lt;div id="menu" class="open"&gt;...&lt;/div&gt;

menu.classList.toggle("open");
// "open" was there → it gets REMOVED
// HTML now: &lt;div id="menu" class=""&gt;...&lt;/div&gt;

menu.classList.toggle("open");
// flipped back ON
// HTML now: &lt;div id="menu" class="open"&gt;...&lt;/div&gt;</code></pre>
    <p>Each call flips the class. No need to check the current state — <code>toggle</code> checks for you and does the right thing.</p>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-11-12-0-2': `
<pre class="language-javascript"><code class="language-javascript">
element.classList.toggle(name)
//   - if name is currently in the class list → REMOVE it
//   - if name is currently missing → ADD it
//   - returns: true if the class is now PRESENT, false if it was removed
//
element.classList.toggle(name, force)
//   - second argument forces a specific state, ignoring the current state
//   - force = true  → always ADD (like classList.add)
//   - force = false → always REMOVE (like classList.remove)
//   - useful when you already know the desired state
//
equivalent code without toggle:
//   if (el.classList.contains(name)) {
//     el.classList.remove(name);
//   } else {
//     el.classList.add(name);
//   }
//
// toggle does this in one line.</code></pre>
    <p>The return value (<code>true</code> if the class ended up present, <code>false</code> if removed) is sometimes useful — e.g., to save the new state to localStorage.</p>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-11-12-0-3': `
    <p><strong>Without a second argument, <code>toggle</code> flips based on current state.</strong> First call adds, next removes, next adds, etc.:</p>
<pre class="language-javascript"><code class="language-javascript">// HTML: &lt;div class=""&gt;
el.classList.toggle("open");   // adds → class="open"
el.classList.toggle("open");   // removes → class=""
el.classList.toggle("open");   // adds → class="open"
el.classList.toggle("open");   // removes → class=""

// every call flips. unpredictable to "know what state it's in" if you've called it
// multiple times — usually used with click handlers where each click flips.</code></pre>

    <p><strong>The second argument forces a specific outcome.</strong> Useful when state is computed elsewhere:</p>
<pre class="language-javascript"><code class="language-javascript">// force ADD (acts like classList.add)
el.classList.toggle("open", true);   // adds "open", no matter what

// force REMOVE (acts like classList.remove)
el.classList.toggle("open", false);  // removes "open", no matter what

// the typical pattern: pass a boolean expression
el.classList.toggle("open", isMenuOpen);
// if isMenuOpen is true, "open" is added
// if isMenuOpen is false, "open" is removed
// no need to write if/else around add/remove</code></pre>

    <p><strong>The return value tells you the new state.</strong> True if the class is now there, false if it was removed:</p>
<pre class="language-javascript"><code class="language-javascript">const isOpen = menu.classList.toggle("open");
console.log(isOpen);   // true if menu is now open, false if now closed

// useful to update something based on the new state:
if (isOpen) {
  localStorage.setItem("menu", "open");
} else {
  localStorage.setItem("menu", "closed");
}

// or even more compactly:
localStorage.setItem("menu", menu.classList.toggle("open") ? "open" : "closed");</code></pre>

    <p><strong>Same syntax rules as <code>add</code> and <code>remove</code>.</strong> No dots, no spaces inside one name, case-sensitive, NodeList not supported:</p>
<pre class="language-javascript"><code class="language-javascript">// Right
el.classList.toggle("active");

// Wrong — with dot
el.classList.toggle(".active");   // toggles ".active" (with a literal dot)

// Wrong — multiple in one string
el.classList.toggle("active highlighted");   // InvalidCharacterError

// Case-sensitive
el.classList.toggle("Active");   // different class from "active"

// NodeList doesn't have classList
document.querySelectorAll(".tab").classList.toggle("active");   // doesn't work
// fix: loop
document.querySelectorAll(".tab").forEach(t =&gt; t.classList.toggle("active"));</code></pre>

    <p><strong>Unlike <code>add</code> and <code>remove</code>, <code>toggle</code> takes ONE class name at a time.</strong> Multiple arguments don't work the way you might expect:</p>
<pre class="language-javascript"><code class="language-javascript">// Bad — second argument is the force value, NOT a second class
el.classList.toggle("open", "highlighted");
// the string "highlighted" is truthy → forces "open" to be added
// "highlighted" itself is NOT toggled

// to toggle multiple classes, call separately:
el.classList.toggle("open");
el.classList.toggle("highlighted");

// or use a loop:
["open", "highlighted", "expanded"].forEach(c =&gt; el.classList.toggle(c));</code></pre>

    <p><strong><code>toggle</code> is great with CSS transitions.</strong> Flipping a class can trigger smooth animations:</p>
<pre class="language-javascript"><code class="language-javascript">// CSS:
//   .menu { max-height: 0; transition: max-height 0.3s; overflow: hidden; }
//   .menu.open { max-height: 500px; }

document.querySelector(".trigger").addEventListener("click", () =&gt; {
  document.querySelector(".menu").classList.toggle("open");
});
// each click flips the class.
// the CSS transition animates the height change smoothly.</code></pre>

    <p><strong>Safe with possibly-missing elements? Always check first.</strong> <code>toggle</code> on <code>null</code> crashes just like <code>add</code> and <code>remove</code>:</p>
<pre class="language-javascript"><code class="language-javascript">const el = document.querySelector(".missing");
el.classList.toggle("active");
// TypeError: Cannot read property 'classList' of null

// fix:
const el = document.querySelector(".missing");
if (el) el.classList.toggle("active");</code></pre>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-11-12-1-0': `
    <p>Many UI elements have two states: open or closed, visible or hidden, selected or unselected, on or off. Without <code>toggle</code>, you'd have to check the current state and then call either <code>add</code> or <code>remove</code> — three or four lines for what should be one decision.</p>
    <p><code>toggle</code> compresses that pattern into a single method call. The element flips between its two states with no manual checking. It's the cleanest way to express "switch this on or off, whichever applies right now."</p>
  `,

  /* 1.1 Why use it */
  'topics-11-12-1-1': `
    <p>Toggle is the natural fit for binary UI states:</p>
<pre class="language-javascript"><code class="language-javascript">// Open / close a menu
menuTrigger.addEventListener("click", () =&gt; {
  menu.classList.toggle("open");
});

// Dark mode switch
darkBtn.addEventListener("click", () =&gt; {
  document.body.classList.toggle("dark-mode");
});

// Show / hide a panel
expandBtn.addEventListener("click", () =&gt; {
  panel.classList.toggle("expanded");
});

// Mark / unmark a favorite
starBtn.addEventListener("click", () =&gt; {
  star.classList.toggle("favorited");
});

// every one of these is "switch this on or off." perfect toggle territory.</code></pre>

    <p>It's also nice for the "force a state" version — when you've already computed whether something should be on or off, pass the boolean as the second argument and skip writing the if/else yourself.</p>
  `,

  /* 1.2 Where you use it */
  'topics-11-12-1-2': `
<pre class="language-javascript"><code class="language-javascript">// Pure on/off flip
el.classList.toggle("active");

// On a click event
btn.addEventListener("click", () =&gt; {
  btn.classList.toggle("pressed");
});

// Force a state with a boolean
el.classList.toggle("hidden", shouldHide);

// React to a checkbox
checkbox.addEventListener("change", () =&gt; {
  preview.classList.toggle("disabled", !checkbox.checked);
});

// Toggle dark mode and remember the choice
darkBtn.addEventListener("click", () =&gt; {
  const isDark = document.body.classList.toggle("dark-mode");
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

// Show details on click
title.addEventListener("click", () =&gt; {
  details.classList.toggle("visible");
});

// Sidebar collapse
toggleBtn.addEventListener("click", () =&gt; {
  sidebar.classList.toggle("collapsed");
});

// Conditional toggle (force state from data)
items.forEach(item =&gt; {
  item.classList.toggle("complete", item.done);
});

// Toggle multiple — call separately
function flipAll(el) {
  el.classList.toggle("open");
  el.classList.toggle("highlighted");
}

// Use return value
const isExpanded = panel.classList.toggle("expanded");
saveState(isExpanded);</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-11-12-1-3': `
    <p><code>classList.toggle</code> is "flip this class." If it's there, take it off. If it's not, put it on. The method figures out which one applies by checking the element's current state. You don't have to think about it.</p>
    <p>This is the right tool when an element has a clear "on" state and a clear "off" state, controlled by the presence or absence of one class. Click a button → menu opens. Click again → menu closes. One handler, one <code>toggle</code> call, both directions covered.</p>
    <p>The second argument changes the behavior to "force this state." If you pass <code>true</code>, the class is always added. If you pass <code>false</code>, it's always removed. This is useful when you've already decided what the new state should be — typically from data or some other variable — and you just want a clean way to apply it without an if/else.</p>
  `,

  /* 1.4 Mental model */
  'topics-11-12-1-4': `
    <p>Picture a light switch. <code>toggle</code> is the act of flipping the switch — you don't tell it whether to turn the light on or off. It flips. If the light was off, it's now on. If it was on, it's now off. The switch knows its current state and reverses it.</p>
    <p>The optional second argument is like an override button. Press <code>toggle(name, true)</code> and you've forced the light on, no matter what state it was in. Press <code>toggle(name, false)</code> and it's forced off. The flip becomes a direct command instead of a reverse.</p>
    <p>And just like flipping a switch tells you nothing about what was happening before — only what's true now — the return value of <code>toggle</code> tells you the <em>new</em> state. True if the class is now on, false if it's now off. Useful when you want to record the new state somewhere.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-11-12-1-5': `
<pre class="language-javascript"><code class="language-javascript">// HTML: &lt;div id="panel"&gt;...&lt;/div&gt;
// CSS:
//   .panel { display: none; }
//   .panel.open { display: block; }

const panel = document.getElementById("panel");
const trigger = document.getElementById("trigger");

trigger.addEventListener("click", () =&gt; {
  const isOpen = panel.classList.toggle("open");
  console.log("panel is now:", isOpen ? "open" : "closed");
});

// step by step (each click):
//
// Click 1:
//   - toggle checks: does panel have "open"? No.
//   - adds "open" to classList.
//   - HTML: &lt;div id="panel" class="open"&gt;
//   - returns true.
//   - logs "panel is now: open"
//   - CSS .panel.open kicks in: display: block. user sees the panel.
//
// Click 2:
//   - toggle checks: does panel have "open"? Yes.
//   - removes "open".
//   - HTML: &lt;div id="panel" class=""&gt;
//   - returns false.
//   - logs "panel is now: closed"
//   - CSS .panel.open no longer applies. display: none. user no longer sees it.
//
// Click 3, 4, 5... same flip each time.
//
// the magic is that the same line of code handles BOTH directions.
// you don't have to track state yourself or write if/else.</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-11-12-2-0': `
    <p>If <code>toggle</code> is "doing the wrong thing" — adding when you expected remove, or vice versa — log the state before and after the call:</p>
<pre class="language-javascript"><code class="language-javascript">console.log("before:", el.classList.contains("open"));
const result = el.classList.toggle("open");
console.log("after:", el.classList.contains("open"), "(toggle returned:", result, ")");

// the first call tells you the starting state.
// the second confirms what toggle did.
// the return value confirms the new state.

// if "before" doesn't match what you expected, the bug is upstream — some other
// code already added or removed the class.</code></pre>

    <p>Common pattern of confusion: calling <code>toggle</code> twice and being surprised the class is gone. Each call flips. Two flips return you to the original state:</p>
<pre class="language-javascript"><code class="language-javascript">el.classList.toggle("open");   // off → on
el.classList.toggle("open");   // on → off

// to be deterministic, use the force argument:
el.classList.toggle("open", true);   // always on
el.classList.toggle("open", false);  // always off</code></pre>
  `,

  /* 2.1 The part that makes it click */
  'topics-11-12-2-1': `
    <p><code>toggle</code> isn't a separate concept from <code>add</code> and <code>remove</code> — it's a convenience that combines them based on current state. Internally, it's roughly "if the class is there, remove it; otherwise add it." You could write that yourself; <code>toggle</code> just saves you the keystrokes.</p>
    <p>The two-argument form (with the force boolean) is the version that's <em>most</em> like <code>add</code>/<code>remove</code>, but with the destination computed from a variable. When you have a variable that says "should this be on or off?", <code>toggle(name, variable)</code> applies it directly. Cleaner than <code>if (x) add else remove</code>.</p>
  `,

  /* 2.2 Common confusions */
  'topics-11-12-2-2': `
    <p><strong>Confusion: thinking the second argument is a second class name</strong></p>
<pre class="language-javascript"><code class="language-javascript">el.classList.toggle("open", "highlighted");
// the string "highlighted" is truthy, so it forces "open" to be ADDED
// "highlighted" itself is NOT toggled

// to toggle multiple classes:
el.classList.toggle("open");
el.classList.toggle("highlighted");
// or:
["open", "highlighted"].forEach(c =&gt; el.classList.toggle(c));</code></pre>

    <p><strong>Confusion: getting the return value mixed up</strong></p>
<pre class="language-javascript"><code class="language-javascript">const result = el.classList.toggle("open");
// result === true  → "open" is NOW on the element
// result === false → "open" is NOW off

// not "true means it was added" — true means it's currently there.
// useful for saving state:
localStorage.setItem("menuOpen", el.classList.toggle("open"));</code></pre>

    <p><strong>Confusion: forgetting the force argument exists</strong></p>
<pre class="language-javascript"><code class="language-javascript">// Verbose
if (shouldHide) {
  el.classList.add("hidden");
} else {
  el.classList.remove("hidden");
}

// Same effect, one line
el.classList.toggle("hidden", shouldHide);</code></pre>

    <p><strong>Confusion: thinking toggle is symmetric</strong></p>
<pre class="language-javascript"><code class="language-javascript">el.classList.toggle("active");
el.classList.toggle("active");
// back to where you started — two flips cancel out

// but ONE call always changes state. you can't toggle "to the same state."

// to set a specific state regardless of starting state, use the force argument:
el.classList.toggle("active", true);
el.classList.toggle("active", true);
// both calls leave "active" on the element — no flipping</code></pre>

    <p><strong>Confusion: dot in the class name</strong></p>
<pre class="language-javascript"><code class="language-javascript">el.classList.toggle(".active");
// toggles a class literally named ".active" — not "active"

// fix:
el.classList.toggle("active");</code></pre>

    <p><strong>Confusion: case sensitivity</strong></p>
<pre class="language-javascript"><code class="language-javascript">// element class is "active"
el.classList.toggle("Active");
// "Active" is a different class — adds it (since it's missing)
// "active" stays untouched

// keep casing consistent.</code></pre>

    <p><strong>Confusion: NodeList doesn't have classList</strong></p>
<pre class="language-javascript"><code class="language-javascript">document.querySelectorAll(".tab").classList.toggle("active");
// silently doesn't work — NodeList has no classList

// fix:
document.querySelectorAll(".tab").forEach(t =&gt; t.classList.toggle("active"));</code></pre>
  `,

  /* 2.3 Common mistakes */
  'topics-11-12-2-3': `
<pre class="language-javascript"><code class="language-javascript">el.classList.toggle("open", "highlighted");
// the second argument is a force boolean, not another class
// fix: separate toggle calls
el.classList.toggle("open");
el.classList.toggle("highlighted");</code></pre>

<pre class="language-javascript"><code class="language-javascript">el.classList.toggle(".active");
// toggles class with literal dot in its name
// fix: drop the dot
el.classList.toggle("active");</code></pre>

<pre class="language-javascript"><code class="language-javascript">el.classList.toggle("open active");
// throws InvalidCharacterError — no spaces inside one class name
// fix: call separately
el.classList.toggle("open");
el.classList.toggle("active");</code></pre>

<pre class="language-javascript"><code class="language-javascript">document.querySelectorAll(".tab").classList.toggle("active");
// NodeList has no classList
// fix: loop
document.querySelectorAll(".tab").forEach(t =&gt; t.classList.toggle("active"));</code></pre>

<pre class="language-javascript"><code class="language-javascript">const el = document.querySelector(".missing");
el.classList.toggle("active");
// crashes if .missing isn't there
// fix: check first
const el = document.querySelector(".missing");
if (el) el.classList.toggle("active");</code></pre>

<pre class="language-javascript"><code class="language-javascript">// trying to "set" a class with toggle when you know the desired state
if (shouldBeOpen) el.classList.toggle("open");
// only flips IF shouldBeOpen is true — incorrect if class is already on
// fix: use the force argument
el.classList.toggle("open", shouldBeOpen);</code></pre>

<pre class="language-javascript"><code class="language-javascript">el.classList.toggle("active");
el.classList.toggle("active");
// two flips = no net change
// if you meant "ensure active is on", use the force form
el.classList.toggle("active", true);</code></pre>

<pre class="language-javascript"><code class="language-javascript">const wasAdded = el.classList.toggle("open");
// wasAdded === true means "open" is NOW present (just added or already there)
// it does NOT specifically mean "I just added it"
// for the operation type, compare before/after:
const wasPresent = el.classList.contains("open");
el.classList.toggle("open");
const operation = wasPresent ? "removed" : "added";</code></pre>

<pre class="language-javascript"><code class="language-javascript">el.classList.toggle("Active");
// CSS rule is .active (lowercase)
// case mismatch — toggles a DIFFERENT class, won't affect styling
// fix: match the case
el.classList.toggle("active");</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-11-12-3-0': `
<pre class="language-javascript"><code class="language-javascript">// Basic flip
el.classList.toggle("active");

// Force on
el.classList.toggle("active", true);

// Force off
el.classList.toggle("active", false);

// Force based on a variable
el.classList.toggle("hidden", shouldHide);

// Use the return value
const isOpen = menu.classList.toggle("open");

// Click handler
btn.addEventListener("click", () =&gt; {
  btn.classList.toggle("pressed");
});

// Dark mode toggle
darkBtn.addEventListener("click", () =&gt; {
  document.body.classList.toggle("dark-mode");
});

// Checkbox-driven
checkbox.addEventListener("change", () =&gt; {
  preview.classList.toggle("disabled", !checkbox.checked);
});

// Toggle on data
items.forEach(item =&gt; {
  item.classList.toggle("done", item.completed);
});

// Loop over many elements
document.querySelectorAll(".task").forEach(t =&gt; t.classList.toggle("complete"));

// Combined with classList.add/remove
el.classList.add("loading");
process().then(() =&gt; {
  el.classList.remove("loading");
  el.classList.toggle("success", didSucceed);
});

// Safe with null check
const el = document.querySelector(".target");
if (el) el.classList.toggle("highlighted");

// Save state alongside toggle
const isExpanded = panel.classList.toggle("expanded");
localStorage.setItem("expanded", isExpanded);

// Conditional toggle in a single line
document.querySelector(".btn").classList.toggle("disabled", !isReady);</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-11-12-3-1': `
    <p><strong>Example: dropdown menu open/close</strong></p>
<pre class="language-javascript"><code class="language-javascript">document.querySelector(".dropdown-trigger").addEventListener("click", () =&gt; {
  document.querySelector(".dropdown-menu").classList.toggle("open");
});
// one click opens, one click closes. one line of JavaScript.
// the CSS rules for .dropdown-menu.open handle the visual change.</code></pre>

    <p><strong>Example: dark mode with persistence</strong></p>
<pre class="language-javascript"><code class="language-javascript">document.querySelector("#dark-toggle").addEventListener("click", () =&gt; {
  const isDark = document.body.classList.toggle("dark-mode");
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

// on page load:
const savedTheme = localStorage.getItem("theme");
document.body.classList.toggle("dark-mode", savedTheme === "dark");
// the force form is perfect here — we know exactly what state we want.</code></pre>

    <p><strong>Example: showing details on hover</strong></p>
<pre class="language-javascript"><code class="language-javascript">card.addEventListener("mouseenter", () =&gt; {
  card.classList.toggle("expanded", true);
});
card.addEventListener("mouseleave", () =&gt; {
  card.classList.toggle("expanded", false);
});
// using the force argument makes the intent explicit: "expand on enter, collapse on leave."
// no ambiguity about which direction the toggle is flipping.</code></pre>

    <p><strong>Example: marking favorites</strong></p>
<pre class="language-javascript"><code class="language-javascript">document.querySelectorAll(".star").forEach(star =&gt; {
  star.addEventListener("click", () =&gt; {
    const isFavorited = star.classList.toggle("favorited");
    saveToServer(star.dataset.id, isFavorited);
  });
});
// the return value tells us whether the item is now favorited or not.
// pass that to the API call so the server knows the new state.</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-11-12-3-2': `
    <ul>
      <li><strong><code>classList.add</code></strong> → the "always add" half of toggle</li>
      <li><strong><code>classList.remove</code></strong> → the "always remove" half</li>
      <li><strong><code>classList.contains</code></strong> → check the current state without changing it</li>
      <li><strong>force argument</strong> → the second parameter that makes toggle act like add or remove explicitly</li>
      <li><strong>Return value</strong> → true if the class is now present, false if removed</li>
      <li><strong>CSS transitions</strong> → toggling can trigger smooth animations on state changes</li>
      <li><strong>Binary UI state</strong> → open/closed, on/off, selected/unselected</li>
      <li><strong>Event handlers</strong> → toggle is most often used in click/change events</li>
      <li><strong>localStorage / persistence</strong> → save the new state from toggle's return value</li>
      <li><strong>NodeList iteration</strong> → for toggling the same class on many elements</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-11-12-3-3': `
    <ul>
      <li><code>classList.add</code></li>
      <li><code>classList.remove</code></li>
      <li><code>classList.contains</code></li>
      <li><code>classList.replace</code></li>
      <li>CSS transitions</li>
      <li>Binary state in UI</li>
      <li>Event-driven class changes</li>
      <li>localStorage</li>
      <li><code>className</code></li>
      <li>Force form vs flip form</li>
    </ul>
  `,

  /* ========================================================= 
   Sub-lesson: 3.12.14 DOM → creating elements: createElement()
 =======================================================*/

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-11-13-0-0': `
    <p><code>document.createElement()</code> is the method for <strong>making a new DOM element from scratch</strong>. You give it a tag name, and it gives you back a brand-new element object. The element exists in memory immediately — you can read it, modify it, configure it — but the user doesn't see it yet.</p>
    <p>The "doesn't see it yet" part is important. <code>createElement</code> only handles half the job: it builds the element. To actually put it on the page, you also need to attach it somewhere using <code>appendChild</code> or one of its cousins (next lesson). For now, this lesson focuses on the building step.</p>
  `,

  /* 0.1 Syntax */
  'topics-11-13-0-1': `
<pre class="language-javascript"><code class="language-javascript">// Create a new element — exists in memory, not on the page yet
const div = document.createElement("div");

console.log(div);          // &lt;div&gt;&lt;/div&gt;
console.log(div.tagName);   // "DIV"
console.log(div.parentNode); // null — not attached to anything yet

// you can configure it
div.textContent = "Hello";
div.classList.add("card");
div.id = "my-card";

console.log(div);
// &lt;div id="my-card" class="card"&gt;Hello&lt;/div&gt;
// — exists in memory, fully configured, still not on the page.</code></pre>
    <p>The result is a real, working element. You can do anything to it that you'd do to an on-page element — set text, change classes, attach event listeners, even append children to it. None of those changes are visible to the user until you attach the element to the DOM.</p>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-11-13-0-2': `
<pre class="language-javascript"><code class="language-javascript">// document.createElement(tagName)
//   - tagName: a string with an HTML tag name (case-insensitive but conventionally lowercase)
//   - returns: a brand-new element object
//   - the element has:
//       - the given tag name
//       - no children
//       - no attributes (except those implied by the tag)
//       - no parent (parentNode is null)
//       - default styles for that tag
//
// you can then configure the element:
//   element.textContent = "..."
//   element.innerHTML = "..."
//   element.classList.add("...")
//   element.id = "..."
//   element.setAttribute("attr", "value")
//   element.style.color = "..."
//   element.addEventListener("click", fn)
//   element.appendChild(child)
//
// all of these work on the new element BEFORE it's on the page.
// the user only sees the element after you attach it (next lesson).</code></pre>
    <p>The pattern is always: create, configure, attach. <code>createElement</code> is just the first step.</p>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-11-13-0-3': `
    <p><strong>Pass a tag name, not a selector.</strong> No prefixes, no attributes, just the tag:</p>
<pre class="language-javascript"><code class="language-javascript">// Right — plain tag names
document.createElement("div");
document.createElement("li");
document.createElement("button");
document.createElement("img");
document.createElement("a");

// Wrong — selectors with prefixes
document.createElement(".btn");      // creates a tag literally named ".btn" (invalid HTML)
document.createElement("#title");    // creates a tag literally named "#title"
document.createElement("button.primary");   // creates "button.primary" tag

// to add a class or id to the new element, do it AFTER:
const btn = document.createElement("button");
btn.classList.add("primary");
btn.id = "save-btn";</code></pre>

    <p><strong>The element starts empty.</strong> No text, no children, no classes — just a default tag:</p>
<pre class="language-javascript"><code class="language-javascript">const li = document.createElement("li");

console.log(li.textContent);   // "" — empty
console.log(li.children);      // empty HTMLCollection
console.log(li.className);     // ""

// to give it content, configure it:
li.textContent = "First item";</code></pre>

    <p><strong>The new element isn't connected to anything.</strong> Its <code>parentNode</code> is <code>null</code> until you attach it:</p>
<pre class="language-javascript"><code class="language-javascript">const div = document.createElement("div");
console.log(div.parentNode);   // null
console.log(document.body.contains(div));   // false — not on the page

// after appending (covered in the next lesson):
document.body.appendChild(div);
console.log(div.parentNode);   // &lt;body&gt;
console.log(document.body.contains(div));   // true</code></pre>

    <p><strong>You can build a whole tree before attaching anything.</strong> Append children to your new element while it's still off-page:</p>
<pre class="language-javascript"><code class="language-javascript">// Build a card structure entirely in memory
const card = document.createElement("div");
card.classList.add("card");

const title = document.createElement("h2");
title.textContent = "Welcome";
card.appendChild(title);

const body = document.createElement("p");
body.textContent = "Glad you're here.";
card.appendChild(body);

// at this point, the whole card tree exists — h2 inside div, p inside div —
// but none of it is on the page yet.

// one append puts it all on at once:
document.body.appendChild(card);</code></pre>

    <p><strong>Tag names are case-insensitive (in HTML documents), but lowercase is the convention.</strong> The browser stores the tag name uppercase no matter what you pass in:</p>
<pre class="language-javascript"><code class="language-javascript">document.createElement("div");    // ✓
document.createElement("DIV");    // also works
document.createElement("Div");    // also works

const el = document.createElement("DIV");
console.log(el.tagName);   // "DIV" — always uppercase when read back

// stick with lowercase in your code — it matches the rest of HTML/CSS conventions.</code></pre>

    <p><strong>Common element-specific properties work on the new element too.</strong> Things like <code>src</code> for images, <code>href</code> for links, <code>value</code> for inputs:</p>
<pre class="language-javascript"><code class="language-javascript">// Image
const img = document.createElement("img");
img.src = "/photo.jpg";
img.alt = "A photo";

// Link
const a = document.createElement("a");
a.href = "/about";
a.textContent = "About us";

// Input
const input = document.createElement("input");
input.type = "email";
input.value = "user@example.com";
input.placeholder = "Email";

// Button
const btn = document.createElement("button");
btn.type = "submit";
btn.textContent = "Submit";</code></pre>

    <p><strong>Event listeners attached before the element is on the page still work.</strong> They wait, attached to the element, until it's on the page and the events fire:</p>
<pre class="language-javascript"><code class="language-javascript">const btn = document.createElement("button");
btn.textContent = "Click me";
btn.addEventListener("click", () =&gt; console.log("clicked!"));

// element is in memory with a click handler attached. nothing happens yet.

document.body.appendChild(btn);

// now the button is on the page. clicking it fires the handler.</code></pre>

    <p><strong>For setting non-standard attributes, use <code>setAttribute</code>.</strong> Common patterns include <code>data-*</code> attributes:</p>
<pre class="language-javascript"><code class="language-javascript">const div = document.createElement("div");
div.setAttribute("data-user-id", "42");
div.setAttribute("aria-label", "User profile");
div.setAttribute("role", "button");

// for standard properties, direct assignment is cleaner:
div.id = "profile";        // instead of setAttribute("id", "profile")
div.className = "card";     // instead of setAttribute("class", "card")</code></pre>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-11-13-1-0': `
    <p>HTML files set up the page's initial structure. Anything that gets added dynamically — new chat messages, search results, items pushed onto a list, modals that appear on demand — needs to be built by JavaScript at runtime. <code>createElement</code> is the start of every dynamic insertion.</p>
    <p>The "build first, attach later" split also serves a practical purpose: you can fully configure an element off-page, then attach it in one finished state. The user never sees half-built elements flicker on screen — just the final result appearing all at once.</p>
  `,

  /* 1.1 Why use it */
  'topics-11-13-1-1': `
    <p>Anything created dynamically uses <code>createElement</code> at the start:</p>
<pre class="language-javascript"><code class="language-javascript">// A new chat bubble
const bubble = document.createElement("div");
bubble.classList.add("message");
bubble.textContent = newMessage.text;

// A new todo item
const li = document.createElement("li");
li.textContent = todoText;
li.classList.add("todo");

// A toast notification
const toast = document.createElement("div");
toast.classList.add("toast");
toast.textContent = "Saved!";

// A dynamically built form field
const input = document.createElement("input");
input.type = "text";
input.name = "username";

// each starts with createElement, gets configured, and (in the next lesson) gets attached.</code></pre>

    <p>Compared to building an HTML string and using <code>innerHTML</code>, <code>createElement</code> is safer (no parsing of user-controlled strings as HTML) and gives you direct control over event handlers — you can attach them right at creation time, before the element is on the page.</p>
  `,

  /* 1.2 Where you use it */
  'topics-11-13-1-2': `
<pre class="language-javascript"><code class="language-javascript">// Basic element types
document.createElement("div");
document.createElement("span");
document.createElement("p");
document.createElement("button");
document.createElement("a");
document.createElement("img");
document.createElement("input");
document.createElement("textarea");
document.createElement("select");
document.createElement("option");
document.createElement("li");
document.createElement("table");

// Configuring after creation
const div = document.createElement("div");
div.textContent = "Hello";
div.classList.add("card");
div.id = "card-1";
div.style.color = "blue";
div.setAttribute("data-id", "42");
div.addEventListener("click", handler);

// Building a tree before attaching
const card = document.createElement("div");
const title = document.createElement("h2");
title.textContent = "Title";
card.appendChild(title);
// card now contains the title — all in memory, not yet on the page

// In a loop — creating many elements
const items = [];
for (let i = 0; i &lt; 5; i++) {
  const li = document.createElement("li");
  li.textContent = "Item " + i;
  items.push(li);
}
// items is an array of 5 elements, none on the page yet

// As part of a render function
function buildCard(data) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.textContent = data.title;
  return card;
}</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-11-13-1-3': `
    <p><code>createElement</code> is "make me a new element." You tell the browser what kind (a div, a button, an image), and it hands back a fresh, blank element of that type. The element is real — it has all the properties and methods of any element on the page — but it's not on the page yet. Nobody can see it.</p>
    <p>This in-memory existence is the whole point. It lets you build and configure the element privately before showing it to the user. Set the text, add the classes, attach the event listeners, even build child elements inside it — all without the user seeing any of it. When you're done preparing, attaching it to the page (next lesson) shows the finished element in one clean step.</p>
    <p>Without <code>createElement</code>, you'd be stuck with whatever HTML the page started with. With it, you can add anything, anywhere, at any time during your script's life.</p>
  `,

  /* 1.4 Mental model */
  'topics-11-13-1-4': `
    <p>Imagine ordering a custom prop from a workshop. <code>createElement("div")</code> is placing the order — you specify the type ("I want a div"), and the workshop hands you back a blank prop. It's a real div, but it's not part of any scene yet. It's sitting on the workbench.</p>
    <p>You can customize the prop while it's on the workbench: paint it, attach things to it, label it, wire it up. Nobody watching the scene can see the prop yet. They'll see it for the first time when you carry it onto the stage (the "attach" step, covered next lesson).</p>
    <p>This separation gives you control over <em>when</em> the prop appears on stage, and ensures it appears in its finished state. The audience never sees the unpainted version, the half-wired version, or the empty version — only the polished result you decided to reveal.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-11-13-1-5': `
<pre class="language-javascript"><code class="language-javascript">// Goal: create a styled button with text and a click handler, ready to be added.

const btn = document.createElement("button");

// step by step:
// 1. document.createElement("button")
//    → browser creates a new &lt;button&gt; element in memory
//    → returns the element object
//    → btn now refers to this empty button
//    → it has no text, no class, no listener, no parent

// 2. btn.textContent = "Save";
btn.textContent = "Save";
//    → sets the button's text to "Save"
//    → still not on the page

// 3. btn.classList.add("btn", "primary");
btn.classList.add("btn", "primary");
//    → adds two classes
//    → still not on the page

// 4. btn.id = "save-btn";
btn.id = "save-btn";
//    → sets the id
//    → still not on the page

// 5. btn.addEventListener("click", () =&gt; console.log("saved"));
btn.addEventListener("click", () =&gt; console.log("saved"));
//    → attaches a click handler
//    → still not on the page — but the listener is wired and ready

// at this point, btn is a fully formed button:
//   &lt;button id="save-btn" class="btn primary"&gt;Save&lt;/button&gt;
// but the user can't see it. it's in memory, waiting.

// the user sees it ONLY after:
document.body.appendChild(btn);   // covered in the next lesson</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-11-13-2-0': `
    <p>If <code>createElement</code> gave you back something that doesn't look right, log it and check its properties:</p>
<pre class="language-javascript"><code class="language-javascript">const el = document.createElement("div");
console.log(el);              // &lt;div&gt;&lt;/div&gt;
console.log(el.tagName);       // "DIV"
console.log(el.outerHTML);     // "&lt;div&gt;&lt;/div&gt;"

// common bugs:
//   - typo in the tag name → console shows a tag you didn't intend
//   - passed a selector instead of a tag → element has a weird name like ".btn"</code></pre>

    <p>If the new element "isn't showing up on the page," it's almost always because you forgot to append it:</p>
<pre class="language-javascript"><code class="language-javascript">const div = document.createElement("div");
div.textContent = "Hello";
// ...where is it?
console.log(div.parentNode);   // null — it's not on the page

// fix:
document.body.appendChild(div);   // now it shows up</code></pre>

    <p>To check whether an element is currently on the page:</p>
<pre class="language-javascript"><code class="language-javascript">document.body.contains(element);   // true if it's in the DOM, false if floating
element.isConnected;                // also returns true/false (same idea)</code></pre>
  `,
  

  /* 2.1 The part that makes it click */
  'topics-11-13-2-1': `
    <p>The element exists from the moment you call <code>createElement</code>. It's already a real DOM object with all the usual methods and properties — it just isn't connected to the visible page yet. "On the page" is a property of being <em>attached</em> to a parent that's on the page, not a property of being <em>created</em>.</p>
    <p>This separation between "exists" and "visible" is what lets you build complex structures off-page, attach event listeners early, and reveal everything in one finished state. Once you accept that creation and attachment are two separate steps, the entire dynamic-content pattern becomes obvious.</p>
  `,

  /* 2.2 Common confusions */
  'topics-11-13-2-2': `
    <p><strong>Confusion: passing a selector instead of a tag name</strong></p>
<pre class="language-javascript"><code class="language-javascript">document.createElement(".btn");
// creates an element with tag name ".btn" — invalid HTML, won't render normally

// fix: pass the tag, add the class separately
const btn = document.createElement("button");
btn.classList.add("btn");</code></pre>

    <p><strong>Confusion: thinking the element shows up on the page right away</strong></p>
<pre class="language-javascript"><code class="language-javascript">const div = document.createElement("div");
div.textContent = "Hello";
// looking for the div... nothing on the page.

// fix: append it to the DOM
document.body.appendChild(div);

// createElement only BUILDS the element. attach is a separate step.</code></pre>

    <p><strong>Confusion: trying to query for the new element right away</strong></p>
<pre class="language-javascript"><code class="language-javascript">document.createElement("div");
// note: didn't even save the reference

document.querySelector("div");   // finds an EXISTING div on the page, not the new one

// the new element only becomes findable AFTER it's appended.
// always save the reference returned from createElement:
const newDiv = document.createElement("div");
document.body.appendChild(newDiv);   // now it's findable</code></pre>

    <p><strong>Confusion: trying to use HTML inside <code>createElement</code></strong></p>
<pre class="language-javascript"><code class="language-javascript">document.createElement("&lt;div class='card'&gt;Hello&lt;/div&gt;");
// invalid — the tag name can't contain angle brackets or attributes

// fix: createElement only takes a tag name. configure separately.
const div = document.createElement("div");
div.classList.add("card");
div.textContent = "Hello";

// if you want to create from an HTML string, use a different pattern:
const tmp = document.createElement("div");
tmp.innerHTML = "&lt;div class='card'&gt;Hello&lt;/div&gt;";
const card = tmp.firstElementChild;</code></pre>

    <p><strong>Confusion: thinking the element is "lost" if you don't save it</strong></p>
<pre class="language-javascript"><code class="language-javascript">document.createElement("div");
// without saving the reference, you can't do anything with the element.
// it's not lost (it exists), but it's unreachable.

// fix: assign it to a variable
const div = document.createElement("div");
// now you can configure and append it.</code></pre>

    <p><strong>Confusion: thinking <code>createElement</code> needs the parent to exist</strong></p>
<pre class="language-javascript"><code class="language-javascript">// you can call createElement at any time, even before the DOM is ready.
document.addEventListener("DOMContentLoaded", () =&gt; {
  // ...
});

// createElement works immediately:
const div = document.createElement("div");
// it doesn't need any specific parent — the parent only matters when you APPEND.</code></pre>
  `,

  /* 2.3 Common mistakes */
  'topics-11-13-2-3': `
<pre class="language-javascript"><code class="language-javascript">document.createElement(".btn");
// creates an element with the tag name ".btn" — invalid HTML
// fix: pass a real tag name, then add the class
const btn = document.createElement("button");
btn.classList.add("btn");</code></pre>

<pre class="language-javascript"><code class="language-javascript">const div = document.createElement("div");
div.textContent = "Hello";
// expected to see "Hello" on the page — it's not there
// fix: append the element
document.body.appendChild(div);</code></pre>

<pre class="language-javascript"><code class="language-javascript">document.createElement("&lt;p&gt;hello&lt;/p&gt;");
// can't pass HTML markup — only a tag name
// fix: create, then set text
const p = document.createElement("p");
p.textContent = "hello";</code></pre>

<pre class="language-javascript"><code class="language-javascript">document.createElement();
// missing tag name — throws TypeError
// fix: always pass a tag name
document.createElement("div");</code></pre>

<pre class="language-javascript"><code class="language-javascript">document.createElement("div").textContent = "Hi";
// nothing wrong syntactically, but you lost the reference
// fix: save the reference if you need to use the element later
const div = document.createElement("div");
div.textContent = "Hi";
document.body.appendChild(div);</code></pre>

<pre class="language-javascript"><code class="language-javascript">const list = document.createElement("ul");
list.children.push(li);
// .children isn't an array — no .push method
// fix: use appendChild
list.appendChild(li);</code></pre>

<pre class="language-javascript"><code class="language-javascript">const el = document.createElement("DIV");
console.log(el.tagName === "DIV");   // true
console.log(el.tagName === "div");   // false (case mismatch)
// fix: compare with toLowerCase() if you need to
console.log(el.tagName.toLowerCase() === "div");</code></pre>

<pre class="language-javascript"><code class="language-javascript">const div = document.createElement("div");
div.id = "card";
const found = document.getElementById("card");
console.log(found);   // null — div isn't on the page yet
// fix: append before querying
document.body.appendChild(div);
const found2 = document.getElementById("card");   // ✓ found</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-11-13-3-0': `
<pre class="language-javascript"><code class="language-javascript">// Simple
const div = document.createElement("div");

// With text
const p = document.createElement("p");
p.textContent = "Hello";

// With class and id
const btn = document.createElement("button");
btn.classList.add("primary");
btn.id = "save";
btn.textContent = "Save";

// Image with src and alt
const img = document.createElement("img");
img.src = "/photo.jpg";
img.alt = "Photo";

// Link with href
const a = document.createElement("a");
a.href = "/about";
a.textContent = "About";

// Input with type
const input = document.createElement("input");
input.type = "email";
input.placeholder = "Email";
input.required = true;

// With event listener
const btn2 = document.createElement("button");
btn2.textContent = "Click";
btn2.addEventListener("click", () =&gt; console.log("clicked"));

// With data attribute
const card = document.createElement("div");
card.setAttribute("data-user-id", "42");

// Building a tree off-page
const card2 = document.createElement("div");
card2.classList.add("card");

const title = document.createElement("h3");
title.textContent = "Title";
card2.appendChild(title);

const body = document.createElement("p");
body.textContent = "Content";
card2.appendChild(body);

// Generic factory function
function makeCard(title, body) {
  const card = document.createElement("div");
  card.classList.add("card");

  const h = document.createElement("h3");
  h.textContent = title;
  card.appendChild(h);

  const p = document.createElement("p");
  p.textContent = body;
  card.appendChild(p);

  return card;
}

const newCard = makeCard("Hello", "Welcome");
// newCard is fully built but not yet on the page

// Checking the new element
const el = document.createElement("div");
console.log(el.tagName);          // "DIV"
console.log(el.parentNode);        // null
console.log(el.isConnected);       // false
console.log(document.body.contains(el));   // false</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-11-13-3-1': `
    <p><strong>Example: a factory function for building cards</strong></p>
<pre class="language-javascript"><code class="language-javascript">function buildCard(data) {
  const card = document.createElement("article");
  card.classList.add("card");

  const title = document.createElement("h2");
  title.textContent = data.title;
  card.appendChild(title);

  const desc = document.createElement("p");
  desc.textContent = data.description;
  card.appendChild(desc);

  const btn = document.createElement("button");
  btn.textContent = "Open";
  btn.addEventListener("click", () =&gt; open(data.id));
  card.appendChild(btn);

  return card;
}
// the function returns a fully-built card ready to be appended.
// the caller decides when and where to place it on the page.</code></pre>

    <p><strong>Example: creating a temporary toast notification</strong></p>
<pre class="language-javascript"><code class="language-javascript">function toast(message) {
  const note = document.createElement("div");
  note.classList.add("toast");
  note.textContent = message;
  document.body.appendChild(note);

  setTimeout(() =&gt; note.remove(), 3000);
}
toast("Saved!");
// each call creates a fresh element with the message.
// the element is configured fully before being placed on the page.</code></pre>

    <p><strong>Example: building options for a dropdown from data</strong></p>
<pre class="language-javascript"><code class="language-javascript">function populateSelect(select, items) {
  items.forEach(item =&gt; {
    const option = document.createElement("option");
    option.value = item.id;
    option.textContent = item.label;
    select.appendChild(option);
  });
}
// each option is created in memory and appended.
// the data shape (id + label) maps cleanly to the option element's properties.</code></pre>

    <p><strong>Example: dynamically adding form fields</strong></p>
<pre class="language-javascript"><code class="language-javascript">document.querySelector("#add-field").addEventListener("click", () =&gt; {
  const input = document.createElement("input");
  input.type = "text";
  input.name = "extra[]";
  input.classList.add("dynamic-field");
  document.querySelector("form").appendChild(input);
});
// every click creates a new input and adds it to the form.
// because the inputs all share the same name, the form will submit them as an array.</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-11-13-3-2': `
    <ul>
      <li><strong><code>appendChild</code> / <code>append</code></strong> → the next step; puts the created element on the page</li>
      <li><strong><code>textContent</code></strong> → set the new element's text before attaching</li>
      <li><strong><code>classList</code></strong> → add classes during configuration</li>
      <li><strong><code>setAttribute</code></strong> → for non-standard attributes like <code>data-*</code> or <code>aria-*</code></li>
      <li><strong><code>addEventListener</code></strong> → attach event handlers before the element is on the page</li>
      <li><strong><code>cloneNode</code></strong> → duplicate an existing element instead of building from scratch</li>
      <li><strong><code>createTextNode</code></strong> → another way to create a text node directly</li>
      <li><strong><code>createDocumentFragment</code></strong> → a temporary off-page container, useful for batching</li>
      <li><strong>Element-specific properties</strong> → <code>src</code>, <code>href</code>, <code>value</code>, <code>type</code></li>
      <li><strong>Off-page vs on-page</strong> → the element is real either way, but only visible after attachment</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-11-13-3-3': `
    <ul>
      <li><code>appendChild</code> / <code>append</code></li>
      <li><code>textContent</code></li>
      <li><code>innerHTML</code></li>
      <li><code>classList</code></li>
      <li><code>setAttribute</code></li>
      <li><code>cloneNode</code></li>
      <li><code>createTextNode</code></li>
      <li><code>createDocumentFragment</code></li>
      <li>Element-specific properties (<code>src</code>, <code>href</code>, <code>value</code>)</li>
      <li>Factory functions for building elements</li>
    </ul>
  `,

  /* ========================================================= 
   Sub-lesson: 3.12.15 DOM → adding elements: appendChild(), append()
 =======================================================*/

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-11-14-0-0': `
    <p><code>appendChild()</code> and <code>append()</code> are the methods for <strong>putting elements onto the page</strong>. They're the second half of the create-and-attach pattern: <code>createElement</code> builds the element in memory; these methods place it inside a parent that's already on the page, making it visible.</p>
    <p>Both add elements as the last child of a parent. <code>appendChild</code> is the older method — takes one node, returns it. <code>append</code> is the newer one — takes any number of nodes or strings, returns nothing. For most code, they're interchangeable; <code>append</code> is just more flexible.</p>
  `,

  /* 0.1 Syntax */
  'topics-11-14-0-1': `
<pre class="language-javascript"><code class="language-javascript">// Setup: create an element in memory
const li = document.createElement("li");
li.textContent = "New task";

// Get the parent that's already on the page
const list = document.querySelector("ul");

// appendChild — classic version
list.appendChild(li);
// the &lt;li&gt; is now the LAST child of the &lt;ul&gt;.
// it appears at the bottom of the list on the page.

// append — newer, more flexible
list.append(li2);                       // single element, same as appendChild
list.append(li3, li4, li5);              // multiple elements at once
list.append("plain text");                // strings become text nodes
list.append(li6, " — ", li7);            // mix elements and strings</code></pre>
    <p>One call attaches the element to the page. Whatever was already inside the parent stays — the new element is added at the end, not in place of what was there.</p>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-11-14-0-2': `
<pre class="language-javascript"><code class="language-javascript">
parent.appendChild(child)
//   - child:  must be a NODE (element, text node, comment, etc.)
//   - cannot pass strings — throws TypeError
//   - cannot pass multiple — only takes one argument
//   - returns the child element (useful for chaining)
//   - the child becomes the LAST child of parent
//
parent.append(...nodesOrStrings)
//   - accepts any number of arguments
//   - each argument can be a node OR a string
//   - strings become text nodes automatically
//   - returns nothing (undefined)
//   - all arguments become children, in order, appended to the end
//
// what they share:
//   - the new content goes to the END of the parent
//   - existing children are NOT removed
//   - if the node was already on the page, it's MOVED (not copied)
//
// quick pick:
//   appendChild → older code, single node, when you need the return value
//   append      → modern code, more flexible, accepts strings and multiples</code></pre>
    <p>For most everyday code, the difference doesn't matter — pick one and be consistent. The fact that <code>append</code> handles strings is occasionally handy ("append this text node alongside this element"), but most of the time you create elements and append them one at a time.</p>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-11-14-0-3': `
    <p><strong>The new element goes at the END of the parent's children.</strong> Whatever was there before stays in place; the new element joins at the bottom:</p>
<pre class="language-javascript"><code class="language-javascript">// HTML:
// &lt;ul id="list"&gt;
//   &lt;li&gt;A&lt;/li&gt;
//   &lt;li&gt;B&lt;/li&gt;
// &lt;/ul&gt;

const li = document.createElement("li");
li.textContent = "C";
document.getElementById("list").appendChild(li);

// HTML now:
// &lt;ul id="list"&gt;
//   &lt;li&gt;A&lt;/li&gt;
//   &lt;li&gt;B&lt;/li&gt;
//   &lt;li&gt;C&lt;/li&gt;   ← new li added at the end
// &lt;/ul&gt;</code></pre>

    <p><strong>To insert at the beginning, use <code>prepend</code>.</strong> Same idea, opposite end:</p>
<pre class="language-javascript"><code class="language-javascript">// HTML:
// &lt;ul&gt;&lt;li&gt;A&lt;/li&gt;&lt;li&gt;B&lt;/li&gt;&lt;/ul&gt;

const li = document.createElement("li");
li.textContent = "first";

document.querySelector("ul").prepend(li);

// HTML now:
// &lt;ul&gt;
//   &lt;li&gt;first&lt;/li&gt;   ← inserted at the START
//   &lt;li&gt;A&lt;/li&gt;
//   &lt;li&gt;B&lt;/li&gt;
// &lt;/ul&gt;</code></pre>

    <p><strong>To insert at a specific position, use <code>before</code> or <code>after</code> on a reference element.</strong> These are element-relative:</p>
<pre class="language-javascript"><code class="language-javascript">// HTML: &lt;ul&gt;&lt;li id="anchor"&gt;Middle&lt;/li&gt;&lt;/ul&gt;
const anchor = document.getElementById("anchor");
const newLi = document.createElement("li");
newLi.textContent = "Inserted";

anchor.before(newLi);
// HTML: &lt;ul&gt;&lt;li&gt;Inserted&lt;/li&gt;&lt;li id="anchor"&gt;Middle&lt;/li&gt;&lt;/ul&gt;

anchor.after(newLi);
// (this would MOVE newLi, since it can only exist in one place)
// HTML: &lt;ul&gt;&lt;li id="anchor"&gt;Middle&lt;/li&gt;&lt;li&gt;Inserted&lt;/li&gt;&lt;/ul&gt;</code></pre>

    <p><strong><code>appendChild</code> returns the appended child.</strong> Sometimes useful for chaining or capturing the reference inline:</p>
<pre class="language-javascript"><code class="language-javascript">const li = document.querySelector("ul").appendChild(document.createElement("li"));
li.textContent = "Hi";
// li is the just-appended element, ready to configure.

// vs. append, which returns nothing:
const ul = document.querySelector("ul");
ul.append(li);
console.log(ul.append(li));   // undefined</code></pre>

    <p><strong>If you append an element that's already on the page, it MOVES.</strong> The browser only allows one parent per element:</p>
<pre class="language-javascript"><code class="language-javascript">// HTML:
// &lt;div id="from"&gt;&lt;p id="msg"&gt;Hi&lt;/p&gt;&lt;/div&gt;
// &lt;div id="to"&gt;&lt;/div&gt;

const p = document.getElementById("msg");
document.getElementById("to").appendChild(p);

// HTML now:
// &lt;div id="from"&gt;&lt;/div&gt;            ← p is GONE from here
// &lt;div id="to"&gt;&lt;p id="msg"&gt;Hi&lt;/p&gt;&lt;/div&gt;   ← p moved here

// the p didn't get cloned — it changed parents.
// to actually duplicate, use cloneNode first:
const copy = p.cloneNode(true);
document.getElementById("to").appendChild(copy);</code></pre>

    <p><strong><code>append</code> accepts strings and creates text nodes from them.</strong> <code>appendChild</code> won't accept strings:</p>
<pre class="language-javascript"><code class="language-javascript">// Bad with appendChild
list.appendChild("Hello");   // TypeError — needs a node

// Good with append
list.append("Hello");        // ✓ "Hello" becomes a text node

// Workaround for appendChild
list.appendChild(document.createTextNode("Hello"));

// useful when mixing:
list.append("Items: ", li1, ", ", li2);
// inserts text, then element, then text, then element — all in order.</code></pre>

    <p><strong>The parent must be on the page (or itself eventually attached) for the child to be visible.</strong> Appending to an off-page element doesn't render anything:</p>
<pre class="language-javascript"><code class="language-javascript">const ghostDiv = document.createElement("div");
const li = document.createElement("li");
li.textContent = "Hidden";
ghostDiv.appendChild(li);
// li is inside ghostDiv, but ghostDiv isn't on the page
// → nothing visible

// to make it visible, attach the wrapper:
document.body.appendChild(ghostDiv);
// now both ghostDiv and its li are on the page</code></pre>

    <p><strong>For batch inserts, build off-page first then append once.</strong> The browser only re-renders after the final attachment:</p>
<pre class="language-javascript"><code class="language-javascript">// Slow — page re-renders 100 times
for (let i = 0; i &lt; 100; i++) {
  const li = document.createElement("li");
  li.textContent = "Item " + i;
  list.appendChild(li);
}

// Fast — build in a fragment, append once (1 render)
const fragment = document.createDocumentFragment();
for (let i = 0; i &lt; 100; i++) {
  const li = document.createElement("li");
  li.textContent = "Item " + i;
  fragment.appendChild(li);
}
list.appendChild(fragment);
// the fragment is a temporary off-page container.
// appending the fragment transfers all its children to the parent in one go.</code></pre>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-11-14-1-0': `
    <p>Without a way to attach elements, <code>createElement</code> would be useless — you'd build elements no one could see. <code>appendChild</code> and <code>append</code> are how creations actually appear on the page. They take an element that exists in memory and connect it to the rendered DOM tree.</p>
    <p>They also handle the structural side of dynamic content: where new elements go relative to existing ones. The default behavior (append to the end) covers most cases — new chat messages at the bottom, new list items below existing ones, new search results stacking up. For other positions, you have <code>prepend</code>, <code>before</code>, and <code>after</code>.</p>
  `,

  /* 1.1 Why use it */
  'topics-11-14-1-1': `
    <p>Every dynamic insertion ends with one of these methods:</p>
<pre class="language-javascript"><code class="language-javascript">// New chat message
const msg = document.createElement("div");
msg.textContent = "Hello";
document.querySelector(".chat").appendChild(msg);

// Toast notification
const toast = document.createElement("div");
toast.textContent = "Saved!";
document.body.appendChild(toast);

// Search result
const card = buildResultCard(data);
document.querySelector(".results").appendChild(card);

// Modal
const modal = createModal();
document.body.appendChild(modal);

// every line above is "build, then attach." appendChild/append is the attach step.</code></pre>

    <p><code>append</code> is also nice for mixing text and elements in one call — a common pattern when building inline content like "<span>name</span> sent a message at <span>time</span>."</p>
  `,

  /* 1.2 Where you use it */
  'topics-11-14-1-2': `
<pre class="language-javascript"><code class="language-javascript">// Basic append
parent.appendChild(child);
parent.append(child);

// Multiple children at once (append only)
parent.append(child1, child2, child3);

// Mix elements and strings (append only)
parent.append("Welcome, ", nameSpan, "!");

// Prepend at the start
parent.prepend(child);

// Insert before/after a reference
referenceEl.before(newEl);
referenceEl.after(newEl);

// Insert before a child (older API)
parent.insertBefore(newEl, referenceChild);

// Build a tree, then attach in one go
const card = document.createElement("div");
const title = document.createElement("h2");
title.textContent = "Title";
card.appendChild(title);
document.body.appendChild(card);

// Document fragment for many items
const frag = document.createDocumentFragment();
items.forEach(item =&gt; {
  const li = document.createElement("li");
  li.textContent = item;
  frag.appendChild(li);
});
list.appendChild(frag);

// Capture the return value (appendChild)
const li = list.appendChild(document.createElement("li"));
li.textContent = "New";

// Move an existing element
const archive = document.querySelector(".archive");
archive.appendChild(document.querySelector(".item"));   // moves, not copies

// Clone before appending (true duplicate)
const original = document.querySelector(".template");
const copy = original.cloneNode(true);
document.body.appendChild(copy);</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-11-14-1-3': `
    <p><code>appendChild</code> and <code>append</code> are how you make an element part of the page. Until you call one of them, your element is floating in memory — built and ready, but invisible. The call connects it to a parent, which connects it to the page, which makes it appear.</p>
    <p>The default is "at the end of the parent's children." That's why a new chat message shows up at the bottom, not the top. If you want a different position, you use <code>prepend</code> (at the start), <code>before</code> or <code>after</code> (next to a specific reference element), or <code>insertBefore</code> (the older positional API).</p>
    <p><code>append</code> is the newer, more forgiving version: pass strings, pass multiple things, mix them freely. <code>appendChild</code> is the classic version: one node at a time, returns the node. Functionally similar for everyday tasks; pick one and stay consistent.</p>
  `,

  /* 1.4 Mental model */
  'topics-11-14-1-4': `
    <p>Picture a row of identical drawers — that's the parent, with each drawer being a slot for one child element. <code>appendChild</code> takes your prepared item from the workbench and slides it into the next empty drawer at the end of the row. The existing drawers stay full; one more drawer becomes occupied.</p>
    <p>If the item was already in a drawer somewhere else, sliding it into a new spot empties the old one — the item can only be in one drawer at a time. To have two of the same item, you'd have to make a copy (clone) first and slide the copy into the new drawer.</p>
    <p><code>append</code> works the same way, but it's a bigger funnel: you can drop in multiple items at once, and you can even drop in scraps of paper (strings) that get tucked between the items. The drawer behavior is the same — everything ends up at the end of the row, in the order you handed it over.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-11-14-1-5': `
<pre class="language-javascript"><code class="language-javascript">// HTML on the page:
// &lt;ul id="tasks"&gt;
//   &lt;li&gt;Buy milk&lt;/li&gt;
// &lt;/ul&gt;

// Goal: add a new task to the list.

// Step 1: create the new element in memory
const li = document.createElement("li");
li.textContent = "Walk dog";

// at this moment:
//   - li exists as an object
//   - li.parentNode is null
//   - the user sees only "Buy milk" on the page

// Step 2: find the parent that's already on the page
const list = document.getElementById("tasks");

// Step 3: append the new element to the parent
list.appendChild(li);

// what just happened:
//   - the browser placed li as the LAST child of #tasks
//   - li.parentNode is now the &lt;ul&gt;
//   - the &lt;ul&gt; now has TWO &lt;li&gt; children
//   - the browser re-renders the list
//
// HTML now:
// &lt;ul id="tasks"&gt;
//   &lt;li&gt;Buy milk&lt;/li&gt;
//   &lt;li&gt;Walk dog&lt;/li&gt;   ← added by appendChild
// &lt;/ul&gt;
//
// the user sees "Walk dog" appear at the bottom of the list.

// the equivalent with append (slightly more modern):
list.append(li);
// same outcome. just a different method name.

// or all in one expression:
document.getElementById("tasks").append(li);</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-11-14-2-0': `
    <p>If you appended an element but "nothing happens" on the page, check two things:</p>
<pre class="language-javascript"><code class="language-javascript">// 1. Did the append actually run?
const li = document.createElement("li");
li.textContent = "Test";
list.appendChild(li);

console.log(li.parentNode);              // should be the list element
console.log(document.body.contains(li));  // should be true

// 2. Is the parent itself on the page?
console.log(document.body.contains(list));   // should be true
// if false, the parent isn't attached — child won't be visible either.</code></pre>

    <p>Other common bugs:</p>
<pre class="language-javascript"><code class="language-javascript">// 1. Appending to null (parent doesn't exist)
const parent = document.querySelector(".missing");   // null
parent.appendChild(li);   // TypeError on null

// fix: check the parent exists
if (parent) parent.appendChild(li);

// 2. Trying to append a string with appendChild
list.appendChild("Hello");   // TypeError
// fix: use append, or createTextNode
list.append("Hello");
list.appendChild(document.createTextNode("Hello"));

// 3. Appending an element that was already on the page elsewhere
// → moves, doesn't copy. if you expected two copies, use cloneNode first.

// 4. Appending elements in a loop without a fragment — slow with many items.</code></pre>
  `,

  /* 2.1 The part that makes it click */
  'topics-11-14-2-1': `
    <p>The two-step pattern — create with <code>createElement</code>, attach with <code>appendChild</code>/<code>append</code> — is the foundation of all dynamic content. Once you internalize it, every "add something to the page" task fits the same shape: build the element privately, configure it, then attach it where it belongs.</p>
    <p>The fact that elements can only have one parent isn't a limitation — it's why moving an element with <code>appendChild</code> just works. You don't have to remove it from its old spot first; appending it to a new parent automatically reassigns it. To have two of an element, clone it. Otherwise, all the positional methods (<code>append</code>, <code>prepend</code>, <code>before</code>, <code>after</code>, <code>insertBefore</code>) just move existing elements around.</p>
  `,

  /* 2.2 Common confusions */
  'topics-11-14-2-2': `
    <p><strong>Confusion: thinking <code>appendChild</code> accepts strings</strong></p>
<pre class="language-javascript"><code class="language-javascript">list.appendChild("Hello");
// TypeError: parameter 1 is not of type 'Node'

// fix: use append (which does accept strings)
list.append("Hello");

// or create a text node explicitly
list.appendChild(document.createTextNode("Hello"));</code></pre>

    <p><strong>Confusion: thinking <code>appendChild</code> takes multiple arguments</strong></p>
<pre class="language-javascript"><code class="language-javascript">list.appendChild(li1, li2, li3);
// only li1 gets appended — extra arguments are ignored

// fix: use append for multiple
list.append(li1, li2, li3);

// or call appendChild for each
[li1, li2, li3].forEach(li =&gt; list.appendChild(li));</code></pre>

    <p><strong>Confusion: thinking appending duplicates the element</strong></p>
<pre class="language-javascript"><code class="language-javascript">// HTML: &lt;ul id="a"&gt;&lt;li id="x"&gt;Hi&lt;/li&gt;&lt;/ul&gt; &lt;ul id="b"&gt;&lt;/ul&gt;

const li = document.getElementById("x");
document.getElementById("b").appendChild(li);

// HTML now:
// &lt;ul id="a"&gt;&lt;/ul&gt;       ← li is GONE
// &lt;ul id="b"&gt;&lt;li id="x"&gt;Hi&lt;/li&gt;&lt;/ul&gt;

// only ONE li exists. it moved.

// to duplicate:
const copy = li.cloneNode(true);
document.getElementById("b").appendChild(copy);</code></pre>

    <p><strong>Confusion: <code>append</code> vs <code>appendChild</code> return values</strong></p>
<pre class="language-javascript"><code class="language-javascript">const a = list.appendChild(li);   // returns the appended li
const b = list.append(li);         // returns undefined

console.log(a);   // &lt;li&gt;...&lt;/li&gt;
console.log(b);   // undefined

// don't try to chain off the return value of append:
list.append(li).classList.add("x");   // TypeError — undefined has no classList

// if you need the return value, use appendChild or capture the element separately:
const newLi = document.createElement("li");
list.append(newLi);
newLi.classList.add("x");</code></pre>

    <p><strong>Confusion: appending to an off-page element doesn't show anything</strong></p>
<pre class="language-javascript"><code class="language-javascript">const ghost = document.createElement("div");
const li = document.createElement("li");
li.textContent = "Where am I?";
ghost.appendChild(li);
// nothing visible — ghost itself isn't on the page

// fix: attach the parent too
document.body.appendChild(ghost);
// now both are visible</code></pre>

    <p><strong>Confusion: thinking insertion replaces existing content</strong></p>
<pre class="language-javascript"><code class="language-javascript">// HTML: &lt;div id="box"&gt;Already here&lt;/div&gt;
const span = document.createElement("span");
span.textContent = "New";
document.getElementById("box").appendChild(span);

// HTML now:
// &lt;div id="box"&gt;Already here&lt;span&gt;New&lt;/span&gt;&lt;/div&gt;
//                          ^ span is added AT THE END, not replacing

// to replace the contents, clear first:
const box = document.getElementById("box");
box.textContent = "";   // wipe everything inside
box.appendChild(span);  // now only the span is inside</code></pre>

    <p><strong>Confusion: order matters for sequential appends</strong></p>
<pre class="language-javascript"><code class="language-javascript">// the order you append in is the order they appear:
list.appendChild(a);   // list: [a]
list.appendChild(b);   // list: [a, b]
list.appendChild(c);   // list: [a, b, c]

// not by alphabetical order, not by some hidden priority — just call order.</code></pre>
  `,

  /* 2.3 Common mistakes */
  'topics-11-14-2-3': `
<pre class="language-javascript"><code class="language-javascript">list.appendChild("Hello");
// TypeError — appendChild needs a node
// fix: use append, or createTextNode
list.append("Hello");</code></pre>

<pre class="language-javascript"><code class="language-javascript">list.appendChild(li1, li2);
// only li1 gets appended; li2 is silently ignored
// fix: use append for multiples
list.append(li1, li2);</code></pre>

<pre class="language-javascript"><code class="language-javascript">const parent = document.querySelector(".missing");
parent.appendChild(li);
// crashes if .missing isn't there
// fix: check first
if (parent) parent.appendChild(li);</code></pre>

<pre class="language-javascript"><code class="language-javascript">const result = list.append(li);
result.classList.add("x");
// TypeError — append returns undefined
// fix: capture the element before appending
const li = document.createElement("li");
list.append(li);
li.classList.add("x");</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Trying to append the same element twice (expecting two copies)
const li = document.createElement("li");
listA.appendChild(li);
listB.appendChild(li);
// li ends up only in listB — it moved
// fix: clone if you want duplicates
listA.appendChild(li);
listB.appendChild(li.cloneNode(true));</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Appending many items in a loop, one at a time
for (let i = 0; i &lt; 1000; i++) {
  const li = document.createElement("li");
  li.textContent = "Item " + i;
  list.appendChild(li);   // page re-renders after EACH
}
// fix: use a document fragment
const frag = document.createDocumentFragment();
for (let i = 0; i &lt; 1000; i++) {
  const li = document.createElement("li");
  li.textContent = "Item " + i;
  frag.appendChild(li);
}
list.appendChild(frag);   // one render</code></pre>

<pre class="language-javascript"><code class="language-javascript">document.appendChild(li);
// document can only have one child (html); usually wrong place to append
// fix: use document.body or another container
document.body.appendChild(li);</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Appending before the DOM is ready
const li = document.createElement("li");
document.querySelector("ul").appendChild(li);
// fails if the script runs before &lt;ul&gt; is parsed (returns null)
// fix: wait for DOMContentLoaded, or place script at end of body
document.addEventListener("DOMContentLoaded", () =&gt; {
  document.querySelector("ul").appendChild(li);
});</code></pre>

<pre class="language-javascript"><code class="language-javascript">const box = document.querySelector(".box");
box.appendChild(span);
// span shows up at the END of box's content
// if you wanted it at the start:
box.prepend(span);
// or at a specific position:
referenceChild.before(span);</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-11-14-3-0': `
<pre class="language-javascript"><code class="language-javascript">// Simplest case
const li = document.createElement("li");
li.textContent = "New";
document.querySelector("ul").appendChild(li);

// Same with append
document.querySelector("ul").append(li);

// Multiple at once
list.append(li1, li2, li3);

// Mix with strings
list.append("Total: ", countSpan, " items");

// At the beginning
list.prepend(newFirstItem);

// Before / after a reference
reference.before(newItem);
reference.after(newItem);

// Build and attach a small tree
const card = document.createElement("div");
card.classList.add("card");

const title = document.createElement("h3");
title.textContent = "Title";
card.appendChild(title);

const body = document.createElement("p");
body.textContent = "Content";
card.appendChild(body);

document.querySelector(".feed").appendChild(card);

// Fragment for batching
const frag = document.createDocumentFragment();
items.forEach(text =&gt; {
  const li = document.createElement("li");
  li.textContent = text;
  frag.appendChild(li);
});
list.appendChild(frag);

// Capture the appended element (appendChild)
const li = list.appendChild(document.createElement("li"));
li.textContent = "Hi";

// Move an existing element
archive.appendChild(item);   // moves item from old parent

// Clone before appending (duplicate)
const copy = original.cloneNode(true);
document.body.appendChild(copy);

// Replace contents (clear, then append)
container.textContent = "";
container.append(newContent);

// Safe with null check
const parent = document.querySelector(".target");
if (parent) parent.appendChild(child);

// Chained creation + append
document.body.appendChild(document.createElement("div"));

// Append a text node directly (rare; usually use textContent)
list.appendChild(document.createTextNode("Hello"));</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-11-14-3-1': `
    <p><strong>Example: adding a new todo to a list</strong></p>
<pre class="language-javascript"><code class="language-javascript">document.querySelector("#add").addEventListener("click", () =&gt; {
  const input = document.querySelector("#new-todo");
  const text = input.value.trim();
  if (!text) return;

  const li = document.createElement("li");
  li.textContent = text;
  document.querySelector("#todo-list").appendChild(li);

  input.value = "";
});
// every click builds a new li and appends it to the bottom of the list.</code></pre>

    <p><strong>Example: rendering search results from data</strong></p>
<pre class="language-javascript"><code class="language-javascript">function render(results) {
  const container = document.querySelector(".results");
  container.textContent = "";   // clear previous

  const frag = document.createDocumentFragment();
  results.forEach(item =&gt; {
    const card = document.createElement("article");
    card.classList.add("result");

    const heading = document.createElement("h3");
    heading.textContent = item.title;
    card.appendChild(heading);

    frag.appendChild(card);
  });
  container.appendChild(frag);
}
// fragment + one append = single render, even for hundreds of results.</code></pre>

    <p><strong>Example: chat messages appending in real time</strong></p>
<pre class="language-javascript"><code class="language-javascript">function addMessage(author, text) {
  const msg = document.createElement("div");
  msg.classList.add("message");

  const name = document.createElement("strong");
  name.textContent = author + ": ";

  const body = document.createElement("span");
  body.textContent = text;

  msg.append(name, body);   // append accepts multiple — clean one-liner
  document.querySelector(".chat").appendChild(msg);
}
// every new message gets appended at the bottom — the natural chat flow.</code></pre>

    <p><strong>Example: tooltip insertion near a target element</strong></p>
<pre class="language-javascript"><code class="language-javascript">function showTooltip(target, message) {
  const tip = document.createElement("div");
  tip.classList.add("tooltip");
  tip.textContent = message;

  target.after(tip);   // insert immediately after the target

  setTimeout(() =&gt; tip.remove(), 2000);
}
// "after" places the tooltip right next to the target, instead of at the end of the document.</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-11-14-3-2': `
    <ul>
      <li><strong><code>createElement</code></strong> → the step that builds what you'll append</li>
      <li><strong><code>appendChild</code></strong> → classic, single-node, returns the child</li>
      <li><strong><code>append</code></strong> → modern, accepts multiple and strings</li>
      <li><strong><code>prepend</code></strong> → adds to the START instead of the end</li>
      <li><strong><code>before</code> / <code>after</code></strong> → element-relative positioning</li>
      <li><strong><code>insertBefore</code></strong> → older positional API (parent-relative)</li>
      <li><strong><code>cloneNode</code></strong> → for duplicating elements instead of moving them</li>
      <li><strong><code>createDocumentFragment</code></strong> → off-page container for batched appends</li>
      <li><strong><code>remove</code></strong> → the counterpart for taking elements off the page</li>
      <li><strong><code>replaceWith</code></strong> → swap an element for a new one in place</li>
      <li><strong>One parent rule</strong> → elements can only exist in one place; appending moves them</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-11-14-3-3': `
    <ul>
      <li><code>createElement</code></li>
      <li><code>appendChild</code></li>
      <li><code>append</code></li>
      <li><code>prepend</code></li>
      <li><code>before</code> / <code>after</code></li>
      <li><code>insertBefore</code></li>
      <li><code>cloneNode</code></li>
      <li><code>createDocumentFragment</code></li>
      <li><code>remove</code></li>
      <li><code>replaceWith</code></li>
    </ul>
  `,

  /* ========================================================= 
   Sub-lesson: 3.12.16 DOM → removing elements
 =======================================================*/

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-11-15-0-0': `
    <p><code>element.remove()</code> is the method for <strong>taking an element off the page</strong>. One call, no arguments — the element disappears from the DOM, along with anything inside it. It's the natural counterpart to <code>appendChild</code>/<code>append</code>: those put elements on the page; <code>remove</code> takes them off.</p>
    <p>Once an element is removed, the user can't see it anymore. It still exists as a JavaScript object if you have a reference to it (you could re-append it later), but it's no longer connected to the visible page.</p>
  `,

  /* 0.1 Syntax */
  'topics-11-15-0-1': `
<pre class="language-javascript"><code class="language-javascript">// HTML:
// &lt;ul&gt;
//   &lt;li id="a"&gt;A&lt;/li&gt;
//   &lt;li id="b"&gt;B&lt;/li&gt;
//   &lt;li id="c"&gt;C&lt;/li&gt;
// &lt;/ul&gt;

document.getElementById("b").remove();

// HTML now:
// &lt;ul&gt;
//   &lt;li id="a"&gt;A&lt;/li&gt;
//   &lt;li id="c"&gt;C&lt;/li&gt;
// &lt;/ul&gt;
// the &lt;li id="b"&gt; is gone. A and C close the gap.

// no arguments needed. you call .remove() on the element you want gone.</code></pre>
    <p>Simple: the element calls <code>.remove()</code> on itself, and it goes away. Whatever was around it stays — only the named element disappears.</p>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-11-15-0-2': `
<pre class="language-javascript"><code class="language-javascript">
element.remove()
//   - no arguments
//   - returns: undefined
//   - removes the element from its parent
//   - removes all of the element's descendants too (everything inside)
//   - the element's reference still exists in JS, but parentNode is null
//
// what happens to the element after remove:
//   - el.parentNode becomes null
//   - document.body.contains(el) becomes false
//   - the element is no longer rendered
//   - event listeners on the element still exist (attached to the JS object)
//   - if you re-append it later, it works again
//
// older equivalent (still works in any browser):
//   el.parentNode.removeChild(el);
//
// the modern .remove() is shorter and doesn't need the parent reference.</code></pre>
    <p>Calling <code>remove</code> doesn't destroy the element; it just disconnects it from the DOM. The element is still a real JavaScript object — just floating, the same way a freshly created element floats before it's appended.</p>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-11-15-0-3': `
    <p><strong>Call <code>.remove()</code> on the element itself, not on its parent.</strong> The modern API is element-relative — the element knows how to remove itself:</p>
<pre class="language-javascript"><code class="language-javascript">// Modern way — element removes itself
const li = document.getElementById("task-1");
li.remove();

// Older way — parent removes child (still works everywhere)
const li = document.getElementById("task-1");
li.parentNode.removeChild(li);

// both achieve the same thing. use .remove() in new code — it's shorter and clearer.</code></pre>

    <p><strong>Removing an element also removes everything inside it.</strong> Children, grandchildren, deeply nested content — all gone:</p>
<pre class="language-javascript"><code class="language-javascript">// HTML:
// &lt;div id="card"&gt;
//   &lt;h2&gt;Title&lt;/h2&gt;
//   &lt;p&gt;Some &lt;em&gt;text&lt;/em&gt;.&lt;/p&gt;
//   &lt;button&gt;Click&lt;/button&gt;
// &lt;/div&gt;

document.getElementById("card").remove();
// the whole card is gone — h2, p, em, text, button, all of it.
// you can't "remove the card but keep the button on the page" without moving the button first.</code></pre>

    <p><strong>Calling <code>remove</code> doesn't delete the JavaScript object.</strong> The reference still works; only the DOM connection is gone:</p>
<pre class="language-javascript"><code class="language-javascript">const li = document.querySelector("li");
console.log(li.parentNode);   // &lt;ul&gt;

li.remove();

console.log(li.parentNode);   // null — no longer attached
console.log(li.textContent);   // still works — the object still exists
console.log(li.tagName);       // "LI"

// you can even re-append it:
document.querySelector("ul").appendChild(li);
console.log(li.parentNode);   // &lt;ul&gt; — back on the page</code></pre>

    <p><strong>Event listeners survive removal.</strong> They're attached to the JavaScript object, not to its position in the DOM:</p>
<pre class="language-javascript"><code class="language-javascript">const btn = document.querySelector("button");
btn.addEventListener("click", () =&gt; console.log("clicked"));

btn.remove();
// the button is off the page. but if you re-append it later:
document.body.appendChild(btn);
// clicks still log "clicked" — the listener is still wired up.</code></pre>

    <p><strong>To clear all children of an element without removing the parent, set <code>textContent</code> to "" or <code>innerHTML</code> to "".</strong> Or loop and remove each:</p>
<pre class="language-javascript"><code class="language-javascript">// goal: empty the &lt;ul&gt;, but keep the &lt;ul&gt; itself

const list = document.querySelector("ul");

// option A — simple but nuclear
list.textContent = "";

// option B — equivalent
list.innerHTML = "";

// option C — remove each child explicitly
while (list.firstChild) {
  list.firstChild.remove();
}

// all three leave you with: &lt;ul&gt;&lt;/ul&gt;</code></pre>

    <p><strong>You can <code>remove</code> any element — including the body, html, or document root.</strong> Just usually not what you want:</p>
<pre class="language-javascript"><code class="language-javascript">document.body.remove();
// removes the entire body from the page — the user sees a blank screen

// don't do this unless you mean it. it works, but you've wiped your whole UI.</code></pre>

    <p><strong>Removing an element from a NodeList is a one-by-one operation.</strong> The NodeList doesn't have a <code>removeAll</code>:</p>
<pre class="language-javascript"><code class="language-javascript">// remove every .stale element
document.querySelectorAll(".stale").forEach(el =&gt; el.remove());

// or, to remove with a filter:
document.querySelectorAll(".item").forEach(el =&gt; {
  if (el.dataset.expired) el.remove();
});

// when removing during iteration, NodeList from querySelectorAll is static —
// removing an element doesn't break the loop (unlike live HTMLCollections).</code></pre>

    <p><strong>If the element isn't on the page, <code>remove</code> does nothing.</strong> No error, no warning — just a no-op:</p>
<pre class="language-javascript"><code class="language-javascript">const li = document.createElement("li");
li.remove();   // li wasn't on the page; nothing to remove
// no error, no side effects.

// safe to call even when you don't know if it's still attached.</code></pre>

    <p><strong>If the element might not exist at all, check first.</strong> Calling <code>remove</code> on <code>null</code> still crashes:</p>
<pre class="language-javascript"><code class="language-javascript">document.querySelector(".missing").remove();
// TypeError: Cannot read property 'remove' of null

// fix:
document.querySelector(".missing")?.remove();
// optional chaining — does nothing if querySelector returns null.</code></pre>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-11-15-1-0': `
    <p>Anything that gets added to a page eventually needs to be removable. Toast notifications dismiss themselves after a few seconds. Items removed from a cart should disappear from the list. Closed modals should vanish from the DOM (not just hide). Old chat messages get pruned when the list gets too long.</p>
    <p><code>element.remove()</code> is the cleanest way to handle all of these. No need to find the parent, no need to track positions — the element handles its own departure.</p>
  `,

  /* 1.1 Why use it */
  'topics-11-15-1-1': `
    <p>Removing is the natural finish for many UI flows:</p>
<pre class="language-javascript"><code class="language-javascript">// Dismiss a toast after a delay
const toast = createToast("Saved!");
document.body.appendChild(toast);
setTimeout(() =&gt; toast.remove(), 3000);

// Delete a todo item
deleteBtn.addEventListener("click", () =&gt; {
  todoItem.remove();
});

// Close a modal (and let the next open re-create it)
closeBtn.addEventListener("click", () =&gt; modal.remove());

// Clean up old messages
document.querySelectorAll(".message.old").forEach(m =&gt; m.remove());

// Remove a banner the user dismissed
banner.querySelector(".dismiss").addEventListener("click", () =&gt; banner.remove());</code></pre>

    <p>Compared to "hiding" an element (with <code>display: none</code> or a "hidden" class), <code>remove</code> actually frees the DOM space. Hiding leaves the element in place, just invisible. Removing takes it out of the tree entirely — useful when you don't expect it to come back, or when keeping it would clutter the DOM.</p>
  `,

  /* 1.2 Where you use it */
  'topics-11-15-1-2': `
<pre class="language-javascript"><code class="language-javascript">// Self-removal on a delete button
btn.addEventListener("click", () =&gt; {
  card.remove();
});

// Auto-dismiss after a timeout
setTimeout(() =&gt; toast.remove(), 3000);

// Remove based on a class
document.querySelectorAll(".obsolete").forEach(el =&gt; el.remove());

// Remove all items
document.querySelectorAll(".item").forEach(el =&gt; el.remove());

// Pair with a confirmation
if (confirm("Delete this?")) {
  item.remove();
}

// Remove on event
document.querySelector(".overlay").addEventListener("click", e =&gt; {
  if (e.target === e.currentTarget) {
    modal.remove();
  }
});

// Safe call with optional chaining
document.querySelector(".banner")?.remove();

// Remove an element then re-append later
const li = document.querySelector("li");
li.remove();
// ... later
list.appendChild(li);

// Clear an entire container
document.querySelector("ul").textContent = "";
// or
document.querySelectorAll("ul &gt; li").forEach(li =&gt; li.remove());

// Remove with cleanup (e.g., revoke object URLs)
img.addEventListener("load", () =&gt; URL.revokeObjectURL(img.src));
img.remove();</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-11-15-1-3': `
    <p><code>element.remove()</code> is "take this off the page." Whatever element you call it on disappears, along with everything inside it. The parent still exists, the siblings still exist — only this one element (and its descendants) goes away.</p>
    <p>The element itself isn't gone from JavaScript's memory — if you saved a reference, you can still inspect it, modify it, even put it back on the page later. <code>remove</code> only severs the connection between the element and the DOM. The element becomes "floating" again, just like a freshly created element that hasn't been appended yet.</p>
    <p>This is different from "hiding" an element with CSS. Hiding keeps the element in the DOM but makes it invisible. Removing actually takes it out of the structure. Hiding is reversible by un-hiding; removing is reversible by re-appending — they're not the same thing, and the choice depends on whether you expect the element to come back.</p>
  `,

  /* 1.4 Mental model */
  'topics-11-15-1-4': `
    <p>Picture the DOM as a wall full of framed pictures. <code>element.remove()</code> is taking one picture off the wall. Once you take it down, no one walking by sees it anymore. The other pictures stay where they are. The wall has a gap where the picture used to be, but the rest of the gallery is intact.</p>
    <p>The picture itself isn't destroyed — you're holding it in your hand. You could hang it back up on the same wall, or a different wall, or just keep it in storage. Until something specifically discards it, the picture exists. <code>remove</code> only changes where it lives.</p>
    <p>If the picture had smaller pictures glued to it (child elements), they come down too. You can't take down the frame without taking down everything attached to it. To save a piece of it, you'd have to detach that piece first, then remove the frame.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-11-15-1-5': `
<pre class="language-javascript"><code class="language-javascript">// HTML:
// &lt;ul id="tasks"&gt;
//   &lt;li class="task"&gt;Buy milk
//     &lt;button class="delete"&gt;X&lt;/button&gt;
//   &lt;/li&gt;
//   &lt;li class="task"&gt;Walk dog
//     &lt;button class="delete"&gt;X&lt;/button&gt;
//   &lt;/li&gt;
// &lt;/ul&gt;

// Goal: when a delete button is clicked, remove its task.

document.querySelectorAll(".delete").forEach(btn =&gt; {
  btn.addEventListener("click", () =&gt; {
    btn.parentElement.remove();
  });
});

// step by step (user clicks the second X):
//
// 1. The click handler fires for that button.
// 2. btn.parentElement is the &lt;li class="task"&gt; containing "Walk dog".
// 3. .remove() detaches that &lt;li&gt; from its parent (the &lt;ul&gt;).
// 4. The &lt;ul&gt; now has only ONE &lt;li&gt; child instead of two.
// 5. The browser re-renders: "Walk dog" disappears.
//
// HTML now:
// &lt;ul id="tasks"&gt;
//   &lt;li class="task"&gt;Buy milk
//     &lt;button class="delete"&gt;X&lt;/button&gt;
//   &lt;/li&gt;
// &lt;/ul&gt;
//
// note: the &lt;button class="delete"&gt; inside the removed li went with it.
// you don't have to remove it separately.</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-11-15-2-0': `
    <p>If "<code>remove</code>" doesn't seem to do anything, check that you're calling it on a real element:</p>
<pre class="language-javascript"><code class="language-javascript">const el = document.querySelector(".target");
console.log(el);   // is this null, or a real element?

if (el) {
  el.remove();
}

// common bugs:
//   - el is null because the selector didn't match — querySelector returns null
//   - el is an array/NodeList — NodeList doesn't have .remove()
//   - el is a string — strings don't have DOM methods at all</code></pre>

    <p>If you're trying to remove many at once, remember <code>remove</code> is per-element:</p>
<pre class="language-javascript"><code class="language-javascript">document.querySelectorAll(".old").remove();   // doesn't work — NodeList has no .remove()

// fix: loop
document.querySelectorAll(".old").forEach(el =&gt; el.remove());</code></pre>

    <p>If the element disappears and reappears in a loop, you might be removing it and a parent script is re-rendering it. Look for re-render code that runs on a timer or event.</p>

    <p>To confirm an element is actually gone:</p>
<pre class="language-javascript"><code class="language-javascript">console.log(document.body.contains(el));   // false if removed
console.log(el.parentNode);                  // null if removed
console.log(el.isConnected);                  // false if removed</code></pre>
  `,

  /* 2.1 The part that makes it click */
  'topics-11-15-2-1': `
    <p><code>remove</code> doesn't destroy the element — it just disconnects it. That's the key thing to internalize. The JavaScript object still exists in memory; its position in the DOM is what changed. You can store the reference, modify the element after removal, and re-attach it later if you want.</p>
    <p>This also explains why <code>remove</code> is so clean to use: there's no "where was this?" bookkeeping. The element knows its own parent, so it can detach itself with a single method call. No arguments, no parent lookups, no positional logic — just "take this off the page."</p>
  `,

  /* 2.2 Common confusions */
  'topics-11-15-2-2': `
    <p><strong>Confusion: thinking <code>remove</code> deletes the element entirely</strong></p>
<pre class="language-javascript"><code class="language-javascript">const li = document.querySelector("li");
li.remove();

console.log(li);              // still a real element object
console.log(li.textContent);   // still works
li.textContent = "Updated";    // works — element still exists in memory

// remove disconnects from the DOM. it doesn't destroy the JS object.
// to fully "free" the object, drop all references to it:
let li = ...;
li.remove();
li = null;   // now the garbage collector can clean it up</code></pre>

    <p><strong>Confusion: calling <code>remove</code> on a NodeList</strong></p>
<pre class="language-javascript"><code class="language-javascript">document.querySelectorAll(".item").remove();   // doesn't work
// NodeList has no .remove() method.

// fix: loop
document.querySelectorAll(".item").forEach(el =&gt; el.remove());</code></pre>

    <p><strong>Confusion: <code>remove</code> vs <code>removeChild</code></strong></p>
<pre class="language-javascript"><code class="language-javascript">// remove — the modern, element-relative API
el.remove();

// removeChild — the older, parent-relative API
parent.removeChild(el);

// both have the same effect.
// remove() is shorter; use it in new code.
// removeChild still works everywhere — fine in older codebases.</code></pre>

    <p><strong>Confusion: thinking <code>remove</code> only removes the element, not its contents</strong></p>
<pre class="language-javascript"><code class="language-javascript">// HTML:
// &lt;div&gt;
//   &lt;p&gt;Important text&lt;/p&gt;
// &lt;/div&gt;

document.querySelector("div").remove();
// the &lt;p&gt; goes with it. there's no "remove the wrapper but keep the content" version.

// to remove a wrapper but keep the inside:
const div = document.querySelector("div");
const p = div.querySelector("p");
div.parentNode.insertBefore(p, div);   // move p out before removing
div.remove();</code></pre>

    <p><strong>Confusion: thinking removed elements have no event listeners</strong></p>
<pre class="language-javascript"><code class="language-javascript">const btn = document.createElement("button");
btn.addEventListener("click", () =&gt; console.log("clicked"));
btn.remove();

// the listener is still attached. if you re-append later:
document.body.appendChild(btn);
// clicking it logs "clicked" — the listener never went away.

// removing doesn't disconnect listeners; only removeEventListener does.</code></pre>

    <p><strong>Confusion: <code>remove</code> vs <code>display: none</code></strong></p>
<pre class="language-javascript"><code class="language-javascript">// remove — element is GONE from the DOM, takes no space, can't be styled
el.remove();

// display: none — element is hidden but still in the DOM, can be re-shown
el.style.display = "none";
// or
el.classList.add("hidden");   // assuming .hidden { display: none } in CSS

// pick based on intent:
//   - permanently gone? → remove
//   - might come back? → display: none</code></pre>

    <p><strong>Confusion: <code>remove</code> on null</strong></p>
<pre class="language-javascript"><code class="language-javascript">document.querySelector(".missing").remove();
// TypeError on null

// fix: check first, or use optional chaining
document.querySelector(".missing")?.remove();</code></pre>
  `,

  /* 2.3 Common mistakes */
  'topics-11-15-2-3': `
<pre class="language-javascript"><code class="language-javascript">document.querySelectorAll(".old").remove();
// NodeList has no .remove()
// fix: loop
document.querySelectorAll(".old").forEach(el =&gt; el.remove());</code></pre>

<pre class="language-javascript"><code class="language-javascript">document.querySelector(".missing").remove();
// crashes if .missing isn't there
// fix: optional chaining
document.querySelector(".missing")?.remove();</code></pre>

<pre class="language-javascript"><code class="language-javascript">const li = document.querySelector("li");
li.remove();
li.textContent = "Still here";
document.body.appendChild(li);
// works — but is it what you wanted? remove doesn't destroy; the li is reusable.
// nothing's broken, just be aware: removed elements can be re-appended.</code></pre>

<pre class="language-javascript"><code class="language-javascript">document.querySelector(".card").remove();
// expected to keep some children — but they go too
// fix: move children OUT before removing the wrapper
const card = document.querySelector(".card");
const keep = card.querySelector(".keep");
card.parentNode.insertBefore(keep, card);
card.remove();</code></pre>

<pre class="language-javascript"><code class="language-javascript">// removing inside a forEach over a LIVE collection
const items = document.getElementsByClassName("item");   // live HTMLCollection
for (let i = 0; i &lt; items.length; i++) {
  items[i].remove();   // skips every other item — the collection updates as you remove
}
// fix: use querySelectorAll (static) or iterate backwards
document.querySelectorAll(".item").forEach(el =&gt; el.remove());</code></pre>

<pre class="language-javascript"><code class="language-javascript">el.parentNode.remove();
// removes the PARENT, not the element
// fix: just el.remove()
el.remove();</code></pre>

<pre class="language-javascript"><code class="language-javascript">// thinking remove triggers an "unmount" or "destroy" callback
el.remove();
// nothing fires. no event, no callback. the element is just detached.
// to run cleanup code, do it explicitly before calling remove:
cleanup(el);
el.remove();</code></pre>

<pre class="language-javascript"><code class="language-javascript">// trying to remove document.body or document.documentElement
document.body.remove();
// works — but the entire visible page goes blank
// fix: usually you wanted to clear the body's contents instead
document.body.textContent = "";</code></pre>

<pre class="language-javascript"><code class="language-javascript">// expecting remove to also remove from arrays you stored references in
const list = [el1, el2, el3];
el2.remove();
console.log(list);   // still [el1, el2, el3] — the array doesn't update
// remove only changes the DOM. your JS arrays/sets/maps don't auto-sync.
// fix: manage your own data structure too
const idx = list.indexOf(el2);
if (idx !== -1) list.splice(idx, 1);
el2.remove();</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-11-15-3-0': `
<pre class="language-javascript"><code class="language-javascript">// Simplest
el.remove();

// Safe with null check
document.querySelector(".target")?.remove();

// On a button click
btn.addEventListener("click", () =&gt; card.remove());

// Auto-dismiss
setTimeout(() =&gt; toast.remove(), 3000);

// Remove all matching
document.querySelectorAll(".obsolete").forEach(el =&gt; el.remove());

// Remove by class
document.querySelectorAll(".error").forEach(el =&gt; el.remove());

// Remove after animation
el.classList.add("fade-out");
setTimeout(() =&gt; el.remove(), 300);

// Remove with confirmation
if (confirm("Delete?")) item.remove();

// Empty a container (multiple options)
parent.textContent = "";
parent.innerHTML = "";
while (parent.firstChild) parent.firstChild.remove();
parent.querySelectorAll(":scope &gt; *").forEach(el =&gt; el.remove());

// Remove self via parent button
deleteBtn.addEventListener("click", () =&gt; {
  deleteBtn.closest(".card").remove();
});

// Remove and re-append later (move via detach)
const li = list.querySelector("li");
li.remove();
otherList.appendChild(li);

// Check it's gone
console.log(document.body.contains(el));   // false
console.log(el.isConnected);                // false

// Combined with cleanup
function dismissModal() {
  modal.querySelectorAll("video").forEach(v =&gt; v.pause());
  modal.remove();
}

// Remove based on data
document.querySelectorAll("[data-expired='true']").forEach(el =&gt; el.remove());

// Filter and remove
document.querySelectorAll(".item").forEach(el =&gt; {
  if (el.textContent.trim() === "") el.remove();
});</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-11-15-3-1': `
    <p><strong>Example: toast notification with auto-dismiss</strong></p>
<pre class="language-javascript"><code class="language-javascript">function toast(message) {
  const note = document.createElement("div");
  note.classList.add("toast");
  note.textContent = message;
  document.body.appendChild(note);
  setTimeout(() =&gt; note.remove(), 3000);
}
toast("Saved!");
// create → append → wait → remove. the most common pattern for temporary UI.</code></pre>

    <p><strong>Example: delete button on a todo item</strong></p>
<pre class="language-javascript"><code class="language-javascript">document.querySelectorAll(".todo .delete").forEach(btn =&gt; {
  btn.addEventListener("click", () =&gt; {
    btn.closest(".todo").remove();
  });
});
// each delete button finds its parent .todo and removes it.
// closest walks up the DOM until it finds a match.</code></pre>

    <p><strong>Example: dismissing a closeable banner</strong></p>
<pre class="language-javascript"><code class="language-javascript">document.querySelectorAll(".banner .dismiss").forEach(btn =&gt; {
  btn.addEventListener("click", () =&gt; {
    btn.parentElement.remove();
    localStorage.setItem("bannerDismissed", "true");
  });
});
// the banner is gone from the DOM, and we remember the choice so it stays gone.</code></pre>

    <p><strong>Example: cleaning up old chat messages</strong></p>
<pre class="language-javascript"><code class="language-javascript">function trimChat(maxMessages) {
  const messages = document.querySelectorAll(".chat .message");
  const toRemove = messages.length - maxMessages;
  for (let i = 0; i &lt; toRemove; i++) {
    messages[i].remove();
  }
}
trimChat(100);
// keeps the chat fast by removing old messages once it grows beyond the limit.</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-11-15-3-2': `
    <ul>
      <li><strong><code>appendChild</code> / <code>append</code></strong> → the counterpart that adds elements; <code>remove</code> reverses them</li>
      <li><strong><code>removeChild</code></strong> → the older, parent-relative API; same effect</li>
      <li><strong><code>replaceWith</code></strong> → swap an element for a new one (remove + insert in one step)</li>
      <li><strong><code>closest</code></strong> → walk up to find the right element to remove</li>
      <li><strong>Optional chaining (<code>?.</code>)</strong> → safe removal when the element might not exist</li>
      <li><strong><code>textContent = ""</code></strong> → clear all children without removing the parent</li>
      <li><strong>CSS <code>display: none</code></strong> → "hide" alternative when you want the element to potentially come back</li>
      <li><strong>NodeList iteration</strong> → for removing many elements at once</li>
      <li><strong>Memory & references</strong> → removed elements still exist in JS if a reference is held</li>
      <li><strong>Event listeners</strong> → remain attached to removed elements; use <code>removeEventListener</code> to detach</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-11-15-3-3': `
    <ul>
      <li><code>element.remove()</code></li>
      <li><code>removeChild</code></li>
      <li><code>replaceWith</code></li>
      <li><code>appendChild</code> / <code>append</code></li>
      <li><code>closest</code></li>
      <li>Optional chaining (<code>?.</code>)</li>
      <li>Clearing children (<code>textContent = ""</code>)</li>
      <li>Hiding vs removing (CSS <code>display: none</code>)</li>
      <li><code>removeEventListener</code></li>
      <li>NodeList iteration patterns</li>
    </ul>
  `,

  /* ========================================================= 
   Sub-lesson: 3.12.17 DOM → DOM loaded timing
 =======================================================*/

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-11-16-0-0': `
    <p><strong>DOM loaded timing</strong> is the rule that JavaScript can only interact with elements that <em>already exist</em> in the DOM. If your script runs before the browser has parsed the HTML containing those elements, your queries will return <code>null</code> — even though the elements are written in the HTML file.</p>
    <p>The browser reads HTML top to bottom. When it hits a <code>&lt;script&gt;</code> tag, it pauses parsing, runs the script, then continues. So a script in the <code>&lt;head&gt;</code> runs before any of the <code>&lt;body&gt;</code> elements exist. The fix is either to delay the script (put it at the end of <code>&lt;body&gt;</code>, or wait for the <code>DOMContentLoaded</code> event) — or to use the <code>defer</code> attribute on the script tag.</p>
  `,

  /* 0.1 Syntax */
  'topics-11-16-0-1': `
<pre class="language-javascript"><code class="language-javascript">// Option 1: place the script at the END of &lt;body&gt;, after the elements you'll use
// &lt;body&gt;
//   &lt;button id="save"&gt;Save&lt;/button&gt;
//   &lt;script&gt;
//     document.getElementById("save").addEventListener("click", () =&gt; { ... });
//   &lt;/script&gt;
// &lt;/body&gt;

// Option 2: wait for DOMContentLoaded
// (works even if the script is in &lt;head&gt;)
document.addEventListener("DOMContentLoaded", () =&gt; {
  document.getElementById("save").addEventListener("click", () =&gt; { ... });
});

// Option 3: add "defer" to the script tag in HTML
// &lt;head&gt;
//   &lt;script src="app.js" defer&gt;&lt;/script&gt;
// &lt;/head&gt;
// the browser waits to run the script until the DOM is fully parsed.</code></pre>
    <p>The goal in every case is the same: your code runs only after the elements it touches actually exist.</p>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-11-16-0-2': `
<pre class="language-javascript"><code class="language-javascript">// The browser's loading sequence:
//
//   1. Receive the HTML file from the server
//   2. Start parsing HTML top to bottom
//   3. When a &lt;script&gt; tag is hit:
//        - by default, parsing PAUSES
//        - the script runs immediately
//        - parsing resumes after the script finishes
//   4. When parsing reaches the end of &lt;/html&gt;:
//        - the "DOMContentLoaded" event fires
//        - means: the DOM tree is fully built
//   5. After CSS, images, and other resources finish loading:
//        - the "load" event fires
//        - means: the page is FULLY loaded (rare to need this)
//
// key points:
//   - DOMContentLoaded → "the HTML is parsed and the DOM is ready"
//   - load              → "everything is loaded, including images"
//   - most DOM code waits for DOMContentLoaded.
//
// the four ways to make sure a script runs after the DOM is ready:
//   1. put the &lt;script&gt; tag at the END of &lt;body&gt;
//   2. wait for DOMContentLoaded inside the script
//   3. use the "defer" attribute on the script tag
//   4. use the "async" attribute (rarely the right choice — runs whenever)</code></pre>
    <p>Most production projects use <code>defer</code> or a script at the end of <code>&lt;body&gt;</code>. <code>DOMContentLoaded</code> is the runtime fallback for cases where you can't control script placement.</p>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-11-16-0-3': `
    <p><strong>A script in <code>&lt;head&gt;</code> without <code>defer</code> runs before any <code>&lt;body&gt;</code> element exists.</strong> The DOM has only the <code>&lt;head&gt;</code> at that point:</p>
<pre class="language-javascript"><code class="language-javascript">// HTML:
// &lt;head&gt;
//   &lt;script&gt;
//     console.log(document.body);   // null
//     document.getElementById("btn");   // null — not parsed yet
//   &lt;/script&gt;
// &lt;/head&gt;
// &lt;body&gt;
//   &lt;button id="btn"&gt;Click&lt;/button&gt;
// &lt;/body&gt;

// to fix without moving the script:
//   - use defer attribute
//   - or wrap your code in DOMContentLoaded</code></pre>

    <p><strong><code>DOMContentLoaded</code> fires once, when the DOM is ready.</strong> Listening for it is the universal way to delay your code until that point:</p>
<pre class="language-javascript"><code class="language-javascript">document.addEventListener("DOMContentLoaded", () =&gt; {
  // safe to query and modify the DOM here
  const btn = document.getElementById("save");
  btn.addEventListener("click", save);
});

// if the script runs AFTER the DOM is already ready, the event has already fired.
// the listener you just added never fires.
// modern best practice: check first (rarely needed, but safe):
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();   // DOM is already ready
}</code></pre>

    <p><strong>The <code>defer</code> attribute on a <code>&lt;script&gt;</code> tag delays execution until after the DOM is parsed.</strong> Equivalent to placing the script at the end of <code>&lt;body&gt;</code>:</p>
<pre class="language-javascript"><code class="language-javascript">// &lt;head&gt;
//   &lt;script src="app.js" defer&gt;&lt;/script&gt;
// &lt;/head&gt;

// what happens:
//   1. browser sees the script tag, starts downloading app.js (in the background)
//   2. parsing continues normally — doesn't pause for the script
//   3. when the DOM is fully parsed, the deferred script runs
//   4. multiple deferred scripts run in the order they appear

// inside the script, no need for DOMContentLoaded — the DOM is already ready:
const btn = document.getElementById("btn");   // ✓ works immediately</code></pre>

    <p><strong>The <code>async</code> attribute also delays execution — but runs whenever the script finishes downloading, not waiting for the DOM.</strong> Rarely the right choice for DOM-touching code:</p>
<pre class="language-javascript"><code class="language-javascript">// &lt;script src="analytics.js" async&gt;&lt;/script&gt;
//
// downloads in parallel with parsing
// runs as soon as it finishes downloading — could be BEFORE the DOM is ready
// good for independent scripts (analytics, etc.)
// bad for scripts that need the DOM

// for DOM scripts, prefer defer.</code></pre>

    <p><strong>The <code>load</code> event fires later than <code>DOMContentLoaded</code>.</strong> It waits for images, CSS, fonts — everything:</p>
<pre class="language-javascript"><code class="language-javascript">// fires when DOM is parsed (HTML done, but images may not be loaded yet)
document.addEventListener("DOMContentLoaded", () =&gt; { ... });

// fires when EVERYTHING is loaded (images, stylesheets, etc.)
window.addEventListener("load", () =&gt; { ... });

// 99% of DOM code uses DOMContentLoaded.
// "load" is for code that depends on image sizes being known, or full-page measurements.</code></pre>

    <p><strong>Scripts run in order, top to bottom, unless modified.</strong> A script later in the HTML can use variables defined earlier:</p>
<pre class="language-javascript"><code class="language-javascript">// &lt;script&gt;const x = 10;&lt;/script&gt;
// &lt;script&gt;console.log(x);&lt;/script&gt;   // 10

// with defer:
// &lt;script src="a.js" defer&gt;&lt;/script&gt;
// &lt;script src="b.js" defer&gt;&lt;/script&gt;
// → a.js runs first, b.js runs after, both after DOM is parsed

// with async:
// &lt;script src="a.js" async&gt;&lt;/script&gt;
// &lt;script src="b.js" async&gt;&lt;/script&gt;
// → unpredictable order — whichever downloads first runs first</code></pre>

    <p><strong>If you can't change the HTML, use <code>DOMContentLoaded</code> in your script.</strong> It's the runtime fix that works regardless of script placement:</p>
<pre class="language-javascript"><code class="language-javascript">// universal pattern — works whether script is in head or body
function init() {
  document.getElementById("btn").addEventListener("click", handleClick);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();   // already past loading
}</code></pre>

    <p><strong>Dynamically added scripts can run anytime.</strong> A script you append with JavaScript runs as soon as it loads — the browser is already past parsing:</p>
<pre class="language-javascript"><code class="language-javascript">// if you do this much later:
const s = document.createElement("script");
s.src = "/extra.js";
document.body.appendChild(s);

// extra.js runs as soon as it finishes downloading.
// the DOM is already fully parsed at this point — no timing concerns.</code></pre>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-11-16-1-0': `
    <p>HTML parsing is sequential. A script in the page runs when the browser reaches it — not after the page is "done." That means scripts placed early in the HTML can run before the elements they want to touch even exist. The result is the classic beginner bug: <code>querySelector</code> returning <code>null</code> on elements that are clearly in the HTML file.</p>
    <p>Knowing the timing rules — and the four ways to delay your code — fixes this once and for all. You either move the script, attach <code>defer</code>, or wait for <code>DOMContentLoaded</code>. After that, your selectors always find what they're looking for.</p>
  `,

  /* 1.1 Why use it */
  'topics-11-16-1-1': `
    <p>The choice of timing pattern depends on the project:</p>
<pre class="language-javascript"><code class="language-javascript">// Small inline scripts → put them at the end of &lt;body&gt;
// &lt;body&gt;
//   ... content ...
//   &lt;script&gt;
//     document.querySelector("button").addEventListener(...);
//   &lt;/script&gt;
// &lt;/body&gt;
// simplest, most direct. fine for small projects.

// External scripts → use defer
// &lt;head&gt;
//   &lt;script src="app.js" defer&gt;&lt;/script&gt;
// &lt;/head&gt;
// the standard for production. keeps scripts in &lt;head&gt;, runs them after DOM is ready,
// downloads in parallel with parsing for speed.

// Code you can't move → wrap in DOMContentLoaded
document.addEventListener("DOMContentLoaded", () =&gt; {
  // ... your code ...
});
// the runtime fallback. works regardless of placement.

// Whichever you pick, the result is the same: code runs when the DOM exists.</code></pre>
  `,

  /* 1.2 Where you use it */
  'topics-11-16-1-2': `
<pre class="language-javascript"><code class="language-javascript">// DOMContentLoaded — for any DOM-touching code
document.addEventListener("DOMContentLoaded", () =&gt; {
  document.getElementById("btn").addEventListener("click", save);
});

// Page-load initialization
document.addEventListener("DOMContentLoaded", initApp);

// Multiple listeners — all fire when DOM is ready
document.addEventListener("DOMContentLoaded", setupTabs);
document.addEventListener("DOMContentLoaded", setupModal);
document.addEventListener("DOMContentLoaded", restoreUserPreferences);

// Defer attribute (in HTML, not JS — shown here for completeness)
// &lt;script src="app.js" defer&gt;&lt;/script&gt;

// Async (for analytics, etc.)
// &lt;script src="analytics.js" async&gt;&lt;/script&gt;

// load event — for full-page resources (images, CSS, fonts)
window.addEventListener("load", () =&gt; {
  const totalHeight = document.body.scrollHeight;
  console.log("total content height:", totalHeight);
});

// Detect current state
console.log(document.readyState);
//   "loading"     → still parsing HTML
//   "interactive" → DOM parsed (DOMContentLoaded has/will fire)
//   "complete"    → fully loaded (load has/will fire)

// Universal "run when ready" pattern
function ready(fn) {
  if (document.readyState !== "loading") {
    fn();
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}
ready(init);</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-11-16-1-3': `
    <p>The browser reads the HTML file from top to bottom. When it hits a script tag, it runs that script right then — not after the whole file is done. So if your script tries to find a button that's later in the HTML, the button doesn't exist yet. <code>querySelector</code> returns <code>null</code>, and your code crashes when it tries to do something with that null.</p>
    <p>The fix is to delay your script's execution until the HTML is fully parsed. The three main ways: put the script at the end of <code>&lt;body&gt;</code> (so the elements come first), add <code>defer</code> to the script tag (tells the browser "wait until parsing is done"), or wrap your code in a <code>DOMContentLoaded</code> listener (waits for the "DOM is ready" event from inside the script).</p>
    <p>Once you understand this, the rule is simple: any code that touches the DOM has to run after the DOM exists. Pick a pattern, use it everywhere, and you'll never hit "null is not a function" again.</p>
  `,

  /* 1.4 Mental model */
  'topics-11-16-1-4': `
    <p>Picture the browser as a worker reading instructions on a scroll, top to bottom. Each HTML element on the scroll gets built into a real piece of the page as the worker reads it. Each script tag is a "drop everything and run this code now" command — the worker stops, runs the script, then keeps reading.</p>
    <p>If a script appears early on the scroll and asks "where's the button labeled save?" — that button hasn't been built yet. It's further down on the scroll, in a section the worker hasn't reached. The worker shrugs, says "no button," and your script either crashes or silently fails.</p>
    <p>The four timing strategies are different ways to make sure your script runs at the right moment:</p>
    <ul>
      <li><strong>Put the script at the bottom of the scroll</strong> — by the time the worker reaches it, everything else has been built.</li>
      <li><strong>Tell the worker to defer this script</strong> — they'll set it aside and run it only after they've finished reading the whole scroll.</li>
      <li><strong>Wait for the "scroll finished" announcement</strong> — listen for <code>DOMContentLoaded</code>, then act.</li>
      <li><strong>Wait for the "everything's loaded" announcement</strong> — listen for <code>load</code>, then act. (Slower, but waits for images and CSS too.)</li>
    </ul>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-11-16-1-5': `
<pre class="language-javascript"><code class="language-javascript">// THE BUG (script runs too early)
//
// &lt;head&gt;
//   &lt;script&gt;
//     // browser is here, in the head, parsing
//     // the body hasn't been parsed yet — &lt;button id="save"&gt; doesn't exist
//     const btn = document.getElementById("save");
//     console.log(btn);   // null
//     btn.addEventListener("click", () =&gt; { ... });
//     // TypeError: Cannot read property 'addEventListener' of null
//   &lt;/script&gt;
// &lt;/head&gt;
// &lt;body&gt;
//   &lt;button id="save"&gt;Save&lt;/button&gt;
// &lt;/body&gt;

// FIX 1: move the script to the end of &lt;body&gt;
// &lt;body&gt;
//   &lt;button id="save"&gt;Save&lt;/button&gt;
//   &lt;script&gt;
//     // by now, the button exists — querySelector works
//     document.getElementById("save").addEventListener("click", () =&gt; { ... });
//   &lt;/script&gt;
// &lt;/body&gt;

// FIX 2: add defer
// &lt;head&gt;
//   &lt;script src="app.js" defer&gt;&lt;/script&gt;
// &lt;/head&gt;
// &lt;body&gt;
//   &lt;button id="save"&gt;Save&lt;/button&gt;
// &lt;/body&gt;
// defer tells the browser to wait until the body is parsed before running app.js.

// FIX 3: use DOMContentLoaded inside the script
// &lt;head&gt;
//   &lt;script&gt;
//     document.addEventListener("DOMContentLoaded", () =&gt; {
//       document.getElementById("save").addEventListener("click", () =&gt; { ... });
//     });
//   &lt;/script&gt;
// &lt;/head&gt;
// the callback runs after the DOM is fully built — the button exists by then.

// in all three fixes, the result is the same:
// JavaScript runs AFTER the elements it touches exist in the DOM.</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-11-16-2-0': `
    <p>If <code>querySelector</code> or <code>getElementById</code> returns <code>null</code> for an element that's clearly in your HTML, the cause is almost always timing. The script ran before the element existed:</p>
<pre class="language-javascript"><code class="language-javascript">const btn = document.getElementById("save");
console.log(btn);   // null
console.log(document.readyState);   // "loading"
// readyState "loading" means the parser hasn't finished — your element isn't in the DOM yet.

// fix: wrap in DOMContentLoaded
document.addEventListener("DOMContentLoaded", () =&gt; {
  const btn = document.getElementById("save");
  console.log(btn);   // ✓ found
});

// or move the script to the end of body, or add defer.</code></pre>

    <p>Other timing-related symptoms:</p>
<pre class="language-javascript"><code class="language-javascript">// "Uncaught TypeError: Cannot read property 'addEventListener' of null"
// → the selector returned null because the element didn't exist yet

// "My click handler doesn't fire"
// → the script ran too late: DOMContentLoaded already fired, your listener never got attached
//   fix: check document.readyState first, OR don't listen for DOMContentLoaded if it's already fired

// "Some queries work, others don't"
// → mixed timing: some elements are above the script, some below
//   fix: always wait for DOMContentLoaded, or move the script after ALL the elements</code></pre>
  `,

  /* 2.1 The part that makes it click */
  'topics-11-16-2-1': `
    <p>The browser builds the DOM as it parses the HTML, top to bottom. Scripts can run at any point during that process — including before the elements they want to use exist. <code>DOMContentLoaded</code>, <code>defer</code>, and "script at end of body" are all variations on the same idea: delay the script until the DOM is fully built.</p>
    <p>Once you internalize the "scripts run when the parser reaches them" rule, all the timing patterns make sense. They're not separate magic features — they're just different ways to say "wait until everything's parsed before running this code."</p>
  `,

  /* 2.2 Common confusions */
  'topics-11-16-2-2': `
    <p><strong>Confusion: thinking the HTML "loads" all at once</strong></p>
<pre class="language-javascript"><code class="language-javascript">// the browser parses HTML SEQUENTIALLY, top to bottom.
// when it hits your script, it runs immediately — using whatever's been parsed so far.
// elements below the script don't exist yet.</code></pre>

    <p><strong>Confusion: <code>DOMContentLoaded</code> vs <code>load</code></strong></p>
<pre class="language-javascript"><code class="language-javascript">// DOMContentLoaded → fires when HTML is fully parsed (DOM tree exists)
//                     fast — usually fires before images load
//
// load → fires when EVERYTHING is loaded (HTML + images + CSS + fonts)
//        slower — waits for big images, slow stylesheets
//
// rule: use DOMContentLoaded unless you specifically need full-page measurements
// (image sizes, total page height, etc.)</code></pre>

    <p><strong>Confusion: thinking <code>defer</code> means "run later, async"</strong></p>
<pre class="language-javascript"><code class="language-javascript">// defer → download in parallel, run AFTER DOM is parsed, in HTML order
// async → download in parallel, run AS SOON AS DOWNLOADED, in unpredictable order

// defer:  predictable, DOM-safe, ordered
// async:  unpredictable, DOM may or may not be ready when it runs
// for code that touches the DOM, prefer defer.</code></pre>

    <p><strong>Confusion: adding <code>DOMContentLoaded</code> listener too late</strong></p>
<pre class="language-javascript"><code class="language-javascript">// if your script runs AFTER the DOM is already ready (e.g., dynamically loaded later),
// the DOMContentLoaded event has already fired. your listener won't trigger.

setTimeout(() =&gt; {
  document.addEventListener("DOMContentLoaded", () =&gt; {
    console.log("ready");
  });
  // 5 seconds in, the DOM was already ready long ago — the listener never fires
}, 5000);

// fix: check readyState
function whenReady(fn) {
  if (document.readyState !== "loading") {
    fn();
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}</code></pre>

    <p><strong>Confusion: thinking inline scripts are "deferred"</strong></p>
<pre class="language-javascript"><code class="language-javascript">// the defer attribute ONLY works on EXTERNAL scripts (with src):
// &lt;script src="app.js" defer&gt;&lt;/script&gt;   ✓ deferred

// &lt;script defer&gt;
//   document.getElementById("btn");
// &lt;/script&gt;
// the defer is IGNORED — inline scripts always run immediately when parsed.

// for inline scripts: place them at the end of body, or wrap in DOMContentLoaded.</code></pre>

    <p><strong>Confusion: thinking <code>DOMContentLoaded</code> fires after dynamically added elements</strong></p>
<pre class="language-javascript"><code class="language-javascript">// DOMContentLoaded fires ONCE — when the INITIAL HTML is parsed.
// dynamically added elements (via createElement + appendChild) come later.
// the event does NOT re-fire when you modify the DOM.

// if you need to react to dynamic changes:
//   - run your setup code when you ADD the elements
//   - or use MutationObserver to watch for DOM changes</code></pre>

    <p><strong>Confusion: putting <code>defer</code> on inline scripts</strong></p>
<pre class="language-javascript"><code class="language-javascript">// &lt;script defer&gt;
//   console.log("hi");
// &lt;/script&gt;
// the defer attribute is IGNORED on inline scripts — only works with src.

// fix: move the script to the end of body, or use DOMContentLoaded.</code></pre>
  `,

  /* 2.3 Common mistakes */
  'topics-11-16-2-3': `
<pre class="language-javascript"><code class="language-javascript">// Script in head, no defer, trying to access body
// &lt;head&gt;&lt;script&gt;document.body.classList.add("loaded");&lt;/script&gt;&lt;/head&gt;
// TypeError — document.body is null
// fix: defer, move to end of body, or DOMContentLoaded</code></pre>

<pre class="language-javascript"><code class="language-javascript">document.getElementById("btn").addEventListener("click", save);
// crashes if btn doesn't exist yet
// fix: wait for DOM
document.addEventListener("DOMContentLoaded", () =&gt; {
  document.getElementById("btn").addEventListener("click", save);
});</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Using "load" when DOMContentLoaded is enough
window.addEventListener("load", initApp);
// waits for ALL images, fonts, CSS — slower start
// fix: use DOMContentLoaded for DOM-only initialization
document.addEventListener("DOMContentLoaded", initApp);</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Adding DOMContentLoaded after it already fired
setTimeout(() =&gt; {
  document.addEventListener("DOMContentLoaded", () =&gt; {
    console.log("ready");   // never fires
  });
}, 5000);
// fix: check readyState
if (document.readyState !== "loading") {
  init();
} else {
  document.addEventListener("DOMContentLoaded", init);
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Using async for DOM-dependent code
// &lt;script src="app.js" async&gt;&lt;/script&gt;
// runs whenever it downloads — DOM may not be ready
// fix: use defer instead
// &lt;script src="app.js" defer&gt;&lt;/script&gt;</code></pre>

<pre class="language-javascript"><code class="language-javascript">// defer on inline scripts (ignored)
// &lt;script defer&gt;
//   document.getElementById("btn").addEventListener(...);
// &lt;/script&gt;
// defer is ignored for inline scripts
// fix: move to end of body, or wrap in DOMContentLoaded</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Expecting DOMContentLoaded to fire again after adding elements
document.addEventListener("DOMContentLoaded", () =&gt; console.log("ready"));
addNewElement();
// console.log fires ONCE — DOMContentLoaded only fires for the initial parse
// fix: run setup code where you actually add the elements</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Querying elements at module top-level (e.g., in a module loaded in &lt;head&gt;)
const btn = document.getElementById("save");
btn.addEventListener("click", save);
// crashes if the module runs before the button is parsed
// fix: defer the script, or move the code inside a function called from DOMContentLoaded</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-11-16-3-0': `
<pre class="language-javascript"><code class="language-javascript">// Wait for DOM to be ready
document.addEventListener("DOMContentLoaded", () =&gt; {
  // safe to query DOM here
});

// Same with named function
function init() {
  document.getElementById("btn").addEventListener("click", save);
}
document.addEventListener("DOMContentLoaded", init);

// Wait for fully loaded page (images, etc.)
window.addEventListener("load", () =&gt; {
  console.log("page fully loaded");
});

// Check current state
console.log(document.readyState);   // "loading", "interactive", or "complete"

// Universal "run when ready" pattern
function ready(fn) {
  if (document.readyState !== "loading") {
    fn();
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}
ready(init);

// Defer attribute (in HTML, shown here as a comment)
// &lt;script src="app.js" defer&gt;&lt;/script&gt;

// Async attribute (for analytics, independent scripts)
// &lt;script src="analytics.js" async&gt;&lt;/script&gt;

// Multiple init handlers
document.addEventListener("DOMContentLoaded", setupNav);
document.addEventListener("DOMContentLoaded", setupForm);
document.addEventListener("DOMContentLoaded", restoreState);

// Removing the listener after firing (rare)
function onReady() {
  document.removeEventListener("DOMContentLoaded", onReady);
  init();
}
document.addEventListener("DOMContentLoaded", onReady);

// Combine with optional chaining for safe queries
document.addEventListener("DOMContentLoaded", () =&gt; {
  document.querySelector(".maybe")?.classList.add("ready");
});

// Detect if running in browser
if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", init);
}

// Use defer for many scripts — they run in order
// &lt;script src="lib.js" defer&gt;&lt;/script&gt;
// &lt;script src="app.js" defer&gt;&lt;/script&gt;
// lib.js runs first, app.js second, both after DOM is ready

// Polling alternative (rarely needed; modern browsers all support DOMContentLoaded)
const wait = setInterval(() =&gt; {
  if (document.readyState !== "loading") {
    clearInterval(wait);
    init();
  }
}, 50);</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-11-16-3-1': `
    <p><strong>Example: app initialization on page load</strong></p>
<pre class="language-javascript"><code class="language-javascript">document.addEventListener("DOMContentLoaded", () =&gt; {
  attachEventListeners();
  restoreFromLocalStorage();
  fetchInitialData();
});
// every setup task runs once, after the DOM is fully built.</code></pre>

    <p><strong>Example: deferred script in &lt;head&gt;</strong></p>
<pre class="language-javascript"><code class="language-javascript">// In HTML:
// &lt;head&gt;
//   &lt;link rel="stylesheet" href="app.css"&gt;
//   &lt;script src="app.js" defer&gt;&lt;/script&gt;
// &lt;/head&gt;

// In app.js:
document.getElementById("save").addEventListener("click", save);
// no need for DOMContentLoaded — defer guarantees the DOM is ready by the time this runs.
// also: downloads in parallel with HTML parsing, so the page loads faster.</code></pre>

    <p><strong>Example: universal "ready" wrapper used in libraries</strong></p>
<pre class="language-javascript"><code class="language-javascript">function ready(fn) {
  if (document.readyState !== "loading") {
    fn();   // already past loading — run immediately
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

ready(() =&gt; {
  // safe to query DOM. works whether the script is loaded eagerly or after DOM is ready.
  document.querySelectorAll(".widget").forEach(initWidget);
});
// the pattern most JS libraries use internally — survives any script placement.</code></pre>

    <p><strong>Example: scripts that need image sizes</strong></p>
<pre class="language-javascript"><code class="language-javascript">window.addEventListener("load", () =&gt; {
  document.querySelectorAll(".gallery img").forEach(img =&gt; {
    if (img.naturalWidth &gt; img.naturalHeight) {
      img.classList.add("wide");
    } else {
      img.classList.add("tall");
    }
  });
});
// uses the "load" event because we need the IMAGES themselves to be loaded
// (their naturalWidth/Height are only available once loaded).</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-11-16-3-2': `
    <ul>
      <li><strong><code>DOMContentLoaded</code> event</strong> → fires when HTML parsing finishes</li>
      <li><strong><code>load</code> event</strong> → fires when everything (images, CSS) finishes loading</li>
      <li><strong><code>defer</code> attribute</strong> → on script tag, delays execution until after parsing</li>
      <li><strong><code>async</code> attribute</strong> → on script tag, runs whenever; not DOM-safe by default</li>
      <li><strong>Script placement</strong> → top vs bottom of HTML changes when code runs</li>
      <li><strong><code>document.readyState</code></strong> → check the current loading phase</li>
      <li><strong><code>querySelector</code> returning null</strong> → the symptom that timing is wrong</li>
      <li><strong>MutationObserver</strong> → for reacting to DOM changes AFTER initial load</li>
      <li><strong>Dynamic script loading</strong> → scripts added via JS run when they download, not on DOMContentLoaded</li>
      <li><strong>Module scripts</strong> → <code>&lt;script type="module"&gt;</code> behave like deferred by default</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-11-16-3-3': `
    <ul>
      <li><code>DOMContentLoaded</code></li>
      <li><code>load</code> event</li>
      <li><code>defer</code> attribute</li>
      <li><code>async</code> attribute</li>
      <li><code>document.readyState</code></li>
      <li>Script placement in HTML</li>
      <li>Module scripts (<code>type="module"</code>)</li>
      <li>Dynamic script insertion</li>
      <li>MutationObserver</li>
      <li>Initialization patterns</li>
    </ul>
  `,

  /* ========================================================= 
   Sub-lesson: 3.12.18 DOM → null when element is not found
 =======================================================*/

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-11-17-0-0': `
    <p>When <code>querySelector</code> or <code>getElementById</code> doesn't find a matching element, the return value is <strong><code>null</code></strong> — not an empty string, not an empty object, not undefined. <code>null</code> is JavaScript's way of saying "nothing here."</p>
    <p>The catch: <code>null</code> doesn't have any DOM methods or properties. The moment you try to use it like an element (<code>.textContent</code>, <code>.classList</code>, <code>.addEventListener</code>), JavaScript throws a <code>TypeError</code> and your script breaks. Handling this case correctly is one of the most important defensive habits in DOM code.</p>
  `,

  /* 0.1 Syntax */
  'topics-11-17-0-1': `
<pre class="language-javascript"><code class="language-javascript">// HTML: &lt;p id="msg"&gt;Hello&lt;/p&gt;

// Found — returns the element
const msg = document.getElementById("msg");
console.log(msg);   // &lt;p id="msg"&gt;Hello&lt;/p&gt;

// Not found — returns null
const missing = document.getElementById("nope");
console.log(missing);   // null

// Same with querySelector
const found = document.querySelector(".msg");        // &lt;p&gt; or null
const notFound = document.querySelector(".gone");    // null

// the moment you try to USE the null:
notFound.textContent = "hi";
// TypeError: Cannot set property 'textContent' of null</code></pre>
    <p>The error happens on the line that uses the null, not on the line that produced it. The fix is to check for the null <em>before</em> trying to use the result.</p>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-11-17-0-2': `
<pre class="language-javascript"><code class="language-javascript">
document.getElementById(id)
//   → element  (if found)
//   → null     (if not found)
//
document.querySelector(selector)
//   → element  (first match)
//   → null     (no matches)
//
document.querySelectorAll(selector)
//   → NodeList(N)  (if matches)
//   → NodeList(0)  (no matches) — note: NOT null, an EMPTY NodeList
//
// the asymmetry matters:
//   - querySelector  → null when missing → crashes if you assume an element
//   - querySelectorAll → empty NodeList when missing → safe to .forEach (no iterations)
//
// patterns for handling null:
//   1. if-check before using:
//        const el = document.querySelector(".x");
//        if (el) el.textContent = "hi";
//
//   2. optional chaining (modern):
//        document.querySelector(".x")?.classList.add("active");
//
//   3. nullish coalescing for defaults:
//        const text = document.querySelector(".x")?.textContent ?? "default";
//
//   4. early return in a function:
//        function update() {
//          const el = document.querySelector(".x");
//          if (!el) return;
//          el.textContent = "hi";
//        }</code></pre>
    <p>Whichever pattern you pick, the goal is the same: don't let your code try to use <code>null</code> as if it were an element.</p>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-11-17-0-3': `
    <p><strong><code>null</code> is the value, not the absence of a value.</strong> <code>typeof null</code> is "object," and <code>null</code> is falsy in conditions:</p>
<pre class="language-javascript"><code class="language-javascript">const el = document.querySelector(".not-here");

console.log(el);              // null
console.log(typeof el);        // "object"  (historical quirk in JS)
console.log(el === null);      // true
console.log(el === undefined); // false — null and undefined are different
console.log(Boolean(el));      // false — null is falsy

// because null is falsy, simple boolean checks work:
if (el) {
  // runs only if el is truthy (i.e., a real element)
}

if (!el) {
  // runs if el is null
}</code></pre>

    <p><strong>The most common pattern: <code>if</code>-check before use.</strong> Simple, reads clearly:</p>
<pre class="language-javascript"><code class="language-javascript">const btn = document.querySelector(".save");
if (btn) {
  btn.addEventListener("click", save);
  btn.textContent = "Save";
}

// or with early return in a function:
function setupSaveButton() {
  const btn = document.querySelector(".save");
  if (!btn) return;
  btn.addEventListener("click", save);
}</code></pre>

    <p><strong>Optional chaining (<code>?.</code>) is the modern shortcut.</strong> If the value before <code>?.</code> is null or undefined, the whole expression evaluates to undefined and skips the operation:</p>
<pre class="language-javascript"><code class="language-javascript">// these are equivalent:

// Verbose
const el = document.querySelector(".tooltip");
if (el) el.classList.add("hidden");

// Modern
document.querySelector(".tooltip")?.classList.add("hidden");

// also works for property reads:
const text = document.querySelector(".name")?.textContent;
// text is the string if .name exists, undefined if not

// and method calls:
document.querySelector(".btn")?.click();
// nothing happens if .btn doesn't exist; no error</code></pre>

    <p><strong>Optional chaining works on chained property access.</strong> But you only need it where null is possible:</p>
<pre class="language-javascript"><code class="language-javascript">// each ?. checks if the value before it is null/undefined
document.querySelector(".card")?.querySelector(".title")?.textContent;
// returns undefined if EITHER the card or the title is missing

// you can mix: only use ?. where the value might be null
document.querySelector(".card")?.classList.add("ready");
//                              ^ might be null
//                                          ^ classList is always there if the element exists,
//                                            so no ?. needed</code></pre>

    <p><strong>Optional chaining doesn't work for ASSIGNMENT.</strong> You can't do <code>el?.textContent = "..."</code>:</p>
<pre class="language-javascript"><code class="language-javascript">// Not allowed
document.querySelector(".x")?.textContent = "hi";   // SyntaxError

// fix: use an if-check, or save the reference
const el = document.querySelector(".x");
if (el) el.textContent = "hi";</code></pre>

    <p><strong>Nullish coalescing (<code>??</code>) gives a default when the value is null or undefined.</strong> Combine with optional chaining for "read or default":</p>
<pre class="language-javascript"><code class="language-javascript">const text = document.querySelector(".name")?.textContent ?? "Guest";
// if .name exists, use its text
// if .name is null, ?.textContent → undefined, then ?? → "Guest"

// difference from || (logical OR):
//   ??  → only triggers on null or undefined
//   ||  → triggers on ANY falsy value (including "", 0, false)

// for DOM text, ?? is usually safer:
const num = document.querySelector(".count")?.textContent ?? "0";
// uses "0" only if the element is missing
// uses the actual textContent even if it's "" or "0"</code></pre>

    <p><strong><code>querySelectorAll</code> never returns null.</strong> Empty matches give an empty NodeList, which is safe to iterate:</p>
<pre class="language-javascript"><code class="language-javascript">const items = document.querySelectorAll(".item");
console.log(items);          // NodeList(0) when nothing matches — NOT null
console.log(items.length);    // 0
items.forEach(el =&gt; { ... }); // safely runs zero times — no error

// you don't need null checks for querySelectorAll. just iterate.
// if you want to know whether ANY matched: items.length &gt; 0</code></pre>

    <p><strong>Check before chaining DOM operations.</strong> If you're going to call multiple methods on the result, guard once:</p>
<pre class="language-javascript"><code class="language-javascript">// Bad — repetitive optional chaining
document.querySelector(".x")?.classList.add("active");
document.querySelector(".x")?.textContent = "Loading...";   // doesn't work anyway (assignment)
document.querySelector(".x")?.setAttribute("aria-busy", "true");

// Good — single check, all operations after
const el = document.querySelector(".x");
if (el) {
  el.classList.add("active");
  el.textContent = "Loading...";
  el.setAttribute("aria-busy", "true");
}</code></pre>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-11-17-1-0': `
    <p>DOM queries are inherently uncertain — the element you're looking for might not exist, might not exist yet, or might have been removed by other code. Without a defensive habit, your script depends on optimistic assumptions: "the button is there, so I can just use it." When that assumption breaks, your code crashes.</p>
    <p>Handling <code>null</code> correctly is the difference between fragile and robust DOM code. Defensive checks (<code>if (el)</code>, <code>el?.method()</code>) ensure your script keeps running even when something's missing, and let you write fallbacks for those cases.</p>
  `,

  /* 1.1 Why use it */
  'topics-11-17-1-1': `
    <p>Every <code>querySelector</code> call is a potential <code>null</code>. Treating it that way prevents bugs:</p>
<pre class="language-javascript"><code class="language-javascript">// Without handling — fragile
document.querySelector(".save").addEventListener("click", save);
// crashes the entire script if .save doesn't exist (e.g., not on this page)

// With handling — robust
document.querySelector(".save")?.addEventListener("click", save);
// if .save isn't there, nothing happens, script continues

// or with a fallback:
const btn = document.querySelector(".save");
if (btn) {
  btn.addEventListener("click", save);
} else {
  console.warn("Save button not found — feature disabled");
}</code></pre>

    <p>This is especially important in code that runs on multiple pages — what's a normal element on the dashboard might not exist on the profile page. Defensive checks let one script work everywhere.</p>
  `,

  /* 1.2 Where you use it */
  'topics-11-17-1-2': `
<pre class="language-javascript"><code class="language-javascript">// Simple if-check
const el = document.querySelector(".target");
if (el) {
  el.textContent = "Found!";
}

// Negated check (early return)
function setupButton() {
  const btn = document.querySelector(".btn");
  if (!btn) return;
  btn.addEventListener("click", handle);
}

// Optional chaining for single operations
document.querySelector(".tooltip")?.classList.add("hidden");
document.querySelector(".badge")?.remove();

// Optional chaining for reads
const title = document.querySelector("h1")?.textContent;
// title is the string or undefined

// With nullish coalescing for defaults
const name = document.querySelector(".name")?.textContent ?? "Anonymous";

// Multiple checks together
const card = document.querySelector(".card");
const title = card?.querySelector(".title");
if (title) {
  title.textContent = "Updated";
}

// Filter on existence
const els = [".header", ".main", ".footer"]
  .map(s =&gt; document.querySelector(s))
  .filter(el =&gt; el !== null);

// Use querySelectorAll when "missing" should mean "do nothing"
document.querySelectorAll(".item").forEach(el =&gt; el.classList.add("ready"));
// safe even if no .item exists — empty NodeList just iterates zero times

// Strict comparison
if (el === null) { ... }
if (el !== null) { ... }

// Boolean cast
if (el) { ... }      // truthy check (works because null is falsy)
if (!el) { ... }     // falsy check

// Combined with optional chaining for chained ops
document.querySelector(".card")?.querySelector(".action")?.click();</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-11-17-1-3': `
    <p>When you ask the DOM for an element and it doesn't exist, JavaScript hands you <code>null</code> as the "no result" sentinel. The danger is that <code>null</code> isn't an element — it has no <code>textContent</code>, no <code>classList</code>, no <code>addEventListener</code>. If your next line of code tries to use it like an element, the whole thing crashes with "Cannot read property X of null."</p>
    <p>The fix is to assume nothing. Always check whether the result is real before using it. Either with an <code>if</code> statement, or with optional chaining (<code>?.</code>), which is JavaScript's modern shortcut for "do this only if the thing before me isn't null."</p>
    <p>This isn't paranoia — it's the standard pattern for any code that interacts with the DOM. Elements come and go: they might be on one page but not another, they might be added later, they might be removed by another script. Defensive checks make your code resilient to all of those cases without breaking.</p>
  `,

  /* 1.4 Mental model */
  'topics-11-17-1-4': `
    <p>Picture asking a librarian for a book. If the book exists, they hand it to you — you can read it, mark it up, do anything you'd normally do with a book. If the book doesn't exist, they hand you an empty hand. An empty hand isn't a book. Try to "read" the empty hand, and you'll get confused — there's nothing to read.</p>
    <p><code>null</code> is the empty hand. JavaScript's job is to hand you something every time you ask, but "something" might be "nothing." Your job is to check: did I get a book, or did I get nothing? Only proceed with book operations if it's actually a book.</p>
    <p>The two ways to check are: ask before you act ("is this a book?"), or have a robot that only does the operation if it gets a book and shrugs if it gets nothing (optional chaining, <code>?.</code>). Same outcome — your code doesn't crash when the result is <code>null</code>.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-11-17-1-5': `
<pre class="language-javascript"><code class="language-javascript">// THE BUG
//
// HTML: &lt;p id="msg"&gt;Hello&lt;/p&gt;
// (no element with id "tip" exists)

const tip = document.getElementById("tip");
console.log(tip);   // null

tip.textContent = "Hi";
// TypeError: Cannot set properties of null (setting 'textContent')

// step by step:
//   1. getElementById("tip") searches the DOM
//   2. no element matches → returns null
//   3. tip is now null
//   4. tip.textContent tries to access .textContent on null
//   5. null has no .textContent property → TypeError
//   6. the script crashes — any code after this line never runs

// FIX 1: if-check
const tip = document.getElementById("tip");
if (tip) {
  tip.textContent = "Hi";
}
// if tip is null, the if block is skipped, no error, script continues.

// FIX 2: optional chaining (read only)
document.getElementById("tip")?.click();
// if it's null, nothing happens — no error.
// note: ?. doesn't work for assignment (?.textContent = "Hi" is invalid).

// FIX 3: nullish coalescing for defaults
const text = document.getElementById("tip")?.textContent ?? "no tip";
// text is the string if tip exists, "no tip" otherwise — never crashes.

// the lesson:
//   - every DOM query CAN return null
//   - assume nothing; check or use ?.
//   - your code stays running when elements are missing</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-11-17-2-0': `
    <p>The classic symptom is the error message itself:</p>
<pre class="language-javascript"><code class="language-javascript">// "TypeError: Cannot read properties of null (reading 'X')"
// "TypeError: Cannot set properties of null (setting 'X')"
// "TypeError: null has no properties"

// these all mean: a querySelector or getElementById returned null,
// and the very next line tried to access a property on it.</code></pre>

    <p>To diagnose: log the result of the query first:</p>
<pre class="language-javascript"><code class="language-javascript">const el = document.querySelector(".whatever");
console.log("element:", el);
// if you see "element: null" — the selector didn't match.
// if you see the actual element, the bug is elsewhere.

// common reasons for null:
//   1. typo in the selector (".btn-save" vs ".save-btn")
//   2. missing prefix (querySelector("save") instead of ".save")
//   3. case mismatch (the class is "Save" but you queried ".save")
//   4. script ran before the element existed (DOM loaded timing)
//   5. element was removed by other code
//   6. element is inside an iframe or shadow DOM (different document tree)</code></pre>

    <p>Quick verification: paste the same selector into the DevTools console:</p>
<pre class="language-javascript"><code class="language-javascript">// in the browser console:
document.querySelector(".whatever")
// if it returns null there too, your selector is wrong or the element really doesn't exist.
// if it returns the element there, but null in your code, it's a timing issue.</code></pre>
  `,

  /* 2.1 The part that makes it click */
  'topics-11-17-2-1': `
    <p>Every DOM query has two possible outcomes: an element or <code>null</code>. There's no third option. Once you accept that and check for both in your code, every "TypeError: Cannot read property X of null" disappears — because you're never trying to read X from null in the first place.</p>
    <p>Optional chaining (<code>?.</code>) makes the defensive pattern almost invisible. Instead of wrapping every DOM operation in an if, you just add <code>?.</code> after the query. The code reads almost like you assumed the element exists — but it handles the null case gracefully.</p>
  `,

  /* 2.2 Common confusions */
  'topics-11-17-2-2': `
    <p><strong>Confusion: thinking <code>querySelector</code> returns undefined when nothing matches</strong></p>
<pre class="language-javascript"><code class="language-javascript">// querySelector returns null, NOT undefined.
const el = document.querySelector(".missing");
console.log(el === null);        // true
console.log(el === undefined);    // false

// but optional chaining ?. handles BOTH null and undefined, so it works either way:
document.querySelector(".missing")?.click();   // safe</code></pre>

    <p><strong>Confusion: thinking <code>querySelectorAll</code> returns null</strong></p>
<pre class="language-javascript"><code class="language-javascript">const items = document.querySelectorAll(".missing");
console.log(items === null);    // false — NEVER null
console.log(items.length);       // 0 — empty NodeList instead

// you don't need null checks for querySelectorAll. just iterate.</code></pre>

    <p><strong>Confusion: <code>null</code> truthiness vs comparison</strong></p>
<pre class="language-javascript"><code class="language-javascript">// all three of these work for "is el null?":
if (el === null) { ... }
if (el == null) { ... }      // also catches undefined (loose equality)
if (!el) { ... }              // catches null, undefined, 0, "", false, NaN

// for DOM elements, all three are essentially equivalent — el is either an element (truthy)
// or null (falsy). use whichever reads cleanest.</code></pre>

    <p><strong>Confusion: trying to use optional chaining for assignment</strong></p>
<pre class="language-javascript"><code class="language-javascript">document.querySelector(".x")?.textContent = "hi";
// SyntaxError — you can't assign to an optional-chained property

// fix: save the reference and check
const el = document.querySelector(".x");
if (el) el.textContent = "hi";</code></pre>

    <p><strong>Confusion: <code>??</code> vs <code>||</code></strong></p>
<pre class="language-javascript"><code class="language-javascript">// ?? — only falls back when the value is null or undefined
const a = document.querySelector(".x")?.textContent ?? "default";
// if .x exists and has textContent "" (empty), a === "" (NOT "default")

// || — falls back on any falsy value
const b = document.querySelector(".x")?.textContent || "default";
// if .x exists but textContent is "" (empty), b === "default" (might surprise you)

// rule: use ?? when "empty string" or "0" are valid values, not absences</code></pre>

    <p><strong>Confusion: forgetting that <code>getElementById</code> can also return null</strong></p>
<pre class="language-javascript"><code class="language-javascript">// it's not just querySelector — getElementById has the same behavior
document.getElementById("nope");   // null

// all the same handling applies:
document.getElementById("nope")?.classList.add("ready");
const el = document.getElementById("maybe");
if (el) el.textContent = "Found";</code></pre>

    <p><strong>Confusion: thinking <code>null</code> errors come from the query line</strong></p>
<pre class="language-javascript"><code class="language-javascript">const el = document.querySelector(".x");   // returns null — no error
el.textContent = "hi";                       // ERROR here — null has no textContent

// the error message points to the second line, not the first.
// to find the cause, look at what came RIGHT before — usually a missed null check.</code></pre>
  `,

  /* 2.3 Common mistakes */
  'topics-11-17-2-3': `
<pre class="language-javascript"><code class="language-javascript">document.querySelector(".missing").textContent = "hi";
// crashes — querySelector returned null
// fix: check first
const el = document.querySelector(".missing");
if (el) el.textContent = "hi";</code></pre>

<pre class="language-javascript"><code class="language-javascript">document.getElementById("nope").addEventListener("click", handler);
// crashes if no element has id="nope"
// fix: check or use optional chaining
document.getElementById("nope")?.addEventListener("click", handler);</code></pre>

<pre class="language-javascript"><code class="language-javascript">document.querySelector(".x")?.textContent = "hi";
// SyntaxError — can't assign with optional chaining
// fix: if-check
const el = document.querySelector(".x");
if (el) el.textContent = "hi";</code></pre>

<pre class="language-javascript"><code class="language-javascript">if (document.querySelectorAll(".item")) {
  // always true — NodeList is always truthy, even when empty
}
// fix: check length
if (document.querySelectorAll(".item").length &gt; 0) { ... }</code></pre>

<pre class="language-javascript"><code class="language-javascript">const text = document.querySelector(".name")?.textContent || "default";
// if textContent is "" (empty), defaults to "default" — might be wrong
// fix: use ?? for null/undefined only
const text = document.querySelector(".name")?.textContent ?? "default";</code></pre>

<pre class="language-javascript"><code class="language-javascript">const el = document.querySelector(".missing");
el?.classList.add("a");
el?.classList.add("b");
el?.classList.add("c");
// repetitive
// fix: one check, then act
const el = document.querySelector(".missing");
if (el) {
  el.classList.add("a", "b", "c");
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">const a = document.querySelector(".x").textContent;
// crashes if .x is null
// fix: capture, check, then use
const xEl = document.querySelector(".x");
const a = xEl ? xEl.textContent : "";
// or:
const a = document.querySelector(".x")?.textContent ?? "";</code></pre>

<pre class="language-javascript"><code class="language-javascript">// querying inside a possibly-missing parent
const parent = document.querySelector(".card");
const title = parent.querySelector(".title");
// crashes if .card is null
// fix: chain ?.
const title = document.querySelector(".card")?.querySelector(".title");</code></pre>

<pre class="language-javascript"><code class="language-javascript">if (document.querySelector(".x") = null) { ... }
// "=" is assignment, not comparison — this overwrites the call
// fix: use === or just truthiness
if (document.querySelector(".x") === null) { ... }
if (!document.querySelector(".x")) { ... }</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-11-17-3-0': `
<pre class="language-javascript"><code class="language-javascript">// if-check before using
const el = document.querySelector(".target");
if (el) {
  el.textContent = "Hi";
}

// negated check (early return)
function setup() {
  const el = document.querySelector(".target");
  if (!el) return;
  el.classList.add("ready");
}

// optional chaining for read
const text = document.querySelector(".name")?.textContent;

// optional chaining for method
document.querySelector(".tooltip")?.classList.remove("visible");

// optional chaining + nullish coalescing for default
const name = document.querySelector(".name")?.textContent ?? "Anonymous";

// chained optional access
const title = document.querySelector(".card")?.querySelector(".title")?.textContent;

// truthy check (most idiomatic)
if (el) { ... }
if (!el) { ... }

// strict comparison
if (el === null) { ... }
if (el !== null) { ... }

// querySelectorAll — never null, no check needed
document.querySelectorAll(".item").forEach(el =&gt; el.classList.add("ready"));

// querySelectorAll length check (existence)
if (document.querySelectorAll(".error").length &gt; 0) { ... }

// safely add an event listener
document.querySelector(".save")?.addEventListener("click", save);

// safe element removal
document.querySelector(".banner")?.remove();

// filter array for valid elements only
const els = [".a", ".b", ".c"]
  .map(s =&gt; document.querySelector(s))
  .filter(el =&gt; el !== null);

// check before chaining operations
const card = document.querySelector(".card");
if (card) {
  card.classList.add("active");
  card.querySelector(".title").textContent = "Updated";
  // note: the inner querySelector might ALSO return null — keep checking
}

// the safest version of the above
const card = document.querySelector(".card");
const title = card?.querySelector(".title");
if (title) title.textContent = "Updated";

// in a function that should silently no-op when target is missing
function highlight(selector) {
  document.querySelector(selector)?.classList.add("highlight");
}

// using nullish coalescing assignment (newer)
let user = document.querySelector(".name")?.textContent;
user ??= "Guest";   // assign "Guest" only if user is null/undefined</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-11-17-3-1': `
    <p><strong>Example: optional UI elements that might not be on every page</strong></p>
<pre class="language-javascript"><code class="language-javascript">function setupSearchBox() {
  const search = document.querySelector("#site-search");
  if (!search) return;   // not on this page — exit cleanly
  search.addEventListener("input", handleSearch);
}

setupSearchBox();
// works on pages with a search box, silently skips pages without one.</code></pre>

    <p><strong>Example: dismissing a banner only if it's there</strong></p>
<pre class="language-javascript"><code class="language-javascript">document.querySelector(".cookie-banner")?.remove();
// one line, safe, no error if the banner isn't on the page.</code></pre>

    <p><strong>Example: reading a value with a default</strong></p>
<pre class="language-javascript"><code class="language-javascript">function getUsername() {
  return document.querySelector(".user-name")?.textContent.trim() ?? "Guest";
}

const name = getUsername();
console.log("welcome, " + name);
// returns "Guest" if the name element doesn't exist, the actual name otherwise.</code></pre>

    <p><strong>Example: clearing errors only on fields that have them</strong></p>
<pre class="language-javascript"><code class="language-javascript">function clearError(fieldName) {
  const error = document.querySelector("[data-error='" + fieldName + "']");
  if (error) {
    error.textContent = "";
    error.classList.remove("visible");
  }
}
// if no error element exists for that field, the function exits cleanly.</code></pre>

    <p><strong>Example: deep query with optional chaining</strong></p>
<pre class="language-javascript"><code class="language-javascript">function getCardAuthor(cardId) {
  return document
    .querySelector("#" + cardId)
    ?.querySelector(".header")
    ?.querySelector(".author")
    ?.textContent
    ?? "Unknown";
}
// the whole chain returns the author name, or "Unknown" if any link is missing.
// no error even if the card doesn't exist on the page.</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-11-17-3-2': `
    <ul>
      <li><strong><code>querySelector</code> returns null</strong> → the source of the problem</li>
      <li><strong><code>getElementById</code> returns null</strong> → same behavior</li>
      <li><strong><code>querySelectorAll</code></strong> → returns empty NodeList instead of null; no check needed</li>
      <li><strong>Optional chaining (<code>?.</code>)</strong> → the modern shorthand for null-safe access</li>
      <li><strong>Nullish coalescing (<code>??</code>)</strong> → fall back to a default when value is null or undefined</li>
      <li><strong>Truthy/falsy values</strong> → null is falsy, so <code>if (el)</code> works as a check</li>
      <li><strong>Early return pattern</strong> → exit a function cleanly when an element is missing</li>
      <li><strong>DOM loaded timing</strong> → premature queries return null even when elements exist in HTML</li>
      <li><strong>Defensive programming</strong> → assume nothing, check everything</li>
      <li><strong><code>TypeError: Cannot read property X of null</code></strong> → the symptom of missed null handling</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-11-17-3-3': `
    <ul>
      <li><code>null</code> in JavaScript</li>
      <li>Optional chaining (<code>?.</code>)</li>
      <li>Nullish coalescing (<code>??</code>)</li>
      <li>Truthy / falsy values</li>
      <li>Early return pattern</li>
      <li><code>querySelector</code> / <code>getElementById</code></li>
      <li><code>querySelectorAll</code> (no null)</li>
      <li>DOM loaded timing</li>
      <li>Defensive programming</li>
      <li>Error handling</li>
    </ul>
  `,

  /* ========================================================= 
   Sub-lesson: 3.12.19 DOM → common mistakes
 =======================================================*/

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-11-18-0-0': `
    <p>This lesson is a <strong>recap of the most common DOM bugs</strong> you'll hit while building real interfaces. Most of them aren't conceptually hard — they're just easy to miss because the symptoms (silent failures, null errors, things that "look fine" but don't work) don't always point to the cause.</p>
    <p>Knowing the patterns ahead of time saves hours of debugging. Each mistake here has appeared in earlier lessons; this one collects them in one place so you can recognize the shape of each bug quickly.</p>
  `,

  /* 0.1 Syntax */
  'topics-11-18-0-1': `
<pre class="language-javascript"><code class="language-javascript">// The six categories of common DOM mistakes:

// 1. Wrong selector format
document.querySelector("btn");            // looks for &lt;btn&gt; tag, not class
document.getElementById("#title");         // includes # which becomes part of the id

// 2. Using NodeList like one element
document.querySelectorAll(".item").textContent = "hi";   // doesn't work
document.querySelectorAll(".item").addEventListener("click", h);   // doesn't work

// 3. Forgetting null checks
document.querySelector(".missing").textContent = "hi";   // crashes on null

// 4. Timing — running before DOM is ready
// script in &lt;head&gt; queries body elements → null

// 5. Overwriting structure with textContent/innerHTML
container.textContent = "Hi";   // wipes any nested elements

// 6. Confusing properties
input.textContent = "Alex";   // doesn't update an input field — use .value</code></pre>
    <p>Each category has a fix that's usually one line different from the broken version. The hard part isn't fixing — it's spotting which category your bug falls into.</p>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-11-18-0-2': `
<pre class="language-javascript"><code class="language-javascript">// Quick reference of the most common mistakes and their fixes:

// SELECTOR FORMAT
//   querySelector("btn")        → querySelector(".btn") or "#btn"
//   getElementById("#title")    → getElementById("title")  (no #)
//   classList.add(".active")    → classList.add("active")  (no .)
//   case mismatch                → match exactly: "card" not "Card"

// COLLECTION vs ELEMENT
//   nodeList.textContent = "x"   → nodeList.forEach(el =&gt; el.textContent = "x")
//   nodeList.classList.add("x")  → forEach + classList.add
//   querySelector(...)[0]        → querySelector returns ONE; drop the [0]

// NULL HANDLING
//   el.textContent = "x"         → if (el) el.textContent = "x"
//   el.method()                  → el?.method()   (optional chaining)
//   el?.textContent = "x"        → not allowed; use if instead

// TIMING
//   script in &lt;head&gt; with DOM code  → use defer, end-of-body, or DOMContentLoaded

// OVERWRITES
//   parent.textContent = "x"     → targets the specific child instead
//   parent.innerHTML = "x"       → consider textContent for plain text

// PROPERTY CONFUSION
//   input.textContent for value  → input.value
//   div.value for text           → div.textContent
//   el.style.background-color    → el.style.backgroundColor  (camelCase)
//   el.style.width = 200          → el.style.width = "200px"  (need units)</code></pre>
    <p>The table above is the quick lookup. The rest of this lesson digs into the most painful versions of each.</p>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-11-18-0-3': `
    <p><strong>Mistake 1: Wrong selector format.</strong> The single most common typo. Easy to spot once you know to look:</p>
<pre class="language-javascript"><code class="language-javascript">// querySelector expects CSS selector syntax — needs the . or #
document.querySelector("btn");          // looks for &lt;btn&gt; element (doesn't exist)
document.querySelector(".btn");         // ✓ class "btn"
document.querySelector("#btn");         // ✓ id "btn"

// getElementById takes ONLY the id value — no #
document.getElementById("#title");      // looks for id="#title"
document.getElementById("title");       // ✓

// classList methods take class names WITHOUT the dot
el.classList.add(".active");            // adds literal ".active"
el.classList.add("active");             // ✓

// case sensitivity bites — JS is case-sensitive
document.querySelector(".Card");        // misses class="card"
document.querySelector(".card");        // ✓</code></pre>

    <p><strong>Mistake 2: Treating NodeList like a single element.</strong> The plural/singular mix-up:</p>
<pre class="language-javascript"><code class="language-javascript">// querySelector returns ONE element (or null)
const btn = document.querySelector(".btn");
btn.textContent = "Save";              // ✓ works
btn.addEventListener("click", save);   // ✓ works

// querySelectorAll returns a NodeList (a collection)
const items = document.querySelectorAll(".item");
items.textContent = "Hi";              // ✗ NodeList has no textContent
items.addEventListener("click", h);    // ✗ NodeList has no addEventListener

// fix: loop
items.forEach(item =&gt; item.textContent = "Hi");
items.forEach(item =&gt; item.addEventListener("click", h));

// the reverse mistake:
const btn = document.querySelector(".btn");
btn.forEach(b =&gt; ...);                 // ✗ btn is one element, not a list
// querySelectorAll instead if you need to loop:
document.querySelectorAll(".btn").forEach(b =&gt; ...);</code></pre>

    <p><strong>Mistake 3: Skipping null checks.</strong> The most common runtime crash:</p>
<pre class="language-javascript"><code class="language-javascript">document.querySelector(".save").addEventListener("click", save);
// TypeError if .save doesn't exist on this page

// fix options:
const btn = document.querySelector(".save");
if (btn) btn.addEventListener("click", save);

// or optional chaining
document.querySelector(".save")?.addEventListener("click", save);

// querySelectorAll is safe — empty NodeList, not null:
document.querySelectorAll(".save").forEach(b =&gt; b.addEventListener("click", save));</code></pre>

    <p><strong>Mistake 4: Script runs before the DOM is ready.</strong> The "null even though the element is in the HTML" bug:</p>
<pre class="language-javascript"><code class="language-javascript">// &lt;head&gt;
//   &lt;script&gt;
//     document.getElementById("btn");   // null — body not parsed yet
//   &lt;/script&gt;
// &lt;/head&gt;

// fixes:
// 1. move script to end of body
// 2. add defer attribute: &lt;script src="..." defer&gt;
// 3. wait for DOMContentLoaded:
document.addEventListener("DOMContentLoaded", () =&gt; {
  document.getElementById("btn").addEventListener("click", h);
});</code></pre>

    <p><strong>Mistake 5: Overwriting nested elements with <code>textContent</code> or <code>innerHTML</code>.</strong> Targeting too broad:</p>
<pre class="language-javascript"><code class="language-javascript">// HTML:
// &lt;button&gt;
//   &lt;span class="icon"&gt;★&lt;/span&gt;
//   Save
// &lt;/button&gt;

document.querySelector("button").textContent = "Saved!";
// the icon is GONE — replaced by plain text "Saved!"

// fix: target the specific text holder
// either restructure the HTML to give the text its own wrapper,
// or use textContent on a more specific child.</code></pre>

    <p><strong>Mistake 6: Wrong property for the element type.</strong> Form fields vs display elements:</p>
<pre class="language-javascript"><code class="language-javascript">// Form inputs use .value
input.textContent = "Alex";    // doesn't appear in the input
input.value = "Alex";           // ✓

// Display elements (p, span, div, h1) use .textContent
div.value = "Hi";               // does nothing meaningful (no value property)
div.textContent = "Hi";         // ✓

// Style property uses camelCase, not hyphens
el.style.background-color = "red";   // SyntaxError
el.style.backgroundColor = "red";     // ✓

// Style properties need units (mostly)
el.style.width = 200;            // silently fails
el.style.width = "200px";        // ✓</code></pre>

    <p><strong>Mistake 7: Adding event listener inside a re-render.</strong> Every re-render adds another handler:</p>
<pre class="language-javascript"><code class="language-javascript">function render() {
  document.getElementById("btn").addEventListener("click", save);
  // every call to render() adds ANOTHER click handler
  // after 5 renders, one click triggers save 5 times
}

// fix: attach the listener ONCE, outside the render function:
document.getElementById("btn").addEventListener("click", save);

function render() {
  // update the DOM, but don't re-attach the listener
}</code></pre>

    <p><strong>Mistake 8: Using <code>innerHTML</code> with user input.</strong> XSS risk:</p>
<pre class="language-javascript"><code class="language-javascript">document.querySelector(".result").innerHTML = userInput;
// if userInput is "&lt;script&gt;alert('XSS')&lt;/script&gt;", the script runs

// fix: use textContent for untrusted content
document.querySelector(".result").textContent = userInput;
// any tags appear as literal text — no parsing, no execution.</code></pre>

    <p><strong>Mistake 9: Forgetting that <code>appendChild</code> moves, doesn't copy.</strong> Re-using a reference accidentally:</p>
<pre class="language-javascript"><code class="language-javascript">const li = document.querySelector("li");
listA.appendChild(li);
listB.appendChild(li);
// li ends up only in listB — it was moved, not copied

// to duplicate, clone first:
listB.appendChild(li.cloneNode(true));</code></pre>

    <p><strong>Mistake 10: Comparing classes with the wrong API.</strong> Strings vs lists:</p>
<pre class="language-javascript"><code class="language-javascript">if (el.className === "active") { ... }
// only true if the ENTIRE class attribute is exactly "active"
// "active primary" would not match

// fix: use classList.contains
if (el.classList.contains("active")) { ... }
// returns true if "active" is in the class list, regardless of other classes</code></pre>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-11-18-1-0': `
    <p>Most DOM bugs aren't deep logic errors — they're small slips: a missing dot, a missed null check, a script that ran too early. The errors they produce are usually unhelpful (<code>TypeError: Cannot read property X of null</code>) and don't point at the root cause.</p>
    <p>Recognizing the patterns ahead of time speeds up debugging massively. Instead of staring at error messages, you can match the symptom to the category, then apply the standard fix.</p>
  `,

  /* 1.1 Why use it */
  'topics-11-18-1-1': `
    <p>Quick checklist when something doesn't work:</p>
<pre class="language-javascript"><code class="language-javascript">// "Cannot read property X of null"
//   → null check missing, OR script ran too early

// "addEventListener is not a function"
//   → using NodeList instead of element, or vice versa

// "InvalidCharacterError"
//   → passing multiple class names with spaces to classList.add

// "SyntaxError: Unexpected token"
//   → camelCase vs hyphens in style property names

// element doesn't change visually
//   → no matching CSS rule for the class you added
//   → or you targeted the wrong element
//   → or the style needs units

// click handler fires multiple times
//   → addEventListener inside a re-render function

// querySelector returns null but element is in HTML
//   → script ran before DOM was parsed → fix timing

// page appears blank
//   → innerHTML or textContent wiped a parent that contained important children</code></pre>

    <p>Match the symptom to the cause, apply the fix, move on. Most of these become muscle memory after you've hit them a few times.</p>
  `,

  /* 1.2 Where you use it */
  'topics-11-18-1-2': `
<pre class="language-javascript"><code class="language-javascript">// Always check for null before using a query result
const el = document.querySelector(".x");
if (el) el.classList.add("active");
// or
document.querySelector(".x")?.classList.add("active");

// Always loop NodeLists, never call methods directly
document.querySelectorAll(".item").forEach(el =&gt; el.classList.add("ready"));

// Always include the . or # for class/id selectors
document.querySelector(".btn");
document.querySelector("#title");

// Always omit the . or # for classList methods
el.classList.add("btn");

// Always use .value for form fields
input.value = "Alex";

// Always use textContent for display elements (not value)
div.textContent = "Hello";

// Always wait for DOM if script is in &lt;head&gt;
document.addEventListener("DOMContentLoaded", initApp);

// Always use camelCase for style properties
el.style.backgroundColor = "red";

// Always include units for size/position
el.style.width = "200px";

// Always attach event listeners ONCE, not inside re-renders
document.querySelector("#btn").addEventListener("click", save);

// Always escape or use textContent for untrusted input
el.textContent = userInput;

// Always cloneNode if you want a duplicate (not just to move)
const copy = original.cloneNode(true);</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-11-18-1-3': `
    <p>Almost every DOM bug fits into one of a handful of categories. A query returned <code>null</code> and you didn't check. A NodeList got treated like a single element. A script ran before the elements were on the page. A property name was misspelled. A textContent assignment wiped out child elements you needed.</p>
    <p>The mistakes aren't inherently hard — they just sneak past beginners because the error messages are usually generic. Once you've seen each category once, the patterns become obvious. The next time a "Cannot read property X of null" comes up, you'll instinctively check whether the selector matched anything.</p>
    <p>Build the habits early: always check for null, always loop NodeLists, always include selector prefixes, always wait for the DOM if your script might run early. Doing these by default means you almost never hit the bugs in the first place.</p>
  `,

  /* 1.4 Mental model */
  'topics-11-18-1-4': `
    <p>Picture a small set of trapdoors scattered across the DOM landscape. Each one is a common mistake — the null-not-checked door, the NodeList-mistaken-for-element door, the script-ran-too-early door. You don't avoid them by being smart; you avoid them by knowing exactly where they are and stepping around them by habit.</p>
    <p>Most DOM bugs that frustrate beginners are someone stepping on one of these trapdoors for the first time. Once you've fallen in once, you remember where it is, and you don't fall in again. Reading through the mistakes here is like getting a map of where the trapdoors are before you start walking.</p>
    <p>The fixes are the steady ground next to each trapdoor. <code>if (el)</code> is the floorboard around the null door. <code>forEach</code> is the path around the NodeList door. <code>defer</code> and <code>DOMContentLoaded</code> are the bridge over the timing door. Walk those paths until they're automatic, and the bugs disappear.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-11-18-1-5': `
<pre class="language-javascript"><code class="language-javascript">// A debugging walkthrough using the mistake categories.

// Symptom: "my code doesn't work"
// 1. Open DevTools console — is there an error message?
//    - "Cannot read property X of null" → mistake category #3 (null) or #4 (timing)
//    - "X is not a function" → mistake category #2 (NodeList vs element)
//    - "InvalidCharacterError" → mistake category #1 (selector format)
//    - SyntaxError → typo (camelCase, hyphens, etc.)

// 2. No error, but nothing happens visually?
//    - did the class actually get added? → check el.classList in console
//    - does the CSS rule match? → DevTools Elements panel
//    - is the element actually on the page? → document.body.contains(el)
//    - did textContent/innerHTML wipe something? → check el.children before/after

// 3. Event handler fires too many times?
//    - check if addEventListener is in a re-render path
//    - is the same handler being added multiple times?

// 4. Form field doesn't update?
//    - are you using .value instead of .textContent? (yes, .value for inputs)

// 5. Element shows up but in the wrong place?
//    - appendChild adds at the END
//    - prepend at the start
//    - before/after for specific positions

// 6. Element from createElement isn't visible?
//    - did you actually call appendChild after createElement?

// each symptom matches a mistake category. each category has a known fix.
// over time, this becomes second nature — you read the symptom, you know the fix.</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-11-18-2-0': `
    <p>The fastest debugging approach for DOM code: paste the same selector into the DevTools console:</p>
<pre class="language-javascript"><code class="language-javascript">// in the browser console:
document.querySelector(".whatever");
// returns the element or null — tells you immediately if the selector works.

// if it returns the element in the console but null in your script:
//   → timing issue. your script runs before the element exists.
//   → fix with defer, end-of-body, or DOMContentLoaded.

// if it returns null in BOTH:
//   → selector is wrong. typo, missing prefix, case mismatch, or element doesn't exist.

// if it returns multiple elements but your code expects one:
//   → narrow the selector, or use querySelectorAll properly.</code></pre>

    <p>The DevTools Elements panel shows the live DOM — useful when "view source" doesn't match what's on the page (because JavaScript modified it). If a class is "missing" but you added it, check the Elements panel to confirm it's actually there.</p>
  `,

  /* 2.1 The part that makes it click */
  'topics-11-18-2-1': `
    <p>Most DOM mistakes are mechanical — they have nothing to do with the logic of your code. A missing dot, a wrong property name, a forgotten null check. They feel mysterious because the error messages are vague, but the underlying issues are small and consistent.</p>
    <p>Once you've seen each category once or twice, you'll start to recognize the symptoms before you even read the error message. "querySelector returns null on an element that's in the HTML?" → timing or selector typo. "addEventListener is not a function?" → you have a NodeList, not an element. The diagnosis becomes faster, and the bugs themselves become rarer as the defensive habits become automatic.</p>
  `,

  /* 2.2 Common confusions */
  'topics-11-18-2-2': `
    <p><strong>Confusion: "I'm sure my selector is right but it returns null"</strong></p>
<pre class="language-javascript"><code class="language-javascript">// almost always one of:
// 1. Case sensitivity — class "Card" vs ".card"
// 2. Missing the prefix — querySelector("btn") instead of ".btn"
// 3. Whitespace inside the class name — class="big btn" vs querySelector(".big.btn")
//    (note: ".big btn" with a space means ".btn INSIDE .big", different meaning)
// 4. Script ran before the element was parsed (timing)
// 5. Element is inside an iframe or Shadow DOM (different document tree)

// debug: paste the selector into DevTools console.
// if it returns null there too → selector wrong.
// if it returns an element → your script's timing is off.</code></pre>

    <p><strong>Confusion: "my class adds work, but no visual change"</strong></p>
<pre class="language-javascript"><code class="language-javascript">// most likely:
// 1. CSS rule doesn't exist for the class you added
// 2. CSS rule exists but specificity is too low (another rule wins)
// 3. CSS file isn't loaded
// 4. Element is hidden by a parent (display: none on an ancestor)

// debug: in DevTools Elements panel, click the element and check Styles tab.
// it shows every rule that applies, including overrides.</code></pre>

    <p><strong>Confusion: "I added an event listener but it fires multiple times"</strong></p>
<pre class="language-javascript"><code class="language-javascript">// almost always: addEventListener is being called multiple times.
// each call adds another handler.

// common cause: addEventListener inside a function that runs more than once
function render() {
  document.getElementById("save").addEventListener("click", save);
  // every call adds another handler
}
render();   // 1 handler
render();   // 2 handlers
render();   // 3 handlers
// one click now triggers save 3 times

// fix: attach the listener ONCE, outside the function
document.getElementById("save").addEventListener("click", save);

// or use event delegation on a stable parent that doesn't re-render</code></pre>

    <p><strong>Confusion: "innerHTML replaced my structure"</strong></p>
<pre class="language-javascript"><code class="language-javascript">// innerHTML completely REPLACES the element's contents — including any
// children with event listeners attached.

document.getElementById("list").innerHTML = "&lt;li&gt;new&lt;/li&gt;";
// any existing &lt;li&gt; elements are gone
// any addEventListener calls on those elements are dead

// fix: use appendChild/append to add without wiping, or use event delegation</code></pre>

    <p><strong>Confusion: "I set style.X but nothing happened"</strong></p>
<pre class="language-javascript"><code class="language-javascript">// usually one of:
// 1. wrong property name (hyphens instead of camelCase)
//    el.style.background-color → SyntaxError
//    el.style.backgroundColor → ✓
//
// 2. forgot the units
//    el.style.width = 200       → silently fails
//    el.style.width = "200px"   → ✓
//
// 3. CSS more specific than inline style — rare, but possible
//    (look for !important in stylesheet)
//
// 4. element isn't display: block (transforms, widths often need block-like display)</code></pre>

    <p><strong>Confusion: "I checked but it's still null somehow"</strong></p>
<pre class="language-javascript"><code class="language-javascript">
// the variable might have been NULL at one point, but other code reassigned it.
// or the element existed when you queried but was removed before you used the reference.

// most common pattern that confuses people:
const btn = document.querySelector(".btn");
// ... later, after some event:
btn.classList.add("active");   // crashes
// because btn was null when querySelector ran (DOM not ready),
// OR because the element was removed by other code.

// always check at the moment of use, not just at the moment of query.</code></pre>
  `,

  /* 2.3 Common mistakes */
  'topics-11-18-2-3': `
<pre class="language-javascript"><code class="language-javascript">document.querySelector("btn");
// looks for &lt;btn&gt; tag
// fix: add the prefix
document.querySelector(".btn");</code></pre>

<pre class="language-javascript"><code class="language-javascript">document.querySelectorAll(".item").textContent = "Hi";
// NodeList has no textContent
// fix: loop
document.querySelectorAll(".item").forEach(el =&gt; el.textContent = "Hi");</code></pre>

<pre class="language-javascript"><code class="language-javascript">document.querySelector(".missing").textContent = "Hi";
// crashes when null
// fix: check first
const el = document.querySelector(".missing");
if (el) el.textContent = "Hi";
// or:
document.querySelector(".missing")?.textContent = "Hi";   // SyntaxError on assignment
// (use if-check for assignments)</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Script in &lt;head&gt; without defer
// &lt;head&gt;&lt;script&gt;document.getElementById("btn").click()&lt;/script&gt;&lt;/head&gt;
// crashes — DOM not parsed yet
// fix: use defer or DOMContentLoaded</code></pre>

<pre class="language-javascript"><code class="language-javascript">document.querySelector("button").textContent = "Saved!";
// HTML had &lt;button&gt;&lt;span class="icon"&gt;★&lt;/span&gt;Save&lt;/button&gt;
// the icon span is gone
// fix: target the specific text holder, or rebuild structure</code></pre>

<pre class="language-javascript"><code class="language-javascript">input.textContent = "Alex";
// inputs use .value
// fix:
input.value = "Alex";</code></pre>

<pre class="language-javascript"><code class="language-javascript">el.style.background-color = "red";
// SyntaxError — hyphens not valid in identifiers
// fix:
el.style.backgroundColor = "red";</code></pre>

<pre class="language-javascript"><code class="language-javascript">el.style.width = 200;
// silently fails — needs units
// fix:
el.style.width = "200px";</code></pre>

<pre class="language-javascript"><code class="language-javascript">function render() {
  document.getElementById("btn").addEventListener("click", save);
}
// each render() adds ANOTHER handler
// fix: attach once outside render</code></pre>

<pre class="language-javascript"><code class="language-javascript">el.innerHTML = userInput;
// XSS risk if userInput is from a user
// fix: use textContent
el.textContent = userInput;</code></pre>

<pre class="language-javascript"><code class="language-javascript">listA.appendChild(li);
listB.appendChild(li);
// li moves to listB; not in both
// fix: clone if you want duplicates
listB.appendChild(li.cloneNode(true));</code></pre>

<pre class="language-javascript"><code class="language-javascript">if (el.className === "active") { ... }
// only matches if class attribute is EXACTLY "active"
// fix: use classList.contains
if (el.classList.contains("active")) { ... }</code></pre>

<pre class="language-javascript"><code class="language-javascript">el.classList.add(".active");
// adds class ".active" (with dot), not "active"
// fix: drop the dot
el.classList.add("active");</code></pre>

<pre class="language-javascript"><code class="language-javascript">el.classList.add("btn primary");
// throws InvalidCharacterError
// fix: separate arguments
el.classList.add("btn", "primary");</code></pre>

<pre class="language-javascript"><code class="language-javascript">document.getElementById("#title");
// "#" becomes part of the id being searched
// fix:
document.getElementById("title");</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-11-18-3-0': `
<pre class="language-javascript"><code class="language-javascript">// SAFE PATTERNS for everyday DOM code

// Always check for null
const el = document.querySelector(".x");
if (el) el.textContent = "hi";

// Or optional chaining for method calls
document.querySelector(".x")?.classList.add("active");

// Loop NodeLists, don't call methods directly
document.querySelectorAll(".item").forEach(el =&gt; el.classList.add("ready"));

// Use the right selector prefix
document.querySelector(".btn");        // class
document.querySelector("#title");       // id
document.querySelector("button");       // tag

// Use the right property type
input.value = "Alex";                   // form field
div.textContent = "Hello";              // display element

// Camel case for style properties
el.style.backgroundColor = "red";
el.style.fontSize = "16px";

// Include units
el.style.width = "200px";
el.style.left = mouseX + "px";

// Always defer or wait for DOM
document.addEventListener("DOMContentLoaded", () =&gt; {
  // safe to query DOM here
});

// Attach event listeners ONCE
document.getElementById("btn").addEventListener("click", save);

// Use event delegation for dynamic content
document.querySelector("ul").addEventListener("click", e =&gt; {
  if (e.target.matches("li")) handleClick(e.target);
});

// Use textContent for untrusted input
el.textContent = userInput;

// Use innerHTML only for trusted, structured content
el.innerHTML = "&lt;strong&gt;" + escapeHTML(name) + "&lt;/strong&gt;";

// Clone before appending if you want duplicates
listB.appendChild(li.cloneNode(true));

// classList.contains for membership checks
if (el.classList.contains("active")) { ... }

// Use forEach (or for...of) on collections
document.querySelectorAll(".x").forEach(el =&gt; el.classList.add("y"));

// Target the deepest specific element when updating text
document.querySelector(".btn .label").textContent = "Save";

// Avoid wiping structure unintentionally
const btn = document.querySelector(".btn");
btn.querySelector(".label").textContent = "Save";   // ✓ targeted
// NOT: btn.textContent = "Save"   // ✗ wipes children</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-11-18-3-1': `
    <p><strong>Example: defensive query helpers</strong></p>
<pre class="language-javascript"><code class="language-javascript">// utility: query inside a parent, return null safely
function $(selector, parent = document) {
  return parent.querySelector(selector);
}
function $$(selector, parent = document) {
  return parent.querySelectorAll(selector);
}

// usage with null-safe access
const card = $(".card");
const title = $(".title", card);
if (title) title.textContent = "Updated";

// $$ never returns null — safe to forEach directly
$$(".item").forEach(el =&gt; el.classList.add("ready"));
// covers most query patterns with built-in safety.</code></pre>

    <p><strong>Example: setup wrapped in DOMContentLoaded</strong></p>
<pre class="language-javascript"><code class="language-javascript">function init() {
  document.querySelector("#save")?.addEventListener("click", save);
  document.querySelectorAll(".tab").forEach(t =&gt; {
    t.addEventListener("click", () =&gt; selectTab(t));
  });
}

if (document.readyState !== "loading") {
  init();
} else {
  document.addEventListener("DOMContentLoaded", init);
}
// handles both "script loaded eagerly" and "DOM already ready" cases.</code></pre>

    <p><strong>Example: safe text update inside a button</strong></p>
<pre class="language-javascript"><code class="language-javascript">function setButtonLabel(btn, text) {
  if (!btn) return;
  const label = btn.querySelector(".label");
  if (label) {
    label.textContent = text;
  } else {
    btn.textContent = text;   // fallback — overwrites everything
  }
}
// targets the .label child first to preserve any icons or other elements.
// only wipes the whole button as a last resort.</code></pre>

    <p><strong>Example: event delegation for dynamic content</strong></p>
<pre class="language-javascript"><code class="language-javascript">document.querySelector(".todo-list").addEventListener("click", e =&gt; {
  if (e.target.matches(".delete-btn")) {
    e.target.closest(".todo")?.remove();
  }
});
// one listener on the parent handles clicks from any current or future child.
// no need to attach listeners every time a new todo is added.</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-11-18-3-2': `
    <ul>
      <li><strong>Selector format</strong> → covered in 3.12.5; the source of most "selector returns null" bugs</li>
      <li><strong>NodeList vs Element</strong> → covered in 3.12.7 and 3.12.8</li>
      <li><strong>Null handling</strong> → covered in 3.12.18; the universal defensive habit</li>
      <li><strong>DOM loaded timing</strong> → covered in 3.12.17; the "script ran too early" category</li>
      <li><strong>textContent vs innerHTML</strong> → covered in 3.12.9</li>
      <li><strong>style vs classList</strong> → covered in 3.12.10</li>
      <li><strong>Form inputs (.value)</strong> → distinct from textContent</li>
      <li><strong>Event delegation</strong> → solves "listener fires multiple times after re-render"</li>
      <li><strong>cloneNode</strong> → covered in 3.12.15; for duplicate-not-move</li>
      <li><strong>DevTools</strong> → the diagnostic tool for almost every DOM bug</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-11-18-3-3': `
    <ul>
      <li>Selector format</li>
      <li>NodeList vs Element</li>
      <li>Null handling and optional chaining</li>
      <li>DOM loaded timing</li>
      <li>textContent vs innerHTML</li>
      <li>style vs classList</li>
      <li>Form inputs (.value)</li>
      <li>Event delegation</li>
      <li><code>cloneNode</code></li>
      <li>DevTools Elements panel</li>
    </ul>
  `,

  /* ========================================================= 
   Sub-lesson: 3.12.20 DOM → debugging DOM
 =======================================================*/

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-11-19-0-0': `
    <p><strong>Debugging the DOM</strong> is the practice of figuring out why something on the page isn't behaving the way you expect — and using the tools the browser gives you to find out. There are four core moves: log values to the console, check for null, inspect the live HTML with DevTools, and verify your selectors actually match elements.</p>
    <p>Most DOM bugs aren't deep; they're small mismatches between what your code assumes and what the page actually contains. Knowing how to <em>look</em> at what the page contains — instead of guessing — is what separates "I'll get this in 30 seconds" from "I've been stuck for an hour."</p>
  `,

  /* 0.1 Syntax */
  'topics-11-19-0-1': `
<pre class="language-javascript"><code class="language-javascript">// 1. console.log the result of any query — see what you actually got
console.log(document.querySelector(".target"));
// → an element, or null

// 2. log the value of a property you're trying to use
const el = document.querySelector(".target");
console.log(el?.textContent, el?.className);

// 3. log inside an event handler to confirm it fires
btn.addEventListener("click", e =&gt; {
  console.log("clicked", e.target);
});

// 4. paste the selector into DevTools to verify
// (in the browser console:)
document.querySelectorAll(".my-class")
// shows what your selector matches, instantly.

// 5. inspect the live DOM via the Elements panel
// right-click the page → Inspect → Elements
// shows what JavaScript can see RIGHT NOW (not the original HTML).</code></pre>
    <p>The first place to look is almost always "what does the page actually contain?" — and the second is "what does my code think it contains?" Bugs hide in the gap between those two answers.</p>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-11-19-0-2': `
<pre class="language-javascript"><code class="language-javascript">// The DOM debugging toolkit:
//
// 1. console.log() — print the value of any variable or expression
//    use it on query results, event targets, property values
//
// 2. console.dir() — print the OBJECT structure (good for elements)
//    shows all properties, not just the HTML representation
//
// 3. console.table() — print arrays/NodeLists as tables
//    useful for inspecting NodeList contents quickly
//
// 4. DevTools Elements panel — the live DOM
//    right-click element → Inspect → shows the current state, not the source HTML
//
// 5. DevTools Console — paste any expression to run it on the page
//    document.querySelectorAll(".x") tests selectors instantly
//
// 6. DevTools Sources panel — set breakpoints on lines of code
//    pause execution, inspect variables, step through code
//
// 7. $ and $$ shortcuts in the console
//    $(".x") is the same as document.querySelector(".x")
//    $$(".x") is the same as document.querySelectorAll(".x")
//
// the four debugging questions:
//   - did my selector match anything?
//   - is the element actually on the page at this moment?
//   - are the property names spelled correctly?
//   - did my code run at the right time?</code></pre>
    <p>You don't need all of these for every bug. Most are solved with <code>console.log</code> plus the Elements panel. The others are there when you need them.</p>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-11-19-0-3': `
    <p><strong><code>console.log</code> is the workhorse.</strong> Pass anything — variables, expressions, objects, elements. The console renders elements in a clickable, expandable form:</p>
<pre class="language-javascript"><code class="language-javascript">const el = document.querySelector(".target");
console.log(el);
// → &lt;div class="target"&gt;...&lt;/div&gt;   (clickable in DevTools)

// log multiple values with labels:
console.log("element:", el, "text:", el?.textContent);

// log objects:
console.log({ el, text: el?.textContent, classes: el?.className });
// the {} wrapper shows variable names next to their values — easier to scan.</code></pre>

    <p><strong><code>console.dir</code> shows the element as an object, not as HTML.</strong> Useful for inspecting properties:</p>
<pre class="language-javascript"><code class="language-javascript">const el = document.querySelector(".btn");

console.log(el);
// shows: &lt;button class="btn"&gt;Save&lt;/button&gt;  (HTML view)

console.dir(el);
// shows: { textContent: "Save", classList: DOMTokenList(1), id: "", ... }
// object view — see every property the element has.</code></pre>

    <p><strong><code>console.table</code> for arrays and NodeLists.</strong> Renders as a sortable table:</p>
<pre class="language-javascript"><code class="language-javascript">const items = document.querySelectorAll(".item");

// instead of:
console.log(items);
// you can do:
console.table([...items].map(el =&gt; ({
  text: el.textContent,
  classes: el.className,
  id: el.id,
})));
// shows a table with one row per item — fast scan, sortable columns.</code></pre>

    <p><strong>The DevTools Elements panel shows the LIVE DOM, not the source HTML.</strong> Critical distinction:</p>
<pre class="language-javascript"><code class="language-javascript">// "View Source" (Ctrl+U) → the HTML file as it came from the server
//                          → does NOT reflect JavaScript changes

// DevTools Elements panel → the live, current DOM
//                          → reflects every JavaScript change in real time

// when your JavaScript adds/removes/modifies elements, the Elements panel updates.
// View Source stays the same — it's the snapshot from page load.

// rule: to see what JavaScript can actually find, use the Elements panel.</code></pre>

    <p><strong>The DevTools Console accepts any JavaScript — including DOM queries.</strong> The fastest way to verify a selector:</p>
<pre class="language-javascript"><code class="language-javascript">// in the browser console (paste these in directly):
document.querySelector(".my-button")
// → returns the element, or null
// → null means the selector didn't match

document.querySelectorAll(".my-button")
// → NodeList of all matches
// → length 0 means no matches

// shortcuts the browser provides (console-only — NOT in your scripts):
$(".my-button")          // same as document.querySelector
$$(".my-button")          // same as document.querySelectorAll
$0                         // the last element you inspected in Elements panel</code></pre>

    <p><strong>Breakpoints pause your code mid-execution.</strong> Set them in the Sources panel by clicking a line number:</p>
<pre class="language-javascript"><code class="language-javascript">// in your code:
function handleClick(e) {
  const target = e.target;
  // ← click on this line number in DevTools Sources panel to set a breakpoint
  const value = target.textContent;
  process(value);
}

// when the breakpoint hits:
//   - execution pauses BEFORE the line runs
//   - DevTools shows you the values of all local variables
//   - you can step line-by-line with the controls (F10 = next, F11 = step into)
//   - or resume normal execution (F8)

// alternative: put debugger; in your code
function handleClick(e) {
  debugger;   // pauses here automatically when DevTools is open
  // ...
}</code></pre>

    <p><strong><code>console.log</code> in event handlers tells you whether they fire and what their arguments are.</strong> The most common bug-finding move:</p>
<pre class="language-javascript"><code class="language-javascript">btn.addEventListener("click", e =&gt; {
  console.log("button clicked");
  console.log("target:", e.target);
  console.log("currentTarget:", e.currentTarget);
});

// if nothing logs when you click:
//   - the listener never attached (timing? null element?)
//   - or you're clicking a different element than you think

// if "button clicked" logs but the next line doesn't:
//   - the next line throws an error (check console for red text)</code></pre>

    <p><strong>For repeated logs in loops, use labels.</strong> Otherwise the console fills up and you can't tell which iteration is which:</p>
<pre class="language-javascript"><code class="language-javascript">document.querySelectorAll(".item").forEach((el, i) =&gt; {
  console.log("item", i, ":", el.textContent);
});
// each log identifies its iteration — much easier to scan than a wall of bare text.</code></pre>

    <p><strong>Check <code>document.readyState</code> when timing might be the issue.</strong> Tells you the loading phase:</p>
<pre class="language-javascript"><code class="language-javascript">console.log(document.readyState);
//   "loading"     → still parsing the HTML; DOM not fully built
//   "interactive" → DOM is built (DOMContentLoaded fired)
//   "complete"    → everything loaded (images, CSS, etc.)

// if your selector returns null AND readyState is "loading":
//   → that's the bug. wait for DOMContentLoaded, or use defer.</code></pre>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-11-19-1-0': `
    <p>DOM bugs aren't usually mysterious — they're invisible. Your code looks right, your HTML looks right, but the page doesn't behave the way you expect. Without tools to look inside, you'd be guessing.</p>
    <p>The browser's debugging tools make the invisible visible. The Elements panel shows the live DOM. The console runs any expression instantly. <code>console.log</code> shows the actual values your code is working with. Once you can see what's really happening, the bug usually becomes obvious within seconds.</p>
  `,

  /* 1.1 Why use it */
  'topics-11-19-1-1': `
    <p>For any DOM bug, a few quick checks usually find the cause:</p>
<pre class="language-javascript"><code class="language-javascript">// Step 1: log the result of the query
const el = document.querySelector(".target");
console.log(el);
//   → null? selector is wrong, or element not in DOM yet
//   → element? selector works; problem is elsewhere

// Step 2: log right before the failing operation
console.log(el, el.textContent);
el.textContent = "Hi";

// Step 3: paste the selector into DevTools console
//   document.querySelectorAll(".target")
//   confirms what your code sees at THIS moment

// Step 4: open Elements panel, find the element by hand
//   - is it actually there?
//   - does it have the class/id you expect?
//   - is it inside an iframe or shadow DOM?

// Step 5: check readyState if a timing issue is possible
console.log(document.readyState);

// in 9 out of 10 cases, one of those five reveals the problem.</code></pre>
  `,

  /* 1.2 Where you use it */
  'topics-11-19-1-2': `
<pre class="language-javascript"><code class="language-javascript">// Log a value
console.log(el);

// Log multiple values together
console.log(el, el?.textContent, el?.className);

// Log with labels via object shorthand
console.log({ el, text: el?.textContent });

// Log inside an event handler
btn.addEventListener("click", e =&gt; {
  console.log("clicked:", e.target);
});

// Log inside a loop with iteration index
document.querySelectorAll(".item").forEach((el, i) =&gt; {
  console.log("item", i, el.textContent);
});

// Use console.dir for object inspection
console.dir(el);

// Use console.table for arrays
console.table([...items].map(el =&gt; ({ text: el.textContent })));

// Pause execution
debugger;   // breakpoint via code

// Check loading state
console.log(document.readyState);

// Verify a selector in DevTools console
// (paste in browser console)
$(".my-class")
$$(".my-class")

// Inspect the last clicked element
// (in DevTools Elements panel, right-click → "Store as global variable" → temp1)
// then in console: console.log(temp1)

// Check if an element is on the page
console.log(document.body.contains(el));

// Visually identify an element in the console
el.style.outline = "2px solid red";   // temporary visual marker for debugging

// Count event listeners on an element
// (DevTools console only)
getEventListeners($0);   // shows handlers registered on the last-inspected element</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-11-19-1-3': `
    <p>Debugging the DOM is about looking at what's actually happening, not what you assume is happening. Your code has a mental model of the page; the page has its own reality. Bugs live in the gap between them.</p>
    <p>The fastest tools are <code>console.log</code> (print any value to see it) and the DevTools Elements panel (see the live DOM as the browser sees it). With those two, you can answer almost every "why isn't this working" question: log the variable to confirm what your code thinks; inspect the element to confirm what's actually on the page; compare the two; the difference is the bug.</p>
    <p>For trickier problems, breakpoints let you pause your code mid-execution and inspect every variable. <code>console.dir</code> shows an element as an object instead of HTML. <code>console.table</code> renders arrays clearly. Most days you'll only use <code>console.log</code> and the Elements panel; the rest are there when you need them.</p>
  `,

  /* 1.4 Mental model */
  'topics-11-19-1-4': `
    <p>Picture your code and the actual DOM as two notebooks. Your code says "the button has class 'save'" — that's in its notebook. The DOM says "I have a button with class 'save_btn'" — that's in its notebook. When you read your code, you trust your notebook. When the bug shows up, the truth is in the other notebook.</p>
    <p>Debugging is opening both notebooks side by side and reading the same line aloud. <code>console.log</code> reads from your notebook ("here's what I'm working with"). The Elements panel reads from the DOM's notebook ("here's what's actually on the page"). When the two lines don't match, you've found the bug.</p>
    <p>The skill isn't memorizing tools — it's developing the instinct to <em>look</em> instead of guess. Every "why isn't this working?" is really "show me what's happening." Log the variable. Open the Elements panel. Paste the selector into the console. The bug usually surfaces within 30 seconds once you start looking.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-11-19-1-5': `
<pre class="language-javascript"><code class="language-javascript">// THE BUG: clicking the save button does nothing.

// the code:
document.querySelector(".save-button").addEventListener("click", () =&gt; {
  console.log("saving...");
  saveData();
});

// step by step debugging:

// 1. open the browser console — is there an error message?
//    if yes: read it. usually points to the line. fix and try again.
//    if no: keep going.

// 2. is the listener even attached? log inside the handler:
document.querySelector(".save-button").addEventListener("click", () =&gt; {
  console.log("CLICKED — listener fired");
  saveData();
});
// click the button:
//    - "CLICKED" logs? → listener is attached, problem is in saveData
//    - nothing logs? → listener isn't attached

// 3. if nothing logs, check the selector:
console.log(document.querySelector(".save-button"));
// null? → wrong selector or timing issue

// 4. paste the selector into DevTools console:
document.querySelector(".save-button")
// also null? → selector is wrong. inspect the button in Elements panel to see its real class.
// returns the element? → script ran before the button existed. fix with DOMContentLoaded or defer.

// 5. if selector returns an element here but null in your code:
//    open the script. is it in &lt;head&gt; without defer?
//    add defer or wrap in DOMContentLoaded.

// step by step, each check rules out a possible cause:
//   - selector wrong?
//   - element not yet on page?
//   - listener attached but handler errors?
//   - handler runs but saveData fails?
// within a few minutes, the actual cause is identified.</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-11-19-2-0': `
    <p>The single most useful debugging move: <strong>log the result of every <code>querySelector</code> before you use it.</strong> One line tells you whether the bug is in the query or somewhere downstream:</p>
<pre class="language-javascript"><code class="language-javascript">const el = document.querySelector(".save");
console.log("query result:", el);
// null      → bug is in the query (or timing)
// element   → bug is somewhere AFTER this line

// then comment out the log when you're done.</code></pre>

    <p>The second most useful move: <strong>paste the same selector into the DevTools console.</strong> If it returns an element there but null in your code, the issue is timing — your script ran before the element existed.</p>

    <p>The third: <strong>open the Elements panel and inspect the element your code is targeting.</strong> Does it really have the class you think it does? Is it really inside the parent you assumed? Live inspection beats guessing every time.</p>
  `,

  /* 2.1 The part that makes it click */
  'topics-11-19-2-1': `
    <p>Debugging isn't a mysterious skill — it's a habit of looking at what's actually happening instead of trusting your assumptions. The browser gives you direct access to every piece of state on the page; you just have to use it. <code>console.log</code> shows your variables. The Elements panel shows the live DOM. The console runs arbitrary JS instantly. Three tools, and they cover almost every DOM bug you'll ever hit.</p>
    <p>Over time, the order of operations becomes automatic. Log the query result. Check for null. Paste the selector into the console. Inspect the element. The first one that surprises you is your bug. Five minutes from "something's wrong" to "found it" — once the habits are wired in.</p>
  `,

  /* 2.2 Common confusions */
  'topics-11-19-2-2': `
    <p><strong>Confusion: "View Source" vs Elements panel</strong></p>
<pre class="language-javascript"><code class="language-javascript">// View Source (Ctrl+U) → the ORIGINAL HTML file from the server
//                       → JavaScript modifications are NOT reflected

// DevTools → Elements → the LIVE DOM
//                       → updates in real time as JS modifies the page

// if your JS added a class, you'll see it in Elements but NOT in View Source.
// always use Elements for debugging dynamic UI.</code></pre>

    <p><strong>Confusion: console.log shows the wrong value</strong></p>
<pre class="language-javascript"><code class="language-javascript">// for OBJECTS (including DOM elements), the console can be "lazy" —
// it shows the current state when you EXPAND the entry, not when it was logged.

let el = document.querySelector(".x");
console.log(el);
el.classList.add("highlight");
// open the logged entry later → it shows "highlight" class even though
// it didn't have it when console.log ran

// fix for "frozen" snapshots: log primitives or stringify
console.log(el.className);   // string — captured at log time
console.log(JSON.stringify({ classes: el.className }));</code></pre>

    <p><strong>Confusion: "my breakpoint doesn't pause"</strong></p>
<pre class="language-javascript"><code class="language-javascript">// possible reasons:
// 1. DevTools wasn't open when the script ran
// 2. the breakpoint is on a line that doesn't actually execute
// 3. the file was cached — try a hard reload (Cmd+Shift+R / Ctrl+Shift+R)
// 4. the code is in an iframe with different origin — limited debugging

// alternative: use the debugger; statement
function suspect() {
  debugger;   // pauses here whenever DevTools is open
  // ...
}</code></pre>

    <p><strong>Confusion: thinking a console error means your code crashed</strong></p>
<pre class="language-javascript"><code class="language-javascript">// some errors do crash the script (TypeError, ReferenceError).
// others are non-fatal warnings (CORS issues, deprecated APIs, etc.)

// when you see red in the console:
//   - read the message
//   - click the file:line link to jump to the source
//   - check if it's actually relevant to your bug or just unrelated noise</code></pre>

    <p><strong>Confusion: "no error, but it's still broken"</strong></p>
<pre class="language-javascript"><code class="language-javascript">// not all bugs throw errors. silent bugs:
//   - the wrong text is showing (no error, just wrong content)
//   - a class was added but no CSS matches it
//   - an event listener was attached but to the wrong element
//   - innerHTML wiped a child element you didn't realize was there

// fix: console.log + Elements panel inspection. silent bugs become visible
// once you compare what your code did vs what's on the page.</code></pre>

    <p><strong>Confusion: "the console shows my changes, but the page doesn't"</strong></p>
<pre class="language-javascript"><code class="language-javascript">// possible reasons:
// 1. you ran the code in the console but it didn't actually attach to the page
//    (e.g., variable in console doesn't reference an on-page element)
// 2. CSS is hiding it (display: none, opacity: 0, off-screen)
// 3. an ancestor is hidden, so the element you modified is hidden by inheritance

// fix: use getComputedStyle to see the rendered values
console.log(getComputedStyle(el).display, getComputedStyle(el).color);</code></pre>
  `,

  /* 2.3 Common mistakes */
  'topics-11-19-2-3': `
<pre class="language-javascript"><code class="language-javascript">// Skipping logs entirely and guessing
el.textContent = newValue;
// crashes — el was null
// fix: log first
const el = document.querySelector(".x");
console.log(el);
if (el) el.textContent = newValue;</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Logging too late (after the operation that fails)
el.textContent = "Hi";   // crashes here
console.log(el);          // never runs
// fix: log BEFORE the suspect line
console.log(el);
el.textContent = "Hi";</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Trusting "View Source" for current DOM state
// it shows the original HTML, not your JS changes
// fix: use Elements panel for live DOM</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Looking only at the console, not the Elements panel
// console.log might say everything's fine, but the page itself reveals styling/structure bugs
// fix: inspect the element visually in the Elements panel</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Forgetting to remove debug code
console.log("here", el);
console.log("here too");
debugger;
// fix: remove or comment out debug logs before deploying
// many editors have a shortcut for "delete all console.log calls"</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Using alert() to debug
alert(el.textContent);
// blocks the UI, hard to read multi-line, no inspection
// fix: use console.log — non-blocking, expandable, copy/pasteable</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Logging objects by reference, expecting a snapshot
const data = { count: 1 };
console.log(data);
data.count = 99;
// expanding the log later shows count: 99 (not 1!)
// fix: capture a snapshot
console.log(JSON.stringify(data));
// or:
console.log({ ...data });   // shallow copy</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Setting breakpoints inside loops that fire 1000 times
// you'll be pausing forever
// fix: use conditional breakpoints (right-click breakpoint → Edit breakpoint)
// add a condition like: i === 5
// only pauses on the 5th iteration</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Searching the console wall for the relevant log
console.log(el);
// dozens of similar logs from other code
// fix: label your logs
console.log("[saveButton]", el);
// then filter the console by your label</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Forgetting DevTools has its own JavaScript environment
// the console can run any code, including queries
// $('.x'), $$('.x'), $0 (last inspected element) — built in
// not available in your scripts, only in the console</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-11-19-3-0': `
<pre class="language-javascript"><code class="language-javascript">// Quick log
console.log(el);

// Log with label
console.log("[setupForm]", el);

// Multiple values
console.log(el, el?.textContent, el?.className);

// Log object shorthand (variable name as label)
console.log({ el, text: el?.textContent });

// Log inside a loop
document.querySelectorAll(".item").forEach((el, i) =&gt; {
  console.log("item", i, el);
});

// Log inside an event handler
btn.addEventListener("click", e =&gt; {
  console.log("click target:", e.target);
});

// console.dir for object inspection
console.dir(el);

// console.table for arrays/lists
console.table([...items].map(el =&gt; ({ text: el.textContent, classes: el.className })));

// Conditional log
if (!el) console.warn("Element not found");

// debugger statement
function suspect() {
  debugger;   // pauses if DevTools is open
}

// Check if an element exists on the page
console.log(document.body.contains(el));
console.log(el.isConnected);

// Check the loading state
console.log(document.readyState);

// Visually highlight an element for debugging
el.style.outline = "2px solid red";

// Get computed styles
console.log(getComputedStyle(el).color);
console.log(getComputedStyle(el).display);

// Find listeners on an element (DevTools console only)
// getEventListeners($0);

// Snapshot an object for later
console.log(JSON.stringify(data));

// Stack trace
console.trace("got here");

// Time a block of code
console.time("loop");
for (let i = 0; i &lt; 1000; i++) { ... }
console.timeEnd("loop");

// Group related logs
console.group("setup");
console.log("step 1");
console.log("step 2");
console.groupEnd();</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-11-19-3-1': `
    <p><strong>Example: debugging "my button click doesn't do anything"</strong></p>
<pre class="language-javascript"><code class="language-javascript">// 1. Add a log inside the handler
document.querySelector(".save").addEventListener("click", () =&gt; {
  console.log("clicked");
  doSave();
});

// 2. Click. Does "clicked" appear?
//    - YES → listener is attached. bug is in doSave. log inside that next.
//    - NO  → listener isn't firing. check the selector and timing.

// 3. If no log, check the selector
console.log(document.querySelector(".save"));
//   - null → selector wrong, or DOM not ready
//   - element → listener attached but click doesn't reach it (maybe overlay covering it?)

// 4. In the console, force a click programmatically to test
document.querySelector(".save")?.click();
//   - if "clicked" logs → real click is being blocked (overlay, pointer-events: none)
//   - if nothing → handler isn't attached at all</code></pre>

    <p><strong>Example: debugging "my text update doesn't appear"</strong></p>
<pre class="language-javascript"><code class="language-javascript">function updateStatus(text) {
  console.log("updating status to:", text);
  const el = document.querySelector(".status");
  console.log("element:", el);
  if (!el) {
    console.warn("status element not found");
    return;
  }
  el.textContent = text;
  console.log("after update, textContent is:", el.textContent);
}
// each step is logged. you can see exactly where the flow stops.</code></pre>

    <p><strong>Example: debugging "the wrong element is being updated"</strong></p>
<pre class="language-javascript"><code class="language-javascript">// the title isn't updating, but no errors
function setTitle(text) {
  const title = document.querySelector(".title");
  console.log("setting title on:", title);
  title.style.outline = "2px solid red";   // visually mark it
  title.textContent = text;
}

// when you call setTitle, the page now shows the targeted element with a red outline.
// → if the red outline is on the WRONG element, your selector matches something unexpected.
// → fix: narrow the selector (".header .title" instead of ".title")</code></pre>

    <p><strong>Example: setting a conditional breakpoint inside a loop</strong></p>
<pre class="language-javascript"><code class="language-javascript">// you're looping 100 items and item 47 has a bug
document.querySelectorAll(".item").forEach((el, i) =&gt; {
  processItem(el);   // sometimes throws
});

// in DevTools Sources:
//   - click the line number for the processItem call
//   - right-click the breakpoint → "Edit breakpoint"
//   - condition: i === 47
//   - now the breakpoint only pauses when i is 47</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-11-19-3-2': `
    <ul>
      <li><strong><code>console.log</code></strong> → the most-used DOM debugging tool</li>
      <li><strong><code>console.dir</code></strong> → see elements as objects (full property list)</li>
      <li><strong><code>console.table</code></strong> → render arrays and lists as tables</li>
      <li><strong><code>console.warn</code> / <code>console.error</code></strong> → highlight messages by severity</li>
      <li><strong>DevTools Elements panel</strong> → the live DOM, real source of truth</li>
      <li><strong>DevTools Console</strong> → paste expressions to run on the page</li>
      <li><strong>DevTools Sources panel</strong> → set breakpoints, step through code</li>
      <li><strong><code>debugger;</code> statement</strong> → trigger a pause from code</li>
      <li><strong>document.readyState</strong> → check if the DOM is fully parsed</li>
      <li><strong><code>$</code> and <code>$$</code> console shortcuts</strong> → fast queries in DevTools</li>
      <li><strong><code>getEventListeners()</code></strong> → DevTools-only function to inspect handlers</li>
      <li><strong>Null checks and optional chaining</strong> → guard against the most common DOM bug</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-11-19-3-3': `
    <ul>
      <li><code>console.log</code></li>
      <li><code>console.dir</code> / <code>console.table</code> / <code>console.group</code></li>
      <li>DevTools Elements panel</li>
      <li>DevTools Console</li>
      <li>DevTools Sources panel / breakpoints</li>
      <li><code>debugger;</code> statement</li>
      <li><code>getComputedStyle</code></li>
      <li><code>document.readyState</code></li>
      <li><code>$</code> / <code>$$</code> / <code>$0</code> console shortcuts</li>
      <li>Null handling and optional chaining</li>
    </ul>
  `,

            /* ==========================================================
     TOPIC 3.13: EVENTS
     ========================================================== */

     /* ========================================================= 
   Sub-lesson: 3.13.1 Events → what events are
 =======================================================*/

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-12-0-0-0': `
    <p>An <strong>event</strong> is something that happens on the page that JavaScript can react to. A user clicks a button, types in a field, scrolls the page, resizes the window, moves the mouse — each of these is an event. The browser detects it; your code decides what to do about it.</p>
    <p>Events are what make a page feel alive. Without them, JavaScript could only run code at load time and nothing else. With them, you can respond to anything the user does — opening menus, validating forms, animating elements, fetching data, saving progress — all triggered by the actions the user takes.</p>
  `,

  /* 0.1 Syntax */
  'topics-12-0-0-1': `
<pre class="language-javascript"><code class="language-javascript">// HTML: &lt;button id="save"&gt;Save&lt;/button&gt;

const btn = document.getElementById("save");

// register a function to run when the button is clicked
btn.addEventListener("click", () =&gt; {
  console.log("the user clicked the button");
});

// "click" is the event name.
// the arrow function is the handler — code to run when the event happens.
// addEventListener wires them together.

// other common events:
btn.addEventListener("mouseenter", () =&gt; console.log("hovering"));
input.addEventListener("input", () =&gt; console.log("typed"));
window.addEventListener("scroll", () =&gt; console.log("scrolled"));</code></pre>
    <p>Every interactive feature follows this pattern: pick an element, name the event, give it a function to run. The browser handles the "watch and wait" part; your code only runs when the event happens.</p>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-12-0-0-2': `
<pre class="language-javascript"><code class="language-javascript">// the three pieces of every event setup:
//
//   element . addEventListener ( eventName , handler )
//      ↓             ↓               ↓           ↓
//   the target    the verb       the kind    the function
//                                 of event    to run

// the event "fires" when the action happens. the handler runs in response.
//
// example timeline for a click event:
//   1. page loads
//   2. addEventListener registers your handler — nothing runs yet
//   3. user clicks the button
//   4. browser detects the click → fires a "click" event
//   5. your handler runs
//   6. wait for next click
//
// common event types:
//   click          → mouse click (or tap on touchscreen)
//   input          → text typed into a field
//   change         → form field value changed (after blur, for some types)
//   submit         → form submission
//   focus / blur   → field gained / lost focus
//   mouseenter     → cursor entered element
//   mouseleave     → cursor left element
//   keydown        → key pressed
//   scroll         → page or element scrolled
//   load           → page (or image, etc.) finished loading
//   DOMContentLoaded → DOM finished parsing</code></pre>
    <p>You don't have to memorize every event name. The common ones — click, input, submit, keydown — cover 95% of real apps. The rest are there when you need them.</p>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-12-0-0-3': `
    <p><strong>Events fire on specific elements.</strong> A click on a button fires a "click" event on that button. A click on something else fires a "click" event on that something else. You attach a handler to the element you care about:</p>
<pre class="language-javascript"><code class="language-javascript">// HTML: &lt;button id="save"&gt;Save&lt;/button&gt; &lt;button id="cancel"&gt;Cancel&lt;/button&gt;

document.getElementById("save").addEventListener("click", () =&gt; {
  console.log("save clicked");
});

document.getElementById("cancel").addEventListener("click", () =&gt; {
  console.log("cancel clicked");
});

// clicking Save logs "save clicked".
// clicking Cancel logs "cancel clicked".
// each handler only runs for clicks on ITS element.</code></pre>

    <p><strong>Events also fire on <code>document</code> and <code>window</code> for page-level actions.</strong> Some events (load, scroll, keypress anywhere) belong to the page, not any one element:</p>
<pre class="language-javascript"><code class="language-javascript">// page-level events
window.addEventListener("load", () =&gt; console.log("page loaded"));
window.addEventListener("scroll", () =&gt; console.log("page scrolled"));
window.addEventListener("resize", () =&gt; console.log("window resized"));

document.addEventListener("DOMContentLoaded", () =&gt; console.log("DOM ready"));
document.addEventListener("keydown", e =&gt; console.log("key:", e.key));

// these don't belong to any one element — they're about the whole page.</code></pre>

    <p><strong>The handler receives an event object as its first argument.</strong> It contains details about what happened:</p>
<pre class="language-javascript"><code class="language-javascript">btn.addEventListener("click", (event) =&gt; {
  console.log(event.type);         // "click"
  console.log(event.target);        // the element that was clicked
  console.log(event.timeStamp);     // when the event fired
  console.log(event.clientX);       // mouse X position
  console.log(event.clientY);       // mouse Y position
});

// the convention is to name the parameter "e" or "event".
input.addEventListener("input", e =&gt; {
  console.log(e.target.value);   // current value of the input
});</code></pre>

    <p><strong>You can listen to the same event on many elements.</strong> Or different events on the same element:</p>
<pre class="language-javascript"><code class="language-javascript">// same event, multiple elements
document.querySelectorAll(".btn").forEach(btn =&gt; {
  btn.addEventListener("click", () =&gt; {
    btn.classList.add("clicked");
  });
});

// different events, one element
const input = document.querySelector("input");
input.addEventListener("focus", () =&gt; console.log("focused"));
input.addEventListener("input", () =&gt; console.log("typing"));
input.addEventListener("blur", () =&gt; console.log("left field"));

// same event, multiple handlers on the same element
btn.addEventListener("click", handlerA);
btn.addEventListener("click", handlerB);
// both run when the button is clicked, in the order they were added.</code></pre>

    <p><strong>Events run asynchronously — your code doesn't "wait" for them.</strong> Code after <code>addEventListener</code> runs immediately; the handler runs later, when (and if) the event happens:</p>
<pre class="language-javascript"><code class="language-javascript">console.log("before");

btn.addEventListener("click", () =&gt; {
  console.log("clicked");
});

console.log("after");

// log order at page load:
//   "before"
//   "after"
//   (waiting...)
//
// when the user clicks:
//   "clicked"
//
// the handler doesn't block. registering it is instant.</code></pre>

    <p><strong>Events can be "fired" without user action — programmatically.</strong> Useful for testing and some special cases:</p>
<pre class="language-javascript"><code class="language-javascript">btn.addEventListener("click", () =&gt; console.log("clicked"));

// trigger the click from code:
btn.click();
// logs "clicked" — same as if the user clicked

// for events without a built-in shortcut, use dispatchEvent:
const event = new Event("custom-event");
btn.dispatchEvent(event);</code></pre>

    <p><strong>Some events bubble up; others don't.</strong> Most events (click, input) travel from the target up through ancestors. Some (focus, blur, load) don't. This becomes important later for event delegation:</p>
<pre class="language-javascript"><code class="language-javascript">// click bubbles — clicking a button also fires click on its parent, grandparent, etc.
// HTML: &lt;div id="outer"&gt;&lt;button id="inner"&gt;Click&lt;/button&gt;&lt;/div&gt;

document.getElementById("outer").addEventListener("click", () =&gt; {
  console.log("outer was clicked");
});

document.getElementById("inner").addEventListener("click", () =&gt; {
  console.log("inner was clicked");
});

// when the button is clicked:
// → "inner was clicked"  (the actual target)
// → "outer was clicked"  (the bubble — covered in later lessons)</code></pre>

    <p><strong>Events can be removed with <code>removeEventListener</code>.</strong> But you need a reference to the same function:</p>
<pre class="language-javascript"><code class="language-javascript">function handle() { ... }

btn.addEventListener("click", handle);

// later, to stop listening:
btn.removeEventListener("click", handle);

// the function reference must match. you can't remove an anonymous handler.
btn.addEventListener("click", () =&gt; { ... });   // can't remove this — no reference saved</code></pre>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-12-0-1-0': `
    <p>Without events, JavaScript can only run code at the moment the page loads. Everything that depends on what the user does — clicking, typing, scrolling, hovering — would be impossible. Pages would be static documents with code, but no interactivity.</p>
    <p>Events bridge that gap. They turn user actions into triggers your code can listen for. Click handlers make buttons work. Input handlers validate forms in real time. Scroll handlers reveal content as the user reads. Every dynamic feature you've seen on the web is built on events.</p>
  `,

  /* 1.1 Why use it */
  'topics-12-0-1-1': `
    <p>Almost every interactive feature is built with events:</p>
<pre class="language-javascript"><code class="language-javascript">// button clicks
saveBtn.addEventListener("click", saveData);

// form submission
form.addEventListener("submit", handleSubmit);

// live input validation
emailInput.addEventListener("input", validateEmail);

// keyboard shortcuts
document.addEventListener("keydown", e =&gt; {
  if (e.ctrlKey &amp;&amp; e.key === "s") saveDocument();
});

// scroll-triggered effects
window.addEventListener("scroll", revealLazyImages);

// hover effects
card.addEventListener("mouseenter", () =&gt; card.classList.add("hover"));
card.addEventListener("mouseleave", () =&gt; card.classList.remove("hover"));

// every line above is "wait for this to happen, then react."</code></pre>

    <p>Events are also how JavaScript reacts to non-user activity: pages finishing loading, network requests completing, timers expiring. Almost everything that "happens" in a browser produces an event your code can hook into.</p>
  `,

  /* 1.2 Where you use it */
  'topics-12-0-1-2': `
<pre class="language-javascript"><code class="language-javascript">// Button clicks
btn.addEventListener("click", handle);

// Form events
form.addEventListener("submit", e =&gt; {
  e.preventDefault();   // prevent page reload
  saveForm();
});

input.addEventListener("input", () =&gt; {
  console.log("user typed:", input.value);
});

input.addEventListener("change", validate);
input.addEventListener("focus", showHint);
input.addEventListener("blur", hideHint);

// Keyboard
document.addEventListener("keydown", e =&gt; {
  if (e.key === "Escape") closeModal();
});

// Mouse
el.addEventListener("mouseenter", showTooltip);
el.addEventListener("mouseleave", hideTooltip);

// Window events
window.addEventListener("resize", relayout);
window.addEventListener("scroll", checkVisibility);
window.addEventListener("load", initApp);

// Custom events for app-level signals
document.dispatchEvent(new Event("user-logged-in"));

// Remove event handlers when no longer needed
btn.removeEventListener("click", handler);

// Listen once and auto-remove
btn.addEventListener("click", oneTimeHandler, { once: true });

// Access event details
btn.addEventListener("click", e =&gt; {
  console.log("clicked at", e.clientX, e.clientY);
  console.log("target:", e.target);
});</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-12-0-1-3': `
    <p>An event is something the browser notices and tells JavaScript about. The user clicks a button, the browser thinks "that was a click on button X" and fires a "click" event. If your code registered a handler for clicks on that button, the handler runs. If not, nothing happens.</p>
    <p>The pattern for every event is the same: pick the element, name the event, write the function. <code>addEventListener</code> wires them together. You don't actively "wait" — your code returns to normal life, and the handler only runs when (and if) the event happens.</p>
    <p>Events make the browser feel responsive. Without them, your script would run once at load and never again. With them, your script becomes a set of "ready to react" handlers — sitting quietly, waking up when the user does something.</p>
  `,

  /* 1.4 Mental model */
  'topics-12-0-1-4': `
    <p>Picture a building full of doorbells. Each doorbell (an element) can have any number of bells (event listeners) wired to ring under different conditions — a click, a hover, a key press. Until someone presses a doorbell, nothing happens. When the press happens, every bell wired to that condition rings (the handlers run).</p>
    <p>The wiring is done with <code>addEventListener</code>. You walk up to a doorbell, pick a condition ("ring this bell when someone clicks"), and attach the bell (your function). After that, you can leave — the bell waits, watching for the condition. When it triggers, the function runs.</p>
    <p>Multiple bells can be wired to the same doorbell, and one bell can listen on multiple doorbells. The browser handles the noticing; you decide what should happen. Events are the language for "something happened, do this."</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-12-0-1-5': `
<pre class="language-javascript"><code class="language-javascript">// HTML: &lt;button id="greet"&gt;Say hi&lt;/button&gt;
//        &lt;p id="greeting"&gt;&lt;/p&gt;

const btn = document.getElementById("greet");
const greeting = document.getElementById("greeting");

btn.addEventListener("click", () =&gt; {
  greeting.textContent = "Hello!";
});

// step by step at page load:
// 1. document.getElementById finds the button → btn is the &lt;button&gt; element
// 2. addEventListener registers the arrow function for "click" events on btn
// 3. registration finishes — no code is running yet
// 4. the script ends; the page is interactive but idle

// step by step when the user clicks the button:
// 1. user clicks
// 2. browser detects: "click on button#greet"
// 3. browser fires a "click" event on the button
// 4. the browser finds the handler we registered
// 5. the handler runs:
//      greeting.textContent = "Hello!";
// 6. the &lt;p&gt; on the page now shows "Hello!"
// 7. user sees "Hello!" appear instantly
// 8. waiting for the next click

// notice:
//   - the handler ran ONLY in response to the click
//   - the script that registered it had already finished
//   - the browser kept the handler ready until the event happened</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-12-0-2-0': `
    <p>If a handler isn't firing, log inside it:</p>
<pre class="language-javascript"><code class="language-javascript">btn.addEventListener("click", () =&gt; {
  console.log("clicked!");   // ← if this doesn't appear, the handler isn't running
  saveData();
});

// nothing logs?
//   - is the element you targeted actually the one being clicked?
//   - is the handler attached? (was the script ran too early?)
//   - did another script remove the handler?
//   - is something covering the element (CSS pointer-events: none)?

// log inside, then test by clicking. log silence is your signal.</code></pre>

    <p>Another common diagnostic: log the element you attached the handler to:</p>
<pre class="language-javascript"><code class="language-javascript">const btn = document.querySelector(".save");
console.log("attaching to:", btn);
btn?.addEventListener("click", handle);

// if "attaching to: null" → selector wrong or script ran too early
// if "attaching to: &lt;button ...&gt;" → handler should fire when clicked</code></pre>
  `,

  /* 2.1 The part that makes it click */
  'topics-12-0-2-1': `
    <p>An event isn't a function call you make — it's a function call you <em>set up</em> to happen later. Your script doesn't "wait" for the click; it registers a handler and moves on. The browser does the watching. When the event happens, the browser calls your function for you.</p>
    <p>This separation between "register" and "react" is the foundation of how interactive UI works. Your code lives in two halves: the setup half (running at load, attaching handlers), and the response half (handlers triggered by user actions later). Once you internalize this rhythm, almost every interactive pattern becomes "what event do I listen for, and what should happen when it fires?"</p>
  `,

  /* 2.2 Common confusions */
  'topics-12-0-2-2': `
    <p><strong>Confusion: thinking <code>addEventListener</code> runs the handler immediately</strong></p>
<pre class="language-javascript"><code class="language-javascript">btn.addEventListener("click", () =&gt; console.log("hi"));
// "hi" does NOT log right now.
// it logs only when the user CLICKS the button.

// addEventListener REGISTERS the handler for future events.
// the handler is dormant until the event happens.</code></pre>

    <p><strong>Confusion: passing function CALL instead of function REFERENCE</strong></p>
<pre class="language-javascript"><code class="language-javascript">btn.addEventListener("click", handleClick());
// the ( ) calls handleClick RIGHT NOW, and passes its RETURN VALUE to addEventListener
// usually that return value is undefined → no handler attached

// fix: pass the function itself, no parentheses
btn.addEventListener("click", handleClick);</code></pre>

    <p><strong>Confusion: handler not firing because of timing</strong></p>
<pre class="language-javascript"><code class="language-javascript">// &lt;head&gt;
//   &lt;script&gt;
//     document.getElementById("btn").addEventListener("click", handle);
//     // crashes — #btn doesn't exist yet
//   &lt;/script&gt;
// &lt;/head&gt;
// &lt;body&gt;&lt;button id="btn"&gt;Click&lt;/button&gt;&lt;/body&gt;

// fix: defer the script, place at end of body, or wait for DOMContentLoaded</code></pre>

    <p><strong>Confusion: handler runs for the wrong element</strong></p>
<pre class="language-javascript"><code class="language-javascript">document.addEventListener("click", () =&gt; console.log("clicked"));
// fires when ANY click happens on the page, not just on a specific element.

// fix: attach to the specific element you care about
document.querySelector(".save").addEventListener("click", () =&gt; { ... });</code></pre>

    <p><strong>Confusion: multiple handlers stacking up</strong></p>
<pre class="language-javascript"><code class="language-javascript">function render() {
  document.getElementById("btn").addEventListener("click", save);
}

render();
render();
render();
// now there are THREE click handlers — one click triggers save 3 times

// fix: attach handlers ONCE, outside of any re-render function</code></pre>

    <p><strong>Confusion: event vs handler vs listener — different names for the same idea</strong></p>
<pre class="language-javascript"><code class="language-javascript">// "event"      → the thing that happened (a click, a keypress)
// "handler"    → the function that runs in response
// "listener"   → another word for handler (especially with addEventListener)
// "callback"   → general term for a function passed to be called later

// in practice these are used interchangeably:
//   "the click handler"
//   "the click listener"
//   "the click callback"
// all mean: the function you registered to run when click fires.</code></pre>

    <p><strong>Confusion: thinking events "remember" past clicks</strong></p>
<pre class="language-javascript"><code class="language-javascript">// addEventListener doesn't have a backlog. it only catches events that fire
// AFTER it was registered.

// if a click happens before your handler is attached, the handler doesn't catch it.
// (this is why script timing matters — register handlers before the user can interact.)</code></pre>
  `,

  /* 2.3 Common mistakes */
  'topics-12-0-2-3': `
<pre class="language-javascript"><code class="language-javascript">btn.addEventListener("click", handle());
// the () invokes handle immediately, passes the return value to addEventListener
// fix: drop the parentheses — pass the function reference
btn.addEventListener("click", handle);</code></pre>

<pre class="language-javascript"><code class="language-javascript">btn.addEventListener("Click", handle);
// event names are case-sensitive and lowercase: "click", not "Click"
// fix:
btn.addEventListener("click", handle);</code></pre>

<pre class="language-javascript"><code class="language-javascript">btn.addEventListener("onclick", handle);
// "onclick" is the HTML attribute name; the event name is "click"
// fix:
btn.addEventListener("click", handle);</code></pre>

<pre class="language-javascript"><code class="language-javascript">document.querySelector(".btn").addEventListener("click", h);
// crashes if .btn doesn't exist
// fix:
document.querySelector(".btn")?.addEventListener("click", h);</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Script in &lt;head&gt; without defer
document.getElementById("btn").addEventListener("click", h);
// crashes — btn doesn't exist yet
// fix: defer, end-of-body, or DOMContentLoaded</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Re-attaching the same handler many times
function render() {
  btn.addEventListener("click", save);
}
render();
render();
// 2 listeners, one click triggers save twice
// fix: attach ONCE, not inside re-renders</code></pre>

<pre class="language-javascript"><code class="language-javascript">btn.addEventListener("click", () =&gt; { ... });
// later:
btn.removeEventListener("click", () =&gt; { ... });
// doesn't remove — different function reference
// fix: save the function, pass the SAME reference to remove
const handle = () =&gt; { ... };
btn.addEventListener("click", handle);
btn.removeEventListener("click", handle);</code></pre>

<pre class="language-javascript"><code class="language-javascript">btn.addEventListener("click", e =&gt; {
  console.log(e.value);   // undefined — events don't have .value
});
// fix: read from e.target (the element clicked)
btn.addEventListener("click", e =&gt; {
  console.log(e.target.value);
});</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Submitting a form and getting a page reload
form.addEventListener("submit", saveData);
// browser navigates after the handler — saveData runs but you lose state
// fix: prevent the default behavior
form.addEventListener("submit", e =&gt; {
  e.preventDefault();
  saveData();
});</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-12-0-3-0': `
<pre class="language-javascript"><code class="language-javascript">// Click
btn.addEventListener("click", () =&gt; console.log("clicked"));

// Click with event object
btn.addEventListener("click", e =&gt; console.log(e.target));

// Input
input.addEventListener("input", () =&gt; console.log(input.value));

// Change
select.addEventListener("change", e =&gt; console.log(e.target.value));

// Submit (with prevention)
form.addEventListener("submit", e =&gt; {
  e.preventDefault();
  saveForm();
});

// Focus / blur
input.addEventListener("focus", showHint);
input.addEventListener("blur", hideHint);

// Hover
card.addEventListener("mouseenter", () =&gt; card.classList.add("hover"));
card.addEventListener("mouseleave", () =&gt; card.classList.remove("hover"));

// Keyboard
document.addEventListener("keydown", e =&gt; {
  if (e.key === "Escape") closeModal();
});

// Scroll
window.addEventListener("scroll", () =&gt; console.log(window.scrollY));

// Resize
window.addEventListener("resize", () =&gt; console.log(window.innerWidth));

// Page lifecycle
window.addEventListener("load", initApp);
document.addEventListener("DOMContentLoaded", setup);

// Listener that only runs once
btn.addEventListener("click", oneTimeHandler, { once: true });

// Trigger event programmatically
btn.click();

// Multiple handlers on the same event
btn.addEventListener("click", h1);
btn.addEventListener("click", h2);

// Multiple events, same handler
const log = e =&gt; console.log(e.type);
input.addEventListener("focus", log);
input.addEventListener("blur", log);

// Many elements, same handler
document.querySelectorAll(".tab").forEach(tab =&gt; {
  tab.addEventListener("click", () =&gt; selectTab(tab));
});

// Stop listening
btn.removeEventListener("click", h);   // h must be the same reference

// Detect actual event source vs container
parent.addEventListener("click", e =&gt; {
  if (e.target.matches(".item")) handleItem(e.target);
});</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-12-0-3-1': `
    <p><strong>Example: save button</strong></p>
<pre class="language-javascript"><code class="language-javascript">document.querySelector("#save").addEventListener("click", async () =&gt; {
  const data = getFormData();
  await fetch("/api/save", { method: "POST", body: JSON.stringify(data) });
  showToast("Saved!");
});
// click triggers a save. one event, one action.</code></pre>

    <p><strong>Example: live character counter</strong></p>
<pre class="language-javascript"><code class="language-javascript">const textarea = document.querySelector("textarea");
const counter = document.querySelector(".char-count");

textarea.addEventListener("input", () =&gt; {
  counter.textContent = textarea.value.length + " / 500";
});
// every keystroke fires "input" — the counter updates in real time.</code></pre>

    <p><strong>Example: keyboard shortcuts</strong></p>
<pre class="language-javascript"><code class="language-javascript">document.addEventListener("keydown", e =&gt; {
  if (e.ctrlKey &amp;&amp; e.key === "s") {
    e.preventDefault();
    saveDocument();
  }
  if (e.key === "Escape") closeModal();
  if (e.key === "/") focusSearch();
});
// listening on document means the shortcut works no matter what's focused.</code></pre>

    <p><strong>Example: form submission with validation</strong></p>
<pre class="language-javascript"><code class="language-javascript">document.querySelector("form").addEventListener("submit", e =&gt; {
  e.preventDefault();   // stop the browser's default form submission

  const email = e.target.email.value.trim();
  if (!email) {
    showError("Email is required");
    return;
  }

  submitForm(email);
});
// "submit" fires when the form is submitted (Enter key or submit button).
// preventDefault stops the page from reloading.</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-12-0-3-2': `
    <ul>
      <li><strong><code>addEventListener</code></strong> → the method that wires elements to handlers</li>
      <li><strong>Event handlers</strong> → the functions that run in response</li>
      <li><strong>Event object</strong> → the argument passed to handlers, containing details about the event</li>
      <li><strong>Event types</strong> → click, input, submit, keydown, etc.</li>
      <li><strong>Event bubbling</strong> → events travel up through ancestor elements</li>
      <li><strong><code>preventDefault</code></strong> → stop the browser's default behavior (e.g., form submission)</li>
      <li><strong><code>removeEventListener</code></strong> → detach a handler when no longer needed</li>
      <li><strong>Event delegation</strong> → attach one handler to a parent for many children</li>
      <li><strong>Custom events</strong> → defining your own event types for app-level signals</li>
      <li><strong>Asynchronous nature</strong> → handlers run when events fire, not immediately</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-12-0-3-3': `
    <ul>
      <li><code>addEventListener</code></li>
      <li>Event object (<code>e</code>)</li>
      <li>Event types (click, input, submit, etc.)</li>
      <li>Event bubbling</li>
      <li><code>preventDefault</code></li>
      <li><code>removeEventListener</code></li>
      <li>Event delegation</li>
      <li>Custom events</li>
      <li>Asynchronous JavaScript</li>
      <li>DOMContentLoaded / load event</li>
    </ul>
  `,
  
});