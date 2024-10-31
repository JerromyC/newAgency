function setVh() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
  
  // Initial calculation
  setVh();
  
  // Recalculate on window resize
  window.addEventListener('resize', setVh);


  // Initialize the Calendly inline widget
  Calendly.initInlineWidget({
    url: 'https://calendly.com/norwalldesign/norwall-design-onboarding-meeting',
    parentElement: document.getElementById('calendly-inline-widget'),
    // Ensure you use inline styles
    inlineStyles: true,
    embedType: 'Inline',
    resize: true // Make sure resizing is enabled
  });

  // Listen for postMessage events from Calendly
  window.addEventListener('message', function(event) {
    if (event.data.event === 'calendly.page_height') {
      // Update the height of the Calendly widget
      document.getElementById('calendly-inline-widget').style.height = event.data.payload.height + 'px';
    }
  });