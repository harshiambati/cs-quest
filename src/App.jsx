import { useMemo, useState } from 'react';
import {
  quests, practicePickUrl, patternZone, coreZone, weakSpots, badges, funFact, makeActivity,
} from './data.js';
import { ELEMENTS, ElementIcon, Coin, Flame, Scroll, Lock, Check, Spirit, Flag } from './icons.jsx';
import Rider from './Rider.jsx';

const HEAT_FILL = ['#e3cfa3', '#f5c781', '#f59e3b', '#d9481c', '#8e2a0e'];
const INK = '#3b2a1a';

function Hud() {
  return (
    <header className="hud">
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, flex: '1 1 380px', minWidth: 0 }}>
        <div className="emblem title" aria-label="Level 7">7</div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8, marginBottom: 6, flexWrap: 'wrap' }}>
            <span className="title" style={{ fontSize: 16 }}>Journey to Ba Sing CS</span>
            <span style={{ fontSize: 14, opacity: 0.9 }}>1,340 / 1,800 XP</span>
          </div>
          <div className="xp-track">
            <div className="sky-rider" style={{ left: '30%' }}>
              <span className="puffs" aria-hidden="true"><i /><i /><i /></span>
              <div className="sky-bob"><Rider /></div>
            </div>
            <span className="xp-flag"><Flag /></span>
            <div className="xp-bar" role="progressbar" aria-valuenow={30} aria-valuemin={0} aria-valuemax={100} aria-label="XP to next level">
              <div className="xp-fill" style={{ width: '30%' }} />
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
        <div className="pill"><Coin /><span>482</span></div>
        <div className="pill" aria-label="2 streak freezes">
          <ElementIcon type="air" size={20} color="#fbe7a8" /><span>2 freezes</span>
        </div>
      </div>
    </header>
  );
}

function StreakCard({ days }) {
  return (
    <section className="streak">
      <div className="title" style={{ fontSize: 16, color: '#ffd9a8' }}>INNER FIRE</div>
      <Flame />
      <div className="title" style={{ fontSize: 56, lineHeight: 1, textShadow: '0 3px 0 #4a1204' }}>{days}</div>
      <div style={{ fontSize: 16 }}>day streak</div>
      <div style={{ fontSize: 14, color: '#ffe8c4' }}>Keep it burning: a new freeze at 14 days</div>
    </section>
  );
}

function DailyQuest({ done, onToggle }) {
  const count = done.filter(Boolean).length;
  return (
    <section className="panel quest">
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
        <h2 className="title panel-title" style={{ margin: 0 }}>Daily Training</h2>
        <div style={{ display: 'flex', gap: 8 }} role="img" aria-label={`${count} of ${quests.length} elements balanced`}>
          {quests.map((q, i) => (
            <span key={q.element} style={{ opacity: done[i] ? 1 : 0.35 }}>
              <ElementIcon type={q.element} size={30} color={ELEMENTS[q.element].main} />
            </span>
          ))}
        </div>
      </div>

      {quests.map((q, i) => {
        const el = ELEMENTS[q.element];
        const d = done[i];
        return (
          <button
            key={q.title}
            className="btn task"
            onClick={() => onToggle(i)}
            aria-pressed={d}
            style={{ borderColor: d ? 'var(--earth)' : 'var(--border)', background: d ? '#e2ebc9' : 'var(--paper-2)' }}
          >
            <span className="task-icon" style={{ background: d ? 'var(--earth)' : el.light, borderColor: d ? '#2f4a18' : el.main }}>
              {d ? <Check visible /> : <ElementIcon type={q.element} size={26} />}
            </span>
            <span style={{ flex: 1, minWidth: 0 }}>
              <span style={{ display: 'block', fontWeight: 700, fontSize: 16 }}>{q.title}</span>
              <span style={{ display: 'block', fontSize: 14, color: 'var(--ink-soft)', marginTop: 2 }}>{el.label}: {q.sub}</span>
            </span>
            <span className="title" style={{ flex: 'none', fontSize: 14, color: d ? '#2f4a18' : el.dark }}>+{q.xp} XP</span>
          </button>
        );
      })}

      {count === quests.length && (
        <div className="clear-banner title">Balance restored! +{quests.reduce((sum, q) => sum + q.xp, 0)} XP, streak 13</div>
      )}

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, alignItems: 'center', justifyContent: 'space-between' }}>
        <a href={practicePickUrl} target="_blank" rel="noreferrer" style={{ fontSize: 15 }}>Open today's pick on LeetCode</a>
        <span style={{ fontSize: 14, color: 'var(--ink-soft)' }}>Short on time? Train one element to keep your streak.</span>
      </div>
    </section>
  );
}

