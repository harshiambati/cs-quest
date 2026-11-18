// inline svg icons
export const Star = ({ fill, size = 16, stroke }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M12 2l3 6.5 7 .9-5.2 4.8 1.4 7L12 17.8 5.8 21.2l1.4-7L2 9.4l7-.9z"
      fill={fill}
      stroke={stroke}
      strokeWidth={stroke ? 1.8 : 0}
      strokeLinejoin="round"
    />
  </svg>
);

export const Coin = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
    <circle cx="11" cy="11" r="9" fill="#ffc83d" stroke="#b55a12" strokeWidth="2" />
    <rect x="9" y="6" width="4" height="10" rx="1.5" fill="#b55a12" />
  </svg>
);

export const Gem = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
    <path d="M11 2l8 6-8 12L3 8z" fill="#3dd9ff" stroke="#0e7490" strokeWidth="2" strokeLinejoin="round" />
  </svg>
);

export const Shield = ({ filled }) => (
  <svg width="20" height="22" viewBox="0 0 20 22" aria-hidden="true">
    <path
      d="M10 2l7 3v6c0 5-3 8-7 9-4-1-7-4-7-9V5z"
      fill={filled ? '#5be37d' : '#1e1448'}
      stroke={filled ? '#14803a' : '#5b4aa8'}
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </svg>
);

export const Flame = () => (
  <svg width="110" height="132" viewBox="0 0 84 104" aria-hidden="true">
    <path d="M42 4c4 20 26 30 26 56a26 26 0 0 1-52 0c0-14 8-22 14-30 2 10 6 14 10 14C38 34 36 18 42 4z" fill="#ff8a3d" stroke="#b53a00" strokeWidth="3" strokeLinejoin="round" />
    <path d="M42 48c2 10 12 14 12 26a12 12 0 0 1-24 0c0-8 6-12 12-26z" fill="#ffe08a" stroke="#e0951a" strokeWidth="2.5" strokeLinejoin="round" />
  </svg>
);

export const Chest = () => (
  <svg width="38" height="34" viewBox="0 0 38 34" aria-hidden="true">
    <rect x="3" y="12" width="32" height="20" rx="3" fill="#b55a12" stroke="#5a2a00" strokeWidth="2.5" />
    <path d="M3 15a3 3 0 0 1 3-3h26a3 3 0 0 1 3 3v2H3z" fill="#e0951a" stroke="#5a2a00" strokeWidth="2.5" />
    <rect x="16" y="14" width="6" height="8" rx="1.5" fill="#ffe08a" stroke="#5a2a00" strokeWidth="2" />
    <path d="M6 12c0-6 6-9 13-9s13 3 13 9z" fill="#e0951a" stroke="#5a2a00" strokeWidth="2.5" />
  </svg>
);

export const Lock = () => (
  <svg width="26" height="28" viewBox="0 0 26 28" aria-hidden="true">
    <rect x="3" y="12" width="20" height="14" rx="3" fill="#5b4aa8" />
    <path d="M7 12V8a6 6 0 0 1 12 0v4" fill="none" stroke="#5b4aa8" strokeWidth="3.5" />
  </svg>
);

export const Check = ({ visible }) => (
  <svg width="22" height="22" viewBox="0 0 16 16" fill="none" stroke="#0a2a12" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ opacity: visible ? 1 : 0 }}>
    <path d="M3 8.5l3.2 3L13 4.5" />
  </svg>
);

export const BossMonster = () => (
  <svg width="120" height="120" viewBox="0 0 120 120" aria-hidden="true" style={{ flex: 'none' }}>
    <path d="M40 22L28 6M80 22l12-16" stroke="#ff5c8a" strokeWidth="5" strokeLinecap="round" />
    <ellipse cx="60" cy="68" rx="42" ry="40" fill="#8b2e5e" stroke="#ff5c8a" strokeWidth="5" />
    <circle cx="44" cy="60" r="11" fill="#fff" />
    <circle cx="76" cy="60" r="11" fill="#fff" />
    <circle cx="46" cy="62" r="5" fill="#120b2e" />
    <circle cx="74" cy="62" r="5" fill="#120b2e" />
    <path d="M40 84l7 8 7-8 6 8 6-8 7 8 7-8" fill="none" stroke="#fff" strokeWidth="4" strokeLinejoin="round" strokeLinecap="round" />
    <path d="M22 96l-10 12M98 96l10 12" stroke="#ff5c8a" strokeWidth="5" strokeLinecap="round" />
  </svg>
);
