# Prompt 1 — JavaScript Learning System Structure, Organization, and Rules

Build a beginner-friendly JavaScript learning/teaching website.

This prompt is for the **structure, organization, layout behavior, accordion behavior, mobile behavior, clean code structure, and required content scope**.

Do **not** write the full deep lessons yet.  
The actual lesson content will be handled in Prompt 2.

Prompt 1 defines:

```txt
- how the website is organized
- how the sections are isolated
- how topics are isolated with accordions
- what belongs inside each section
- what belongs inside each topic/category
- how the codebase should be structured
- what teaching rules every lesson must follow
```

---

# Project Goal

Create an ADHD-friendly JavaScript learning system that helps a beginner understand:

```txt
- where JavaScript topics live
- how topics connect to each other
- how syntax works
- where each method/tool belongs
- how real website patterns are built
- how debugging fits into learning
```

This should not feel like a random cheat sheet.

It should feel like a structured learning app / reference system.

---

# Main Site Structure

The site should be organized into these major areas:

```txt
Before You Start: How This Guide Teaches

1. Big Picture
2. Core Mental Models
3. Main Topic Guides
4. Topic Combo Guide
5. Method / Snippet Reference
6. Real Website Patterns
7. Debugging / Error Guide
```

---

# Page / Section Isolation Requirement

This website should **not** be one giant scrolling page.

Use a **single-page app style behavior**:

```txt
- Use one main HTML file or one main app shell
- Only one major section/view is visible at a time
- Navigation switches between major section views
- Hidden sections should not visually clutter the page
- Topics inside each section are isolated with accordions
```

Do **not** create separate HTML pages for each major section unless specifically requested later.

Do **not** show all seven sections stacked on one long page.

Preferred experience:

```txt
Dashboard
├── Before You Start
├── Big Picture
├── Core Mental Models
├── Main Topic Guides
├── Topic Combo Guide
├── Method / Snippet Reference
├── Real Website Patterns
└── Debugging / Error Guide
```

When the user clicks a major section, they enter that isolated section view.

Example:

```txt
Dashboard → Main Topic Guides
Dashboard → Method / Snippet Reference
Dashboard → Debugging / Error Guide
```

---

# Topic Isolation Requirement

Inside each major section, individual topics/items should be isolated using **collapsible accordion panels**.

The goal is:

```txt
One topic open at a time.
Everything else stays collapsed.
```

Do **not** stack every topic fully open by default.

Bad:

```txt
Main Topic Guides
├── Variables full lesson open
├── Data Types full lesson open
├── Strings full lesson open
├── Numbers full lesson open
└── all lessons visible in one long scroll
```

Good:

```txt
Main Topic Guides
├── Variables collapsed
├── Data Types collapsed
├── Strings open
│   └── only Strings content is visible
├── Numbers collapsed
└── Functions collapsed
```

Accordion requirements:

```txt
- show the topic title
- show a short one-line preview/description
- expand to reveal full content
- collapse when user is done
- allow only one topic open at a time if possible
- be easy to tap on mobile
- use accessible buttons
- include aria-expanded
- include clear open/close states
```

---

# Global Teaching Rules

These rules apply to all sections and all future lesson content.

## 1. No Naked Code

Never show code without teaching support.

Bad:

```js
"hello"
'hello'
`hello`
```

Good:

```js
"hello" // double quotes
'hello' // single quotes
`hello` // backticks / template literal
```

Better:

```js
const name = "Os"; // stores text in a variable

`Hello, ${name}` // correct: backticks allow ${}
"Hello, ${name}" // wrong: double quotes do not insert variables
```

## 2. Every Code Example Must Teach

Every code block should include at least one of these:

```txt
- inline comments
- anatomy / breakdown
- syntax details
- wrong vs right comparison
- debugging clue
- step-by-step explanation
- what JavaScript is thinking
```

## 3. Tiny Syntax Details Must Be Explained

The guide must explain small syntax details when they matter, including:

```txt
quotes: " " and ' '
backticks: ` `
template interpolation: ${}
parentheses: ()
curly braces: {}
square brackets: []
dots: .
commas: ,
colons: :
semicolons: ;
class selectors: ".btn"
id selectors: "#menu"
tag selectors: "button"
return
break
continue
event
.value
===
=
+=
i++
array indexes starting at 0
```

## 4. Use Wrong vs Right Examples

When beginners often confuse something, show both wrong and right examples.

Example:

```js
button.addEventListener("click", openMenu); // correct: passes the function
button.addEventListener("click", openMenu()); // wrong: runs immediately
```

## 5. Include Debugging Clues

Every important topic, method, combo, and pattern should include a small debugging clue.

Examples:

```txt
If querySelector() returns null, the selector did not find anything.
If input.value is empty, you may be reading it before the user typed.
If ${name} prints literally, you probably used quotes instead of backticks.
If a function gives undefined, check whether it has a return.
```

## 6. Use “Click Moment” Callouts

Major topics should include a short “Click Moment” that explains the thing in the simplest possible way.

Example:

```txt
Click Moment:
if = first question
else if = backup question
else = fallback if nothing matched
```

---

# Before You Start — How This Guide Teaches

## Purpose

This section explains how the entire guide works.

## Must Include

```txt
- This is not a normal cheat sheet.
- This is a learning system.
- JavaScript topics overlap often.
- The guide explains both the topic and its connections.
- Code examples should not be naked code.
- Tiny syntax details matter.
- Debugging is part of learning JavaScript.
- The learner can browse by topic, combo, method, pattern, or error.
```

## Suggested Accordion/Card Items

```txt
- How this guide works
- No naked code
- Syntax details matter
- Wrong vs right examples
- Debugging is part of learning
- How to browse the guide
```

---

# Section 1 — Big Picture

## Purpose

Explain what JavaScript is doing overall before the learner gets into detailed topics.

## Section Behavior

This can be one isolated section view.

It may use cards or small accordions.

## Required Scope

```txt
- What JavaScript is
- What JavaScript does on websites
- HTML vs CSS vs JS
- Input → logic → output
- Why JavaScript topics overlap
- How to read JavaScript code
- How JavaScript connects to the browser
```

