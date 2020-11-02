//This script shows a warning at the top of the screen if the browser is IE. This app is semi-compatible with IE. To get full compatibility, a few styling issues would need to be addressed and a fallback dateselect would need to be added in the filters.

if (/Trident\/|MSIE/.test(window.navigator.userAgent) === true) {
  //An div with id "browser-warning" is above the root in index.html.
  const broswerWarning = document.getElementById("browser-warning");

  //Add text and style that div.
  broswerWarning.innerHTML =
    "Unsupported browser detected. Some features may not work. Use Chrome for best results.";
  broswerWarning.style.backgroundColor = "red";
  broswerWarning.style.textAlign = "center";
}
