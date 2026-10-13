 function updateMargin() {
      const screenWidth = window.innerWidth;

      const minScreen = 576;     // mobile breakpoint
      const maxScreen = 1920;    // large desktop

      const minMargin = 2;       // 2%
      const maxMargin = 30;      // 30%

      // Clamp screen width between minScreen and maxScreen
      const clampedWidth = Math.max(minScreen, Math.min(screenWidth, maxScreen));

      // Calculate smooth ratio
      const ratio = (clampedWidth - minScreen) / (maxScreen - minScreen);

      // Linear interpolation
      const marginValue = minMargin + ratio * (maxMargin - minMargin);

      document.body.style.marginLeft = marginValue + "%";
      document.body.style.marginRight = marginValue + "%";
    }

    window.addEventListener("resize", updateMargin);
    window.addEventListener("load", updateMargin);




    function toggleTree(element) {

    const parent = element.parentElement;

    parent.classList.toggle("open");
    element.classList.toggle("open");

}





document.querySelectorAll(
  "#documentationTree .tree-toggle"
).forEach((button) => {
  button.addEventListener("click", () => {
    const children = button.nextElementSibling;

    // Only toggle folders that contain a child list
    if (!children || !children.classList.contains("tree-children")) {
      return;
    }

    const isExpanded =
      button.getAttribute("aria-expanded") === "true";

    button.setAttribute(
      "aria-expanded",
      String(!isExpanded)
    );

    children.hidden = isExpanded;

    const arrow = button.querySelector(".tree-arrow");

    if (arrow) {
      arrow.textContent = isExpanded ? "▶" : "▼";
    }
  });
});





function calculateMotion(deltaAA, deltaAB) {
  const deltaX = (deltaAA + deltaAB) / 2;
  const deltaY = (deltaAA - deltaAB) / 2;

  return {
    deltaX,
    deltaY
  };
}

function calculateActuators(deltaX, deltaY) {
  const deltaAA = deltaX + deltaY;
  const deltaAB = deltaX - deltaY;

  return {
    deltaAA,
    deltaAB
  };
}

// Example
console.log(calculateMotion(100, 60));
// { deltaX: 80, deltaY: 20 }

console.log(calculateActuators(80, 20));
// { deltaAA: 100, deltaAB: 60 }
