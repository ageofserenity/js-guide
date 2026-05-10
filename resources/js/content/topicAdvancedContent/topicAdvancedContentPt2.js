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
// <body>
//   <h1>Welcome</h1>
//   <p>Hello, <strong>world</strong>!</p>
// </body>

// becomes a tree of nested DOM objects:
//
//   document
//    └── <html>
//         └── <body>
//              ├── <h1>
//              │    └── "Welcome"           ← text node
//              └── <p>
//                   ├── "Hello, "            ← text node
//                   ├── <strong>
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
//   <p>Hello</p>

// DOM:
//   an object representing <p>, with .textContent === "Hello"

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
// confused with: changing the <h1> on the page
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
// <body>
//   <h1>Welcome</h1>
//   <p class="message">Hello!</p>
// </body>

// JavaScript's view of that HTML, after the browser parses it:
console.log(document.body);
// <body>
//   <h1>Welcome</h1>
//   <p class="message">Hello!</p>
// </body>

// looks the same — but it's actually a tree of objects, not text.
console.log(document.querySelector("h1"));
// <h1>Welcome</h1>
console.log(typeof document.querySelector("h1"));
// "object" — JavaScript sees an object, not a string of HTML</code></pre>
    <p>The HTML is the input. The DOM is the parsed-and-ready version JavaScript can actually work with — every tag a real object, every attribute readable as a property, every change instantly reflected on screen.</p>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-11-1-0-2': `
<pre class="language-javascript"><code class="language-javascript">// HTML the developer wrote:
//
//   <ul id="menu">
//     <li>Home</li>
//     <li>About</li>
//   </ul>

// What JavaScript sees (a tree of related objects):
//
//   ul (object)
//   ├── id: "menu"
//   ├── children: [li1, li2]
//   ├── parentNode: <body>
//   ├── textContent: "HomeAbout"
//   ├── innerHTML: "<li>Home</li><li>About</li>"
//   └── methods: appendChild, remove, querySelector, ...
//
//        li1 (object)
//        ├── textContent: "Home"
//        ├── parentNode: <ul>
//        ├── nextSibling: li2
//        └── methods: ...
//
//        li2 (object)
//        ├── textContent: "About"
//        ├── parentNode: <ul>
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
//   <p>missing close tag
//   <p>another paragraph

// what the DOM looks like (the browser auto-closed the first <p>):
//   <p>missing close tag</p>
//   <p>another paragraph</p>

// what the developer wrote:
//   <table><tr><td>cell</td></tr></table>

// what the DOM looks like (browser auto-inserted <tbody>):
//   <table>
//     <tbody>
//       <tr><td>cell</td></tr>
//     </tbody>
//   </table>

// rule: when JavaScript queries the DOM, it sees what the BROWSER built —
// not necessarily what's literally in the source file.</code></pre>

    <p><strong>Once the DOM exists, the original HTML file is no longer in the loop.</strong> Anything the script does, it does to the DOM:</p>
<pre class="language-javascript"><code class="language-javascript">// reading what's currently shown:
const text = document.querySelector("p").textContent;
// → reads from the DOM, not from the file

// changing what's shown:
document.querySelector("p").textContent = "Updated";
// → writes to the DOM, not to the file
// → the file on disk is unchanged
// → the user sees the change immediately

// even reading "the HTML":
const html = document.body.innerHTML;
// → this returns a string GENERATED FROM the DOM
// → it might not be character-for-character identical to the original file</code></pre>

    <p><strong>Different selection methods give different views of the same DOM.</strong> The tree is one thing; the methods are different angles into it:</p>
<pre class="language-javascript"><code class="language-javascript">document.getElementById("menu")           // by id
document.querySelector("#menu")             // by CSS selector
document.getElementsByTagName("ul")[0]      // by tag, first one
document.querySelectorAll("ul")[0]          // by selector, first match

// all four can return the same <ul> element if the page only has one with id "menu".
// changing the element through any one of them changes "the same" element —
// they're all references to one object in the DOM tree.</code></pre>

    <p><strong>The DOM exposes things the HTML doesn't show.</strong> Computed styles, current state of inputs, current scroll position — all available through the DOM, none of it visible in the source HTML:</p>
<pre class="language-javascript"><code class="language-javascript">const input = document.querySelector("input[name=username]");

// HTML source:
//   <input name="username">

// what the DOM lets JavaScript read:
console.log(input.value);                 // current text typed by the user
console.log(input.checked);                // for checkboxes/radios
console.log(input.getBoundingClientRect()); // size and screen position
console.log(getComputedStyle(input).color); // actual color after CSS applied

// none of this is in the HTML file. it's runtime state the DOM exposes.</code></pre>

    <p><strong>Some HTML is in the file but not in the DOM.</strong> Comments, doctype declarations, and similar elements are usually parsed but mostly ignored by typical DOM queries:</p>
