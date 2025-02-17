import React, { useEffect } from "react";

const UnitApp = ({ jwtToken }) => {
  useEffect(() => {
    // Dynamically create the Unit White-Label App element
    const unitApp = document.createElement("unit-elements-white-label-app");
    unitApp.setAttribute("jwt-token", jwtToken);
    unitApp.setAttribute(
      "theme",
      "https://ui.s.unit.sh/resources/6132/themes/59efae50-eb61-4a0f-8200-d9f027f08307.json"
    );
    unitApp.setAttribute(
      "language",
      "https://ui.s.unit.sh/resources/6132/languages/1b07fec1-b7a3-49ce-b2c6-6b99dbe21c77.json"
    );

    // Append the Unit App to the container
    const container = document.getElementById("unit-app-container");
    if (container) {
      container.appendChild(unitApp);
    }

    // Clean up on unmount
    return () => {
      if (container) {
        container.innerHTML = ""; // Clear the container
      }
    };
  }, [jwtToken]);

  return <div id="unit-app-container"></div>;
};

export default UnitApp;
