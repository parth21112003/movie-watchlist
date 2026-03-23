// ── Storage ─────────────────────────────────────────────────
// Load items from localStorage, fall back to seed data
let items = JSON.parse(localStorage.getItem('wl_items') || 'null') || DEFAULT_ITEMS.slice();

/**
 * Persist current items array to localStorage.
 */
function save() {
  localStorage.setItem('wl_items', JSON.stringify(items));
}
