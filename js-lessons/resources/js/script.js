/* ============================================================
   script.js — APP BEHAVIOR
   ============================================================
   Data lives in data.js (loaded before this file).
   This file only handles rendering and interaction.

   Sections in this file:
     1. Render dashboard
     2. Render mobile nav
     3. Render breadcrumb
     4. Render prev/next nav (between sections)
     5. Render single-level accordions (flat sections)
     6. Render nested accordions (combos, methods)
     7. View switching
     8. Accordion toggle (works for nested too)
     9. Mobile nav toggle
    10. Event wiring
    11. Init
   ============================================================ */


/* ==========================================================
   1. RENDER DASHBOARD
   ========================================================== */
function renderDashboard() {
  const grid = document.querySelector('[data-dashboard-grid]');
  if (!grid) return;

  grid.innerHTML = SECTIONS.map(section => `
    <button class="dashboard-card" data-go-section="${section.id}">
      <div class="dashboard-card__number">
        <span>${section.number}</span>
        <span class="dashboard-card__arrow" aria-hidden="true">→</span>
      </div>
      <h2 class="dashboard-card__title">${section.title}</h2>
      <p class="dashboard-card__desc">${section.desc}</p>
    </button>
  `).join('');
}


/* ==========================================================
   2. RENDER MOBILE NAV
   ========================================================== */
function renderMobileNav() {
  const list = document.querySelector('[data-mobile-nav-list]');
  if (!list) return;

  list.innerHTML = SECTIONS.map(section => `
    <li>
      <button class="mobile-nav__item" data-go-section="${section.id}">
        <span class="mobile-nav__item-num">${section.number}</span>
        ${section.title}
      </button>
    </li>
  `).join('');
}


/* ==========================================================
   3. RENDER BREADCRUMB
   "Dashboard › Section Name" at top of each section view.
   ========================================================== */
function renderBreadcrumb(section) {
  const slot = document.querySelector(`#view-${section.id} [data-breadcrumb]`);
  if (!slot) return;

  slot.innerHTML = `
    <button class="breadcrumb__link" data-go-home>Dashboard</button>
    <span class="breadcrumb__sep" aria-hidden="true">›</span>
    <span class="breadcrumb__current" aria-current="page">${section.title}</span>
  `;
}


/* ==========================================================
   4. RENDER PREV/NEXT SECTION NAVIGATION
   At the bottom of each section view.
   ========================================================== */
function renderPrevNext(section, index) {
  const slot = document.querySelector(`#view-${section.id} [data-section-nav]`);
  if (!slot) return;

  const prev = SECTIONS[index - 1];
  const next = SECTIONS[index + 1];

  const prevHTML = prev ? `
    <button class="section-nav__btn section-nav__btn--prev" data-go-section="${prev.id}">
      <span class="section-nav__direction">← Previous</span>
      <span class="section-nav__title">${prev.title}</span>
    </button>
  ` : `
    <div class="section-nav__btn section-nav__btn--disabled">
      <span class="section-nav__direction">← Previous</span>
      <span class="section-nav__title">—</span>
    </div>
  `;

  const nextHTML = next ? `
    <button class="section-nav__btn section-nav__btn--next" data-go-section="${next.id}">
      <span class="section-nav__direction">Next →</span>
      <span class="section-nav__title">${next.title}</span>
    </button>
  ` : `
    <div class="section-nav__btn section-nav__btn--next section-nav__btn--disabled">
      <span class="section-nav__direction">Next →</span>
      <span class="section-nav__title">—</span>
    </div>
  `;

  slot.innerHTML = prevHTML + nextHTML;
}


/* ==========================================================
   5. RENDER SINGLE-LEVEL ACCORDIONS
   Used for flat sections: before, bigpicture, mental,
   topics, patterns, debug.
   ========================================================== */
function renderAccordions(sectionId) {
  const group = document.querySelector(`[data-accordion-group="${sectionId}"]`);
  if (!group) return;

  const topics = TOPICS[sectionId];

  if (!topics || topics.length === 0) {
    group.innerHTML = emptyShell();
    return;
  }

  group.innerHTML = topics
    .map((topic, index) => buildAccordion(topic, sectionId, index, false))
    .join('');
}


