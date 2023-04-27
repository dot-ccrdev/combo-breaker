import { h } from "preact";
import { useEffect, useState } from "preact/hooks";

const pauseLabel = "Pause";
const startLabel = "Start";
let intervalId;

const Timer = ({ initialSeconds }) => {
  const [running, setRunning] = useState(false);
  const [seconds, setSeconds] = useState(initialSeconds ?? 180);
  const [toggleButtonLabel, setToggleButtonLabel] = useState(startLabel);

  useEffect(() => {
    if (running) {
      setToggleButtonLabel(pauseLabel);
      return;
    }
    setToggleButtonLabel(startLabel);
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
    if (running) setRunning(false);
    clearInterval(intervalId);
    intervalId = undefined;
    setSeconds(initialSeconds ?? 180);
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
        <button
          data-testid="toggle-button"
          style={{ maxWidth: "4rem" }}
          onClick={toggleRunningTimer}
        >
          {toggleButtonLabel}
        </button>
        <button
          data-testid="reset-button"
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
