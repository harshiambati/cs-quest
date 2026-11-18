// Element colors: [main, light, dark]
export const ELEMENTS = {
  water: { main: '#2a7fa8', light: '#8fd0e8', dark: '#164a66', label: 'Water' },
  fire: { main: '#d9481c', light: '#f59e3b', dark: '#8e2a0e', label: 'Fire' },
  earth: { main: '#5c7f3a', light: '#a8c77a', dark: '#2f4a18', label: 'Earth' },
  air: { main: '#e8b84a', light: '#fbe7a8', dark: '#9a6b12', label: 'Air' },
};

// Original element glyphs (not official emblems).
export function ElementIcon({ type, size = 26, color }) {
  const c = color || ELEMENTS[type].dark;
  const common = { width: size, height: size, viewBox: '0 0 24 24', 'aria-hidden': true, fill: 'none', stroke: c, strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' };
  if (type === 'water')
    return <svg {...common}><path d="M12 2.5c4 5 7 8.4 7 12a7 7 0 0 1-14 0c0-3.6 3-7 7-12z" /><path d="M9 15a3 3 0 0 0 3 3" /></svg>;
  if (type === 'fire')
    return <svg {...common}><path d="M12 2c1 4 6 6 6 12a6 6 0 0 1-12 0c0-3 1.6-4.6 3-6 .4 2 1.2 3 2.2 3C11 8 10.6 5 12 2z" /></svg>;
  if (type === 'earth')
    return <svg {...common}><path d="M12 2.5l8 4.5v9.5l-8 5-8-5V7z" /><path d="M4 7l8 4.5L20 7M12 11.5V21" /></svg>;
  return <svg {...common}><path d="M3 9h10a3 3 0 1 0-3-3" /><path d="M3 14h15a3 3 0 1 1-3 3" /><path d="M3 19h6" /></svg>;
}

export const Coin = () => (
  <svg width="20" height="20" viewBox="0 0 22 22" aria-hidden="true">
    <circle cx="11" cy="11" r="9" fill="#e8b84a" stroke="#8a5a18" strokeWidth="2" />
    <rect x="9" y="6" width="4" height="10" rx="1.5" fill="#8a5a18" />
  </svg>
);

export const Flame = () => (
  <svg width="112" height="130" viewBox="0 0 84 104" aria-hidden="true">
    <path d="M42 4c4 20 26 30 26 56a26 26 0 0 1-52 0c0-14 8-22 14-30 2 10 6 14 10 14C38 34 36 18 42 4z" fill="#f59e3b" stroke="#4a1204" strokeWidth="3" strokeLinejoin="round" />
    <path d="M42 46c2 10 12 14 12 26a12 12 0 0 1-24 0c0-8 6-12 12-26z" fill="#fff1c2" stroke="#d9481c" strokeWidth="2.5" strokeLinejoin="round" />
  </svg>
);

export const Scroll = () => (
  <svg width="34" height="34" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="#6b3f14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 3h11a2 2 0 0 1 2 2v1H9V5a2 2 0 0 0-2-2zM9 6v13a2 2 0 0 1-2 2H6a3 3 0 0 1-3-3v-1h4" /><path d="M12 10h5M12 14h5" />
  </svg>
);

export const Lock = () => (
  <svg width="24" height="26" viewBox="0 0 26 28" aria-hidden="true">
    <rect x="3" y="12" width="20" height="14" rx="3" fill="#8a7358" />
    <path d="M7 12V8a6 6 0 0 1 12 0v4" fill="none" stroke="#8a7358" strokeWidth="3.5" />
  </svg>
);

export const Check = ({ visible }) => (
  <svg width="22" height="22" viewBox="0 0 16 16" fill="none" stroke="#fff" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ opacity: visible ? 1 : 0 }}>
    <path d="M3 8.5l3.2 3L13 4.5" />
  </svg>
);

// Original "spirit" creature for the weekly boss.
export const Spirit = () => (
  <svg width="120" height="120" viewBox="0 0 120 120" aria-hidden="true" style={{ flex: 'none' }}>
    <path d="M60 10c28 0 46 22 46 50 0 20-8 36-14 50-6-8-10-8-16 0-6-8-10-8-16 0-6-8-10-8-16 0-6-8-10-8-16 0C18 96 14 80 14 60c0-28 18-50 46-50z" fill="#2a7fa8" stroke="#8fd0e8" strokeWidth="4" strokeLinejoin="round" />
    <ellipse cx="44" cy="52" rx="9" ry="12" fill="#f4e6c8" /><ellipse cx="76" cy="52" rx="9" ry="12" fill="#f4e6c8" />
    <circle cx="46" cy="54" r="5" fill="#0f2a38" /><circle cx="74" cy="54" r="5" fill="#0f2a38" />
    <path d="M46 78c8 6 20 6 28 0" fill="none" stroke="#f4e6c8" strokeWidth="4" strokeLinecap="round" />
  </svg>
);

// Original sky traveler: a rider on a fluffy cloud-whale, facing right.
export const SkyRider = () => (
  <svg width="84" height="56" viewBox="0 0 64 44" aria-hidden="true">
    <path d="M12 26c-6-2-10-8-9-14 6 0 11 4 13 9z" fill="#fdf6e3" stroke="#6b5440" strokeWidth="1.8" strokeLinejoin="round" />
    <path d="M30 35c3 6 9 7 13 4-3-1-5-3-6-6z" fill="#bfe3f0" stroke="#6b5440" strokeWidth="1.8" strokeLinejoin="round" />
    <ellipse cx="32" cy="27" rx="24" ry="12" fill="#fdf6e3" stroke="#6b5440" strokeWidth="2" />
    <path d="M12 31c6 6 28 7 40 0" fill="none" stroke="#bfe3f0" strokeWidth="4" strokeLinecap="round" />
    <circle cx="50" cy="25" r="2" fill="#3b2a1a" />
    <path d="M52 31c2 0 4-1 5-3" fill="none" stroke="#6b5440" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M25 11c-5 1-9 0-13-3" fill="none" stroke="#d9481c" strokeWidth="3" strokeLinecap="round" />
    <ellipse cx="28" cy="14" rx="5" ry="6" fill="#3f8f5a" stroke="#2a5c3a" strokeWidth="1.6" />
    <circle cx="29" cy="6" r="4.2" fill="#f1c9a0" stroke="#6b5440" strokeWidth="1.4" />
    <path d="M24.8 5.5c1-4 7-5 9-1-3-1-6 0-9 1z" fill="#5a3a1c" />
  </svg>
);

export const Flag = () => (
  <svg width="22" height="30" viewBox="0 0 22 30" aria-hidden="true">
    <path d="M4 28V3" stroke="#fbefd2" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M4 4h14l-4 5 4 5H4z" fill="#e8b84a" stroke="#fbefd2" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);
