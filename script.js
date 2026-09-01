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