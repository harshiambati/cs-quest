// Sample data for the mockup. Replace with API calls (FastAPI/Supabase) later.
// element: 'water' | 'fire' | 'earth' | 'air'

export const quests = [
  { title: 'Review 5 cards', sub: 'Process vs thread, B-trees, TCP handshake', xp: 50, element: 'water' },
  { title: 'Practice pick: Longest Substring Without Repeating', sub: 'Medium, sliding window', xp: 120, element: 'fire' },
  { title: 'Unroll today\u2019s scroll', sub: 'Open the fun fact below', xp: 20, element: 'air' },
  { title: 'Revisit an old problem', sub: 'Redo one that is due for spaced review', xp: 60, element: 'earth' },
];

export const practicePickUrl =
  'https://leetcode.com/problems/longest-substring-without-repeating-characters/';

// status: 'done' | 'active' | 'locked'
export const patternZone = [
  { name: 'Arrays', pct: 92, status: 'done', element: 'earth' },
  { name: 'Hashing', pct: 81, status: 'done', element: 'water' },
  { name: 'Two Pointers', pct: 74, status: 'done', element: 'air' },
  { name: 'Sliding Window', pct: 52, status: 'active', element: 'fire' },
  { name: 'Trees', pct: 0, status: 'locked', element: 'earth' },
  { name: 'Graphs', pct: 0, status: 'locked', element: 'water' },
  { name: 'DP', pct: 0, status: 'locked', element: 'fire' },
];

export const coreZone = [
  { name: 'Operating Systems', pct: 71, status: 'done', element: 'earth' },
  { name: 'Networking', pct: 63, status: 'active', element: 'water' },
  { name: 'Databases', pct: 0, status: 'locked', element: 'earth' },
  { name: 'System Design', pct: 0, status: 'locked', element: 'air' },
];

export const weakSpots = [
  { name: 'Dynamic Programming', pct: 58, element: 'fire' },
  { name: 'Graphs', pct: 64, element: 'water' },
  { name: 'OS Scheduling', pct: 71, element: 'earth' },
];

export const badges = [
  { name: '7-day streak', icon: 'fire', earned: true },
  { name: 'First hash win', icon: 'water', earned: true },
  { name: 'No-hint solve', icon: 'air', earned: true },
  { name: 'Night owl', icon: 'earth', earned: false },
  { name: 'Spirit slayer', icon: 'water', earned: false },
];

export const funFact = {
  title: 'The first computer bug was a real bug',
  teaser:
    'In 1947, a moth caused a malfunction in a Harvard Mark II relay. Want to know why we still say \u201cdebugging\u201d?',
  revealedTitle: 'A moth was taped into the logbook',
  revealed:
    'In 1947, operators of the Harvard Mark II found a moth stuck in a relay and taped it into the log as the first actual case of a bug being found. The word was already engineer slang, so the joke stuck.',
};

// Deterministic fake activity levels (0-4) for the heatmap: 20 weeks x 7 days.
export function makeActivity() {
  const cells = [];
  for (let i = 0; i < 140; i++) {
    let l = (i * 7 + (i % 5) * 3 + (i >> 2)) % 11;
    l = l < 3 ? 0 : l < 5 ? 1 : l < 8 ? 2 : l < 10 ? 3 : 4;
    if (i >= 128) l = Math.max(l, 2 + (i % 3 === 0 ? 1 : 0)); // current streak
    cells.push(l);
  }
  return cells;
}
