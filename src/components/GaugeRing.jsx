export default function GaugeRing({ count, progress, goalReached }) {

  const circumference = 2 * Math.PI * 100;
  const dashOffset    = circumference * (1 - progress / 100);

  const ticks = Array.from({ length: 60 }, (_, i) => {
    const angle  = (i / 60) * 360 - 90;
    const rad    = (angle * Math.PI) / 180;
    const inner  = 112;
    const outer  = i % 5 === 0 ? 124 : 120;
    const active = i / 60 <= progress / 100;
    return {
      x1: 130 + inner * Math.cos(rad),
      y1: 130 + inner * Math.sin(rad),
      x2: 130 + outer * Math.cos(rad),
      y2: 130 + outer * Math.sin(rad),
      active,
    };
  });

  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "20px 0 0" }}>
      <div style={{ position: "relative", width: 260, height: 260 }}>

        <svg viewBox="0 0 260 260" width="260" height="260">

          <circle
            cx="130" cy="130" r="100"
            fill="none" stroke="#e5e5e5" strokeWidth="3"
          />

          {ticks.map((t, i) => (
            <line
              key={i}
              x1={t.x1} y1={t.y1}
              x2={t.x2} y2={t.y2}
              stroke={t.active ? "#e6a817" : "#e5e5e5"}
              strokeWidth="2"
              strokeLinecap="round"
            />
          ))}

          <circle
            cx="130" cy="130" r="100"
            fill="none"
            stroke="#e6a817"
            strokeWidth="4"
            strokeDasharray={circumference}
            strokeDashoffset={dashOffset}
            strokeLinecap="round"
            transform="rotate(-90 130 130)"
            style={{ transition: "stroke-dashoffset 0.4s ease" }}
          />

        </svg>

        <div style={{
          position: "absolute",
          top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          pointerEvents: "none",
        }}>
          <p style={{ margin: 0, fontSize: 12, color: "#888" }}>Counter</p>
          <p style={{ margin: "2px 0 0", fontSize: 56, fontWeight: 500, color: "#111", lineHeight: 1 }}>
            {count}
          </p>
          {goalReached && (
            <p style={{ margin: "6px 0 0", fontSize: 12, color: "green", fontWeight: 500 }}>
              Goal Reached!
            </p>
          )}
        </div>

      </div>
    </div>
  );
}
