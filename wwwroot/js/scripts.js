// AOS
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

