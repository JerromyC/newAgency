// main h1 span animation tl
  document.addEventListener("DOMContentLoaded", () => {
    const words = [
      "Affordable", 
      "Reliable", 
      "Efficient",
      "Responsive",
      "Intuitive",
      "Elegant",
      "User-Friendly",
      "Dynamic",
      "Accessible",
      "Innovative",
      "Scalable",
      "Functional",
      "Efficient"
    ];
  
    const word1 = document.getElementById("word1");
    let index = 0;
  
    const timeline = gsap.timeline({ repeat: -1, defaults: { duration: 1, ease: "power1.Out" } });
  
    function updateWord() {
      index = (index + 1) % words.length; // Cycle through words
      word1.innerText = words[index];
    }
  
    // Define the timeline
    timeline
      .to(word1, { opacity: 0, onComplete: updateWord }) // Slide out and fade the current word
      .set(word1, { opacity: 0 }) // fade word out
      .to(word1, { opacity: 1 }) // fade the new word in
      .to({}, { duration: 2 });
  });