## Suggested Accordion/Card Items

```txt
- What JavaScript is
- HTML vs CSS vs JS
- Input → Logic → Output
- Why JS topics overlap
- How to read JS code
- How JS connects to the browser
```

---

# Section 2 — Core Mental Models

## Purpose

Explain the main “jobs” JavaScript does.

This section gives the learner mental folders before they learn full topics.

## Section Behavior

Use a grid/list of accordion cards.

Each mental model can expand in place.

## Mental Model Card Structure

Each mental model card should include:

```txt
- mental model name
- short meaning
- plain English explanation
- tiny teaching code example
- what it connects to
- click moment
```

## Required Mental Models and Scope

### Values

Must include:

```txt
- what values are
- values as the actual information JS works with
- strings as text values
- numbers as numeric values
- booleans as true/false values
- arrays as list values
- objects as grouped data values
- null as intentionally empty
- undefined as not assigned/missing
- value vs variable
- literal values
- values returned from functions
- values from form inputs
- values from APIs
- values displayed in the DOM
- connects to variables, functions, if/else, arrays, objects, DOM -->
```

### Storage

Must include:

```txt
- variables as storage containers
- let
- const
- assigning values
- reassigning values
- storing DOM elements
- storing function results
- storing arrays/objects
- localStorage as browser storage
- variable memory vs browser storage
- scope as where storage can be accessed
- connects to values, functions, events, forms, localStorage
```

### Actions

Must include:

```txt
- functions as reusable actions
- methods as actions attached to values/objects
- calling functions
- passing functions
- event handlers as actions that run later
- return values
- actions that change DOM
- actions that transform arrays/strings
- connects to functions, methods, events, arrays, DOM, async
```

### Decisions

Must include:

```txt
- decisions as yes/no checks
- if
- else if
- else
- switch
- comparisons
- booleans
- truthy/falsy
- logical operators
- validation decisions
- UI state decisions
- connects to booleans, forms, events, functions, DOM
```

### Repetition

Must include:

```txt
- repeating code
- loops
- for loop
- while loop
- forEach()
- map()
- looping arrays
- looping strings
- rendering repeated DOM content
- indexes
- current item
- connects to arrays, strings, DOM, functions, if/else
```

### Collections

Must include:

```txt
- collections as groups of data
- arrays
- objects
- sets
- maps
- arrays of objects
- nested data
- collections from APIs
- collections displayed as cards/lists
- connects to loops, array methods, objects, DOM rendering, JSON
```

### Page Control

Must include:

```txt
- DOM as JS view of HTML
- selecting elements
- changing text
- changing classes
- changing styles
- creating/removing elements
- querySelector()
- textContent
- classList
- null when not found
- connects to variables, DOM, events, forms, CSS
```

### User Interaction

Must include:

```txt
- events
- clicks
- typing/input
- form submission
- event listeners
- event object
- event.target
- preventDefault()
- UI feedback
- connects to DOM, functions, forms, input values, if/else
```

### Waiting

Must include:

```txt
- code that takes time
- timers
- setTimeout()
- promises
- fetch
- async/await
- API data
- loading states
- errors while waiting
- connects to functions, promises, JSON, APIs, DOM, try/catch
```

### Errors

Must include:

```txt
- errors as clues
- syntax errors
- reference errors
- type errors
- logic errors
- console tools
- reading error messages
- debugging values
- debugging DOM
- debugging async
- connects to everything, console, debugging guide
```

---

# Section 3 — Main Topic Guides

## Purpose

Teach each big JavaScript topic deeply by itself.

This is the main learning section.

## Section Behavior

Use topic accordions.

Each topic accordion expands to show the full Main Topic Teaching Card structure.

## Main Topic Teaching Card Structure

```txt
1. What it is
2. Syntax
3. Syntax Details That Matter
4. Anatomy / Breakdown
5. What problem it solves
6. Why use it
7. Where you use it
8. Plain English explanation
9. Mental model
10. Step-by-step walkthrough
11. Debugging clue
12. The part that makes it click
13. Common confusions
14. Common mistakes
15. Tiny examples
16. Real website uses
17. Connects to
18. See also
```

## Required Topics and Scope

### 3.1 Variables

Must include:

```txt
- what variables are
- what variables are for
- variable as a storage container
- let
- const
- var only as historical/context warning
- declaring a variable
- assigning a value
- reassigning a value
- when const can still hold arrays/objects that change internally
- naming variables
- camelCase
- meaningful names
- storing strings
- storing numbers
- storing booleans
- storing arrays
- storing objects
- storing DOM elements
- storing function results
- undefined variables
- variables inside functions
- variables outside functions
- scope basics
- common mistakes: forgetting let/const, misspelling names, using before creating, reassigning const, confusing variable name vs string text
- debugging variables: console.log(variable), typeof variable, checking spelling, checking scope
```

### 3.2 Data Types

Must include:

```txt
- what data types are
- why data types matter
- primitive vs reference types, beginner-friendly only
- strings
- numbers
- booleans
- null
- undefined
- arrays
- objects
- typeof
- string vs number
- boolean values
- empty values
- missing values
- arrays as lists
- objects as grouped data
- how data types affect behavior: "25" + 5 vs 25 + 5
- common mistakes: thinking "25" is a number, confusing null and undefined, using array methods on non-arrays, using string methods on non-strings
- debugging data types: typeof, Array.isArray(), console.log()
```

### 3.3 Strings

Must include:

```txt
- what strings are
- strings as text
- double quotes: "hello" // double quotes
- single quotes: 'hello' // single quotes
- backticks: `hello` // backticks / template literal
- when to use double quotes
- when to use single quotes
- when to use backticks
- escaping quotes
- template literals
- ${} interpolation
- ${} only working inside backticks
- string concatenation with +
- template literals vs concatenation
- string indexes
- indexes starting at 0
- .length
- spaces count as characters
- accessing characters with bracket notation
- common string methods overview: trim(), includes(), toLowerCase(), toUpperCase(), slice(), replace(), split()
- strings from form inputs
- strings in DOM text
- string vs variable confusion
- string vs number confusion
- common mistakes: forgetting quotes, using ${} inside normal quotes, quote conflicts, expecting .length to count words, using string methods on non-strings
- debugging strings: console.log(), typeof, checking hidden spaces, checking quotes/backticks
```

