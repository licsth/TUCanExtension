var nav = document.getElementsByClassName('nav');

if(nav.length > 0){
  var div = document.createElement('div');
  div.classList = "sideOverlay";
  document.body.appendChild(div);
}

var old = document.querySelectorAll('[rel="shortcut icon"]')[0];
if(old) old.remove();

var icon = document.createElement('link');
icon.setAttribute('rel', 'icon');
icon.setAttribute('type', 'image/x-icon');
icon.setAttribute('href', chrome.runtime.getURL("favicon.ico"));
document.head.appendChild(icon);
