# Formatting Fixes — Batch 3 (Lessons 3.7.6 and 3.7.7)

Good news: **3.7.6 and 3.7.7 are mostly clean already**. Most of the "broken-looking" code in these lessons is intentional — these two lessons are specifically *about* parens (3.7.6) and braces (3.7.7), so they teach by showing the broken-vs-fixed contrast directly.

Only a handful of fixes total.

---

## Lesson 3.7.6 — `condition inside parentheses` (`topics-6-5`)

### Fix 1 — line ~2618 (in 1.4 Mental model) — annotated example

This one is fine as-is structurally — it's an annotated walkthrough showing how parens evaluate. The `{ ... }` placeholders are intentional because the lesson is about the parens, not the bodies. **No change needed.**

> Just verifying: I scanned 3.7.6 and didn't find any non-teaching brace-less branches that need fixing. All the `{ ... }` placeholders are correct for this lesson's context.

---

## Lesson 3.7.7 — `code block inside curly braces` (`topics-6-6`)

This whole lesson is about braces, so almost every brace-less example is a deliberate "what NOT to do" demonstration. The only thing to clean up is making sure the **fixed** counterpart examples are properly braced.

### Fix 2 — line ~3007 (in 1.1 Why use it) — verify the fixed example

The teaching contrast is good. **Verify the structure is exactly:**

```
// Risky — works today, breaks the moment someone adds a line
if (user.isAdmin)
  enableAdminTools();

// Bug-proof — easy to extend later
if (user.isAdmin) {
  enableAdminTools();
}

// What happens when someone "adds a line" to the no-braces version:
if (user.isAdmin)
  enableAdminTools();
  logAdminAccess();    // ALWAYS runs — looks indented but isn't conditional
// admin actions get logged for non-admins too — security bug
```

**No change needed** — this is teaching the brace rule by contrast and is correct.

---

### Fix 3 — line ~3029 (in 1.2 Where you use it) — placeholder examples

**FIND:**
```
// if blocks
if (cond) { ... }
else if (other) { ... }
else { ... }
```

**REPLACE WITH:**
```
// if blocks
if (cond) {
  // ...
} else if (other) {
  // ...
} else {
  // ...
}
```

The `{ ... }` shorthand reads weird for an `if/else if/else` chain since the lesson is *about* the braces themselves. Better to show real braces with a comment placeholder inside.

---

### Fix 4 — line ~3233 (in 2.3 Common mistakes) — last snippet

This one's a teaching example showing a SyntaxError, but the "fix" comment at the bottom should be expanded:

**FIND:**
```
if (a) doA() else doB();
// SyntaxError — without braces, the structure gets confused
// fix: use braces, or put a semicolon after doA():
//   if (a) doA(); else doB();
```

**REPLACE WITH:**
```
// BROKEN — SyntaxError, without braces the structure gets confused
if (a) doA() else doB();

// FIXED — use braces (recommended)
if (a) {
  doA();
} else {
  doB();
}
```

(Drop the "or just add a semicolon" advice — we're standardizing on braces.)

---

## Summary

That's it for Batch 3. Just **2 actual fixes** (Fix 3 and Fix 4) — most of these lessons were already correct because the broken examples are intentional teaching contrasts.

Still to come: **3.7.8, 3.7.9, 3.7.10, 3.7.11, 3.7.12, 3.7.13**.

3.7.8 and 3.7.9 are the heavy ones — they'll likely each need their own batch.

When you're done with this batch, send the file back and I'll do Batch 4 (3.7.8).