### 3.4 Numbers

Must include:

```txt
- what numbers are in JavaScript
- whole numbers
- decimal numbers
- negative numbers
- number literals
- basic math operators: +, -, *, /, %, **
- order of operations
- parentheses in math
- number vs string number: 25 vs "25"
- converting strings to numbers: Number(), parseInt(), parseFloat()
- rounding numbers: Math.round(), Math.floor(), Math.ceil()
- formatting numbers: toFixed()
- random numbers: Math.random()
- min and max: Math.min(), Math.max()
- NaN
- Infinity
- decimal precision issues
- form input values starting as strings
- common mistakes: "25" + 5 becoming "255", forgetting to convert input values, expecting perfect decimal math, using parseInt when decimals matter
- debugging numbers: typeof, Number.isNaN(), Number.isFinite(), console.log()
- real website uses: prices, totals, counters, scores, quantities, ratings, timers, percentages
```

### 3.5 Booleans

Must include:

```txt
- what booleans are
- true
- false
- booleans as yes/no values
- comparisons returning booleans
- boolean variables: isOpen, isLoggedIn, hasError
- logical operators: &&, ||, !
- truthy and falsy
- toggle states
- booleans in if statements
- booleans in forms
- booleans in UI state
- common mistakes: using strings "true"/"false" instead of booleans, confusing = with ===, overcomplicating boolean checks, misunderstanding !
- debugging booleans: console.log(condition), checking comparison results, checking truthy/falsy values
```

### 3.6 Operators

Must include:

```txt
- what operators are
- arithmetic operators: +, -, *, /, %, **
- assignment operators: =, +=, -=, *=, /=
- comparison operators: ===, !==, >, <, >=, <=
- logical operators: &&, ||, !
- increment/decrement: i++, i--
- string concatenation with +
- difference between = and ===
- operator precedence basics
- common mistakes: using = instead of ===, misunderstanding !, confusing += with +, expecting + to always do math
- debugging operators: log both sides of comparison, log final condition
```

### 3.7 If / Else

Must include:

```txt
- what conditionals are
- if
- else if
- else
- switch
- condition inside parentheses
- code block inside curly braces
- if as the first question
- else if as backup question
- else as fallback
- else does not need parentheses
- condition order matters
- only one branch runs in if/else if/else chain
- separate if statements vs else if chain
- comparison operators in conditions
- logical operators in conditions
- nested if statements
- guard clauses, beginner-friendly only
- common mistakes: using = instead of ===, putting condition on else, wrong order of conditions, forgetting curly braces, expecting all branches to run
- debugging if/else: log the condition, log values being compared, check branch order
```

### 3.8 Loops

Must include:

```txt
- what loops are
- why loops exist
- repeating code
- for loop
- while loop
- for...of, beginner-friendly intro
- nested loops
- loop through arrays
- loop through strings
- loop through DOM lists
- loop counter variable
- i = 0
- i < array.length
- i++
- indexes starting at 0
- current item
- break
- continue
- infinite loops
- difference between for loop and forEach()
- common mistakes: off-by-one errors, using <= instead of <, forgetting i++, infinite loops, confusing index with item
- debugging loops: console.log(i), console.log(current item), check loop condition
```

### 3.9 Functions

Must include:

```txt
- what functions are
- why functions exist
- reusable actions
- function declaration
- function expression
- arrow function
- function name
- function body
- calling a function
- referencing a function without calling it
- parentheses when calling
- parameters
- arguments
- return values
- console.log() vs return
- scope
- local variables
- global variables
- functions using outside variables
- functions receiving strings
- functions receiving numbers
- functions receiving arrays
- functions receiving objects
- functions inside event listeners
- callback functions
- higher-order functions, beginner-friendly only
- function factories
- common mistakes: forgetting to call the function, calling a function too early, missing return, confusing parameter and argument, thinking console.log returns a value, scope confusion
- debugging functions: console.log inside the function, checking arguments, checking returned value, checking whether function runs
```

### 3.10 Arrays

Must include:

```txt
- what arrays are
- arrays as lists
- array syntax []
- array items/elements
- commas between items
- indexes starting at 0
- first item
- last item
- .length
- reading items with bracket notation
- updating items
- adding items: push(), unshift()
- removing items: pop(), shift()
- slice()
- splice()
- looping arrays
- forEach()
- map()
- filter()
- reduce(), beginner-friendly intro
- includes()
- find()
- array of strings
- array of numbers
- array of objects
- nested arrays, beginner-friendly only
- mutation vs returning new array
- common mistakes: thinking first item is index 1, using wrong index, expecting map/filter to change original, confusing item and index
- debugging arrays: console.log(array), console.table(array), Array.isArray(), check .length
```

### 3.11 Objects

Must include:

```txt
- what objects are
- objects as grouped related data
- object syntax {}
- key/value pairs
- properties
- values
- commas between properties
- dot notation
- bracket notation
- when bracket notation is needed
- adding properties
- updating properties
- deleting properties
- methods inside objects
- this, beginner-friendly intro only
- nested objects
- arrays of objects
- object property missing = undefined
- Object.keys()
- Object.values()
- Object.entries()
- common mistakes: forgetting commas, using dot notation for dynamic keys, misspelling property names, confusing object and array syntax, accessing nested data incorrectly
- debugging objects: console.log(object), console.table(), check property spelling, check if value is undefined
```

### 3.12 DOM

Must include:

