import { useState } from "preact/hooks";

const initialSeconds = 180;
let intervalId;

const Timer = () => {
  const [seconds, setSeconds] = useState(initialSeconds);

  const handlePause = (event) => {
    event.preventDefault();
    clearInterval(intervalId);
  };

  const handleStart = (event) => {
    event.preventDefault();
    intervalId = setInterval(() => {
      setSeconds((seconds) => seconds - 1);
    }, 1000);
  };

  const handleReset = (event) => {
    event.preventDefault();
    clearInterval(intervalId);
    intervalId = undefined;
    setSeconds(initialSeconds);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        fontWeight: "700",
        gap: "1rem",
        alignItems: "center",
      }}
    >
      <div>{seconds}</div>
      <div style={{ display: "flex", gap: "1rem" }}>
        <button style={{ maxWidth: "4rem" }} onClick={handleStart}>
          Start
        </button>
        <button
          style={{ maxWidth: "4rem" }}
          onClick={handlePause}
          disabled={!intervalId}
        >
          Pause
        </button>
        <button style={{ maxWidth: "4rem" }} onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
