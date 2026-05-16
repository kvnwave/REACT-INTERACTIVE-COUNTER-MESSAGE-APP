export default function MessageInput({ message, onMessageChange }) {
  return (
    <div style={{
      margin: "12px 16px",
      padding: "12px 16px",
      background: "#f5f5f5",
      borderRadius: "12px",
    }}>

      <span style={{
        fontSize: 14,
        fontWeight: 500,
        color: "#111",
        display: "block",
        marginBottom: 10,
      }}>
        Your Message
      </span>

      <input
        type="text"
        value={message}
        onChange={(e) => onMessageChange(e.target.value)}
        placeholder="Type a custom message..."
        style={{ width: "100%", fontSize: 14, boxSizing: "border-box" }}
      />

      {message && (
        <p style={{ margin: "10px 0 0", fontSize: 13, color: "#888", fontStyle: "italic" }}>
          "{message}"
        </p>
      )}

    </div>
  );
}
