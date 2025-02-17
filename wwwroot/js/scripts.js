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

    gsap.utils.toArray(".project-card").forEach(card => {
        gsap.from(card, {
            y: -400,                   
            opacity: 0,               
            duration: 0.5,             
            ease: "bounce.out",        
            scrollTrigger: {
                trigger: card,         
                start: "top 90%",       
                toggleActions: "play none none reverse"
            }
        });
    });
});