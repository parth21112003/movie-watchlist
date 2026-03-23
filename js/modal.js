// ── Modal helpers ────────────────────────────────────────────
function openModal() {
  document.getElementById('fTitle').value  = '';
  document.getElementById('fYear').value   = '';
  document.getElementById('fStatus').value = 'want';
  document.getElementById('fGenre').value  = '';
  document.getElementById('fType').value   = 'movie';
  document.getElementById('modalOverlay').classList.add('open');
  setTimeout(() => document.getElementById('fTitle').focus(), 100);
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
}

function closeModalOutside(e) {
  if (e.target === document.getElementById('modalOverlay')) closeModal();
}

// ── Add item ─────────────────────────────────────────────────
function addItem() {
  const title = document.getElementById('fTitle').value.trim();
  if (!title) { document.getElementById('fTitle').focus(); return; }

  const item = {
    id:     Date.now(),
    title,
    type:   document.getElementById('fType').value,
    year:   parseInt(document.getElementById('fYear').value) || null,
    status: document.getElementById('fStatus').value,
    genre:  document.getElementById('fGenre').value,
    rating: 0,
    added:  Date.now()
  };

  items.unshift(item);
  save();
  closeModal();
  render();
}