```txt
- what the DOM is
- DOM as JavaScript’s view of HTML
- document
- selecting elements: getElementById(), querySelector(), querySelectorAll()
- selector syntax: "button" tag selector, ".btn" class selector, "#menu" id selector
- querySelector returns one element
- querySelectorAll returns many elements
- NodeList basics
- changing text: textContent, innerHTML warning/basic use
- changing styles: style, classList
- adding classes
- removing classes
- toggling classes
- creating elements: createElement()
- adding elements: appendChild(), append()
- removing elements
- DOM loaded timing
- null when element is not found
- common mistakes: missing dot for class, missing # for id, using querySelectorAll like one element, script running before HTML exists, using innerHTML unsafely
- debugging DOM: console.log(selectedElement), check null, inspect HTML, check selector spelling
```

### 3.13 Events

Must include:

```txt
- what events are
- events as user/browser actions
- addEventListener()
- event type as string: "click", "input", "submit", "mouseover", "keydown"
- callback function
- function reference vs function call
- event object
- event.target
- click events
- input events
- submit events
- preventDefault()
- events on forms
- events on buttons
- events on inputs
- multiple event listeners
- removing event listeners, beginner-friendly intro
- common mistakes: forgetting quotes around event type, calling function immediately, selecting element before it exists, forgetting preventDefault on forms, using wrong event type
- debugging events: console.log("clicked"), console.log(event), console.log(event.target), check selected element
```

### 3.14 Forms

Must include:

```txt
- what forms are
- how JS works with forms
- form element
- input elements
- labels, beginner-friendly mention
- submit button
- selecting form
- selecting inputs
- .value
- input values usually being strings
- submit event
- input event
- preventDefault()
- validation
- empty string checks
- trim()
- checking includes()
- showing error messages
- clearing error messages
- creating an object from form data
- adding form data to an array
- saving form data to localStorage
- common mistakes: forgetting .value, reading value too early, forgetting preventDefault(), treating input number as real number, selecting wrong input
- debugging forms: console.log(input.value), check if submit event runs, check if page refreshes
```

### 3.15 Browser Storage

Must include:

```txt
- what browser storage is
- localStorage
- sessionStorage
- difference between localStorage and sessionStorage
- key/value storage
- values stored as strings
- setItem()
- getItem()
- removeItem()
- clear()
- checking stored values in DevTools
- saving strings
- saving booleans as strings
- saving arrays/objects with JSON.stringify()
- reading arrays/objects with JSON.parse()
- localStorage returning null if key does not exist
- common mistakes: trying to store object directly, forgetting JSON.stringify(), forgetting JSON.parse(), misspelling key names, expecting localStorage to store real booleans/numbers automatically
- debugging storage: console.log(localStorage.getItem(key)), inspect Application tab, check key spelling
```

### 3.16 JSON

Must include:

```txt
- what JSON is
- JSON as data text
- JSON vs JavaScript object
- why JSON exists
- where JSON appears: APIs, localStorage, config/data files
- JSON.stringify()
- JSON.parse()
- stringify = JS value to JSON string
- parse = JSON string to JS value
- JSON syntax rules: double quotes for keys/strings, no functions, no comments
- storing arrays/objects in localStorage
- reading API data
- common mistakes: forgetting stringify before storage, forgetting parse after storage, invalid JSON, confusing JSON string with JS object
- debugging JSON: console.log(typeof value), try/catch around parse, inspect raw stored string
```

### 3.17 Async

Must include:

```txt
- what async means
- code that takes time
- setTimeout()
- setInterval(), brief mention
- promises
- promise states, beginner-friendly: pending, fulfilled, rejected
- then()
- catch()
- finally()
- fetch()
- response
- response.json()
- async function
- await
- try/catch with async
- waiting for API data
- using data after it loads
- loading states
- error states
- common mistakes: forgetting await, using data before it exists, forgetting response.json(), not handling errors, confusing promise with resolved data
- debugging async: console.log before/after await, check Network tab, catch errors
```

### 3.18 Errors

Must include:

```txt
- what errors are
- errors as clues
- syntax errors
- reference errors
- type errors
- logic errors
- Error object
- TypeError
- ReferenceError
- console.error()
- try/catch
- throw, beginner-friendly intro
- reading error messages
- file name
- line number
- stack trace, beginner-friendly
- common errors: is not defined, Cannot read properties of null, Cannot read properties of undefined, function is not a function, Unexpected token
- common mistakes: ignoring the error message, only looking at the last line, not checking the line number, not logging values
- debugging errors: read the message, find the line, log the value, check type, simplify the code
```

---

# Section 4 — Topic Combo Guide

## Purpose

Show how each main JavaScript topic combines with other topics.

This section should answer:

```txt
How does this topic work with other topics?
What does the code look like when they combine?
What usually breaks?
Where would this appear on a real website?
```

## Section Behavior

Use grouped accordions.

First level: combo group accordion.  
Second level: individual combo accordion.

## Topic Combo Card Structure

```txt
1. What this combo means
2. Syntax / code shape
3. Syntax Details That Matter
4. Quick breakdown
5. Why these topics work together
6. Code example
7. Real website use
8. Connects to
9. Debugging clue
10. Common mistakes
11. See also
```

## Required Combo Groups and Scope

### 4.1 Variables Combos

Must include:

```txt
Variables + Strings
- storing text
- string vs variable name
- template literals with variables
- DOM text messages

Variables + Numbers
- storing numeric values
- counters
- totals
- string number vs real number

Variables + Booleans
- storing true/false state
- isOpen / isActive / hasError
- toggles

Variables + Arrays
- storing lists
- accessing array values
- updating arrays

Variables + Objects
- storing grouped data
- accessing properties
- user/product/card data

Variables + Functions
- variables inside functions
- variables outside functions
- storing function results

Variables + If / Else
- checking variable values
- validation
- conditional messages

Variables + Loops
- loop counters
- current values
- repeated updates

Variables + DOM
- storing selected elements
- changing selected elements
- null debugging

Variables + Events
- variables used inside event handlers
- event-driven state changes
```

### 4.2 Functions Combos

Must include:

