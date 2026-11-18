// houses components for main app view

import { useMemo, useState } from 'react';
import {
  quests, practicePickUrl, patternZone, coreZone, weakSpots, badges, funFact, makeActivity,
} from './data.js';
import {
  Star, Coin, Gem, Shield, Flame, Chest, Lock, Check, BossMonster,
} from './icons.jsx';

const HEAT_FILL = ['#2a1b66', '#4b37a8', '#7c4dff', '#b388ff', '#3dd9ff'];
const HEAT_BORDER = ['#3d2a8c', '#5b47c0', '#9168ff', '#c9a8ff', '#9bebff'];

function Hud() {
  const filledSegments = 9; // out of 12
  return (
    <div className="hud">
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, flex: '1 1 360px', minWidth: 0 }}>
        <div className="level-badge pix">7</div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8, marginBottom: 6 }}>
            <span className="pix" style={{ fontSize: 11, color: 'var(--gold-light)' }}>HASH HUNTER</span>
            <span style={{ fontSize: 13, color: 'var(--muted)' }}>1,340 / 1,800 XP</span>
          </div>
          <div className="xp-segs">
            {Array.from({ length: 12 }, (_, i) => (
              <div key={i} className="xp-seg" style={{ background: i < filledSegments ? 'var(--gold)' : 'var(--panel-2)' }} />
            ))}
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
        <div className="pill"><Coin /><span className="pix" style={{ fontSize: 12 }}>482</span></div>
        <div className="pill"><Gem /><span className="pix" style={{ fontSize: 12 }}>17</span></div>
        <div className="pill" role="img" aria-label="2 of 3 streak freezes" style={{ gap: 6 }}>
          <Shield filled /><Shield filled /><Shield />
        </div>
      </div>
    </div>
  );
}

function StreakCard({ days }) {
  return (
    <div className="streak">
      <div className="pix" style={{ fontSize: 12, color: '#ffc9a0' }}>DAY STREAK</div>
      <Flame />
      <div className="pix" style={{ fontSize: 52, color: 'var(--gold-light)', textShadow: '0 5px 0 #b53a00' }}>{days}</div>
      <div style={{ fontSize: 14, color: '#e5d8ff' }}>Next reward at 14 days: a free shield</div>
    </div>
  );
}

function DailyQuest({ done, onToggle }) {
  const count = done.filter(Boolean).length;
  return (
    <div className="panel quest">
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
        <div className="pix" style={{ fontSize: 16, color: 'var(--gold-light)' }}>DAILY QUEST</div>
        <div style={{ display: 'flex', gap: 6 }} role="img" aria-label={`${count} of 3 stars earned`}>
          {[1, 2, 3].map((k) => (
            <Star key={k} size={34} fill={count >= k ? '#ffc83d' : '#2a1b66'} stroke="#b55a12" />
          ))}
        </div>
      </div>

      {quests.map((q, i) => {
        const d = done[i];
        return (
          <button
            key={q.title}
            className="btn task"
            onClick={() => onToggle(i)}
            aria-pressed={d}
            style={{
              background: d ? '#173d2a' : 'var(--panel-2)',
              borderColor: d ? 'var(--green)' : '#4b37a8',
              boxShadow: `0 5px 0 ${d ? '#0b4a22' : 'var(--shadow)'}`,
            }}
          >
            <span className="task-box" style={{ background: d ? 'var(--green)' : 'var(--panel-2)', borderColor: d ? 'var(--green)' : '#4b37a8' }}>
              <Check visible={d} />
            </span>
            <span style={{ flex: 1, minWidth: 0 }}>
              <span style={{ display: 'block', fontWeight: 800, fontSize: 16 }}>{q.title}</span>
              <span style={{ display: 'block', fontSize: 13, color: 'var(--muted)', marginTop: 2 }}>{q.sub}</span>
            </span>
            <span className="pix" style={{ flex: 'none', fontSize: 11, color: d ? '#8cf0a9' : 'var(--gold-light)' }}>+{q.xp}</span>
          </button>
        );
      })}

      {count === 3 && <div className="clear-banner pix">QUEST CLEAR! +190 XP, STREAK 13</div>}

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, alignItems: 'center', justifyContent: 'space-between' }}>
        <a href={practicePickUrl} target="_blank" rel="noreferrer" style={{ fontSize: 14 }}>Open today's pick on LeetCode</a>
        <span style={{ fontSize: 13, color: 'var(--muted)' }}>Short on time? Lite Day (1 quest) keeps the streak.</span>
      </div>
    </div>
  );
}

