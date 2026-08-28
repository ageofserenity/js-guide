/* ==========================================================
   Section 8: Built-in Reference — Search
   ==========================================================
   Filters the Section 8 accordion group as the user types.

   HOW IT WORKS
   - Builds a searchable index from DEEP_TOPICS.builtinref +
     CONTENT['builtinref-X-Y'] at load time (114 entries).
   - Query hides non-matching groups/items via .is-search-hidden
     and auto-opens matching ones.
   - Matched text inside opened panels wrapped in
     <mark class="search-hl"> for visual highlight.
   - Clearing the input restores default state (everything visible
     and closed) and unwraps all <mark> tags.

   DEPENDENCIES
   - DEEP_TOPICS.builtinref  (from data.js)
   - CONTENT['builtinref-*']  (from referenceContent.js)
   - toggleAccordion(trigger) (from script.js — handles lazy render)

   ATTRIBUTES IT LOOKS FOR
   - [data-builtinref-search]        the input
   - [data-builtinref-search-clear]  the × button
   - [data-accordion-group="builtinref"]  the Section 8 accordion group
   - [data-accordion][data-path="builtinref-X"]     group accordion
   - [data-accordion][data-path="builtinref-X-Y"]   item accordion
========================================================== */

(function initBuiltinRefSearch() {

  document.addEventListener('DOMContentLoaded', init);

  function init() {
    const input    = document.querySelector('[data-builtinref-search]');
    const clearBtn = document.querySelector('[data-builtinref-search-clear]');
    const group    = document.querySelector('[data-accordion-group="builtinref"]');

    // Bail quietly if this page doesn't have the search widget
    if (!input || !group) return;
    if (typeof DEEP_TOPICS === 'undefined' || !DEEP_TOPICS.builtinref) return;
    if (typeof CONTENT === 'undefined') return;

    // Debounced typing — rebuild index each search so late-loading
    // content (referenceContent.js loads async via contentLoader) is
    // always included.
    let debounceId;
    input.addEventListener('input', function () {
      clearTimeout(debounceId);
      debounceId = setTimeout(function () { runSearch(input.value); }, 100);
    });

    // Escape key clears
    input.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        input.value = '';
        runSearch('');
      }
    });

    // × button clears
    if (clearBtn) {
      clearBtn.addEventListener('click', function () {
        input.value = '';
        runSearch('');
        input.focus();
      });
    }


    /* ---------- Index builder ---------- */

    function buildIndex() {
      const arr = [];
      DEEP_TOPICS.builtinref.forEach(function (grp, gIdx) {
        (grp.items || []).forEach(function (item, iIdx) {
          const path = 'builtinref-' + gIdx + '-' + iIdx;
          const raw  = CONTENT[path] || '';
          // Only the item's own text — NOT the group's. Otherwise
          // every item in a group inherits the group's title words
          // (e.g. searching "input" would match every item in
          // "8.10 DOM — Form / Input Properties").
          const searchText = (
            (item.title   || '') + ' ' +
            (item.preview || '') + ' ' +
            stripHtml(raw)
          ).toLowerCase();
          arr.push({ gIdx: gIdx, iIdx: iIdx, path: path, searchText: searchText });
        });
      });
      return arr;
    }

    function stripHtml(html) {
      const div = document.createElement('div');
      div.innerHTML = html;
      return div.textContent || div.innerText || '';
    }


    /* ---------- Search runner ---------- */

    function runSearch(rawQuery) {
      const query = (rawQuery || '').trim().toLowerCase();

      // Always reset visual state before applying new query
      clearHighlights();
      clearHidden();

      if (!query) {
        closeAll();
        return;
      }

      // Find matches — build index fresh each search
      const index = buildIndex();
      const matchingItemPaths = new Set();
      const matchingGroupIdxs = new Set();

      index.forEach(function (entry) {
        if (entry.searchText.indexOf(query) !== -1) {
          matchingItemPaths.add(entry.path);
          matchingGroupIdxs.add(entry.gIdx);
        }
      });

      // Phase 1: hide/show + open groups.
      // Opening a group synchronously lazy-renders its item accordions,
      // so Phase 2 below can find them in the DOM.
      const groupAccs = group.querySelectorAll('[data-accordion][data-path]');
      groupAccs.forEach(function (acc) {
        const path = acc.getAttribute('data-path');
        if (!path) return;
        const parts = path.split('-');
        if (parts.length !== 2 || parts[0] !== 'builtinref') return;

        const gIdx = parseInt(parts[1], 10);
        if (matchingGroupIdxs.has(gIdx)) {
          openIfClosed(acc);
        } else {
          acc.classList.add('is-search-hidden');
        }
      });

      // Phase 2: hide/show/open + highlight items.
      // Re-query because Phase 1 may have added new item accordions to DOM.
      const itemAccs = group.querySelectorAll('[data-accordion][data-path]');
      itemAccs.forEach(function (acc) {
        const path = acc.getAttribute('data-path');
        if (!path) return;
        const parts = path.split('-');
        if (parts.length !== 3 || parts[0] !== 'builtinref') return;

        if (matchingItemPaths.has(path)) {
          openIfClosed(acc);
          highlightMatches(acc, query);
        } else {
          acc.classList.add('is-search-hidden');
        }
      });
    }


    /* ---------- Helpers ---------- */

    function openIfClosed(acc) {
      const trigger = acc.querySelector(':scope > .accordion__trigger');
      if (trigger && trigger.getAttribute('aria-expanded') === 'false') {
        // toggleAccordion is a global from script.js — it also handles
        // lazy-rendering any children on first open.
        if (typeof toggleAccordion === 'function') {
          toggleAccordion(trigger);
        }
      }
    }

    function closeAll() {
      const accs = group.querySelectorAll('[data-accordion].is-open');
      accs.forEach(function (acc) {
        const trigger = acc.querySelector(':scope > .accordion__trigger');
        if (trigger) {
          acc.classList.remove('is-open');
          trigger.setAttribute('aria-expanded', 'false');
        }
      });
    }

    function clearHidden() {
      const hidden = group.querySelectorAll('.is-search-hidden');
      hidden.forEach(function (el) { el.classList.remove('is-search-hidden'); });
    }

    function clearHighlights() {
      const marks = group.querySelectorAll('mark.search-hl');
      marks.forEach(function (mark) {
        const parent = mark.parentNode;
        if (!parent) return;
        while (mark.firstChild) parent.insertBefore(mark.firstChild, mark);
        parent.removeChild(mark);
        parent.normalize();
      });
    }

    function highlightMatches(acc, query) {
      // Only walk this accordion's own body, not any nested children's bodies
      const body = acc.querySelector(':scope > .accordion__body');
      if (!body) return;

      const walker = document.createTreeWalker(body, NodeFilter.SHOW_TEXT, {
        acceptNode: function (node) {
          if (!node.textContent || !node.textContent.trim()) return NodeFilter.FILTER_REJECT;
          const p = node.parentNode;
          if (!p) return NodeFilter.FILTER_REJECT;
          if (p.tagName === 'MARK' || p.tagName === 'SCRIPT' || p.tagName === 'STYLE') {
            return NodeFilter.FILTER_REJECT;
          }
          return NodeFilter.FILTER_ACCEPT;
        }
      });

      const targets = [];
      let n;
      while ((n = walker.nextNode())) {
        if (n.textContent.toLowerCase().indexOf(query) !== -1) targets.push(n);
      }
      targets.forEach(function (textNode) { wrapMatchesInNode(textNode, query); });
    }

    function wrapMatchesInNode(textNode, query) {
      const text  = textNode.textContent;
      const lower = text.toLowerCase();
      const qLen  = query.length;

      // Build [before, match, between, match, ...] parts
      const parts = [];
      let idx = 0;
      let found;
      while ((found = lower.indexOf(query, idx)) !== -1) {
        if (found > idx) parts.push({ text: text.slice(idx, found), match: false });
        parts.push({ text: text.slice(found, found + qLen), match: true });
        idx = found + qLen;
      }
      if (idx < text.length) parts.push({ text: text.slice(idx), match: false });
      if (!parts.some(function (p) { return p.match; })) return;

      const parent = textNode.parentNode;
      const frag   = document.createDocumentFragment();
      parts.forEach(function (p) {
        if (p.match) {
          const mark = document.createElement('mark');
          mark.className   = 'search-hl';
          mark.textContent = p.text;
          frag.appendChild(mark);
        } else {
          frag.appendChild(document.createTextNode(p.text));
        }
      });
      parent.replaceChild(frag, textNode);
    }
  }
})();