```txt
Functions + Variables
- using variables inside functions
- local vs outside variables
- returned values stored in variables

Functions + Parameters
- placeholders
- reusable input
- arguments

Functions + Return
- sending values back
- return vs console.log

Functions + If / Else
- decisions inside functions
- validation helpers

Functions + Loops
- functions that repeat work
- loop inside a function

Functions + Arrays
- functions receiving arrays
- array methods using callbacks

Functions + Objects
- functions receiving objects
- reading object properties

Functions + DOM
- functions that update HTML
- reusable DOM updates

Functions + Events
- event handler functions
- passing function references

Functions + Forms
- validation functions
- form submit handlers

Functions + Async
- async functions
- fetch helpers
- try/catch
```

### 4.3 Arrays Combos

Must include:

```txt
Arrays + Variables
- storing arrays in variables
- updating array variables

Arrays + Indexes
- first item
- last item
- index starts at 0

Arrays + Loops
- for loops
- forEach()
- current item

Arrays + Functions
- functions that process arrays
- callbacks

Arrays + Array Methods
- map()
- filter()
- reduce()
- find()
- includes()

Arrays + Objects
- arrays of objects
- product/user/card data

Arrays + DOM
- rendering lists/cards
- creating repeated HTML

Arrays + Events
- updating arrays from clicks/forms
- deleting items

Arrays + LocalStorage
- saving arrays
- JSON.stringify()
- JSON.parse()

Arrays + JSON
- arrays from APIs
- arrays as JSON data
```

### 4.4 Objects Combos

Must include:

```txt
Objects + Variables
- storing objects
- object references

Objects + Properties
- key/value pairs
- dot notation
- bracket notation

Objects + Methods
- functions inside objects
- this intro only

Objects + Arrays
- arrays of objects
- nested data

Objects + Functions
- passing objects into functions
- returning objects

Objects + Loops
- looping Object.keys()
- looping Object.entries()

Objects + DOM
- displaying object data
- product/user cards

Objects + JSON
- stringify/parse objects
- storage/API data

Objects + APIs
- API responses as objects
- nested response data
```

### 4.5 Strings Combos

Must include:

```txt
Strings + Variables
- storing text
- string vs variable
- template literals

Strings + Indexes
- character positions
- index starts at 0

Strings + Loops
- looping through characters

Strings + If / Else
- checking text
- validation
- includes()

Strings + String Methods
- trim()
- includes()
- replace()
- split()
- toLowerCase()

Strings + Forms
- input values as strings
- trim spaces
- validation

Strings + Input Values
- .value
- reading typed text

Strings + DOM Text
- textContent
- dynamic messages
- template literals
```

### 4.6 Booleans Combos

Must include:

```txt
Booleans + Variables
- isOpen / isActive / hasError

Booleans + If / Else
- branching with true/false

Booleans + Comparisons
- comparisons return booleans

Booleans + Logical Operators
- &&, ||, !

Booleans + Functions
- functions returning true/false

Booleans + Forms
- validation states

Booleans + Events
- toggles after click

Booleans + Toggle States
- menu open/closed
- dark mode on/off
```

### 4.7 If / Else Combos

Must include:

```txt
If / Else + Variables
- checking stored values

If / Else + Booleans
- true/false decisions

If / Else + Comparisons
- ===, >, <, >=, <=

If / Else + Functions
- decisions inside reusable logic

If / Else + Loops
- conditional work while looping

If / Else + Arrays
- checking length
- checking includes/find results

If / Else + Strings
- checking empty strings
- includes()

If / Else + Forms
- validation

If / Else + Events
- user action decisions

If / Else + DOM
- show/hide messages
- add/remove classes
```

### 4.8 Loops Combos

Must include:

```txt
Loops + Variables
- counters
- accumulated values

Loops + Arrays
- repeat through list

Loops + Strings
- repeat through characters

Loops + Objects
- Object.keys()
- Object.entries()

Loops + If / Else
- checking each item

Loops + Functions
- reusable loop logic

Loops + DOM
- create repeated elements

Nested Loops
- comparing two lists
- grid/repeated combinations
```

### 4.9 DOM Combos

Must include:

```txt
DOM + Variables
- store selected elements

DOM + Functions
- reusable DOM updates

DOM + Events
- click/input/submit behavior

DOM + If / Else
- conditional UI updates

DOM + Arrays
- render lists/cards

DOM + Objects
- display object data

DOM + Forms
- read and show input

DOM + CSS Classes
- classList add/remove/toggle

DOM + Browser APIs
- localStorage
- fetch results
```

### 4.10 Events Combos

Must include:

```txt
Events + DOM
- selected elements respond to events

Events + Functions
- handler functions

Events + Variables
- update state values

Events + If / Else
- decide what happens after action

Events + Forms
- submit/input events

Events + Input Values
- reading user typed values

Events + Arrays
- add/remove/filter list data

Events + Objects
- event-driven object updates

Events + LocalStorage
- save after user action
```

### 4.11 Forms Combos

Must include:

```txt
Forms + DOM
- select form/input/error elements

Forms + Events
- submit/input events

Forms + Input Values
- .value
- trim()

Forms + Variables
- store typed values

Forms + If / Else
- validation

Forms + Functions
- reusable validation

Forms + Objects
- create form data objects

Forms + Arrays
- add submitted data to list

Forms + LocalStorage
- save submitted data
```

### 4.12 Async Combos

Must include:

```txt
Async + Functions
- async functions
- reusable data loading

Async + Promises
- pending/fulfilled/rejected

Async + Fetch
- API requests

Async + JSON
- response.json()

Async + Try / Catch
- handle errors

Async + DOM
- render data after loading

Async + Arrays
- API lists

Async + Objects
- API objects/nested data
```

## Redundancy Rule

Write the full combo card only once.

If the reverse combo appears elsewhere, link back to the original.

Example:

```txt
Variables + DOM = full card under Variables

DOM + Variables = “See Variables + DOM”
```

---

# Section 5 — Method / Snippet Reference

## Purpose

Look up one specific JavaScript method, property, syntax piece, or snippet.

This section is closer to a reference, but it still must teach.

## Section Behavior

Use category accordions first, then method/tool accordions inside.

Example:

```txt
Method / Snippet Reference
├── DOM Methods
│   ├── querySelector()
│   ├── querySelectorAll()
│   └── createElement()
├── String Methods / Properties / Syntax Tools
│   ├── length
│   ├── trim()
│   ├── template literals
│   └── ${} interpolation
└── Array Methods
    ├── push()
    ├── map()
    └── filter()
```

