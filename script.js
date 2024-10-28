window.addEventListener('resize', () => {
    const width = window.innerWidth;
  
    if (width <= 768) {
      document.body.style.marginLeft = '5%';
      document.body.style.marginRight = '5%';
    } else if (width <= 992) {
      document.body.style.marginLeft = '10%';
      document.body.style.marginRight = '10%';
    } else if (width <= 1200) {
      document.body.style.marginLeft = '15%';
      document.style.marginRight = '15%';
    } else {
      document.body.style.marginLeft = '25%';
      document.body.style.marginRight = '25%';
    }
  });
  
  // Initial setup on page load
  window.onload = () => {
    const width = window.innerWidth;
    // Apply initial margins based on screen width
    if (width <= 768) {
      document.body.style.marginLeft = '5%';
      document.body.style.marginRight = '5%';
    } else if (width <= 992) {
      document.body.style.marginLeft = '10%';
      document.body.style.marginRight = '10%';
    } else if (width <= 1200) {
      document.body.style.marginLeft = '15%';
      document.style.marginRight = '15%';
    } else {
      document.body.style.marginLeft = '25%';
      document.body.style.marginRight = '25%';
    }
  };