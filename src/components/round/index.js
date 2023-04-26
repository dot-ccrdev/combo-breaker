import { h } from "preact";
import Timer from "../timer";

const Round = () => {
  return (
    <div
      style={{
        border: "1px solid black",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
        padding: "1rem",
      }}
    >
      <b>Round 1</b>
      <Timer />
    </div>
  );
};

export default Round;
