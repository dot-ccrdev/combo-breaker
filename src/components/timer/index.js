import { h } from "preact";
import { useEffect, useState } from "preact/hooks";

const initialSeconds = 180;
const initialStartPauseLabel = "Start";
let intervalId;

const Timer = () => {
  const [running, setRunning] = useState(false);
  const [seconds, setSeconds] = useState(initialSeconds);
  const [startPauseLabel, setStartPauseLabel] = useState(
    initialStartPauseLabel
  );

  useEffect(() => {
    if (running) {
      setStartPauseLabel("Pause");
      return;
    }
    setStartPauseLabel(initialStartPauseLabel);
  }, [running]);

  const toggleRunningTimer = (event) => {
    event.preventDefault();
    if (!running) {
      setRunning(true);
      intervalId = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
      return;
    }
    clearInterval(intervalId);
    setRunning(false);
  };

  const resetTimer = (event) => {
    event.preventDefault();
    clearInterval(intervalId);
    intervalId = undefined;
    setRunning(false);
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
        <button style={{ maxWidth: "4rem" }} onClick={toggleRunningTimer}>
          {startPauseLabel}
        </button>
        <button
          style={{ maxWidth: "4rem" }}
          onClick={resetTimer}
          disabled={running === false && seconds === initialSeconds}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
