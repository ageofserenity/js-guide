# Formatting Fixes — Batch 2 (Lessons 3.7.4 and 3.7.5)

Same rules as Batch 1: every `if` / `else if` / `else` branch gets braces, body on its own indented line. Aligned-column padding goes away.

> **Note about intentional examples:** Some "Common mistakes" / "Common confusions" / "Syntax Details That Matter" pieces show broken code on purpose to teach. For those, I'll either leave the broken example alone OR show the broken version + a fixed version below it. I'll call those out clearly.

---

## Lesson 3.7.4 — `else` (`topics-6-3`)

### Fix 1 — line ~1592 (in 1.2 Where you use it) — chain catch-all

**FIND:**
```
// Catch-all in a longer chain
if (status === "ok")          
handleOk();
else if (status === "warn") 
  handleWarn();
else if (status === "fail") 
  handleFail();
else                        
  handleUnknown();   // fallback for any other status
```

**REPLACE WITH:**
```
// Catch-all in a longer chain
if (status === "ok") {
  handleOk();
} else if (status === "warn") {
  handleWarn();
} else if (status === "fail") {
  handleFail();
} else {
  handleUnknown();   // fallback for any other status
}
```

---

### Fix 2 — line ~1684 (in 2.2 Common confusions) — nearest if rule

This one is a **teaching example** — shows the dangling-else problem. Keep the broken example, but make sure the "fix" version below is properly braced (it already is, but verify).

**FIND:**
```
if (a)
  if (b) console.log("both");
else console.log("not a");
// the else attaches to the INNER if (b), not the outer if (a)
// fix: use braces to make scope explicit
if (a) {
  if (b) console.log("both");
} else {
  console.log("not a");
}
```

**REPLACE WITH:**
```
// BROKEN — the else attaches to the INNER if (b), not the outer if (a)
if (a)
  if (b) console.log("both");
else console.log("not a");

// FIXED — use braces to make scope explicit
if (a) {
  if (b) {
    console.log("both");
  }
} else {
  console.log("not a");
}
```

---

### Fix 3 — line ~1717 (in 2.2 Common confusions) — chain catch-all

**FIND:**
```
if (status === "active")     handleActive();
else if (status === "paused") handlePaused();
else                          handleAnythingElse();
// else covers status being "ended", "archived", null, undefined, anything not handled above
// it's not just for "no status" — it's for ANY case the chain didn't match
```

**REPLACE WITH:**
```
if (status === "active") {
  handleActive();
} else if (status === "paused") {
  handlePaused();
} else {
  handleAnythingElse();
}
// else covers status being "ended", "archived", null, undefined, anything not handled above
// it's not just for "no status" — it's for ANY case the chain didn't match
```

---

### Fix 4 — line ~1741 (in 2.3 Common mistakes) — body trap

This is a **teaching example** — keep the broken version, add fixed below.

**FIND:**
```
if (a)
  doA();
else
  doB();
  doSomething();
// doSomething() always runs — only doB() is part of the else
// fix: wrap in braces — else { doB(); doSomething(); }
```

**REPLACE WITH:**
```
// BROKEN — doSomething() always runs, only doB() is part of else
if (a)
  doA();
else
  doB();
  doSomething();

// FIXED — braces make the scope clear
if (a) {
  doA();
} else {
  doB();
  doSomething();
}
```

---

### Fix 5 — line ~1754 (in 2.3 Common mistakes) — nested if dangling else

This is also a **teaching example** — keep broken, add fixed.

**FIND:**
```
if (a)
  if (b) doX();
else doY();
// confusing — the else attaches to the INNER if(b), not the outer if(a)
// fix: always use braces with nested ifs:
//   if (a) { if (b) doX(); } else { doY(); }
```

**REPLACE WITH:**
```
// BROKEN — the else attaches to the INNER if(b), not the outer if(a)
if (a)
  if (b) doX();
else doY();

// FIXED — always use braces with nested ifs
if (a) {
  if (b) {
    doX();
  }
} else {
  doY();
}
```

