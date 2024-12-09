
// --------------------Calendly interation ---------------------------------
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


  // ----------------------------- timeline animation ---------------------------

  // Get the elements
var elements = document.querySelectorAll('.content');

// Function to check for fade effect on scroll and resize
function checkForFade() {
  var windowHeight = window.innerHeight;
  elements.forEach(function (element) {
    var elementRect = element.getBoundingClientRect();
    var triggerPoint = 0.5 * windowHeight; // Trigger when 50% of the element is in view

    if (elementRect.top < windowHeight - triggerPoint) {
      element.classList.remove('non-focus');
    } else {
      element.classList.add('non-focus');
    }
  });
}

// Add event listeners for scroll and resize and call the checkForFade function
window.addEventListener('scroll', checkForFade);
window.addEventListener('resize', checkForFade);

// Trigger the scroll event on initial load
window.dispatchEvent(new Event('scroll'));