function JourneyLog() {
  const cells = useMemo(makeActivity, []);
  return (
    <section className="panel" style={{ flex: '2 1 520px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8, marginBottom: 16 }}>
        <h2 className="title panel-title" style={{ margin: 0 }}>Journey Log</h2>
        <div style={{ fontSize: 14, color: 'var(--ink-soft)' }}>Last 20 weeks</div>
      </div>
      <div style={{ overflowX: 'auto', padding: '4px 4px 10px' }}>
        <div className="heat" role="img" aria-label="Activity log for the last 20 weeks">
          {cells.map((l, i) => <div key={i} className="heat-cell" style={{ background: HEAT_FILL[l] }} />)}
        </div>
      </div>
    </section>
  );
}

function WisdomScroll({ open, onToggle }) {
  return (
    <button className="btn scroll" onClick={onToggle} aria-expanded={open}>
      <span style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <Scroll />
        <span className="title" style={{ fontSize: 14, color: '#6b3f14' }}>WAN SHI TONG'S LIBRARY</span>
      </span>
      <span className="title" style={{ fontSize: 18, lineHeight: 1.35 }}>{open ? funFact.revealedTitle : funFact.title}</span>
      <span style={{ fontSize: 16, lineHeight: 1.55 }}>{open ? funFact.revealed : funFact.teaser}</span>
      <span style={{ marginTop: 'auto', fontSize: 14, color: '#1c5d7e' }}>{open ? 'Tap to roll it up' : 'Tap to unroll, +20 XP'}</span>
    </button>
  );
}

function nodeStyle(n) {
  const el = ELEMENTS[n.element];
  if (n.status === 'locked') return { bg: '#d9c79f', border: '#a8946f', fg: '#6b5440', glow: 'none' };
  if (n.status === 'done')
    return { bg: el.main, border: el.dark, fg: n.element === 'air' ? INK : '#fff', glow: `0 0 18px ${el.light}` };
  return { bg: el.light, border: el.main, fg: INK, glow: `0 0 18px ${el.light}` };
}

function Zone({ label, nodes }) {
  return (
    <>
      <div className="zone-label">{label}</div>
      <div className="zone">
        <div className="zone-track">
          {nodes.map((n, i) => {
            const s = nodeStyle(n);
            const locked = n.status === 'locked';
            const stars = n.status === 'done' ? (n.pct >= 90 ? 3 : 2) : n.status === 'active' ? 1 : 0;
            return (
              <div key={n.name} style={{ display: 'flex', alignItems: 'flex-start' }}>
                <div className="path" style={{ borderTopColor: i === 0 ? 'transparent' : locked ? '#a8946f' : ELEMENTS[n.element].main }} />
                <div className="node-wrap">
                  <div className="node" style={{ background: s.bg, borderColor: s.border, boxShadow: s.glow }}>
                    {locked ? <Lock /> : <span className="title" style={{ fontSize: 16, color: s.fg }}>{n.pct}%</span>}
                  </div>
                  <div aria-label={`${stars} of 3 stars`} style={{ fontSize: 15, letterSpacing: 2, color: '#c58a12' }}>
                    {'\u2605'.repeat(stars)}<span style={{ color: '#c9b78f' }}>{'\u2605'.repeat(3 - stars)}</span>
                  </div>
                  <div className="node-name" style={{ color: locked ? 'var(--ink-soft)' : 'var(--ink)' }}>{n.name}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

function JourneyMap() {
  return (
    <section className="panel">
      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8, marginBottom: 18 }}>
        <h2 className="title panel-title" style={{ margin: 0 }}>Journey Map</h2>
        <div style={{ fontSize: 14, color: 'var(--ink-soft)' }}>Reach 70% on a skill to open the next one</div>
      </div>
      <Zone label="Path of Patterns" nodes={patternZone} />
      <Zone label="Core Realm" nodes={coreZone} />
    </section>
  );
}

function SpiritBoss() {
  return (
    <section className="boss">
      <Spirit />
      <div style={{ flex: '1 1 220px', minWidth: 0 }}>
        <div className="title" style={{ fontSize: 15, color: '#8fd0e8', marginBottom: 8 }}>SPIRIT WORLD</div>
        <div style={{ fontSize: 15, marginBottom: 12 }}>Appears Sunday. A timed mix of your weakest skills.</div>
        <div className="bar" style={{ background: 'rgba(0,0,0,.35)', borderColor: 'rgba(230,246,251,.5)' }}>
          <div className="bar-fill" style={{ width: '100%', background: 'linear-gradient(90deg,#8fd0e8,#2a7fa8)' }} />
        </div>
        <div style={{ fontSize: 14, marginTop: 6 }}>Spirit energy 100 / 100</div>
      </div>
    </section>
  );
}

function Balance() {
  return (
    <section className="panel" style={{ flex: '1 1 440px' }}>
      <h2 className="title panel-title">Elements Out of Balance</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {weakSpots.map((w) => {
          const el = ELEMENTS[w.element];
          return (
            <div key={w.name}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 16, marginBottom: 6 }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}><ElementIcon type={w.element} size={20} />{w.name}</span>
                <span className="title" style={{ fontSize: 14, color: el.dark }}>{w.pct}%</span>
              </div>
              <div className="bar"><div className="bar-fill" style={{ width: `${w.pct}%`, background: `linear-gradient(90deg, ${el.light}, ${el.main})` }} /></div>
            </div>
          );
        })}
      </div>

      <h2 className="title panel-title" style={{ margin: '24px 0 14px' }}>Medals</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14 }}>
        {badges.map((b) => {
          const el = ELEMENTS[b.icon];
          return (
            <div key={b.name} style={{ width: 92, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, textAlign: 'center' }}>
              <div className="medal" style={{ background: b.earned ? el.light : '#e3d4b0', borderColor: b.earned ? el.main : '#b8a47c', opacity: b.earned ? 1 : 0.7 }}>
                <ElementIcon type={b.icon} size={26} color={b.earned ? el.dark : '#8a7358'} />
              </div>
              <div style={{ fontSize: 13, color: b.earned ? 'var(--ink)' : 'var(--ink-soft)' }}>{b.name}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default function App() {
  const [done, setDone] = useState(quests.map(() => false));
  const [open, setOpen] = useState(false);

  const toggleQuest = (i) => setDone((d) => d.map((v, j) => (j === i ? !v : v)));
  const toggleScroll = () => {
    setOpen((o) => !o);
    setDone((d) => d.map((v, j) => (j === 2 ? true : v))); // opening the scroll completes the third task
  };

  return (
    <main className="app">
      <Hud />
      <div className="row">
        <StreakCard days={12} />
        <DailyQuest done={done} onToggle={toggleQuest} />
      </div>
      <div className="row">
        <JourneyLog />
        <WisdomScroll open={open} onToggle={toggleScroll} />
      </div>
      <JourneyMap />
      <div className="row">
        <SpiritBoss />
        <Balance />
      </div>
    </main>
  );
}
