# 🎬 Watchlist

A minimal, client-side movie & TV show tracker. No backend, no dependencies — just HTML, CSS, and vanilla JS.

## Folder Structure

```
watchlist/
├── index.html          # Main HTML shell
├── css/
│   └── style.css       # All styles (variables, layout, components)
└── js/
    ├── data.js         # Constants & default seed data
    ├── storage.js      # localStorage read/write helpers
    ├── render.js       # DOM rendering, filtering, sorting, item actions
    ├── modal.js        # Modal open/close/add-item logic
    └── app.js          # Entry point — event listeners & initial render
```

## Features

- Add movies and TV shows with title, year, genre, and status
- Filter by status (Want / Watching / Watched / Dropped) and type (Movie / Show)
- Sort by date added, title, rating, or year
- Star ratings (1–5) per item
- Search by title
- Stats bar showing counts per status
- Data persists in `localStorage`

## Usage

Open `index.html` directly in any modern browser — no build step needed.
