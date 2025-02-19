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

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); 

        // Form
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
            alert("Bitte, alles ausfüllen!!");
            return;
        }

        setTimeout(() => {
            alert(`Danke, ${name}! Ihre Nachricht wurde gesendet.`);
            form.reset(); 
        }, 1000);
    });
});
