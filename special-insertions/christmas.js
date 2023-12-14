function themeAvailable() {
  const nowTime = new Date();
  return nowTime.getMonth() == 11 && // 11 = December, 0 = Janury
    nowTime.getDate() < 25;
}


if (nav.length > 0 && themeAvailable()) {
  var div = document.createElement("div");
  div.style = "margin-bottom: 10px";
  div.innerHTML = `<span class="themeSelectComment">Check out the christmas theme!</span>`;
  document.body.getElementsByClassName("sideOverlay")[0].appendChild(div);
} 