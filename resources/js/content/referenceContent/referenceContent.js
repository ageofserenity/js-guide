Object.assign(CONTENT, {

/* ==========================================================
   SECTION 8: BUILT-IN REFERENCE
   Every entry uses <code> tags so items render styled.
   Path format: builtinref-<groupIdx>-<itemIdx>
========================================================== */


/* -------- 8.1 LANGUAGE -------- */

'builtinref-0-0': `
  <p>Reserved words the JavaScript language recognizes as syntax.</p>
  <ul>
    <li><code>const</code></li>
    <li><code>let</code></li>
    <li><code>var</code></li>
    <li><code>function</code></li>
    <li><code>class</code></li>
    <li><code>return</code></li>
    <li><code>if</code></li>
    <li><code>else</code></li>
    <li><code>switch</code></li>
    <li><code>case</code></li>
    <li><code>default</code></li>
    <li><code>break</code></li>
    <li><code>continue</code></li>
    <li><code>for</code></li>
    <li><code>while</code></li>
    <li><code>do</code></li>
    <li><code>of</code></li>
    <li><code>in</code></li>
    <li><code>try</code></li>
    <li><code>catch</code></li>
    <li><code>finally</code></li>
    <li><code>throw</code></li>
    <li><code>new</code></li>
    <li><code>this</code></li>
    <li><code>super</code></li>
    <li><code>typeof</code></li>
    <li><code>instanceof</code></li>
    <li><code>delete</code></li>
    <li><code>void</code></li>
    <li><code>yield</code></li>
    <li><code>async</code></li>
    <li><code>await</code></li>
    <li><code>import</code></li>
    <li><code>export</code></li>
    <li><code>from</code></li>
    <li><code>as</code></li>
    <li><code>extends</code></li>
    <li><code>static</code></li>
    <li><code>get</code></li>
    <li><code>set</code></li>
  </ul>
`,

'builtinref-0-1': `
  <p>Symbols that perform an action on one or more values.</p>
  <p><strong>Arithmetic</strong></p>
  <ul>
    <li><code>+</code></li>
    <li><code>-</code></li>
    <li><code>*</code></li>
    <li><code>/</code></li>
    <li><code>%</code></li>
    <li><code>**</code></li>
    <li><code>++</code></li>
    <li><code>--</code></li>
  </ul>
  <p><strong>Assignment</strong></p>
  <ul>
    <li><code>=</code></li>
    <li><code>+=</code></li>
    <li><code>-=</code></li>
    <li><code>*=</code></li>
    <li><code>/=</code></li>
    <li><code>%=</code></li>
    <li><code>**=</code></li>
    <li><code>&&=</code></li>
    <li><code>||=</code></li>
    <li><code>??=</code></li>
  </ul>
  <p><strong>Comparison</strong></p>
  <ul>
    <li><code>==</code></li>
    <li><code>===</code></li>
    <li><code>!=</code></li>
    <li><code>!==</code></li>
    <li><code>&lt;</code></li>
    <li><code>&gt;</code></li>
    <li><code>&lt;=</code></li>
    <li><code>&gt;=</code></li>
  </ul>
  <p><strong>Logical</strong></p>
  <ul>
    <li><code>&&</code></li>
    <li><code>||</code></li>
    <li><code>!</code></li>
    <li><code>??</code></li>
  </ul>
  <p><strong>Bitwise</strong></p>
  <ul>
    <li><code>&</code></li>
    <li><code>|</code></li>
    <li><code>^</code></li>
    <li><code>~</code></li>
    <li><code>&lt;&lt;</code></li>
    <li><code>&gt;&gt;</code></li>
    <li><code>&gt;&gt;&gt;</code></li>
  </ul>
  <p><strong>Other</strong></p>
  <ul>
    <li><code>? :</code> (ternary)</li>
    <li><code>...</code> (spread / rest)</li>
    <li><code>?.</code> (optional chaining)</li>
    <li><code>,</code> (comma)</li>
  </ul>
`,

'builtinref-0-2': `
  <p>The seven fundamental value types built into the language.</p>
  <ul>
    <li><code>number</code></li>
    <li><code>string</code></li>
    <li><code>boolean</code></li>
    <li><code>null</code></li>
    <li><code>undefined</code></li>
    <li><code>symbol</code></li>
    <li><code>bigint</code></li>
  </ul>
`,

'builtinref-0-3': `
  <p>Predefined values available anywhere in JavaScript.</p>
  <ul>
    <li><code>true</code></li>
    <li><code>false</code></li>
    <li><code>null</code></li>
    <li><code>undefined</code></li>
    <li><code>NaN</code></li>
    <li><code>Infinity</code></li>
    <li><code>-Infinity</code></li>
    <li><code>globalThis</code></li>
  </ul>
`,


/* -------- 8.2 BUILT-IN JS OBJECTS -------- */

'builtinref-1-0': `
  <p>Math constants and static methods for numeric operations.</p>
  <p><strong>Constants</strong></p>
  <ul>
    <li><code>Math.PI</code></li>
    <li><code>Math.E</code></li>
    <li><code>Math.LN2</code></li>
    <li><code>Math.LN10</code></li>
    <li><code>Math.LOG2E</code></li>
    <li><code>Math.LOG10E</code></li>
    <li><code>Math.SQRT2</code></li>
  </ul>
  <p><strong>Rounding & sign</strong></p>
  <ul>
    <li><code>Math.abs()</code></li>
    <li><code>Math.sign()</code></li>
    <li><code>Math.round()</code></li>
    <li><code>Math.ceil()</code></li>
    <li><code>Math.floor()</code></li>
    <li><code>Math.trunc()</code></li>
  </ul>
  <p><strong>Min / max / power</strong></p>
  <ul>
    <li><code>Math.min()</code></li>
    <li><code>Math.max()</code></li>
    <li><code>Math.pow()</code></li>
    <li><code>Math.sqrt()</code></li>
    <li><code>Math.cbrt()</code></li>
    <li><code>Math.hypot()</code></li>
  </ul>
  <p><strong>Random & logarithms</strong></p>
  <ul>
    <li><code>Math.random()</code></li>
    <li><code>Math.log()</code></li>
    <li><code>Math.log2()</code></li>
    <li><code>Math.log10()</code></li>
    <li><code>Math.exp()</code></li>
  </ul>
  <p><strong>Trigonometry</strong></p>
  <ul>
    <li><code>Math.sin()</code></li>
    <li><code>Math.cos()</code></li>
    <li><code>Math.tan()</code></li>
    <li><code>Math.asin()</code></li>
    <li><code>Math.acos()</code></li>
    <li><code>Math.atan()</code></li>
    <li><code>Math.atan2()</code></li>
  </ul>
`,

'builtinref-1-1': `
  <p>Number constructor, static methods, constants, and instance methods.</p>
  <p><strong>Constructor & parsing</strong></p>
  <ul>
    <li><code>Number()</code></li>
    <li><code>Number.parseInt()</code></li>
    <li><code>Number.parseFloat()</code></li>
  </ul>
  <p><strong>Checks</strong></p>
  <ul>
    <li><code>Number.isInteger()</code></li>
    <li><code>Number.isSafeInteger()</code></li>
    <li><code>Number.isNaN()</code></li>
    <li><code>Number.isFinite()</code></li>
  </ul>
  <p><strong>Constants</strong></p>
  <ul>
    <li><code>Number.MAX_SAFE_INTEGER</code></li>
    <li><code>Number.MIN_SAFE_INTEGER</code></li>
    <li><code>Number.MAX_VALUE</code></li>
    <li><code>Number.MIN_VALUE</code></li>
    <li><code>Number.EPSILON</code></li>
    <li><code>Number.POSITIVE_INFINITY</code></li>
    <li><code>Number.NEGATIVE_INFINITY</code></li>
    <li><code>Number.NaN</code></li>
  </ul>
  <p><strong>Instance methods</strong></p>
  <ul>
    <li><code>.toFixed()</code></li>
    <li><code>.toString()</code></li>
    <li><code>.toLocaleString()</code></li>
    <li><code>.toPrecision()</code></li>
    <li><code>.toExponential()</code></li>
    <li><code>.valueOf()</code></li>
  </ul>
`,

'builtinref-1-2': `
  <p>String constructor, static methods, instance methods, and syntax tools.</p>
  <p><strong>Constructor & static</strong></p>
  <ul>
    <li><code>String()</code></li>
    <li><code>String.fromCharCode()</code></li>
    <li><code>String.fromCodePoint()</code></li>
    <li><code>String.raw()</code></li>
  </ul>
  <p><strong>Property</strong></p>
  <ul>
    <li><code>.length</code></li>
  </ul>
  <p><strong>Access by index</strong></p>
  <ul>
    <li><code>.charAt()</code></li>
    <li><code>.charCodeAt()</code></li>
    <li><code>.codePointAt()</code></li>
    <li><code>.at()</code></li>
  </ul>
  <p><strong>Extract substrings</strong></p>
  <ul>
    <li><code>.slice()</code></li>
    <li><code>.substring()</code></li>
    <li><code>.substr()</code></li>
  </ul>
  <p><strong>Case conversion</strong></p>
  <ul>
    <li><code>.toLowerCase()</code></li>
    <li><code>.toUpperCase()</code></li>
    <li><code>.toLocaleLowerCase()</code></li>
    <li><code>.toLocaleUpperCase()</code></li>
  </ul>
  <p><strong>Trim & pad</strong></p>
  <ul>
    <li><code>.trim()</code></li>
    <li><code>.trimStart()</code></li>
    <li><code>.trimEnd()</code></li>
    <li><code>.padStart()</code></li>
    <li><code>.padEnd()</code></li>
    <li><code>.repeat()</code></li>
  </ul>
  <p><strong>Search</strong></p>
  <ul>
    <li><code>.includes()</code></li>
    <li><code>.indexOf()</code></li>
    <li><code>.lastIndexOf()</code></li>
    <li><code>.startsWith()</code></li>
    <li><code>.endsWith()</code></li>
  </ul>
  <p><strong>Replace & split</strong></p>
  <ul>
    <li><code>.replace()</code></li>
    <li><code>.replaceAll()</code></li>
    <li><code>.split()</code></li>
    <li><code>.concat()</code></li>
  </ul>
  <p><strong>Regex-based</strong></p>
  <ul>
    <li><code>.match()</code></li>
    <li><code>.matchAll()</code></li>
    <li><code>.search()</code></li>
  </ul>
  <p><strong>Other</strong></p>
  <ul>
    <li><code>.normalize()</code></li>
    <li><code>.localeCompare()</code></li>
  </ul>
  <p><strong>Syntax tools</strong></p>
  <ul>
    <li>Template literals: <code>\`text \${expr}\`</code></li>
    <li>Tagged templates: <code>tag\`text \${expr}\`</code></li>
  </ul>
`,

'builtinref-1-3': `
  <p>Array constructor, static methods, and instance methods.</p>
  <p><strong>Constructor & static</strong></p>
  <ul>
    <li><code>Array()</code></li>
    <li><code>Array.of()</code></li>
    <li><code>Array.from()</code></li>
    <li><code>Array.isArray()</code></li>
  </ul>
  <p><strong>Property</strong></p>
  <ul>
    <li><code>.length</code></li>
  </ul>
  <p><strong>Add / remove (mutates)</strong></p>
  <ul>
    <li><code>.push()</code></li>
    <li><code>.pop()</code></li>
    <li><code>.shift()</code></li>
    <li><code>.unshift()</code></li>
  </ul>
  <p><strong>Extract / combine</strong></p>
  <ul>
    <li><code>.slice()</code></li>
    <li><code>.splice()</code></li>
    <li><code>.concat()</code></li>
  </ul>
  <p><strong>Search</strong></p>
  <ul>
    <li><code>.indexOf()</code></li>
    <li><code>.lastIndexOf()</code></li>
    <li><code>.includes()</code></li>
    <li><code>.find()</code></li>
    <li><code>.findIndex()</code></li>
    <li><code>.findLast()</code></li>
    <li><code>.findLastIndex()</code></li>
  </ul>
  <p><strong>Transform</strong></p>
  <ul>
    <li><code>.map()</code></li>
    <li><code>.filter()</code></li>
    <li><code>.reduce()</code></li>
    <li><code>.reduceRight()</code></li>
  </ul>
  <p><strong>Iterate & test</strong></p>
  <ul>
    <li><code>.forEach()</code></li>
    <li><code>.some()</code></li>
    <li><code>.every()</code></li>
  </ul>
  <p><strong>Reorder (mutates)</strong></p>
  <ul>
    <li><code>.sort()</code></li>
    <li><code>.reverse()</code></li>
  </ul>
  <p><strong>Flatten</strong></p>
  <ul>
    <li><code>.flat()</code></li>
    <li><code>.flatMap()</code></li>
  </ul>
  <p><strong>Other</strong></p>
  <ul>
    <li><code>.join()</code></li>
    <li><code>.at()</code></li>
    <li><code>.copyWithin()</code></li>
    <li><code>.fill()</code></li>
    <li><code>.entries()</code></li>
    <li><code>.keys()</code></li>
    <li><code>.values()</code></li>
  </ul>
`,

'builtinref-1-4': `
  <p>Object constructor, static methods, and syntax tools.</p>
  <p><strong>Constructor</strong></p>
  <ul>
    <li><code>Object()</code></li>
  </ul>
  <p><strong>Iteration</strong></p>
  <ul>
    <li><code>Object.keys()</code></li>
    <li><code>Object.values()</code></li>
    <li><code>Object.entries()</code></li>
    <li><code>Object.fromEntries()</code></li>
  </ul>
  <p><strong>Copy & create</strong></p>
  <ul>
    <li><code>Object.assign()</code></li>
    <li><code>Object.create()</code></li>
  </ul>
  <p><strong>Freeze / seal</strong></p>
  <ul>
    <li><code>Object.freeze()</code></li>
    <li><code>Object.isFrozen()</code></li>
    <li><code>Object.seal()</code></li>
    <li><code>Object.isSealed()</code></li>
  </ul>
  <p><strong>Prototype</strong></p>
  <ul>
    <li><code>Object.getPrototypeOf()</code></li>
    <li><code>Object.setPrototypeOf()</code></li>
  </ul>
  <p><strong>Define & inspect properties</strong></p>
  <ul>
    <li><code>Object.defineProperty()</code></li>
    <li><code>Object.defineProperties()</code></li>
    <li><code>Object.getOwnPropertyNames()</code></li>
    <li><code>Object.getOwnPropertyDescriptor()</code></li>
    <li><code>Object.getOwnPropertyDescriptors()</code></li>
    <li><code>Object.getOwnPropertySymbols()</code></li>
  </ul>
  <p><strong>Property checks</strong></p>
  <ul>
    <li><code>Object.hasOwn()</code></li>
    <li><code>.hasOwnProperty()</code></li>
  </ul>
  <p><strong>Equality</strong></p>
  <ul>
    <li><code>Object.is()</code></li>
  </ul>
  <p><strong>Syntax</strong></p>
  <ul>
    <li>Spread: <code>{...obj}</code></li>
  </ul>
`,

'builtinref-1-5': `
  <p>Date constructor, static methods, and instance methods.</p>
  <p><strong>Constructor & static</strong></p>
  <ul>
    <li><code>new Date()</code></li>
    <li><code>Date.now()</code></li>
    <li><code>Date.parse()</code></li>
    <li><code>Date.UTC()</code></li>
  </ul>
  <p><strong>Get parts (local time)</strong></p>
  <ul>
    <li><code>.getFullYear()</code></li>
    <li><code>.getMonth()</code></li>
    <li><code>.getDate()</code></li>
    <li><code>.getDay()</code></li>
    <li><code>.getHours()</code></li>
    <li><code>.getMinutes()</code></li>
    <li><code>.getSeconds()</code></li>
    <li><code>.getMilliseconds()</code></li>
    <li><code>.getTime()</code></li>
    <li><code>.getTimezoneOffset()</code></li>
  </ul>
  <p><strong>Set parts</strong></p>
  <ul>
    <li><code>.setFullYear()</code></li>
    <li><code>.setMonth()</code></li>
    <li><code>.setDate()</code></li>
    <li><code>.setHours()</code></li>
    <li><code>.setMinutes()</code></li>
    <li><code>.setSeconds()</code></li>
    <li><code>.setMilliseconds()</code></li>
    <li><code>.setTime()</code></li>
  </ul>
  <p><strong>Get parts (UTC)</strong></p>
  <ul>
    <li><code>.getUTCFullYear()</code></li>
    <li><code>.getUTCMonth()</code></li>
    <li><code>.getUTCDate()</code></li>
    <li><code>.getUTCDay()</code></li>
    <li><code>.getUTCHours()</code></li>
    <li><code>.getUTCMinutes()</code></li>
    <li><code>.getUTCSeconds()</code></li>
  </ul>
  <p><strong>Formatting</strong></p>
  <ul>
    <li><code>.toISOString()</code></li>
    <li><code>.toDateString()</code></li>
    <li><code>.toTimeString()</code></li>
    <li><code>.toLocaleDateString()</code></li>
    <li><code>.toLocaleTimeString()</code></li>
    <li><code>.toLocaleString()</code></li>
    <li><code>.toJSON()</code></li>
  </ul>
`,

'builtinref-1-6': `
  <p>JSON parsing and stringifying.</p>
  <ul>
    <li><code>JSON.parse()</code></li>
    <li><code>JSON.stringify()</code></li>
  </ul>
`,

'builtinref-1-7': `
  <p>Regular expressions for matching, searching, and replacing text patterns.</p>
  <p><strong>Creation</strong></p>
  <ul>
    <li><code>new RegExp()</code></li>
    <li>Literal syntax: <code>/pattern/flags</code></li>
  </ul>
  <p><strong>Flags</strong></p>
  <ul>
    <li><code>g</code> (global — match all)</li>
    <li><code>i</code> (case-insensitive)</li>
    <li><code>m</code> (multiline)</li>
    <li><code>s</code> (dotall — . matches newlines)</li>
    <li><code>u</code> (unicode)</li>
    <li><code>y</code> (sticky)</li>
    <li><code>d</code> (has indices)</li>
  </ul>
  <p><strong>Methods</strong></p>
  <ul>
    <li><code>.test()</code></li>
    <li><code>.exec()</code></li>
  </ul>
  <p><strong>Pattern parts</strong></p>
  <ul>
    <li><code>[abc]</code> — character class</li>
    <li><code>[a-z]</code> — range</li>
    <li><code>[^abc]</code> — negation</li>
    <li><code>.</code> — any character</li>
    <li><code>^</code> — start anchor</li>
    <li><code>$</code> — end anchor</li>
    <li><code>*</code> — zero or more</li>
    <li><code>+</code> — one or more</li>
    <li><code>?</code> — zero or one</li>
    <li><code>{n,m}</code> — count range</li>
    <li><code>()</code> — capture group</li>
    <li><code>(?&lt;name&gt;)</code> — named capture group</li>
    <li><code>|</code> — alternation</li>
    <li><code>\\d</code> — digit</li>
    <li><code>\\w</code> — word character</li>
    <li><code>\\s</code> — whitespace</li>
    <li><code>\\b</code> — word boundary</li>
  </ul>
`,

'builtinref-1-8': `
  <p>Collections for unique values, keyed pairs, and weakly-referenced versions.</p>
  <p><strong>Set</strong></p>
  <ul>
    <li><code>new Set()</code></li>
    <li><code>.size</code></li>
    <li><code>.add()</code></li>
    <li><code>.has()</code></li>
    <li><code>.delete()</code></li>
    <li><code>.clear()</code></li>
    <li><code>.forEach()</code></li>
    <li><code>.entries()</code></li>
    <li><code>.keys()</code></li>
    <li><code>.values()</code></li>
  </ul>
  <p><strong>Map</strong></p>
  <ul>
    <li><code>new Map()</code></li>
    <li><code>.size</code></li>
    <li><code>.get()</code></li>
    <li><code>.set()</code></li>
    <li><code>.has()</code></li>
    <li><code>.delete()</code></li>
    <li><code>.clear()</code></li>
    <li><code>.forEach()</code></li>
    <li><code>.entries()</code></li>
    <li><code>.keys()</code></li>
    <li><code>.values()</code></li>
  </ul>
  <p><strong>WeakSet</strong></p>
  <ul>
    <li><code>new WeakSet()</code></li>
    <li><code>.add()</code></li>
    <li><code>.has()</code></li>
    <li><code>.delete()</code></li>
  </ul>
  <p><strong>WeakMap</strong></p>
  <ul>
    <li><code>new WeakMap()</code></li>
    <li><code>.get()</code></li>
    <li><code>.set()</code></li>
    <li><code>.has()</code></li>
    <li><code>.delete()</code></li>
  </ul>
`,

'builtinref-1-9': `
  <p>Promise constructor, static methods, and instance methods for async code.</p>
  <p><strong>Constructor</strong></p>
  <ul>
    <li><code>Promise</code></li>
    <li><code>new Promise()</code></li>
  </ul>
  <p><strong>Static creators</strong></p>
  <ul>
    <li><code>Promise.resolve()</code></li>
    <li><code>Promise.reject()</code></li>
  </ul>
  <p><strong>Static combinators</strong></p>
  <ul>
    <li><code>Promise.all()</code></li>
    <li><code>Promise.allSettled()</code></li>
    <li><code>Promise.race()</code></li>
    <li><code>Promise.any()</code></li>
  </ul>
  <p><strong>Instance methods</strong></p>
  <ul>
    <li><code>.then()</code></li>
    <li><code>.catch()</code></li>
    <li><code>.finally()</code></li>
  </ul>
`,

'builtinref-1-10': `
  <p>Built-in error classes and their properties.</p>
  <p><strong>Classes</strong></p>
  <ul>
    <li><code>Error</code></li>
    <li><code>TypeError</code></li>
    <li><code>ReferenceError</code></li>
    <li><code>SyntaxError</code></li>
    <li><code>RangeError</code></li>
    <li><code>URIError</code></li>
    <li><code>EvalError</code></li>
    <li><code>AggregateError</code></li>
  </ul>
  <p><strong>Properties</strong></p>
  <ul>
    <li><code>.name</code></li>
    <li><code>.message</code></li>
    <li><code>.stack</code></li>
    <li><code>.cause</code></li>
  </ul>
`,

'builtinref-1-11': `
  <p>Unique primitive values used as identifiers and well-known symbols.</p>
  <p><strong>Constructor & static</strong></p>
  <ul>
    <li><code>Symbol()</code></li>
    <li><code>Symbol.for()</code></li>
    <li><code>Symbol.keyFor()</code></li>
  </ul>
  <p><strong>Well-known symbols</strong></p>
  <ul>
    <li><code>Symbol.iterator</code></li>
    <li><code>Symbol.asyncIterator</code></li>
    <li><code>Symbol.hasInstance</code></li>
    <li><code>Symbol.toPrimitive</code></li>
  </ul>
`,

'builtinref-1-12': `
  <p>Arbitrary-precision integers for numbers larger than Number can hold.</p>
  <ul>
    <li><code>BigInt()</code></li>
    <li>Literal syntax: <code>123n</code></li>
  </ul>
`,

'builtinref-1-13': `
  <p>Buffers of raw bytes and typed views into them.</p>
  <p><strong>Buffers</strong></p>
  <ul>
    <li><code>ArrayBuffer</code></li>
    <li><code>SharedArrayBuffer</code></li>
    <li><code>DataView</code></li>
  </ul>
  <p><strong>Integer views</strong></p>
  <ul>
    <li><code>Int8Array</code></li>
    <li><code>Uint8Array</code></li>
    <li><code>Uint8ClampedArray</code></li>
    <li><code>Int16Array</code></li>
    <li><code>Uint16Array</code></li>
    <li><code>Int32Array</code></li>
    <li><code>Uint32Array</code></li>
  </ul>
  <p><strong>Float views</strong></p>
  <ul>
    <li><code>Float32Array</code></li>
    <li><code>Float64Array</code></li>
  </ul>
  <p><strong>BigInt views</strong></p>
  <ul>
    <li><code>BigInt64Array</code></li>
    <li><code>BigUint64Array</code></li>
  </ul>
`,

'builtinref-1-14': `
  <p>Locale-aware formatting for numbers, dates, lists, and more.</p>
  <ul>
    <li><code>Intl.NumberFormat</code></li>
    <li><code>Intl.DateTimeFormat</code></li>
    <li><code>Intl.RelativeTimeFormat</code></li>
    <li><code>Intl.ListFormat</code></li>
    <li><code>Intl.PluralRules</code></li>
    <li><code>Intl.Collator</code></li>
    <li><code>Intl.Locale</code></li>
    <li><code>Intl.Segmenter</code></li>
  </ul>
`,


/* -------- 8.3 GLOBAL JS FUNCTIONS -------- */

'builtinref-2-0': `
  <p>Functions callable directly with no object in front.</p>
  <ul>
    <li><code>parseInt()</code></li>
    <li><code>parseFloat()</code></li>
    <li><code>isNaN()</code></li>
    <li><code>isFinite()</code></li>
    <li><code>encodeURI()</code></li>
    <li><code>decodeURI()</code></li>
    <li><code>encodeURIComponent()</code></li>
    <li><code>decodeURIComponent()</code></li>
    <li><code>structuredClone()</code></li>
    <li><code>eval()</code> (avoid)</li>
  </ul>
`,


/* -------- 8.4 BROWSER GLOBAL OBJECTS -------- */

'builtinref-3-0': `
  <p>Objects the browser makes available globally. These are NOT part of JavaScript itself — they're only in browsers.</p>
  <ul>
    <li><code>window</code></li>
    <li><code>document</code></li>
    <li><code>navigator</code></li>
    <li><code>location</code></li>
    <li><code>history</code></li>
    <li><code>screen</code></li>
    <li><code>performance</code></li>
    <li><code>crypto</code></li>
    <li><code>console</code></li>
    <li><code>localStorage</code></li>
    <li><code>sessionStorage</code></li>
    <li><code>indexedDB</code></li>
    <li><code>caches</code></li>
  </ul>
`,


/* -------- 8.5 GLOBAL BROWSER FUNCTIONS -------- */

'builtinref-4-0': `
  <p>Blocking dialog functions provided by the browser.</p>
  <ul>
    <li><code>alert()</code></li>
    <li><code>confirm()</code></li>
    <li><code>prompt()</code></li>
  </ul>
`,

'builtinref-4-1': `
  <p>Scheduling callbacks to run later.</p>
  <ul>
    <li><code>setTimeout()</code></li>
    <li><code>clearTimeout()</code></li>
    <li><code>setInterval()</code></li>
    <li><code>clearInterval()</code></li>
    <li><code>requestAnimationFrame()</code></li>
    <li><code>cancelAnimationFrame()</code></li>
    <li><code>requestIdleCallback()</code></li>
    <li><code>cancelIdleCallback()</code></li>
    <li><code>queueMicrotask()</code></li>
  </ul>
`,

'builtinref-4-2': `
  <p>Sending HTTP requests from the browser.</p>
  <ul>
    <li><code>fetch()</code></li>
  </ul>
`,

'builtinref-4-3': `
  <p>Base64 encoding and decoding.</p>
  <ul>
    <li><code>atob()</code> (base64 → text)</li>
    <li><code>btoa()</code> (text → base64)</li>
  </ul>
`,


/* -------- 8.6 DOM — SELECTING / TRAVERSING -------- */

'builtinref-5-0': `
  <p>Finding elements in the DOM.</p>
  <p><strong>On document</strong></p>
  <ul>
    <li><code>document.querySelector()</code></li>
    <li><code>document.querySelectorAll()</code></li>
    <li><code>document.getElementById()</code></li>
    <li><code>document.getElementsByClassName()</code></li>
    <li><code>document.getElementsByTagName()</code></li>
    <li><code>document.getElementsByName()</code></li>
  </ul>
  <p><strong>On any element</strong></p>
  <ul>
    <li><code>element.querySelector()</code></li>
    <li><code>element.querySelectorAll()</code></li>
  </ul>
`,

'builtinref-5-1': `
  <p>Moving between related elements in the DOM tree.</p>
  <p><strong>Matching & filtering</strong></p>
  <ul>
    <li><code>.closest()</code></li>
    <li><code>.matches()</code></li>
    <li><code>.contains()</code></li>
  </ul>
  <p><strong>Parents</strong></p>
  <ul>
    <li><code>.parentElement</code></li>
    <li><code>.parentNode</code></li>
  </ul>
  <p><strong>Children</strong></p>
  <ul>
    <li><code>.children</code></li>
    <li><code>.childNodes</code></li>
    <li><code>.firstElementChild</code></li>
    <li><code>.lastElementChild</code></li>
    <li><code>.firstChild</code></li>
    <li><code>.lastChild</code></li>
  </ul>
  <p><strong>Siblings</strong></p>
  <ul>
    <li><code>.nextElementSibling</code></li>
    <li><code>.previousElementSibling</code></li>
    <li><code>.nextSibling</code></li>
    <li><code>.previousSibling</code></li>
  </ul>
`,


/* -------- 8.7 DOM — CREATING / INSERTING / REMOVING -------- */

'builtinref-6-0': `
  <p>Making new DOM nodes.</p>
  <ul>
    <li><code>document.createElement()</code></li>
    <li><code>document.createTextNode()</code></li>
    <li><code>document.createDocumentFragment()</code></li>
    <li><code>document.createComment()</code></li>
    <li><code>.cloneNode()</code></li>
  </ul>
`,

'builtinref-6-1': `
  <p>Adding nodes into the DOM tree.</p>
  <p><strong>Modern methods</strong></p>
  <ul>
    <li><code>.append()</code></li>
    <li><code>.prepend()</code></li>
    <li><code>.before()</code></li>
    <li><code>.after()</code></li>
  </ul>
  <p><strong>Older methods</strong></p>
  <ul>
    <li><code>.appendChild()</code></li>
    <li><code>.insertBefore()</code></li>
  </ul>
  <p><strong>Positional</strong></p>
  <ul>
    <li><code>.insertAdjacentElement()</code></li>
    <li><code>.insertAdjacentHTML()</code></li>
    <li><code>.insertAdjacentText()</code></li>
  </ul>
  <p><strong>Replace</strong></p>
  <ul>
    <li><code>.replaceChild()</code></li>
    <li><code>.replaceWith()</code></li>
    <li><code>.replaceChildren()</code></li>
  </ul>
`,

'builtinref-6-2': `
  <p>Taking nodes out of the DOM.</p>
  <ul>
    <li><code>.remove()</code></li>
    <li><code>.removeChild()</code></li>
  </ul>
`,


/* -------- 8.8 DOM — READING / WRITING CONTENT -------- */

'builtinref-7-0': `
  <p>Text and HTML content properties.</p>
  <ul>
    <li><code>.textContent</code></li>
    <li><code>.innerText</code></li>
    <li><code>.innerHTML</code></li>
    <li><code>.outerHTML</code></li>
  </ul>
`,

'builtinref-7-1': `
  <p>Reading and writing element attributes.</p>
  <ul>
    <li><code>.setAttribute()</code></li>
    <li><code>.getAttribute()</code></li>
    <li><code>.removeAttribute()</code></li>
    <li><code>.hasAttribute()</code></li>
    <li><code>.hasAttributes()</code></li>
    <li><code>.getAttributeNames()</code></li>
    <li><code>.toggleAttribute()</code></li>
  </ul>
`,

'builtinref-7-2': `
  <p>Working with CSS classes on elements.</p>
  <p><strong>String access</strong></p>
  <ul>
    <li><code>.className</code></li>
  </ul>
  <p><strong>Token list (recommended)</strong></p>
  <ul>
    <li><code>.classList.add()</code></li>
    <li><code>.classList.remove()</code></li>
    <li><code>.classList.toggle()</code></li>
    <li><code>.classList.contains()</code></li>
    <li><code>.classList.replace()</code></li>
  </ul>
`,

'builtinref-7-3': `
  <p>Inline styles and custom data attributes.</p>
  <ul>
    <li><code>.style</code> (any CSS property, camelCased — see 8.20)</li>
    <li><code>.dataset</code> (any <code>data-*</code> attribute)</li>
  </ul>
`,


/* -------- 8.9 DOM — SIZE / POSITION / SCROLL -------- */

'builtinref-8-0': `
  <p>Element dimensions.</p>
  <ul>
    <li><code>.offsetWidth</code></li>
    <li><code>.offsetHeight</code></li>
    <li><code>.clientWidth</code></li>
    <li><code>.clientHeight</code></li>
    <li><code>.scrollWidth</code></li>
    <li><code>.scrollHeight</code></li>
    <li><code>.getBoundingClientRect()</code> → returns <code>{ x, y, width, height, top, right, bottom, left }</code></li>
  </ul>
`,

'builtinref-8-1': `
  <p>Where an element sits relative to its offset parent.</p>
  <ul>
    <li><code>.offsetTop</code></li>
    <li><code>.offsetLeft</code></li>
    <li><code>.offsetParent</code></li>
    <li><code>.clientTop</code></li>
    <li><code>.clientLeft</code></li>
  </ul>
`,

'builtinref-8-2': `
  <p>Scroll position and control, plus viewport size.</p>
  <p><strong>On elements</strong></p>
  <ul>
    <li><code>.scrollTop</code></li>
    <li><code>.scrollLeft</code></li>
    <li><code>.scroll()</code></li>
    <li><code>.scrollTo()</code></li>
    <li><code>.scrollBy()</code></li>
    <li><code>.scrollIntoView()</code></li>
  </ul>
  <p><strong>On window</strong></p>
  <ul>
    <li><code>window.scrollX</code></li>
    <li><code>window.scrollY</code></li>
    <li><code>window.pageXOffset</code></li>
    <li><code>window.pageYOffset</code></li>
    <li><code>window.innerWidth</code></li>
    <li><code>window.innerHeight</code></li>
    <li><code>window.outerWidth</code></li>
    <li><code>window.outerHeight</code></li>
  </ul>
`,


/* -------- 8.10 DOM — FORM / INPUT PROPERTIES -------- */

'builtinref-9-0': `
  <p>Reading and writing values from form fields.</p>
  <ul>
    <li><code>.value</code></li>
    <li><code>.defaultValue</code></li>
    <li><code>.files</code> (file inputs)</li>
    <li><code>.selectedIndex</code> (select)</li>
    <li><code>.selectedOptions</code> (select)</li>
    <li><code>.options</code> (select)</li>
  </ul>
`,

'builtinref-9-1': `
  <p>Boolean state properties on form elements.</p>
  <p><strong>Common state</strong></p>
  <ul>
    <li><code>.checked</code></li>
    <li><code>.defaultChecked</code></li>
    <li><code>.disabled</code></li>
    <li><code>.readOnly</code></li>
    <li><code>.required</code></li>
    <li><code>.selected</code> (option)</li>
    <li><code>.hidden</code></li>
    <li><code>.open</code> (details/dialog)</li>
  </ul>
  <p><strong>Validation</strong></p>
  <ul>
    <li><code>.validity</code></li>
    <li><code>.validationMessage</code></li>
    <li><code>.checkValidity()</code></li>
    <li><code>.reportValidity()</code></li>
    <li><code>.setCustomValidity()</code></li>
  </ul>
`,


/* -------- 8.11 DOM — ELEMENT ACTIONS -------- */

'builtinref-10-0': `
  <p>Methods that make an element do something.</p>
  <ul>
    <li><code>.focus()</code></li>
    <li><code>.blur()</code></li>
    <li><code>.click()</code></li>
    <li><code>.submit()</code> (form)</li>
    <li><code>.reset()</code> (form)</li>
    <li><code>.play()</code> (media)</li>
    <li><code>.pause()</code> (media)</li>
    <li><code>.load()</code> (media)</li>
    <li><code>.showModal()</code> (dialog)</li>
    <li><code>.close()</code> (dialog)</li>
    <li><code>.requestFullscreen()</code></li>
    <li><code>document.exitFullscreen()</code></li>
    <li><code>.animate()</code></li>
    <li><code>.getAnimations()</code></li>
  </ul>
`,


/* -------- 8.12 EVENTS — ATTACHING -------- */

'builtinref-11-0': `
  <p>Listening for and firing events.</p>
  <p><strong>Modern (recommended)</strong></p>
  <ul>
    <li><code>.addEventListener()</code></li>
    <li><code>.removeEventListener()</code></li>
    <li><code>.dispatchEvent()</code></li>
  </ul>
  <p><strong>Constructors for custom events</strong></p>
  <ul>
    <li><code>new Event()</code></li>
    <li><code>new CustomEvent()</code></li>
  </ul>
  <p><strong>Older property style</strong></p>
  <ul>
    <li><code>.onclick</code></li>
    <li><code>.onchange</code></li>
    <li><code>.onsubmit</code></li>
    <li><code>.onload</code></li>
    <li><code>.onkeydown</code></li>
    <li>(etc. — one per event name)</li>
  </ul>
`,


/* -------- 8.13 EVENT NAMES -------- */

'builtinref-12-0': `
  <p>Mouse-related event name strings.</p>
  <ul>
    <li><code>"click"</code></li>
    <li><code>"dblclick"</code></li>
    <li><code>"contextmenu"</code></li>
    <li><code>"auxclick"</code></li>
    <li><code>"mousedown"</code></li>
    <li><code>"mouseup"</code></li>
    <li><code>"mousemove"</code></li>
    <li><code>"mouseover"</code></li>
    <li><code>"mouseout"</code></li>
    <li><code>"mouseenter"</code></li>
    <li><code>"mouseleave"</code></li>
    <li><code>"wheel"</code></li>
  </ul>
`,

'builtinref-12-1': `
  <p>Keyboard event name strings.</p>
  <ul>
    <li><code>"keydown"</code></li>
    <li><code>"keyup"</code></li>
    <li><code>"keypress"</code> (deprecated)</li>
  </ul>
`,

'builtinref-12-2': `
  <p>Form-related event name strings.</p>
  <ul>
    <li><code>"submit"</code></li>
    <li><code>"reset"</code></li>
    <li><code>"invalid"</code></li>
    <li><code>"change"</code></li>
    <li><code>"input"</code></li>
    <li><code>"beforeinput"</code></li>
    <li><code>"focus"</code></li>
    <li><code>"blur"</code></li>
    <li><code>"focusin"</code></li>
    <li><code>"focusout"</code></li>
    <li><code>"select"</code></li>
  </ul>
`,

'builtinref-12-3': `
  <p>Touch event name strings.</p>
  <ul>
    <li><code>"touchstart"</code></li>
    <li><code>"touchend"</code></li>
    <li><code>"touchmove"</code></li>
    <li><code>"touchcancel"</code></li>
  </ul>
`,

'builtinref-12-4': `
  <p>Pointer event name strings (unified mouse/touch/pen).</p>
  <ul>
    <li><code>"pointerdown"</code></li>
    <li><code>"pointerup"</code></li>
    <li><code>"pointermove"</code></li>
    <li><code>"pointercancel"</code></li>
    <li><code>"pointerover"</code></li>
    <li><code>"pointerout"</code></li>
    <li><code>"pointerenter"</code></li>
    <li><code>"pointerleave"</code></li>
    <li><code>"gotpointercapture"</code></li>
    <li><code>"lostpointercapture"</code></li>
  </ul>
`,

'builtinref-12-5': `
  <p>Events for the window, document, and page lifecycle.</p>
  <ul>
    <li><code>"load"</code></li>
    <li><code>"DOMContentLoaded"</code></li>
    <li><code>"beforeunload"</code></li>
    <li><code>"unload"</code></li>
    <li><code>"pagehide"</code></li>
    <li><code>"pageshow"</code></li>
    <li><code>"resize"</code></li>
    <li><code>"scroll"</code></li>
    <li><code>"scrollend"</code></li>
    <li><code>"visibilitychange"</code></li>
    <li><code>"hashchange"</code></li>
    <li><code>"popstate"</code></li>
    <li><code>"error"</code></li>
    <li><code>"unhandledrejection"</code></li>
  </ul>
`,

'builtinref-12-6': `
  <p>Audio and video element events.</p>
  <ul>
    <li><code>"play"</code></li>
    <li><code>"pause"</code></li>
    <li><code>"ended"</code></li>
    <li><code>"timeupdate"</code></li>
    <li><code>"durationchange"</code></li>
    <li><code>"volumechange"</code></li>
    <li><code>"loadedmetadata"</code></li>
    <li><code>"loadeddata"</code></li>
    <li><code>"canplay"</code></li>
    <li><code>"canplaythrough"</code></li>
    <li><code>"waiting"</code></li>
    <li><code>"stalled"</code></li>
    <li><code>"seeking"</code></li>
    <li><code>"seeked"</code></li>
  </ul>
`,

'builtinref-12-7': `
  <p>Drag and drop event name strings.</p>
  <ul>
    <li><code>"dragstart"</code></li>
    <li><code>"drag"</code></li>
    <li><code>"dragend"</code></li>
    <li><code>"dragenter"</code></li>
    <li><code>"dragover"</code></li>
    <li><code>"dragleave"</code></li>
    <li><code>"drop"</code></li>
  </ul>
`,

'builtinref-12-8': `
  <p>Clipboard event name strings.</p>
  <ul>
    <li><code>"copy"</code></li>
    <li><code>"cut"</code></li>
    <li><code>"paste"</code></li>
  </ul>
`,

'builtinref-12-9': `
  <p>Animation and CSS transition event name strings.</p>
  <ul>
    <li><code>"animationstart"</code></li>
    <li><code>"animationend"</code></li>
    <li><code>"animationiteration"</code></li>
    <li><code>"animationcancel"</code></li>
    <li><code>"transitionstart"</code></li>
    <li><code>"transitionend"</code></li>
    <li><code>"transitionrun"</code></li>
    <li><code>"transitioncancel"</code></li>
  </ul>
`,

'builtinref-12-10': `
  <p>Network connectivity event name strings.</p>
  <ul>
    <li><code>"online"</code></li>
    <li><code>"offline"</code></li>
  </ul>
`,

'builtinref-12-11': `
  <p>The storage event — fires in OTHER tabs when localStorage/sessionStorage changes.</p>
  <ul>
    <li><code>"storage"</code></li>
  </ul>
`,


/* -------- 8.14 EVENT OBJECT PROPERTIES -------- */

'builtinref-13-0': `
  <p>Properties available on every event object.</p>
  <ul>
    <li><code>.target</code></li>
    <li><code>.currentTarget</code></li>
    <li><code>.relatedTarget</code></li>
    <li><code>.type</code></li>
    <li><code>.timeStamp</code></li>
    <li><code>.isTrusted</code></li>
    <li><code>.bubbles</code></li>
    <li><code>.cancelable</code></li>
    <li><code>.composed</code></li>
    <li><code>.defaultPrevented</code></li>
    <li><code>.eventPhase</code></li>
  </ul>
`,

'builtinref-13-1': `
  <p>Properties specific to mouse events.</p>
  <ul>
    <li><code>.clientX</code></li>
    <li><code>.clientY</code></li>
    <li><code>.pageX</code></li>
    <li><code>.pageY</code></li>
    <li><code>.screenX</code></li>
    <li><code>.screenY</code></li>
    <li><code>.offsetX</code></li>
    <li><code>.offsetY</code></li>
    <li><code>.movementX</code></li>
    <li><code>.movementY</code></li>
    <li><code>.button</code></li>
    <li><code>.buttons</code></li>
  </ul>
`,

'builtinref-13-2': `
  <p>Properties specific to keyboard events.</p>
  <ul>
    <li><code>.key</code></li>
    <li><code>.code</code></li>
    <li><code>.keyCode</code> (deprecated)</li>
    <li><code>.which</code> (deprecated)</li>
    <li><code>.repeat</code></li>
    <li><code>.location</code></li>
  </ul>
`,

'builtinref-13-3': `
  <p>Modifier key flags available on mouse, keyboard, and pointer events.</p>
  <ul>
    <li><code>.altKey</code></li>
    <li><code>.ctrlKey</code></li>
    <li><code>.shiftKey</code></li>
    <li><code>.metaKey</code></li>
  </ul>
`,

'builtinref-13-4': `
  <p>Properties specific to touch events.</p>
  <ul>
    <li><code>.touches</code></li>
    <li><code>.targetTouches</code></li>
    <li><code>.changedTouches</code></li>
  </ul>
`,

'builtinref-13-5': `
  <p>Properties specific to pointer events.</p>
  <ul>
    <li><code>.pointerId</code></li>
    <li><code>.pointerType</code></li>
    <li><code>.pressure</code></li>
    <li><code>.tangentialPressure</code></li>
    <li><code>.tiltX</code></li>
    <li><code>.tiltY</code></li>
    <li><code>.twist</code></li>
    <li><code>.width</code></li>
    <li><code>.height</code></li>
    <li><code>.isPrimary</code></li>
  </ul>
`,

'builtinref-13-6': `
  <p>Properties specific to wheel events.</p>
  <ul>
    <li><code>.deltaX</code></li>
    <li><code>.deltaY</code></li>
    <li><code>.deltaZ</code></li>
    <li><code>.deltaMode</code></li>
  </ul>
`,

'builtinref-13-7': `
  <p>Properties specific to drag events.</p>
  <ul>
    <li><code>.dataTransfer</code></li>
  </ul>
`,

'builtinref-13-8': `
  <p>Properties specific to clipboard events.</p>
  <ul>
    <li><code>.clipboardData</code></li>
  </ul>
`,

'builtinref-13-9': `
  <p>Properties specific to input events.</p>
  <ul>
    <li><code>.data</code></li>
    <li><code>.inputType</code></li>
    <li><code>.isComposing</code></li>
  </ul>
`,

'builtinref-13-10': `
  <p>Properties specific to animation and transition events.</p>
  <ul>
    <li><code>.animationName</code></li>
    <li><code>.propertyName</code></li>
    <li><code>.elapsedTime</code></li>
    <li><code>.pseudoElement</code></li>
  </ul>
`,


/* -------- 8.15 EVENT OBJECT METHODS -------- */

'builtinref-14-0': `
  <p>Methods callable on the event object.</p>
  <ul>
    <li><code>.preventDefault()</code></li>
    <li><code>.stopPropagation()</code></li>
    <li><code>.stopImmediatePropagation()</code></li>
    <li><code>.composedPath()</code></li>
  </ul>
`,


/* -------- 8.16 KEYBOARD .key VALUES -------- */

'builtinref-15-0': `
  <p>Named keys returned by <code>event.key</code>.</p>
  <ul>
    <li><code>"Enter"</code></li>
    <li><code>"Escape"</code></li>
    <li><code>"Tab"</code></li>
    <li><code>"Backspace"</code></li>
    <li><code>"Delete"</code></li>
    <li><code>" "</code> (space)</li>
    <li><code>"Shift"</code></li>
    <li><code>"Control"</code></li>
    <li><code>"Alt"</code></li>
    <li><code>"Meta"</code></li>
    <li><code>"CapsLock"</code></li>
    <li><code>"Insert"</code></li>
    <li><code>"Home"</code></li>
    <li><code>"End"</code></li>
    <li><code>"PageUp"</code></li>
    <li><code>"PageDown"</code></li>
    <li><code>"ContextMenu"</code></li>
    <li><code>"PrintScreen"</code></li>
    <li><code>"Pause"</code></li>
    <li><code>"ScrollLock"</code></li>
    <li><code>"NumLock"</code></li>
  </ul>
`,

'builtinref-15-1': `
  <p>Arrow keys returned by <code>event.key</code>.</p>
  <ul>
    <li><code>"ArrowUp"</code></li>
    <li><code>"ArrowDown"</code></li>
    <li><code>"ArrowLeft"</code></li>
    <li><code>"ArrowRight"</code></li>
  </ul>
`,

'builtinref-15-2': `
  <p>Function keys returned by <code>event.key</code>.</p>
  <ul>
    <li><code>"F1"</code></li>
    <li><code>"F2"</code></li>
    <li><code>"F3"</code></li>
    <li><code>"F4"</code></li>
    <li><code>"F5"</code></li>
    <li><code>"F6"</code></li>
    <li><code>"F7"</code></li>
    <li><code>"F8"</code></li>
    <li><code>"F9"</code></li>
    <li><code>"F10"</code></li>
    <li><code>"F11"</code></li>
    <li><code>"F12"</code></li>
  </ul>
`,

'builtinref-15-3': `
  <p>Regular character keys returned by <code>event.key</code>.</p>
  <ul>
    <li>Letters: <code>"a"</code> through <code>"z"</code> (lowercase), or <code>"A"</code> through <code>"Z"</code> (with shift)</li>
    <li>Digits: <code>"0"</code> through <code>"9"</code></li>
    <li>Symbols: <code>"!"</code>, <code>"@"</code>, <code>"#"</code>, <code>"$"</code>, <code>"%"</code>, <code>"^"</code>, <code>"&"</code>, <code>"*"</code>, <code>"("</code>, <code>")"</code>, <code>"-"</code>, <code>"_"</code>, <code>"="</code>, <code>"+"</code>, <code>"["</code>, <code>"]"</code>, <code>"{"</code>, <code>"}"</code>, <code>"\\\\"</code>, <code>"|"</code>, <code>";"</code>, <code>":"</code>, <code>"'"</code>, <code>"\\""</code>, <code>","</code>, <code>"."</code>, <code>"&lt;"</code>, <code>"&gt;"</code>, <code>"/"</code>, <code>"?"</code>, <code>"\`"</code>, <code>"~"</code></li>
  </ul>
`,


/* -------- 8.17 HTML TAG NAMES -------- */

'builtinref-16-0': `
  <p>Structural layout tags.</p>
  <ul>
    <li><code>"html"</code></li>
    <li><code>"head"</code></li>
    <li><code>"body"</code></li>
    <li><code>"header"</code></li>
    <li><code>"footer"</code></li>
    <li><code>"nav"</code></li>
    <li><code>"main"</code></li>
    <li><code>"aside"</code></li>
    <li><code>"section"</code></li>
    <li><code>"article"</code></li>
    <li><code>"div"</code></li>
    <li><code>"span"</code></li>
  </ul>
`,

'builtinref-16-1': `
  <p>Text content tags.</p>
  <ul>
    <li><code>"h1"</code>, <code>"h2"</code>, <code>"h3"</code>, <code>"h4"</code>, <code>"h5"</code>, <code>"h6"</code></li>
    <li><code>"hgroup"</code></li>
    <li><code>"p"</code></li>
    <li><code>"a"</code></li>
    <li><code>"br"</code></li>
    <li><code>"hr"</code></li>
    <li><code>"strong"</code></li>
    <li><code>"em"</code></li>
    <li><code>"b"</code></li>
    <li><code>"i"</code></li>
    <li><code>"u"</code></li>
    <li><code>"s"</code></li>
    <li><code>"mark"</code></li>
    <li><code>"small"</code></li>
    <li><code>"sub"</code></li>
    <li><code>"sup"</code></li>
    <li><code>"code"</code></li>
    <li><code>"pre"</code></li>
    <li><code>"kbd"</code></li>
    <li><code>"samp"</code></li>
    <li><code>"var"</code></li>
    <li><code>"blockquote"</code></li>
    <li><code>"cite"</code></li>
    <li><code>"q"</code></li>
    <li><code>"abbr"</code></li>
    <li><code>"time"</code></li>
    <li><code>"address"</code></li>
  </ul>
`,

'builtinref-16-2': `
  <p>List tags.</p>
  <ul>
    <li><code>"ul"</code></li>
    <li><code>"ol"</code></li>
    <li><code>"li"</code></li>
    <li><code>"dl"</code></li>
    <li><code>"dt"</code></li>
    <li><code>"dd"</code></li>
  </ul>
`,

'builtinref-16-3': `
  <p>Media and embed tags.</p>
  <ul>
    <li><code>"img"</code></li>
    <li><code>"picture"</code></li>
    <li><code>"source"</code></li>
    <li><code>"video"</code></li>
    <li><code>"audio"</code></li>
    <li><code>"track"</code></li>
    <li><code>"iframe"</code></li>
    <li><code>"embed"</code></li>
    <li><code>"object"</code></li>
    <li><code>"param"</code></li>
    <li><code>"canvas"</code></li>
    <li><code>"svg"</code></li>
    <li><code>"math"</code></li>
    <li><code>"figure"</code></li>
    <li><code>"figcaption"</code></li>
  </ul>
`,

'builtinref-16-4': `
  <p>Form tags.</p>
  <ul>
    <li><code>"form"</code></li>
    <li><code>"input"</code></li>
    <li><code>"textarea"</code></li>
    <li><code>"select"</code></li>
    <li><code>"option"</code></li>
    <li><code>"optgroup"</code></li>
    <li><code>"datalist"</code></li>
    <li><code>"button"</code></li>
    <li><code>"label"</code></li>
    <li><code>"fieldset"</code></li>
    <li><code>"legend"</code></li>
    <li><code>"output"</code></li>
    <li><code>"progress"</code></li>
    <li><code>"meter"</code></li>
  </ul>
`,

'builtinref-16-5': `
  <p>Table tags.</p>
  <ul>
    <li><code>"table"</code></li>
    <li><code>"thead"</code></li>
    <li><code>"tbody"</code></li>
    <li><code>"tfoot"</code></li>
    <li><code>"tr"</code></li>
    <li><code>"th"</code></li>
    <li><code>"td"</code></li>
    <li><code>"caption"</code></li>
    <li><code>"col"</code></li>
    <li><code>"colgroup"</code></li>
  </ul>
`,

'builtinref-16-6': `
  <p>Interactive and template tags.</p>
  <ul>
    <li><code>"dialog"</code></li>
    <li><code>"details"</code></li>
    <li><code>"summary"</code></li>
    <li><code>"menu"</code></li>
    <li><code>"template"</code></li>
    <li><code>"slot"</code></li>
  </ul>
`,

'builtinref-16-7': `
  <p>Tags used inside <code>&lt;head&gt;</code>.</p>
  <ul>
    <li><code>"title"</code></li>
    <li><code>"meta"</code></li>
    <li><code>"link"</code></li>
    <li><code>"style"</code></li>
    <li><code>"script"</code></li>
    <li><code>"noscript"</code></li>
    <li><code>"base"</code></li>
  </ul>
`,


/* -------- 8.18 HTML ATTRIBUTES -------- */

'builtinref-17-0': `
  <p>Attributes usable on any HTML element.</p>
  <ul>
    <li><code>id</code></li>
    <li><code>class</code></li>
    <li><code>style</code></li>
    <li><code>title</code></li>
    <li><code>hidden</code></li>
    <li><code>lang</code></li>
    <li><code>dir</code></li>
    <li><code>tabindex</code></li>
    <li><code>contenteditable</code></li>
    <li><code>draggable</code></li>
    <li><code>translate</code></li>
    <li><code>spellcheck</code></li>
    <li><code>accesskey</code></li>
    <li><code>slot</code></li>
    <li><code>is</code></li>
    <li><code>data-*</code> (custom)</li>
    <li><code>aria-*</code> (accessibility)</li>
    <li><code>role</code></li>
  </ul>
`,

'builtinref-17-1': `
  <p>Link and media attributes.</p>
  <ul>
    <li><code>href</code></li>
    <li><code>target</code></li>
    <li><code>rel</code></li>
    <li><code>download</code></li>
    <li><code>hreflang</code></li>
    <li><code>src</code></li>
    <li><code>srcset</code></li>
    <li><code>sizes</code></li>
    <li><code>alt</code></li>
    <li><code>crossorigin</code></li>
    <li><code>referrerpolicy</code></li>
    <li><code>loading</code></li>
    <li><code>decoding</code></li>
    <li><code>media</code></li>
    <li><code>type</code></li>
  </ul>
`,

'builtinref-17-2': `
  <p>Form and input attributes.</p>
  <p><strong>On <code>&lt;input&gt;</code> / <code>&lt;textarea&gt;</code> / <code>&lt;select&gt;</code></strong></p>
  <ul>
    <li><code>type</code></li>
    <li><code>name</code></li>
    <li><code>value</code></li>
    <li><code>placeholder</code></li>
    <li><code>required</code></li>
    <li><code>disabled</code></li>
    <li><code>readonly</code></li>
    <li><code>checked</code></li>
    <li><code>selected</code></li>
    <li><code>multiple</code></li>
    <li><code>autofocus</code></li>
    <li><code>min</code></li>
    <li><code>max</code></li>
    <li><code>step</code></li>
    <li><code>pattern</code></li>
    <li><code>maxlength</code></li>
    <li><code>minlength</code></li>
    <li><code>size</code></li>
    <li><code>autocomplete</code></li>
    <li><code>autocapitalize</code></li>
    <li><code>inputmode</code></li>
    <li><code>enterkeyhint</code></li>
    <li><code>accept</code></li>
    <li><code>capture</code></li>
  </ul>
  <p><strong>Submit overrides on buttons/inputs</strong></p>
  <ul>
    <li><code>form</code></li>
    <li><code>formaction</code></li>
    <li><code>formmethod</code></li>
    <li><code>formenctype</code></li>
    <li><code>formtarget</code></li>
    <li><code>formnovalidate</code></li>
  </ul>
  <p><strong>On <code>&lt;form&gt;</code></strong></p>
  <ul>
    <li><code>action</code></li>
    <li><code>method</code></li>
    <li><code>enctype</code></li>
    <li><code>novalidate</code></li>
    <li><code>target</code></li>
  </ul>
`,

'builtinref-17-3': `
  <p>Media element attributes.</p>
  <ul>
    <li><code>controls</code></li>
    <li><code>autoplay</code></li>
    <li><code>loop</code></li>
    <li><code>muted</code></li>
    <li><code>preload</code></li>
    <li><code>poster</code></li>
    <li><code>playsinline</code></li>
  </ul>
`,

'builtinref-17-4': `
  <p>Table cell attributes.</p>
  <ul>
    <li><code>colspan</code></li>
    <li><code>rowspan</code></li>
    <li><code>scope</code></li>
    <li><code>headers</code></li>
  </ul>
`,

'builtinref-17-5': `
  <p>iframe attributes.</p>
  <ul>
    <li><code>sandbox</code></li>
    <li><code>allow</code></li>
    <li><code>allowfullscreen</code></li>
    <li><code>loading</code></li>
    <li><code>referrerpolicy</code></li>
    <li><code>srcdoc</code></li>
  </ul>
`,


/* -------- 8.19 INPUT TYPES -------- */

'builtinref-18-0': `
  <p>Values for the <code>type</code> attribute on <code>&lt;input&gt;</code>.</p>
  <p><strong>Text-based</strong></p>
  <ul>
    <li><code>"text"</code></li>
    <li><code>"password"</code></li>
    <li><code>"email"</code></li>
    <li><code>"tel"</code></li>
    <li><code>"url"</code></li>
    <li><code>"search"</code></li>
  </ul>
  <p><strong>Number-based</strong></p>
  <ul>
    <li><code>"number"</code></li>
    <li><code>"range"</code></li>
  </ul>
  <p><strong>Date & time</strong></p>
  <ul>
    <li><code>"date"</code></li>
    <li><code>"time"</code></li>
    <li><code>"datetime-local"</code></li>
    <li><code>"month"</code></li>
    <li><code>"week"</code></li>
  </ul>
  <p><strong>Special</strong></p>
  <ul>
    <li><code>"color"</code></li>
    <li><code>"file"</code></li>
    <li><code>"checkbox"</code></li>
    <li><code>"radio"</code></li>
  </ul>
  <p><strong>Buttons</strong></p>
  <ul>
    <li><code>"submit"</code></li>
    <li><code>"reset"</code></li>
    <li><code>"button"</code></li>
    <li><code>"image"</code></li>
  </ul>
  <p><strong>Hidden</strong></p>
  <ul>
    <li><code>"hidden"</code></li>
  </ul>
`,


/* -------- 8.20 CSS STYLE PROPERTIES -------- */

'builtinref-19-0': `
  <p>Color-related CSS properties (camelCased in JS).</p>
  <ul>
    <li><code>color</code></li>
    <li><code>backgroundColor</code></li>
    <li><code>borderColor</code></li>
    <li><code>outlineColor</code></li>
    <li><code>caretColor</code></li>
    <li><code>accentColor</code></li>
  </ul>
`,

'builtinref-19-1': `
  <p>Layout and box-model properties.</p>
  <ul>
    <li><code>display</code></li>
    <li><code>boxSizing</code></li>
    <li><code>visibility</code></li>
    <li><code>width</code></li>
    <li><code>height</code></li>
    <li><code>minWidth</code></li>
    <li><code>maxWidth</code></li>
    <li><code>minHeight</code></li>
    <li><code>maxHeight</code></li>
    <li><code>margin</code></li>
    <li><code>marginTop</code></li>
    <li><code>marginRight</code></li>
    <li><code>marginBottom</code></li>
    <li><code>marginLeft</code></li>
    <li><code>padding</code></li>
    <li><code>paddingTop</code></li>
    <li><code>paddingRight</code></li>
    <li><code>paddingBottom</code></li>
    <li><code>paddingLeft</code></li>
    <li><code>border</code></li>
    <li><code>borderWidth</code></li>
    <li><code>borderStyle</code></li>
    <li><code>borderRadius</code></li>
    <li><code>outline</code></li>
    <li><code>outlineWidth</code></li>
    <li><code>outlineStyle</code></li>
    <li><code>outlineOffset</code></li>
  </ul>
`,

'builtinref-19-2': `
  <p>Positioning properties.</p>
  <ul>
    <li><code>position</code></li>
    <li><code>top</code></li>
    <li><code>right</code></li>
    <li><code>bottom</code></li>
    <li><code>left</code></li>
    <li><code>zIndex</code></li>
    <li><code>inset</code></li>
  </ul>
`,

'builtinref-19-3': `
  <p>Flexbox properties.</p>
  <ul>
    <li><code>flex</code></li>
    <li><code>flexDirection</code></li>
    <li><code>flexWrap</code></li>
    <li><code>flexBasis</code></li>
    <li><code>flexGrow</code></li>
    <li><code>flexShrink</code></li>
    <li><code>justifyContent</code></li>
    <li><code>alignItems</code></li>
    <li><code>alignSelf</code></li>
    <li><code>alignContent</code></li>
    <li><code>gap</code></li>
    <li><code>rowGap</code></li>
    <li><code>columnGap</code></li>
    <li><code>order</code></li>
  </ul>
`,

'builtinref-19-4': `
  <p>Grid layout properties.</p>
  <ul>
    <li><code>grid</code></li>
    <li><code>gridTemplate</code></li>
    <li><code>gridTemplateColumns</code></li>
    <li><code>gridTemplateRows</code></li>
    <li><code>gridTemplateAreas</code></li>
    <li><code>gridColumn</code></li>
    <li><code>gridRow</code></li>
    <li><code>gridArea</code></li>
    <li><code>gridAutoFlow</code></li>
    <li><code>gridAutoColumns</code></li>
    <li><code>gridAutoRows</code></li>
    <li><code>justifyItems</code></li>
    <li><code>placeItems</code></li>
    <li><code>placeContent</code></li>
  </ul>
`,

'builtinref-19-5': `
  <p>Typography properties.</p>
  <ul>
    <li><code>fontSize</code></li>
    <li><code>fontFamily</code></li>
    <li><code>fontWeight</code></li>
    <li><code>fontStyle</code></li>
    <li><code>fontVariant</code></li>
    <li><code>lineHeight</code></li>
    <li><code>letterSpacing</code></li>
    <li><code>wordSpacing</code></li>
    <li><code>textAlign</code></li>
    <li><code>textDecoration</code></li>
    <li><code>textDecorationColor</code></li>
    <li><code>textDecorationStyle</code></li>
    <li><code>textDecorationThickness</code></li>
    <li><code>textTransform</code></li>
    <li><code>textIndent</code></li>
    <li><code>textShadow</code></li>
    <li><code>textOverflow</code></li>
    <li><code>whiteSpace</code></li>
    <li><code>wordBreak</code></li>
    <li><code>wordWrap</code></li>
    <li><code>overflowWrap</code></li>
    <li><code>hyphens</code></li>
    <li><code>verticalAlign</code></li>
  </ul>
`,

'builtinref-19-6': `
  <p>Visual effects properties.</p>
  <ul>
    <li><code>opacity</code></li>
    <li><code>transform</code></li>
    <li><code>transformOrigin</code></li>
    <li><code>perspective</code></li>
    <li><code>transition</code></li>
    <li><code>transitionProperty</code></li>
    <li><code>transitionDuration</code></li>
    <li><code>transitionTimingFunction</code></li>
    <li><code>transitionDelay</code></li>
    <li><code>animation</code></li>
    <li><code>animationName</code></li>
    <li><code>animationDuration</code></li>
    <li><code>animationTimingFunction</code></li>
    <li><code>animationDelay</code></li>
    <li><code>animationIterationCount</code></li>
    <li><code>animationDirection</code></li>
    <li><code>animationFillMode</code></li>
    <li><code>animationPlayState</code></li>
    <li><code>filter</code></li>
    <li><code>backdropFilter</code></li>
    <li><code>boxShadow</code></li>
  </ul>
`,

'builtinref-19-7': `
  <p>Overflow and visibility properties.</p>
  <ul>
    <li><code>overflow</code></li>
    <li><code>overflowX</code></li>
    <li><code>overflowY</code></li>
    <li><code>scrollBehavior</code></li>
    <li><code>scrollMargin</code></li>
    <li><code>scrollPadding</code></li>
    <li><code>scrollSnapType</code></li>
    <li><code>scrollSnapAlign</code></li>
    <li><code>cursor</code></li>
    <li><code>pointerEvents</code></li>
    <li><code>userSelect</code></li>
    <li><code>resize</code></li>
  </ul>
`,

'builtinref-19-8': `
  <p>Background properties.</p>
  <ul>
    <li><code>background</code></li>
    <li><code>backgroundImage</code></li>
    <li><code>backgroundColor</code></li>
    <li><code>backgroundSize</code></li>
    <li><code>backgroundPosition</code></li>
    <li><code>backgroundRepeat</code></li>
    <li><code>backgroundAttachment</code></li>
    <li><code>backgroundClip</code></li>
    <li><code>backgroundOrigin</code></li>
  </ul>
`,


/* -------- 8.21 HTTP -------- */

'builtinref-20-0': `
  <p>HTTP methods, used with <code>fetch()</code>.</p>
  <ul>
    <li><code>"GET"</code></li>
    <li><code>"POST"</code></li>
    <li><code>"PUT"</code></li>
    <li><code>"PATCH"</code></li>
    <li><code>"DELETE"</code></li>
    <li><code>"HEAD"</code></li>
    <li><code>"OPTIONS"</code></li>
  </ul>
`,

'builtinref-20-1': `
  <p>HTTP status codes returned in <code>response.status</code>.</p>
  <p><strong>Success (2xx)</strong></p>
  <ul>
    <li><code>200</code> OK</li>
    <li><code>201</code> Created</li>
    <li><code>204</code> No Content</li>
  </ul>
  <p><strong>Redirect (3xx)</strong></p>
  <ul>
    <li><code>301</code> Moved Permanently</li>
    <li><code>302</code> Found</li>
    <li><code>304</code> Not Modified</li>
    <li><code>307</code> Temporary Redirect</li>
    <li><code>308</code> Permanent Redirect</li>
  </ul>
  <p><strong>Client errors (4xx)</strong></p>
  <ul>
    <li><code>400</code> Bad Request</li>
    <li><code>401</code> Unauthorized</li>
    <li><code>403</code> Forbidden</li>
    <li><code>404</code> Not Found</li>
    <li><code>405</code> Method Not Allowed</li>
    <li><code>409</code> Conflict</li>
    <li><code>410</code> Gone</li>
    <li><code>422</code> Unprocessable Entity</li>
    <li><code>429</code> Too Many Requests</li>
  </ul>
  <p><strong>Server errors (5xx)</strong></p>
  <ul>
    <li><code>500</code> Internal Server Error</li>
    <li><code>501</code> Not Implemented</li>
    <li><code>502</code> Bad Gateway</li>
    <li><code>503</code> Service Unavailable</li>
    <li><code>504</code> Gateway Timeout</li>
  </ul>
`,

'builtinref-20-2': `
  <p>Common HTTP header names.</p>
  <ul>
    <li><code>Content-Type</code></li>
    <li><code>Content-Length</code></li>
    <li><code>Content-Encoding</code></li>
    <li><code>Content-Disposition</code></li>
    <li><code>Accept</code></li>
    <li><code>Accept-Language</code></li>
    <li><code>Accept-Encoding</code></li>
    <li><code>Authorization</code></li>
    <li><code>Cookie</code></li>
    <li><code>Set-Cookie</code></li>
    <li><code>User-Agent</code></li>
    <li><code>Referer</code></li>
    <li><code>Origin</code></li>
    <li><code>Host</code></li>
    <li><code>Cache-Control</code></li>
    <li><code>ETag</code></li>
    <li><code>Last-Modified</code></li>
    <li><code>Expires</code></li>
    <li><code>Access-Control-Allow-Origin</code> (CORS)</li>
  </ul>
`,

'builtinref-20-3': `
  <p>Common MIME types (Content-Type values).</p>
  <p><strong>Application</strong></p>
  <ul>
    <li><code>application/json</code></li>
    <li><code>application/xml</code></li>
    <li><code>application/pdf</code></li>
    <li><code>application/octet-stream</code></li>
    <li><code>application/x-www-form-urlencoded</code></li>
    <li><code>multipart/form-data</code></li>
  </ul>
  <p><strong>Text</strong></p>
  <ul>
    <li><code>text/html</code></li>
    <li><code>text/plain</code></li>
    <li><code>text/css</code></li>
    <li><code>text/javascript</code></li>
    <li><code>text/csv</code></li>
  </ul>
  <p><strong>Image</strong></p>
  <ul>
    <li><code>image/png</code></li>
    <li><code>image/jpeg</code></li>
    <li><code>image/gif</code></li>
    <li><code>image/svg+xml</code></li>
    <li><code>image/webp</code></li>
  </ul>
  <p><strong>Video / audio</strong></p>
  <ul>
    <li><code>video/mp4</code></li>
    <li><code>video/webm</code></li>
    <li><code>audio/mpeg</code></li>
    <li><code>audio/wav</code></li>
    <li><code>audio/ogg</code></li>
  </ul>
`,


/* -------- 8.22 WEB APIs -------- */

'builtinref-21-0': `
  <p>Observer APIs for watching things change.</p>
  <ul>
    <li><code>IntersectionObserver</code></li>
    <li><code>MutationObserver</code></li>
    <li><code>ResizeObserver</code></li>
    <li><code>PerformanceObserver</code></li>
  </ul>
`,

'builtinref-21-1': `
  <p>Networking APIs.</p>
  <ul>
    <li><code>fetch()</code></li>
    <li><code>Request</code></li>
    <li><code>Response</code></li>
    <li><code>Headers</code></li>
    <li><code>WebSocket</code></li>
    <li><code>EventSource</code></li>
    <li><code>XMLHttpRequest</code></li>
    <li><code>AbortController</code></li>
    <li><code>AbortSignal</code></li>
    <li><code>navigator.sendBeacon()</code></li>
  </ul>
`,

'builtinref-21-2': `
  <p>Client-side storage APIs.</p>
  <ul>
    <li><code>localStorage</code></li>
    <li><code>sessionStorage</code></li>
    <li><code>indexedDB</code></li>
    <li><code>IDBDatabase</code></li>
    <li><code>IDBTransaction</code></li>
    <li><code>IDBObjectStore</code></li>
    <li><code>caches</code></li>
    <li><code>CacheStorage</code></li>
    <li><code>Cache</code></li>
    <li><code>document.cookie</code></li>
  </ul>
`,

'builtinref-21-3': `
  <p>File and URL APIs.</p>
  <ul>
    <li><code>File</code></li>
    <li><code>FileList</code></li>
    <li><code>FileReader</code></li>
    <li><code>Blob</code></li>
    <li><code>FormData</code></li>
    <li><code>URL</code></li>
    <li><code>URLSearchParams</code></li>
    <li><code>URL.createObjectURL()</code></li>
    <li><code>URL.revokeObjectURL()</code></li>
  </ul>
`,

'builtinref-21-4': `
  <p>Worker APIs for background threads.</p>
  <ul>
    <li><code>Worker</code></li>
    <li><code>SharedWorker</code></li>
    <li><code>ServiceWorker</code></li>
    <li><code>ServiceWorkerRegistration</code></li>
    <li><code>MessageChannel</code></li>
    <li><code>MessagePort</code></li>
    <li><code>BroadcastChannel</code></li>
  </ul>
`,

'builtinref-21-5': `
  <p>Media capture and playback APIs.</p>
  <ul>
    <li><code>MediaStream</code></li>
    <li><code>MediaRecorder</code></li>
    <li><code>MediaDevices</code></li>
    <li><code>navigator.mediaDevices.getUserMedia()</code></li>
    <li><code>navigator.mediaDevices.enumerateDevices()</code></li>
    <li><code>AudioContext</code></li>
    <li><code>AudioBuffer</code></li>
    <li><code>AudioNode</code></li>
    <li><code>HTMLMediaElement</code></li>
    <li><code>HTMLVideoElement</code></li>
    <li><code>HTMLAudioElement</code></li>
  </ul>
`,

'builtinref-21-6': `
  <p>Device access and permissions APIs.</p>
  <ul>
    <li><code>navigator.geolocation</code></li>
    <li><code>navigator.clipboard</code></li>
    <li><code>navigator.permissions</code></li>
    <li><code>navigator.share()</code></li>
    <li><code>navigator.vibrate()</code></li>
    <li><code>Notification</code></li>
    <li><code>PushManager</code></li>
    <li><code>navigator.userAgent</code></li>
    <li><code>navigator.language</code></li>
    <li><code>navigator.languages</code></li>
    <li><code>navigator.onLine</code></li>
    <li><code>navigator.hardwareConcurrency</code></li>
    <li><code>navigator.deviceMemory</code></li>
  </ul>
`,

'builtinref-21-7': `
  <p>Graphics APIs for drawing.</p>
  <ul>
    <li><code>CanvasRenderingContext2D</code></li>
    <li><code>WebGLRenderingContext</code></li>
    <li><code>WebGL2RenderingContext</code></li>
    <li><code>GPUCanvasContext</code> (WebGPU)</li>
    <li><code>OffscreenCanvas</code></li>
    <li><code>ImageData</code></li>
    <li><code>ImageBitmap</code></li>
  </ul>
`,

'builtinref-21-8': `
  <p>Cryptography APIs.</p>
  <ul>
    <li><code>crypto.randomUUID()</code></li>
    <li><code>crypto.getRandomValues()</code></li>
    <li><code>crypto.subtle</code> (encryption/hashing)</li>
  </ul>
`,

'builtinref-21-9': `
  <p>Performance measurement APIs.</p>
  <ul>
    <li><code>performance.now()</code></li>
    <li><code>performance.mark()</code></li>
    <li><code>performance.measure()</code></li>
    <li><code>performance.getEntries()</code></li>
  </ul>
`,

'builtinref-21-10': `
  <p>Browser history and current-URL APIs.</p>
  <p><strong>History</strong></p>
  <ul>
    <li><code>history.pushState()</code></li>
    <li><code>history.replaceState()</code></li>
    <li><code>history.back()</code></li>
    <li><code>history.forward()</code></li>
    <li><code>history.go()</code></li>
  </ul>
  <p><strong>Location</strong></p>
  <ul>
    <li><code>location.href</code></li>
    <li><code>location.pathname</code></li>
    <li><code>location.search</code></li>
    <li><code>location.hash</code></li>
    <li><code>location.reload()</code></li>
    <li><code>location.assign()</code></li>
    <li><code>location.replace()</code></li>
  </ul>
`,

'builtinref-21-11': `
  <p>Console methods (for debugging output).</p>
  <p><strong>Logging</strong></p>
  <ul>
    <li><code>console.log()</code></li>
    <li><code>console.warn()</code></li>
    <li><code>console.error()</code></li>
    <li><code>console.info()</code></li>
    <li><code>console.debug()</code></li>
    <li><code>console.trace()</code></li>
  </ul>
  <p><strong>Structured</strong></p>
  <ul>
    <li><code>console.dir()</code></li>
    <li><code>console.table()</code></li>
  </ul>
  <p><strong>Grouping</strong></p>
  <ul>
    <li><code>console.group()</code></li>
    <li><code>console.groupCollapsed()</code></li>
    <li><code>console.groupEnd()</code></li>
  </ul>
  <p><strong>Timing</strong></p>
  <ul>
    <li><code>console.time()</code></li>
    <li><code>console.timeEnd()</code></li>
    <li><code>console.timeLog()</code></li>
  </ul>
  <p><strong>Counting</strong></p>
  <ul>
    <li><code>console.count()</code></li>
    <li><code>console.countReset()</code></li>
  </ul>
  <p><strong>Other</strong></p>
  <ul>
    <li><code>console.assert()</code></li>
    <li><code>console.clear()</code></li>
  </ul>
`,


/* -------- 8.23 HTML ENTITIES -------- */

'builtinref-22-0': `
  <p>The most common HTML entities you'll write in text or code examples.</p>
  <ul>
    <li><code>&amp;lt;</code> renders as <code>&lt;</code></li>
    <li><code>&amp;gt;</code> renders as <code>&gt;</code></li>
    <li><code>&amp;amp;</code> renders as <code>&amp;</code></li>
    <li><code>&amp;quot;</code> renders as <code>"</code></li>
    <li><code>&amp;apos;</code> renders as <code>'</code></li>
    <li><code>&amp;#39;</code> renders as <code>'</code></li>
    <li><code>&amp;#96;</code> renders as <code>&#96;</code> (backtick)</li>
    <li><code>&amp;nbsp;</code> renders as a non-breaking space</li>
  </ul>
`,

'builtinref-22-1': `
  <p>Symbol entities.</p>
  <ul>
    <li><code>&amp;copy;</code> renders as ©</li>
    <li><code>&amp;reg;</code> renders as ®</li>
    <li><code>&amp;trade;</code> renders as ™</li>
    <li><code>&amp;hellip;</code> renders as …</li>
    <li><code>&amp;mdash;</code> renders as —</li>
    <li><code>&amp;ndash;</code> renders as –</li>
    <li><code>&amp;laquo;</code> renders as «</li>
    <li><code>&amp;raquo;</code> renders as »</li>
    <li><code>&amp;bull;</code> renders as •</li>
    <li><code>&amp;middot;</code> renders as ·</li>
    <li><code>&amp;deg;</code> renders as °</li>
    <li><code>&amp;plusmn;</code> renders as ±</li>
    <li><code>&amp;times;</code> renders as ×</li>
    <li><code>&amp;divide;</code> renders as ÷</li>
  </ul>
`,

'builtinref-22-2': `
  <p>Arrow entities.</p>
  <ul>
    <li><code>&amp;larr;</code> renders as ←</li>
    <li><code>&amp;uarr;</code> renders as ↑</li>
    <li><code>&amp;rarr;</code> renders as →</li>
    <li><code>&amp;darr;</code> renders as ↓</li>
    <li><code>&amp;harr;</code> renders as ↔</li>
  </ul>
`,

'builtinref-22-3': `
  <p>Currency entities.</p>
  <ul>
    <li><code>&amp;dollar;</code> renders as $</li>
    <li><code>&amp;cent;</code> renders as ¢</li>
    <li><code>&amp;pound;</code> renders as £</li>
    <li><code>&amp;yen;</code> renders as ¥</li>
    <li><code>&amp;euro;</code> renders as €</li>
  </ul>
`,

'builtinref-22-4': `
  <p>The universal escape syntax — any character by its code point.</p>
  <ul>
    <li><code>&amp;#NNN;</code> — any character by decimal code (e.g. <code>&amp;#128512;</code> renders as 😀)</li>
    <li><code>&amp;#xHHH;</code> — any character by hex code (e.g. <code>&amp;#x1F600;</code> renders as 😀)</li>
  </ul>
`,

});
