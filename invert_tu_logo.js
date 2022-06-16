
const images = document.getElementsByTagName('img');
for (let i = 0; i < images.length; i++) {
    if (images.item(i).getAttribute("src") == '/gfx/tuda/logo.gif') {
        images.item(i).setAttribute("src", chrome.runtime.getURL('images/tud_logo_transparent.png'));
        images.item(i).setAttribute("style", "background-color: var(--logo-bg-color);");
    }
}
