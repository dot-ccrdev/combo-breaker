import { h } from "preact";
import style from "./style.css";
import Round from "../../components/round";

const Home = () => (
  <div class={style.home}>
    <h1>Home</h1>
    <h2>App features</h2>
    <h3>Rounds</h3>
    <ul>
      <li>3-minute timer for work.</li>
      <li>1-minute timer for rest.</li>
      <li>10-second timer for combo.</li>
      <li>Random 1-digit number generator for combo.</li>
    </ul>
    <Round />
  </div>
);

export default Home;
