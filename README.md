# CS Quest (dashboard mockup)

A gamified CS/interview-prep dashboard. React + Vite, no other dependencies.

## Run it

```bash
npm install
npm run dev
```

Then open the URL it prints (usually http://localhost:5173).

## Where to edit

- `src/data.js`: all sample content (quests, skill nodes, weak spots, badges, fun fact). Swap for API calls later.
- `src/App.jsx`: the components (HUD, streak, daily quest, heatmap, loot drop, world map, boss, badges).
- `src/icons.jsx`: inline SVG icons.
- `src/styles.css`: theme colors (CSS variables at the top) and layout classes.

## Next steps

- Persist quest completion (Supabase/FastAPI) and compute XP and streak from an events table.
- Replace `makeActivity()` with real activity data.
- Add routing for the problem tracker and card review screens.
