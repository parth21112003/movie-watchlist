// ── App entry point ──────────────────────────────────────────
// Close modal on Escape key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

// Initial render
render();
