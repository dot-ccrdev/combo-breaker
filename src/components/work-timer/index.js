import { h } from "preact";
import { useEffect, useState } from "preact/hooks";

const DEFAULT_DURATION = 180;
const PAUSE_LABEL = "Pause";
const START_LABEL = "Start";
const PHASES = {
  DEFEND: "Defend",
  PREPARE: "Prepare",
  THROW: "Throw",
  WORK: "Work",
};
let intervalId;

const WorkTimer = ({ initialSeconds }) => {
  const [phase, setPhase] = useState(PHASES.PREPARE);
  const [running, setRunning] = useState(false);
  const [seconds, setSeconds] = useState(initialSeconds ?? DEFAULT_DURATION);
  const [toggleButtonLabel, setToggleButtonLabel] = useState(START_LABEL);

  useEffect(() => {
    if (running) {
      setToggleButtonLabel(PAUSE_LABEL);
      return;
    }
    setToggleButtonLabel(START_LABEL);
  }, [running]);

  const handleResetButtonClick = (event) => {
    event.preventDefault();
    resetTimer();
  };

  const handleToggleButtonClick = (event) => {
    event.preventDefault();
    toggleTimer();
  };

  const resetTimer = () => {
    if (running) setRunning(false);
    clearInterval(intervalId);
    intervalId = undefined;
    setSeconds(initialSeconds ?? 180);
    setPhase(PHASES.PREPARE);
  };

  const toggleTimer = () => {
    if (!running) {
      setRunning(true);
      setPhase(PHASES.WORK);
      intervalId = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
      return;
    }
    clearInterval(intervalId);
    setRunning(false);
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
      <div>{phase}</div>
      <div data-testid="countdown">{seconds}</div>
      <div style={{ display: "flex", gap: "1rem" }}>
        <button
          data-testid="toggle-button"
          style={{ maxWidth: "4rem" }}
          onClick={handleToggleButtonClick}
        >
          {toggleButtonLabel}
        </button>
        <button
          data-testid="reset-button"
          style={{ maxWidth: "4rem" }}
          onClick={handleResetButtonClick}
          disabled={running === false && seconds === initialSeconds}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default WorkTimer;
