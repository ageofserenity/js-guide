# Prompt 2 — JavaScript Lesson Content Depth + Example Lessons

Use this prompt after Prompt 1.

Prompt 1 created the structure, layout, navigation, accordion behavior, mobile behavior, and clean code rules.

Prompt 2 is for the **actual lesson content**.

This prompt teaches the AI builder what the content inside each accordion/card should feel like.

---

# Goal

Fill the JavaScript learning system with real teaching content.

Do **not** create shallow placeholder lessons.

Do **not** only list topic names.

Do **not** write short definitions only.

Every topic, combo, method, pattern, and debugging item should feel like a real mini-lesson.

The content should be:

```txt
- beginner-friendly
- ADHD-friendly
- clear
- specific
- example-heavy
- syntax-aware
- debugging-aware
- connected to real website use
```

---

# Important Rule

Every lesson should answer the learner’s hidden questions:

```txt
What is this?
What does the syntax mean?
Why does this exist?
When would I use it?
Where does this show up in real websites?
What small details can break it?
What does the code look like?
What is JavaScript thinking?
What does this connect to?
What mistakes do beginners make?
How do I debug it?
```

But do not make the writing robotic.

Use the required headings from the card structure, but explain naturally.

---

# No Naked Code Rule

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

Every code block should include at least one of these:

```txt
- inline comments
- anatomy / breakdown
- syntax details
- wrong vs right examples
- debugging clue
- step-by-step walkthrough
- what JavaScript is thinking
```

---

# Tiny Syntax Details Must Be Explained

Do not skip tiny details.

Explain things like:

```txt
" " double quotes
' ' single quotes
` ` backticks
${} interpolation
() parentheses
{} curly braces
[] square brackets
. dot access
, commas
: colons
; semicolons
= assignment
=== comparison
! not
+= add and reassign
i++ increase by 1
.value form input value
event
event.target
return
break
continue
".class" selector
"#id" selector
"tag" selector
```

These small details can make or break understanding.

---

# Content Generation Approach

Generate lessons in chunks.

Do not attempt to generate the entire JavaScript encyclopedia in one response unless specifically asked.

Best workflow:

```txt
Prompt 2A: Generate Main Topic Guide → Strings
Prompt 2B: Generate Main Topic Guide → Functions
Prompt 2C: Generate Topic Combo Guide → Variables Combos
Prompt 2D: Generate Method Reference → String Tools
Prompt 2E: Generate Real Website Pattern → Form Validation
Prompt 2F: Generate Debugging Guide → Cannot read properties of null
```

Each chunk should be deep.

Depth is more important than quantity.

---

# Card Structures

Use the correct card structure depending on the section.

---

## Main Topic Teaching Card

Use this for Section 3: Main Topic Guides.

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

---

## Topic Combo Card

Use this for Section 4: Topic Combo Guide.

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

---

## Method / Snippet Card

Use this for Section 5: Method / Snippet Reference.

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
10. Connects to
11. Debugging clue
12. Common mistakes
13. See also
```

---

## Real Website Pattern Card

Use this for Section 6: Real Website Patterns.

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

---

## Debug / Error Card

Use this for Section 7: Debugging / Error Guide.

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

---

# Example Lesson 0 — Before You Start

Use this as the quality standard for the “Before You Start: How This Guide Teaches” section.

## Before You Start: How This Guide Teaches

### Purpose

This guide is not a normal JavaScript cheat sheet.

A normal cheat sheet usually tells you:

```txt
method name → short definition → tiny example
```

This guide should do more than that.

It should help a beginner understand:

```txt
what the code means
why the syntax looks that way
where the topic is used
what it connects to
what usually breaks
how to debug it
```

---

### How this guide teaches

This guide uses five teaching layers:

```txt
1. Meaning
   What the thing is.

2. Syntax
   What the code shape looks like.

3. Tiny details
   The small symbols that matter.

4. Examples
   What it looks like in real code.

5. Debugging
   What breaks and how to check it.
```

---

### No naked code

Code should not appear by itself with no explanation.

Bad:

```js
const name = "Os";
```

Better:

```js
const name = "Os";
// const = creates a variable that cannot be reassigned
// name = the variable name
// "Os" = string value/text
```

The goal is that a beginner can look at the code and understand what each piece is doing.

---

### Tiny syntax details matter

Small symbols can completely change what JavaScript does.

Example:

```js
const name = "Os";

