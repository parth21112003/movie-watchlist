// ── Constants ──────────────────────────────────────────────
const EMOJIS = { movie: '🎬', show: '📺' };

const STATUS_LABELS = {
  want: 'Want',
  watching: 'Watching',
  watched: 'Watched',
  dropped: 'Dropped'
};

const GENRE_EMOJIS = {
  Action: '💥', Comedy: '😂', Drama: '🎭', Horror: '👻',
  'Sci-Fi': '🚀', Thriller: '🔪', Romance: '💕',
  Animation: '✨', Documentary: '📽️', Fantasy: '🧙', Crime: '🕵️'
};

// ── Default seed items (used when localStorage is empty) ────
const DEFAULT_ITEMS = [
  { id: 1, title: 'Dune: Part Two',  type: 'movie', year: 2024, status: 'watched',  genre: 'Sci-Fi', rating: 4, added: Date.now() - 86400000 * 5  },
  { id: 2, title: 'Shogun',          type: 'show',  year: 2024, status: 'watching', genre: 'Drama',  rating: 5, added: Date.now() - 86400000 * 3  },
  { id: 3, title: 'Oppenheimer',     type: 'movie', year: 2023, status: 'watched',  genre: 'Drama',  rating: 5, added: Date.now() - 86400000 * 10 },
  { id: 4, title: 'Poor Things',     type: 'movie', year: 2023, status: 'want',     genre: 'Comedy', rating: 0, added: Date.now() - 86400000 * 2  },
  { id: 5, title: 'The Bear',        type: 'show',  year: 2022, status: 'watched',  genre: 'Drama',  rating: 5, added: Date.now() - 86400000 * 15 },
  { id: 6, title: 'Civil War',       type: 'movie', year: 2024, status: 'want',     genre: 'Action', rating: 0, added: Date.now() - 86400000 * 1  },
];
