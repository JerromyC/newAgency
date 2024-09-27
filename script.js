function setVh() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
  
  // Initial calculation
  setVh();
  
  // Recalculate on window resize
  window.addEventListener('resize', setVh);