"Hello, ${name}" // wrong: double quotes do not insert variables
`Hello, ${name}` // correct: backticks allow ${}
```

The only visible difference is the quotes, but the behavior is different.

That is why the guide must explain tiny details like:

```txt
" " double quotes
' ' single quotes
` ` backticks
${} interpolation
() parentheses
{} curly braces
[] square brackets
. dot access
.value
return
break
===
```

---

### Wrong vs right examples

When something is easy to confuse, show both the wrong and right way.

Example:

```js
button.addEventListener("click", openMenu);
// correct: passes the function so it runs later when clicked
```

```js
button.addEventListener("click", openMenu());
// wrong: runs openMenu immediately instead of waiting for the click
```

This helps the learner understand not just what works, but why the mistake breaks.

---

### Debugging is part of learning

Every major topic should include debugging clues.

Example:

```js
const button = document.querySelector(".btn");

console.log(button);
// If this logs null, JavaScript did not find the element.
```

Debugging should not feel separate from learning JavaScript.

It should be included while learning the topic.

---

### The big rule

```txt
Do not just show JavaScript.

Teach JavaScript.
```

---

# Example Lesson 1 — Big Picture

Use this as the quality standard for Section 1: Big Picture.

## Topic: What JavaScript Does

### Main idea

JavaScript makes a website respond, change, calculate, remember, and react.

HTML creates the structure.

CSS controls how it looks.

JavaScript controls what happens.

```txt
HTML = the structure
CSS = the style
JavaScript = the behavior
```

---

### Simple website example

HTML:

```html
<button class="btn">Click me</button>
<!-- HTML creates the button -->
```

CSS:

```css
.btn {
  background: blue;
  color: white;
}
/* CSS styles the button */
```

JavaScript:

```js
const button = document.querySelector(".btn");
// finds the button in the HTML and stores it

button.addEventListener("click", function() {
  // waits until the user clicks the button

  console.log("Button clicked");
  // runs after the click happens
});
```

---

### Plain English explanation

JavaScript is the part of the website that says:

```txt
When this happens, do that.
```

Examples:

```txt
When the user clicks the menu button, open the menu.
When the user submits a form, check the input.
When the user types in search, filter the cards.
When data loads from an API, show it on the page.
When a button is clicked, update the counter.
```

---

### Input → Logic → Output

A lot of JavaScript can be understood like this:

```txt
Input → Logic → Output
```

Example:

```js
const age = 20;
// input/data

if (age >= 18) {
  // logic/check

  console.log("Adult");
  // output/result
}
```

Breakdown:

```txt
Input → age is 20
Logic → check if age is 18 or higher
Output → show "Adult"
```

---

### Why JavaScript topics overlap

JavaScript topics overlap because real code usually needs multiple pieces working together.

Example: button click

```js
const button = document.querySelector(".btn");
// variable + DOM

button.addEventListener("click", function() {
  // event + function

  button.textContent = "Clicked";
  // DOM text change
});
```

This one small example uses:

```txt
variables
DOM
events
functions
strings
```

That is why the guide should not only teach topics separately.

It also needs combo lessons.

---

### How to read JavaScript code

JavaScript usually reads from top to bottom.

Example:

```js
const name = "Os";
// 1. store "Os" in name

const message = `Hello, ${name}`;
// 2. build a message using the value of name

console.log(message);
// 3. show the message
```

JavaScript is thinking:

```txt
Create name.
Store "Os".
Create message.
Insert name into the template literal.
Log the final message.
```

---

### Click Moment

```txt
JavaScript is the “when this happens, do that” language.
```

---

### Connects to

```txt
Variables → store information
Functions → group actions
If / Else → make choices
Loops → repeat actions
DOM → change HTML
Events → react to users
Debugging → fix what breaks
```

---

# Example Lesson 2 — Core Mental Models

Use this as the quality standard for Section 2: Core Mental Models.

This section should not go as deep as the Main Topic Guides, but it should still explain the mental model clearly.

Each mental model card should include:

```txt
- mental model name
- meaning
- plain English explanation
- tiny teaching code example
- what it connects to
- click moment
```

---

## Mental Model: Values

### Meaning

Values are the pieces of information JavaScript works with.

A value can be text, a number, true/false, a list, an object, or an empty/missing value.

---

### Plain English explanation

A value is the “thing” JavaScript is storing, checking, changing, or using.

```js
"Os" // string value
25 // number value
true // boolean value
["HTML", "CSS", "JS"] // array value
{ name: "Os", role: "Developer" } // object value
null // intentionally empty value
undefined // value was not assigned
```

---

### Tiny teaching example

```js
const name = "Os";
// "Os" is the value
// name is the variable storing that value

const age = 25;
// 25 is a number value

