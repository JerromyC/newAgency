gsap.registerPlugin(ScrollTrigger);

// Main H1 word animations
document.addEventListener("DOMContentLoaded", () => {
    const animateWords = (elementId, words) => {
        const element = document.getElementById(elementId);
        let index = 0;

        const timeline = gsap.timeline({ repeat: -1, defaults: { duration: 1, ease: "power1.Out" } });

        function updateWord() {
            index = (index + 1) % words.length;
            element.innerText = words[index];
        }

        timeline
            .to(element, { opacity: 0, onComplete: updateWord })
            .set(element, { opacity: 0 })
            .to(element, { opacity: 1 })
            .to({}, { duration: 2 });
    };

    animateWords("word1", [
        "Affordable", "Reliable", "Efficient", "Responsive", "Intuitive",
        "Elegant", "User-Friendly", "Dynamic", "Accessible", "Innovative",
        "Scalable", "Functional", "Efficient"
    ]);

    animateWords("word2", [
        "New Businesses", "Restaurants", "Start-Ups", "Roofers", "Non-profits",
        "Authors", "Online Stores", "Game Shops", "Tattoo Artists",
        "Plumbers", "Electricians", "Every Business"
    ]);
});

// Reusable fade animations
const fadeInUp = (target) => gsap.to(target, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" });
const fadeInStagger = (targets, options = { opacity: 1, duration: 0.8, stagger: 0.3 }) => gsap.to(targets, options);
const fadeInUpStagger = (targets, options = { opacity: 1, y: 0, duration: 1, stagger: { amount: 0.5, from: "end" } }) => gsap.to(targets, options);

// Reusable ScrollTrigger configuration
const createScrollTrigger = (trigger, animationFn, targets) => {
    ScrollTrigger.create({
        trigger,
        start: "top 80%",
        onEnter: () => animationFn(targets),
        toggleActions: "play none none none",
        once: true
    });
};

// ScrollTrigger animations
document.addEventListener("DOMContentLoaded", () => {
    // Section-specific animations
    createScrollTrigger("#what-we-do", fadeInUp, ".wwd_fade-element");
    createScrollTrigger(".wwd_fade-stagger-trigger", fadeInStagger, ".wwd_fade-stagger-element");
    createScrollTrigger("#our-prices", fadeInUp, ".op_fade-element");
    createScrollTrigger(".op_fade-stagger-trigger", fadeInUpStagger, ".op_fade-stagger-element");
    createScrollTrigger("#whats-included", fadeInUp, ".wi_fade-element");
    createScrollTrigger(".wi_fade-stagger-trigger", fadeInStagger, ".wi_fade-stagger-element");
    createScrollTrigger("#who-we-are", fadeInUp, ".wwa_fade-element");
    createScrollTrigger("#portfolio", fadeInUp, ".p_fade-element");
});
