// AOS
AOS.init({
    duration: 900,
    once: false,
});

// Scroll-based header animation
document.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    if (window.scrollY > 60) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// Cards

document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".project-card").forEach(card => {
        gsap.from(card, {
            scale: 1.2,        
            opacity: 0,        
            duration: 1,      
            ease: "power2.out",
            scrollTrigger: {
                trigger: card,   
                start: "top 85%",  
                end: "top 50%",   
                scrub: false,     
                toggleActions: "play none none reverse" 
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    console.log("scripts.js ok"); 

    if (typeof gsap === "undefined") {
        console.error("kein GSAP!");
        return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const logo = document.querySelector(".navbar-logo");

    if (logo) {
        gsap.from(logo, {
            opacity: 0,
            scale: 2,
            duration: 1,
            ease: "power2.out"
        });

        gsap.to(logo, {
            scrollTrigger: {
                trigger: ".navbar",
                start: "top top",
                scrub: true
            },
            scale: 0.8,
            transformOrigin: "center center"
        });
    } 
});