const isLearning = true;
// true is a boolean value
```

---

### What it connects to

```txt
Variables store values.
Functions receive values.
If statements check values.
Arrays hold multiple values.
Objects group related values.
DOM displays values.
```

---

### Click Moment

```txt
Values are the actual information JavaScript works with.
Variables are just the containers.
```

---

## Mental Model: Storage

### Meaning

Storage is how JavaScript remembers values.

The main storage tool is a variable.

---

### Plain English explanation

A variable is like a labeled box.

The label is the variable name.

The thing inside the box is the value.

```js
const username = "Os";
// username = label
// "Os" = value inside the box
```

---

### Tiny teaching example

```js
let count = 0;
// let allows the value to change later

count = count + 1;
// updates count from 0 to 1
```

```js
const siteName = "My Portfolio";
// const means this variable should not be reassigned
```

---

### What it connects to

```txt
Strings
Numbers
Booleans
Arrays
Objects
Functions
DOM elements
Events
```

---

### Click Moment

```txt
Variables do not create the information.
They store the information so you can use it later.
```

---

## Mental Model: Actions

### Meaning

Actions are things JavaScript can do.

Functions and methods are the main way JavaScript stores actions.

---

### Plain English explanation

A function is a reusable action.

A method is an action that belongs to something.

```js
function greet() {
  console.log("Hello");
}
// function = reusable action
```

```js
"hello".toUpperCase();
// toUpperCase() = method/action that belongs to a string
```

---

### Tiny teaching example

```js
function sayHi(name) {
  // name is a parameter/placeholder

  return `Hi, ${name}`;
  // return sends a value back
}

sayHi("Os");
// "Os" is the argument/value passed in
```

---

### What it connects to

```txt
Variables
Parameters
Return
Events
Arrays
Objects
DOM
Async
```

---

### Click Moment

```txt
Functions save actions.
Events decide when actions run.
```

---

## Mental Model: Decisions

### Meaning

Decisions let JavaScript choose what code should run.

The main tools are:

```txt
if
else if
else
switch
comparisons
booleans
```

---

### Plain English explanation

A decision is JavaScript asking a question.

```js
const age = 20;

if (age >= 18) {
  console.log("Adult");
}
```

JavaScript is thinking:

```txt
Is age 18 or higher?
Yes.
Run the code inside the block.
```

---

### Tiny teaching example

```js
const password = "hello";

if (password.length < 8) {
  // checks if the password is shorter than 8 characters

  console.log("Password too short");
} else {
  console.log("Password looks good");
}
```

---

### What it connects to

```txt
Booleans
Comparisons
Variables
Forms
Events
Functions
Validation
```

---

### Click Moment

```txt
if = ask a yes/no question.
else = what happens if the answer was no.
```

---

## Mental Model: Repetition

### Meaning

Repetition lets JavaScript run code multiple times.

The main tools are:

```txt
for loops
while loops
forEach()
map()
```

---

### Plain English explanation

Use repetition when you have many things and want to do something to each one.

Example:

```js
const fruits = ["apple", "banana", "mango"];
// array with multiple values

fruits.forEach(function(fruit) {
  // fruit = one item at a time

  console.log(fruit);
});
```

---

### Tiny teaching example

```js
const colors = ["red", "blue", "green"];

for (let i = 0; i < colors.length; i++) {
  // i starts at 0
  // keep looping while i is less than colors.length
  // i++ adds 1 after each loop

  console.log(colors[i]);
  // colors[i] gets the current item
}
```

---

### What it connects to

```txt
Arrays
Strings
DOM lists
Functions
If / Else
Nested loops
```

---

### Click Moment

```txt
Loops are for “do this again.”
Arrays are often the “things to repeat through.”
```

---

## Mental Model: Page Control

### Meaning

Page control means JavaScript can select and change HTML.

This is done through the DOM.

---

### Plain English explanation

The DOM is JavaScript’s way of seeing the HTML page.

```js
const title = document.querySelector("h1");
// finds the first h1 on the page

title.textContent = "Welcome";
// changes the text inside the h1
```

---

### Tiny teaching example

```js
const button = document.querySelector(".btn");
// .btn means class="btn"

button.classList.add("active");
// adds the active class to the button
```

---

### What it connects to

```txt
Variables
DOM methods
Events
CSS classes
Forms
Arrays
Objects
Debugging null
```

---

### Click Moment

```txt
JavaScript cannot change an element until it selects it first.
```

---

## Mental Model: User Interaction

### Meaning

User interaction means JavaScript can respond when the user does something.

Examples:

```txt
clicking
typing
submitting a form
hovering
scrolling
```

---

### Plain English explanation

Events are how JavaScript listens for user actions.

```js
const button = document.querySelector(".btn");