function AdventureLog() {
  const cells = useMemo(makeActivity, []);
  return (
    <div className="panel" style={{ flex: '2 1 520px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8, marginBottom: 16 }}>
        <div className="pix" style={{ fontSize: 14, color: 'var(--gold-light)' }}>ADVENTURE LOG</div>
        <div style={{ fontSize: 13, color: 'var(--muted)' }}>Last 20 weeks</div>
      </div>
      <div style={{ overflowX: 'auto', padding: '4px 4px 10px' }}>
        <div className="heat" role="img" aria-label="Activity log for the last 20 weeks">
          {cells.map((l, i) => (
            <div key={i} className="heat-cell" style={{ background: HEAT_FILL[l], borderColor: HEAT_BORDER[l] }} />
          ))}
        </div>
      </div>
    </div>
  );
}

function LootDrop({ open, onToggle }) {
  return (
    <button className="btn loot" onClick={onToggle} aria-expanded={open}>
      <span style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <Chest />
        <span className="pix" style={{ fontSize: 11, color: 'var(--gold-light)' }}>LOOT DROP</span>
      </span>
      <span className="pix" style={{ fontSize: 14, lineHeight: 1.6 }}>{open ? funFact.revealedTitle : funFact.title}</span>
      <span style={{ fontSize: 15, lineHeight: 1.55, color: '#e5d8ff' }}>{open ? funFact.revealed : funFact.teaser}</span>
      <span style={{ marginTop: 'auto', fontSize: 13, color: 'var(--cyan)' }}>{open ? 'Tap to close the chest' : 'Tap to open, +20 XP'}</span>
    </button>
  );
}

const STYLE_BY_STATUS = {
  done: { bg: '#7c4dff', border: '#c9a8ff', shadow: '#3b1c99', glow: '0 0 22px rgba(179,136,255,.6)' },
  active: { bg: '#0e7490', border: '#9bebff', shadow: '#073b49', glow: '0 0 22px rgba(61,217,255,.6)' },
  locked: { bg: '#241758', border: '#3d2a8c', shadow: '#0a0620', glow: '0 0 0 transparent' },
};

function starsFor({ status, pct }) {
  if (status === 'done') return pct >= 90 ? 3 : 2;
  if (status === 'active') return 1;
  return 0;
}

function Zone({ label, nodes }) {
  return (
    <>
      <div className="zone-label">{label}</div>
      <div className="zone">
        <div className="zone-track">
          {nodes.map((n, i) => {
            const s = STYLE_BY_STATUS[n.status];
            const locked = n.status === 'locked';
            const stars = starsFor(n);
            const linked = i > 0 && n.status !== 'locked';
            return (
              <div key={n.name} style={{ display: 'flex', alignItems: 'flex-start' }}>
                <div className="path" style={{ borderTopColor: i === 0 ? 'transparent' : linked ? '#b388ff' : '#3d2a8c' }} />
                <div className="node-wrap">
                  <div className="node" style={{ background: s.bg, borderColor: s.border, boxShadow: `0 6px 0 ${s.shadow}, ${s.glow}` }}>
                    {locked ? <Lock /> : <span className="pix" style={{ fontSize: 14, color: '#fff' }}>{n.pct}%</span>}
                  </div>
                  <div style={{ display: 'flex', gap: 2 }}>
                    {[1, 2, 3].map((k) => <Star key={k} fill={stars >= k ? '#ffc83d' : '#3d2a8c'} />)}
                  </div>
                  <div className="node-name" style={{ color: locked ? '#9c8fd0' : 'var(--text)' }}>{n.name}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

function WorldMap() {
  return (
    <div className="panel">
      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8, marginBottom: 18 }}>
        <div className="pix" style={{ fontSize: 14, color: 'var(--gold-light)' }}>WORLD MAP</div>
        <div style={{ fontSize: 13, color: 'var(--muted)' }}>Reach 70% on a zone to unlock the next one</div>
      </div>
      <Zone label="Pattern Plains" nodes={patternZone} />
      <Zone label="Core Kingdom" nodes={coreZone} />
    </div>
  );
}

function BossCard() {
  return (
    <div className="boss">
      <BossMonster />
      <div style={{ flex: '1 1 220px', minWidth: 0 }}>
        <div className="pix" style={{ fontSize: 12, color: '#ff9db8', marginBottom: 10 }}>BOSS: THE OFF-BY-ONE</div>
        <div style={{ fontSize: 14, color: '#f3d7e4', marginBottom: 12 }}>Unlocks Sunday. A timed mix of your weakest topics.</div>
        <div className="hp-bar"><div className="hp-fill" style={{ width: '100%' }} /></div>
        <div style={{ fontSize: 13, color: '#f3d7e4', marginTop: 6 }}>HP 100 / 100</div>
      </div>
    </div>
  );
}

function WeakAndBadges() {
  return (
    <div className="panel" style={{ flex: '1 1 440px' }}>
      <div className="pix panel-title">MONSTERS TO DEFEAT</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {weakSpots.map((w) => (
          <div key={w.name}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 15, marginBottom: 6 }}>
              <span>{w.name}</span>
              <span className="pix" style={{ fontSize: 11, color: '#ff9db8' }}>{w.pct}%</span>
            </div>
            <div className="hp-bar" style={{ height: 16 }}><div className="hp-fill" style={{ width: `${w.pct}%` }} /></div>
          </div>
        ))}
      </div>

      <div className="pix panel-title" style={{ margin: '24px 0 14px' }}>BADGES</div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
        {badges.map((b) => (
          <div key={b.name} style={{ width: 92, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, textAlign: 'center' }}>
            <div
              className="badge-icon pix"
              style={{
                background: b.earned ? b.color : '#241758',
                borderColor: b.earned ? '#fff' : 'var(--border)',
                color: b.earned ? '#120b2e' : '#5b4aa8',
              }}
            >
              {b.icon}
            </div>
            <div style={{ fontSize: 12, color: b.earned ? 'var(--text)' : '#9c8fd0' }}>{b.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  const [done, setDone] = useState([false, false, false]);
  const [lootOpen, setLootOpen] = useState(false);

  const toggleQuest = (i) => setDone((d) => d.map((v, j) => (j === i ? !v : v)));
  const toggleLoot = () => {
    setLootOpen((o) => !o);
    setDone((d) => d.map((v, j) => (j === 2 ? true : v))); // opening the chest completes quest 3
  };

  return (
    <main className="app">
      <Hud />
      <div className="row">
        <StreakCard days={12} />
        <DailyQuest done={done} onToggle={toggleQuest} />
      </div>
      <div className="row">
        <AdventureLog />
        <LootDrop open={lootOpen} onToggle={toggleLoot} />
      </div>
      <WorldMap />
      <div className="row">
        <BossCard />
        <WeakAndBadges />
      </div>
    </main>
  );
}
