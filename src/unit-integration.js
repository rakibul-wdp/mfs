document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const jwtToken = urlParams.get("jwt");

  if (jwtToken) {
    const unitApp = document.createElement("unit-elements-white-label-app");
    unitApp.setAttribute("jwt-token", jwtToken);
    document.querySelector("#unit-app-placeholder").appendChild(unitApp);
  }
});