## Method / Snippet Card Structure

```txt
1. What it does
2. Syntax
3. Syntax / Parameter Details That Matter
4. Anatomy / Breakdown
5. What problem it solves
6. Why use it
7. Where you use it
8. Tiny example
9. Real website use
10. The part that makes it click
11. Connects to
12. Debugging clue
13. Common mistakes
14. See also
```

## Required Categories and Scope

### 5.1 DOM Methods

```txt
getElementById()
- id selection
- no # needed
- returns one element or null

querySelector()
- CSS selector string
- .class, #id, tag
- returns first match or null

querySelectorAll()
- returns NodeList
- multiple elements
- forEach on NodeList

createElement()
- creates new element in memory
- does not display until appended

appendChild()
- adds child element
- moves existing node if reused

append()
- can append nodes or strings, if included

remove()
- removes element from DOM

cloneNode()
- shallow vs deep clone

setAttribute()
- add/update attribute

getAttribute()
- read attribute

removeAttribute()
- remove attribute
```

### 5.2 DOM Properties

```txt
textContent
- safe text changes
- does not parse HTML

innerHTML
- inserts HTML
- security warning

style
- inline style changes
- CSS property camelCase

className
- replaces full class string

classList
- add()
- remove()
- toggle()
- contains()

value
- form input value
- usually string
```

### 5.3 Event Methods / Properties

```txt
addEventListener()
- event type string
- callback
- function reference vs call
- event object

preventDefault()
- stops default browser behavior
- forms/page refresh

event.target
- element that triggered event

event.currentTarget, optional beginner intro
- element listener is attached to
```

### 5.4 Console

```txt
console.log()
- inspect values

console.warn()
- warning messages

console.error()
- error messages

console.table()
- view arrays/objects as table

console.dir()
- inspect object/DOM structure

typeof
- check type

debugger
- pause execution
```

### 5.5 Window / Browser

```txt
window.innerWidth
window.innerHeight
window.location.href
alert()
confirm()
prompt()
setTimeout()
setInterval()
clearTimeout()
clearInterval()
```

### 5.6 Storage

```txt
localStorage.setItem()
localStorage.getItem()
localStorage.removeItem()
localStorage.clear()
sessionStorage.setItem()
sessionStorage.getItem()
sessionStorage.removeItem()
sessionStorage.clear()
JSON.stringify() connection
JSON.parse() connection
null if missing key
```

### 5.7 Array Methods

```txt
push()
pop()
shift()
unshift()
slice()
splice()
map()
filter()
reduce()
forEach()
includes()
indexOf()
find()
findIndex()
sort()
reverse()
some()
every()
join()
```

Each array method should later explain:

```txt
- mutates original or returns new value
- callback parameters if used
- common mistakes
- real website use
```

### 5.8 String Methods / Properties / Syntax Tools

```txt
length
charAt()
bracket access string[index]
includes()
indexOf()
slice()
substring()
toLowerCase()
toUpperCase()
trim()
replace()
replaceAll(), if included
split()
startsWith()
endsWith()
repeat()
template literals
${} interpolation
escape characters
```

### 5.9 Object Methods

```txt
Object.keys()
Object.values()
Object.entries()
Object.assign()
Object.freeze()
Object.seal()
Object.is()
hasOwnProperty(), optional/beginner mention
structuredClone(), optional modern mention
```

### 5.10 Number / Math

```txt
Number()
Number.parseInt()
Number.parseFloat()
toFixed()
toString()
Number.isInteger()
Number.isNaN()
Number.isFinite()
Math.PI
Math.round()
Math.ceil()
Math.floor()
Math.max()
Math.min()
Math.random()
Math.sqrt()
Math.pow()
Math.abs()
```

### 5.11 Date

```txt
new Date()
getFullYear()
getMonth()
getDate()
getDay()
getHours()
getMinutes()
getSeconds()
toISOString()
toLocaleDateString()
toLocaleTimeString()
Date.now()
month index starts at 0
```

### 5.12 JSON

```txt
JSON.parse()
JSON.stringify()
valid JSON syntax
JSON and localStorage
JSON and APIs
try/catch around parse
```

### 5.13 RegExp

```txt
test()
exec()
match()
replace()
search()
split()
flags: i, g
basic pattern explanation
```

### 5.14 Promise / Async

```txt
Promise
Promise.resolve()
Promise.reject()
Promise.all()
Promise.race()
then()
catch()
finally()
async
await
fetch()
response.json()
try/catch
```

### 5.15 Set / Map

```txt
Set
add()
has()
delete()
clear()
forEach()

Map
set()
get()
has()
delete()
clear()
forEach()
keys()
values()
entries()
```

### 5.16 Special / Advanced

```txt
Symbol
Error
TypeError
ReferenceError
ArrayBuffer
Uint8Array
Float32Array
Intl.NumberFormat()
Intl.DateTimeFormat()
URL
URLSearchParams / searchParams
Canvas
getContext("2d")
basic canvas drawing methods
```

---

# Section 6 — Real Website Patterns

## Purpose

Show how JavaScript pieces combine into real website features.

This section should feel project-based.

## Section Behavior

Use pattern accordions.

Each pattern accordion expands into a project-style walkthrough.

## Real Website Pattern Card Structure

```txt
1. Pattern name
2. What it does
3. Syntax / code shape
4. Syntax Details That Matter
5. What problem it solves
6. Topics used
7. Code example
8. Step-by-step walkthrough
9. What JS is thinking
10. Debugging clue
11. Common mistakes
12. Variations
13. See also
```

## Required Patterns and Scope

### 6.1 Button Click

```txt
- select button
- add click listener
- callback function
- change text or class
- console log test
- function reference vs function call
- null selector debugging
```

### 6.2 Mobile Menu

```txt
- select menu button
- select menu/nav
- click event
- classList.toggle()
- boolean open/closed state, optional
- aria-expanded, accessibility mention
- close menu option
- responsive/mobile behavior
- common debugging
```