button.addEventListener("click", function() {
  // this function runs after the user clicks

  console.log("Clicked");
});
```

---

### Tiny teaching example

```js
const input = document.querySelector("#username");

input.addEventListener("input", function() {
  // runs every time the user types

  console.log(input.value);
  // input.value is what the user typed
});
```

---

### What it connects to

```txt
DOM
Functions
Events
Forms
Input values
If / Else
Validation
```

---

### Click Moment

```txt
Events are JavaScript waiting for something to happen.
```

---

## Mental Model: Waiting

### Meaning

Waiting is how JavaScript handles things that do not happen instantly.

Examples:

```txt
timers
fetching data
promises
async / await
```

---

### Plain English explanation

Some code needs time.

JavaScript needs tools to wait without freezing the whole page.

```js
setTimeout(function() {
  console.log("Runs later");
}, 1000);
// waits 1000 milliseconds, then runs the function
```

---

### Tiny teaching example

```js
async function getData() {
  const response = await fetch("https://example.com/data");
  // await waits for the fetch request

  const data = await response.json();
  // converts the response into JavaScript data

  console.log(data);
}
```

---

### What it connects to

```txt
Functions
Promises
Fetch
JSON
Try / Catch
DOM
Debugging async
```

---

### Click Moment

```txt
Async code is JavaScript saying:
“Wait for this to finish, then keep going.”
```

---

## Mental Model: Errors

### Meaning

Errors are JavaScript’s way of telling you something went wrong.

---

### Plain English explanation

Errors are not just failures.

They are clues.

Example:

```js
const button = document.querySelector(".missing");
// returns null because no element matches .missing

button.addEventListener("click", function() {});
// error: Cannot read properties of null
```

JavaScript is saying:

```txt
I cannot add an event listener because button is null.
```

---

### Tiny teaching example

```js
const title = document.querySelector(".title");

console.log(title);
// if this logs null, the selector did not find anything
```

---

### What it connects to

```txt
Variables
DOM
Functions
Arrays
Objects
Async
Debugging
Console
```

---

### Click Moment

```txt
An error message is not just saying “you failed.”
It is pointing at where JavaScript got confused.
```

---


# Example Lesson 3 — Main Topic Guide

Use this as the quality standard for Section 3 topic lessons.

## Topic: Strings

### 1. What it is

A string is text in JavaScript.

Strings are used for words, sentences, names, messages, labels, form input, URLs, CSS class names, and anything else that is text-based.

---

### 2. Syntax

```js
"hello" // double quotes
'hello' // single quotes
`hello` // backticks / template literal
```

All three create strings, but they are not always used the same way.

---

### 3. Syntax Details That Matter

#### Double quotes

```js
const sentence = "I'm learning JavaScript";
// double quotes are useful when the text has an apostrophe
```

This works because the apostrophe inside `I'm` does not close the string.

```js
const broken = 'I'm learning JavaScript';
// wrong: the apostrophe in I'm ends the string early
```

---

#### Single quotes

```js
const quote = 'She said "hello"';
// single quotes are useful when the text contains double quotes
```

This works because the double quotes inside the sentence do not close the string.

```js
const broken = "She said "hello"";
// wrong: the inner double quotes confuse JavaScript
```

---

#### Backticks

```js
const name = "Os"; // stores a name

const message = `Hello, ${name}`;
// backticks allow ${} to insert the value of name
// result: "Hello, Os"
```

Backticks are used for template literals.

Template literals are useful when you want dynamic text.

---

#### `${}` interpolation

```js
const name = "Os";

`Hello, ${name}` // correct: inserts the value stored in name
"Hello, ${name}" // wrong: double quotes treat ${name} as plain text
'Hello, ${name}' // wrong: single quotes treat ${name} as plain text
```

`${}` only works inside backticks.

---

### 4. Anatomy / Breakdown

```js
const message = `Hello, ${name}`;
```

```txt
const → creates a variable that should not be reassigned
message → the variable name
= → assigns a value
`Hello, ${name}` → template literal
` ` → backticks
Hello, → normal text
${name} → inserts the value stored in name
; → ends the statement
```

---

### 5. What problem it solves

JavaScript needs a way to store, display, check, and change text.

Without strings, JavaScript could not work with:

```txt
names
emails
messages
button text
form input
URLs
class names
error messages
search terms
product titles
```

---

### 6. Why use it

Use strings whenever the data is text.

```js
const username = "Os"; // text
const email = "os@example.com"; // text
const buttonText = "Submit"; // text
const errorMessage = "Email is required"; // text
```

Strings let JavaScript store text, compare text, combine text, and display text on the page.