---

### Fix 6 — line ~1777 (in 3.0 Tiny examples) — else as catch-all

**FIND:**
```
// else as the catch-all of a chain
const grade = 65;
if (grade >= 90)      console.log("A");
else if (grade >= 80) console.log("B");
else if (grade >= 70) console.log("C");
else                  console.log("below 70");
// prints: "below 70"
```

**REPLACE WITH:**
```
// else as the catch-all of a chain
const grade = 65;
if (grade >= 90) {
  console.log("A");
} else if (grade >= 80) {
  console.log("B");
} else if (grade >= 70) {
  console.log("C");
} else {
  console.log("below 70");
}
// prints: "below 70"
```

---

## Lesson 3.7.5 — `switch` (`topics-6-4`)

### Fix 7 — line ~2026 (in 1.1 Why use it) — getDayType comparison

**FIND:**
```
// Repetitive with if/else
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
```

**REPLACE WITH:**
```
// Repetitive with if/else
function getDayType(day) {
  if (day === "Saturday") {
    return "weekend";
  } else if (day === "Sunday") {
    return "weekend";
  } else if (day === "Friday") {
    return "almost weekend";
  } else if (day === "Monday") {
    return "start of week";
  } else {
    return "weekday";
  }
}
```

---

### Fix 8 — line ~2060 (in 1.2 Where you use it) — switch cases formatting

The switch cases themselves have aligned spacing that should also be cleaned up. `case`/`default` in switches don't use braces (that's not how `switch` works), but the multi-line bodies should still be cleanly indented.

**FIND (action handlers block):**
```
// Action handlers
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
```

**REPLACE WITH:**
```
// Action handlers
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
```

(Just remove the trailing whitespace after the `:` on each `case` / `default`. Bodies stay as-is.)

---

### Fix 9 — line ~2073 (in 1.2 Where you use it) — keyboard shortcuts

**FIND:**
```
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
```

**REPLACE WITH:**
```
// Keyboard shortcuts
switch (event.key) {
  case "Escape":
    closeModal();
    break;
  case "Enter":
    submit();
    break;
  case "ArrowUp":
    moveSelection(-1);
    break;
  case "ArrowDown":
    moveSelection(1);
    break;
}
```

(Each `case` body on its own line — clean and consistent.)

---

### Fix 10 — line ~2085 (in 1.2 Where you use it) — HTTP status

**FIND:**
```
// HTTP status categories
switch (Math.floor(response.status / 100)) {
  case 2: handleSuccess(); 
    break;
  case 4: handleClientError(); 
    break;
  case 5: handleServerError(); 
    break;
}
```

**REPLACE WITH:**
```
// HTTP status categories
switch (Math.floor(response.status / 100)) {
  case 2:
    handleSuccess();
    break;
  case 4:
    handleClientError();
    break;
  case 5:
    handleServerError();
    break;
}
```

---

### Fix 11 — line ~2194 (in 2.2 or 2.3) — chain in switch comparison

**FIND:**
```
  if (score >= 90) return "A";
  else if (score >= 80) return "B";
  else return "F";
```

**REPLACE WITH:**
```
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else {
    return "F";
  }
```

---

## What's done and what's left

Done in this batch: **3.7.4** and **3.7.5** (lessons `topics-6-3` and `topics-6-4`).

Remaining lessons to clean up: **3.7.6** (condition in parens), **3.7.7** (code block in braces), **3.7.8** (if as first question), **3.7.9** (else if as backup), **3.7.10** (else as fallback), **3.7.11** (else doesn't need parens), **3.7.12** (condition order matters), **3.7.13** (only one branch runs).

3.7.6 and 3.7.7 should be light (a few fixes each). 3.7.8 and 3.7.9 are heavy (~25–30 fixes each). 3.7.10 through 3.7.13 are light again.

When you've worked through this batch, send the file back and I'll do Batch 3 (3.7.6 + 3.7.7).