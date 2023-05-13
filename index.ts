const appName = "Combo Breaker";

function writeH1() {
  const h1 = document.querySelector("h1");
  if (!h1) return;
  h1.textContent = appName;
}

writeH1();
