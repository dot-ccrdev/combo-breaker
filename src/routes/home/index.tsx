import style from "./style.module.css";
import Round from "../../components/round";
import { FunctionalComponent } from "preact";

const Home: FunctionalComponent<HomeProps> = () => (
  <div class={style.home}>
    <h1>Home</h1>
    <h2>App features</h2>
    <h3>Rounds</h3>
    <ul>
      <li>3-minute timer for work.</li>
      <li>1-minute timer for rest.</li>
      <li>5-second timer for combo.</li>
      <li>Random 1-digit number generator for combo.</li>
    </ul>
    <Round />
  </div>
);

interface HomeProps {
  path?: string;
}

export default Home;