<pre class="language-javascript"><code class="language-javascript">// HTML source:
//   <!-- this comment isn't visible to most queries -->
//   <p>visible text</p>

// querySelectorAll("*") would skip the comment.
// document.querySelector("p") finds only the <p>.

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

// Question: "Why does my <textarea>'s value not show up in innerHTML?"
// Answer:   Because what the user TYPED isn't in the source HTML or the
//           initial DOM HTML — it's a runtime property (.value) the DOM tracks.

// every DOM-related question gets clearer once you stop conflating it with HTML.</code></pre>
  `,

  /* 1.2 Where you use it */
  'topics-11-1-1-2': `
<pre class="language-javascript"><code class="language-javascript">// HTML — the static starting point
// <h1 class="title">Hello</h1>

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
// the two might differ (auto-corrected tags, inserted <tbody>, etc.)</code></pre>
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
// <body>
//   <h1>Welcome</h1>
// </body>

// 2. After the browser parses, the DOM in memory looks like:
// (object) document
//   .body (object)
//     .children
//       (object) <h1>
//         .textContent: "Welcome"
//         .parentNode: <body>

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
// <p id="msg">Original</p>

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
//   <ul><li>One</li><li>Two</li></ul>

// after JavaScript adds an item:
const ul = document.querySelector("ul");
const li = document.createElement("li");
li.textContent = "Three";
ul.appendChild(li);

// now innerHTML reflects the CURRENT DOM:
console.log(ul.innerHTML);
// "<li>One</li><li>Two</li><li>Three</li>"

// it's NOT what was in the file — it's a string built from the DOM right now.</code></pre>

    <p><strong>Confusion: thinking the browser preserves the original HTML exactly</strong></p>
<pre class="language-javascript"><code class="language-javascript">// HTML source:
//   <p   class = "msg" >Hello</p>     ← extra spaces, weird formatting

// what the DOM has:
//   <p class="msg">Hello</p>           ← normalized

// the browser may:
//   - normalize whitespace
//   - reorder attributes
//   - auto-close tags
//   - insert missing wrappers (like <tbody> for tables)
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

// HTML:    <p id="x">Original</p>
// initial DOM: <p id="x">Original</p>
document.getElementById("x").textContent = "Changed";
// DOM now: <p id="x">Changed</p>
// HTML file: still says "Original"

// Reading from the DOM, not the file
const html = document.body.innerHTML;
// returns a string built from the LIVE DOM, including any JavaScript changes

// Writing the DOM affects only memory, not disk
document.body.innerHTML += "<p>injected</p>";
// page shows new paragraph; HTML file is unchanged

// Form input — exists only in the DOM, not in the source HTML
// HTML:  <input>
const input = document.querySelector("input");
// before user types: input.value === ""
// after user types "hi": input.value === "hi"
// the source HTML doesn't track this — only the live DOM does

// Computed styles — only available through the DOM
const el = document.querySelector(".target");
const styles = getComputedStyle(el);
console.log(styles.fontSize);   // browser-resolved final size

// Auto-corrected HTML
// File: <p>missing close
// DOM:  <p>missing close</p>   ← browser closed it for you
console.log(document.querySelector("p").outerHTML);
// will show the corrected version

// Live DOM via DevTools
// (in browser): right-click → Inspect → Elements panel
// shows what JavaScript sees right now, not what the file said

// HTML attribute vs DOM property — different views of the same thing
// HTML:  <a href="/about">link</a>
const a = document.querySelector("a");
a.getAttribute("href");   // "/about"
a.href;                    // "https://example.com/about"</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-11-1-3-1': `
    <p><strong>Example: live counter that updates the DOM, not the file</strong></p>
<pre class="language-javascript"><code class="language-javascript">// HTML:
// <span id="visits">0</span> visits

let count = parseInt(localStorage.getItem("visits") || "0");
count++;
document.getElementById("visits").textContent = count;
localStorage.setItem("visits", count);
// the DOM updates so the user sees the new count immediately.
// localStorage handles persistence — the HTML file never changes.</code></pre>

    <p><strong>Example: search filter — DOM changes, source HTML untouched</strong></p>
<pre class="language-javascript"><code class="language-javascript">function filterList(query) {
  const items = document.querySelectorAll("li");
  items.forEach(li => {
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
//   2. find <body> in the tree
//   3. you'll see class="dark-mode" listed
//   4. View Source would show the original (without dark-mode)

// the discrepancy isn't a bug — it's the difference between source HTML and live DOM.</code></pre>

    <p><strong>Example: form data that lives only in the DOM</strong></p>
<pre class="language-javascript"><code class="language-javascript">// HTML:
// <form>
//   <input name="email">
//   <button type="button" id="check">Check</button>
// </form>

document.getElementById("check").addEventListener("click", () => {
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



});