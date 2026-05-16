export default function ActionButtons({ onIncrease, onDecrease, onReset }) {

  const btn = (accent) => ({
    padding: "12px 0",
    borderRadius: "12px",
    border: accent ? "0.5px solid green" : "0.5px solid #ccc",
    background: accent ? "#dcfce7" : "#f5f5f5",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 4,
    width: "100%",
  });

  return (
    <div style={{
      borderTop: "0.5px solid #e5e5e5",
      padding: "12px 16px",
      display: "grid",
      gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
      gap: 10,
    }}>

      <button onClick={onDecrease} style={btn(false)} aria-label="Decrease counter">
        <span style={{ fontSize: 22 }}>−</span>
        <span style={{ fontSize: 11, color: "#888" }}>Decrease</span>
      </button>

      <button onClick={onReset} style={btn(false)} aria-label="Reset counter">
        <span style={{ fontSize: 22 }}>↺</span>
        <span style={{ fontSize: 11, color: "#888" }}>Reset</span>
      </button>

      <button onClick={onIncrease} style={btn(true)} aria-label="Increase counter">
        <span style={{ fontSize: 22, color: "green" }}>+</span>
        <span style={{ fontSize: 11, color: "green" }}>Increase</span>
      </button>

    </div>
  );
}
