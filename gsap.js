gsap.registerPlugin(ScrollTrigger);

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

document.addEventListener("DOMContentLoaded", () => {
    // first text fade up
    const fadeInUp = (target) => {
        return gsap.to(
            target,
            { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, // Starting state
        );
    };

    const fadeIn_stagger = (targets) => {
        return gsap.to(
            targets,
            { opacity: 1, duration: 0.8, stagger: 0.3 }
        )
    }

    const fadeInUp_stagger = (targets) => {
        return gsap.to(
            targets,
            { opacity: 1, y: 0, duration: 1, stagger: { amount: 0.5, from: "end" } }
        )
    }


    // what we do section text fade up
    ScrollTrigger.create({
        trigger: "#what-we-do", // Container that triggers the animation
        start: "top 80%", // Trigger point for the container
        onEnter: () => fadeInUp(".wwd_fade-element"), // Animate all tiles
        toggleActions: "play none none none", // Play only on enter
        once: true,
    });

    // what we do tile fade in
    ScrollTrigger.create({
        trigger: ".wwd_fade-stagger-trigger", // Container that triggers the animation
        start: "top 80%", // Trigger point for the container
        onEnter: () => fadeIn_stagger(".wwd_fade-stagger-element"), // Animate all tiles
        toggleActions: "play none none none", // Play only on enter
        once: true,
    });

    // pricing section text fade up
    ScrollTrigger.create({
        trigger: "#our-prices", // Container that triggers the animation
        start: "top 80%", // Trigger point for the container
        onEnter: () => fadeInUp(".op_fade-element"), // Animate all tiles
        toggleActions: "play none none none", // Play only on enter
        once: true,
    });

    // our Prices tile fade in
    ScrollTrigger.create({
        trigger: ".op_fade-stagger-trigger", // Container that triggers the animation
        start: "top 80%", // Trigger point for the container
        onEnter: () => fadeInUp_stagger(".op_fade-stagger-element"), // Animate all tiles
        toggleActions: "play none none none", // Play only on enter
        once: true,
    });

    // whats included section text fade up
    ScrollTrigger.create({
        trigger: "#whats-included", // Container that triggers the animation
        start: "top 80%", // Trigger point for the container
        onEnter: () => fadeInUp(".wi_fade-element"), // Animate all tiles
        toggleActions: "play none none none", // Play only on enter
        once: true,
    });

    // whats included tile fade in
    ScrollTrigger.create({
        trigger: ".wi_fade-stagger-trigger", // Container that triggers the animation
        start: "top 80%", // Trigger point for the container
        onEnter: () => fadeIn_stagger(".wi_fade-stagger-element"), // Animate all tiles
        toggleActions: "play none none none", // Play only on enter
        once: true,
    });

    // who we are section text fade up
    ScrollTrigger.create({
        trigger: "#who-we-are", // Container that triggers the animation
        start: "top 80%", // Trigger point for the container
        onEnter: () => fadeInUp(".wwa_fade-element"), // Animate all tiles
        toggleActions: "play none none none", // Play only on enter
        once: true,
    });

    // portfolio section text fade up
    ScrollTrigger.create({
        trigger: "#portfolio", // Container that triggers the animation
        start: "top 80%", // Trigger point for the container
        onEnter: () => fadeInUp(".p_fade-element"), // Animate all tiles
        toggleActions: "play none none none", // Play only on enter
        once: true,
    });
});