### 6.3 FAQ Accordion

```txt
- select question buttons
- click event
- show/hide answer
- classList.toggle()
- only one open at a time, optional
- aria-expanded
- DOM traversal, beginner-friendly
- common debugging
```

### 6.4 Form Validation

```txt
- select form
- select inputs
- select error message area
- submit event
- preventDefault()
- input.value
- trim()
- empty string check
- includes() for email example
- if / else if / else
- show error message
- clear error message
- success state
- common debugging
```

### 6.5 Todo List

```txt
- form input
- array of todo objects
- add todo
- render todos
- create DOM elements
- delete todo
- mark complete, optional
- save to localStorage
- JSON.stringify()
- JSON.parse()
- debugging render/state mismatch
```

### 6.6 Search Filter

```txt
- input event
- search term
- toLowerCase()
- trim()
- array filter()
- string includes()
- render filtered results
- no results message
- debugging empty results
```

### 6.7 Product Cards

```txt
- array of product objects
- map() or forEach()
- template literals
- create card HTML
- insert into DOM
- price formatting
- image/title/description
- debugging missing properties
```

### 6.8 Save Theme Preference

```txt
- button/toggle
- classList.toggle()
- boolean state
- localStorage.setItem()
- localStorage.getItem()
- load saved theme on page load
- string "true"/"false" issue
- debugging storage
```

### 6.9 Fetch API Data

```txt
- async function
- fetch()
- await response
- response.json()
- loading state
- error state
- try/catch
- render data to DOM
- arrays/objects from API
- debugging network/API issues
```

### 6.10 Counter App

```txt
- count variable
- increment button
- decrement button
- reset button
- update DOM text
- event listeners
- function to render count
- prevent negative count, optional
- debugging stale displayed value
```

---

# Section 7 — Debugging / Error Guide

## Purpose

Teach how to understand, trace, and fix broken JavaScript.

This is the main debugging home.

## Section Behavior

Use debugging accordions.

Each debug accordion expands into the Debug / Error Card structure.

## Debug / Error Card Structure

```txt
1. Error name / debug topic
2. What it means
3. Syntax or broken code shape
4. Syntax Details That Matter
5. Anatomy / Breakdown
6. Why it usually happens
7. Plain English explanation
8. Broken code example
9. Fixed code example
10. How to debug it
11. What to check first
12. Related topics
13. See also
```

## Required Debugging Topics and Scope

### 7.1 Debugging Mindset

```txt
- what did I expect?
- what actually happened?
- where did it stop working?
- what changed recently?
- what value should this be?
- what value is it actually?
- isolate one piece at a time
- test small pieces
- read the error slowly
```

### 7.2 Types of Problems

```txt
- syntax errors
- reference errors
- type errors
- logic errors
- DOM selection errors
- event errors
- scope errors
- async/timing errors
- data shape errors
```

### 7.3 How to Read Error Messages

```txt
- error name
- error message
- file name
- line number
- column number
- stack trace
- clickable links in console
- first error vs later errors
```

### 7.4 Common JS Errors

```txt
- is not defined
- Cannot read properties of null
- Cannot read properties of undefined
- Unexpected token
- Assignment to constant variable
- function is not a function
- missing ) after argument list
- Cannot access before initialization
- NaN issues
- JSON parse error
```

### 7.5 Console Tools

```txt
- console.log()
- console.warn()
- console.error()
- console.table()
- console.dir()
- typeof
- Array.isArray()
- debugger
- checking values before broken line
```

### 7.6 Debugging Variables

```txt
- check if variable exists
- check spelling
- check value
- check type
- check scope
- check reassignment
- check const reassignment
- check undefined
```

### 7.7 Debugging Functions

```txt
- is the function being called?
- is it being called too early?
- are arguments correct?
- are parameters named clearly?
- is return missing?
- console.log vs return
- scope problems
- callback problems
```

### 7.8 Debugging Arrays

```txt
- is it actually an array?
- is it empty?
- check length
- check indexes
- index starts at 0
- item vs index confusion
- mutation vs new array
- map/filter return value
```

### 7.9 Debugging Objects

```txt
- property exists?
- spelling correct?
- dot vs bracket notation
- nested property exists?
- undefined property
- API data shape
- console.log object
- console.table arrays of objects
```

### 7.10 Debugging null / undefined

```txt
- what undefined means
- what null means
- querySelector returns null
- missing object property returns undefined
- missing array item returns undefined
- missing return gives undefined
- trying to use null/undefined causes errors
- optional chaining, beginner-friendly mention
- if checks before using
```

### 7.11 Debugging DOM

```txt
- selector spelling
- .class vs #id vs tag
- element exists?
- script timing
- querySelectorAll vs querySelector
- NodeList issues
- textContent/classList on null
- inspect HTML
```

### 7.12 Debugging Events

```txt
- selected element exists?
- listener attached?
- event type correct?
- function passed correctly?
- function called too early?
- event object exists?
- preventDefault needed?
- console.log inside listener
```

### 7.13 Debugging Forms

```txt
- form submit refresh issue
- preventDefault missing
- input.value missing
- reading value too early
- empty strings
- trim spaces
- input number as string
- selected wrong input
- validation branch not running
```

### 7.14 Debugging Async

```txt
- forgot await
- promise vs resolved data
- response.json() missing
- fetch failed
- try/catch missing
- using data before loaded
- network tab
- loading/error UI states
```

### 7.15 Debugging Template Literals / ${}

```txt
- used quotes instead of backticks
- variable misspelled inside ${}
- value is undefined
- missing closing }
- mixing concatenation and template literals
- literal ${name} showing on page
```

### 7.16 Debugging Checklist

```txt
- read the error
- find the line
- log the value
- check type
- check spelling
- check scope
- check timing
- check DOM selector
- check return value
- simplify the code
- test one piece at a time
```

---

# Navigation Requirements

The website should be easy to navigate without becoming one giant scroll page.

Include:

