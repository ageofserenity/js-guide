# Formatting Fixes — topicBasicContentPt5.js

Each fix shows: the lesson it's in, the broken code (FIND), and what to replace it with (REPLACE).

The rule for every fix: every `if`/`else if`/`else` branch gets braces, body on its own indented line.

---

## Lesson 3.7.1 — what conditionals are (`topics-6-0`)

### Fix 1 — line ~75 (in 0.1 Syntax) — three brace-less examples

**FIND:**
```
// Just if — nothing happens if false
if (isLoggedIn) showDashboard();

// if + else — one of two paths
if (age >= 18) showAdult();
else showMinor();

// if + else if + else — many paths, one fallback
if (score >= 90) grade = "A";
else if (score >= 80) grade = "B";
else if (score >= 70) grade = "C";
else grade = "F";
```

**REPLACE WITH:**
```
// Just if — nothing happens if false
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
}
```

---

### Fix 2 — line ~150 (in 1.2 Where you use it) — guard clauses

**FIND:**
```
function isValidEmail(email) {
  if (!email.includes("@")) 
    return false;
  if (email.length < 3) 
    return false;
  return true;
}
```

**REPLACE WITH:**
```
function isValidEmail(email) {
  if (!email.includes("@")) {
    return false;
  }
  if (email.length < 3) {
    return false;
  }
  return true;
}
```

---

## Lesson 3.7.2 — if (`topics-6-1`)

### Fix 3 — line ~533 (in 0.3 Syntax Details That Matter)

**FIND:**
```
// dangerous without braces:
if (isReady)
  start();
  cleanup();
// cleanup() always runs — only start() is conditional
```

**REPLACE WITH:**
```
// dangerous without braces — cleanup() always runs, only start() is conditional:
if (isReady)
  start();
  cleanup();

// safe with braces:
if (isReady) {
  start();
  cleanup();
}
```

