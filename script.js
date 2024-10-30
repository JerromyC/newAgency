function setVh() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
  
  // Initial calculation
  setVh();
  
  // Recalculate on window resize
  window.addEventListener('resize', setVh);



//   // Form submit message
//   document.getElementById('contact-form').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent the default form submission

//     // Send email to admin with form submission details
//     emailjs.sendForm('service_j8f1nms', 'template', this)
//         .then(function(response) {
//             console.log('Admin email sent successfully!', response.status, response.text);
//         }, function(error) {
//             console.error('Failed to send admin email...', error);
//         });

//     // Send welcome email to the user
//     emailjs.sendForm('service_j8f1nms', 'template_user', this)
//         .then(function(response) {
//             console.log('User welcome email sent successfully!', response.status, response.text);

//             // Display confirmation message to user
//             document.getElementById('confirmation-message').style.display = 'block';
//         }, function(error) {
//             console.error('Failed to send user welcome email...', error);
//         });
// });


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