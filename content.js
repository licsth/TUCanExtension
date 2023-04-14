var nav = document.getElementsByClassName("nav");

const THEMES = [
  {
    key: "light",
    display: "Light",
  },
  {
    key: "dark-ocean",
    display: "Dark Ocean",
  },
  {
    key: "dark-graphite",
    display: "Dark Graphite",
  },
];

const storedTheme = localStorage.getItem("tucanTheme");

let prefersDark =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

let currentTheme = readTheme(prefersDark ? "dark-graphite" : "light");

setTheme(currentTheme);

if (nav.length > 0) {
  var div = document.createElement("div");
  div.innerHTML = `<label class="theme">
    <select id="themeSelect" onChange="window.dispatchEvent(new Event('changeTheme'))">
      ${createThemeOptions()}
    </select>
  </label>`;
  div.classList = "sideOverlay";
  document.body.appendChild(div);
}

var old = document.querySelectorAll('[rel="shortcut icon"]')[0];
if (old) old.remove();

addToHead(
  `<link rel="apple-touch-icon" sizes="180x180" href="${chrome.runtime.getURL(
    "icon/apple-touch-icon.png"
  )}">` +
    `<link rel="icon" type="image/x-icon" href="${chrome.runtime.getURL(
      "icon/favicon.ico"
    )}"` +
    `<link rel="icon" type="image/png" sizes="32x32" href="${chrome.runtime.getURL(
      "icon/favicon-32x32.png"
    )}">` +
    `<link rel="icon" type="image/png" sizes="16x16" href="${chrome.runtime.getURL(
      "icon/favicon-16x16.png"
    )}">` +
    `<link rel="manifest" href="${chrome.runtime.getURL(
      "site.webmanifest"
    )}">` +
    `<link rel="mask-icon" href="${chrome.runtime.getURL(
      "icon/safari-pinned-tab.svg"
    )}" color="#5bbad5">` +
    `<meta name="apple-mobile-web-app-title" content="TUCan\'t">` +
    `<meta name="application-name" content="TUCan\'t">` +
    `<meta name="msapplication-TileColor" content="#5bbad5">` +
    `<meta name="theme-color" content="#ffffff"></meta>`
);

function createThemeOptions() {
  let options = "";
  for (let theme of THEMES) {
    options += `<option value="${theme.key}" ${
      (currentTheme.key == theme.key && "selected") || ""
    }>${theme.display}</option>\n`;
  }
  return options;
}

function addToHead(html) {
  var temp = document.createElement("div");

  temp.innerHTML = html;

  var head = document.head;

  while (temp.firstChild) {
    head.appendChild(temp.firstChild);
  }
}

window.addEventListener("changeTheme", () => {
  let value = document.getElementById("themeSelect").value;
  let theme = THEMES.find((t) => t.key == value);
  transitionTheme(theme);
});

function setTheme(t) {
  localStorage.setItem("tucanTheme", t.key);
  document.body.classList.value = t.key;
}

function transitionTheme(t) {
  localStorage.setItem("tucanTheme", t.key);
  document.body.classList.value = [];
  document.body.classList.add(t.key, "transition");
  setTimeout(() => {
    document.body.classList.value = t.key;
  }, 500);
}

function readTheme(defaultValue) {
  if (THEMES.map((t) => t.key).includes(storedTheme))
    return THEMES.find((t) => t.key == storedTheme);
  return THEMES.find((t) => t.key == defaultValue);
}