> **Note:** This one example is intentionally showing the brace-less form to teach why braces matter. Keep the broken example AS-IS (since it's the lesson), but add the safe braced version below it so students see the fix.

---

### Fix 4 — line ~601 (in 1.2 Where you use it)

**FIND:**
```
function processOrder(order) {
  if (!order) 
    return;
  if (order.items.length === 0) 
    return;
  // ... main logic
}
```

**REPLACE WITH:**
```
function processOrder(order) {
  if (!order) {
    return;
  }
  if (order.items.length === 0) {
    return;
  }
  // ... main logic
}
```

---

### Fix 5 — line ~824 (in 3.0 Tiny examples)

**FIND:**
```
// Multiple separate ifs — each independent
if (user.isLoggedIn) showDashboard();
if (cart.length > 0)  showCheckout();
if (hasMessages)      showBadge();
```

**REPLACE WITH:**
```
// Multiple separate ifs — each independent
if (user.isLoggedIn) {
  showDashboard();
}
if (cart.length > 0) {
  showCheckout();
}
if (hasMessages) {
  showBadge();
}
```

---

## Lesson 3.7.3 — else if (`topics-6-2`)

### Fix 6 — line ~1036 (in 1.1 Why use it) — getGrade and order.status

**FIND:**
```
// Score → letter grade
function getGrade(score) {
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

console.log(getGrade(85));
// prints: "B"

// Status → action
if (order.status === "pending")    
  notifyUser();
else if (order.status === "shipped") 
  trackShipment();
else if (order.status === "delivered") 
  askForReview();
```

**REPLACE WITH:**
```
// Score → letter grade
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
}
```

---

### Fix 7 — line ~1066 (in 1.2 Where you use it) — pricing tiers, render, HTTP

**FIND:**
```
// Pricing tiers
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
    showGenericError();
```

**REPLACE WITH:**
```
// Pricing tiers
function getDiscount(user) {
  if (user.tier === "platinum") {
    return 0.30;
  } else if (user.tier === "gold") {
    return 0.20;
  } else if (user.tier === "silver") {
    return 0.10;
  } else {
    return 0;
  }
}

// UI states
function render(state) {
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

// HTTP status handling
if (response.status === 200) {
  handleSuccess();
} else if (response.status === 401) {
  redirectToLogin();
} else if (response.status === 404) {
  show404();
} else if (response.status >= 500) {
  showServerError();
} else {
  showGenericError();
}
```

---

### Fix 8 — line ~1196 (in 2.2 Common confusions) — chain comparison

**FIND:**
```
// These are NOT the same:
if (a) { ... } else if (b) { ... }       // one chain — only one runs
if (a) { ... } else { if (b) { ... } }   // also one chain (just nested) — same behavior

// vs
if (a) { ... } if (b) { ... }            // TWO separate ifs — both can run!
```

**REPLACE WITH:**
```
// These are NOT the same:

// One chain — only one runs
if (a) {
  // ...
} else if (b) {
  // ...
}

// Also one chain (just nested) — same behavior
if (a) {
  // ...
} else {
  if (b) {
    // ...
  }
}

// TWO separate ifs — both can run!
if (a) {
  // ...
}
if (b) {
  // ...
}
```

---

### Fix 9 — line ~1204 (in 2.2 Common confusions) — no else at end

**FIND:**
```
// Totally fine — no else at the end
if (status === "ok")    handleOk();
else if (status === "warn") handleWarn();
else if (status === "fail") handleFail();
// nothing runs if status is anything else — that's allowed
```

**REPLACE WITH:**
```
// Totally fine — no else at the end
if (status === "ok") {
  handleOk();
} else if (status === "warn") {
  handleWarn();
} else if (status === "fail") {
  handleFail();
}
// nothing runs if status is anything else — that's allowed
```

---

### Fix 10 — line ~1210 (in 2.2 Common confusions) — missing condition

**FIND:**
```
if (x > 0) { ... }
else if { ... }            // SyntaxError — missing condition
else if (x < 0) { ... }    // correct
```

**REPLACE WITH:**
```
if (x > 0) {
  // ...
}
else if {                  // SyntaxError — missing condition
  // ...
}
else if (x < 0) {          // correct
  // ...
}
```

---

### Fix 11 — line ~1217 (in 2.2 Common confusions) — only one branch demo

**FIND:**
```
const x = 5;

if (x > 0) console.log("positive");
else if (x > 3) console.log("greater than 3");
else if (x === 5) console.log("exactly 5");

// prints: "positive"
// only the first match runs — even though all three are true
```

**REPLACE WITH:**
```
const x = 5;

if (x > 0) {
  console.log("positive");
} else if (x > 3) {
  console.log("greater than 3");
} else if (x === 5) {
  console.log("exactly 5");
}

// prints: "positive"
// only the first match runs — even though all three are true
```

---

### Fix 12 — line ~1227 (in 2.3 Common mistakes) — first two snippets

**FIND (snippet A):**
```
if (score >= 70) console.log("passed");
else if (score >= 90) console.log("aced it");
// score 95 → "passed" wins, "aced it" never runs
// fix: reorder — check >= 90 first
```

**REPLACE WITH:**
```
if (score >= 70) {
  console.log("passed");
} else if (score >= 90) {
  console.log("aced it");
}
// score 95 → "passed" wins, "aced it" never runs
// fix: reorder — check >= 90 first
```

**FIND (snippet B):**
```
if (status === "ok") handleOk();
else (status === "fail") handleFail();
// wrong: else doesn't take a condition
// fix: else if (status === "fail") handleFail();
```

**REPLACE WITH:**
```
if (status === "ok") {
  handleOk();
} else (status === "fail") {     // wrong: else doesn't take a condition
  handleFail();
}
// fix:
if (status === "ok") {
  handleOk();
} else if (status === "fail") {
  handleFail();
}
```

---

### Fix 13 — line ~1237 (in 2.3 Common mistakes) — the rest

**FIND (snippet A):**
```
else if (x > 0) { ... }
// wrong: else if can't start a chain — needs an if before it
// fix: if (...) { ... } else if (x > 0) { ... }
```

**REPLACE WITH:**
```
else if (x > 0) {              // wrong: else if can't start a chain — needs an if before it
  // ...
}

// fix:
if (/* something */) {
  // ...
} else if (x > 0) {
  // ...
}
```

**FIND (snippet B):**
```
if (a) { ... }
else if (b) { ... }
if (c) { ... }
// the second if breaks the chain — it's a SEPARATE conditional
// might be intentional, but easy to misread as part of the chain
// fix: keep all parts of one decision in one chain, separate by adding } between
```

**REPLACE WITH:**
```
if (a) {
  // ...
} else if (b) {
  // ...
}
if (c) {                       // SEPARATE conditional — breaks the chain
  // ...
}
// might be intentional, but easy to misread as part of the chain
// fix: keep all parts of one decision in one chain
```

**FIND (snippet C):**
```
if (a)
  doA();
else if (b)
  doB();
  doSomethingElse();
// doSomethingElse() always runs — it's not part of doB's branch
// fix: use braces around each branch's body
```

**REPLACE WITH (keep the broken example for teaching):**
```
// BROKEN — doSomethingElse() always runs, it's not part of doB's branch
if (a)
  doA();
else if (b)
  doB();
  doSomethingElse();

// FIXED — braces make the scope clear
if (a) {
  doA();
} else if (b) {
  doB();
  doSomethingElse();
}
```

**FIND (snippet D):**
```
if (status = "active") { ... }
else if (status = "paused") { ... }
// wrong: = is assignment — first branch always runs
// fix: use === in every condition
```

**REPLACE WITH:**
```
if (status = "active") {       // wrong: = is assignment — first branch always runs
  // ...
} else if (status = "paused") {
  // ...
}
// fix: use === in every condition
if (status === "active") {
  // ...
} else if (status === "paused") {
  // ...
}
```

---

## What's left

This covers all the 3.7.1, 3.7.2, and 3.7.3 issues. The remaining lessons (3.7.4 through 3.7.13) likely have the same patterns — but I haven't gone through them yet to keep this list manageable.

**Once you've applied these fixes, send back the updated file and I'll scan the rest.**