window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    if (loader) loader.style.display = "none";
});




const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger?.addEventListener("click", () => {
    navLinks?.classList.toggle("show");
});




document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute("href"));
        target?.scrollIntoView({ behavior: "smooth" });
        if (window.innerWidth < 768) navLinks?.classList.remove("show");
    });
});




function validateForm(formId) {
    const form = document.getElementById(formId);
    if (!form) return;

    form.addEventListener("submit", e => {
        e.preventDefault();
        const inputs = form.querySelectorAll("input, textarea");
        let valid = true;

        inputs.forEach(input => {
            const value = input.value.trim();
            if (!value) valid = false;
            if (input.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                valid = false;
            }
        });

        alert(valid ? "Thank you! Your message has been submitted." : "Please fill out all fields correctly.");
        if (valid) form.reset();
    });
}



["contactForm", "newsletterForm", "consultForm", "consultation-form", "consultationForm"].forEach(validateForm);