---

### 7. Where you use it

```js
heading.textContent = "Welcome back"; // DOM text

const searchTerm = input.value; // form input text

card.classList.add("active"); // CSS class name as a string

email.includes("@"); // checking if text contains something
```

Strings show up constantly in websites.

---

### 8. Plain English explanation

A string is text wrapped in quotes so JavaScript knows:

```txt
“Treat this as text, not as code.”
```

That is why these are different:

```js
const name = "Os"; // "Os" is text

console.log(name); // name is a variable
console.log("name"); // "name" is literal text
```

---

### 9. Mental model

A string is a row of characters.

```js
const word = "cat";
```

```txt
"cat"

c → index 0
a → index 1
t → index 2
```

So:

```js
word[0]; // "c" because indexes start at 0
word[1]; // "a"
word[2]; // "t"
word[3]; // undefined because there is no character at index 3
```

---

### 10. Step-by-step walkthrough

```js
const name = "Os"; // store the text "Os"

const message = `Hello, ${name}`;
// build a new string using the value of name

console.log(message); // "Hello, Os"
```

JavaScript is thinking:

```txt
Create a variable called name.
Store the string "Os".
Create a variable called message.
Use backticks to build a template literal.
Find ${name}.
Replace it with the value "Os".
Log "Hello, Os".
```

---

### 11. Debugging clue

If text is not in quotes, JavaScript thinks it is a variable.

Wrong:

```js
const name = Os;
// JavaScript looks for a variable named Os
// If Os does not exist, this causes an error
```

Right:

```js
const name = "Os";
// "Os" is text, so it must be in quotes
```

Another clue:

```js
const name = "Os";

console.log("Hello, ${name}");
// output: Hello, ${name}
// problem: double quotes do not run interpolation

console.log(`Hello, ${name}`);
// output: Hello, Os
// fixed: backticks allow ${}
```

---

### 12. The part that makes it click

```txt
Quotes mean “this is text.”

No quotes means JavaScript thinks it is code, a variable, a number, a boolean, a keyword, or something else.

${} only works inside backticks.
```

---

### 13. Common confusions

#### Confusion: string vs variable

```js
const name = "Os";

console.log(name); // "Os" because name is a variable
console.log("name"); // "name" because it is text
```

---

#### Confusion: string number vs real number

```js
"25" // string
25 // number
```

They look similar, but they behave differently.

```js
"25" + 5; // "255" because one value is a string
25 + 5; // 30 because both values are numbers
```

---

#### Confusion: .length counts characters, not words

```js
const word = "hello";

word.length; // 5 because there are 5 characters
```

```js
const sentence = "hello world";

sentence.length; // 11 because the space counts too
```

---

### 14. Common mistakes

```js
const name = Os;
// wrong: forgot quotes around text
```

```js
const message = "Hello, ${name}";
// wrong: used double quotes instead of backticks
```

```js
const quote = "She said "hello"";
// wrong: quote conflict
```

```js
const word = "cat";

word[3]; // undefined because indexes start at 0
```

---

### 15. Tiny examples

```js
const city = "Santa Ana"; // stores a string

city.length; // 9 because the space counts as a character
city.toUpperCase(); // "SANTA ANA"
city.includes("Ana"); // true
city[0]; // "S"
```

```js
const firstName = "Os";
const role = "Developer";

const intro = `${firstName} is a ${role}`;
// result: "Os is a Developer"
```

---

### 16. Real website uses

```js
error.textContent = "Email is required";
// show an error message on a form
```

```js
button.textContent = "Loading...";
// change button text while something is happening
```

```js
const searchTerm = searchInput.value.trim();
// get text from a search input and remove extra spaces
```

```js
card.classList.add("active");
// "active" is a string used as a CSS class name
```

---

### 17. Connects to

```txt
Variables → strings are often stored in variables
Forms → input values are usually strings
If / Else → check what a string contains
Loops → loop through characters
DOM → change text on the page
String methods → trim(), includes(), replace(), split()
Debugging → missing quotes or wrong quotes can break code
```

---

### 18. See also

```txt
String Methods
Template Literals
${} interpolation
Strings + Forms
Strings + DOM Text
If / Else + Strings
trim()
includes()
replace()
split()
```

---

# Example Lesson 4 — Topic Combo Guide

Use this as the quality standard for Section 4 combo lessons.

## Combo: Variables + DOM

### 1. What this combo means

A variable can store an HTML element selected from the page.

This lets JavaScript reuse that element later.

---

### 2. Syntax / code shape

```js
const title = document.querySelector("h1");
// const title = stores the selected element
// document = the webpage
// querySelector("h1") = finds the first h1
```

