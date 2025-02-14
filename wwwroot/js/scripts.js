﻿// AOS
AOS.init({
    duration: 900,
    once: false,
});

// Scroll-based header animation
document.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    // GSAP Animation (blocks falling down)
    gsap.utils.toArray(".project-card").forEach(card => {
        gsap.from(card, {
            y: -150,            
            opacity: 0,         
            ease: "bounce.out",
            duration: 0.8,
            scrollTrigger: {
                trigger: ".project-container",
                start: "top 90%",
                toggleActions: "play none none reverse"
            }
        });
    });
});
