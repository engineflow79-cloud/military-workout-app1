import { useState } from "react";

const days = [
  {
    day: "MON",
    label: "Monday",
    theme: "Upper Body Power",
    warmup: "15 min run/walk + 5 min stretch",
    exercises: [
      { name: "Push Ups", sets: "4 × 15", type: "strength" },
      { name: "Sit Ups", sets: "4 × 25", type: "strength" },
      { name: "Plank", sets: "3 × 45 sec", type: "core" },
      { name: "Mountain Climbers", sets: "3 × 25", type: "core" },
      { name: "Boxing: Jab, Jab, Cross", sets: "3 × 60 sec", type: "boxing" },
      { name: "Boxing: Jab, Cross, Left Hook", sets: "3 × 60 sec", type: "boxing" },
      { name: "Jump Rope", sets: "2 min", type: "cardio" },
      { name: "Jumping Jacks", sets: "40 reps", type: "cardio" },
    ],
  },
  {
    day: "TUE",
    label: "Tuesday",
    theme: "Lower Body Strength",
    warmup: "15 min run/walk + 5 min stretch",
    exercises: [
      { name: "Squat Jumps", sets: "4 × 20", type: "strength" },
      { name: "Jump Squats", sets: "4 × 20", type: "strength" },
      { name: "Lateral Jumps", sets: "3 × 30", type: "strength" },
      { name: "Plank", sets: "3 × 50 sec", type: "core" },
      { name: "Sit Ups", sets: "3 × 30", type: "core" },
      { name: "Boxing: Cross, Left Hook", sets: "3 × 60 sec", type: "boxing" },
      { name: "Boxing: Cross, Left Hook, Cross", sets: "3 × 60 sec", type: "boxing" },
      { name: "Jump Rope", sets: "3 min", type: "cardio" },
    ],
  },
  {
    day: "WED",
    label: "Wednesday",
    theme: "Full Body Burn",
    warmup: "15 min run/walk + 5 min stretch",
    exercises: [
      { name: "Push Ups", sets: "4 × 20", type: "strength" },
      { name: "Sit Ups", sets: "4 × 40", type: "core" },
      { name: "Mountain Climbers", sets: "4 × 30", type: "core" },
      { name: "Plank", sets: "3 × 60 sec", type: "core" },
      { name: "Boxing: Jab, Right Uppercut, Left Hook", sets: "3 × 60 sec", type: "boxing" },
      { name: "Boxing: Jab, Left Uppercut, Left Hook", sets: "3 × 60 sec", type: "boxing" },
      { name: "Jump Rope", sets: "3 min", type: "cardio" },
      { name: "Jumping Jacks", sets: "50 reps", type: "cardio" },
    ],
  },
  {
    day: "THU",
    label: "Thursday",
    theme: "Power & Core",
    warmup: "15 min run/walk + 5 min stretch",
    exercises: [
      { name: "Push Ups", sets: "4 × 20", type: "strength" },
      { name: "Squat Jumps", sets: "4 × 30", type: "strength" },
      { name: "Lateral Jumps", sets: "3 × 20", type: "strength" },
      { name: "Sit Ups", sets: "4 × 30", type: "core" },
      { name: "Mountain Climbers", sets: "4 × 30", type: "core" },
      { name: "Boxing: Jab, Cross, Jab, Cross", sets: "4 × 60 sec", type: "boxing" },
      { name: "Jump Rope", sets: "1 min", type: "cardio" },
      { name: "Jumping Jacks", sets: "40 reps", type: "cardio" },
    ],
  },
  {
    day: "FRI",
    label: "Friday",
    theme: "Warrior Finisher",
    warmup: "15 min run/walk + 5 min stretch",
    exercises: [
      { name: "Push Ups", sets: "5 × 20", type: "strength" },
      { name: "Sit Ups", sets: "5 × 50", type: "core" },
      { name: "Squat Jumps", sets: "4 × 50", type: "strength" },
      { name: "Plank", sets: "3 × 60 sec", type: "core" },
      { name: "Mountain Climbers", sets: "4 × 50", type: "core" },
      { name: "Boxing: Jab, Cross, Jab, Cross, Left Hook", sets: "4 × 90 sec", type: "boxing" },
      { name: "Jump Rope", sets: "4 min", type: "cardio" },
      { name: "Jumping Jacks", sets: "50 reps", type: "cardio" },
      { name: "Lateral Jumps", sets: "45 reps", type: "cardio" },
    ],
  },
];

const typeColors = {
  strength: { bg: "#1a2a1a", border: "#4ade80", text: "#4ade80", tag: "STRENGTH" },
  core: { bg: "#1a1a2a", border: "#60a5fa", text: "#60a5fa", tag: "CORE" },
  boxing: { bg: "#2a1a1a", border: "#f97316", text: "#f97316", tag: "BOXING" },
  cardio: { bg: "#2a1a2a", border: "#e879f9", text: "#e879f9", tag: "CARDIO" },
};

