//This script shows a warning at the top of the screen if the browser is IE. This app is not currently compatible with IE.

if (/Trident\/|MSIE/.test(window.navigator.userAgent) === true) {
  //An div with id "browser-warning" is above the root in index.html.
  const broswerWarning = document.getElementById("browser-warning");

  //Add text and style that div.
  broswerWarning.innerHTML =
    "Unsupported browser detected. IE is not currently supported by this app. Use Chrome for best results.";
  broswerWarning.style.backgroundColor = "red";
  broswerWarning.style.textAlign = "center";
}