/* ==========================================================
   6. RENDER NESTED ACCORDIONS
   Used for: combos, methods.
   First level: group accordion → expands to reveal an inner
   list of accordions inside it.
   ========================================================== */
function renderNestedAccordions(sectionId) {
  const group = document.querySelector(`[data-accordion-group="${sectionId}"]`);
  if (!group) return;

  const groups = NESTED_TOPICS[sectionId];

  if (!groups || groups.length === 0) {
    group.innerHTML = emptyShell();
    return;
  }

  group.innerHTML = groups.map((groupItem, gIndex) => {
    const groupAccordionId = `${sectionId}-group-${gIndex}`;
    const groupPanelId = `${sectionId}-grouppanel-${gIndex}`;

    // Build the inner accordions
    const innerAccordions = groupItem.items
      .map((topic, iIndex) => buildAccordion(topic, `${sectionId}-${gIndex}`, iIndex, true))
      .join('');

    return `
      <div class="accordion accordion--group" data-accordion>
        <button
          class="accordion__trigger"
          aria-expanded="false"
          aria-controls="${groupPanelId}"
          id="${groupAccordionId}"
          data-accordion-trigger>
          <span class="accordion__indicator" aria-hidden="true"></span>
          <span class="accordion__text">
            <span class="accordion__title">${groupItem.groupTitle}</span>
            <span class="accordion__preview">${groupItem.groupPreview}</span>
          </span>
        </button>
        <div
          class="accordion__body"
          id="${groupPanelId}"
          role="region"
          aria-labelledby="${groupAccordionId}">
          <div class="accordion__body-inner">
            <div class="accordion__content">
              <div class="accordion-group accordion-group--nested">
                ${innerAccordions}
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}


/* ==========================================================
   6b. RENDER DEEP NESTED ACCORDIONS (lazy + recursive)
   Used for: mental (Section 2 — 3 levels), topics (Section 3 — 4 levels),
            patterns (Section 6), debug (Section 7).

   PERFORMANCE: This is LAZY. We only render Level 1 shells upfront.
   Children get rendered the first time their parent is opened.
   Without this, Section 3's ~8,400 accordions would all render
   at once and freeze the browser.

   Data lookup at click time uses a path like 'topics-0-1-2' that
   walks into DEEP_TOPICS[topics][0].items[1].items[2].

   The function tracks depth to apply the right CSS classes:
     depth 0 = group accordion (Level 1) — chevron, larger text
     depth 1+ = inner accordions (Level 2 and deeper)
     leaf (no children) = lightest visual treatment
   ========================================================== */
function renderDeepNestedAccordions(sectionId) {
  const group = document.querySelector(`[data-accordion-group="${sectionId}"]`);
  if (!group) return;

  const groups = DEEP_TOPICS[sectionId];

  if (!groups || groups.length === 0) {
    group.innerHTML = emptyShell();
    return;
  }

  // Render only Level 1 shells. Their bodies start empty;
  // children get rendered on first open via lazyRenderChildren().
  group.innerHTML = groups
    .map((groupItem, gIndex) => buildDeepShell(
      {
        title:   groupItem.groupTitle,
        preview: groupItem.groupPreview,
        items:   groupItem.items
      },
      `${sectionId}-${gIndex}`,
      0
    ))
    .join('');
}


/* ==========================================================
   Helper: build a single deep accordion SHELL (no children).
   - If the node has children, body stays empty + marked
     data-needs-render so toggleAccordion can populate later.
   - If the node is a leaf, body gets the placeholder content.
   ========================================================== */
function buildDeepShell(node, dataPath, depth) {
  const id = `${dataPath}-acc`;
  const panelId = `${dataPath}-panel`;

  const hasChildren = Array.isArray(node.items) && node.items.length > 0;

  // Pick CSS classes based on depth + cross-ref status
  let classes = 'accordion';
  if (depth === 0) {
    classes += ' accordion--group';                  // Level 1 (chevron)
  } else if (hasChildren) {
    classes += ' accordion--inner';                  // Branch with kids
  } else {
    classes += ' accordion--inner accordion--leaf';  // Deepest level
  }

  // Cross-references get an extra class for distinct styling
  // (dashed border, italic preview, ↗ mark — defined in styles.css)
  if (node.crossRef) {
    classes += ' accordion--crossref';
  }

  // Build body content based on node type:
  //  1. Cross-reference  → "See [original]" pointer note
  //  2. Branch w/ kids   → lazy slot, kids render on first open
  //  3. Leaf             → placeholder for Prompt 2
  let bodyContent;

  if (node.crossRef) {
    bodyContent = `
      <div class="card-section">
        <div class="card-section__label">Cross-reference</div>
        <div class="card-section__body">
          <p class="placeholder-note">
            This combo is documented under
            <strong>"${node.crossRef}"</strong>
            to avoid duplicate content. Prompt 2 will wire up a jump link here.
          </p>
        </div>
      </div>
    `;
  } else if (hasChildren) {
    bodyContent = `<div class="accordion__lazy-slot" data-needs-render="${dataPath}" data-depth="${depth}"></div>`;
  } else {
    // LEAF: Try to load real content from CONTENT[dataPath].
    // If no content exists yet, fall back to the placeholder.
    const realContent = (typeof CONTENT !== 'undefined') ? CONTENT[dataPath] : null;

    if (realContent) {
      bodyContent = `
        <div class="card-section">
          <div class="card-section__label">${node.title}</div>
          <div class="card-section__body">${realContent}</div>
        </div>
      `;
    } else {
      bodyContent = `
        <div class="card-section">
          <div class="card-section__label">${node.title}</div>
          <div class="card-section__body">
            <p class="placeholder-note">
              Prompt 2 will fill this with the actual content for "${node.title}".
            </p>
          </div>
        </div>
      `;
    }
  }

  return `
    <div class="${classes}" data-accordion>
      <button
        class="accordion__trigger"
        aria-expanded="false"
        aria-controls="${panelId}"
        id="${id}"
        data-accordion-trigger>
        <span class="accordion__indicator" aria-hidden="true"></span>
        <span class="accordion__text">
          <span class="accordion__title">${node.title}</span>
          <span class="accordion__preview">${node.preview}</span>
        </span>
      </button>
      <div
        class="accordion__body"
        id="${panelId}"
        role="region"
        aria-labelledby="${id}">
        <div class="accordion__body-inner">
          <div class="accordion__content">
            ${bodyContent}
          </div>
        </div>
      </div>
    </div>
  `;
}


/* ==========================================================
   Helper: walk into DEEP_TOPICS using a data path like
   'topics-0-1-2' to find a node's children.
   Returns the array of child items (or null if not found).
   ========================================================== */
function lookupDeepChildren(dataPath) {
  // path format: sectionId-i0-i1-i2-...
  const parts = dataPath.split('-');
  const sectionId = parts[0];
  const indexes = parts.slice(1).map(n => parseInt(n, 10));

  const sectionData = DEEP_TOPICS[sectionId];
  if (!sectionData) return null;

  // First index walks into the top-level groups array
  let node = sectionData[indexes[0]];
  if (!node) return null;

  // Subsequent indexes walk into .items[]
  for (let i = 1; i < indexes.length; i++) {
    if (!node.items || !node.items[indexes[i]]) return null;
    node = node.items[indexes[i]];
  }

  return node.items || null;
}


/* ==========================================================
   Helper: lazy-render an accordion's children when first opened.
   Replaces the .accordion__lazy-slot with real child accordions.
   ========================================================== */
function lazyRenderChildren(slot) {
  const dataPath = slot.getAttribute('data-needs-render');
  const parentDepth = parseInt(slot.getAttribute('data-depth'), 10);
  const children = lookupDeepChildren(dataPath);

  if (!children) {
    slot.outerHTML = '<p class="placeholder-note">No children to render.</p>';
    return;
  }

  // Pick the inner container class based on parent depth
  // Depth 0 (Level 1 group) → its kids go in --nested
  // Depth 1+ → kids go in --leaves
  const childContainerClass = parentDepth === 0
    ? 'accordion-group--nested'
    : 'accordion-group--leaves';

  // Build child shells (themselves still lazy if they have grandkids)
  const childHTML = children
    .map((child, cIndex) => buildDeepShell(child, `${dataPath}-${cIndex}`, parentDepth + 1))
    .join('');

  // Replace the slot with the rendered children
  slot.outerHTML = `<div class="accordion-group ${childContainerClass}">${childHTML}</div>`;

  // Re-run Prism on any newly-rendered code blocks. Prism auto-highlights
  // on page load, but our content arrives later via lazy rendering, so we
  // need to trigger it manually each time. Safe even if no code is present.
  if (typeof Prism !== 'undefined') {
    Prism.highlightAll();
  }
}


/* ==========================================================
   Helper: build a single accordion (used for both flat
   and nested inner accordions).
   Cross-reference shells (topic.crossRef) get a lighter
   visual treatment and a body that points to the original.
   ========================================================== */
function buildAccordion(topic, idPrefix, index, isInner) {
  const accordionId = `${idPrefix}-accordion-${index}`;
  const panelId = `${idPrefix}-panel-${index}`;

  // Level 1 (flat section top-level) gets accordion--group → chevron icon.
  // Deeper levels (isInner=true) get the default plus/minus icon.
  const levelClass = isInner ? ' accordion--inner' : ' accordion--group';
  const crossRefClass = topic.crossRef ? ' accordion--crossref' : '';

  // Three possible body contents:
  // 1. Cross-reference body — points to original
  // 2. Recursive body — if topic.items exists, render nested accordions inside
  // 3. Default body — placeholder for Prompt 2 content
  let bodyContent;

  if (topic.crossRef) {
    bodyContent = `
      <div class="card-section">
        <div class="card-section__label">Cross-reference</div>
        <div class="card-section__body">
          <p class="placeholder-note">
            This combo is documented under
            <strong>"${topic.crossRef}"</strong>
            to avoid duplicate content. Prompt 2 will wire up a jump link here.
          </p>
        </div>
      </div>
    `;
  } else if (topic.items && topic.items.length > 0) {
    // Recursive: this lesson has its own card-structure sub-shells.
    // Render them as another accordion-group inside (Level 3).
    const subAccordions = topic.items
      .map((sub, subIndex) => buildAccordion(sub, `${idPrefix}-${index}`, subIndex, true))
      .join('');
    bodyContent = `
      <div class="accordion-group accordion-group--nested">
        ${subAccordions}
      </div>
    `;
  } else {
    bodyContent = `
      <div class="card-section">
        <div class="card-section__label">Lesson content</div>
        <div class="card-section__body">
          <p class="placeholder-note">
            Content for "${topic.title}" will be populated from Prompt 2.
            The accordion shell, behavior, and structure are now in place.
          </p>
        </div>
      </div>
    `;
  }

  return `
    <div class="accordion${levelClass}${crossRefClass}" data-accordion>
      <button
        class="accordion__trigger"
        aria-expanded="false"
        aria-controls="${panelId}"
        id="${accordionId}"
        data-accordion-trigger>
        <span class="accordion__indicator" aria-hidden="true"></span>
        <span class="accordion__text">
          <span class="accordion__title">${topic.title}${topic.crossRef ? ' <span class="accordion__crossref-mark" aria-hidden="true">↗</span>' : ''}</span>
          <span class="accordion__preview">${topic.preview}</span>
        </span>
      </button>
      <div
        class="accordion__body"
        id="${panelId}"
        role="region"
        aria-labelledby="${accordionId}">
        <div class="accordion__body-inner">
          <div class="accordion__content">
            ${bodyContent}
          </div>
        </div>
      </div>
    </div>
  `;
}


/* ==========================================================
   Helper: empty placeholder (when a section has no data yet)
   ========================================================== */
function emptyShell() {
  return `
    <div class="accordion" style="border-style: dashed; opacity: 0.7;">
      <div class="accordion__trigger" style="cursor: default;">
        <div class="accordion__indicator" style="opacity: 0.4;"></div>
        <div class="accordion__text">
          <div class="accordion__title">More topics coming from Prompt 2</div>
          <div class="accordion__preview">This section's accordion shells are added separately.</div>
        </div>
      </div>
    </div>
  `;
}


/* ==========================================================
   7. VIEW SWITCHING
   ========================================================== */
function showView(viewId) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('is-active'));

  const targetId = viewId === 'dashboard' ? 'view-dashboard' : `view-${viewId}`;
  const target = document.getElementById(targetId);

  if (target) {
    target.classList.add('is-active');
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  closeMobileNav();
}


/* ==========================================================
   8. ACCORDION TOGGLE
   Independent toggle: opening one accordion does NOT close
   any others — at any level. Each accordion remembers its
   own state, you control all of them yourself.

   Also handles LAZY RENDERING: if this accordion has children
   that haven't been rendered yet (data-needs-render slot),
   build them on first open. This keeps Section 3's ~8400
   accordions from all rendering at once.
   ========================================================== */
function toggleAccordion(trigger) {
  const accordion = trigger.closest('[data-accordion]');
  if (!accordion) return;

  const isOpen = accordion.classList.toggle('is-open');
  trigger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');

  // If we're opening it, check for unrendered children
  if (isOpen) {
    const slot = accordion.querySelector(':scope > .accordion__body .accordion__lazy-slot');
    if (slot) lazyRenderChildren(slot);
  }
}


/* ==========================================================
   9. MOBILE NAV TOGGLE
   ========================================================== */
function toggleMobileNav() {
  const btn = document.querySelector('[data-mobile-toggle]');
  const nav = document.getElementById('mobile-nav');
  if (!btn || !nav) return;

  const isOpen = nav.classList.toggle('is-open');
  btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
}

function closeMobileNav() {
  const btn = document.querySelector('[data-mobile-toggle]');
  const nav = document.getElementById('mobile-nav');
  if (!btn || !nav) return;

  nav.classList.remove('is-open');
  btn.setAttribute('aria-expanded', 'false');
}


/* ==========================================================
   10. EVENT WIRING (delegated)
   ========================================================== */
function wireEvents() {

  document.addEventListener('click', (e) => {

    // Return-to-dashboard buttons (topbar, breadcrumb, footer)
    if (e.target.closest('[data-go-home]')) {
      showView('dashboard');
      return;
    }

    // Section navigation (dashboard cards, mobile nav, prev/next)
    const sectionBtn = e.target.closest('[data-go-section]');
    if (sectionBtn) {
      const sectionId = sectionBtn.getAttribute('data-go-section');
      showView(sectionId);
      return;
    }

    // Accordion triggers (works for both flat and nested)
    const accordionTrigger = e.target.closest('[data-accordion-trigger]');
    if (accordionTrigger) {
      toggleAccordion(accordionTrigger);
      return;
    }

    // Mobile menu button
    if (e.target.closest('[data-mobile-toggle]')) {
      toggleMobileNav();
      return;
    }
  });

  // Escape key closes mobile nav
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMobileNav();
  });
}


/* ==========================================================
   11. INIT
   ========================================================== */
function init() {
  renderDashboard();
  renderMobileNav();

  // Sections that use single-level accordions
  const flatSections = ['before', 'bigpicture'];

  // Sections that use 2-level nested accordions
  const nestedSections = [];

  // Sections that use 3+ level deep nested accordions
  // (mental: 3 levels, topics: 4 levels)
  const deepSections = ['mental', 'topics','combos', 'methods', 'patterns', 'debug'];

  // Render breadcrumbs and prev/next for every section
  SECTIONS.forEach((section, index) => {
    renderBreadcrumb(section);
    renderPrevNext(section, index);
  });

  // Render accordions per section type
  flatSections.forEach(id => renderAccordions(id));
  nestedSections.forEach(id => renderNestedAccordions(id));
  deepSections.forEach(id => renderDeepNestedAccordions(id));

  wireEvents();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