---

### 3. Syntax Details That Matter

```js
document.querySelector("h1"); // selects the first h1 tag
document.querySelector(".title"); // selects the first element with class="title"
document.querySelector("#title"); // selects the element with id="title"
```

The selector is a string.

That means it needs quotes.

```js
document.querySelector(.title); // wrong: missing quotes
document.querySelector(".title"); // correct
```

If nothing matches, `querySelector()` returns `null`.

---

### 4. Quick breakdown

```js
const title = document.querySelector("h1");

title.textContent = "Welcome";
// title = the selected h1 element
// textContent = the text inside the element
// "Welcome" = the new text
```

---

### 5. Why these topics work together

The DOM gives JavaScript access to HTML.

Variables let JavaScript store what it found.

Without the variable, you would have to keep selecting the same element again and again.

---

### 6. Code example

HTML:

```html
<h1>Old Title</h1>
```

JavaScript:

```js
const title = document.querySelector("h1");
// finds the h1 and stores it in title

title.textContent = "New Title";
// changes the text inside the h1
```

---

### 7. Real website use

Use Variables + DOM when you want to store and change:

```txt
headings
buttons
error messages
menus
cards
forms
modals
navigation labels
```

Example:

```js
const errorMessage = document.querySelector(".error");
// stores the error message element

errorMessage.textContent = "Email is required";
// updates the error text
```

---

### 8. Connects to

```txt
DOM
Variables
querySelector()
textContent
Events
Forms
Debugging null
```

---

### 9. Debugging clue

If the variable logs `null`, the selector did not find anything.

```js
const title = document.querySelector(".title");

console.log(title);
// if this logs null, check:
// - does class="title" exist?
// - did you use the dot for class?
// - did the script run before the HTML loaded?
```

---

### 10. Common mistakes

```js
const title = document.querySelector("title");
// might be wrong if title is a class
```

```js
const title = document.querySelector(".title");
// correct if the HTML has class="title"
```

```js
const title = document.querySelector(".title");

title.textContent = "Hello";
// breaks if title is null
```

Safer version:

```js
const title = document.querySelector(".title");

if (title) {
  title.textContent = "Hello";
}
// only changes text if the element exists
```

---

### 11. See also

```txt
DOM
Variables
querySelector()
textContent
Cannot read properties of null
DOM + Events
Forms + DOM
```

---

# Example Lesson 5 — Method / Snippet Reference

Use this as the quality standard for Section 5 method lessons.

## Method: querySelector()

### 1. What it does

`querySelector()` selects the first HTML element that matches a CSS selector.

---

### 2. Syntax

```js
document.querySelector("selector");
```

---

### 3. Syntax / Parameter Details That Matter

The selector goes inside quotes because it is a string.

```js
document.querySelector("button"); // selects the first button tag
document.querySelector(".btn"); // selects the first element with class="btn"
document.querySelector("#menu"); // selects the element with id="menu"
```

Selector details:

```txt
"button" → tag selector
".btn" → class selector
"#menu" → id selector
```

If nothing matches, `querySelector()` returns `null`.

---

### 4. Anatomy / Breakdown

```js
const button = document.querySelector(".btn");
```

```txt
const → creates a variable
button → variable name
= → stores the result
document → the webpage
. → access something on document
querySelector → method that finds one matching element
(".btn") → search for class="btn"
; → ends the statement
```

---

### 5. What problem it solves

JavaScript needs a way to grab HTML before it can change it.

`querySelector()` solves this by finding an element on the page.

---

### 6. Why use it

Use `querySelector()` when you only need one matching element.

Example:

```js
const menuButton = document.querySelector(".menu-btn");
// one menu button

const modal = document.querySelector(".modal");
// one modal
```

---

### 7. Where you use it

```txt
buttons
forms
menus
modals
headings
error messages
cards
navigation
```

---

### 8. Tiny example

```js
const heading = document.querySelector("h1");
// finds the first h1

heading.textContent = "Welcome";
// changes the text inside the h1
```

---

### 9. Real website use

```js
const menuButton = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");

menuButton.addEventListener("click", function() {
  menu.classList.toggle("open");
});
```

What this does:

```txt
Find the menu button.
Find the menu.
When the button is clicked, toggle the open class.
```

---

### 10. Connects to

```txt
DOM
Variables
Events
Functions
classList
Forms
Debugging null
```

---

### 11. Debugging clue

Check what it found:

```js
const button = document.querySelector(".btn");

console.log(button);
// If this logs null, the selector did not match anything.
```

---

### 12. Common mistakes

```js
document.querySelector("btn");
// wrong if btn is a class
```