export default function WorkoutPlan() {
  const [activeDay, setActiveDay] = useState(0);
  const [checked, setChecked] = useState({});

  const toggle = (dayIdx, exIdx) => {
    const key = `${dayIdx}-${exIdx}`;
    setChecked((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const day = days[activeDay];
  const total = day.exercises.length;
  const done = day.exercises.filter((_, i) => checked[`${activeDay}-${i}`]).length;
  const progress = Math.round((done / total) * 100);

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0a0a0a",
      fontFamily: "'Bebas Neue', 'Impact', sans-serif",
      color: "#fff",
      padding: "0 0 60px",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .header {
          background: linear-gradient(135deg, #0f0f0f 0%, #1a0a00 100%);
          border-bottom: 2px solid #f97316;
          padding: 32px 24px 24px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .header::before {
          content: '';
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(-45deg, transparent, transparent 20px, rgba(249,115,22,0.03) 20px, rgba(249,115,22,0.03) 40px);
        }
        .header-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 3.2rem;
          letter-spacing: 0.1em;
          background: linear-gradient(90deg, #f97316, #fbbf24, #f97316);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          position: relative;
        }
        .header-sub {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.8rem;
          color: #888;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          margin-top: 4px;
          position: relative;
        }
        .day-tabs {
          display: flex;
          gap: 8px;
          padding: 20px 16px 0;
          overflow-x: auto;
          scrollbar-width: none;
        }
        .day-tabs::-webkit-scrollbar { display: none; }
        .tab-btn {
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 10px 16px;
          border-radius: 10px;
          border: 1.5px solid #333;
          background: #111;
          cursor: pointer;
          transition: all 0.2s;
          min-width: 64px;
        }
        .tab-btn.active { border-color: #f97316; background: #1a0e00; }
        .tab-day {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.3rem;
          letter-spacing: 0.05em;
          color: #666;
          transition: color 0.2s;
        }
        .tab-btn.active .tab-day { color: #f97316; }
        .tab-dot {
          width: 5px; height: 5px;
          border-radius: 50%;
          background: #333;
          margin-top: 4px;
          transition: background 0.2s;
        }
        .tab-btn.active .tab-dot { background: #f97316; }
        .day-header { padding: 20px 20px 8px; }
        .day-theme {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 2rem;
          letter-spacing: 0.08em;
          color: #fff;
        }
        .warmup-bar {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 10px;
          background: #111;
          border: 1px solid #222;
          border-left: 3px solid #fbbf24;
          border-radius: 6px;
          padding: 10px 14px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.8rem;
          color: #fbbf24;
          letter-spacing: 0.05em;
        }
        .progress-bar-wrap { padding: 12px 20px; }
        .progress-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.75rem;
          color: #666;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 6px;
          display: flex;
          justify-content: space-between;
        }
        .progress-track { height: 5px; background: #222; border-radius: 99px; overflow: hidden; }
        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #f97316, #fbbf24);
          border-radius: 99px;
          transition: width 0.4s ease;
        }
        .exercises { padding: 8px 16px; display: flex; flex-direction: column; gap: 10px; }
        .ex-card {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 14px 16px;
          border-radius: 12px;
          border: 1.5px solid;
          cursor: pointer;
          transition: opacity 0.2s, transform 0.15s;
          position: relative;
          overflow: hidden;
        }
        .ex-card:active { transform: scale(0.98); }
        .ex-card.done { opacity: 0.45; }
        .check-circle {
          width: 26px; height: 26px;
          border-radius: 50%;
          border: 2px solid;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.85rem;
          transition: background 0.2s;
        }
        .check-circle.checked { color: #0a0a0a; }
        .ex-name {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.95rem;
          font-weight: 600;
          color: #f0f0f0;
          flex: 1;
          line-height: 1.2;
        }
        .ex-sets {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1rem;
          letter-spacing: 0.05em;
          opacity: 0.85;
        }
        .ex-tag {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.6rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          padding: 2px 7px;
          border-radius: 4px;
          opacity: 0.7;
          border: 1px solid;
          position: absolute;
          top: 8px;
          right: 10px;
        }
      `}</style>

      <div className="header">
        <div className="header-title">Military Muscle</div>
        <div className="header-sub">5-Day Strength + Boxing Plan</div>
      </div>

      <div className="day-tabs">
        {days.map((d, i) => (
          <button
            key={i}
            className={`tab-btn${activeDay === i ? " active" : ""}`}
            onClick={() => setActiveDay(i)}
          >
            <span className="tab-day">{d.day}</span>
            <span className="tab-dot" />
          </button>
        ))}
      </div>

      <div className="day-header">
        <div className="day-theme">{day.label} — {day.theme}</div>
        <div className="warmup-bar">⚡ WARMUP: {day.warmup}</div>
      </div>

      <div className="progress-bar-wrap">
        <div className="progress-label">
          <span>Progress</span>
          <span>{done}/{total} completed</span>
        </div>
        <div className="progress-track">
          <div className="progress-fill" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <div className="exercises">
        {day.exercises.map((ex, i) => {
          const key = `${activeDay}-${i}`;
          const isDone = !!checked[key];
          const c = typeColors[ex.type];
          return (
            <div
              key={i}
              className={`ex-card${isDone ? " done" : ""}`}
              style={{ background: c.bg, borderColor: isDone ? "#333" : c.border }}
              onClick={() => toggle(activeDay, i)}
            >
              <div
                className={`check-circle${isDone ? " checked" : ""}`}
                style={{
                  borderColor: c.border,
                  background: isDone ? c.border : "transparent",
                  color: isDone ? "#0a0a0a" : c.border,
                }}
              >
                {isDone ? "✓" : ""}
              </div>
              <div className="ex-name">{ex.name}</div>
              <div className="ex-sets" style={{ color: c.text }}>{ex.sets}</div>
              <div
                className="ex-tag"
                style={{ color: c.text, borderColor: c.border, background: c.bg }}
              >
                {c.tag}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