```txt
- dashboard home screen with cards for each major section
- section-level navigation
- isolated major section views
- accordion-isolated topics inside each section
- sticky sidebar on desktop only within the current section if useful
- collapsible mobile navigation
- search or filter if possible
- category cards for major sections
- breadcrumbs or “You are here” labels
- back / next controls where useful
- return-to-dashboard button
```

Avoid relying on a single long page with only anchor links.

Anchor links are allowed inside a section, but major sections should stay isolated from each other inside the same app/shell.

Topics inside sections should be isolated with collapsible accordions.

Use accordions so only the selected topic's full content is visible.

---

# Mobile Behavior Requirements

The website must be mobile-friendly.

On mobile:

```txt
- navigation should collapse into a menu button
- cards should stack vertically
- code blocks should scroll horizontally
- text should not be cramped
- buttons should be easy to tap
- accordions should be usable with touch
- sticky navigation should not cover content
- spacing should be comfortable
- sections should be easy to collapse/expand
```

Avoid:

```txt
- tiny text
- crowded multi-column layouts
- horizontal page overflow
- giant walls of text
- code blocks that break the layout
```

---

# Layout Requirements

Use a clean, calm, readable layout with isolated section views.

Recommended layout:

```txt
Main Dashboard
- title
- short description
- section cards
- search/filter if possible

Section View
- section title
- short section intro
- return-to-dashboard link
- internal navigation for that section
- accordion topic list
- code examples
- callouts
- previous / next controls if useful

Footer
- quick links
- return to dashboard
```

Do not make the homepage a long scroll containing every section.

The homepage should act more like a dashboard or table of contents.

---

# Component Requirements

Use reusable components/classes for:

```txt
- section container
- topic card
- combo card
- method card
- pattern card
- debug card
- code block
- callout box
- syntax details box
- debugging clue box
- click moment box
- common mistake box
- see also links
- tag/chip labels
- mobile nav
- accordion
- nested accordion groups for combo/method categories
- accordion preview text
```

---

# Clean Code Structure Requirements

Organize the project so it is easy to edit later.

If using plain HTML/CSS/JS, use this structure:

```txt
project/
├── index.html
├── css/
│   ├── base.css
│   ├── layout.css
│   ├── components.css
│   └── utilities.css
├── js/
│   ├── main.js
│   ├── navigation.js
│   ├── accordions.js
│   └── search.js
└── data/
    ├── sections.js
    ├── topics.js
    ├── combos.js
    ├── methods.js
    ├── patterns.js
    └── debugging.js
```

If using a component framework, keep the same idea:

```txt
src/
├── components/
│   ├── Layout/
│   ├── Navigation/
│   ├── Cards/
│   ├── CodeBlock/
│   ├── Callouts/
│   └── Accordions/
├── data/
│   ├── sections.js
│   ├── topics.js
│   ├── combos.js
│   ├── methods.js
│   ├── patterns.js
│   └── debugging.js
├── pages/
└── styles/
```

---

# Maintainability Rules

The code should be easy to modify later.

Follow these rules:

```txt
- Do not hardcode everything into one giant file if avoidable.
- Separate content/data from layout when possible.
- Use reusable card components.
- Use consistent class names.
- Use clear section IDs.
- Use semantic HTML.
- Use accessible buttons for accordions.
- Add aria-expanded for collapsible content.
- Keep CSS organized by purpose.
- Keep JavaScript small and focused.
- Avoid unnecessary libraries unless needed.
```

---

# Design Requirements

The design should feel:

```txt
- clean
- calm
- organized
- beginner-friendly
- ADHD-friendly
- easy to scan
- not overwhelming
```

Use:

```txt
- dashboard cards
- accordions
- clear headings
- callout boxes
- tags/chips
- code blocks
- spacing
- readable font sizes
- visual hierarchy
```

Avoid:

```txt
- walls of text
- too many colors
- clutter
- tiny text
- cramped cards
- long unbroken pages
```

---


## Code Examples Must Be Color-Coded

All code examples shown in the JavaScript learning guide must appear with syntax coloring, like code in VS Code.

This means the code itself should be colored, not just explained with labels.

JavaScript code examples should visually color different parts of the code, such as:

```txt
- keywords
- variables
- strings
- numbers
- booleans
- functions
- methods
- operators
- comments
```

HTML examples, if any appear in the JavaScript guide, should visually color different parts of the code, such as:

```txt
- tag names
- attribute names
- attribute values
- visible text/content
- comments
```

CSS examples, if any appear in the JavaScript guide, should visually color different parts of the code, such as:

```txt
- selectors
- properties
- values
- comments
```

The code blocks should look similar to VS Code syntax highlighting.

Do not show plain, all-white, all-gray, or uncolored code examples.

Use a syntax highlighter if needed, such as Prism.js or Highlight.js.

Code blocks must still be readable on mobile and should scroll horizontally if needed.


# Callout Types

Create reusable callout styles for:

```txt
Syntax Details That Matter
Debugging Clue
Click Moment
Common Mistake
Wrong vs Right
Plain English
What JS Is Thinking
See Also
```

---

# Important Content Boundary

This first build should focus on:

```txt
- site structure
- navigation
- reusable content card templates
- mobile behavior
- accordion behavior
- clean code organization
- placeholder/example cards that show the required format
```

Do not attempt to write the full final lessons for every topic yet.

The actual lesson content will come from Prompt 2.

However, include enough sample content to prove the structure works, especially for:

```txt
- Strings
- ${} interpolation
- Variables + DOM
- querySelector()
- Form Validation
- Cannot read properties of null
```

These sample cards must follow the required teaching rules.

---

# Output Requirements

Create the website structure and sample content.

The final result should include:

```txt
- responsive layout
- dashboard-style home screen
- isolated section views
- accordion-isolated topics inside each section
- section index/dashboard views
- accessible accordion behavior
- desktop navigation
- mobile navigation
- section structure
- reusable cards
- expandable/collapsible content
- teaching-friendly code blocks
- callout components
- clean file organization
- placeholder system for future lessons
```

Remember:

This prompt is for the structure, organization, scope, and teaching system.

The actual deep lessons for every topic will be created later in Prompt 2.
