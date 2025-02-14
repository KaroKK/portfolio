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

    gsap.from(".section-reveal", {
        height: 0, // Sekcja startuje jako niewidoczna
        duration: 1,
        ease: "power4.inOut",
        scrollTrigger: {
            trigger: ".section-reveal",
            start: "top 80%", // Start, gdy sekcja osiągnie 80% wysokości okna
            end: "bottom 20%",
            scrub: true,
        },
    });
});