```js
document.querySelector(".btn");
// correct for class="btn"
```

```js
document.querySelector("#btn");
// correct for id="btn"
```

```js
const button = document.querySelector(".btn");

button.addEventListener("click", function() {});
// breaks if button is null
```

Safer version:

```js
const button = document.querySelector(".btn");

if (button) {
  button.addEventListener("click", function() {
    console.log("Clicked");
  });
}
```

---

### 13. See also

```txt
DOM
Variables + DOM
Events + DOM
querySelectorAll()
addEventListener()
Cannot read properties of null
```

---

# Example Lesson 6 — Real Website Pattern

Use this as the quality standard for Section 6 pattern lessons.

## Pattern: Form Validation

### 1. Pattern name

Form Validation

---

### 2. What it does

Form validation checks what the user typed before allowing the form to continue.

---

### 3. Syntax / code shape

```js
form.addEventListener("submit", function(event) {
  event.preventDefault();

  if (input.value === "") {
    // show error
  }
});
```

---

### 4. Syntax Details That Matter

```txt
"submit" listens for form submission
event.preventDefault() stops the page refresh
input.value gets what the user typed
trim() removes extra spaces
if / else chooses which message to show
```

---

### 5. What problem it solves

Users may leave fields empty, type invalid information, or accidentally add spaces.

Validation catches those problems before the form continues.

---

### 6. Topics used

```txt
DOM
Forms
Events
Input values
Strings
String methods
If / Else
Functions
preventDefault()
```

---

### 7. Code example

HTML:

```html
<form class="signup-form">
  <input id="email" type="text" />
  <p class="error"></p>
  <button type="submit">Sign up</button>
</form>
```

JavaScript:

```js
const form = document.querySelector(".signup-form");
// selects the form

const emailInput = document.querySelector("#email");
// selects the input with id="email"

const error = document.querySelector(".error");
// selects the paragraph where errors will show

form.addEventListener("submit", function(event) {
  // waits for the form to submit

  event.preventDefault();
  // stops the browser from refreshing the page

  const email = emailInput.value.trim();
  // gets what the user typed and removes outside spaces

  if (email === "") {
    // checks if the email is empty

    error.textContent = "Email is required";
    // shows an error message

  } else if (!email.includes("@")) {
    // checks if the email does NOT include @

    error.textContent = "Please enter a valid email";

  } else {
    // runs if the email is not empty and includes @

    error.textContent = "";
    console.log("Form is valid");
  }
});
```

---

### 8. Step-by-step walkthrough

```txt
1. JavaScript selects the form.
2. JavaScript selects the email input.
3. JavaScript selects the error message area.
4. JavaScript waits for submit.
5. User submits the form.
6. preventDefault() stops the page from refreshing.
7. JavaScript reads emailInput.value.
8. trim() removes extra spaces.
9. if checks whether the email is empty.
10. else if checks whether @ is missing.
11. else runs when the input looks valid.
```

---

### 9. What JS is thinking

```txt
Did the form submit?
Stop the normal page refresh.
What did the user type?
Remove extra spaces.
Is the field empty?
Does it include @?
Show the correct message.
```

---

### 10. Debugging clue

If the page refreshes before the error appears, `preventDefault()` is probably missing or not running.

```js
form.addEventListener("submit", function(event) {
  event.preventDefault();
  // make sure this is inside the submit event
});
```

If the error always says empty, log the value:

```js
console.log(emailInput.value);
// check what the input actually contains
```

---

### 11. Common mistakes

```js
const email = emailInput;
// wrong: this stores the input element, not the typed value
```

```js
const email = emailInput.value;
// correct: this stores the typed value
```

```js
const email = emailInput.value.trim;
// wrong: forgot parentheses, so trim does not run
```

```js
const email = emailInput.value.trim();
// correct: trim() runs and returns cleaned text
```

---

### 12. Variations

```txt
password validation
matching passwords
required fields
phone number validation
live validation while typing
showing success messages
disabling submit button until valid
```

---

### 13. See also

```txt
Forms
Events + Forms
If / Else + Forms
Strings + Forms
trim()
includes()
preventDefault()
```

---

# Example Lesson 7 — Debug / Error Guide

Use this as the quality standard for Section 7 debugging lessons.

## Error: Cannot read properties of null

### 1. Error name / debug topic

`Cannot read properties of null`

---

### 2. What it means

JavaScript tried to use a property or method on something that is `null`.

`null` means nothing was found or nothing is there.

---

### 3. Syntax or broken code shape

```js
something.method();
```

But `something` is actually `null`.

Example:

