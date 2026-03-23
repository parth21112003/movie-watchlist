// ── State ────────────────────────────────────────────────────
let activeFilter = 'all';
let activeType   = 'all';

// ── Filter / Sort helpers ────────────────────────────────────
function setFilter(btn, f) {
  activeFilter = f;
  document.querySelectorAll('.filter-tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  render();
}

function setType(btn, t) {
  activeType = t;
  document.querySelectorAll('.type-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  render();
}

function getFiltered() {
  const q    = document.getElementById('searchInput').value.toLowerCase();
  const sort = document.getElementById('sortSelect').value;

  let list = items.filter(i => {
    if (activeFilter !== 'all' && i.status !== activeFilter) return false;
    if (activeType   !== 'all' && i.type   !== activeType)   return false;
    if (q && !i.title.toLowerCase().includes(q))             return false;
    return true;
  });

  if      (sort === 'title')  list.sort((a, b) => a.title.localeCompare(b.title));
  else if (sort === 'rating') list.sort((a, b) => b.rating - a.rating);
  else if (sort === 'year')   list.sort((a, b) => (b.year || 0) - (a.year || 0));
  else                        list.sort((a, b) => b.added - a.added);

  return list;
}

// ── Stats bar ────────────────────────────────────────────────
function updateStats() {
  const el     = document.getElementById('statsBar');
  const counts = { watched: 0, watching: 0, want: 0, dropped: 0 };
  items.forEach(i => counts[i.status]++);
  el.innerHTML = `
    <div class="stat"><div class="stat-num">${counts.watched}</div><div class="stat-label">Watched</div></div>
    <div class="stat"><div class="stat-num">${counts.watching}</div><div class="stat-label">Watching</div></div>
    <div class="stat"><div class="stat-num">${counts.want}</div><div class="stat-label">Queue</div></div>
  `;
}

// ── Star rating HTML ─────────────────────────────────────────
function stars(id, rating) {
  return [1, 2, 3, 4, 5].map(n => `
    <span class="star ${n <= rating ? 'filled' : ''}"
          onclick="setRating(${id}, ${n})"
          title="${n} star${n > 1 ? 's' : ''}">⭐</span>
  `).join('');
}

// ── Item actions ─────────────────────────────────────────────
function setRating(id, r) {
  const item = items.find(i => i.id === id);
  if (item) { item.rating = r; save(); render(); }
}

function setStatus(id, s) {
  const item = items.find(i => i.id === id);
  if (item) { item.status = s; save(); render(); }
}

function deleteItem(id) {
  items = items.filter(i => i.id !== id);
  save();
  render();
}

// ── Main render ──────────────────────────────────────────────
function render() {
  updateStats();
  const list = getFiltered();
  const grid = document.getElementById('grid');

  if (!list.length) {
    grid.innerHTML = `
      <div class="empty-state">
        <div class="big-emoji">🎞️</div>
        <p><strong>Nothing here yet.</strong><br>Add a movie or show to get started.</p>
      </div>`;
    return;
  }

  grid.innerHTML = list.map(item => `
    <div class="card">
      <div style="position:relative">
        <div class="card-poster-placeholder">
          <span>${GENRE_EMOJIS[item.genre] || EMOJIS[item.type]}</span>
          <span>${item.type}</span>
        </div>
        <span class="card-status-badge badge-${item.status}">${STATUS_LABELS[item.status]}</span>
        <span class="card-type-badge">${EMOJIS[item.type]}</span>
      </div>
      <div class="card-body">
        <div class="card-title">${item.title}</div>
        <div class="card-meta">
          ${item.year  ? `<span>${item.year}</span>`                          : ''}
          ${item.genre ? `<span class="card-genre">${item.genre}</span>` : ''}
        </div>
        <div class="card-rating">${stars(item.id, item.rating)}</div>
        <div class="card-actions">
          <select class="status-select" onchange="setStatus(${item.id}, this.value)">
            <option value="want"     ${item.status === 'want'     ? 'selected' : ''}>Want</option>
            <option value="watching" ${item.status === 'watching' ? 'selected' : ''}>Watching</option>
            <option value="watched"  ${item.status === 'watched'  ? 'selected' : ''}>Watched</option>
            <option value="dropped"  ${item.status === 'dropped'  ? 'selected' : ''}>Dropped</option>
          </select>
          <button class="delete-btn" onclick="deleteItem(${item.id})" title="Remove">✕</button>
        </div>
      </div>
    </div>
  `).join('');
}
