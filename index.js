"use strict";
const content = {
    headerAppName: "Combo Breaker",
    helperTextPause: "Tap screen to pause",
};
const cssClasses = {
    headerContent: ".header__content",
    helperTextContent: ".helper-text__content",
};
function writeHeaderContent() {
    const h1 = document.querySelector(cssClasses.headerContent);
    if (!h1)
        return;
    h1.textContent = content.headerAppName;
}
function writeHelperTextContent() {
    const helperText = document.querySelector(cssClasses.helperTextContent);
    if (!helperText)
        return;
    helperText.textContent = content.helperTextPause;
}
writeHeaderContent();
writeHelperTextContent();