```js
button.addEventListener("click", function() {});
// breaks if button is null
```

---

### 4. Syntax Details That Matter

`querySelector()` returns `null` when it cannot find an element.

```js
const button = document.querySelector(".missing");
// returns null if no element has class="missing"
```

You cannot use these on `null`:

```txt
addEventListener()
textContent
classList
style
value
```

---

### 5. Anatomy / Breakdown

```js
button.addEventListener("click", function() {});
```

```txt
button → should be an HTML element
. → access a method
addEventListener → method for listening to events
"click" → event type
function() {} → code to run after click
```

If `button` is `null`, JavaScript cannot continue.

Plain version:

```txt
JavaScript is trying to add a click listener to nothing.
```

---

### 6. Why it usually happens

Most common causes:

```txt
The selector is wrong.
The class or id is misspelled.
The HTML element does not exist.
The script runs before the HTML loads.
You used "btn" instead of ".btn" for a class.
You are on a page that does not have that element.
```

---

### 7. Plain English explanation

JavaScript is saying:

```txt
“I tried to use this thing, but the thing does not exist.”
```

Usually, JavaScript looked for an HTML element and did not find it.

---

### 8. Broken code example

HTML:

```html
<button class="menu-btn">Menu</button>
```

JavaScript:

```js
const button = document.querySelector(".btn");
// wrong selector: HTML has class="menu-btn", not class="btn"

button.addEventListener("click", function() {
  console.log("Clicked");
});
// breaks because button is null
```

---

### 9. Fixed code example

```js
const button = document.querySelector(".menu-btn");
// correct selector

button.addEventListener("click", function() {
  console.log("Clicked");
});
```

Safer version:

```js
const button = document.querySelector(".menu-btn");

if (button) {
  // only run this if the button exists

  button.addEventListener("click", function() {
    console.log("Clicked");
  });
}
```

---

### 10. How to debug it

Log the variable before using it.

```js
const button = document.querySelector(".btn");

console.log(button);
// if this logs null, your selector did not find anything
```

Check the HTML:

```html
<button class="menu-btn">Menu</button>
```

Then match the selector:

```js
document.querySelector(".menu-btn");
// correct for class="menu-btn"
```

---

### 11. What to check first

```txt
Does the element exist in the HTML?
Is the class or id spelled correctly?
Did you use . for a class?
Did you use # for an id?
Is your script running before the HTML exists?
Are you on the correct page?
Did querySelector() return null?
```

---

### 12. Related topics

```txt
DOM
querySelector()
Variables + DOM
Events + DOM
null
if statements
Debugging DOM
```

---

### 13. See also

```txt
querySelector()
addEventListener()
Cannot read properties of undefined
Debugging DOM
Variables + DOM
DOM + Events
```

---

# How To Use This Prompt

When generating actual lesson content, use this format:

```txt
Selected section:
[Section name]

Selected topic:
[Topic name]

Use this card structure:
[Paste the correct card structure]

Required subtopics:
[List subtopics]

Follow the depth and teaching style from the examples above.

Generate the complete lesson content.
```

---

# Example Request To Generate One Lesson

```txt
Selected section:
3. Main Topic Guides

Selected topic:
3.9 Functions

Use the Main Topic Teaching Card structure.

Required subtopics:
- function declarations
- arrow functions
- parameters
- arguments
- return
- scope
- function factories
- calling a function vs referencing a function
- console.log vs return
- common mistakes
- debugging functions

Follow the depth and teaching style from the examples in Prompt 2.

Generate the complete Functions lesson content.
```

---

# Example Request To Generate One Method Reference

```txt
Selected section:
5. Method / Snippet Reference

Selected topic:
addEventListener()

Use the Method / Snippet Card structure.

Required subtopics:
- event type
- callback function
- passing a function vs calling it
- event object
- click event
- submit event
- debugging event listeners

Follow the depth and teaching style from the examples in Prompt 2.

Generate the complete addEventListener() lesson content.
```

---

# Example Request To Generate One Combo Lesson

```txt
Selected section:
4. Topic Combo Guide

Selected topic:
Functions + Events

Use the Topic Combo Card structure.

Required subtopics:
- functions as event handlers
- addEventListener()
- click event
- function reference vs function call
- event object
- real website use
- debugging event handler issues

Follow the depth and teaching style from the examples in Prompt 2.

Generate the complete Functions + Events combo lesson.
```

---

# Final Instruction To The AI Builder

When generating lessons, do not only copy the template headings.

Actually fill each heading with meaningful teaching content.

Use the sample lessons above as the minimum quality standard.

If a generated lesson feels shorter, shallower, or less explained than the examples, expand it.
