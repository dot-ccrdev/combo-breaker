const content = {
  clock: "2:54",
  combo: "1-1-2",
  header: "Combo Breaker",
  pauseButton: "PAUSE",
};

const cssClasses = {
  clockContent: ".clock__content",
  comboContent: ".combo__content",
  headerContent: ".header__content",
  pauseButtonContent: ".pause__button__content",
};

function writeClockContent() {
  const clockContent = document.querySelector(cssClasses.clockContent);
  if (!clockContent) return;
  clockContent.textContent = content.clock;
}

function writeComboContent() {
  const comboContent = document.querySelector(cssClasses.comboContent);
  if (!comboContent) return;
  comboContent.textContent = content.combo;
}

function writeHeaderContent() {
  const headerContent = document.querySelector(cssClasses.headerContent);
  if (!headerContent) return;
  headerContent.textContent = content.header;
}

function writePauseButtonContent() {
  const pauseButtonContent = document.querySelector(
    cssClasses.pauseButtonContent
  );
  if (!pauseButtonContent) return;
  pauseButtonContent.textContent = content.pauseButton;
}

writeHeaderContent();
writePauseButtonContent();
writeClockContent();
writeComboContent();
