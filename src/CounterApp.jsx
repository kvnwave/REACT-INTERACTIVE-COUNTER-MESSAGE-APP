import { useState } from "react";
import GaugeRing from "./components/GaugeRing";
import MessageInput from "./components/MessageInput";
import GoalCard from "./components/GoalCard";
import ActionButtons from "./components/ActionButtons";

export default function CounterApp() {

  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  const increase = () => setCount(prev => prev + 1);
  const decrease = () => setCount(prev => (prev > 0 ? prev - 1 : 0));
  const reset    = () => setCount(0);

  const MAX         = 10;
  const progress    = Math.min((count / MAX) * 100, 100);
  const goalReached = count >= 5;

  return (
    <div style={{
      maxWidth: 380,
      margin: "0 auto",
      background: "#ffffff",
      borderRadius: "16px",
      border: "0.5px solid #e5e5e5",
      overflow: "hidden",
      fontFamily: "sans-serif",
    }}>

      <GaugeRing
        count={count}
        progress={progress}
        goalReached={goalReached}
      />

      <MessageInput
        message={message}
        onMessageChange={setMessage}
      />

      <GoalCard goalReached={goalReached} />

      <ActionButtons
        onIncrease={increase}
        onDecrease={decrease}
        onReset={reset}
      />

    </div>
  );
}
