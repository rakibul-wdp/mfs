document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const jwtToken = urlParams.get("jwt");
  const theme = urlParams.get("theme") || "light"; // Default theme
  const language = urlParams.get("language") || "en"; // Default language

  if (jwtToken) {
    const unitApp = document.createElement("unit-elements-white-label-app");
    unitApp.setAttribute("jwt-token", jwtToken);
    unitApp.setAttribute("theme", theme);
    unitApp.setAttribute("language", language);
    document.querySelector("#unit-app-placeholder").appendChild(unitApp);
  }
});
