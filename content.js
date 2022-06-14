var nav = document.getElementsByClassName('nav');

if(nav.length > 0){
  var div = document.createElement('div');
  div.classList = "sideOverlay";
  document.body.appendChild(div);
}

var old = document.querySelectorAll('[rel="shortcut icon"]')[0];
if(old) old.remove();

addToHead(`<link rel="apple-touch-icon" sizes="180x180" href="${chrome.runtime.getURL("icon/apple-touch-icon.png")}">`
+ `<link rel="icon" type="image/x-icon" href="${chrome.runtime.getURL("icon/favicon.ico")}"`
+ `<link rel="icon" type="image/png" sizes="32x32" href="${chrome.runtime.getURL("icon/favicon-32x32.png")}">`
+ `<link rel="icon" type="image/png" sizes="16x16" href="${chrome.runtime.getURL("icon/favicon-16x16.png")}">`
+ `<link rel="manifest" href="${chrome.runtime.getURL("site.webmanifest")}">`
+ `<link rel="mask-icon" href="${chrome.runtime.getURL("icon/safari-pinned-tab.svg")}" color="#5bbad5">`
+ `<meta name="apple-mobile-web-app-title" content="TuCan\'t">`
+ `<meta name="application-name" content="TuCan\'t">`
+ `<meta name="msapplication-TileColor" content="#5bbad5">`
+ `<meta name="theme-color" content="#ffffff"></meta>`);

function addToHead(html) {
  var temp = document.createElement('div');

  temp.innerHTML = html;

  var head = document.head;

  while (temp.firstChild) {
      head.appendChild(temp.firstChild);
  }
}