function insertRule(rule) {
    let styleEl = document.getElementById("dark-style");
    if (styleEl == undefined || styleEl == null) {
        styleEl = document.createElement('style');
        styleEl.setAttribute("id", "dark-style");
        document.head.appendChild(styleEl);
    }
    const styleSheet = styleEl.sheet;
    styleSheet.insertRule(rule);
}

insertRule(
`.img_arrowLeft,
.img_arrowLeftRed {
    background-image: url("${chrome.runtime.getURL("images/left-arrow.png")}") !important;
}`);

insertRule(`.img, .arrow {
    background-image: url("${chrome.runtime.getURL("images/right-arrow.png")}") !important;
}`);
    