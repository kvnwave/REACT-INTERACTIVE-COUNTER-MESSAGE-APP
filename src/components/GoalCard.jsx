export default function GoalCard({ goalReached }) {
  return (
    <div style={{
      margin: "0 16px 12px",
      padding: "14px 16px",
      background: "#f5f5f5",
      borderRadius: "12px",
    }}>

      <span style={{ fontSize: 12, color: "#888" }}>Goal</span>

      <p style={{
        margin: "6px 0 0",
        fontSize: 30,
        fontWeight: 500,
        color: goalReached ? "green" : "#111",
      }}>
        {goalReached ? "Reached!" : "5"}
      </p>

    </div>
  );
}
