import { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);

  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [isRunning]);

  return (
    <div className="container">
      <h1>React 88 – Stopwatch</h1>

      <h2>{count} s</h2>

      <div className="buttons">
        <button onClick={() => setIsRunning(true)}>START</button>
        <button onClick={() => setIsRunning(false)}>STOP</button>
        <button onClick={() => setCount(0)}>RESET</button>
      </div>
    </div>
  );
}
