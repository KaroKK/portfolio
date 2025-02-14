// AOS Initialization
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
